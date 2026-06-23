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
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3926);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9340);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3139);
/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2766);
/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(572);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_browser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(668);
/* harmony import */ var _src_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1843);
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1415);
/* harmony import */ var _src_containers_skillsContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5137);
/* harmony import */ var _src_containers_searchContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5767);
/* harmony import */ var _src_authConfig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4844);
/* harmony import */ var _src_NavigationClient__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6183);
/* harmony import */ var _src_lib_ga__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(9245);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _src_containers_intlTravelContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5049);
/* harmony import */ var _src_containers_urgentContainer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(200);
/* harmony import */ var _src_containers_fieldWorkContainer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7138);
/* harmony import */ var _src_containers_partTimeWorkContainer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3966);
/* harmony import */ var _src_containers_seagoingContainer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6800);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__, _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__, _emotion_react__WEBPACK_IMPORTED_MODULE_5__, _src_theme__WEBPACK_IMPORTED_MODULE_8__, _src_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_9__, _src_components_Layout__WEBPACK_IMPORTED_MODULE_10__, _src_containers_skillsContainer__WEBPACK_IMPORTED_MODULE_11__]);
([_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__, _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__, _emotion_react__WEBPACK_IMPORTED_MODULE_5__, _src_theme__WEBPACK_IMPORTED_MODULE_8__, _src_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_9__, _src_components_Layout__WEBPACK_IMPORTED_MODULE_10__, _src_containers_skillsContainer__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








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
            _src_lib_ga__WEBPACK_IMPORTED_MODULE_21__/* .pageview */ .L(url);
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
                        children: "WHOI Skills Matcher"
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
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_containers_searchContainer__WEBPACK_IMPORTED_MODULE_12__/* ["default"].Provider */ .Z.Provider, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_containers_intlTravelContainer__WEBPACK_IMPORTED_MODULE_16__/* ["default"].Provider */ .Z.Provider, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_containers_urgentContainer__WEBPACK_IMPORTED_MODULE_17__/* ["default"].Provider */ .Z.Provider, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_containers_fieldWorkContainer__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Provider */ .Z.Provider, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_containers_partTimeWorkContainer__WEBPACK_IMPORTED_MODULE_19__/* ["default"].Provider */ .Z.Provider, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_containers_seagoingContainer__WEBPACK_IMPORTED_MODULE_20__/* ["default"].Provider */ .Z.Provider, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
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
                            })
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
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2814);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1928);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8880);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2613);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1489);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(150);
/* harmony import */ var _mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(391);
/* harmony import */ var _src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6508);
/* harmony import */ var _AuthUi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6359);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3__, _mui_material_Menu__WEBPACK_IMPORTED_MODULE_4__, _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Divider__WEBPACK_IMPORTED_MODULE_6__, _mui_material__WEBPACK_IMPORTED_MODULE_7__, _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_8__, _mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_9__, _src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_10__, _AuthUi__WEBPACK_IMPORTED_MODULE_11__]);
([_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3__, _mui_material_Menu__WEBPACK_IMPORTED_MODULE_4__, _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Divider__WEBPACK_IMPORTED_MODULE_6__, _mui_material__WEBPACK_IMPORTED_MODULE_7__, _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_8__, _mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_9__, _src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_10__, _AuthUi__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_8__["default"], {
                title: "Account settings",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {
                    variant: "text",
                    "aria-label": "account of current user",
                    onClick: handleMenuClick,
                    color: "inherit",
                    endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        alt: profile.firstName,
                        src: profile.avatar
                    }),
                    children: [
                        "Welcome ",
                        profile.firstName
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        onClick: ()=>handleLink("/profile/me"),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_ManageAccounts__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
                            " Manage account"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
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
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2160);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3655);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8880);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2143);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6709);
/* harmony import */ var _AccountMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9281);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__, _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__, _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__, _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9__, _AccountMenu__WEBPACK_IMPORTED_MODULE_10__]);
([_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__, _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__, _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__, _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9__, _AccountMenu__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











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
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onClick: ()=>handleLogout("popup"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4082);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(853);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5613);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2143);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5427);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1489);
/* harmony import */ var _mui_icons_material_Stars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6770);
/* harmony import */ var _hooks_useProfile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6508);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_List__WEBPACK_IMPORTED_MODULE_3__, _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__, _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_5__, _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__, _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7__, _mui_material__WEBPACK_IMPORTED_MODULE_8__, _mui_icons_material_Stars__WEBPACK_IMPORTED_MODULE_9__, _hooks_useProfile__WEBPACK_IMPORTED_MODULE_10__]);
([_mui_material_List__WEBPACK_IMPORTED_MODULE_3__, _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__, _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_5__, _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__, _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7__, _mui_material__WEBPACK_IMPORTED_MODULE_8__, _mui_icons_material_Stars__WEBPACK_IMPORTED_MODULE_9__, _hooks_useProfile__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function FavoritesList() {
    const { profile  } = (0,_hooks_useProfile__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    function handleLink(expertId) {
        router.push("/experts/" + expertId);
    }
    function renderFavoritesList(favorite) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
            disablePadding: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
                onClick: ()=>handleLink(favorite.expert),
                dense: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Stars__WEBPACK_IMPORTED_MODULE_9__["default"], {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

/***/ 4527:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1489);
/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2355);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2556);
/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2389);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1676);
/* harmony import */ var _containers_fieldWorkContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7138);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material__WEBPACK_IMPORTED_MODULE_2__, _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__, _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__, _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__]);
([_mui_material__WEBPACK_IMPORTED_MODULE_2__, _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__, _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__, _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const FieldWorkFilter = ()=>{
    const fieldWorkCtx = _containers_fieldWorkContainer__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    console.log(fieldWorkCtx);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            px: 2
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
            component: "fieldset",
            variant: "standard",
            sx: {
                my: 2
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    component: "legend",
                    children: "Looking for Field Work"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControlLabel, {
                        control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            checked: fieldWorkCtx.lookingForFieldWork,
                            onChange: (event)=>fieldWorkCtx.setLookingForFieldWork(event.target.checked),
                            name: "lookingForFieldWork"
                        }),
                        label: "Yes"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldWorkFilter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4269:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1489);
/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2355);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2556);
/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2389);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1676);
/* harmony import */ var _containers_intlTravelContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5049);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material__WEBPACK_IMPORTED_MODULE_2__, _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__, _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__, _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__]);
([_mui_material__WEBPACK_IMPORTED_MODULE_2__, _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__, _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__, _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const IntlTravelFilter = ()=>{
    const intlTravelCtx = _containers_intlTravelContainer__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    console.log(intlTravelCtx);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            px: 2
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
            component: "fieldset",
            variant: "standard",
            sx: {
                my: 2
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    component: "legend",
                    children: "International Travel"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControlLabel, {
                        control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            checked: intlTravelCtx.internationalTravel,
                            onChange: (event)=>intlTravelCtx.setInternationalTravel(event.target.checked),
                            name: "internationalTravel"
                        }),
                        label: "Available"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntlTravelFilter);

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
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3926);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9801);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5859);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4465);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9968);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2160);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2613);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9095);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2222);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9307);
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2622);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4557);
/* harmony import */ var _SkillsFilter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6944);
/* harmony import */ var _public_WHOI_logo_notext_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8762);
/* harmony import */ var _SearchField__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6338);
/* harmony import */ var _FavoritesList__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9704);
/* harmony import */ var _AuthUi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6359);
/* harmony import */ var _IntlTravelFilter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4269);
/* harmony import */ var _UrgentFilter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8584);
/* harmony import */ var _FieldWorkFilter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(4527);
/* harmony import */ var _PartTimeWorkFilter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(9126);
/* harmony import */ var _SeagoingFilter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(651);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__, _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6__, _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__, _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__, _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__, _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_11__, _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_12__, _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_13__, _Link__WEBPACK_IMPORTED_MODULE_14__, _SkillsFilter__WEBPACK_IMPORTED_MODULE_15__, _SearchField__WEBPACK_IMPORTED_MODULE_17__, _FavoritesList__WEBPACK_IMPORTED_MODULE_18__, _AuthUi__WEBPACK_IMPORTED_MODULE_19__, _IntlTravelFilter__WEBPACK_IMPORTED_MODULE_20__, _UrgentFilter__WEBPACK_IMPORTED_MODULE_21__, _FieldWorkFilter__WEBPACK_IMPORTED_MODULE_22__, _PartTimeWorkFilter__WEBPACK_IMPORTED_MODULE_23__, _SeagoingFilter__WEBPACK_IMPORTED_MODULE_24__]);
([_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__, _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6__, _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__, _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__, _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__, _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_11__, _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_12__, _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_13__, _Link__WEBPACK_IMPORTED_MODULE_14__, _SkillsFilter__WEBPACK_IMPORTED_MODULE_15__, _SearchField__WEBPACK_IMPORTED_MODULE_17__, _FavoritesList__WEBPACK_IMPORTED_MODULE_18__, _AuthUi__WEBPACK_IMPORTED_MODULE_19__, _IntlTravelFilter__WEBPACK_IMPORTED_MODULE_20__, _UrgentFilter__WEBPACK_IMPORTED_MODULE_21__, _FieldWorkFilter__WEBPACK_IMPORTED_MODULE_22__, _PartTimeWorkFilter__WEBPACK_IMPORTED_MODULE_23__, _SeagoingFilter__WEBPACK_IMPORTED_MODULE_24__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

























const drawerWidth = 260;
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
const AppBar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
        sx: {
            display: "flex"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppBar, {
                position: "fixed",
                open: open,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    sx: {
                        bgcolor: "primary.dark"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_11__["default"], {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            sx: {
                                px: 2,
                                mt: 0.5
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Link__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .C, {
                                href: "/",
                                underline: "none",
                                sx: {
                                    color: "white"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                        variant: "h6",
                                        noWrap: true,
                                        component: "div",
                                        children: "WHOI Skills Matcher DB"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                        variant: "body2",
                                        children: "Created by DeepTech (under former Director Sam Laney) and IS"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SearchField__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                        children: "About"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
                            onClick: handleDrawerClose,
                            children: theme.direction === "ltr" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_12__["default"], {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_13__["default"], {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_IntlTravelFilter__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UrgentFilter__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FieldWorkFilter__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PartTimeWorkFilter__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SeagoingFilter__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SkillsFilter__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
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

/***/ 9126:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1489);
/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2355);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2556);
/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2389);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1676);
/* harmony import */ var _containers_partTimeWorkContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3966);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material__WEBPACK_IMPORTED_MODULE_2__, _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__, _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__, _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__]);
([_mui_material__WEBPACK_IMPORTED_MODULE_2__, _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__, _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__, _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const PartTimeWorkFilter = ()=>{
    const partTimeWorkCtx = _containers_partTimeWorkContainer__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            px: 2
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
            component: "fieldset",
            variant: "standard",
            sx: {
                my: 2
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    component: "legend",
                    children: "Looking for Part-time or Short-term Work"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControlLabel, {
                        control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            checked: partTimeWorkCtx.lookingForPartTimeWork,
                            onChange: (event)=>partTimeWorkCtx.setLookingForPartTimeWork(event.target.checked),
                            name: "lookingForPartTimeWork"
                        }),
                        label: "Yes"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PartTimeWorkFilter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 651:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1489);
/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2355);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2556);
/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2389);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1676);
/* harmony import */ var _containers_seagoingContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6800);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material__WEBPACK_IMPORTED_MODULE_2__, _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__, _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__, _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__]);
([_mui_material__WEBPACK_IMPORTED_MODULE_2__, _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__, _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__, _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const SeagoingFilter = ()=>{
    const seagoingCtx = _containers_seagoingContainer__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            px: 2
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
            component: "fieldset",
            variant: "standard",
            sx: {
                my: 2
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    component: "legend",
                    children: "Available for Seagoing Opportunities"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControlLabel, {
                        control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            checked: seagoingCtx.availableForSeagoing,
                            onChange: (event)=>seagoingCtx.setAvailableForSeagoing(event.target.checked),
                            name: "availableForSeagoing"
                        }),
                        label: "Yes"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeagoingFilter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6338:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3926);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3531);
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(800);
/* harmony import */ var _containers_searchContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5767);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__, _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_3__, _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_4__]);
([_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__, _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_3__, _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const SearchBox = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("div")(({ theme  })=>({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto"
        }
    }));
const SearchIconWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("div")(({ theme  })=>({
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }));
const StyledInputBase = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_4__["default"])(({ theme  })=>({
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
    const search = _containers_searchContainer__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useContainer */ .Z.useContainer();
    function handleSearchInput(event) {
        let terms = event.target.value;
        if (terms.length > 2) {
            search.setSearchTerms(terms);
        } else {
            search.setSearchTerms("");
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SearchBox, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchIconWrapper, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_3__["default"], {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledInputBase, {
                placeholder: "Search…",
                inputProps: {
                    "aria-label": "search"
                },
                onChange: (event)=>handleSearchInput(event)
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1489);
/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2355);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2556);
/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2389);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1676);
/* harmony import */ var _mui_icons_material_ClearAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6972);
/* harmony import */ var _containers_skillsContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5137);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material__WEBPACK_IMPORTED_MODULE_2__, _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__, _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__, _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__, _mui_icons_material_ClearAll__WEBPACK_IMPORTED_MODULE_7__, _containers_skillsContainer__WEBPACK_IMPORTED_MODULE_8__]);
([_mui_material__WEBPACK_IMPORTED_MODULE_2__, _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__, _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__, _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__, _mui_icons_material_ClearAll__WEBPACK_IMPORTED_MODULE_7__, _containers_skillsContainer__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








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
                    label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "body2",
                        color: "textSecondary",
                        children: skill.name
                    }),
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
                component: "fieldset",
                variant: "standard",
                sx: {
                    my: 2
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        component: "legend",
                        children: "Filter by Skills"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        children: skillsCtx.skills && skillsCtx.skills.map((skill)=>renderSkillsList(skill))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
                component: "fieldset",
                variant: "standard",
                sx: {
                    my: 2
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        component: "legend",
                        children: "Filter Type"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControlLabel, {
                            control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                checked: skillsCtx.filterInclusive,
                                onChange: (event)=>skillsCtx.setFilterInclusive(event.target.checked),
                                name: "filterType"
                            }),
                            label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "body2",
                                color: "textSecondary",
                                children: "Show SMEs who match ANY of the skills checked. Uncheck to limit search to ALL selected skills"
                            })
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
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_ClearAll__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
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

