"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 4208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDocument)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6859);
/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(730);
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6465);
/* harmony import */ var _src_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1843);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__, _src_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__]);
([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__, _src_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_2__["default"] {
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "theme-color",
                            content: _src_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"].palette.primary.main */ .Z.palette.primary.main
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "stylesheet",
                            href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                            async: true,
                            src: `https://www.googletagmanager.com/gtag/js?id=${"G-JDNMRQ0Q4K"}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                            dangerouslySetInnerHTML: {
                                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${"G-JDNMRQ0Q4K"}', {
              page_path: window.location.pathname,
            });
          `
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {})
                    ]
                })
            ]
        });
    }
}
// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx)=>{
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render
    const originalRenderPage = ctx.renderPage;
    // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = (0,_src_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { extractCriticalToChunks  } = (0,_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__["default"])(cache);
    ctx.renderPage = ()=>originalRenderPage({
            // eslint-disable-next-line react/display-name
            enhanceApp: (App)=>(props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
                        emotionCache: cache,
                        ...props
                    })
        });
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2__["default"].getInitialProps(ctx);
    // This is important. It prevents emotion to render invalid HTML.
    // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
            "data-emotion": `${style.key} ${style.ids.join(" ")}`,
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML: {
                __html: style.css
            }
        }, style.key));
    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(initialProps.styles),
            ...emotionStyleTags, 
        ]
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8440:
/***/ ((module) => {

module.exports = import("@emotion/cache");;

/***/ }),

/***/ 730:
/***/ ((module) => {

module.exports = import("@emotion/server/create-instance");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,859], () => (__webpack_exec__(4208)));
module.exports = __webpack_exports__;

})();