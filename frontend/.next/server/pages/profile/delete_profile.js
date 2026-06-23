"use strict";
(() => {
var exports = {};
exports.id = 373;
exports.ids = [373,932];
exports.modules = {

/***/ 1638:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteProfile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3655);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5859);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2160);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(797);
/* harmony import */ var _src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6508);
/* harmony import */ var _src_components_InnerNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6932);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3631);
/* harmony import */ var _src_components_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4557);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__, _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__, _src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_7__, _src_components_InnerNav__WEBPACK_IMPORTED_MODULE_8__, _mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__, _src_components_Link__WEBPACK_IMPORTED_MODULE_10__]);
([_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__, _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__, _src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_7__, _src_components_InnerNav__WEBPACK_IMPORTED_MODULE_8__, _mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__, _src_components_Link__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// local import




function DeleteProfile() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { profile , deleteExpertProfile  } = (0,_src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleDelete = async ()=>{
        // send form data to API
        try {
            const resp = await deleteExpertProfile("delete");
            if (!resp.ok) {
                setErrorMessage("API connection error. Please try again later.");
            } else {
                setErrorMessage("");
                // redirect to user profile
                router.push("/profile/me");
            }
        } catch (error) {
            console.error(error);
            // TODO: actually parse api 400 error messages
            setErrorMessage(error.message);
        }
    };
    // guard to make sure profile data is available
    if (!profile) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_InnerNav__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
                sx: {
                    marginTop: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        component: "h1",
                        variant: "h5",
                        children: "Confirm Delete SME Profile"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        sx: {
                            mt: 3,
                            width: 600
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                component: "h5",
                                paragraph: true,
                                children: "Are you sure you want to delete your SME Profile? This action will remove you from the Skills Matcher SME database."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                sx: {
                                    mt: 1
                                },
                                direction: "row",
                                spacing: 2,
                                justifyContent: "center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        variant: "contained",
                                        color: "error",
                                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
                                        onClick: handleDelete,
                                        children: "Confirm SME Profile Delete"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        variant: "outlined",
                                        component: _src_components_Link__WEBPACK_IMPORTED_MODULE_10__/* .NextLinkComposed */ .Z,
                                        to: {
                                            pathname: "/profile/me"
                                        },
                                        children: "Cancel"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                sx: {
                                    color: "error.main"
                                },
                                children: errorMessage
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6932:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InnerNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5859);
/* harmony import */ var _mui_material_Fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2092);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8417);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__, _mui_material_Fab__WEBPACK_IMPORTED_MODULE_3__, _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_4__]);
([_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__, _mui_material_Fab__WEBPACK_IMPORTED_MODULE_3__, _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function InnerNav() {
    const handleClick = ()=>{
        history.back();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
        sx: {
            "& > :not(style)": {
                m: 1
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Fab__WEBPACK_IMPORTED_MODULE_3__["default"], {
            color: "primary",
            "aria-label": "back",
            size: "medium",
            onClick: handleClick,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_4__["default"], {})
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 8417:
/***/ ((module) => {

module.exports = import("@mui/icons-material/ArrowBack");;

/***/ }),

/***/ 797:
/***/ ((module) => {

module.exports = import("@mui/icons-material/Delete");;

/***/ }),

/***/ 5859:
/***/ ((module) => {

module.exports = import("@mui/material/Box");;

/***/ }),

/***/ 3655:
/***/ ((module) => {

module.exports = import("@mui/material/Button");;

/***/ }),

/***/ 2092:
/***/ ((module) => {

module.exports = import("@mui/material/Fab");;

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = import("@mui/material/Link");;

/***/ }),

/***/ 3631:
/***/ ((module) => {

module.exports = import("@mui/material/Stack");;

/***/ }),

/***/ 2160:
/***/ ((module) => {

module.exports = import("@mui/material/Typography");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,395,508,557], () => (__webpack_exec__(1638)));
module.exports = __webpack_exports__;

})();