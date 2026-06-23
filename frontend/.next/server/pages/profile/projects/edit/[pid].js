"use strict";
(() => {
var exports = {};
exports.id = 141;
exports.ids = [141];
exports.modules = {

/***/ 9745:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditProject)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3655);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1831);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7826);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5859);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2160);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5313);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5570);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2556);
/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2355);
/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2389);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4338);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1010);
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3543);
/* harmony import */ var _src_hooks_useProjects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5163);
/* harmony import */ var _src_components_InnerNav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6932);
/* harmony import */ var _src_components_SkillsCheckboxes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8236);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__, _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__, _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__, _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_10__, _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_11__, _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12__, _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_13__, _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_14__, _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_15__, _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_16__, _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_17__, _src_hooks_useProjects__WEBPACK_IMPORTED_MODULE_18__, _src_components_InnerNav__WEBPACK_IMPORTED_MODULE_19__, _src_components_SkillsCheckboxes__WEBPACK_IMPORTED_MODULE_20__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__, _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__, _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__, _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_10__, _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_11__, _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12__, _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_13__, _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_14__, _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_15__, _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_16__, _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_17__, _src_hooks_useProjects__WEBPACK_IMPORTED_MODULE_18__, _src_components_InnerNav__WEBPACK_IMPORTED_MODULE_19__, _src_components_SkillsCheckboxes__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















function EditProject() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const pid = parseInt(router.query.pid);
    const { project , editProject  } = (0,_src_hooks_useProjects__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(pid);
    const { handleSubmit , control , formState: { errors  } , reset ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // set for fields controlled by react-hook-form
        reset({
            title: project?.title,
            description: project?.description,
            skills: project?.skills,
            internationalTravel: project?.internationalTravel,
            replyByDate: project?.replyByDate ? dayjs__WEBPACK_IMPORTED_MODULE_2___default()(project?.replyByDate) : null
        });
    }, [
        reset,
        project
    ]);
    const onSubmit = async (data)=>{
        // send form data to API
        try {
            const resp = await editProject(pid, data);
            if (!resp.ok) {
                setErrorMessage("API connection error. Please try again later.");
            } else {
                setErrorMessage("");
                // redirect to user profile
                router.push("/profile/me?tabId=1");
            }
        } catch (error) {
            console.error(error);
            // TODO: actually parse api 400 error messages
            setErrorMessage(error.message);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_InnerNav__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
                sx: {
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        component: "h1",
                        variant: "h5",
                        children: "Edit Project"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        component: "form",
                        noValidate: true,
                        onSubmit: handleSubmit(onSubmit),
                        sx: {
                            mt: 3,
                            width: 600
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                container: true,
                                spacing: 2,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                        item: true,
                                        size: 12,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                                                name: "title",
                                                defaultValue: "",
                                                control: control,
                                                rules: {
                                                    required: true
                                                },
                                                render: ({ field: { onChange , value  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                        fullWidth: true,
                                                        label: "Project Title",
                                                        onChange: onChange,
                                                        value: value
                                                    })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                sx: {
                                                    color: "error.main"
                                                },
                                                children: errors.title && "Title is required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                        item: true,
                                        size: 12,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                                                name: "description",
                                                defaultValue: "",
                                                control: control,
                                                rules: {
                                                    required: true
                                                },
                                                render: ({ field: { onChange , value  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                        fullWidth: true,
                                                        multiline: true,
                                                        rows: 8,
                                                        onChange: onChange,
                                                        value: value,
                                                        label: "Describe your project",
                                                        variant: "outlined"
                                                    })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                sx: {
                                                    color: "error.main"
                                                },
                                                children: errors.description && "Field is required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                        item: true,
                                        size: 12,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_16__.LocalizationProvider, {
                                                dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_15__.AdapterDayjs,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                                                    name: "replyByDate",
                                                    defaultValue: "",
                                                    control: control,
                                                    rules: {
                                                        required: "Reply by date is required"
                                                    },
                                                    render: ({ field: { onChange , value , ...fieldProps }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_17__.DatePicker, {
                                                            ...fieldProps,
                                                            label: "Reply by Date",
                                                            value: value,
                                                            onChange: (newValue)=>onChange(newValue),
                                                            slotProps: {
                                                                textField: {
                                                                    error: !!errors.replyByDate,
                                                                    helperText: errors.replyByDate?.message,
                                                                    fullWidth: true
                                                                }
                                                            }
                                                        })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                sx: {
                                                    color: "error.main"
                                                },
                                                children: errors.replyByDate && "Field is required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                        item: true,
                                        size: 12,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                            component: "fieldset",
                                            variant: "standard",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                    component: "legend",
                                                    children: "International Travel Required?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                                                        name: "internationalTravel",
                                                        defaultValue: false,
                                                        control: control,
                                                        //rules={{ required: true }}
                                                        render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                                label: "YES",
                                                                control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                                    checked: field.value,
                                                                    ...field
                                                                })
                                                            }, "internationalTravel")
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                        item: true,
                                        size: 12,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_SkillsCheckboxes__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                            control: control
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                type: "submit",
                                fullWidth: true,
                                variant: "contained",
                                sx: {
                                    mt: 3,
                                    mb: 2
                                },
                                children: "Save Project"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
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

/***/ 2766:
/***/ ((module) => {

module.exports = require("@azure/msal-react");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

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

/***/ 8417:
/***/ ((module) => {

module.exports = import("@mui/icons-material/ArrowBack");;

/***/ }),

/***/ 5859:
/***/ ((module) => {

module.exports = import("@mui/material/Box");;

/***/ }),

/***/ 3655:
/***/ ((module) => {

module.exports = import("@mui/material/Button");;

/***/ }),

/***/ 5313:
/***/ ((module) => {

module.exports = import("@mui/material/Checkbox");;

/***/ }),

/***/ 2092:
/***/ ((module) => {

module.exports = import("@mui/material/Fab");;

/***/ }),

/***/ 2556:
/***/ ((module) => {

module.exports = import("@mui/material/FormControl");;

/***/ }),

/***/ 5570:
/***/ ((module) => {

module.exports = import("@mui/material/FormControlLabel");;

/***/ }),

/***/ 2389:
/***/ ((module) => {

module.exports = import("@mui/material/FormGroup");;

/***/ }),

/***/ 2355:
/***/ ((module) => {

module.exports = import("@mui/material/FormLabel");;

/***/ }),

/***/ 7826:
/***/ ((module) => {

module.exports = import("@mui/material/Grid");;

/***/ }),

/***/ 1831:
/***/ ((module) => {

module.exports = import("@mui/material/TextField");;

/***/ }),

/***/ 2160:
/***/ ((module) => {

module.exports = import("@mui/material/Typography");;

/***/ }),

/***/ 4338:
/***/ ((module) => {

module.exports = import("@mui/x-date-pickers/AdapterDayjs");;

/***/ }),

/***/ 3543:
/***/ ((module) => {

module.exports = import("@mui/x-date-pickers/DatePicker");;

/***/ }),

/***/ 1010:
/***/ ((module) => {

module.exports = import("@mui/x-date-pickers/LocalizationProvider");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [395,508,137,163,932,236], () => (__webpack_exec__(9745)));
module.exports = __webpack_exports__;

})();