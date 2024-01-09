import { Web3Provider } from "@ethersproject/providers";
import { checkout, config } from "@imtbl/sdk";
import { Group } from "@mantine/core";
import { ShowWidget } from "@/hooks/orchestration";
import React, { useEffect, useMemo } from "react";
import { passportSDK } from "@/sdk/immutable";
import { useSearchParams } from "next/navigation";

export interface ImtblWidgetsProps {
  web3Provider?: Web3Provider;
  showConnect: ShowWidget;
  showWallet: ShowWidget;
  showSwap: ShowWidget;
  showBridge: ShowWidget;
}

export const ImmutableWidget = ({ showConnect }: ImtblWidgetsProps) => {
  const searchparams = useSearchParams();
  const checkoutConfig = {
    environment: config.Environment.SANDBOX,
  };
  const co = useMemo(
    () =>
      new checkout.Checkout({
        baseConfig: checkoutConfig,
      }),
    [],
  );

  if (searchparams.get("code")) {
    passportSDK.loginCallback().catch((e) => {
      // this happens in local env only, when rendered on the dev server
      console.warn(e);
    });
  }

  // Load widgets bundle (this needs to be done only once)
  // Create + mount connect widget
  useEffect(() => {
    (async () => {
      const factory = await co.widgets({
        config: { theme: checkout.WidgetTheme.DARK },
      });
      const connect = factory.create(checkout.WidgetType.CONNECT);
      connect.mount("connect");
      connect.addListener(checkout.ConnectEventType.SUCCESS, (data: any) => {
        console.log(data);
      });
    })();
  }, [co]);

  return <Group>{showConnect.show && <div id="connect" />}</Group>;
};
