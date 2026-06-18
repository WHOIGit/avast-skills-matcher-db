"use strict";
exports.id = 236;
exports.ids = [236];
exports.modules = {

/***/ 8236:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SkillsCheckboxes)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8185);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8330);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6096);
/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8860);
/* harmony import */ var _mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _containers_skillsContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5137);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _containers_skillsContainer__WEBPACK_IMPORTED_MODULE_9__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _containers_skillsContainer__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









// local imports

// pass in "control" argument from React Hook Form based form
function SkillsCheckboxes({ control  }) {
    const skillsCtx = _containers_skillsContainer__WEBPACK_IMPORTED_MODULE_9__/* ["default"].useContainer */ .Z.useContainer();
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
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default()), {
                    label: skill.name,
                    control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_5___default()), {
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
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
        component: "fieldset",
        variant: "standard",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_7___default()), {
                component: "legend",
                children: "Skills"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormGroup__WEBPACK_IMPORTED_MODULE_8___default()), {
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
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;