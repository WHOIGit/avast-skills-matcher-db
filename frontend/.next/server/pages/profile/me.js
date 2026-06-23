"use strict";
(() => {
var exports = {};
exports.id = 705;
exports.ids = [705];
exports.modules = {

/***/ 9945:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2766);
/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(572);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_browser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3631);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1489);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5859);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2160);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3655);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2249);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4106);
/* harmony import */ var _src_components_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4557);
/* harmony import */ var _src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6508);
/* harmony import */ var _src_components_ProfileTabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6315);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__, _mui_material__WEBPACK_IMPORTED_MODULE_6__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__, _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_10__, _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_11__, _src_components_Link__WEBPACK_IMPORTED_MODULE_12__, _src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_13__, _src_components_ProfileTabs__WEBPACK_IMPORTED_MODULE_14__]);
([_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__, _mui_material__WEBPACK_IMPORTED_MODULE_6__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__, _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_10__, _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_11__, _src_components_Link__WEBPACK_IMPORTED_MODULE_12__, _src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_13__, _src_components_ProfileTabs__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












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
const Me = ()=>{
    const { profile  } = (0,_src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [selectedTab, setSelectedTab] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
    const selectProjectsTab = ()=>{
        // change active tab to Projects
        setSelectedTab(1);
    };
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (query.tabId) {
            setSelectedTab(Number(query.tabId));
        }
    }, [
        query
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_azure_msal_react__WEBPACK_IMPORTED_MODULE_3__.MsalAuthenticationTemplate, {
        interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_4__.InteractionType.Redirect,
        errorComponent: ErrorComponent,
        loadingComponent: LoadingComponent,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
            sx: {
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Avatar, {
                    sx: {
                        m: 1,
                        bgcolor: "secondary.main",
                        width: 112,
                        height: 112
                    },
                    alt: profile?.firstName,
                    src: profile?.avatar
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    sx: {
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            component: "h1",
                            variant: "h4",
                            children: [
                                profile?.firstName,
                                " ",
                                profile?.lastName
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            component: "div",
                            variant: "subtitle1",
                            children: profile?.email
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            component: "div",
                            variant: "subtitle1",
                            children: profile?.title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            sx: {
                                mt: 1
                            },
                            direction: "row",
                            spacing: 2,
                            justifyContent: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                    variant: "contained",
                                    size: "small",
                                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_10__["default"], {}),
                                    component: _src_components_Link__WEBPACK_IMPORTED_MODULE_12__/* .NextLinkComposed */ .Z,
                                    to: {
                                        pathname: "/profile/edit"
                                    },
                                    children: "Edit Account"
                                }),
                                profile?.userType?.includes("EXPERT") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                    variant: "contained",
                                    size: "small",
                                    startIcon: profile?.expertProfile?.experience ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_10__["default"], {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_11__["default"], {}),
                                    component: _src_components_Link__WEBPACK_IMPORTED_MODULE_12__/* .NextLinkComposed */ .Z,
                                    to: {
                                        pathname: "/profile/edit_profile"
                                    },
                                    children: [
                                        profile?.expertProfile?.experience ? "Edit" : "Create",
                                        " SME Profile"
                                    ]
                                }),
                                profile?.userType?.includes("PROJECT_OWNER") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                    variant: "contained",
                                    size: "small",
                                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_10__["default"], {}),
                                    onClick: selectProjectsTab,
                                    children: "Manage Projects"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    sx: {
                        alignItems: "center",
                        maxWidth: 600,
                        py: 2
                    },
                    children: profile?.userType?.includes("EXPERT") && !profile?.expertProfile?.experience && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        variant: "body1",
                        align: "center",
                        color: "text.secondary",
                        paragraph: true,
                        children: [
                            "Welcome to the WHOI Skills Matcher DB! You’re now registered as a SME on our site. Complete your",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Link__WEBPACK_IMPORTED_MODULE_12__/* .NextLinkComposed */ .Z, {
                                to: {
                                    pathname: "/profile/edit_profile"
                                },
                                children: "SME Profile"
                            }),
                            " ",
                            "and you are all set."
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    sx: {
                        mt: 1,
                        width: "100%"
                    },
                    children: profile?.userType && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_ProfileTabs__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        profile: profile,
                        showTab: selectedTab
                    })
                }),
                !profile?.userType?.includes("EXPERT") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    sx: {
                        maxWidth: 600,
                        py: 2,
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            variant: "body1",
                            align: "center",
                            color: "text.secondary",
                            paragraph: true,
                            children: 'Want to make your skills available to the WHOI community? Create a "SME Profile", and you will be listed in the Skills Matcher DB.'
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            variant: "outlined",
                            startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_11__["default"], {}),
                            component: _src_components_Link__WEBPACK_IMPORTED_MODULE_12__/* .NextLinkComposed */ .Z,
                            to: {
                                pathname: "/profile/edit_profile"
                            },
                            children: "Create SME Profile"
                        })
                    ]
                }),
                !profile?.userType?.includes("PROJECT_OWNER") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    sx: {
                        maxWidth: 600,
                        py: 2,
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            variant: "body1",
                            align: "center",
                            color: "text.secondary",
                            paragraph: true,
                            children: [
                                "Want to contact a SME listed on our site? ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                'Create a "Project" that you can request assistance with from one of our users.'
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            variant: "outlined",
                            startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_11__["default"], {}),
                            component: _src_components_Link__WEBPACK_IMPORTED_MODULE_12__/* .NextLinkComposed */ .Z,
                            to: {
                                pathname: "/profile/projects/add"
                            },
                            children: "Create Project"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Me);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6315:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProfileTabs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5697);
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8561);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2160);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3655);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5859);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3631);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4082);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(853);
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5613);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2143);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5427);
/* harmony import */ var _mui_icons_material_Comment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9866);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(797);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4106);
/* harmony import */ var _mui_icons_material_OpenInNew__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1382);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4557);
/* harmony import */ var _SkillChip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6518);
/* harmony import */ var _ProjectDeleteDialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5338);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2613);
/* harmony import */ var _mui_icons_material_Public__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9796);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(9146);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_3__, _mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__, _mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__, _mui_material_List__WEBPACK_IMPORTED_MODULE_9__, _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10__, _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_11__, _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__, _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_13__, _mui_icons_material_Comment__WEBPACK_IMPORTED_MODULE_14__, _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_15__, _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_16__, _mui_icons_material_OpenInNew__WEBPACK_IMPORTED_MODULE_17__, _Link__WEBPACK_IMPORTED_MODULE_18__, _SkillChip__WEBPACK_IMPORTED_MODULE_19__, _ProjectDeleteDialog__WEBPACK_IMPORTED_MODULE_20__, _mui_material_Divider__WEBPACK_IMPORTED_MODULE_21__, _mui_icons_material_Public__WEBPACK_IMPORTED_MODULE_22__, _mui_material_Chip__WEBPACK_IMPORTED_MODULE_23__]);
([_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_3__, _mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__, _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__, _mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__, _mui_material_List__WEBPACK_IMPORTED_MODULE_9__, _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10__, _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_11__, _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__, _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_13__, _mui_icons_material_Comment__WEBPACK_IMPORTED_MODULE_14__, _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_15__, _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_16__, _mui_icons_material_OpenInNew__WEBPACK_IMPORTED_MODULE_17__, _Link__WEBPACK_IMPORTED_MODULE_18__, _SkillChip__WEBPACK_IMPORTED_MODULE_19__, _ProjectDeleteDialog__WEBPACK_IMPORTED_MODULE_20__, _mui_material_Divider__WEBPACK_IMPORTED_MODULE_21__, _mui_icons_material_Public__WEBPACK_IMPORTED_MODULE_22__, _mui_material_Chip__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















// local imports






function TabPanel(props) {
    const { children , value , index , ...other } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        role: "tabpanel",
        hidden: value !== index,
        id: `profile-tabpanel-${index}`,
        "aria-labelledby": `profile-tab-${index}`,
        ...other,
        children: value === index && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
            sx: {
                p: 3
            },
            children: children
        })
    });
}
function a11yProps(index) {
    return {
        id: `profile-tab-${index}`,
        "aria-controls": `profile-tabpanel-${index}`
    };
}
function ProfileTabs({ profile , showTab  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1__.useState(profile.userType?.includes("EXPERT") ? 0 : 1);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        setValue(showTab);
    }, [
        showTab
    ]);
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    const handleEdit = (pid)=>{
        router.push(`/profile/projects/edit/${pid}`);
    };
    const renderProjectList = (project)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
            secondaryAction: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProjectDeleteDialog__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                project: project
            }),
            disablePadding: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
                onClick: ()=>handleEdit(project.id),
                dense: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_12__["default"], {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Comment__WEBPACK_IMPORTED_MODULE_14__["default"], {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_13__["default"], {
                        id: project.id.toString(),
                        primary: project.title
                    })
                ]
            })
        }, project.id);
    };
    if (!profile) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
        sx: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
                sx: {
                    borderBottom: 1,
                    borderColor: "divider"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    value: value,
                    onChange: handleChange,
                    "aria-label": "profile tabs",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            label: "SME Profile",
                            ...a11yProps(0),
                            sx: {
                                display: profile.userType?.includes("EXPERT") ? "block" : "none"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            label: "Your Projects",
                            ...a11yProps(1),
                            sx: {
                                display: profile.userType?.includes("PROJECT_OWNER") ? "block" : "none"
                            }
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabPanel, {
                value: value,
                index: 0,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    sx: {
                        display: profile.userType?.includes("EXPERT") ? "block" : "none"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            sx: {
                                mb: 2
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    component: "p",
                                    variant: "body1",
                                    paragraph: true,
                                    children: "This is the profile information that will be publicly displayed in our searchable SME database."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    component: "h6",
                                    variant: "h6",
                                    children: "Your Skills"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                    direction: "row",
                                    spacing: 2,
                                    useFlexGap: true,
                                    sx: {
                                        flexWrap: "wrap"
                                    },
                                    children: profile.expertProfile?.skills.map((id)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SkillChip__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                            skillId: id
                                        }, id);
                                    })
                                })
                            ]
                        }),
                        profile.expertProfile?.internationalTravel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_23__["default"], {
                            sx: {
                                mt: 1,
                                mb: 1
                            },
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Public__WEBPACK_IMPORTED_MODULE_22__["default"], {}),
                            label: "Available for International Travel",
                            variant: "outlined",
                            color: "primary"
                        }),
                        profile.expertProfile?.orcidId && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    component: "h6",
                                    variant: "h6",
                                    children: "ORCID ID"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    component: "p",
                                    variant: "body1",
                                    paragraph: true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Link__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .C, {
                                        href: profile.expertProfile?.orcidId,
                                        target: "_blank",
                                        children: [
                                            profile.expertProfile?.orcidId,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_OpenInNew__WEBPACK_IMPORTED_MODULE_17__["default"], {})
                                        ]
                                    })
                                })
                            ]
                        }),
                        profile.expertProfile?.urgentProjectSeek && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_23__["default"], {
                            sx: {
                                mt: 1,
                                mb: 2
                            },
                            label: "Urgently Seeking New Project",
                            color: "primary",
                            variant: "outlined"
                        }),
                        profile.expertProfile?.internationalTravel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_23__["default"], {
                            sx: {
                                mt: 1,
                                mb: 2
                            },
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Public__WEBPACK_IMPORTED_MODULE_22__["default"], {}),
                            label: "Available for International Travel",
                            variant: "outlined",
                            color: "primary"
                        }),
                        profile.expertProfile?.lookingForFieldWork && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_23__["default"], {
                            sx: {
                                mt: 1,
                                mb: 2
                            },
                            label: "Looking for Field Work",
                            color: "primary",
                            variant: "outlined"
                        }),
                        profile.expertProfile?.lookingForPartTimeWork && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_23__["default"], {
                            sx: {
                                mt: 1,
                                mb: 2
                            },
                            label: "Looking for Part-time or Short-term Work",
                            color: "primary",
                            variant: "outlined"
                        }),
                        profile.expertProfile?.availableForSeagoing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_23__["default"], {
                            sx: {
                                mt: 1,
                                mb: 2
                            },
                            label: "Available for Seagoing Opportunities",
                            color: "primary",
                            variant: "outlined"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            component: "h6",
                            variant: "h6",
                            children: "Availability"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            component: "p",
                            variant: "body1",
                            paragraph: true,
                            children: profile.expertProfile?.availabilityDisplay?.join(", ")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            component: "h6",
                            variant: "h6",
                            children: "Experience"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            component: "p",
                            variant: "body1",
                            paragraph: true,
                            children: profile.expertProfile?.experience
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_21__["default"], {
                            variant: "middle",
                            sx: {
                                my: 2
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            variant: "contained",
                            color: "error",
                            size: "small",
                            startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_15__["default"], {}),
                            component: _Link__WEBPACK_IMPORTED_MODULE_18__/* .NextLinkComposed */ .Z,
                            to: {
                                pathname: "/profile/delete_profile"
                            },
                            children: "Delete SME Profile"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TabPanel, {
                value: value,
                index: 1,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        component: "p",
                        variant: "body1",
                        paragraph: true,
                        children: "This is where you can create and manage Projects that you’re looking to get assistance with from a SME on the site."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        variant: "contained",
                        size: "small",
                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_16__["default"], {}),
                        component: _Link__WEBPACK_IMPORTED_MODULE_18__/* .NextLinkComposed */ .Z,
                        to: {
                            pathname: "/profile/projects/add"
                        },
                        children: "Add Project"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_List__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        children: profile.projectsOwned?.map((project)=>{
                            return renderProjectList(project);
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

/***/ 5338:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProjectDeleteDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3655);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1353);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2356);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5790);
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5563);
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1009);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(797);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(150);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9095);
/* harmony import */ var _mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3505);
/* harmony import */ var _hooks_useProjects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5163);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__, _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__, _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5__, _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__, _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7__, _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__, _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_9__, _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__, _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__, _mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_12__, _hooks_useProjects__WEBPACK_IMPORTED_MODULE_13__]);
([_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__, _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__, _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5__, _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__, _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7__, _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__, _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_9__, _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__, _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__, _mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_12__, _hooks_useProjects__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













// local imports

function ProjectDeleteDialog({ project  }) {
    const { deleteProject  } = (0,_hooks_useProjects__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [isDeleted, setIsDeleted] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const handleClickOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setIsDeleted(false);
        setOpen(false);
        // redirect to user profile
        router.push("/profile/me?tabId=1");
    };
    const handleDelete = ()=>{
        deleteProject(project.id);
        setIsDeleted(true);
        setTimeout(handleClose, 2000);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__["default"], {
                title: "Delete Project",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    edge: "end",
                    "aria-label": "delete",
                    onClick: handleClickOpen,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_9__["default"], {})
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
                open: open,
                onClose: handleClose,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        children: [
                            "Delete Project - ",
                            project.title
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        children: isDeleted ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                    color: "success",
                                    sx: {
                                        fontSize: 80
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    children: "Project Deleted"
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                children: [
                                    "You are about to delete the Project - ",
                                    project.title,
                                    ". Are you sure?"
                                ]
                            })
                        })
                    }),
                    !isDeleted && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                onClick: handleClose,
                                children: "Cancel"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                color: "error",
                                onClick: handleDelete,
                                children: "Confirm Delete"
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

