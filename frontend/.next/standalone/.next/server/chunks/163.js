"use strict";
exports.id = 163;
exports.ids = [163];
exports.modules = {

/***/ 5163:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2766);
/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_azureAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(314);
/* harmony import */ var _utils_apiUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4530);
/* harmony import */ var _useProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6508);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, _useProfile__WEBPACK_IMPORTED_MODULE_2__]);
([swr__WEBPACK_IMPORTED_MODULE_0__, _useProfile__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const useProjects = (pid)=>{
    const { instance , inProgress  } = (0,_azure_msal_react__WEBPACK_IMPORTED_MODULE_1__.useMsal)();
    const { mutateProfile  } = (0,_useProfile__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { data: dataProjects , mutate: mutateProject , error: errorProjects ,  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(`${_utils_apiUtils__WEBPACK_IMPORTED_MODULE_3__/* .API_BASE */ .Sg}/api/projects/`, _utils_apiUtils__WEBPACK_IMPORTED_MODULE_3__/* .fetcher */ ._i);
    const { data: dataProject , error: errorProject  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(pid ? `${_utils_apiUtils__WEBPACK_IMPORTED_MODULE_3__/* .API_BASE */ .Sg}/api/projects/${pid}/` : null, _utils_apiUtils__WEBPACK_IMPORTED_MODULE_3__/* .fetcher */ ._i);
    const createProject = async (data)=>{
        const url = (0,_utils_apiUtils__WEBPACK_IMPORTED_MODULE_3__/* .makeUrl */ .bf)("/api/projects/");
        const payload = {
            title: data.title,
            description: data.description,
            skills: data.skills
        };
        const resp = await fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                Authorization: `Bearer ${await (0,_utils_azureAuth__WEBPACK_IMPORTED_MODULE_4__/* .getMsToken */ .a)(instance)}`,
                "Content-Type": "application/json"
            }
        });
        if (resp.ok) {
            // refresh the useSWR profile API data
            mutateProfile();
        }
        return resp;
    };
    const editProject = async (pid, data)=>{
        const url = (0,_utils_apiUtils__WEBPACK_IMPORTED_MODULE_3__/* .makeUrl */ .bf)(`/api/projects/${pid}/`);
        const payload = {
            title: data.title,
            description: data.description,
            skills: data.skills
        };
        const resp = await fetch(url, {
            method: "PATCH",
            body: JSON.stringify(payload),
            headers: {
                Authorization: `Bearer ${await (0,_utils_azureAuth__WEBPACK_IMPORTED_MODULE_4__/* .getMsToken */ .a)(instance)}`,
                "Content-Type": "application/json"
            }
        });
        if (resp.ok) {
            // refresh the useSWR profile API data
            mutateProject();
            mutateProfile();
        }
        return resp;
    };
    const deleteProject = async (pid)=>{
        const url = (0,_utils_apiUtils__WEBPACK_IMPORTED_MODULE_3__/* .makeUrl */ .bf)(`/api/projects/${pid}/`);
        const resp = await fetch(url, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${await (0,_utils_azureAuth__WEBPACK_IMPORTED_MODULE_4__/* .getMsToken */ .a)(instance)}`,
                "Content-Type": "application/json"
            }
        });
        if (resp.ok) {
            // refresh the useSWR profile API data
            mutateProfile();
        }
        return resp;
    };
    const contactProjectOwner = async (projectId, message)=>{
        const payload = {
            projectId,
            message
        };
        const url = (0,_utils_apiUtils__WEBPACK_IMPORTED_MODULE_3__/* .makeUrl */ .bf)(`/api/users/contact_project_owner/`);
        const resp = await fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                Authorization: `Bearer ${await (0,_utils_azureAuth__WEBPACK_IMPORTED_MODULE_4__/* .getMsToken */ .a)(instance)}`,
                "Content-Type": "application/json"
            }
        });
        return resp;
    };
    return {
        projects: dataProjects,
        project: dataProject,
        createProject: createProject,
        editProject: editProject,
        deleteProject: deleteProject,
        isLoading: !dataProjects && !errorProjects,
        isError: errorProjects,
        contactProjectOwner: contactProjectOwner
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useProjects);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;