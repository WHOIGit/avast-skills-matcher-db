"use strict";
(() => {
var exports = {};
exports.id = 906;
exports.ids = [906];
exports.modules = {

/***/ 7578:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2766);
/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(572);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_browser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5859);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2160);
/* harmony import */ var _src_hooks_useEngagement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__]);
([_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// local imports
const ErrorComponent = ({ error  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        children: [
            "An Error Occurred: ",
            error
        ]
    });
};
const LoadingComponent = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: "Authentication in progress..."
    });
};
const EngagementResponse = ()=>{
    const isAuthenticated = (0,_azure_msal_react__WEBPACK_IMPORTED_MODULE_2__.useIsAuthenticated)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { response , pid  } = router.query;
    const { recordResponse  } = (0,_src_hooks_useEngagement__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(pid, response);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        const fetchResponse = async ()=>{
            const data = await recordResponse();
            return data;
        };
        if (isAuthenticated) {
            const response = fetchResponse();
        }
    }, [
        isAuthenticated,
        recordResponse
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_azure_msal_react__WEBPACK_IMPORTED_MODULE_2__.MsalAuthenticationTemplate, {
        interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_3__.InteractionType.Redirect,
        errorComponent: ErrorComponent,
        loadingComponent: LoadingComponent,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
            sx: {
                marginTop: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
                sx: {
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        component: "h1",
                        variant: "h4",
                        gutterBottom: true,
                        children: "Thanks for your response!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        component: "p",
                        variant: "subtitle1",
                        children: "Your response has been recorded and sent to the SME or the Project Owner. If you approved their request, they will reach out directly to you soon."
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EngagementResponse);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2766);
/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_azureAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(314);
/* harmony import */ var _utils_apiUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4530);



const useEngagement = (pid, response)=>{
    const { instance  } = (0,_azure_msal_react__WEBPACK_IMPORTED_MODULE_0__.useMsal)();
    // record user Engagement response
    const recordResponse = async ()=>{
        let dateResponded = new Date().toISOString();
        const payload = {
            response: response,
            dateResponded: dateResponded
        };
        const url = (0,_utils_apiUtils__WEBPACK_IMPORTED_MODULE_1__/* .makeUrl */ .bf)(`/api/engagements/${pid}/`);
        const resp = await fetch(url, {
            method: "PATCH",
            body: JSON.stringify(payload),
            headers: {
                Authorization: `Bearer ${await (0,_utils_azureAuth__WEBPACK_IMPORTED_MODULE_2__/* .getMsToken */ .a)(instance)}`,
                "Content-Type": "application/json"
            }
        });
        return resp;
    };
    return {
        recordResponse: recordResponse
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEngagement);


/***/ }),

/***/ 572:
/***/ ((module) => {

module.exports = require("@azure/msal-browser");

/***/ }),

/***/ 2766:
/***/ ((module) => {

module.exports = require("@azure/msal-react");

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

/***/ 5859:
/***/ ((module) => {

module.exports = import("@mui/material/Box");;

/***/ }),

/***/ 2160:
/***/ ((module) => {

module.exports = import("@mui/material/Typography");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [395], () => (__webpack_exec__(7578)));
module.exports = __webpack_exports__;

})();