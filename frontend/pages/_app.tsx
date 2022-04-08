import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { MsalProvider } from "@azure/msal-react";
import {
  EventType,
  EventMessage,
  PublicClientApplication,
  AuthenticationResult,
} from "@azure/msal-browser";
// local imports
import theme from "../src/theme";
import createEmotionCache from "../src/utils/createEmotionCache";
import Layout from "../src/components/Layout";
import Skills from "../src/containers/skillsContainer";
import Search from "../src/containers/searchContainer";
import { msalConfig } from "../src/authConfig";
import { CustomNavigationClient } from "../src/NavigationClient";
import * as ga from "../src/lib/ga";
import { useRouter } from "next/router";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// MSAL
export const msalInstance = new PublicClientApplication(msalConfig);

// Account selection logic is app dependent. Adjust as needed for different use cases.
const accounts = msalInstance.getAllAccounts();
if (accounts.length > 0) {
  msalInstance.setActiveAccount(accounts[0]);
}

msalInstance.addEventCallback((event: EventMessage) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    const payload = event.payload as AuthenticationResult;
    const account = payload.account;
    msalInstance.setActiveAccount(account);
  }
});

interface IAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: IAppProps) => {
  const router = useRouter();
  const navigationClient = new CustomNavigationClient(router);
  msalInstance.setNavigationClient(navigationClient);

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // function to track page views for GA
  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>AVAST Skills Matcher</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <MsalProvider instance={msalInstance}>
          <Skills.Provider>
            <Search.Provider>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Search.Provider>
          </Skills.Provider>
        </MsalProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
