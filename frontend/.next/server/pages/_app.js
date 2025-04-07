"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/WHOI-logo-notext.c72f66a1.png","height":54,"width":55,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXEOpuEOruQNvMMMirkPsegLsOYUb7YOvsQPbrYcsN8PvMQSarUObrUQc7cnVaoPs78LreQSt9cLu8MPcLgIa7QJbbV8kAbgAAAAF3RSTlMAUnWFGWCFgm+UD1slVDEVUpIqkUVmrn7M8DMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA+SURBVAiZBcEHAoAgDACxY7ZQNur/n2oC1dSnCkfvctsfLIRYc07oNXDbExQgZdZo7XmHY0qR8smE2KX0yA9H6gINY4vTHgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "msalInstance": () => (/* binding */ msalInstance)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3139);
/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2766);
/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(572);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_browser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6465);
/* harmony import */ var _src_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1843);
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1415);
/* harmony import */ var _src_containers_skillsContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5137);
/* harmony import */ var _src_containers_searchContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5767);
/* harmony import */ var _src_authConfig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4844);
/* harmony import */ var _src_NavigationClient__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6183);
/* harmony import */ var _src_lib_ga__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9245);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_5__, _src_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_9__, _src_components_Layout__WEBPACK_IMPORTED_MODULE_10__, _src_containers_skillsContainer__WEBPACK_IMPORTED_MODULE_11__]);
([_emotion_react__WEBPACK_IMPORTED_MODULE_5__, _src_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_9__, _src_components_Layout__WEBPACK_IMPORTED_MODULE_10__, _src_containers_skillsContainer__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// local imports









// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = (0,_src_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
// MSAL
const msalInstance = new _azure_msal_browser__WEBPACK_IMPORTED_MODULE_7__.PublicClientApplication(_src_authConfig__WEBPACK_IMPORTED_MODULE_13__/* .msalConfig */ .X);
// Account selection logic is app dependent. Adjust as needed for different use cases.
const accounts = msalInstance.getAllAccounts();
if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
}
msalInstance.addEventCallback((event)=>{
    if (event.eventType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_7__.EventType.LOGIN_SUCCESS && event.payload) {
        const payload = event.payload;
        const account = payload.account;
        msalInstance.setActiveAccount(account);
    }
});
const MyApp = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter)();
    const navigationClient = new _src_NavigationClient__WEBPACK_IMPORTED_MODULE_14__/* .CustomNavigationClient */ .E(router);
    msalInstance.setNavigationClient(navigationClient);
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    // function to track page views for GA
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        const handleRouteChange = (url)=>{
            _src_lib_ga__WEBPACK_IMPORTED_MODULE_16__/* .pageview */ .L(url);
        };
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on("routeChangeComplete", handleRouteChange);
        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [
        router.events
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react__WEBPACK_IMPORTED_MODULE_5__.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "AVAST Skills Matcher"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
                theme: _src_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_azure_msal_react__WEBPACK_IMPORTED_MODULE_6__.MsalProvider, {
                    instance: msalInstance,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_containers_skillsContainer__WEBPACK_IMPORTED_MODULE_11__/* ["default"].Provider */ .Z.Provider, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_containers_searchContainer__WEBPACK_IMPORTED_MODULE_12__/* ["default"].Provider */ .Z.Provider, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                        ...pageProps
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ CustomNavigationClient)
/* harmony export */ });
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__);

/**
 * This is an example for overriding the default function MSAL uses to navigate to other urls in your webpage
 */ class CustomNavigationClient extends _azure_msal_browser__WEBPACK_IMPORTED_MODULE_0__.NavigationClient {
    constructor(router){
        super();
        this.router = router;
    }
    /**
   * Navigates to other pages within the same web application
   * You can use the useRouter hook provided by next.js to take advantage of client-side routing
   * @param url
   * @param options
   */ async navigateInternal(url, options) {
        const relativePath = url.replace(window.location.origin, "");
        if (options.noHistory) {
            this.router.replace(relativePath);
        } else {
            this.router.push(relativePath);
        }
        return false;
    }
}


/***/ }),