/***/ 572:
/***/ ((module) => {

module.exports = require("@azure/msal-browser");

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

/***/ 3505:
/***/ ((module) => {

module.exports = import("@mui/icons-material/CheckCircleOutline");;

/***/ }),

/***/ 9866:
/***/ ((module) => {

module.exports = import("@mui/icons-material/Comment");;

/***/ }),

/***/ 797:
/***/ ((module) => {

module.exports = import("@mui/icons-material/Delete");;

/***/ }),

/***/ 2249:
/***/ ((module) => {

module.exports = import("@mui/icons-material/Edit");;

/***/ }),

/***/ 1382:
/***/ ((module) => {

module.exports = import("@mui/icons-material/OpenInNew");;

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = import("@mui/icons-material/Public");;

/***/ }),

/***/ 1489:
/***/ ((module) => {

module.exports = import("@mui/material");;

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

/***/ 2613:
/***/ ((module) => {

module.exports = import("@mui/material/Divider");;

/***/ }),

/***/ 9095:
/***/ ((module) => {

module.exports = import("@mui/material/IconButton");;

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = import("@mui/material/Link");;

/***/ }),

/***/ 4082:
/***/ ((module) => {

module.exports = import("@mui/material/List");;

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = import("@mui/material/ListItem");;

/***/ }),

/***/ 5613:
/***/ ((module) => {

module.exports = import("@mui/material/ListItemButton");;

/***/ }),

/***/ 2143:
/***/ ((module) => {

module.exports = import("@mui/material/ListItemIcon");;

/***/ }),

/***/ 5427:
/***/ ((module) => {

module.exports = import("@mui/material/ListItemText");;

/***/ }),

/***/ 3631:
/***/ ((module) => {

module.exports = import("@mui/material/Stack");;

/***/ }),

/***/ 8561:
/***/ ((module) => {

module.exports = import("@mui/material/Tab");;

/***/ }),

/***/ 5697:
/***/ ((module) => {

module.exports = import("@mui/material/Tabs");;

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,395,508,137,557,163,518], () => (__webpack_exec__(9945)));
module.exports = __webpack_exports__;

})();