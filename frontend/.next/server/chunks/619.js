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
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9404);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2268);
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2468);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4731);
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4192);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(834);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1011);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3787);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8315);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8330);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9486);
/* harmony import */ var _mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7229);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hooks_useProfile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6508);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useProfile__WEBPACK_IMPORTED_MODULE_19__]);
_hooks_useProfile__WEBPACK_IMPORTED_MODULE_19__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



















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
            buttonType === "standard" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                sx: {
                    my: 2
                },
                variant: "contained",
                onClick: handleClickOpen,
                size: "small",
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_9___default()), {}),
                children: "Contact SME"
            }),
            buttonType === "icon" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18___default()), {
                title: "Contact SME",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_16___default()), {
                    "aria-label": "contact SME",
                    color: "default",
                    onClick: handleClickOpen,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_9___default()), {})
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4___default()), {
                open: open,
                onClose: handleClose,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8___default()), {
                        children: [
                            "Contact ",
                            expert.firstName,
                            " ",
                            expert.lastName
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6___default()), {
                        children: messageSent ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_17___default()), {
                                    color: "success",
                                    sx: {
                                        fontSize: 80
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    children: "Message sent!"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    children: "To contact this SME, you can select one of your Projects that you’d like to work with them on, or just send a direct message. We will send them your Project and contact details and notify you if they’re interested."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_List__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    sx: {
                                        width: "100%",
                                        maxWidth: 360,
                                        bgcolor: "background.paper"
                                    },
                                    children: projects?.map((project)=>{
                                        const labelId = `checkbox-list-label-${project.id}`;
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            disablePadding: true,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                role: undefined,
                                                onClick: handleToggle(project.id),
                                                dense: true,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_13___default()), {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                            edge: "start",
                                                            checked: checked.indexOf(project.id) !== -1,
                                                            tabIndex: -1,
                                                            disableRipple: true,
                                                            inputProps: {
                                                                "aria-labelledby": labelId
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                        id: labelId,
                                                        primary: project.title
                                                    })
                                                ]
                                            })
                                        }, project.id);
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {
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
                    !messageSent && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                                onClick: handleClose,
                                children: "Cancel"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
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