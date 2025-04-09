"use strict";
exports.id = 395;
exports.ids = [395];
exports.modules = {

/***/ 4530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sg": () => (/* binding */ API_BASE),
/* harmony export */   "_i": () => (/* binding */ fetcher),
/* harmony export */   "bf": () => (/* binding */ makeUrl)
/* harmony export */ });
const API_BASE = "https://skillsdb-api.whoi.edu";
// standard no Auth fetcher for useSWR
function fetcher(url) {
    return fetch(url).then((r)=>r.json());
}
function makeUrl(endpoint) {
    return API_BASE + endpoint;
}


/***/ }),

/***/ 314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ getMsToken),
/* harmony export */   "b": () => (/* binding */ fetcherWithToken)
/* harmony export */ });
const AZURE_SCOPE_ID = "92b1a62d-d80c-4c3c-848f-b564ca55e5b9";
async function getMsToken(instance) {
    let accessToken;
    // get token from Azure AD for backend API
    // required scope format: "<backend_applicationid>/read" (DON'T USE "api://" starter from MS docs)
    const response = await instance.acquireTokenSilent({
        scopes: [
            `${AZURE_SCOPE_ID}/read`
        ]
    });
    accessToken = response.accessToken;
    return accessToken;
}
// async fetcher function for useSWR hook using token from MSAL
async function fetcherWithToken(url, instance) {
    return fetch(url, {
        headers: {
            Authorization: `Bearer ${await getMsToken(instance)}`
        }
    }).then((r)=>r.json());
}


/***/ })

};
;