/***/ 4844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ loginRequest),
/* harmony export */   "X": () => (/* binding */ msalConfig)
/* harmony export */ });
// Config object to be passed to Msal on creation
const msalConfig = {
    auth: {
        clientId: "78cfd052-b92f-4221-a336-83c37bec0d48",
        authority: "https://login.microsoftonline.com/d44c5cc6-d18c-46cc-8abd-4fdf5b6e5944",
        redirectUri: "https://skillsdb.whoi.edu",
        postLogoutRedirectUri: "https://skillsdb.whoi.edu"
    }
};
// Add here scopes for id token to be used at MS Identity Platform endpoints.
const loginRequest = {
    scopes: [
        "User.Read"
    ]
};


/***/ }),

/***/ 9281:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AccountMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8125);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7229);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8281);
/* harmony import */ var _mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6508);
/* harmony import */ var _AuthUi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6359);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_10__, _AuthUi__WEBPACK_IMPORTED_MODULE_11__]);
([_src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_10__, _AuthUi__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function AccountMenu() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { profile  } = (0,_src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const handleLink = (link)=>{
        router.push(link);
    };
    if (!profile) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_8___default()), {
                title: "Account settings",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                    variant: "text",
                    "aria-label": "account of current user",
                    onClick: handleMenuClick,
                    color: "inherit",
                    endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3___default()), {
                        alt: profile.firstName,
                        src: profile.avatar
                    }),
                    children: [
                        "Welcome ",
                        profile.firstName
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_4___default()), {
                anchorEl: anchorEl,
                open: open,
                onClose: handleClose,
                onClick: handleClose,
                PaperProps: {
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiSvgIcon-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0
                        }
                    }
                },
                transformOrigin: {
                    horizontal: "right",
                    vertical: "top"
                },
                anchorOrigin: {
                    horizontal: "right",
                    vertical: "bottom"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5___default()), {
                        onClick: ()=>handleLink("/profile/me"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_9___default()), {}),
                            " Manage account"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_6___default()), {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AuthUi__WEBPACK_IMPORTED_MODULE_11__/* .SignOutButton */ .AM, {})
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6359:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AM": () => (/* binding */ SignOutButton),
/* harmony export */   "xh": () => (/* binding */ SignInSignOutButton)
/* harmony export */ });
/* unused harmony exports SignInButton, WelcomeName */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2766);
/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(572);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_browser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _authConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4844);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3787);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9801);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _AccountMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9281);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AccountMenu__WEBPACK_IMPORTED_MODULE_10__]);
_AccountMenu__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const SignInButton = ()=>{
    const { instance  } = (0,_azure_msal_react__WEBPACK_IMPORTED_MODULE_2__.useMsal)();
    const handleLogin = (loginType)=>{
        if (loginType === "popup") {
            instance.loginPopup(_authConfig__WEBPACK_IMPORTED_MODULE_4__/* .loginRequest */ .Q);
        } else if (loginType === "redirect") {
            instance.loginRedirect(_authConfig__WEBPACK_IMPORTED_MODULE_4__/* .loginRequest */ .Q);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
            color: "inherit",
            onClick: ()=>handleLogin("redirect"),
            children: "Login"
        })
    });
};
const SignOutButton = ()=>{
    const { instance  } = (0,_azure_msal_react__WEBPACK_IMPORTED_MODULE_2__.useMsal)();
    const handleLogout = (logoutType)=>{
        if (logoutType === "popup") {
            instance.logoutPopup();
        } else if (logoutType === "redirect") {
            instance.logoutRedirect();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7___default()), {
        onClick: ()=>handleLogout("popup"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_8___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9___default()), {
                    fontSize: "small"
                })
            }),
            "Logout"
        ]
    });
};
const SignInSignOutButton = ()=>{
    const { inProgress  } = (0,_azure_msal_react__WEBPACK_IMPORTED_MODULE_2__.useMsal)();
    const isAuthenticated = (0,_azure_msal_react__WEBPACK_IMPORTED_MODULE_2__.useIsAuthenticated)();
    if (isAuthenticated) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AccountMenu__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {});
    } else if (inProgress !== _azure_msal_browser__WEBPACK_IMPORTED_MODULE_3__.InteractionStatus.Startup && inProgress !== _azure_msal_browser__WEBPACK_IMPORTED_MODULE_3__.InteractionStatus.HandleRedirect) {
        // inProgress check prevents sign-in button from being displayed briefly after returning from a redirect sign-in. Processing the server response takes a render cycle or two
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SignInButton, {});
    } else {
        return null;
    }
};
const WelcomeName = ()=>{
    const { accounts  } = useMsal();
    const { 0: name , 1: setName  } = useState(null);
    useEffect(()=>{
        if (accounts.length > 0) {
            setName(accounts[0].name?.split(" ")[0]);
        } else {
            setName(null);
        }
    }, [
        accounts
    ]);
    if (name) {
        return /*#__PURE__*/ _jsxs(Typography, {
            variant: "body1",
            children: [
                "Welcome, ",
                name
            ]
        });
    } else {
        return null;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9704:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FavoritesList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4192);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(834);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1011);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3787);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8315);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_Stars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2473);
