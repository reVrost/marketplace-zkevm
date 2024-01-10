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
import { PassportInstance, WidgetContext } from "@/hooks/orchestration";
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import { checkout, config, passport } from "@imtbl/sdk";

const passportProvider = PassportInstance.connectEvm();

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

  // Widget context state for showing/hiding widgets
  const { web3Provider, setWeb3Provider } = useContext(Web3Context);
  const { connectWidget, walletWidget, setProvider } =
    useContext(WidgetContext);

  useEffect(() => {
    if (!connectWidget) return;
    connectWidget.addListener(checkout.ConnectEventType.SUCCESS, (data) => {
      // setGoToBalances(true);
      console.log("SUCCESS CONNECT", data.provider);
      setWeb3Provider(data.provider);
      setProvider(data.provider);
    });
    connectWidget.addListener(checkout.ConnectEventType.CLOSE_WIDGET, () => {
      connectWidget.unmount();
    });

    if (!walletWidget) return;
    walletWidget.addListener(checkout.WalletEventType.CLOSE_WIDGET, () => {
      walletWidget.unmount();
    });
    return () => {
      connectWidget?.unmount();
      walletWidget?.unmount();
    };
  }, [connectWidget, walletWidget, setProvider]);

  // Controls the opening and closing of the widget window
  const openConnectWidget = useCallback(() => {
    connectWidget?.mount("connect-widget");
  }, []);

  const openWalletWidget = useCallback(() => {
    walletWidget?.mount("wallet-widget");
  }, []);

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

  const passportLogin = async () => {
    try {
      console.log("START");
      const requestAcc = await passportProvider.request({
        method: "eth_requestAccounts",
      });
      console.log("requestAcc", requestAcc);
      const userinfo = await PassportInstance.getUserInfo();
      console.log(userinfo);
    } catch (err) {
      console.warn(err);
    }
    console.log("DONE");
  };

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
            {web3Provider === undefined ? "Connect" : "My Wallet"}
          </Button>
          <Button onClick={passportLogin}>Passport</Button>
          {web3Provider ? (
            <Button
              onClick={() => {
                console.log("Disconnected");
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
        <div id="wallet-widget"></div>
      </Group>
    </Header>
  );
}
