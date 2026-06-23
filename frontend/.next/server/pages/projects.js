"use strict";
(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 1667:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2160);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5859);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1489);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4106);
/* harmony import */ var _src_components_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4557);
/* harmony import */ var _src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6508);
/* harmony import */ var _src_components_ProjectsGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6081);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__, _mui_material_Container__WEBPACK_IMPORTED_MODULE_4__, _mui_material__WEBPACK_IMPORTED_MODULE_5__, _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_6__, _src_components_Link__WEBPACK_IMPORTED_MODULE_7__, _src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_8__, _src_components_ProjectsGrid__WEBPACK_IMPORTED_MODULE_9__]);
([_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__, _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__, _mui_material_Container__WEBPACK_IMPORTED_MODULE_4__, _mui_material__WEBPACK_IMPORTED_MODULE_5__, _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_6__, _src_components_Link__WEBPACK_IMPORTED_MODULE_7__, _src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_8__, _src_components_ProjectsGrid__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// local import



function Index() {
    const { profile  } = (0,_src_hooks_useProfile__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    console.log(profile);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
                sx: {
                    bgcolor: "background.paper",
                    pt: 3,
                    pb: 3
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    maxWidth: "md",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            component: "h1",
                            variant: "h4",
                            align: "center",
                            color: "text.primary",
                            gutterBottom: true,
                            children: "Welcome to the WHOI Skills Matcher DB"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Stack, {
                            sx: {
                                mt: 3
                            },
                            direction: "row",
                            spacing: 6,
                            justifyContent: "center",
                            divider: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {
                                orientation: "vertical",
                                flexItem: true
                            }),
                            children: [
                                !profile?.userType?.includes("EXPERT") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    sx: {
                                        textAlign: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            variant: "body1",
                                            align: "center",
                                            color: "text.secondary",
                                            paragraph: true,
                                            children: 'Want to offer your assistance on a Project? Create a "SME Profile" to highlight your skills, and then send a messasge to the Project Owner.'
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                            variant: "contained",
                                            startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
                                            component: _src_components_Link__WEBPACK_IMPORTED_MODULE_7__/* .NextLinkComposed */ .Z,
                                            to: {
                                                pathname: "/profile/me"
                                            },
                                            children: "Create SME Profile"
                                        }),
                                        " "
                                    ]
                                }),
                                !profile?.userType?.includes("PROJECT_OWNER") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    sx: {
                                        textAlign: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            variant: "body1",
                                            align: "center",
                                            color: "text.secondary",
                                            paragraph: true,
                                            children: 'Want to recruit help for your research or project? Create a "Project" that you can request assistance with from one of our users.'
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                            variant: "outlined",
                                            startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
                                            component: _src_components_Link__WEBPACK_IMPORTED_MODULE_7__/* .NextLinkComposed */ .Z,
                                            to: {
                                                pathname: "/profile/me"
                                            },
                                            children: "Create Project"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
                sx: {
                    my: 2
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    variant: "body1",
                    color: "text.secondary",
                    paragraph: true,
                    children: [
                        "The following ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: "Projects"
                        }),
                        " are looking for assistance:"
                    ]
                })
            }),
            profile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {
                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
                variant: "contained",
                component: _src_components_Link__WEBPACK_IMPORTED_MODULE_7__/* .NextLinkComposed */ .Z,
                to: {
                    pathname: "/profile/projects/add"
                },
                children: "Add Project"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
                sx: {
                    my: 4
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_ProjectsGrid__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7705:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProjectCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2766);
/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3926);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7391);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1949);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6250);
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1599);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9095);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2160);
/* harmony import */ var _mui_icons_material_ReadMore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9357);
/* harmony import */ var react_text_truncate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7410);
/* harmony import */ var react_text_truncate__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_text_truncate__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4557);
/* harmony import */ var _SkillChip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6518);
/* harmony import */ var _UnauthContactDialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3221);
/* harmony import */ var _ContactProjectDialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7009);
/* harmony import */ var _mui_icons_material_Public__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9796);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9146);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__, _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__, _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_5__, _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__, _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_7__, _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__, _mui_icons_material_ReadMore__WEBPACK_IMPORTED_MODULE_10__, _Link__WEBPACK_IMPORTED_MODULE_12__, _SkillChip__WEBPACK_IMPORTED_MODULE_13__, _UnauthContactDialog__WEBPACK_IMPORTED_MODULE_14__, _ContactProjectDialog__WEBPACK_IMPORTED_MODULE_15__, _mui_icons_material_Public__WEBPACK_IMPORTED_MODULE_16__, _mui_material_Chip__WEBPACK_IMPORTED_MODULE_17__]);
([_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__, _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__, _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_5__, _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__, _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_7__, _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__, _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__, _mui_icons_material_ReadMore__WEBPACK_IMPORTED_MODULE_10__, _Link__WEBPACK_IMPORTED_MODULE_12__, _SkillChip__WEBPACK_IMPORTED_MODULE_13__, _UnauthContactDialog__WEBPACK_IMPORTED_MODULE_14__, _ContactProjectDialog__WEBPACK_IMPORTED_MODULE_15__, _mui_icons_material_Public__WEBPACK_IMPORTED_MODULE_16__, _mui_material_Chip__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












// local imports






const SkillChipsList = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("ul")(({ theme  })=>({
        display: "flex",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 0,
        margin: 0,
        "& > li": {
            padding: theme.spacing(0.5)
        }
    }));
function ProjectCard({ project  }) {
    const isAuthenticated = (0,_azure_msal_react__WEBPACK_IMPORTED_MODULE_2__.useIsAuthenticated)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
        sx: {
            height: 380
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
                action: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    component: _Link__WEBPACK_IMPORTED_MODULE_12__/* .NextLinkComposed */ .Z,
                    to: {
                        pathname: `/projects/${project.id}`
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_ReadMore__WEBPACK_IMPORTED_MODULE_10__["default"], {})
                }),
                title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .C, {
                    href: `/projects/${project.id}`,
                    underline: "hover",
                    sx: {
                        fontSize: "1.4rem"
                    },
                    children: project.title
                }),
                subheader: `Project owner: ${project.projectOwnerDisplay}`
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
                sx: {
                    pt: 0
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SkillChipsList, {
                        children: project.skills?.map((id)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SkillChip__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    skillId: id,
                                    size: "small"
                                }, id)
                            }, id);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
                        variant: "body2",
                        color: "text.secondary",
                        sx: {
                            mt: 2
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_text_truncate__WEBPACK_IMPORTED_MODULE_11___default()), {
                            line: 4,
                            element: "span",
                            truncateText: "...",
                            text: project.description
                        })
                    }),
                    project.internationalTravel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_17__["default"], {
                        sx: {
                            mt: 1
                        },
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Public__WEBPACK_IMPORTED_MODULE_16__["default"], {}),
                        label: "International Travel Required",
                        variant: "outlined",
                        color: "primary"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_7__["default"], {
                disableSpacing: true,
                children: isAuthenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContactProjectDialog__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    project: project,
                    buttonType: "icon"
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UnauthContactDialog__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    item: project
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6081:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProjectsGrid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1489);
/* harmony import */ var _containers_skillsContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5137);
/* harmony import */ var _containers_searchContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5767);
/* harmony import */ var _hooks_useProjects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5163);
/* harmony import */ var _hooks_useProjectSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1218);
/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7705);
/* harmony import */ var _containers_intlTravelContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5049);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material__WEBPACK_IMPORTED_MODULE_2__, _containers_skillsContainer__WEBPACK_IMPORTED_MODULE_3__, _hooks_useProjects__WEBPACK_IMPORTED_MODULE_5__, _hooks_useProjectSearch__WEBPACK_IMPORTED_MODULE_6__, _ProjectCard__WEBPACK_IMPORTED_MODULE_7__]);
([_mui_material__WEBPACK_IMPORTED_MODULE_2__, _containers_skillsContainer__WEBPACK_IMPORTED_MODULE_3__, _hooks_useProjects__WEBPACK_IMPORTED_MODULE_5__, _hooks_useProjectSearch__WEBPACK_IMPORTED_MODULE_6__, _ProjectCard__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// local imports






function ProjectsGrid() {
    const search = _containers_searchContainer__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useContainer */ .Z.useContainer();
    const skillsCtx = _containers_skillsContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    const IntlTravelCtx = _containers_intlTravelContainer__WEBPACK_IMPORTED_MODULE_8__/* ["default"].useContainer */ .Z.useContainer();
    const { projects , isLoading , isError  } = (0,_hooks_useProjects__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { results  } = (0,_hooks_useProjectSearch__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(search.searchTerms);
    const [matchingProjects, setMatchingProjects] = react__WEBPACK_IMPORTED_MODULE_1__.useState(projects);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        // if search is active, set the base array of available experts to search results,
        // else use the full expert list
        let projectList;
        if (results) {
            projectList = results;
        } else {
            projectList = projects;
        }
        // filter all Experts against international travel
        if (projectList && IntlTravelCtx.internationalTravel) {
            const intlTravelList = projectList.filter((item)=>{
                return item.internationalTravel;
            });
            projectList = intlTravelList;
        }
        // filter all Engineers against the selected skills
        if (projectList) {
            if (!skillsCtx.selectedSkills.length) {
                // return all Engineers if no skills selected
                setMatchingProjects(projectList);
            } else {
                // use selected skill IDs to filter Engineers
                // get flat array of just IDs
                const skillList = skillsCtx.selectedSkills.map((skill)=>skill.id);
                const filteredList = projectList.filter((item)=>{
                    if (skillsCtx.filterInclusive) {
                        return skillList.some((id)=>item.skills.includes(id));
                    } else {
                        return skillList.every((id)=>item.skills.includes(id));
                    }
                });
                setMatchingProjects(filteredList);
            }
        }
    }, [
        projects,
        results,
        skillsCtx.filterInclusive,
        skillsCtx.selectedSkills,
        IntlTravelCtx.internationalTravel
    ]);
    if (!matchingProjects || !matchingProjects?.length) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                component: "p",
                gutterBottom: true,
                sx: {
                    mb: 2
                },
                children: "No Projects found."
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        container: true,
        spacing: 2,
        children: matchingProjects.map((project)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                item: true,
                size: 4,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProjectCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    project: project
                })
            }, project.id);
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1218:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useProjectSearch)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _utils_apiUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);
swr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useProjectSearch(searchTerms) {
    let params;
    if (searchTerms) {
        params = new URLSearchParams({
            q: searchTerms
        });
    }
    // search Experts by search term
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(params ? `${_utils_apiUtils__WEBPACK_IMPORTED_MODULE_1__/* .API_BASE */ .Sg}/api/projects/?${params}` : null, _utils_apiUtils__WEBPACK_IMPORTED_MODULE_1__/* .fetcher */ ._i);
    return {
        results: data,
        isLoading: !data && !error,
        isError: error
    };
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

/***/ 7410:
/***/ ((module) => {

module.exports = require("react-text-truncate");

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

/***/ 9796:
/***/ ((module) => {

module.exports = import("@mui/icons-material/Public");;

/***/ }),

/***/ 9357:
/***/ ((module) => {

module.exports = import("@mui/icons-material/ReadMore");;

/***/ }),

/***/ 2568:
/***/ ((module) => {

module.exports = import("@mui/icons-material/Send");;

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

/***/ 7391:
/***/ ((module) => {

module.exports = import("@mui/material/Card");;

/***/ }),

/***/ 1599:
/***/ ((module) => {

module.exports = import("@mui/material/CardActions");;

/***/ }),

/***/ 6250:
/***/ ((module) => {

module.exports = import("@mui/material/CardContent");;

/***/ }),

/***/ 1949:
/***/ ((module) => {

module.exports = import("@mui/material/CardHeader");;

/***/ }),

/***/ 9146:
/***/ ((module) => {

module.exports = import("@mui/material/Chip");;

/***/ }),

/***/ 39:
/***/ ((module) => {

module.exports = import("@mui/material/Container");;

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

/***/ 9095:
/***/ ((module) => {

module.exports = import("@mui/material/IconButton");;

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = import("@mui/material/Link");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,395,508,137,557,163,518,9,331], () => (__webpack_exec__(1667)));
module.exports = __webpack_exports__;

})();