/* harmony import */ var _mui_icons_material_Stars__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Stars__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_useProfile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6508);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useProfile__WEBPACK_IMPORTED_MODULE_10__]);
_hooks_useProfile__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function FavoritesList() {
    const { profile  } = (0,_hooks_useProfile__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    function handleLink(expertId) {
        router.push("/experts/" + expertId);
    }
    function renderFavoritesList(favorite) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4___default()), {
            disablePadding: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_5___default()), {
                onClick: ()=>handleLink(favorite.expert),
                dense: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Stars__WEBPACK_IMPORTED_MODULE_9___default()), {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7___default()), {
                        id: favorite.id.toString(),
                        primary: `${favorite.expertFirstName} ${favorite.expertLastName}`
                    })
                ]
            })
        }, favorite.id);
    }
    if (!profile?.favorites) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                component: "h6",
                variant: "subtitle1",
                sx: {
                    pl: 2,
                    mt: 2
                },
                children: "Your Favorites"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_List__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: profile.favorites?.map((item)=>{
                    return renderFavoritesList(item);
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1415:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3882);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7898);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1431);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6959);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2818);
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4557);
/* harmony import */ var _SkillsFilter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6944);
/* harmony import */ var _public_WHOI_logo_notext_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8762);
/* harmony import */ var _SearchField__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7150);
/* harmony import */ var _FavoritesList__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9704);
/* harmony import */ var _AuthUi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6359);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SkillsFilter__WEBPACK_IMPORTED_MODULE_15__, _FavoritesList__WEBPACK_IMPORTED_MODULE_18__, _AuthUi__WEBPACK_IMPORTED_MODULE_19__]);
([_SkillsFilter__WEBPACK_IMPORTED_MODULE_15__, _FavoritesList__WEBPACK_IMPORTED_MODULE_18__, _AuthUi__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const drawerWidth = 240;
const Main = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("main", {
    shouldForwardProp: (prop)=>prop !== "open"
})(({ theme , open  })=>({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: `-${drawerWidth}px`,
        ...open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
            marginLeft: 0
        }
    }));
const AppBar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4___default()), {
    shouldForwardProp: (prop)=>prop !== "open"
})(({ theme , open  })=>({
        transition: theme.transitions.create([
            "margin",
            "width"
        ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        ...open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create([
                "margin",
                "width"
            ], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            })
        }
    }));
