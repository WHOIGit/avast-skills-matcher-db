"use strict";
exports.id = 619;
exports.ids = [619];
exports.modules = {

/***/ 9619:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ContactDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3655);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1831);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1353);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2356);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5790);
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5563);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1009);
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2568);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4082);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(853);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5613);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2143);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5427);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5313);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9095);
/* harmony import */ var _mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3505);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(150);
/* harmony import */ var _hooks_useProfile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6508);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__, _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__, _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__, _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5__, _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__, _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7__, _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__, _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_9__, _mui_material_List__WEBPACK_IMPORTED_MODULE_10__, _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_11__, _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_12__, _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_13__, _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_14__, _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_15__, _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16__, _mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_17__, _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__, _hooks_useProfile__WEBPACK_IMPORTED_MODULE_19__]);
([_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__, _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__, _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__, _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5__, _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__, _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7__, _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__, _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_9__, _mui_material_List__WEBPACK_IMPORTED_MODULE_10__, _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_11__, _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_12__, _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_13__, _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_14__, _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_15__, _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16__, _mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_17__, _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__, _hooks_useProfile__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















// local imports

function ContactDialog({ expert , buttonType ="standard"  }) {
    const { profile , contactExpert  } = (0,_hooks_useProfile__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)();
    const projects = profile?.projectsOwned;
    const textRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [checked, setChecked] = react__WEBPACK_IMPORTED_MODULE_1__.useState([
        0
    ]);
    const [messageSent, setMessageSent] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const handleToggle = (value)=>()=>{
            const currentIndex = checked.indexOf(value);
            const newChecked = [
                ...checked
            ];
            if (currentIndex === -1) {
                newChecked.push(value);
            } else {
                newChecked.splice(currentIndex, 1);
            }
            setChecked(newChecked);
        };
    const handleClickOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setMessageSent(false);
        setOpen(false);
    };
    const handleSend = ()=>{
        contactExpert(expert.id, textRef.current.value, checked);
        setMessageSent(true);
        setTimeout(handleClose, 2000);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            buttonType === "standard" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
                sx: {
                    my: 2
                },
                variant: "contained",
                onClick: handleClickOpen,
                size: "small",
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
                children: "Contact SME"
            }),
            buttonType === "icon" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"], {
                title: "Contact SME",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    "aria-label": "contact SME",
                    color: "default",
                    onClick: handleClickOpen,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_9__["default"], {})
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
                open: open,
                onClose: handleClose,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        children: [
                            "Contact ",
                            expert.firstName,
                            " ",
                            expert.lastName
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        children: messageSent ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                    color: "success",
                                    sx: {
                                        fontSize: 80
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    children: "Message sent!"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    children: "To contact this SME, you can select one of your Projects that you’d like to work with them on, or just send a direct message. We will send them your Project and contact details and notify you if they’re interested."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_List__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                    sx: {
                                        width: "100%",
                                        maxWidth: 360,
                                        bgcolor: "background.paper"
                                    },
                                    children: projects?.map((project)=>{
                                        const labelId = `checkbox-list-label-${project.id}`;
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                            disablePadding: true,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                role: undefined,
                                                onClick: handleToggle(project.id),
                                                dense: true,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                                            edge: "start",
                                                            checked: checked.indexOf(project.id) !== -1,
                                                            tabIndex: -1,
                                                            disableRipple: true,
                                                            inputProps: {
                                                                "aria-labelledby": labelId
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                        id: labelId,
                                                        primary: project.title
                                                    })
                                                ]
                                            })
                                        }, project.id);
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    fullWidth: true,
                                    multiline: true,
                                    rows: 6,
                                    label: "Message",
                                    variant: "outlined",
                                    inputRef: textRef
                                })
                            ]
                        })
                    }),
                    !messageSent && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                onClick: handleClose,
                                children: "Cancel"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                onClick: handleSend,
                                children: "Send Request"
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

/***/ })

};
;