"use strict";
exports.id = 508;
exports.ids = [508];
exports.modules = {

/***/ 6508:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2766);
/* harmony import */ var _azure_msal_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_azure_msal_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_azureAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(314);
/* harmony import */ var _utils_apiUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);
swr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const profileUrl = `${_utils_apiUtils__WEBPACK_IMPORTED_MODULE_2__/* .API_BASE */ .Sg}/api/users/me/`;
const expertsUrl = `${_utils_apiUtils__WEBPACK_IMPORTED_MODULE_2__/* .API_BASE */ .Sg}/api/experts/`;
const useProfile = ()=>{
    const { instance , inProgress  } = (0,_azure_msal_react__WEBPACK_IMPORTED_MODULE_1__.useMsal)();
    // use global mutate function for multiple SWR endpoints
    const { mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__.useSWRConfig)();
    const { data , mutate: mutateProfile , error ,  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])([
        profileUrl,
        instance
    ], _utils_azureAuth__WEBPACK_IMPORTED_MODULE_3__/* .fetcherWithToken */ .b);
    const createUser = async (firstName, lastName, email, password, userTypeId)=>{
        const url = (0,_utils_apiUtils__WEBPACK_IMPORTED_MODULE_2__/* .makeUrl */ .bf)("/api/users/");
        // default the Django username to use their email
        const username = email;
        // convert userType to array to match backend API field
        const userType = [
            userTypeId
        ];
        const resp = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                firstName,
                lastName,
                username,
                password,
                email,
                userType
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
        return resp;
    };
    const editProfile = async (firstName, lastName, title, supervisorEmail)=>{
        const url = (0,_utils_apiUtils__WEBPACK_IMPORTED_MODULE_2__/* .makeUrl */ .bf)(`/api/users/update_profile/`);
        const resp = await fetch(url, {
            method: "PATCH",
            body: JSON.stringify({
                firstName,
                lastName,
                title,
                supervisorEmail
            }),
            headers: {
                Authorization: `Bearer ${await (0,_utils_azureAuth__WEBPACK_IMPORTED_MODULE_3__/* .getMsToken */ .a)(instance)}`,
                "Content-Type": "application/json"
            }
        });
        if (resp.ok) {
            // const data = await resp.json();
            // refresh the useSWR profile API data
            mutateProfile();
            mutate(expertsUrl);
        }
        return resp;
    };
    const editExpertProfile = async (data)=>{
        const payload = {
            experience: data.experience,
            skills: data.skills,
            orcidId: data.orcidId,
            availability: data.availability
        };
        const url = (0,_utils_apiUtils__WEBPACK_IMPORTED_MODULE_2__/* .makeUrl */ .bf)(`/api/users/update_expert_profile/`);
        const resp = await fetch(url, {
            method: "PATCH",
            body: JSON.stringify(payload),
            headers: {
                Authorization: `Bearer ${await (0,_utils_azureAuth__WEBPACK_IMPORTED_MODULE_3__/* .getMsToken */ .a)(instance)}`,
                "Content-Type": "application/json"
            }
        });
        if (resp.ok) {
            // refresh the useSWR profile API data
            mutateProfile();
            mutate(expertsUrl);
        }
        return resp;
    };
    const uploadAvatar = async (image)=>{
        const url = (0,_utils_apiUtils__WEBPACK_IMPORTED_MODULE_2__/* .makeUrl */ .bf)(`/api/users/set_avatar/`);
        const body = new FormData();
        body.append("avatar", image);
        const resp = await fetch(url, {
            method: "PATCH",
            body,
            headers: {
                Authorization: `Bearer ${await (0,_utils_azureAuth__WEBPACK_IMPORTED_MODULE_3__/* .getMsToken */ .a)(instance)}`
            }
        });
        if (resp.ok) {
            // refresh the useSWR profile API data
            mutateProfile();
            mutate(expertsUrl);
        }
        return resp;
    };
    const deleteExpertProfile = async (action)=>{
        const payload = {
            action: action
        };
        const url = (0,_utils_apiUtils__WEBPACK_IMPORTED_MODULE_2__/* .makeUrl */ .bf)(`/api/users/delete_expert_profile/`);
        const resp = await fetch(url, {
            method: "PATCH",
            body: JSON.stringify(payload),
            headers: {
                Authorization: `Bearer ${await (0,_utils_azureAuth__WEBPACK_IMPORTED_MODULE_3__/* .getMsToken */ .a)(instance)}`,
                "Content-Type": "application/json"
            }
        });
        if (resp.ok) {
            // refresh the useSWR profile API data
            mutateProfile();
            mutate(expertsUrl);
        }
        return resp;
    };
    const contactExpert = async (expertId, message, projects)=>{
        const payload = {
            expertId,
            message,
            projects
        };
        const url = (0,_utils_apiUtils__WEBPACK_IMPORTED_MODULE_2__/* .makeUrl */ .bf)(`/api/users/contact_expert/`);
        const resp = await fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                Authorization: `Bearer ${await (0,_utils_azureAuth__WEBPACK_IMPORTED_MODULE_3__/* .getMsToken */ .a)(instance)}`,
                "Content-Type": "application/json"
            }
        });
        return resp;
    };
    return {
        profile: data,
        createUser: createUser,
        editProfile: editProfile,
        uploadAvatar: uploadAvatar,
        editExpertProfile: editExpertProfile,
        deleteExpertProfile: deleteExpertProfile,
        contactExpert: contactExpert,
        mutateProfile: mutateProfile
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useProfile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;