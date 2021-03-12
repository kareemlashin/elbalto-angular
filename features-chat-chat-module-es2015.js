(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-chat-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/chat/boxchat/boxchat.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/chat/boxchat/boxchat.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row  border-left border-right border-bottom py-2\">\r\n    <div class=\"col-7 \">\r\n        <img src=\"assets/img/dr.png\" class=\"w-25 rounded-circle px-2\" alt=\"\" srcset=\"\">\r\n        <span>Kareem lashin</span>\r\n    </div>\r\n    <div class=\"col-5  d-flex  align-items-center p-0 justify-content-center\">\r\n        <button class=\"text-center rounded-pill px-2 py-2\" id=\"endChat\">End and write medical\r\n                        report</button>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12 border-left border-right chat-box\" id=\"stylescrollbar\">\r\n        <div class=\"row p-3 height-box\">\r\n            <div class=\"col-8 request message\">\r\n                <div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur Veniam!\r\n                    </p>\r\n                    <div class=\"time-message d-flex justify-content-end\">\r\n                        4:30pm\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-8 response message\">\r\n                <div>\r\n                    <p>\r\n                        Consectetur aut laudantium optio possimus quo sint facere laborum repellendus ullam\r\n                    </p>\r\n                    <div class=\"time-message d-flex justify-content-end\">\r\n                        4:30pm\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-8 request message\">\r\n                <div>\r\n                    <p>\r\n                        adipisicing elit. Consectetur Veniam!\r\n                    </p>\r\n                    <div class=\"time-message d-flex justify-content-end\">\r\n                        4:30pm\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-8 response message\">\r\n                <div>\r\n                    <p>\r\n                        laudantium optio possimus quo sint facere laborum repellendus ullam\r\n                    </p>\r\n                    <div class=\"time-message d-flex justify-content-end\">\r\n                        4:30pm\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-8 request message\">\r\n                <div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur Veniam!\r\n                    </p>\r\n                    <div class=\"time-message d-flex justify-content-end\">\r\n                        4:30pm\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-8 response message\">\r\n                <div>\r\n                    <p>\r\n                        optio possimus quo sint facere laborum repellendus ullam\r\n                    </p>\r\n                    <div class=\"time-message d-flex justify-content-end\">\r\n                        4:30pm\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-8 request message\">\r\n                <div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur Veniam!\r\n                    </p>\r\n                    <div class=\"time-message d-flex justify-content-end\">\r\n                        4:30pm\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-8 response message\">\r\n                <div>\r\n                    <p>\r\n                        aut laudantium optio possimus quo sint facere laborum repellendus ullam\r\n                    </p>\r\n                    <div class=\"time-message d-flex justify-content-end\">\r\n                        4:30pm\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n    <div id=\"items-button-chat\" class=\"col-md-12 my-2\">\r\n        <div class=\"row \">\r\n            <div class=\"col-1\">\r\n                <div class=\"upload-btn-wrapper\">\r\n                    <button class=\"btn p-2 button-chat rounded-circle \"><i\r\n                                    class=\"fas fa-file-upload\"></i></button>\r\n                    <input type=\"file\" name=\"myfile\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-10 \">\r\n                <input type=\"text\" class=\"w-100  py-2 rounded-pill\" placeholder=\"Type your Message\">\r\n            </div>\r\n            <div class=\"col-1  p-0 d-flex justify-content-center align-items-center\">\r\n                <button class=\"p-2 button-chat rounded-circle d-flex justify-content-center align-items-center\"><i\r\n                                    class=\"far fa-paper-plane\"></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/chat/chat/chat.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/chat/chat/chat.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"boxEndChat\">\r\n    <i class=\"fas fa-times buttonClose\" id=\"closeBoxEndChat\"></i>\r\n\r\n    <div class=\"box-end-chat\">\r\n\r\n        <div class=\"title-close\">\r\n            <h6 class=\"px-2 py-3\"> End the Conversation?</h6>\r\n        </div>\r\n        <p class=\"px-2 py-1\">Are you sure want to cancel this Conversation?</p>\r\n        <div class=\"text-right\">\r\n            <a [routerLink]=\"'/medical'\" chat>\r\n                <button id=\"sureEnd\" class=\" my-3 p-1 px-4\">Yes</button></a>\r\n            <button id=\"backChat\" class=\" my-3 mx-2 px-3 py-1\">back</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-boxchat></app-boxchat>");

