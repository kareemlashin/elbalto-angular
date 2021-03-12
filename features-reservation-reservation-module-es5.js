function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-reservation-reservation-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/reservation/reservation/reservation.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/reservation/reservation/reservation.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesReservationReservationReservationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"box-closeReservations\">\r\n    <i class=\"fas fa-times buttonClose\" id=\"boxCloseReservations\"></i>\r\n\r\n    <div class=\"box-close\">\r\n\r\n        <div class=\"title-close\">\r\n            <h6 class=\"px-2 py-3\"> Cancel Reservations?</h6>\r\n        </div>\r\n        <p class=\"px-2 py-1\">Are you sure want to cancel this Reservations?</p>\r\n        <div class=\"text-right\">\r\n            <button id=\"sureCancel\" class=\" my-3 p-1\">Yes,cancel</button>\r\n            <button id=\"backReservations\" class=\" my-3 mx-2 px-3 py-1\">back</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-7\">\r\n            <h6>Your Reservation</h6>\r\n\r\n        </div>\r\n        <div class=\"col-5 Reservation\" id=\"Reservation\">\r\n            <ul class=\"mt-2 mx-auto\">\r\n                <li class=\"text-center\" id=\"down-past\">Upcoming <i class=\"fas fa-chevron-down px-2\"></i></li>\r\n                <li class=\"py-1\" class=\"slide-down px-5 text-center\">\r\n                    <a [routerLink]=\"'/reservationpast'\">\r\n                                 Past</a>\r\n                </li>\r\n\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"row pt-2 px-1\">\r\n        <!--rtl-->\r\n        <h6>\r\n            <i class=\"fa fa-circle pr-2\"></i>today\r\n        </h6>\r\n        <div class=\"col-md-12  my-2\">\r\n            4:20pm\r\n            <div class=\"row item-Reservation bg-white shadow py-2 \">\r\n                <div class=\"col-3 pr-0\">\r\n                    <img src=\"assets/img/dr.png \" class=\" img-fluid rounded-circle\" alt=\"\">\r\n                </div>\r\n                <div class=\"col-4 d-flex align-items-center px-0\">\r\n                    <span class=\"px-1\">kareem lashin</span>\r\n                </div>\r\n                <div class=\"col-5 px-0 d-flex align-items-center justify-content-end px-0\">\r\n                    <button class=\"py-2 text-center call call-tody \">\r\n                                                            <a [routerLink]=\"'/videocall'\">\r\n                                                                <i\r\n                                                                class=\"fas fa-video \"></i>call\r\n                                                            </a>\r\n                                                            </button>\r\n                    <button class=\"bg-white shadow py-2 text-center cancel cancel-box-item\"><i\r\n                                                                class=\"fas fa-times  mx-1\"></i>cancel</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <h6 class=\"my-4\">\r\n            <i class=\"fa fa-circle pr-2\"></i>12,feb,2020\r\n        </h6>\r\n        <div class=\"col-md-12  my-2\">\r\n            4:20pm\r\n            <div class=\"row item-Reservation bg-white shadow py-2 \">\r\n                <div class=\"col-3 pr-0\">\r\n                    <img src=\"assets/img/dr.png \" class=\" img-fluid rounded-circle\" alt=\"\">\r\n                </div>\r\n                <div class=\"col-4 d-flex align-items-center px-0\">\r\n                    <span class=\"px-1\">kareem lashin</span>\r\n                </div>\r\n                <div class=\"col-5 px-0 d-flex align-items-center justify-content-end px-0\">\r\n                    <button class=\"py-2 text-center call call-future \"><i\r\n                                                                class=\"fas fa-video \"></i>call</button>\r\n                    <button class=\"bg-white shadow py-2 text-center cancel cancel-box-item\"><i\r\n                                                                class=\"fas fa-times  mx-1\"></i>cancel</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <h6 class=\"my-4\">\r\n            <i class=\"fa fa-circle pr-2\"></i>20,feb,2020\r\n        </h6>\r\n        <div class=\"col-md-12  my-2\">\r\n            4:20pm\r\n            <div class=\"row item-Reservation bg-white shadow py-2 \">\r\n                <div class=\"col-3 pr-0\">\r\n                    <img src=\"assets/img/dr.png \" class=\" img-fluid rounded-circle\" alt=\"\">\r\n                </div>\r\n                <div class=\"col-4 d-flex align-items-center px-0\">\r\n                    <span class=\"px-1\">kareem lashin</span>\r\n                </div>\r\n                <div class=\"col-5 px-0 d-flex align-items-center justify-content-end px-0\">\r\n                    <button class=\"py-2 text-center call call-future\"><i\r\n                                                                class=\"fas fa-video \"></i>call</button>\r\n                    <button class=\"bg-white shadow py-2 text-center cancel cancel-box-item\"><i\r\n                                                                class=\"fas fa-times  mx-1\"></i>cancel</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12  my-2\">\r\n            4:20pm\r\n            <div class=\"row item-Reservation bg-white shadow py-2 \">\r\n                <div class=\"col-3 pr-0\">\r\n                    <img src=\"assets/img/dr.png \" class=\" img-fluid rounded-circle\" alt=\"\">\r\n                </div>\r\n                <div class=\"col-4 d-flex align-items-center px-0\">\r\n                    <span class=\"px-1\">kareem lashin</span>\r\n                </div>\r\n                <div class=\"col-5 px-0 d-flex align-items-center justify-content-end px-0\">\r\n                    <button class=\"py-2 text-center call call-future \"><i\r\n                                                                class=\"fas fa-video \"></i>call</button>\r\n                    <button class=\"bg-white shadow py-2 text-center cancel cancel-box-item\"><i\r\n                                                                class=\"fas fa-times  mx-1\"></i>cancel</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <h6 class=\"my-4\">\r\n            <i class=\"fa fa-circle pr-2\"></i>30,feb,2020\r\n        </h6>\r\n        <div class=\"col-md-12  my-2\">\r\n            4:20pm\r\n            <div class=\"row item-Reservation bg-white shadow py-2 \">\r\n                <div class=\"col-3 pr-0\">\r\n                    <img src=\"assets/img/dr.png \" class=\" img-fluid rounded-circle\" alt=\"\">\r\n                </div>\r\n                <div class=\"col-4 d-flex align-items-center px-0\">\r\n                    <span class=\"px-1\">kareem lashin</span>\r\n                </div>\r\n                <div class=\"col-5 px-0 d-flex align-items-center justify-content-end px-0\">\r\n                    <button class=\"py-2 text-center call call-future \"><i\r\n                                                                class=\"fas fa-video \"></i>call</button>\r\n                    <button class=\"bg-white shadow py-2 text-center cancel cancel-box-item\"><i\r\n                                                                class=\"fas fa-times  mx-1\"></i>cancel</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>";
    /***/
  },

  /***/
  "./src/app/features/reservation/reservation-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/features/reservation/reservation-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: ReservationRoutingModule */

  /***/
  function srcAppFeaturesReservationReservationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReservationRoutingModule", function () {
      return ReservationRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reservation/reservation.component */
    "./src/app/features/reservation/reservation/reservation.component.ts");

    var routes = [{
      path: '',
      component: _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_3__["ReservationComponent"]
    }];

    var ReservationRoutingModule = function ReservationRoutingModule() {
      _classCallCheck(this, ReservationRoutingModule);
    };

    ReservationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReservationRoutingModule);
    /***/
  },

  /***/
  "./src/app/features/reservation/reservation.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/features/reservation/reservation.module.ts ***!
    \************************************************************/

  /*! exports provided: ReservationModule */

  /***/
  function srcAppFeaturesReservationReservationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReservationModule", function () {
      return ReservationModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _reservation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reservation-routing.module */
    "./src/app/features/reservation/reservation-routing.module.ts");
    /* harmony import */


    var _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./reservation/reservation.component */
    "./src/app/features/reservation/reservation/reservation.component.ts");

    var ReservationModule = function ReservationModule() {
      _classCallCheck(this, ReservationModule);
    };

    ReservationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_4__["ReservationComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _reservation_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReservationRoutingModule"]]
    })], ReservationModule);
    /***/
  },

  /***/
  "./src/app/features/reservation/reservation/reservation.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/features/reservation/reservation/reservation.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesReservationReservationReservationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#addcall {\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb24vRDpcXGZ1bGxzdGFja1xcZWxiYWx0b2FuZ3VsYXIvc3JjXFxhcHBcXGZlYXR1cmVzXFxyZXNlcnZhdGlvblxccmVzZXJ2YXRpb25cXHJlc2VydmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZGRjYWxsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn0iLCIjYWRkY2FsbCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/features/reservation/reservation/reservation.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/features/reservation/reservation/reservation.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ReservationComponent */

  /***/
  function srcAppFeaturesReservationReservationReservationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReservationComponent", function () {
      return ReservationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);

    var ReservationComponent =
    /*#__PURE__*/
    function () {
      function ReservationComponent() {
        _classCallCheck(this, ReservationComponent);
      }

      _createClass(ReservationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            var slide = 'none';
            jquery__WEBPACK_IMPORTED_MODULE_2__('#down-past').click(function () {
              if (slide === 'none') {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.slide-down').slideDown();
                slide = 'block';
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.slide-down').slideUp();
                slide = 'none';
              }
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('#addcall').css({
              display: 'block'
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('#backReservations , #boxCloseReservations').click(function () {
              ReservationsBox.style.display = 'none';
              ReservationsBoxStatus = 'none';
            });
            var myItemsCancel = Array.from(document.getElementsByClassName('cancel-box-item'));
            var ReservationsBox = document.getElementById('box-closeReservations');
            var ReservationsBoxStatus = jquery__WEBPACK_IMPORTED_MODULE_2__('#box-closeReservations').css('display');

            for (var i = 0; i < myItemsCancel.length; i++) {
              myItemsCancel[i].addEventListener('click', function (e) {
                if (ReservationsBoxStatus === 'none') {
                  ReservationsBox.style.display = 'flex';
                  ReservationsBoxStatus = 'flex';
                }
              });
            }
          });
        }
      }]);

      return ReservationComponent;
    }();

    ReservationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reservation',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./reservation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/reservation/reservation/reservation.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./reservation.component.scss */
      "./src/app/features/reservation/reservation/reservation.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ReservationComponent);
    /***/
  }
}]);
//# sourceMappingURL=features-reservation-reservation-module-es5.js.map