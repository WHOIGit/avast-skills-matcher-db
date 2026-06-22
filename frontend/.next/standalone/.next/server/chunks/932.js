"use strict";
exports.id = 932;
exports.ids = [932];
exports.modules = {

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

/***/ })

};
;