const DrawerHeader = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")(({ theme  })=>({
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    }));
const Layout = ({ children  })=>{
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(true);
    const handleDrawerOpen = ()=>{
        setOpen(true);
    };
    const handleDrawerClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
        sx: {
            display: "flex"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppBar, {
                position: "fixed",
                open: open,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7___default()), {
                    sx: {
                        bgcolor: "primary.dark"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                            color: "inherit",
                            "aria-label": "open drawer",
                            onClick: handleDrawerOpen,
                            edge: "start",
                            sx: {
                                mr: 2,
                                ...open && {
                                    display: "none"
                                }
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_11___default()), {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                            sx: {
                                px: 2,
                                mt: 0.5
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .C, {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: _public_WHOI_logo_notext_png__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
                                    alt: "WHOI Logo"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .C, {
                            href: "/",
                            underline: "none",
                            sx: {
                                color: "white"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                variant: "h6",
                                noWrap: true,
                                component: "div",
                                children: "AVAST Skills Matcher DB"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchField__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                            sx: {
                                display: "flex",
                                flexGrow: 1,
                                alignItems: "center",
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .C, {
                                    href: "/",
                                    underline: "hover",
                                    sx: {
                                        color: "white",
                                        minWidth: 100
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        children: "SMEs"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .C, {
                                    href: "/projects",
                                    underline: "hover",
                                    sx: {
                                        color: "white",
                                        minWidth: 100
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        children: "Projects"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .C, {
                                    href: "/about",
                                    underline: "hover",
                                    sx: {
                                        color: "white",
                                        minWidth: 100
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        children: "About"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                            sx: {
                                display: {
                                    xs: "none",
                                    md: "flex"
                                }
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AuthUi__WEBPACK_IMPORTED_MODULE_19__/* .SignInSignOutButton */ .xh, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6___default()), {
                sx: {
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box"
                    }
                },
                variant: "persistent",
                anchor: "left",
                open: open,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DrawerHeader, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
                            onClick: handleDrawerClose,
                            children: theme.direction === "ltr" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_12___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_13___default()), {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default()), {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SkillsFilter__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9___default()), {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FavoritesList__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Main, {
                open: open,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DrawerHeader, {}),
                    children
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SearchField)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/icons-material/Search"
const Search_namespaceObject = require("@mui/icons-material/Search");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/InputBase"
const InputBase_namespaceObject = require("@mui/material/InputBase");
var InputBase_default = /*#__PURE__*/__webpack_require__.n(InputBase_namespaceObject);
// EXTERNAL MODULE: ./src/containers/searchContainer.ts
var searchContainer = __webpack_require__(5767);
;// CONCATENATED MODULE: ./src/components/SearchField.tsx






const SearchBox = (0,styles_.styled)("div")(({ theme  })=>({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: (0,styles_.alpha)(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: (0,styles_.alpha)(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto"
        }
    }));
const SearchIconWrapper = (0,styles_.styled)("div")(({ theme  })=>({
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }));
const StyledInputBase = (0,styles_.styled)((InputBase_default()))(({ theme  })=>({
        color: "inherit",
        "& .MuiInputBase-input": {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("md")]: {
                width: "20ch"
            }
        }
    }));
function SearchField() {
    const search = searchContainer/* default.useContainer */.Z.useContainer();
    function handleSearchInput(event) {
        let terms = event.target.value;
        if (terms.length > 2) {
            search.setSearchTerms(terms);
        } else {
            search.setSearchTerms("");
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SearchBox, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SearchIconWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((Search_default()), {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledInputBase, {
                placeholder: "Search…",
                inputProps: {
                    "aria-label": "search"
                },
                onChange: (event)=>handleSearchInput(event)
            })
        ]
    });
}


/***/ }),

/***/ 6944:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6096);
/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8860);
/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3191);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_ClearAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9359);
/* harmony import */ var _mui_icons_material_ClearAll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ClearAll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _containers_skillsContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5137);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_skillsContainer__WEBPACK_IMPORTED_MODULE_8__]);
_containers_skillsContainer__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








//import useSkills, { Skill } from "../hooks/useSkills";

const SkillsFilter = ()=>{
    const skillsCtx = _containers_skillsContainer__WEBPACK_IMPORTED_MODULE_8__/* ["default"].useContainer */ .Z.useContainer();
    const selectedIDs = skillsCtx.selectedSkills.map((skill)=>skill.id);
    const renderSkillsList = (skill)=>{
        let hasChildren = false;
        if (skill.children.length) {
            hasChildren = true;
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControlLabel, {
                    label: skill.name,
                    control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
                        checked: selectedIDs.includes(skill.id),
                        onChange: (e)=>skillsCtx.changeSelectStatus(skill, e.target.checked)
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        display: "flex",
                        flexDirection: "column",
                        ml: 3
                    },
                    children: hasChildren && skill.children.map((child)=>renderSkillsList(child))
                })
            ]
        }, skill.id);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            px: 2
        },
        children: [
            skillsCtx.skills && skillsCtx.skills.map((skill)=>renderSkillsList(skill)),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4___default()), {
                component: "fieldset",
                variant: "standard",
                sx: {
                    my: 2
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3___default()), {
                        component: "legend",
                        children: "Filter Type"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControlLabel, {
                            control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Switch__WEBPACK_IMPORTED_MODULE_6___default()), {
                                checked: skillsCtx.filterInclusive,
                                onChange: (event)=>skillsCtx.setFilterInclusive(event.target.checked),
                                name: "filterType"
                            }),
                            label: "Inclusive"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "contained",
                sx: {
                    mb: 2
                },
                size: "small",
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ClearAll__WEBPACK_IMPORTED_MODULE_7___default()), {}),
                onClick: skillsCtx.clearSelectStatus,
                children: "Clear Filter"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkillsFilter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7441);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_1__);