/***/ 8584:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1489);
/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2355);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2556);
/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2389);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1676);
/* harmony import */ var _containers_urgentContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(200);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material__WEBPACK_IMPORTED_MODULE_2__, _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__, _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__, _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__]);
([_mui_material__WEBPACK_IMPORTED_MODULE_2__, _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__, _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__, _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const UrgentFilter = ()=>{
    const urgentCtx = _containers_urgentContainer__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useContainer */ .Z.useContainer();
    console.log(urgentCtx);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            px: 2
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
            component: "fieldset",
            variant: "standard",
            sx: {
                my: 2
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    component: "legend",
                    children: "Urgently Seeking Project"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControlLabel, {
                        control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            checked: urgentCtx.urgentProjectSeek,
                            onChange: (event)=>urgentCtx.setUrgentProjectSeek(event.target.checked),
                            name: "urgentProjectSeek"
                        }),
                        label: "Yes"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UrgentFilter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7441);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_1__);


function useIntlTravel() {
    const [internationalTravel, setInternationalTravel] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    return {
        internationalTravel: internationalTravel,
        setInternationalTravel: setInternationalTravel
    };
}
const IntlTravel = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__.createContainer)(useIntlTravel);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntlTravel);


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

/***/ 668:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3926);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2280);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__, _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__]);
([_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__, _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// Create a theme instance.
const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
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
            main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 9307:
/***/ ((module) => {

module.exports = import("@mui/icons-material/ChevronLeft");;

/***/ }),

/***/ 2622:
/***/ ((module) => {

module.exports = import("@mui/icons-material/ChevronRight");;

/***/ }),

/***/ 6972:
/***/ ((module) => {

module.exports = import("@mui/icons-material/ClearAll");;

/***/ }),

/***/ 6709:
/***/ ((module) => {

module.exports = import("@mui/icons-material/Logout");;

/***/ }),

/***/ 391:
/***/ ((module) => {

module.exports = import("@mui/icons-material/ManageAccounts");;

/***/ }),

/***/ 2222:
/***/ ((module) => {

module.exports = import("@mui/icons-material/Menu");;

/***/ }),

/***/ 3531:
/***/ ((module) => {

module.exports = import("@mui/icons-material/Search");;

/***/ }),

/***/ 6770:
/***/ ((module) => {

module.exports = import("@mui/icons-material/Stars");;

/***/ }),

/***/ 1489:
/***/ ((module) => {

module.exports = import("@mui/material");;

/***/ }),

/***/ 9801:
/***/ ((module) => {

module.exports = import("@mui/material/AppBar");;

/***/ }),

/***/ 2814:
/***/ ((module) => {

module.exports = import("@mui/material/Avatar");;

/***/ }),

/***/ 5859:
/***/ ((module) => {

module.exports = import("@mui/material/Box");;

/***/ }),

/***/ 3655:
/***/ ((module) => {

module.exports = import("@mui/material/Button");;

/***/ }),

/***/ 9340:
/***/ ((module) => {

module.exports = import("@mui/material/CssBaseline");;

/***/ }),

/***/ 2613:
/***/ ((module) => {

module.exports = import("@mui/material/Divider");;

/***/ }),

/***/ 4465:
/***/ ((module) => {

module.exports = import("@mui/material/Drawer");;

/***/ }),

/***/ 2556:
/***/ ((module) => {

module.exports = import("@mui/material/FormControl");;

/***/ }),

/***/ 2389:
/***/ ((module) => {

module.exports = import("@mui/material/FormGroup");;

/***/ }),

/***/ 2355:
/***/ ((module) => {

module.exports = import("@mui/material/FormLabel");;

/***/ }),

/***/ 9095:
/***/ ((module) => {

module.exports = import("@mui/material/IconButton");;

/***/ }),

/***/ 800:
/***/ ((module) => {

module.exports = import("@mui/material/InputBase");;

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = import("@mui/material/Link");;

/***/ }),

/***/ 4082:
/***/ ((module) => {

module.exports = import("@mui/material/List");;

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = import("@mui/material/ListItem");;

/***/ }),

/***/ 5613:
/***/ ((module) => {

module.exports = import("@mui/material/ListItemButton");;

/***/ }),

/***/ 2143:
/***/ ((module) => {

module.exports = import("@mui/material/ListItemIcon");;

/***/ }),

/***/ 5427:
/***/ ((module) => {

module.exports = import("@mui/material/ListItemText");;

/***/ }),

/***/ 1928:
/***/ ((module) => {

module.exports = import("@mui/material/Menu");;

/***/ }),

/***/ 8880:
/***/ ((module) => {

module.exports = import("@mui/material/MenuItem");;

/***/ }),

/***/ 1676:
/***/ ((module) => {

module.exports = import("@mui/material/Switch");;

/***/ }),

/***/ 9968:
/***/ ((module) => {

module.exports = import("@mui/material/Toolbar");;

/***/ }),

/***/ 150:
/***/ ((module) => {

module.exports = import("@mui/material/Tooltip");;

/***/ }),

/***/ 2160:
/***/ ((module) => {

module.exports = import("@mui/material/Typography");;

/***/ }),

/***/ 2280:
/***/ ((module) => {

module.exports = import("@mui/material/colors");;

/***/ }),

/***/ 3926:
/***/ ((module) => {

module.exports = import("@mui/material/styles");;

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,395,508,137,557,907], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();