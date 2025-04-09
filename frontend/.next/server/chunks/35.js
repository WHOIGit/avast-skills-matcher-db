"use strict";
exports.id = 35;
exports.ids = [35];
exports.modules = {

/***/ 5137:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7441);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_apiUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);
swr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useSkills = ()=>{
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_utils_apiUtils__WEBPACK_IMPORTED_MODULE_3__/* .API_BASE */ .Sg}/api/skills/`, _utils_apiUtils__WEBPACK_IMPORTED_MODULE_3__/* .fetcher */ ._i);
    const { 0: selectedSkills , 1: setSelectedSkills  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const { 0: filterInclusive , 1: setFilterInclusive  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const changeSelectStatus = (skill, checked)=>{
        const skillList = selectedSkills;
        if (checked) {
            setSelectedSkills([
                ...skillList,
                skill
            ]);
        } else if (!checked) {
            setSelectedSkills(skillList.filter((item)=>item.id !== skill.id));
        }
    };
    const clearSelectStatus = ()=>{
        setSelectedSkills([]);
    };
    return {
        skills: data,
        selectedSkills: selectedSkills,
        changeSelectStatus: changeSelectStatus,
        clearSelectStatus: clearSelectStatus,
        filterInclusive: filterInclusive,
        setFilterInclusive: setFilterInclusive,
        isLoading: !error && !data,
        isError: error
    };
};
const Skills = (0,unstated_next__WEBPACK_IMPORTED_MODULE_2__.createContainer)(useSkills);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;