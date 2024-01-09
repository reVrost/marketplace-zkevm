import { Web3Provider } from "@ethersproject/providers";
import { checkout } from "@imtbl/sdk";
import { useContext, useEffect } from "react";
import { handleOrchestrationEvent } from "./orchestration";
import { hideAllWidgets, WidgetContext } from "./orchestration";

export function useConnectWidget(setWeb3Provider: (val: Web3Provider) => void) {
  const { showWidgets, setShowWidgets } = useContext(WidgetContext);
  const { showConnect, showWallet, showBridge, showSwap } = showWidgets;

  useEffect(() => {
    const handleConnectEvent = ((event: CustomEvent) => {
      switch (event.detail.type) {
        case checkout.ConnectEventType.SUCCESS: {
          const eventData = event.detail.data;
          setWeb3Provider(eventData.provider);
          break;
        }
        case checkout.ConnectEventType.FAILURE: {
          // const eventData = event.detail.data as ConnectionFailed;
          break;
        }
        case checkout.ConnectEventType.CLOSE_WIDGET: {
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
          break;
      }
    }) as EventListener;

    if (showConnect || showWallet || showBridge || showSwap) {
      window.addEventListener(
        checkout.IMTBLWidgetEvents.IMTBL_CONNECT_WIDGET_EVENT,
        handleConnectEvent,
      );
    }

    return () => {
      window.removeEventListener(
        checkout.IMTBLWidgetEvents.IMTBL_CONNECT_WIDGET_EVENT,
        handleConnectEvent,
      );
    };
  }, [showConnect, showWallet, showBridge, showSwap]);
}
