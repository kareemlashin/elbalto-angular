function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/app.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"clearfix  all-page\" id=\"mainPage\">\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/home-content/home-content.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/home-content/home-content.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeComponentsHomeContentHomeContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h6>Your schedules</h6>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n        <div id=\"schedule\" class=\"col-md-12 bg-white shadow calender Reservation-home-schedule  py-3 position-relative\">\r\n            <div class=\"d-flex justify-content-center align-items-center my-2\">\r\n                <div class=\"d-flex justify-content-center align-items-center\">\r\n                    <span class=\"d-inline-block plate-one plate\"></span>\r\n                    <span class=\"px-2 plate-name\">Active</span>\r\n                </div>\r\n                <div class=\"d-flex justify-content-center align-items-center\">\r\n                    <span class=\"d-inline-block plate-two plate\"></span>\r\n                    <span class=\"px-2 plate-name \">Un Active</span>\r\n                </div>\r\n                <div class=\"d-flex justify-content-center align-items-center\">\r\n                    <span class=\"d-inline-block plate-three plate\"></span>\r\n                    <span class=\"px-2 plate-name\">two</span>\r\n                </div>\r\n                <div class=\"d-flex justify-content-center align-items-center\">\r\n                    <span class=\"d-inline-block plate-four plate\"></span>\r\n                    <span class=\"px-2 plate-name\">three</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"text-center mb-3\">Marsh 2020</div>\r\n\r\n            <owl-carousel-o [options]=\"customOptions\" class=\"my-2\">\r\n                <ng-template carouselSlide>\r\n                    <div class=\" slide\">\r\n                        <div class=\"date\">sat</div>\r\n                        <h4 class=\"day plate-one\" id=\"1-3-2020\">1</h4>\r\n                    </div>\r\n                </ng-template>\r\n                <ng-template carouselSlide>\r\n                    <div class=\" slide\">\r\n                        <div class=\"date\">sat</div>\r\n                        <h4 class=\"day plate-four\" id=\"2-3-2020\">2</h4>\r\n                    </div>\r\n                </ng-template>\r\n                <ng-template carouselSlide>\r\n                    <div class=\" slide\">\r\n                        <div class=\"date\">sat</div>\r\n                        <h4 class=\"day plate-three\" id=\"3-3-2020\">3</h4>\r\n                    </div>\r\n                </ng-template>\r\n                <ng-template carouselSlide>\r\n                    <div class=\" slide\">\r\n                        <div class=\"date\">sat</div>\r\n                        <h4 class=\"day plate-two\" id=\"4-3-2020\">4</h4>\r\n                    </div>\r\n                </ng-template>\r\n                <ng-template carouselSlide>\r\n                    <div class=\" slide\">\r\n                        <div class=\"date\">sat</div>\r\n                        <h4 class=\"day\" id=\"5-3-2020\">5</h4>\r\n                    </div>\r\n                </ng-template>\r\n                <ng-template carouselSlide>\r\n                    <div class=\" slide\">\r\n                        <div class=\"date\">sat</div>\r\n                        <h4 class=\"day\" id=\"6-3-2020\">6</h4>\r\n                    </div>\r\n                </ng-template>\r\n                <ng-template carouselSlide>\r\n                    <div class=\" slide\">\r\n                        <div class=\"date\">sat</div>\r\n                        <h4 class=\"day\" id=\"7-3-2020\">7</h4>\r\n                    </div>\r\n                </ng-template>\r\n            </owl-carousel-o>\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row pt-3 6-3-2020-Reservation Reservation-home schedule\">\r\n        <div class=\"col-md-4 my-2\">\r\n            <div class=\"item-schedule bg-active shadow\">\r\n                <img src=\"assets/img/dr.png\" class=\"img-fluid w-25  rounded-circle\" alt=\"\" srcset=\"\">\r\n                <span class=\"pl-1\">kareem </span>\r\n                <span class=\"bedge-date\">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2\">\r\n            <div class=\"item-schedule bg-UnActive shadow\">\r\n                <img src=\"assets/img/notReservide.png\" class=\"img-fluid w-25  rounded-circle\" alt=\"\" srcset=\"\">\r\n                <span class=\"pl-1\">Not Reservide </span>\r\n                <span class=\"bedge-date\">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2\">\r\n            <div class=\"item-schedule bg-active shadow\">\r\n                <img src=\"assets/img/dr.png\" class=\"img-fluid w-25  rounded-circle\" alt=\"\" srcset=\"\">\r\n                <span class=\"pl-1\">kareem </span>\r\n                <span class=\"bedge-date\">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2\">\r\n            <div class=\"item-schedule bg-active shadow\">\r\n                <img src=\"assets/img/dr.png\" class=\"img-fluid w-25  rounded-circle\" alt=\"\" srcset=\"\">\r\n                <span class=\"pl-1\">kareem </span>\r\n                <span class=\"bedge-date\">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2\">\r\n            <div class=\"item-schedule bg-UnActive shadow\">\r\n                <img src=\"assets/img/notReservide.png\" class=\"img-fluid w-25  rounded-circle\" alt=\"\" srcset=\"\">\r\n                <span class=\"pl-1\">Not Reservide </span>\r\n                <span class=\"bedge-date\">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2\">\r\n            <div class=\"item-schedule bg-active shadow\">\r\n                <img src=\"assets/img/dr.png\" class=\"img-fluid w-25  rounded-circle\" alt=\"\" srcset=\"\">\r\n                <span class=\"pl-1\">kareem </span>\r\n                <span class=\"bedge-date\">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2\">\r\n            <div class=\"item-schedule bg-active shadow\">\r\n                <img src=\"assets/img/dr.png\" class=\"img-fluid w-25  rounded-circle\" alt=\"\" srcset=\"\">\r\n                <span class=\"pl-1\">kareem </span>\r\n                <span class=\"bedge-date\">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2\">\r\n            <div class=\"item-schedule bg-UnActive shadow\">\r\n                <img src=\"assets/img/notReservide.png\" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">Not Reservide </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row pt-3 5-3-2020-Reservation Reservation-home schedule \">\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-UnActive shadow \">\r\n                <img src=\"assets/img/notReservide.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">Not Reservide </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-UnActive shadow \">\r\n                <img src=\"assets/img/notReservide.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">Not Reservide </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">5:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-UnActive shadow \">\r\n                <img src=\"assets/img/notReservide.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">Not Reservide </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row pt-3 4-3-2020-Reservation Reservation-home schedule \">\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-UnActive shadow \">\r\n                <img src=\"assets/img/notReservide.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">Not Reservide </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-UnActive shadow \">\r\n                <img src=\"assets/img/notReservide.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">Not Reservide </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-UnActive shadow \">\r\n                <img src=\"assets/img/notReservide.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">Not Reservide </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row pt-3 3-3-2020-Reservation Reservation-home schedule \">\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-UnActive shadow \">\r\n                <img src=\"assets/img/notReservide.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">Not Reservide </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-UnActive shadow \">\r\n                <img src=\"assets/img/notReservide.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">Not Reservide </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-UnActive shadow \">\r\n                <img src=\"assets/img/notReservide.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">Not Reservide </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row pt-3 2-3-2020-Reservation Reservation-home schedule \">\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-UnActive shadow \">\r\n                <img src=\"assets/img/notReservide.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">Not Reservide </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-UnActive shadow \">\r\n                <img src=\"assets/img/notReservide.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">Not Reservide </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-UnActive shadow \">\r\n                <img src=\"assets/img/notReservide.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">Not Reservide </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row pt-3 1-3-2020-Reservation Reservation-home schedule \">\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-UnActive shadow \">\r\n                <img src=\"assets/img/notReservide.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">Not Reservide </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-UnActive shadow \">\r\n                <img src=\"assets/img/notReservide.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">Not Reservide </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-UnActive shadow \">\r\n                <img src=\"assets/img/notReservide.png\" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">Not Reservide </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 my-2 \">\r\n            <div class=\"item-schedule bg-active shadow \">\r\n                <img src=\"assets/img/dr.png \" class=\"img-fluid w-25 rounded-circle \" alt=\" \" srcset=\" \">\r\n                <span class=\"pl-1 \">kareem </span>\r\n                <span class=\"bedge-date \">4:20 pm</span>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row pt-3 7-3-2020-Reservation Reservation-home schedule \">\r\n        <div class=\"text-center my-2 col-md-12 \">\r\n            <button class=\"my-3 py-2 rounded-pill d-inline-block mx-auto w-50 text-center \" id=\"add-Reservation\">Add Reservation\r\n                                </button> </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/navbar/navbar.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/navbar/navbar.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav>\r\n  <div class=\"side-nav pt-4\">\r\n    <div class=\"container\">\r\n      <div class=\"row title-doctor\">\r\n        <div class=\"col-3 \"><img src=\"assets/img/dr.png \" class=\"img-fluid rounded-circle w-100\" alt=\"\" srcset=\"\"></div>\r\n        <div class=\"col-9 drName px-2\">Dr.Name doctor</div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <div class=\"nav-links pt-2\">\r\n        <ul>\r\n          <li><a [routerLink]=\"''\" routerLinkActive=\"activeLink\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n              <i class=\"fas fa-home px-3\"></i> HOME</a></li>\r\n          <li><a [routerLink]=\"'/agenada'\" routerLinkActive=\"activeLink\">\r\n              <i class=\"fas fa-book px-3\"></i>Agenda</a>\r\n          </li>\r\n          <li class=\"notafaction-item\">\r\n            <a [routerLink]=\"'/reservation'\" routerLinkActive=\"activeLink\">\r\n              <i class=\"fas fa-calendar-week px-3\"></i>Reservations</a>\r\n            <div class=\"notafaction\">2</div>\r\n          </li>\r\n          <li class=\"notafaction-item\">\r\n            <a [routerLink]=\"'/inbox'\" routerLinkActive=\"activeLink\">\r\n              <i class=\"fas fa-envelope px-3\"></i> inbox</a>\r\n            <div class=\"notafaction\">2</div>\r\n          </li>\r\n          <li><a [routerLink]=\"'/wallet'\" routerLinkActive=\"activeLink\"><i class=\"fas fa-wallet px-3\"></i> My wallet</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div>\r\n        <button class=\"my-2 py-2  rounded-pill button-add\" id=\"AddAvailableAppointment\">Add Available\r\n          Appointment</button>\r\n        <button class=\"my-1 py-2  rounded-pill button-add\" id=\"addcall\"><i class=\"fas fa-phone-alt px-1\"></i>Add phone\r\n          consultation</button>\r\n\r\n      </div>\r\n      <div class=\"walllet-nav-hide\">\r\n        <h6>Your Wallet</h6>\r\n        <div class=\"Wallet-nav bg-white shadow w-75 p-3\">\r\n          <h5> My Credit</h5>\r\n          <p>1220 EGP</p>\r\n          <h5>Dye by</h5>\r\n          <p>11/1/2101</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<div id=\"box-Add\">\r\n  <i class=\"fas fa-times\" id=\"buttonCloseAdd\"></i>\r\n\r\n  <div class=\"box-chose-time\">\r\n    <div class=\"title-close px-2 py-2\">\r\n      <h6> Add Available Appointment</h6>\r\n    </div>\r\n    <div class=\"container\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 pt-3\">\r\n          <h6>Available From</h6>\r\n          <div class=\"row \">\r\n            <div class=\"col-6\">\r\n              <label for=\"hours-Available-add\">\r\n                <select id=\"hours-Available-add\">\r\n                  <option value=\"1pm\">1pm</option>\r\n                  <option value=\"2pm\">2pm</option>\r\n                  <option value=\"3pm\">3pm</option>\r\n                  <option value=\"4pm\">4pm</option>\r\n                  <option value=\"5pm\">5pm</option>\r\n                  <option value=\"7pm\">7pm</option>\r\n                  <option value=\"8pm\">8pm</option>\r\n                  <option value=\"9pm\">9pm</option>\r\n                  <option value=\"10pm\">10pm</option>\r\n                </select>\r\n              </label>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <label for=\"min-Available-add\">\r\n                <select id=\"min-Available-add\">\r\n                  <option value=\"1\">1</option>\r\n                  <option value=\"2\">2</option>\r\n                  <option value=\"3\">3</option>\r\n                  <option value=\"4\">4</option>\r\n                  <option value=\"5\">5</option>\r\n                  <option value=\"7\">7</option>\r\n                  <option value=\"8\">8</option>\r\n                  <option value=\"9\">9</option>\r\n                  <option value=\"10\">10</option>\r\n                </select>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 pt-3\">\r\n          <h6>To</h6>\r\n\r\n          <div class=\"row \">\r\n            <div class=\"col-6\">\r\n              <label for=\"hours-to-add\">\r\n                <select id=\"hours-to-add\">\r\n                  <option value=\"1pm\">1pm</option>\r\n                  <option value=\"2pm\">2pm</option>\r\n                  <option value=\"3pm\">3pm</option>\r\n                  <option value=\"4pm\">4pm</option>\r\n                  <option value=\"5pm\">5pm</option>\r\n                  <option value=\"7pm\">7pm</option>\r\n                  <option value=\"8pm\">8pm</option>\r\n                  <option value=\"9pm\">9pm</option>\r\n                  <option value=\"10pm\">10pm</option>\r\n                </select>\r\n              </label>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <label for=\"min-to-add\">\r\n                <select id=\"min-to-add\">\r\n                  <option value=\"1\">1</option>\r\n                  <option value=\"2\">2</option>\r\n                  <option value=\"3\">3</option>\r\n                  <option value=\"4\">4</option>\r\n                  <option value=\"5\">5</option>\r\n                  <option value=\"7\">7</option>\r\n                  <option value=\"8\">8</option>\r\n                  <option value=\"9\">9</option>\r\n                  <option value=\"10\">10</option>\r\n                </select>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div class=\"row \">\r\n          <div class=\"col-4 mx-auto\">\r\n            <div>\r\n              <input id=\"OnlineConsultationAdd\" value=\"Online Consultation\" class=\"radio-custom\"\r\n                name=\"radio-group-modify\" type=\"radio\" checked>\r\n              <label for=\"OnlineConsultationAdd\" class=\"radio-custom-label\">\r\n                <span class=\"mx-2\">Online\r\n                  consultation</span></label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4 mx-auto\">\r\n            <div></div>\r\n            <input id=\"ChatAdd\" class=\"radio-custom\" value=\"chat\" name=\"radio-group-modify\" type=\"radio\">\r\n            <label for=\"ChatAdd\" class=\"radio-custom-label\"><span class=\"mx-2\">phone\r\n              </span> </label>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"text-center\">\r\n      <button id=\"AddButton\" class=\"my-3 rounded-pill\">ADD</button>\r\n      <button id=\"modify-back\" class=\"my-3 rounded-pill mx-2\">back</button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/sidemessage/sidemessage.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/sidemessage/sidemessage.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeComponentsSidemessageSidemessageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h6>\r\n    Your recent chat <span class=\"getEnd\" [routerLink]=\"'/inbox'\"><a>See ALL</a></span></h6>\r\n<div class=\"recent-chat my-3 p-2  bg-white shadow \">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-2 p-0\"><img src=\"assets/img/dr.png \" class=\"img-fluid rounded-circle\" alt=\"\" srcset=\"\">\r\n            </div>\r\n            <div class=\"col-10 pl-2 pt-2\">\r\n                <h6>Kareem lshin</h6>\r\n                <p>thank you</p>\r\n                <div class=\"time\">\r\n                    4:30 Am\r\n                </div>\r\n                <div class=\"state-show\">\r\n                    <i class=\"fas fa-lock\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"countNotification rounded-circle\">\r\n        10\r\n    </div>\r\n</div>\r\n\r\n<div class=\"recent-chat my-3 p-2  bg-white shadow \">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-2 p-0\"><img src=\"assets/img/dr.png \" class=\"img-fluid rounded-circle\" alt=\"\" srcset=\"\">\r\n            </div>\r\n            <div class=\"col-10 pl-2 pt-2\">\r\n                <h6>Kareem lshin</h6>\r\n                <p>thank you</p>\r\n                <div class=\"time\">\r\n                    4:30 Am\r\n                </div>\r\n                <div class=\"state-show\">\r\n                    <i class=\"fas fa-lock\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"countNotification rounded-circle\">\r\n        10\r\n    </div>\r\n</div>\r\n\r\n<div class=\"recent-chat my-3 p-2  bg-white shadow \">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-2 p-0\"><img src=\"assets/img/dr.png \" class=\"img-fluid rounded-circle\" alt=\"\" srcset=\"\">\r\n            </div>\r\n            <div class=\"col-10 pl-2 pt-2\">\r\n                <h6>Kareem lshin</h6>\r\n                <p>thank you</p>\r\n                <div class=\"time\">\r\n                    4:30 Am\r\n                </div>\r\n                <div class=\"state-show\">\r\n                    <i class=\"fas fa-lock\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"countNotification rounded-circle\">\r\n        10\r\n    </div>\r\n</div>\r\n<h6 class=\"mt-4\">\r\n    Your recent Reservation <span class=\"getEnd\" [routerLink]=\"'/reservation'\"><a>See ALL</a></span></h6>\r\n<div class=\"col-md-12  my-2\">\r\n    <div class=\"row item-Reservation bg-white shadow py-2 \">\r\n        <div class=\"col-3 pr-0\">\r\n            <img src=\"assets/img/dr.png \" class=\" img-fluid rounded-circle\" alt=\"\">\r\n        </div>\r\n        <div class=\"col-4 d-flex align-items-center px-0\">\r\n            <span class=\"px-1\">kareem lashin</span>\r\n        </div>\r\n        <div class=\"col-5 px-0 d-flex align-items-center justify-content-end px-0\">\r\n            <button class=\"py-1 text-center call call-future\"><i\r\n                        class=\"fas fa-video \"></i>call</button>\r\n            <button class=\"bg-white shadow py-1 text-center cancel cancel-box-item\"><i\r\n                        class=\"fas fa-times  \"></i>cancel</button>\r\n        </div>\r\n        <div class=\"time time-Reservation\">\r\n            4:30 Am\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"col-md-12  my-2\">\r\n    <div class=\"row item-Reservation bg-white shadow py-2 \">\r\n        <div class=\"col-3 pr-0\">\r\n            <img src=\"assets/img/dr.png \" class=\" img-fluid rounded-circle\" alt=\"\">\r\n        </div>\r\n        <div class=\"col-4 d-flex align-items-center px-0\">\r\n            <span class=\"px-1\">kareem lashin</span>\r\n        </div>\r\n        <div class=\"col-5 px-0 d-flex align-items-center justify-content-end px-0\">\r\n            <button class=\"py-1 text-center call call-future\"><i\r\n                    class=\"fas fa-video \"></i>call</button>\r\n            <button class=\"bg-white shadow py-1 text-center cancel cancel-box-item\"><i\r\n                    class=\"fas fa-times  \"></i>cancel</button>\r\n        </div>\r\n        <div class=\"time time-Reservation\">\r\n            4:30 Am\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"col-md-12  my-2\">\r\n    <div class=\"row item-Reservation bg-white shadow py-2 \">\r\n        <div class=\"col-3 pr-0\">\r\n            <img src=\"assets/img/dr.png \" class=\" img-fluid rounded-circle\" alt=\"\">\r\n        </div>\r\n        <div class=\"col-4 d-flex align-items-center px-0\">\r\n            <span class=\"px-1\">kareem lashin</span>\r\n        </div>\r\n        <div class=\"col-5 px-0 d-flex align-items-center justify-content-end px-0\">\r\n\r\n            <button class=\"py-1 text-center call call-tody \">\r\n                        <a [routerLink]=\"'/videocall'\">\r\n                            <i\r\n                            class=\"fas fa-video \"></i>call\r\n                        </a>\r\n                    </button>\r\n            <button class=\"bg-white shadow py-1 text-center cancel cancel-box-item\"><i\r\n                    class=\"fas fa-times\"></i>cancel</button>\r\n        </div>\r\n        <div class=\"time time-Reservation\">\r\n            4:30 Am\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"box-closeReservations\">\r\n    <i class=\"fas fa-times buttonClose\" id=\"boxCloseReservations\"></i>\r\n\r\n    <div class=\"box-close\">\r\n        <div class=\"title-close\">\r\n            <h6 class=\"px-2 py-3\"> Cancel Reservations?</h6>\r\n        </div>\r\n        <p class=\"px-2 py-1\">Are you sure want to cancel this Reservations?</p>\r\n        <div class=\"text-right\">\r\n            <button id=\"sureCancel\" class=\" my-3 p-1\">Yes,cancel</button>\r\n            <button id=\"backReservations\" class=\" my-3 mx-2 px-3 py-1\">back</button>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/topnav/topnav.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/topnav/topnav.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeComponentsTopnavTopnavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"top-offset\"></div>\r\n<div class=\"topNav  fixed-top p-2\">\r\n    <div class=\"container login-nav\">\r\n        <i class=\"fas fa-bars pt-1\" id=\"bars\"></i>\r\n\r\n        <i class=\"fas fa-bell\" id=\"notification\"><span>7</span></i>\r\n        <i class=\"fas fa-sort-down px-3\" id=\"setting\"></i>\r\n    </div>\r\n</div>\r\n<div class=\"drop-down-notification px-3 py-2\">\r\n    <div class=\"item-notification bg-white border my-2 py-2\">\r\n        <div class=\"row \">\r\n            <div class=\"col-2 d-flex  align-items-center justify-content-center\">\r\n                <i class=\"fas fa-book pl-3\"></i>\r\n            </div>\r\n            <div class=\"col-10\">\r\n                <h6>Agenda</h6>\r\n                <p>\r\n                    sit amet consectetur adipisicing elit. Ad laudantium neque temporibus itaque\r\n\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"item-notification bg-white border my-2 py-2\">\r\n        <div class=\"row  \">\r\n            <div class=\"col-2 d-flex  align-items-center\">\r\n                <i class=\"fas fa-book \"></i>\r\n            </div>\r\n            <div class=\"col-10\">\r\n                <h6>Agenda</h6>\r\n                <p>\r\n                    sit amet consectetur adipisicing elit. Ad laudantium neque temporibus itaque\r\n\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"item-notification bg-white border my-2 py-2\">\r\n        <div class=\"row  \">\r\n            <div class=\"col-2 d-flex  align-items-center\">\r\n                <i class=\"fas fa-book \"></i>\r\n            </div>\r\n            <div class=\"col-10\">\r\n                <h6>Agenda</h6>\r\n                <p>\r\n                    sit amet consectetur adipisicing elit. Ad laudantium neque temporibus itaque\r\n\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"item-notification bg-white border my-2 py-2\">\r\n        <div class=\"row \">\r\n            <div class=\"col-2 d-flex  align-items-center\">\r\n                <i class=\"fas fa-book \"></i>\r\n            </div>\r\n            <div class=\"col-10\">\r\n                <h6>Agenda</h6>\r\n                <p>\r\n                    sit amet consectetur adipisicing elit. Ad laudantium neque temporibus itaque\r\n\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"drop-down-setting p-2\">\r\n    <ul>\r\n        <li>\r\n            <a href=\"\">\r\n                <i class=\"fas fa-long-arrow-alt-left px-2\"></i>log out\r\n            </a>\r\n        </li>\r\n        <li><a [routerLink]=\"'/editprofile'\"><i class=\"fas fa-user-edit px-2\"></i>Edit Profile</a></li>\r\n        <li><a [routerLink]=\"'/profile'\"><i class=\"fas fa-user px-2\"></i> Profile</a></li>\r\n        <li><a [routerLink]=\"'/signup'\"><i class=\"fas fa-sign-in-alt px-2\"></i>sign Up</a></li>\r\n        <li><a [routerLink]=\"'/login'\"><i class=\"fas fa-sign-in-alt px-2\"></i>login</a></li>\r\n\r\n    </ul>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/pages/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/pages/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePagesHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!---->\r\n<app-topnav></app-topnav>\r\n<div class=\"container-cusom\">\r\n    <app-navbar></app-navbar>\r\n    <main>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-7\">\r\n                    <router-outlet></router-outlet>\r\n                </div>\r\n\r\n                <div class=\"col-md-5 chat-media\">\r\n                    <app-sidemessage></app-sidemessage>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </main>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: home, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "home", function () {
      return home;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components */
    "./src/app/components/index.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home */
    "./src/app/home/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function home() {
      return _home__WEBPACK_IMPORTED_MODULE_9__["HomeModule"].forRoot();
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_components__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"], // RouterModule,
      home()],
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__["HashLocationStrategy"]
      }],
      bootstrap: [_components__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [// { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: 'signup',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sign-up-sign-up-module */
        "sign-up-sign-up-module").then(__webpack_require__.bind(null,
        /*! ./sign-up/sign-up.module */
        "./src/app/sign-up/sign-up.module.ts")).then(function (signup) {
          return signup.SignUpModule;
        });
      }
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (home) {
          return home.HomeModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (login) {
          return login.LoginModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/components/app.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/components/app.component.ts ***!
    \*********************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppComponentsAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        // tslint:disable-next-line:use-lifecycle-interface
        value: function ngOnInit() {
          // tslint:disable-next-line:only-arrow-functions
          jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            var topNav;
            topNav = jquery__WEBPACK_IMPORTED_MODULE_2__('.topNav').height();
            jquery__WEBPACK_IMPORTED_MODULE_2__('#mainPage').css({
              marginTop: topNav
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('main').css({
              marginTop: topNav + 10
            }); // tslint:disable-next-line:only-arrow-functions

            jquery__WEBPACK_IMPORTED_MODULE_2__('#AddAvailableAppointment').click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_2__('#box-Add').css({
                display: 'flex'
              });
            }); // tslint:disable-next-line:only-arrow-functions

            jquery__WEBPACK_IMPORTED_MODULE_2__('#AddButton ,#buttonCloseAdd').click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_2__('#box-Add').fadeOut(1000);
            }); // tslint:disable-next-line:only-arrow-functions

            jquery__WEBPACK_IMPORTED_MODULE_2__('body').click(function () {
              var $target;
              $target = jquery__WEBPACK_IMPORTED_MODULE_2__(event.target);

              if (!$target.is('#setting')) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('body').find('.drop-down-setting').fadeOut();
              }
            }); // tslint:disable-next-line:only-arrow-functions

            jquery__WEBPACK_IMPORTED_MODULE_2__('body').click(function () {
              var $target;
              $target = jquery__WEBPACK_IMPORTED_MODULE_2__(event.target);

              if (!$target.is('#notification')) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('body').find('.drop-down-notification').fadeOut();
              }
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('.drop-down-notification , .drop-down-setting').css({
              top: topNav + 10
            });
            var settingStatus = jquery__WEBPACK_IMPORTED_MODULE_2__('.drop-down-setting').css('display'); // tslint:disable-next-line:only-arrow-functions

            jquery__WEBPACK_IMPORTED_MODULE_2__('#setting').click(function () {
              if (settingStatus === 'none') {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.drop-down-setting').fadeIn();
                settingStatus = 'block';
              } else if (settingStatus === 'block') {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.drop-down-setting').fadeOut();
                settingStatus = 'none';
              }
            });
            var notificationStatus = jquery__WEBPACK_IMPORTED_MODULE_2__('.drop-down-notification').css('display'); // tslint:disable-next-line:only-arrow-functions

            jquery__WEBPACK_IMPORTED_MODULE_2__('#notification').click(function () {
              if (notificationStatus === 'none') {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.drop-down-notification').fadeIn();
                notificationStatus = 'block';
              } else if (notificationStatus === 'block') {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.drop-down-notification').fadeOut();
                notificationStatus = 'none';
              }
            });
            var directionPage = jquery__WEBPACK_IMPORTED_MODULE_2__('html').attr('dir');

            if (directionPage === 'rtl') {
              // tslint:disable-next-line:only-arrow-functions
              jquery__WEBPACK_IMPORTED_MODULE_2__('#bars').click(function () {
                var sideNavLeft = jquery__WEBPACK_IMPORTED_MODULE_2__('.side-nav').css('right');

                if (sideNavLeft < 0 + 'px') {
                  jquery__WEBPACK_IMPORTED_MODULE_2__('.side-nav').animate({
                    right: '0%'
                  }, 1000);
                  sideNavLeft = 0;
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_2__('.side-nav').animate({
                    right: '-1000px'
                  }, 1000);
                  sideNavLeft = -1000;
                }
              });
            } else {
              // tslint:disable-next-line:only-arrow-functions
              jquery__WEBPACK_IMPORTED_MODULE_2__('#bars').click(function () {
                var sideNavLeft = jquery__WEBPACK_IMPORTED_MODULE_2__('.side-nav').css('left');

                if (sideNavLeft < 0 + 'px') {
                  jquery__WEBPACK_IMPORTED_MODULE_2__('.side-nav').animate({
                    left: '0%'
                  }, 1000);
                  sideNavLeft = 0;
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_2__('.side-nav').animate({
                    left: '-1000px'
                  }, 1000);
                  sideNavLeft = -1000;
                }
              });
            }
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app.component.html")).default
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/components/index.ts":
  /*!*************************************!*\
    !*** ./src/app/components/index.ts ***!
    \*************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/components/app.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"];
    });
    /***/

  },

  /***/
  "./src/app/home/components/home-content/home-content.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/home/components/home-content/home-content.component.ts ***!
    \************************************************************************/

  /*! exports provided: HomeContentComponent */

  /***/
  function srcAppHomeComponentsHomeContentHomeContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeContentComponent", function () {
      return HomeContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeContentComponent =
    /*#__PURE__*/
    function () {
      function HomeContentComponent() {
        _classCallCheck(this, HomeContentComponent);

        this.customOptions = {
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          rtl: true,
          nav: true,
          // tslint:disable-next-line:max-line-length
          navText: ['<i class="fas fa-arrow-left bg-white shadow rounded-circle p-2"></i>', '<i class="fas fa-arrow-right  bg-white shadow rounded-circle p-2"></i>'],
          responsive: {
            0: {
              items: 1
            },
            70: {
              items: 2
            },
            120: {
              items: 3
            },
            200: {
              items: 4
            },
            300: {
              items: 5
            },
            450: {
              items: 5
            }
          }
        };
      }

      _createClass(HomeContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeContentComponent;
    }();

    HomeContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-content',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home-content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/home-content/home-content.component.html")).default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HomeContentComponent);
    /***/
  },

  /***/
  "./src/app/home/components/index.ts":
  /*!******************************************!*\
    !*** ./src/app/home/components/index.ts ***!
    \******************************************/

  /*! exports provided: NavbarComponent, SidemessageComponent, TopnavComponent */

  /***/
  function srcAppHomeComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/home/components/navbar/navbar.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"];
    });
    /* harmony import */


    var _sidemessage_sidemessage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sidemessage/sidemessage.component */
    "./src/app/home/components/sidemessage/sidemessage.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SidemessageComponent", function () {
      return _sidemessage_sidemessage_component__WEBPACK_IMPORTED_MODULE_2__["SidemessageComponent"];
    });
    /* harmony import */


    var _topnav_topnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./topnav/topnav.component */
    "./src/app/home/components/topnav/topnav.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TopnavComponent", function () {
      return _topnav_topnav_component__WEBPACK_IMPORTED_MODULE_3__["TopnavComponent"];
    });
    /***/

  },

  /***/
  "./src/app/home/components/navbar/navbar.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/home/components/navbar/navbar.component.ts ***!
    \************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppHomeComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
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

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            var topNav = jquery__WEBPACK_IMPORTED_MODULE_2__('.topNav').height();
            jquery__WEBPACK_IMPORTED_MODULE_2__('#mainPage').css({
              marginTop: topNav
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('main').css({
              marginTop: topNav + 10
            });
            /** */

            jquery__WEBPACK_IMPORTED_MODULE_2__('#AddAvailableAppointment').click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_2__('#box-Add').css({
                display: 'flex'
              });
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('#AddButton ,#buttonCloseAdd , #modify-back').click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_2__('#box-Add').fadeOut(1000);
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('.nav-links ul li a').click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_2__('body').css({
                overflow: 'auto'
              });
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__(document).mouseup(function (e) {
              var container = jquery__WEBPACK_IMPORTED_MODULE_2__('.box-chose-time');

              if (!container.is(e.target) && container.has(e.target).length === 0) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#box-Add').hide();
              }
            });
          });
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/navbar/navbar.component.html")).default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/home/components/sidemessage/sidemessage.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/home/components/sidemessage/sidemessage.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeComponentsSidemessageSidemessageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media (min-width: 767px) and (max-width: 768px) {\n  .item-Reservation .call {\n    width: 48%;\n    font-size: 14px;\n  }\n\n  .item-Reservation .cancel {\n    font-size: 12px;\n  }\n\n  .item-Reservation .fa-times {\n    font-size: 7px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL3NpZGVtZXNzYWdlL0Q6XFxmdWxsc3RhY2tcXGVsYmFsdG9hbmd1bGFyL3NyY1xcYXBwXFxob21lXFxjb21wb25lbnRzXFxzaWRlbWVzc2FnZVxcc2lkZW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9zaWRlbWVzc2FnZS9zaWRlbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGVBQUE7RUNDTjs7RURDRTtJQUNJLGVBQUE7RUNFTjs7RURBRTtJQUNJLGNBQUE7RUNHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb21wb25lbnRzL3NpZGVtZXNzYWdlL3NpZGVtZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1pbi13aWR0aDo3NjdweClhbmQobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAuaXRlbS1SZXNlcnZhdGlvbiAuY2FsbCB7XHJcbiAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1SZXNlcnZhdGlvbiAuY2FuY2VsIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1SZXNlcnZhdGlvbiAuZmEtdGltZXMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgfVxyXG59IiwiQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLml0ZW0tUmVzZXJ2YXRpb24gLmNhbGwge1xuICAgIHdpZHRoOiA0OCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLml0ZW0tUmVzZXJ2YXRpb24gLmNhbmNlbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLml0ZW0tUmVzZXJ2YXRpb24gLmZhLXRpbWVzIHtcbiAgICBmb250LXNpemU6IDdweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/components/sidemessage/sidemessage.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/home/components/sidemessage/sidemessage.component.ts ***!
    \**********************************************************************/

  /*! exports provided: SidemessageComponent */

  /***/
  function srcAppHomeComponentsSidemessageSidemessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidemessageComponent", function () {
      return SidemessageComponent;
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

    var SidemessageComponent =
    /*#__PURE__*/
    function () {
      function SidemessageComponent() {
        _classCallCheck(this, SidemessageComponent);
      }

      _createClass(SidemessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#backReservations ').click(function () {
              ReservationsBox.style.display = 'none';
              ReservationsBoxStatus = 'none';
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__(document).mouseup(function (e) {
              var container = jquery__WEBPACK_IMPORTED_MODULE_2__('.box-close');

              if (!container.is(e.target) && container.has(e.target).length === 0) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#box-closeReservations').hide();
                ReservationsBoxStatus = 'none';
              }
            });
            var myItemsCancel = Array.from(document.getElementsByClassName('cancel-box-item'));
            var ReservationsBox = document.getElementById('box-closeReservations');
            var ReservationsBoxStatus = jquery__WEBPACK_IMPORTED_MODULE_2__('#box-closeReservations').css('display');

            for (var i = 0; i < myItemsCancel.length; i++) {
              myItemsCancel[i].addEventListener('click', function () {
                if (ReservationsBoxStatus === 'none') {
                  ReservationsBox.style.display = 'flex';
                  ReservationsBoxStatus = 'flex';
                }
              });
            }
          });
        }
      }]);

      return SidemessageComponent;
    }();

    SidemessageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidemessage',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sidemessage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/sidemessage/sidemessage.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sidemessage.component.scss */
      "./src/app/home/components/sidemessage/sidemessage.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SidemessageComponent);
    /***/
  },

  /***/
  "./src/app/home/components/topnav/topnav.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/home/components/topnav/topnav.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeComponentsTopnavTopnavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy90b3BuYXYvdG9wbmF2LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/components/topnav/topnav.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/home/components/topnav/topnav.component.ts ***!
    \************************************************************/

  /*! exports provided: TopnavComponent */

  /***/
  function srcAppHomeComponentsTopnavTopnavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopnavComponent", function () {
      return TopnavComponent;
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

    var TopnavComponent =
    /*#__PURE__*/
    function () {
      function TopnavComponent() {
        _classCallCheck(this, TopnavComponent);
      }

      _createClass(TopnavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // tslint:disable-next-line:only-arrow-functions
          jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            var topNav = jquery__WEBPACK_IMPORTED_MODULE_2__('.topNav').height();
            jquery__WEBPACK_IMPORTED_MODULE_2__('#mainPage').css({
              marginTop: topNav
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('main').css({
              marginTop: topNav + 10
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('#AddAvailableAppointment').click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_2__('#box-Add').css({
                display: 'flex'
              });
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('#AddButton ,#buttonCloseAdd').click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_2__('#box-Add').fadeOut(1000);
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('body').click(function () {
              var $target = jquery__WEBPACK_IMPORTED_MODULE_2__(event.target);

              if (!$target.is('#setting')) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('body').find('.drop-down-setting').fadeOut(); //
              }
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('body').click(function () {
              var $target = jquery__WEBPACK_IMPORTED_MODULE_2__(event.target);

              if (!$target.is('#notification')) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('body').find('.drop-down-notification').fadeOut(); //
              }
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('.drop-down-notification , .drop-down-setting').css({
              top: topNav + 10
            });
            var settingStatus = jquery__WEBPACK_IMPORTED_MODULE_2__('.drop-down-setting').css('display');
            jquery__WEBPACK_IMPORTED_MODULE_2__('#setting').click(function () {
              if (settingStatus === 'none') {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.drop-down-setting').fadeIn();
                settingStatus = 'block';
              } else if (settingStatus === 'block') {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.drop-down-setting').fadeOut();
                settingStatus = 'none';
              }
            });
            var notificationStatus = jquery__WEBPACK_IMPORTED_MODULE_2__('.drop-down-notification').css('display');
            jquery__WEBPACK_IMPORTED_MODULE_2__('#notification').click(function () {
              if (notificationStatus === 'none') {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.drop-down-notification').fadeIn();
                notificationStatus = 'block';
              } else if (notificationStatus === 'block') {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.drop-down-notification').fadeOut();
                notificationStatus = 'none';
              }
            });
            var directionPage = jquery__WEBPACK_IMPORTED_MODULE_2__('html').attr('dir');
            var sideNavRight = jquery__WEBPACK_IMPORTED_MODULE_2__('.side-nav').css('right');
            var sideNavLeft = jquery__WEBPACK_IMPORTED_MODULE_2__('.side-nav').css('left');

            if (directionPage === 'rtl') {
              jquery__WEBPACK_IMPORTED_MODULE_2__('#bars').click(function () {
                sideNavRight = jquery__WEBPACK_IMPORTED_MODULE_2__('.side-nav').css('right');

                if (sideNavRight < 0 + 'px') {
                  jquery__WEBPACK_IMPORTED_MODULE_2__('.side-nav').animate({
                    right: '0%'
                  }, 500);
                  sideNavRight = 0;
                  jquery__WEBPACK_IMPORTED_MODULE_2__('.top-offset').css({
                    display: 'flex'
                  }, 1000);
                  jquery__WEBPACK_IMPORTED_MODULE_2__('body').css({
                    overflow: 'hidden'
                  });
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_2__('.top-offset').animate({
                    right: '-500px'
                  }, 500);
                  sideNavRight = -500;
                  jquery__WEBPACK_IMPORTED_MODULE_2__('.top-offset').fadeOut(1100);
                  jquery__WEBPACK_IMPORTED_MODULE_2__('body').css({
                    overflow: 'auto'
                  });
                }
              });
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_2__('#bars').click(function () {
                sideNavLeft = jquery__WEBPACK_IMPORTED_MODULE_2__('.side-nav').css('left');

                if (sideNavLeft < 0 + 'px') {
                  jquery__WEBPACK_IMPORTED_MODULE_2__('.side-nav').animate({
                    left: '0%'
                  }, 1000);
                  sideNavLeft = 0;
                  jquery__WEBPACK_IMPORTED_MODULE_2__('.top-offset').css({
                    display: 'flex'
                  }, 1000);
                  jquery__WEBPACK_IMPORTED_MODULE_2__('body').css({
                    overflow: 'hidden'
                  });
                } else {
                  jquery__WEBPACK_IMPORTED_MODULE_2__('.side-nav').animate({
                    left: '-500px'
                  }, 1000);
                  sideNavLeft = -500;
                  jquery__WEBPACK_IMPORTED_MODULE_2__('.top-offset').fadeOut(1100);
                  jquery__WEBPACK_IMPORTED_MODULE_2__('body').css({
                    overflow: 'auto'
                  });
                }
              });
            }

            jquery__WEBPACK_IMPORTED_MODULE_2__('.top-offset').click(function () {
              if (directionPage === 'rtl') {
                sideNavRight = jquery__WEBPACK_IMPORTED_MODULE_2__('.side-nav').css('right');

                if (sideNavRight >= 0 + 'px') {
                  jquery__WEBPACK_IMPORTED_MODULE_2__('.side-nav').animate({
                    right: '-500px'
                  }, 1000);
                  sideNavRight = -500;
                  jquery__WEBPACK_IMPORTED_MODULE_2__('.top-offset').css({
                    display: 'none'
                  }, 1000);
                  jquery__WEBPACK_IMPORTED_MODULE_2__('body').css({
                    overflow: 'auto'
                  });
                }
              } else {
                sideNavLeft = jquery__WEBPACK_IMPORTED_MODULE_2__('.side-nav').css('left');

                if (sideNavLeft >= 0 + 'px') {
                  jquery__WEBPACK_IMPORTED_MODULE_2__('.side-nav').animate({
                    left: '-500px'
                  }, 1000);
                  sideNavLeft = -500;
                  jquery__WEBPACK_IMPORTED_MODULE_2__('.top-offset').css({
                    display: 'none'
                  }, 1000);
                  jquery__WEBPACK_IMPORTED_MODULE_2__('body').css({
                    overflow: 'auto'
                  });
                }
              }
            });
          });
        }
      }]);

      return TopnavComponent;
    }();

    TopnavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-topnav',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./topnav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/topnav/topnav.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./topnav.component.scss */
      "./src/app/home/components/topnav/topnav.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TopnavComponent);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _utils_services_shared_servcie_bag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./utils/services/shared/servcie-bag */
    "./src/app/home/utils/services/shared/servcie-bag.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home.routing */
    "./src/app/home/home.routing.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/home/pages/home/home.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/home/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/topnav/topnav.component */
    "./src/app/home/components/topnav/topnav.component.ts");
    /* harmony import */


    var _components_sidemessage_sidemessage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/sidemessage/sidemessage.component */
    "./src/app/home/components/sidemessage/sidemessage.component.ts");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./utils */
    "./src/app/home/utils/index.ts");
    /* harmony import */


    var _components_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/home-content/home-content.component */
    "./src/app/home/components/home-content/home-content.component.ts");
    /* harmony import */


    var _utils_services_shared_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./utils/services/shared/http.service */
    "./src/app/home/utils/services/shared/http.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeModule_1;

    var HomeModule = HomeModule_1 =
    /*#__PURE__*/
    function () {
      function HomeModule() {
        _classCallCheck(this, HomeModule);
      }

      _createClass(HomeModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: HomeModule_1,
            providers: [_utils__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _utils_services_shared_http_service__WEBPACK_IMPORTED_MODULE_12__["HttpClientService"], _utils_services_shared_servcie_bag__WEBPACK_IMPORTED_MODULE_1__["ServiceBag"]]
          };
        }
      }]);

      return HomeModule;
    }();

    HomeModule = HomeModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_7__["TopnavComponent"], _components_sidemessage_sidemessage_component__WEBPACK_IMPORTED_MODULE_8__["SidemessageComponent"], _components_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_11__["HomeContentComponent"]],
      exports: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_7__["TopnavComponent"], _components_sidemessage_sidemessage_component__WEBPACK_IMPORTED_MODULE_8__["SidemessageComponent"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _home_routing__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]]
    })], HomeModule);
    /***/
  },

  /***/
  "./src/app/home/home.routing.ts":
  /*!**************************************!*\
    !*** ./src/app/home/home.routing.ts ***!
    \**************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppHomeHomeRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
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


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/home/pages/home/home.component.ts");
    /* harmony import */


    var _components_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/home-content/home-content.component */
    "./src/app/home/components/home-content/home-content.component.ts");

    var routes = [{
      path: '',
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      children: [{
        path: '',
        component: _components_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_4__["HomeContentComponent"]
      }, {
        path: 'agenada',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-agenada-agenada-module */
          "features-agenada-agenada-module").then(__webpack_require__.bind(null,
          /*! ../features/agenada/agenada.module */
          "./src/app/features/agenada/agenada.module.ts")).then(function (agenda) {
            return agenda.AgenadaModule;
          });
        }
      }, {
        path: 'editprofile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-edit-profile-edit-profile-module */
          "features-edit-profile-edit-profile-module").then(__webpack_require__.bind(null,
          /*! ../features/edit-profile/edit-profile.module */
          "./src/app/features/edit-profile/edit-profile.module.ts")).then(function (editprofile) {
            return editprofile.EditProfileModule;
          });
        }
      }, {
        path: 'medical',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-medical-medical-module */
          "features-medical-medical-module").then(__webpack_require__.bind(null,
          /*! ../features/medical/medical.module */
          "./src/app/features/medical/medical.module.ts")).then(function (medical) {
            return medical.MedicalModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-profile-profile-module */
          "features-profile-profile-module").then(__webpack_require__.bind(null,
          /*! ../features/profile/profile.module */
          "./src/app/features/profile/profile.module.ts")).then(function (profile) {
            return profile.ProfileModule;
          });
        }
      }, {
        path: 'reservation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-reservation-reservation-module */
          "features-reservation-reservation-module").then(__webpack_require__.bind(null,
          /*! ../features/reservation/reservation.module */
          "./src/app/features/reservation/reservation.module.ts")).then(function (reservation) {
            return reservation.ReservationModule;
          });
        }
      }, {
        path: 'reservationpast',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-reservation-past-reservation-past-module */
          "features-reservation-past-reservation-past-module").then(__webpack_require__.bind(null,
          /*! ../features/reservation-past/reservation-past.module */
          "./src/app/features/reservation-past/reservation-past.module.ts")).then(function (reservationpast) {
            return reservationpast.ReservationPastModule;
          });
        }
      }, {
        path: 'videocall',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-video-call-video-call-module */
          "features-video-call-video-call-module").then(__webpack_require__.bind(null,
          /*! ../features/video-call/video-call.module */
          "./src/app/features/video-call/video-call.module.ts")).then(function (videocall) {
            return videocall.VideoCallModule;
          });
        }
      }, {
        path: 'wallet',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-wallet-wallet-module */
          "features-wallet-wallet-module").then(__webpack_require__.bind(null,
          /*! ../features/wallet/wallet.module */
          "./src/app/features/wallet/wallet.module.ts")).then(function (wallet) {
            return wallet.WalletModule;
          });
        }
      }, {
        path: 'chat',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-chat-chat-module */
          "features-chat-chat-module").then(__webpack_require__.bind(null,
          /*! ../features/chat/chat.module */
          "./src/app/features/chat/chat.module.ts")).then(function (chat) {
            return chat.ChatModule;
          });
        }
      }, {
        path: 'inbox',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-inbox-inbox-module */
          "features-inbox-inbox-module").then(__webpack_require__.bind(null,
          /*! ../features/inbox/inbox.module */
          "./src/app/features/inbox/inbox.module.ts")).then(function (inbox) {
            return inbox.InboxModule;
          });
        }
      }]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomeRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/index.ts":
  /*!*******************************!*\
    !*** ./src/app/home/index.ts ***!
    \*******************************/

  /*! exports provided: NavbarComponent, SidemessageComponent, TopnavComponent, HomeComponent, HomeModule, HomeRoutingModule, ApiBaseModel, ApiBaseContentModel, ApiBaseStatusModel, AppBaseModel, HttpClientService, ServiceBag, AuthService, SessionUserModel, userModel, WalletDoctorModel */

  /***/
  function srcAppHomeIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components */
    "./src/app/home/components/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return _components__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SidemessageComponent", function () {
      return _components__WEBPACK_IMPORTED_MODULE_1__["SidemessageComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TopnavComponent", function () {
      return _components__WEBPACK_IMPORTED_MODULE_1__["TopnavComponent"];
    });
    /* harmony import */


    var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages */
    "./src/app/home/pages/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return _pages__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"];
    });
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./utils */
    "./src/app/home/utils/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiBaseModel", function () {
      return _utils__WEBPACK_IMPORTED_MODULE_3__["ApiBaseModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiBaseContentModel", function () {
      return _utils__WEBPACK_IMPORTED_MODULE_3__["ApiBaseContentModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiBaseStatusModel", function () {
      return _utils__WEBPACK_IMPORTED_MODULE_3__["ApiBaseStatusModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppBaseModel", function () {
      return _utils__WEBPACK_IMPORTED_MODULE_3__["AppBaseModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HttpClientService", function () {
      return _utils__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ServiceBag", function () {
      return _utils__WEBPACK_IMPORTED_MODULE_3__["ServiceBag"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return _utils__WEBPACK_IMPORTED_MODULE_3__["AuthService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SessionUserModel", function () {
      return _utils__WEBPACK_IMPORTED_MODULE_3__["SessionUserModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "userModel", function () {
      return _utils__WEBPACK_IMPORTED_MODULE_3__["userModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WalletDoctorModel", function () {
      return _utils__WEBPACK_IMPORTED_MODULE_3__["WalletDoctorModel"];
    });
    /* harmony import */


    var _home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home.module */
    "./src/app/home/home.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return _home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"];
    });
    /* harmony import */


    var _home_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.routing */
    "./src/app/home/home.routing.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return _home_routing__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"];
    });
    /***/

  },

  /***/
  "./src/app/home/pages/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/home/pages/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomePagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
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

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.customOptions = {
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          rtl: true,
          nav: true,
          // tslint:disable-next-line:max-line-length
          navText: ['<i class="fas fa-arrow-left bg-white shadow rounded-circle p-2"></i>', '<i class="fas fa-arrow-right  bg-white shadow rounded-circle p-2"></i>'],
          responsive: {
            0: {
              items: 1
            },
            70: {
              items: 2
            },
            120: {
              items: 3
            },
            200: {
              items: 4
            },
            300: {
              items: 5
            },
            450: {
              items: 5
            }
          }
        };
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // tslint:disable-next-line:only-arrow-functions
          jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            // tslint:disable-next-line:only-arrow-functions
            jquery__WEBPACK_IMPORTED_MODULE_2__('#add-Reservation').click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_2__('#box-Add').css({
                display: 'flex'
              });
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('.Reservation-home').not(jquery__WEBPACK_IMPORTED_MODULE_2__('.Reservation-home:first')).hide();
            jquery__WEBPACK_IMPORTED_MODULE_2__('.Reservation-home-schedule .day').click(function () {
              var myId = jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('id');
              jquery__WEBPACK_IMPORTED_MODULE_2__('.Reservation-home').hide();
              jquery__WEBPACK_IMPORTED_MODULE_2__('.' + myId + '-Reservation').slideDown(500);
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('.Reservation-home-schedule .day').click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_2__(this).addClass('activeDay');
              jquery__WEBPACK_IMPORTED_MODULE_2__('.Reservation-home-schedule .day').not(this).removeClass('activeDay');
            });
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/pages/home/home.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/home/pages/index.ts":
  /*!*************************************!*\
    !*** ./src/app/home/pages/index.ts ***!
    \*************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomePagesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/pages/home/home.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"];
    });
    /***/

  },

  /***/
  "./src/app/home/utils/index.ts":
  /*!*************************************!*\
    !*** ./src/app/home/utils/index.ts ***!
    \*************************************/

  /*! exports provided: ApiBaseModel, ApiBaseContentModel, ApiBaseStatusModel, AppBaseModel, HttpClientService, ServiceBag, AuthService, SessionUserModel, userModel, WalletDoctorModel */

  /***/
  function srcAppHomeUtilsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services */
    "./src/app/home/utils/services/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiBaseModel", function () {
      return _services__WEBPACK_IMPORTED_MODULE_1__["ApiBaseModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiBaseContentModel", function () {
      return _services__WEBPACK_IMPORTED_MODULE_1__["ApiBaseContentModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiBaseStatusModel", function () {
      return _services__WEBPACK_IMPORTED_MODULE_1__["ApiBaseStatusModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppBaseModel", function () {
      return _services__WEBPACK_IMPORTED_MODULE_1__["AppBaseModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HttpClientService", function () {
      return _services__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ServiceBag", function () {
      return _services__WEBPACK_IMPORTED_MODULE_1__["ServiceBag"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return _services__WEBPACK_IMPORTED_MODULE_1__["AuthService"];
    });
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./models */
    "./src/app/home/utils/models/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SessionUserModel", function () {
      return _models__WEBPACK_IMPORTED_MODULE_2__["SessionUserModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "userModel", function () {
      return _models__WEBPACK_IMPORTED_MODULE_2__["userModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WalletDoctorModel", function () {
      return _models__WEBPACK_IMPORTED_MODULE_2__["WalletDoctorModel"];
    });
    /***/

  },

  /***/
  "./src/app/home/utils/models/app-model.ts":
  /*!************************************************!*\
    !*** ./src/app/home/utils/models/app-model.ts ***!
    \************************************************/

  /*! exports provided: SessionUserModel */

  /***/
  function srcAppHomeUtilsModelsAppModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionUserModel", function () {
      return SessionUserModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SessionUserModel =
    /*#__PURE__*/
    function () {
      function SessionUserModel() {
        _classCallCheck(this, SessionUserModel);

        this.first_name_en = '';
        this.last_name_en = '';
        this.first_name_ar = '';
        this.last_name_ar = '';
        this.phone = '';
        this.code = '';
        this.image = '';
        this.email = '';
        this.type = '';
        this.id_provider = '';
        this.oneSiganlToken = '';
        this.video_token = '';
        this.birth_date = '';
        this.langauge = '';
        this.time_zone = undefined;
        this.token = '';
        this.identifier = '';
      }

      _createClass(SessionUserModel, null, [{
        key: "CreateUser",
        value: function CreateUser(user) {
          if (!user) throw 'user cannot be null';
          if (user) return SessionUserModel.createUserFromInstance(user);
        }
      }, {
        key: "createUserFromInstance",
        value: function createUserFromInstance(user) {
          var userModel = new SessionUserModel();
          return Object.assign(userModel, user);
        }
      }]);

      return SessionUserModel;
    }();
    /***/

  },

  /***/
  "./src/app/home/utils/models/index.ts":
  /*!********************************************!*\
    !*** ./src/app/home/utils/models/index.ts ***!
    \********************************************/

  /*! exports provided: SessionUserModel, userModel, WalletDoctorModel */

  /***/
  function srcAppHomeUtilsModelsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _app_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app-model */
    "./src/app/home/utils/models/app-model.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SessionUserModel", function () {
      return _app_model__WEBPACK_IMPORTED_MODULE_1__["SessionUserModel"];
    });
    /* harmony import */


    var _userModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./userModel */
    "./src/app/home/utils/models/userModel.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "userModel", function () {
      return _userModel__WEBPACK_IMPORTED_MODULE_2__["userModel"];
    });
    /* harmony import */


    var _walletDoctorModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./walletDoctorModel */
    "./src/app/home/utils/models/walletDoctorModel.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WalletDoctorModel", function () {
      return _walletDoctorModel__WEBPACK_IMPORTED_MODULE_3__["WalletDoctorModel"];
    });
    /***/

  },

  /***/
  "./src/app/home/utils/models/userModel.ts":
  /*!************************************************!*\
    !*** ./src/app/home/utils/models/userModel.ts ***!
    \************************************************/

  /*! exports provided: userModel */

  /***/
  function srcAppHomeUtilsModelsUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userModel", function () {
      return userModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // tslint:disable-next-line:class-name


    var userModel = function userModel() {
      _classCallCheck(this, userModel);
    };
    /***/

  },

  /***/
  "./src/app/home/utils/models/walletDoctorModel.ts":
  /*!********************************************************!*\
    !*** ./src/app/home/utils/models/walletDoctorModel.ts ***!
    \********************************************************/

  /*! exports provided: WalletDoctorModel */

  /***/
  function srcAppHomeUtilsModelsWalletDoctorModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletDoctorModel", function () {
      return WalletDoctorModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var WalletDoctorModel = function WalletDoctorModel() {
      _classCallCheck(this, WalletDoctorModel);

      this.transactionCount = undefined;
      this.totalCredit = undefined;
      this.elbaltoMoney = undefined;
      this.receiveMoney = undefined;
      this.doctorMoney = undefined;
      this.dueDate = '';
      this.walletDoctorPeriodModels = [];
    };
    /***/

  },

  /***/
  "./src/app/home/utils/services/auth.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/home/utils/services/auth.service.ts ***!
    \*****************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppHomeUtilsServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models */
    "./src/app/home/utils/models/index.ts");
    /* harmony import */


    var _shared_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/http.service */
    "./src/app/home/utils/services/shared/http.service.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
        this.baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].backEndApi;
        this.serviceUrl = this.baseUrl + 'doctor';
      }

      _createClass(AuthService, [{
        key: "login",
        //https://newwebservice.elbalto.com/App/SignUpData
        value: function login(phone, password) {
          var body = {
            phone: phone,
            password: password
          }; // let jsonBody = JSON.stringify(body);

          return this.http.post(this.serviceUrl + '/login', body, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            var user = _models__WEBPACK_IMPORTED_MODULE_5__["SessionUserModel"].CreateUser(res.Data);

            sessionStorage.setItem('current-user', JSON.stringify(user));
            return true;
          }));
        }
      }, {
        key: "CurrentUser",
        get: function get() {
          var user = null;
          var sessionUser = sessionStorage.getItem('current-user');
          if (sessionUser) user = _models__WEBPACK_IMPORTED_MODULE_5__["SessionUserModel"].CreateUser(JSON.parse(sessionUser));
          return user;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _shared_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/home/utils/services/index.ts":
  /*!**********************************************!*\
    !*** ./src/app/home/utils/services/index.ts ***!
    \**********************************************/

  /*! exports provided: ApiBaseModel, ApiBaseContentModel, ApiBaseStatusModel, AppBaseModel, HttpClientService, ServiceBag, AuthService */

  /***/
  function srcAppHomeUtilsServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared */
    "./src/app/home/utils/services/shared/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiBaseModel", function () {
      return _shared__WEBPACK_IMPORTED_MODULE_1__["ApiBaseModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiBaseContentModel", function () {
      return _shared__WEBPACK_IMPORTED_MODULE_1__["ApiBaseContentModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiBaseStatusModel", function () {
      return _shared__WEBPACK_IMPORTED_MODULE_1__["ApiBaseStatusModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppBaseModel", function () {
      return _shared__WEBPACK_IMPORTED_MODULE_1__["AppBaseModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HttpClientService", function () {
      return _shared__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ServiceBag", function () {
      return _shared__WEBPACK_IMPORTED_MODULE_1__["ServiceBag"];
    });
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/home/utils/services/auth.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"];
    });
    /***/

  },

  /***/
  "./src/app/home/utils/services/shared/baseModel.ts":
  /*!*********************************************************!*\
    !*** ./src/app/home/utils/services/shared/baseModel.ts ***!
    \*********************************************************/

  /*! exports provided: ApiBaseModel, ApiBaseContentModel, ApiBaseStatusModel, AppBaseModel */

  /***/
  function srcAppHomeUtilsServicesSharedBaseModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiBaseModel", function () {
      return ApiBaseModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiBaseContentModel", function () {
      return ApiBaseContentModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiBaseStatusModel", function () {
      return ApiBaseStatusModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppBaseModel", function () {
      return AppBaseModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ApiBaseModel = function ApiBaseModel() {
      _classCallCheck(this, ApiBaseModel);
    };

    var ApiBaseContentModel = function ApiBaseContentModel() {
      _classCallCheck(this, ApiBaseContentModel);
    };

    var ApiBaseStatusModel = function ApiBaseStatusModel() {
      _classCallCheck(this, ApiBaseStatusModel);
    };

    var AppBaseModel = function AppBaseModel() {
      _classCallCheck(this, AppBaseModel);
    };
    /***/

  },

  /***/
  "./src/app/home/utils/services/shared/http.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/home/utils/services/shared/http.service.ts ***!
    \************************************************************/

  /*! exports provided: HttpClientService */

  /***/
  function srcAppHomeUtilsServicesSharedHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientService", function () {
      return HttpClientService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var HttpClientService =
    /*#__PURE__*/
    function () {
      function HttpClientService(http) {
        _classCallCheck(this, HttpClientService);

        this.http = http;
      }

      _createClass(HttpClientService, [{
        key: "get",
        value: function get(url, params, skipAuth, silent) {
          var _this = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          return this.http.get(url, {
            params: params,
            observe: 'response',
            withCredentials: false,
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return _this.buildResponse(res);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return _this.handleError(err, _this, silent);
          }));
        }
      }, {
        key: "post",
        value: function post(url, data, params) {
          var _this2 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          return this.http.post(url, data, {
            params: params,
            observe: 'response',
            withCredentials: false,
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return _this2.buildResponse(res);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return _this2.handleError(err, _this2);
          }));
        }
      }, {
        key: "handleError",
        value: function handleError(err, thisArg) {
          var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var errors = [];
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }
      }, {
        key: "buildResponse",
        value: function buildResponse(res) {
          if (!res.body.Status) throw new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]({
            error: res.body.Status.Id,
            headers: res.headers,
            status: res.status,
            statusText: res.statusText,
            url: res.url
          });
          return res.body;
        }
      }]);

      return HttpClientService;
    }();

    HttpClientService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HttpClientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], HttpClientService);
    /***/
  },

  /***/
  "./src/app/home/utils/services/shared/index.ts":
  /*!*****************************************************!*\
    !*** ./src/app/home/utils/services/shared/index.ts ***!
    \*****************************************************/

  /*! exports provided: ApiBaseModel, ApiBaseContentModel, ApiBaseStatusModel, AppBaseModel, HttpClientService, ServiceBag */

  /***/
  function srcAppHomeUtilsServicesSharedIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _baseModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./baseModel */
    "./src/app/home/utils/services/shared/baseModel.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiBaseModel", function () {
      return _baseModel__WEBPACK_IMPORTED_MODULE_1__["ApiBaseModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiBaseContentModel", function () {
      return _baseModel__WEBPACK_IMPORTED_MODULE_1__["ApiBaseContentModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiBaseStatusModel", function () {
      return _baseModel__WEBPACK_IMPORTED_MODULE_1__["ApiBaseStatusModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppBaseModel", function () {
      return _baseModel__WEBPACK_IMPORTED_MODULE_1__["AppBaseModel"];
    });
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./http.service */
    "./src/app/home/utils/services/shared/http.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HttpClientService", function () {
      return _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"];
    });
    /* harmony import */


    var _servcie_bag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./servcie-bag */
    "./src/app/home/utils/services/shared/servcie-bag.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ServiceBag", function () {
      return _servcie_bag__WEBPACK_IMPORTED_MODULE_3__["ServiceBag"];
    });
    /***/

  },

  /***/
  "./src/app/home/utils/services/shared/servcie-bag.ts":
  /*!***********************************************************!*\
    !*** ./src/app/home/utils/services/shared/servcie-bag.ts ***!
    \***********************************************************/

  /*! exports provided: ServiceBag */

  /***/
  function srcAppHomeUtilsServicesSharedServcieBagTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceBag", function () {
      return ServiceBag;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./http.service */
    "./src/app/home/utils/services/shared/http.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _baseModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./baseModel */
    "./src/app/home/utils/services/shared/baseModel.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServiceBag =
    /*#__PURE__*/
    function () {
      function ServiceBag(httpClient) {
        _classCallCheck(this, ServiceBag);

        this.httpClient = httpClient;
      }

      _createClass(ServiceBag, [{
        key: "get",
        value: function get(url, params) {
          var _this3 = this;

          return this.httpClient.get(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return _this3.createBaseModel(res);
          }));
        }
      }, {
        key: "post",
        value: function post(url, params, data) {
          var _this4 = this;

          return this.httpClient.post(url, data, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return _this4.createBaseModel(res);
          }));
        }
      }, {
        key: "createBaseModel",
        value: function createBaseModel(res) {
          var response = new _baseModel__WEBPACK_IMPORTED_MODULE_3__["AppBaseModel"]();
          response.status = res.Status.Id;
          response.result = res.Data;
          return response;
        }
      }]);

      return ServiceBag;
    }();

    ServiceBag.ctorParameters = function () {
      return [{
        type: _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"]
      }];
    };

    ServiceBag = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"]])], ServiceBag);
    /***/
  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var baseUrl = "https://newwebservice.elbalto.com/";
    var environment = {
      production: true,
      backEndApi: baseUrl,
      doctorApi: baseUrl + "/Doctor"
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var baseUrl = "https://newwebservice.elbalto.com/";
    var environment = {
      production: false,
      backEndApi: baseUrl,
      doctorApi: baseUrl + "/Doctor"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\fullstack\elbaltoangular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map