/***/ }),

/***/ "./src/app/features/chat/boxchat/boxchat.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/features/chat/boxchat/boxchat.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2NoYXQvYm94Y2hhdC9ib3hjaGF0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/features/chat/boxchat/boxchat.component.ts":
/*!************************************************************!*\
  !*** ./src/app/features/chat/boxchat/boxchat.component.ts ***!
  \************************************************************/
/*! exports provided: BoxchatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxchatComponent", function() { return BoxchatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



let BoxchatComponent = class BoxchatComponent {
    constructor() { }
    ngOnInit() {
        // tslint:disable-next-line:only-arrow-functions
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            let chatHeight = jquery__WEBPACK_IMPORTED_MODULE_2__('.height-box').height();
            jquery__WEBPACK_IMPORTED_MODULE_2__('#stylescrollbar').animate({ scrollTop: chatHeight });
        });
    }
};
BoxchatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-boxchat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./boxchat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/chat/boxchat/boxchat.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./boxchat.component.scss */ "./src/app/features/chat/boxchat/boxchat.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BoxchatComponent);



/***/ }),

/***/ "./src/app/features/chat/chat.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/chat/chat.module.ts ***!
  \**********************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _chat_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.routing */ "./src/app/features/chat/chat.routing.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/features/chat/chat/chat.component.ts");
/* harmony import */ var _boxchat_boxchat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boxchat/boxchat.component */ "./src/app/features/chat/boxchat/boxchat.component.ts");






let ChatModule = class ChatModule {
};
ChatModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"], _boxchat_boxchat_component__WEBPACK_IMPORTED_MODULE_5__["BoxchatComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _chat_routing__WEBPACK_IMPORTED_MODULE_3__["ChatRoutingModule"],
        ]
    })
], ChatModule);



/***/ }),

/***/ "./src/app/features/chat/chat.routing.ts":
/*!***********************************************!*\
  !*** ./src/app/features/chat/chat.routing.ts ***!
  \***********************************************/
/*! exports provided: ChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/features/chat/chat/chat.component.ts");




const routes = [
    { path: '', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"] }
];
let ChatRoutingModule = class ChatRoutingModule {
};
ChatRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ChatRoutingModule);



/***/ }),

/***/ "./src/app/features/chat/chat/chat.component.scss":
/*!********************************************************!*\
  !*** ./src/app/features/chat/chat/chat.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2NoYXQvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/features/chat/chat/chat.component.ts":
/*!******************************************************!*\
  !*** ./src/app/features/chat/chat/chat.component.ts ***!
  \******************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



let ChatComponent = class ChatComponent {
    constructor() { }
    ngOnInit() {
        // tslint:disable-next-line:only-arrow-functions
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            // tslint:disable-next-line:only-arrow-functions
            jquery__WEBPACK_IMPORTED_MODULE_2__(document).mouseup(function (e) {
                let container = jquery__WEBPACK_IMPORTED_MODULE_2__('.box-end-chat');
                if (!container.is(e.target)
                    && container.has(e.target).length === 0) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__('#boxEndChat').hide();
                }
            });
            // tslint:disable-next-line:only-arrow-functions
            jquery__WEBPACK_IMPORTED_MODULE_2__('#endChat').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#boxEndChat').css('display', 'flex');
            });
            let chatHeight = jquery__WEBPACK_IMPORTED_MODULE_2__('.height-box').height();
            jquery__WEBPACK_IMPORTED_MODULE_2__('#stylescrollbar').animate({ scrollTop: chatHeight });
            // tslint:disable-next-line:only-arrow-functions
            jquery__WEBPACK_IMPORTED_MODULE_2__('#backChat , #closeBoxEndChat').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#boxEndChat').css('display', 'none');
            });
        });
    }
};
ChatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/chat/chat/chat.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chat.component.scss */ "./src/app/features/chat/chat/chat.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ChatComponent);



/***/ })

}]);
//# sourceMappingURL=features-chat-chat-module-es2015.js.map