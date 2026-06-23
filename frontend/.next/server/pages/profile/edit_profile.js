"use strict";
(() => {
var exports = {};
exports.id = 166;
exports.ids = [166];
exports.modules = {

/***/ 9426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditProfileForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2814);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3655);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1831);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7826);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5859);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2160);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5570);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5313);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2556);
/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2355);
/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2389);
/* harmony import */ var _src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6508);
/* harmony import */ var _src_containers_skillsContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5137);
/* harmony import */ var _src_components_InnerNav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6932);
/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2660);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__, _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__, _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__, _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__, _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_11__, _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12__, _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_13__, _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_14__, _src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_15__, _src_containers_skillsContainer__WEBPACK_IMPORTED_MODULE_16__, _src_components_InnerNav__WEBPACK_IMPORTED_MODULE_17__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__, _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__, _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__, _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__, _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_11__, _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12__, _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_13__, _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_14__, _src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_15__, _src_containers_skillsContainer__WEBPACK_IMPORTED_MODULE_16__, _src_components_InnerNav__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















// local import




function EditProfileForm() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const skillsCtx = _src_containers_skillsContainer__WEBPACK_IMPORTED_MODULE_16__/* ["default"].useContainer */ .Z.useContainer();
    const { profile , editExpertProfile  } = (0,_src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)();
    const { handleSubmit , control , formState: { errors  } , reset ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // set the initial values for the form
        // set for fields controlled by react-hook-form
        reset({
            experience: profile?.expertProfile?.experience,
            skills: profile?.expertProfile?.skills,
            orcidId: profile?.expertProfile?.orcidId,
            availability: profile?.expertProfile?.availability,
            internationalTravel: profile?.expertProfile?.internationalTravel,
            urgentProjectSeek: profile?.expertProfile?.urgentProjectSeek,
            lookingForFieldWork: profile?.expertProfile?.lookingForFieldWork,
            lookingForPartTimeWork: profile?.expertProfile?.lookingForPartTimeWork,
            availableForSeagoing: profile?.expertProfile?.availableForSeagoing
        });
    }, [
        reset,
        profile
    ]);
    const onSubmit = async (data)=>{
        console.log("form data", data);
        // check if this is a new "Urgently Seeking Project" request
        // if so, send notificaton email
        if (!profile?.expertProfile?.urgentProjectSeek && data.urgentProjectSeek) {
            console.log("New urgent request, send email");
        }
        // send form data to API
        try {
            const resp = await editExpertProfile(data);
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
    const renderAvailabilityList = (item, field)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
            label: item.label,
            control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_11__["default"], {
                value: item.value,
                checked: field.value.includes(item.value),
                onChange: (event, checked)=>{
                    if (checked) {
                        field.onChange([
                            ...field.value,
                            event.target.value
                        ]);
                    } else {
                        field.onChange(field.value.filter((value)=>value !== event.target.value));
                    }
                }
            })
        }, item.value);
    };
    const renderSkillsList = (skill, field)=>{
        let hasChildren = false;
        if (skill.children.length) {
            hasChildren = true;
        }
        if (!field.value) {
            return null;
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    label: skill.name,
                    control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_11__["default"], {
                        value: skill.id,
                        checked: field.value.includes(skill.id),
                        onChange: (event, checked)=>{
                            if (checked) {
                                field.onChange([
                                    ...field.value,
                                    parseInt(event.target.value), 
                                ]);
                            } else {
                                field.onChange(field.value.filter((value)=>value !== parseInt(event.target.value)));
                            }
                        }
                    })
                }, skill.id),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    sx: {
                        display: "flex",
                        flexDirection: "column",
                        ml: 3
                    },
                    children: hasChildren && skill.children.map((child)=>renderSkillsList(child, field))
                })
            ]
        });
    };
    // guard to make sure profile data is available
    if (!profile) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_InnerNav__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
                sx: {
                    marginTop: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        component: "h1",
                        variant: "h5",
                        children: "Edit SME Profile"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        sx: {
                            m: 1,
                            bgcolor: "secondary.main",
                            width: 112,
                            height: 112
                        },
                        alt: profile?.firstName,
                        src: profile?.avatar
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        component: "h1",
                        variant: "h4",
                        children: [
                            profile?.firstName,
                            " ",
                            profile?.lastName
                        ]
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
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                                                name: "experience",
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
                                                        label: "Describe your skills and experience",
                                                        variant: "outlined"
                                                    })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                sx: {
                                                    color: "error.main"
                                                },
                                                children: errors.experience && "Field is required"
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
                                                    children: "Available for International Travel?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                                                        name: "internationalTravel",
                                                        defaultValue: false,
                                                        control: control,
                                                        //rules={{ required: true }}
                                                        render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                                label: "YES",
                                                                control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                            component: "fieldset",
                                            variant: "standard",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                    component: "legend",
                                                    children: "Urgently Seeking New Project?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                                                        name: "urgentProjectSeek",
                                                        defaultValue: false,
                                                        control: control,
                                                        //rules={{ required: true }}
                                                        render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                                label: "YES",
                                                                control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                                    checked: field.value,
                                                                    ...field
                                                                })
                                                            }, "urgentProjectSeek")
                                                    })
                                                })
                                            ]
                                        })
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
                                                    children: "Looking for Field Work?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                                                        name: "lookingForFieldWork",
                                                        defaultValue: false,
                                                        control: control,
                                                        //rules={{ required: true }}
                                                        render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                                label: "YES",
                                                                control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                                    checked: field.value,
                                                                    ...field
                                                                })
                                                            }, "lookingForFieldWork")
                                                    })
                                                })
                                            ]
                                        })
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
                                                    children: "Looking for Part-time or Short-term Work?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                                                        name: "lookingForPartTimeWork",
                                                        defaultValue: false,
                                                        control: control,
                                                        //rules={{ required: true }}
                                                        render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                                label: "YES",
                                                                control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                                    checked: field.value,
                                                                    ...field
                                                                })
                                                            }, "lookingForPartTimeWork")
                                                    })
                                                })
                                            ]
                                        })
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
                                                    children: "Available for Seagoing Opportunities?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                                                        name: "availableForSeagoing",
                                                        defaultValue: false,
                                                        control: control,
                                                        //rules={{ required: true }}
                                                        render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                                label: "YES",
                                                                control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                                    checked: field.value,
                                                                    ...field
                                                                })
                                                            }, "availableForSeagoing")
                                                    })
                                                })
                                            ]
                                        })
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
                                                    children: "Your Availability"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                                                        name: "availability",
                                                        defaultValue: [],
                                                        control: control,
                                                        //rules={{ required: true }}
                                                        render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: _src_constants__WEBPACK_IMPORTED_MODULE_18__/* .availabilityChoices */ .w && _src_constants__WEBPACK_IMPORTED_MODULE_18__/* .availabilityChoices.map */ .w.map((item)=>renderAvailabilityList(item, field))
                                                            })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                        item: true,
                                        size: 12,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                                                name: "orcidId",
                                                defaultValue: "",
                                                control: control,
                                                rules: {
                                                    required: false,
                                                    pattern: {
                                                        value: /https:\/\/orcid.org/i,
                                                        message: "Must be a valid ORCID URL"
                                                    }
                                                },
                                                render: ({ field: { onChange , value  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                        fullWidth: true,
                                                        onChange: onChange,
                                                        value: value,
                                                        label: "ORCID ID",
                                                        variant: "outlined",
                                                        helperText: "ex: https://orcid.org/0000-0002-1111-2222"
                                                    })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                sx: {
                                                    color: "error.main"
                                                },
                                                children: errors.orcidId && "Must be a valid ORCID URL"
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
                                                    children: "Skills"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                                                        name: "skills",
                                                        defaultValue: [],
                                                        control: control,
                                                        //rules={{ required: true }}
                                                        render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: skillsCtx.skills && skillsCtx.skills.map((skill)=>renderSkillsList(skill, field))
                                                            })
                                                    })
                                                })
                                            ]
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
                                children: "Save Profile"
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

/***/ 2660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ availabilityChoices)
/* harmony export */ });
const availabilityChoices = [
    {
        value: "WEEKS",
        label: "Weeks to months"
    },
    {
        value: "DAYS",
        label: "Days to weeks"
    },
    {
        value: "INCIDENTAL",
        label: "Incidental advice"
    }, 
];


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

/***/ 7441:
/***/ ((module) => {

module.exports = require("unstated-next");

/***/ }),

/***/ 8417:
/***/ ((module) => {

module.exports = import("@mui/icons-material/ArrowBack");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [395,508,137,932], () => (__webpack_exec__(9426)));
module.exports = __webpack_exports__;

})();