"use strict";
exports.id = 331;
exports.ids = [331];
exports.modules = {

/***/ 3221:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UnauthContactDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3655);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1353);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2356);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5790);
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5563);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1009);
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2568);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4557);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1489);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__, _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__, _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_4__, _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__, _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_6__, _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__, _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_8__, _Link__WEBPACK_IMPORTED_MODULE_9__, _mui_material__WEBPACK_IMPORTED_MODULE_10__]);
([_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__, _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__, _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_4__, _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__, _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_6__, _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__, _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_8__, _Link__WEBPACK_IMPORTED_MODULE_9__, _mui_material__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function isUser(obj) {
    return obj.lastName !== undefined;
}
function UnauthContactDialog({ item  }) {
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    let title;
    if (isUser(item)) {
        title = `${item.firstName} ${item.lastName}`;
    } else {
        title = item.title;
    }
    const handleClickOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.IconButton, {
                "aria-label": "contact SME",
                color: "default",
                onClick: handleClickOpen,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_8__["default"], {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
                open: open,
                onClose: handleClose,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__["default"], {
                        children: [
                            "Contact ",
                            title
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            children: [
                                "To contact this SME or Project Owner, please login to your account first.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {
                                    sx: {
                                        textAlign: "center",
                                        mt: 2
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        color: "primary",
                                        variant: "contained",
                                        component: _Link__WEBPACK_IMPORTED_MODULE_9__/* .NextLinkComposed */ .Z,
                                        to: {
                                            pathname: "/login"
                                        },
                                        children: "Login"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            onClick: handleClose,
                            children: "Cancel"
                        })
                    })
                ]
            })
        ]
    });
}

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


/***/ })

};
;