function useSearch() {
    const [searchTerms, setSearchTerms] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
    return {
        searchTerms: searchTerms,
        setSearchTerms: setSearchTerms
    };
}
const Search = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__.createContainer)(useSearch);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);


/***/ }),

/***/ 9245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ pageview)
/* harmony export */ });
/* unused harmony export event */
// log the pageview with their URL
const pageview = (url)=>{
    window.gtag("config", "G-JDNMRQ0Q4K", {
        page_path: url
    });
};
// log specific events happening.
const event = ({ action , params  })=>{
    window.gtag("event", action, params);
};


/***/ }),

/***/ 6465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ src_theme)
});

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/material/colors"
const colors_namespaceObject = require("@mui/material/colors");
;// CONCATENATED MODULE: ./src/theme.ts


// Create a theme instance.
const theme = (0,styles_.createTheme)({
    palette: {
        primary: {
            main: "#0069B1",
            dark: "#041E42"
        },
        secondary: {
            //main: "#EE5340", // orange
            main: "#B7BF10"
        },
        error: {
            main: colors_namespaceObject.red.A400
        }
    }
});
/* harmony default export */ const src_theme = (theme);


/***/ }),

/***/ 1843:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createEmotionCache)
/* harmony export */ });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8440);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);
_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function createEmotionCache() {
    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: "css"
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 572:
/***/ ((module) => {

module.exports = require("@azure/msal-browser");

/***/ }),

/***/ 2766:
/***/ ((module) => {

module.exports = require("@azure/msal-react");

/***/ }),

/***/ 6959:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ChevronLeft");

/***/ }),

/***/ 2818:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ChevronRight");

/***/ }),

/***/ 9359:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ClearAll");

/***/ }),

/***/ 9801:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Logout");

/***/ }),

/***/ 8281:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ManageAccounts");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 2473:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Stars");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 4960:
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7898:
/***/ ((module) => {

module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 8891:
/***/ ((module) => {

module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 8860:
/***/ ((module) => {

module.exports = require("@mui/material/FormGroup");

/***/ }),

/***/ 6096:
/***/ ((module) => {

module.exports = require("@mui/material/FormLabel");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 5246:
/***/ ((module) => {

module.exports = require("@mui/material/Link");

/***/ }),

/***/ 4192:
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 1011:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemButton");

/***/ }),

/***/ 3787:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 8315:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 8125:
/***/ ((module) => {

module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 3191:
/***/ ((module) => {

module.exports = require("@mui/material/Switch");

/***/ }),

/***/ 1431:
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 7229:
/***/ ((module) => {

module.exports = require("@mui/material/Tooltip");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7441:
/***/ ((module) => {

module.exports = require("unstated-next");

/***/ }),

/***/ 8440:
/***/ ((module) => {

module.exports = import("@emotion/cache");;

/***/ }),

/***/ 3139:
/***/ ((module) => {

module.exports = import("@emotion/react");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,395,508,35,557], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();