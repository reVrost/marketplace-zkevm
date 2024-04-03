import { useCallback, useContext, useEffect, useState } from "react";
import Link from "next/link";
import {
  Button,
  Container,
  createStyles,
  Group,
  Header,
  rem,
  Text,
} from "@mantine/core";

import { IconWallet } from "@tabler/icons-react";
import { Web3Context } from "@/contexts/Web3ProviderContext";
import { WidgetContext } from "@/hooks/orchestration";
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import { checkout } from "@imtbl/sdk";
import { passportSDK } from "@/sdk/immutable";
import { useLocalStorage } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: rem(56),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface HeaderSearchProps {
  links: { link: string; label: string }[];
}

export function HeaderSearch({ links }: HeaderSearchProps) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(links[0].link);
  const [passport, setPassport] = useLocalStorage<string>({
    key: "passport",
    defaultValue: "",
  });

  // Widget context state for showing/hiding widgets
  const { web3Provider, setWeb3Provider, userAddress, setUserAddress } =
    useContext(Web3Context);
  const { connectWidget, walletWidget, bridgeWidget, setProvider } =
    useContext(WidgetContext);

  useEffect(() => {
    if (!connectWidget) return;
    connectWidget.addListener(
      checkout.ConnectEventType.SUCCESS,
      async (data) => {
        // setGoToBalances(true);
        const user = await passportSDK.getUserInfo();
        const passportProvider = passportSDK.connectEvm();
        if (user && passportProvider) {
          const connectedWallet = (await passportProvider.send(
            "eth_requestAccounts",
            [],
          )) as any;
          if (!connectedWallet) {
            return;
          }
          console.log("con", connectedWallet);
          setUserAddress(connectedWallet);
          setPassport(connectedWallet);
          setWeb3Provider(passportProvider as any);
          setProvider(passportProvider as any);
        } else {
          setWeb3Provider(data.provider);
          setProvider(data.provider);
        }
      },
    );
    connectWidget.addListener(checkout.ConnectEventType.CLOSE_WIDGET, () => {
      connectWidget.unmount();
    });

    if (!walletWidget) return;
    walletWidget.addListener(checkout.WalletEventType.CLOSE_WIDGET, () => {
      walletWidget.unmount();
    });

    if (!bridgeWidget) return;
    bridgeWidget.mount("bridge");

    bridgeWidget.addListener(
      checkout.BridgeEventType.TRANSACTION_SENT,
      (data: checkout.BridgeTransactionSent) => {
        console.log("success", data);
      },
    );
    bridgeWidget.addListener(
      checkout.BridgeEventType.FAILURE,
      (data: checkout.BridgeFailed) => {
        console.log("failure", data);
      },
    );
    bridgeWidget.addListener(checkout.BridgeEventType.CLOSE_WIDGET, () => {
      bridgeWidget.unmount();
    });

    return () => {
      connectWidget?.unmount();
      walletWidget?.unmount();
      bridgeWidget?.unmount();
    };
  }, [connectWidget, walletWidget, bridgeWidget, setProvider]);

  let shortAddress = "";
  if (userAddress !== "" && userAddress !== undefined) {
    try {
      shortAddress = userAddress!.substring(0, 8) + "...";
    } catch (e) {
      console.log(userAddress);
    }
  }

  // Controls the opening and closing of the widget window
  const openBridgeWidget = () => {
    bridgeWidget?.mount("connect-widget");
  };
  const openConnectWidget = () => {
    connectWidget?.mount("connect-widget");
  };
  const openWalletWidget = () => {
    walletWidget?.mount("connect-widget");
  };

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={56} className={classes.header} mb={120}>
      <Container size="lg" className={classes.inner}>
        <Group spacing="xs">
          <Text variant="gradient" component="span" weight="600">
            Marketplace
          </Text>
        </Group>

        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            {items}
          </Group>
          <ColorSchemeToggle />
          <Button
            leftIcon={<IconWallet size="1rem" />}
            onClick={web3Provider ? openWalletWidget : openConnectWidget}
            variant="light"
          >
            {web3Provider === undefined ? "Connect" : shortAddress}
          </Button>
          <Button
            leftIcon={<IconWallet size="1rem" />}
            onClick={openBridgeWidget}
            disabled={web3Provider == null}
            variant="light"
          >
            Bridge
          </Button>
          {web3Provider ? (
            <Button
              onClick={() => {
                console.log("Disconnected");
                setPassport("");
                setUserAddress("");
                setWeb3Provider(undefined);
                setProvider(undefined);
              }}
              variant="light"
            >
              Disconnect
            </Button>
          ) : (
            <></>
          )}
        </Group>
      </Container>
      <Group position="right">
        <div id="connect-widget"></div>
      </Group>
    </Header>
  );
}
