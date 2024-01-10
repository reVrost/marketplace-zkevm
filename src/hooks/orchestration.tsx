import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Web3Provider } from "@ethersproject/providers";
import { checkout, config, passport } from "@imtbl/sdk";

/** Create the passport instance once for the application */
export const PassportInstance = new passport.Passport({
  baseConfig: new config.ImmutableConfiguration({
    environment: config.Environment.SANDBOX,
    // publishableKey: "pk_imapik-test-xw7CFx0M-_EEOjFbShLx",
  }),
  // non production client id
  clientId: "4jz9egnVkDgdrYQZZH8yFuvbNY1GyqVb",
  // default next dev hosting
  redirectUri: "http://localhost:3000",
  logoutRedirectUri: "http://localhost:3000",
  audience: "platform_api",
  scope: "openid offline_access email transact",
});

/** Create the checkout instance once for the application and inject passport */
const checkoutInstance = new checkout.Checkout({
  baseConfig: new config.ImmutableConfiguration({
    environment: config.Environment.SANDBOX,
  }),
  passport: PassportInstance,
});

type WidgetParams = {
  connect: checkout.ConnectWidgetParams | null;
  wallet: checkout.WalletWidgetParams | null;
  swap: checkout.SwapWidgetParams | null;
  bridge: checkout.BridgeWidgetParams | null;
  onramp: checkout.OnRampWidgetParams | null;
  sale: checkout.SaleWidgetParams | null;
};

export interface WidgetContextState {
  connectWidget:
    | checkout.Widget<typeof checkout.WidgetType.CONNECT>
    | undefined;
  walletWidget: checkout.Widget<typeof checkout.WidgetType.WALLET> | undefined;
  bridgeWidget: checkout.Widget<typeof checkout.WidgetType.BRIDGE> | undefined;
  swapWidget: checkout.Widget<typeof checkout.WidgetType.SWAP> | undefined;
  onRampWidget: checkout.Widget<typeof checkout.WidgetType.ONRAMP> | undefined;
  saleWidget: checkout.Widget<typeof checkout.WidgetType.SALE> | undefined;
  checkout: checkout.Checkout | undefined;
  provider: Web3Provider | undefined;
  setProvider: Dispatch<SetStateAction<Web3Provider | undefined>>;
  passport: passport.Passport | undefined;
  factory: ImmutableCheckoutWidgets.WidgetsFactory | undefined;
  widgetData: WidgetParams;
  setWidgetData: Dispatch<SetStateAction<WidgetParams>>;
}

export const initialWidgetContextState: WidgetContextState = {
  connectWidget: undefined,
  walletWidget: undefined,
  bridgeWidget: undefined,
  swapWidget: undefined,
  onRampWidget: undefined,
  saleWidget: undefined,
  provider: undefined,
  checkout: undefined,
  setProvider: () => {},
  passport: undefined,
  factory: undefined,
  widgetData: {
    connect: null,
    wallet: null,
    swap: null,
    bridge: null,
    onramp: null,
    sale: null,
  },
  setWidgetData: () => {},
};

export const WidgetContext = createContext<WidgetContextState>(
  initialWidgetContextState,
);
WidgetContext.displayName = "Widget Context";

export interface WidgetProvider {
  children: React.ReactNode;
}

export const WidgetProvider = ({ children }: WidgetProvider) => {
  const [provider, setProvider] = useState<Web3Provider | undefined>();
  const [factory, setFactory] =
    useState<ImmutableCheckoutWidgets.WidgetsFactory>();
  const [widgetData, setWidgetData] = useState<WidgetParams>(
    initialWidgetContextState.widgetData,
  );

  const connectWidget = useMemo(
    () => factory?.create(checkout.WidgetType.CONNECT),
    [factory],
  );
  const walletWidget = useMemo(
    () => factory?.create(checkout.WidgetType.WALLET),
    [factory],
  );
  const bridgeWidget = useMemo(
    () => factory?.create(checkout.WidgetType.BRIDGE),
    [factory],
  );
  const swapWidget = useMemo(
    () => factory?.create(checkout.WidgetType.SWAP),
    [factory],
  );
  const onRampWidget = useMemo(
    () => factory?.create(checkout.WidgetType.ONRAMP),
    [factory],
  );
  const saleWidget = useMemo(
    () => factory?.create(checkout.WidgetType.SALE),
    [factory],
  );

  useEffect(() => {
    (async () => {
      try {
        const widgetsFactory = await checkoutInstance.widgets({
          config: { theme: checkout.WidgetTheme.DARK },
        });
        setFactory(widgetsFactory);
      } catch (err: any) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <WidgetContext.Provider
      value={{
        connectWidget,
        walletWidget,
        bridgeWidget,
        swapWidget,
        onRampWidget,
        saleWidget,
        provider,
        setProvider,
        checkout: checkoutInstance,
        passport: PassportInstance,
        factory,
        widgetData,
        setWidgetData,
      }}
    >
      {children}
    </WidgetContext.Provider>
  );
};
