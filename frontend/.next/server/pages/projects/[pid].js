"use strict";
(() => {
var exports = {};
exports.id = 22;
exports.ids = [22,932];
exports.modules = {

/***/ 4790:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectDetail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5859);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2160);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3655);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4106);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3631);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9146);
/* harmony import */ var _mui_icons_material_Public__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9796);
/* harmony import */ var _src_components_SkillChip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6518);
/* harmony import */ var _src_components_InnerNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6932);
/* harmony import */ var _src_components_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4557);
/* harmony import */ var _src_hooks_useProjects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5163);
/* harmony import */ var _src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6508);
/* harmony import */ var _src_components_ContactProjectDialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7009);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__, _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_6__, _mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__, _mui_material_Chip__WEBPACK_IMPORTED_MODULE_8__, _mui_icons_material_Public__WEBPACK_IMPORTED_MODULE_9__, _src_components_SkillChip__WEBPACK_IMPORTED_MODULE_10__, _src_components_InnerNav__WEBPACK_IMPORTED_MODULE_11__, _src_components_Link__WEBPACK_IMPORTED_MODULE_12__, _src_hooks_useProjects__WEBPACK_IMPORTED_MODULE_13__, _src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_14__, _src_components_ContactProjectDialog__WEBPACK_IMPORTED_MODULE_15__]);
([_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__, _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_6__, _mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__, _mui_material_Chip__WEBPACK_IMPORTED_MODULE_8__, _mui_icons_material_Public__WEBPACK_IMPORTED_MODULE_9__, _src_components_SkillChip__WEBPACK_IMPORTED_MODULE_10__, _src_components_InnerNav__WEBPACK_IMPORTED_MODULE_11__, _src_components_Link__WEBPACK_IMPORTED_MODULE_12__, _src_hooks_useProjects__WEBPACK_IMPORTED_MODULE_13__, _src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_14__, _src_components_ContactProjectDialog__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










// local imports






function ProjectDetail() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { pid  } = router.query;
    const { project  } = (0,_src_hooks_useProjects__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(pid);
    const { profile  } = (0,_src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)();
    if (!project) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_InnerNav__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
                sx: {
                    marginTop: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        sx: {
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                component: "h1",
                                variant: "h4",
                                children: project?.title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                component: "div",
                                variant: "subtitle1",
                                children: [
                                    "Project Owner: ",
                                    project?.projectOwnerDisplay
                                ]
                            })
                        ]
                    }),
                    project && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_ContactProjectDialog__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        project: project,
                        buttonType: "standard"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        sx: {
                            mt: 1,
                            width: "100%"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                sx: {
                                    mb: 2
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                        component: "h6",
                                        variant: "h6",
                                        children: "Skills"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                        direction: "row",
                                        spacing: 2,
                                        children: project.skills?.map((id)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_SkillChip__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                skillId: id,
                                                size: "medium"
                                            }, id);
                                        })
                                    })
                                ]
                            }),
                            project.internationalTravel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                sx: {
                                    mt: 1,
                                    mb: 2
                                },
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Public__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
                                label: "International Travel Required",
                                variant: "outlined",
                                color: "primary"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                component: "h6",
                                variant: "h6",
                                children: "Description"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                variant: "body1",
                                paragraph: true,
                                children: project.description
                            })
                        ]
                    }),
                    !profile || !profile.userType?.includes("EXPERT") ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        sx: {
                            maxWidth: 600,
                            py: 2,
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                variant: "body1",
                                align: "center",
                                color: "text.secondary",
                                paragraph: true,
                                children: [
                                    "Want to join a Project listed on our site? ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    'Create a "SME Profile" that you can send to the Project Owner.'
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                variant: "outlined",
                                component: _src_components_Link__WEBPACK_IMPORTED_MODULE_12__/* .NextLinkComposed */ .Z,
                                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
                                to: {
                                    pathname: "/profile/me"
                                },
                                children: "Create SME Profile"
                            })
                        ]
                    }) : null
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

/***/ 7441:
/***/ ((module) => {

module.exports = require("unstated-next");

/***/ }),

/***/ 4106:
/***/ ((module) => {

module.exports = import("@mui/icons-material/Add");;

/***/ }),

/***/ 8417:
/***/ ((module) => {

module.exports = import("@mui/icons-material/ArrowBack");;

/***/ }),

/***/ 3505:
/***/ ((module) => {

module.exports = import("@mui/icons-material/CheckCircleOutline");;

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = import("@mui/icons-material/Public");;

/***/ }),

/***/ 2568:
/***/ ((module) => {

module.exports = import("@mui/icons-material/Send");;

/***/ }),

/***/ 5859:
/***/ ((module) => {

module.exports = import("@mui/material/Box");;

/***/ }),

/***/ 3655:
/***/ ((module) => {

module.exports = import("@mui/material/Button");;

/***/ }),

/***/ 9146:
/***/ ((module) => {

module.exports = import("@mui/material/Chip");;

/***/ }),

/***/ 1353:
/***/ ((module) => {

module.exports = import("@mui/material/Dialog");;

/***/ }),

/***/ 2356:
/***/ ((module) => {

module.exports = import("@mui/material/DialogActions");;

/***/ }),

/***/ 5790:
/***/ ((module) => {

module.exports = import("@mui/material/DialogContent");;

/***/ }),

/***/ 5563:
/***/ ((module) => {

module.exports = import("@mui/material/DialogContentText");;

/***/ }),

/***/ 1009:
/***/ ((module) => {

module.exports = import("@mui/material/DialogTitle");;

/***/ }),

/***/ 2092:
/***/ ((module) => {

module.exports = import("@mui/material/Fab");;

/***/ }),

/***/ 9095:
/***/ ((module) => {

module.exports = import("@mui/material/IconButton");;

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = import("@mui/material/Link");;

/***/ }),

/***/ 3631:
/***/ ((module) => {

module.exports = import("@mui/material/Stack");;

/***/ }),

/***/ 1831:
/***/ ((module) => {

module.exports = import("@mui/material/TextField");;

/***/ }),

/***/ 150:
/***/ ((module) => {

module.exports = import("@mui/material/Tooltip");;

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,395,508,137,557,163,518,9], () => (__webpack_exec__(4790)));
module.exports = __webpack_exports__;

})();