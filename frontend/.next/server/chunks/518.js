"use strict";
exports.id = 518;
exports.ids = [518];
exports.modules = {

/***/ 6518:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SkillChip)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8369);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_skillsContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5137);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_containers_skillsContainer__WEBPACK_IMPORTED_MODULE_3__]);
_containers_skillsContainer__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function SkillChip({ skillId , size ="medium"  }) {
    const skillsCtx = _containers_skillsContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"].useContainer */ .Z.useContainer();
    // recursive search through the Skills array of nested objects to match the ID
    function getSkillDataById(skillId) {
        function searchByDepth(obj, targetId) {
            if (obj.id === targetId) {
                return obj;
            }
            if (obj.children) {
                for (let item of obj.children){
                    let check = searchByDepth(item, targetId);
                    if (check) {
                        return check;
                    }
                }
            }
            return null;
        }
        let result = null;
        if (skillsCtx.skills) {
            for (let obj of skillsCtx.skills){
                result = searchByDepth(obj, skillId);
                if (result) {
                    break;
                }
            }
        }
        return result;
    }
    const skill = getSkillDataById(skillId);
    if (!skillsCtx.skills) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Chip__WEBPACK_IMPORTED_MODULE_2___default()), {
        label: skill?.name,
        size: size
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;