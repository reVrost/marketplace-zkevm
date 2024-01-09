import { Web3Provider } from "@ethersproject/providers";
import { checkout } from "@imtbl/sdk";
import { useContext, useEffect } from "react";
import {
  handleOrchestrationEvent,
  hideAllWidgets,
  WidgetContext,
} from "./orchestration";

export function useWalletWidget(
  setWeb3Provider: (val: Web3Provider | undefined) => void,
) {
  const { showWidgets, setShowWidgets } = useContext(WidgetContext);
  const { showWallet } = showWidgets;

  useEffect(() => {
    const handleWalletWidgetEvents = ((event: CustomEvent) => {
      switch (event.detail.type) {
        case checkout.WalletEventType.NETWORK_SWITCH: {
          const eventData = event.detail.data;
          setWeb3Provider(eventData.provider);
          break;
        }
        case checkout.WalletEventType.DISCONNECT_WALLET: {
          setWeb3Provider(undefined);
          setShowWidgets(hideAllWidgets);
          break;
        }
        case checkout.WalletEventType.CLOSE_WIDGET: {
          setShowWidgets(hideAllWidgets);
          break;
        }
        case checkout.OrchestrationEventType.REQUEST_CONNECT:
        case checkout.OrchestrationEventType.REQUEST_WALLET:
        case checkout.OrchestrationEventType.REQUEST_SWAP:
        case checkout.OrchestrationEventType.REQUEST_BRIDGE: {
          handleOrchestrationEvent(event, setShowWidgets);
          break;
        }
        default:
          console.log("did not match any expected event type");
      }
    }) as EventListener;

    if (showWallet) {
      window.addEventListener(
        checkout.IMTBLWidgetEvents.IMTBL_WALLET_WIDGET_EVENT,
        handleWalletWidgetEvents,
      );
    }

    return () => {
      window.removeEventListener(
        checkout.IMTBLWidgetEvents.IMTBL_WALLET_WIDGET_EVENT,
        handleWalletWidgetEvents,
      );
    };
  }, [showWallet]);
}
