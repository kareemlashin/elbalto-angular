(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-medical-medical-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/medical/medical/medical.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/medical/medical/medical.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"med\">\r\n    <div class=\"row  border-left border-right border-bottom py-2\">\r\n        <div class=\"col-7 \">\r\n            <img src=\"assets/img/dr.png\" class=\"w-25 rounded-circle px-2\" alt=\"\" srcset=\"\">\r\n            <span>Kareem lashin</span>\r\n        </div>\r\n        <div class=\"col-5  d-flex  align-items-center p-0\">\r\n            <h6 class=\"text-center w-100\">Medical report</h6>\r\n        </div>\r\n    </div>\r\n    <div class=\"row pt-4 border-left border-right\">\r\n        <div class=\"col-md-12 my-3\">\r\n            <h6>Diagnosis</h6>\r\n            <textarea placeholder=\"Type Your Diagnosis\" name=\"\" class=\"w-100\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\r\n        </div>\r\n        <div class=\"col-md-12 my-3\">\r\n            <h6>Prescipition</h6>\r\n            <div class=\"row\">\r\n                <div class=\"col-6 inputs-med\">\r\n                    <input type=\"text\" id=\"medicalName\" placeholder=\"Medical Name\" class=\"w-100 inp\" required>\r\n                </div>\r\n                <div class=\"col-6 inputs-med\">\r\n                    <input type=\"text\" id=\"Doses\" required class=\"w-100 inp\" placeholder=\"Doses\">\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 my-3\">\r\n                <button id=\"addMedical\" disabled class=\"py-1 px-2\">ADD +</button>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\" id=\"itemMed\">\r\n\r\n                        <div class=\"col-4 my-2\">\r\n                            <div class=\"item-medical py-2 bg-white shadow text-center rounded-pill\">\r\n                                one</div>\r\n                        </div>\r\n                        <div class=\"col-4 my-2\">\r\n                            <div class=\"item-medical py-2 bg-white shadow text-center rounded-pill\">\r\n                                one</div>\r\n                        </div>\r\n                        <div class=\"col-4 my-2\">\r\n                            <div class=\"item-medical py-2 bg-white shadow text-center rounded-pill\">\r\n                                one</div>\r\n                        </div>\r\n                        <div class=\"col-4 my-2\">\r\n                            <div class=\"item-medical py-2 bg-white shadow text-center rounded-pill\">\r\n                                one</div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12 my-3\">\r\n            <h6>Diagnosis</h6>\r\n            <textarea placeholder=\"Type Your Diagnosis\" name=\"\" class=\"w-100\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\r\n        </div>\r\n        <div class=\"col-md-12 my-3 text-center\">\r\n            <button id=\"send\" class=\"w-50 rounded-pill py-2 text-center\">Send</button>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/features/medical/medical-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/features/medical/medical-routing.module.ts ***!
  \************************************************************/
/*! exports provided: MedicalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalRoutingModule", function() { return MedicalRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _medical_medical_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medical/medical.component */ "./src/app/features/medical/medical/medical.component.ts");




const routes = [
    { path: '', component: _medical_medical_component__WEBPACK_IMPORTED_MODULE_3__["MedicalComponent"] }
];
let MedicalRoutingModule = class MedicalRoutingModule {
};
MedicalRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MedicalRoutingModule);



/***/ }),

/***/ "./src/app/features/medical/medical.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/medical/medical.module.ts ***!
  \****************************************************/
/*! exports provided: MedicalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalModule", function() { return MedicalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _medical_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medical-routing.module */ "./src/app/features/medical/medical-routing.module.ts");
/* harmony import */ var _medical_medical_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./medical/medical.component */ "./src/app/features/medical/medical/medical.component.ts");





let MedicalModule = class MedicalModule {
};
MedicalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_medical_medical_component__WEBPACK_IMPORTED_MODULE_4__["MedicalComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _medical_routing_module__WEBPACK_IMPORTED_MODULE_3__["MedicalRoutingModule"],
        ]
    })
], MedicalModule);



/***/ }),

/***/ "./src/app/features/medical/medical/medical.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/features/medical/medical/medical.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL21lZGljYWwvbWVkaWNhbC9tZWRpY2FsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/features/medical/medical/medical.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/medical/medical/medical.component.ts ***!
  \***************************************************************/
/*! exports provided: MedicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalComponent", function() { return MedicalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MedicalComponent = class MedicalComponent {
    constructor() { }
    ngOnInit() {
    }
};
MedicalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-medical',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./medical.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/medical/medical/medical.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./medical.component.scss */ "./src/app/features/medical/medical/medical.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MedicalComponent);



/***/ })

}]);
//# sourceMappingURL=features-medical-medical-module-es2015.js.map