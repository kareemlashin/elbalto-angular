function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-edit-profile-edit-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/edit-profile/edit-profile/edit-profile.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/edit-profile/edit-profile/edit-profile.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesEditProfileEditProfileEditProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-cusom\">\r\n    <div class=\"container\">\r\n        <div class=\"row\" id=\"edit-profile\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"mx-auto\" id=\"imagePreview\" style=\"height:100px;width:100px; background-image: url(assets/img/dr.png);\r\n                    background-size: cover; background-position: center; border-radius: 50%;\"></div>\r\n                        <div class=\"wrapper-upload my-2 px-0 \">\r\n                            <div class=\"file-upload py-2\">\r\n                                <input type=\"file\" id=\"imageUpload\" accept=\".png, .jpg, .jpeg\" /> upload new photo </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <div class=\"d-flex  mt-3\">\r\n                            <div class=\"item-dr mx-1 \">dr.</div>\r\n                            <div class=\"item-inp\">\r\n                                <input type=\"text\" class=\"w-100 text-inp\" placeholder=\"Name doctor\">\r\n                            </div>\r\n                        </div>\r\n                        <input type=\"email\" class=\"w-100 py-2 my-2 email-inp\" placeholder=\"maildoctor@gmail.com\">\r\n                        <div class=\"my-3\">\r\n                            <div>\r\n                                <div class=\"row my-2\">\r\n                                    <div class=\"col-3 d-flex  \r\n                                    align-items-center\"> <label>Gendar</label>\r\n                                    </div>\r\n                                    <div class=\"col-9 p-0\">\r\n                                        <div id=\"gender\">\r\n                                            <div class=\"select mx-3\">\r\n                                                <select name=\"slct\" id=\"slct\">\r\n                                                    <option value=\"1\">male</option>\r\n                                                    <option value=\"2\">Female</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div>\r\n                                <div>\r\n                                    <label>Birth date</label>\r\n                                    <input type=\"text\" id=\"flatpickr\" class=\"py-2 shadow mx-4 text-center\" placeholder=\"pick date\"> </div>\r\n\r\n\r\n\r\n                            </div>\r\n                            <div class=\" my-4\">\r\n                                <label for=\"\" class=\"px-2\">About</label>\r\n                                <textarea name=\"\" class=\"w-100\" id=\"\" cols=\"30\" rows=\"5\"></textarea>\r\n                            </div>\r\n                            <div class=\" my-4\">\r\n                                <label for=\"\" class=\"px-2\">Places of Practice</label>\r\n                                <textarea name=\"\" class=\"w-100\" id=\"\" cols=\"30\" rows=\"3\"></textarea>\r\n                            </div>\r\n                            <div id=\"save\">\r\n                                <button class=\"w-100 text-center py-2  mb-3 rounded-pill\">Save</button>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"bg-white border-radius-all shadow p-2 my-3 change\" id=\"change-phone\"><i class=\"fas fa-lock px-1\"></i> Change Your Phone Number</div>\r\n                <div class=\"bg-white shadow p-2 my-3 border-radius-all change\" id=\"change-passWord\"><i class=\"fas fa-mobile-alt px-2\"></i> Change Your Password</div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div id=\"box-password-change\">\r\n        <i class=\"fas fa-times buttonClose\" id=\"boxpasswordButton\"></i>\r\n\r\n        <div class=\"small-box\">\r\n            <p class=\"text-center py-2\">Change Your password</p>\r\n            <div class=\"row\">\r\n                <div class=\"col-10 mx-auto my-2\">\r\n                    <input type=\"password\" class=\"w-100 rounded-pill py-1 password-Current \" placeholder=\"Current password\">\r\n                    <span toggle=\"password-Current \" class=\"fa fa-fw fa-eye field-icon toggle-password \">\r\n                    </span>\r\n\r\n                </div>\r\n\r\n                <div class=\"col-10 mx-auto my-2\">\r\n                    <input type=\"password\" class=\"w-100 rounded-pill py-1 password-New\" placeholder=\"New password\">\r\n                    <span toggle=\"password-New \" class=\"fa fa-fw fa-eye field-icon toggle-password \">\r\n                    </span>\r\n\r\n                </div>\r\n\r\n                <div class=\"col-10 mx-auto my-2\">\r\n                    <input type=\"password\" class=\"w-100 rounded-pill py-1 password-Rewrite \" placeholder=\" Rewrite New Password\">\r\n\r\n                    <span toggle=\"password-Rewrite \" class=\"fa fa-fw fa-eye field-icon toggle-password \"></span>\r\n\r\n                </div>\r\n                <div class=\"col-12 my-3 text-center \">\r\n                    <button class=\"w-25 rounded-pill text-center py-2 mx-2\" id=\"back-password\">back</button>\r\n                    <button class=\"w-25 rounded-pill text-center py-2 mx-2\" id=\"save-change-pass\">save</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"box-phone-change\">\r\n        <i class=\"fas fa-times buttonClose\" id=\"boxphoneButton\"></i>\r\n\r\n        <div class=\"small-box\">\r\n            <p class=\"text-center py-2\">Change Your Phone Number</p>\r\n            <div class=\"row mx-auto my-2\">\r\n                <div class=\"col-3\">\r\n                    <select class=\"px-4 py-1\">\r\n                        <option ><img src=\"/src/assets/img/dr.png\" alt=\"\" srcset=\"\"> +20</option>\r\n                        <option >+20</option>\r\n                        <option >+20</option>\r\n                        <option >+20</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"col-9 text-center\">\r\n                    <input type=\"text\" class=\"py-1 w-100 mx-2 rounded-pill\" placeholder=\"New Number\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" id=\"verity\">\r\n                <div class=\"col-4 my-2 text-center p-0\">\r\n                    <label for=\"\" class=\"\">\r\n                        Verity code\r\n    \r\n                    </label>\r\n                </div>\r\n                <div class=\"col-8 text-center \">\r\n                    <input type=\"text\" class=\"py-1 w-80 mx-auto  rounded-pill\" placeholder=\"New Number\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"text-center my-3\" id=\"just-phone\">\r\n                <button class=\"py-2 px-5 rounded-pill mx-2\" id=\"back-one-phone\">back</button>\r\n                <button class=\"py-2 px-5 rounded-pill mx-2\" id=\"Next-Verit\">Next</button>\r\n            </div>\r\n            <div class=\"text-center my-3\" id=\"save-number\">\r\n                <button class=\"py-2 px-5 rounded-pill mx-2\" id=\"back-to-phone\">back</button>\r\n                <button class=\"py-2 px-5 rounded-pill mx-2\" id=\"save-item-phone\">Save</button>\r\n            </div>\r\n        </div>\r\n    </div>";
    /***/
  },

  /***/
  "./src/app/features/edit-profile/edit-profile-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/features/edit-profile/edit-profile-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: EditProfileRoutingModule */

  /***/
  function srcAppFeaturesEditProfileEditProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfileRoutingModule", function () {
      return EditProfileRoutingModule;
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


    var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-profile/edit-profile.component */
    "./src/app/features/edit-profile/edit-profile/edit-profile.component.ts");

    var routes = [{
      path: '',
      component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_3__["EditProfileComponent"]
    }];

    var EditProfileRoutingModule = function EditProfileRoutingModule() {
      _classCallCheck(this, EditProfileRoutingModule);
    };

    EditProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditProfileRoutingModule);
    /***/
  },

  /***/
  "./src/app/features/edit-profile/edit-profile.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/features/edit-profile/edit-profile.module.ts ***!
    \**************************************************************/

  /*! exports provided: EditProfileModule */

  /***/
  function srcAppFeaturesEditProfileEditProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfileModule", function () {
      return EditProfileModule;
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


    var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-profile-routing.module */
    "./src/app/features/edit-profile/edit-profile-routing.module.ts");
    /* harmony import */


    var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./edit-profile/edit-profile.component */
    "./src/app/features/edit-profile/edit-profile/edit-profile.component.ts");

    var EditProfileModule = function EditProfileModule() {
      _classCallCheck(this, EditProfileModule);
    };

    EditProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_4__["EditProfileComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["EditProfileRoutingModule"]]
    })], EditProfileModule);
    /***/
  },

  /***/
  "./src/app/features/edit-profile/edit-profile/edit-profile.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/features/edit-profile/edit-profile/edit-profile.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesEditProfileEditProfileEditProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/features/edit-profile/edit-profile/edit-profile.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/features/edit-profile/edit-profile/edit-profile.component.ts ***!
    \******************************************************************************/

  /*! exports provided: EditProfileComponent */

  /***/
  function srcAppFeaturesEditProfileEditProfileEditProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function () {
      return EditProfileComponent;
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

    var EditProfileComponent =
    /*#__PURE__*/
    function () {
      function EditProfileComponent() {
        _classCallCheck(this, EditProfileComponent);
      }

      _createClass(EditProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // tslint:disable-next-line:only-arrow-functions
          jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            function readURL(input) {
              if (input.files && input.files[0]) {
                var reader = new FileReader(); // tslint:disable-next-line:only-arrow-functions

                reader.onload = function (e) {
                  jquery__WEBPACK_IMPORTED_MODULE_2__('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                  jquery__WEBPACK_IMPORTED_MODULE_2__('#imagePreview').hide();
                  jquery__WEBPACK_IMPORTED_MODULE_2__('#imagePreview').fadeIn(650);
                };

                reader.readAsDataURL(input.files[0]);
              }
            }

            jquery__WEBPACK_IMPORTED_MODULE_2__('#imageUpload').change(function () {
              readURL(this);
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('#Next-Verit').click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_2__(this).fadeOut();
              jquery__WEBPACK_IMPORTED_MODULE_2__('#just-phone').fadeOut();
              jquery__WEBPACK_IMPORTED_MODULE_2__('#save-number').fadeIn();
              jquery__WEBPACK_IMPORTED_MODULE_2__('#verity').css({
                display: 'flex'
              });
            }); // tslint:disable-next-line:only-arrow-functions

            jquery__WEBPACK_IMPORTED_MODULE_2__('#back-to-phone').click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_2__('#back-one-phone').fadeIn();
              jquery__WEBPACK_IMPORTED_MODULE_2__('#save-number').fadeOut();
              jquery__WEBPACK_IMPORTED_MODULE_2__('#just-phone ,#Next-Verit').fadeIn();
              jquery__WEBPACK_IMPORTED_MODULE_2__('#verity').css({
                display: 'none'
              });
            }); // tslint:disable-next-line:only-arrow-functions

            jquery__WEBPACK_IMPORTED_MODULE_2__('#save-item-phone , #boxphoneButton , #back-one-phone').click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_2__('#box-phone-change').fadeOut();
              jquery__WEBPACK_IMPORTED_MODULE_2__('#back-one-phone').fadeIn();
              jquery__WEBPACK_IMPORTED_MODULE_2__('#save-number').fadeOut();
              jquery__WEBPACK_IMPORTED_MODULE_2__('#just-phone ,#Next-Verit').fadeIn();
              jquery__WEBPACK_IMPORTED_MODULE_2__('#verity').css({
                display: 'none'
              });
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('#change-passWord').click( // tslint:disable-next-line:only-arrow-functions
            function () {
              jquery__WEBPACK_IMPORTED_MODULE_2__('#box-password-change').css({
                display: 'flex'
              });
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('#change-phone').click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_2__('#box-phone-change').css({
                display: 'flex'
              });
            }); // tslint:disable-next-line:only-arrow-functions

            jquery__WEBPACK_IMPORTED_MODULE_2__('#save-change-pass , #boxpasswordButton ,#back-password').click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_2__('#box-password-change').css({
                display: 'none'
              });
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('.toggle-password ').click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_2__(this).toggleClass('fa-eye fa-eye-slash');
              var toggle = jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('toggle');
              var stateInput = jquery__WEBPACK_IMPORTED_MODULE_2__('.' + toggle).attr('type');

              if (stateInput === 'password') {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.' + toggle).attr('type', 'text');
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.' + toggle).attr('type', 'password');
              }
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('#flatpickr').focus(function () {
              jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('type', 'date');
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__(document).mouseup(function (e) {
              var container = jquery__WEBPACK_IMPORTED_MODULE_2__('.small-box');

              if (!container.is(e.target) && container.has(e.target).length === 0) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#box-password-change').hide();
              }
            }); // tslint:disable-next-line:only-arrow-functions

            jquery__WEBPACK_IMPORTED_MODULE_2__(document).mouseup(function (e) {
              var container = jquery__WEBPACK_IMPORTED_MODULE_2__('.small-box');

              if (!container.is(e.target) && container.has(e.target).length === 0) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#box-phone-change').hide();
                jquery__WEBPACK_IMPORTED_MODULE_2__('#back-one-phone').fadeIn();
                jquery__WEBPACK_IMPORTED_MODULE_2__('#save-number').fadeOut();
                jquery__WEBPACK_IMPORTED_MODULE_2__('#just-phone ,#Next-Verit').fadeIn();
                jquery__WEBPACK_IMPORTED_MODULE_2__('#verity').css({
                  display: 'none'
                });
              }
            });
          });
        }
      }]);

      return EditProfileComponent;
    }();

    EditProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./edit-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/edit-profile/edit-profile/edit-profile.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./edit-profile.component.scss */
      "./src/app/features/edit-profile/edit-profile/edit-profile.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], EditProfileComponent);
    /***/
  }
}]);
//# sourceMappingURL=features-edit-profile-edit-profile-module-es5.js.map