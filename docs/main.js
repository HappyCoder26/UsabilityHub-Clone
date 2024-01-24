(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AppComponent {
    constructor() {
        this.title = 'usabilityhub';
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    toggleFunction() {
        let i = 1;
        i++;
        if (i % 2 == 0) {
            let element1 = document.getElementById('margin-top');
            element1.classList.toggle('active-margin');
            let element = document.getElementById('nav-options');
            element.classList.toggle('active');
        }
        else {
            let element = document.getElementById('nav-options');
            element.classList.toggle('active');
            let element1 = document.getElementById('margin-top');
            element1.classList.toggle('not-active-margin');
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 314, vars: 0, consts: [[1, "banner"], [1, "container", "banner-text"], [1, "container", "flex", "nav-bar"], [1, "nav-icon", "flex"], ["src", "../assets/asset 1.png", "alt", "company logo"], [1, "becomeTester"], ["id", "nav-options", 1, "nav-options"], [1, "nav-links", "flex"], ["href", "#", 1, "nav-link"], [1, "fa", "fa-solid", "fa-angle-down"], ["href", "#", 1, "nav-link", "secondary-button"], ["href", "#", 1, "nav-link", "primary-button"], [1, "navigation-toggle"], ["href", "#", "id", "nav-toggle", 1, "nav-link", 3, "click"], [1, "fa", "fa-solid", "fa-bars"], ["id", "margin-top", 1, "margin"], [1, "container", "flex", "main-body"], [1, "main-heading"], [1, "main-body-grid-container"], ["href", "#", 1, "primary-button", "main-body-button"], [1, "header-text-below-button"], [2, "font-size", "0.8rem"], [1, "main-image"], ["src", "../assets/asset 2.jpeg", "alt", "main image"], [1, "companies-list-section"], [1, "container", "company-list"], [1, "company-logo", "flex"], ["src", "../assets/asset 3.png", "alt", "company-logo"], ["src", "../assets/asset 4.png", "alt", "company-logo"], ["src", "../assets/asset 5.png", "alt", "company-logo"], ["src", "../assets/asset 6.png", "alt", "company-logo"], ["src", "../assets/asset 7.png", "alt", "company-logo"], ["src", "../assets/asset 8.svg", "alt", "company-logo"], ["src", "../assets/asset 9.png", "alt", "company-logo"], [1, "feature-section"], [1, "container"], [1, "features-heading"], ["href", "#", 1, "secondary-button"], [1, "fa", "fa-thin", "fa-arrow-right"], [1, "feature-options", "flex"], [1, "feature-logo"], ["src", "../assets/asset 11.svg", "alt", ""], ["src", "../assets/asset 13.svg", "alt", ""], ["src", "../assets/asset 14.svg", "alt", ""], ["src", "../assets/asset 15.svg", "alt", ""], ["src", "../assets/asset 16.svg", "alt", ""], [1, "fa", "fa-solid", "fa-arrow-right"], ["src", "../assets/asset 17.svg", "alt", ""], [1, "big-feature-section"], [1, "container", "big-feature", "flex"], [1, "big-feature-banner"], ["src", "../assets/asset 18.png"], [1, "big-feature-content"], [1, "big-feature-content-p"], ["src", "../assets/asset 19.png"], [1, "big-feature-review", "flex"], [1, "reviewer-image"], ["src", "../assets/asset 20.png", "alt", ""], [1, "reviewer-details"], [2, "font-size", "1rem"], [1, "container", "big-feature1", "flex"], ["src", "../assets/asset 21.png"], ["src", "../assets/asset 22.png"], ["src", "../assets/asset 23.png", "alt", ""], [1, "container", "flex", "big-feature"], ["src", "../assets/asset 24.png"], ["src", "../assets/asset 25.png"], ["src", "../assets/asset 26.png", "alt", ""], [1, "examples-section"], [1, "examples-heading"], [1, "example-items", "flex"], ["href", "#", 1, "examples"], [1, "advertisement-section"], [1, "container", "flex", "adverstisements"], [1, "advertise"], [1, "services", "flex"], [1, "services-ul"], [1, "advertise-image"], ["src", "../assets/asset 40.png", "alt", ""], [1, "container", "footer-container", "flex"], ["href", "#"], ["src", "../assets/asset 1.png", 2, "width", "170px"], [1, "link-options", "flex"], [1, "subfooter"], [1, "container", "subfooter-container", "flex"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\uD83D\uDCE3 Interviews is now in beta! Read more \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Become a tester");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Resources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Try for free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_33_listener() { return ctx.toggleFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "header", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Design confidently.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "UsabilityHub is a remote user research platform that takes the guesswork out of design decisions by validating them with real users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Get started for free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "No credit card required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "The world\u2019s best companies rely on UsabilityHub to make better design decisions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "section", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Your user research Swiss Army knife");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "See all features ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Card sorting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Discover how people group and label information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Prototype tests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Discover how people navigate your Figma prototypes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "First click tests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Test interaction with first click and navigation tests.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Surveys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Get feedback on images, videos or audio files.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Preference tests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Find out which designs users prefer and why.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Five second tests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Testing by measuring first impressions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "section", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Effortless validation for");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Design professionals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful experiences for your users.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "The navigation test is god's gift to UI designers, it probably has the best power-to-simplicity ratio of any software, ever.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Nick Franklin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Chief Executive Officer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "section", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Optimisation for");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Marketers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Fine-tune landing pages, messaging, and creative, helping you optimise conversion rates on marketing campaigns and product launches.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "We use UsabilityHub tests to help us make decisions for various projects. From web and mobile design to marketing activities.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Rick van de Ven");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Digital Marketing Analyst");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "section", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Easier decision making for");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Product managers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Ensure you\u2019re delivering the right features to the right customers by validating product concepts with your target audience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Adopting UsabilityHub got us into the habit of asking our users questions before locking in decisions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Ron Diorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "VP Innovation & New Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "section", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "One platform, endless possibilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "See more examples ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Can users complete a task in my software interface?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Can users find important pages on my website?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Is my website's intended audience clear?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Do visitors understand what a page is about?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "section", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "No participants?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "No problem.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Our integrated panel allows you to quickly and affordably recruit research participants that precisely match your target audience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Our panel includes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "ul", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "530k+ panel participants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "35+ demographic options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Free demographic targeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "ul", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Coverage in 100+ countries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Average 2hr turn around time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Response quality guarantee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Status page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Terms & conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Security information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Card sorting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Surveys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Five second testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Preference testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Terms & conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Security information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Enterprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Resources hub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Guides");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Templates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Help center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Terms & Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Security Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@charset \"UTF-8\";\n.container[_ngcontent-%COMP%] {\n  max-width: 1220px;\n  margin-inline: auto;\n  padding: var(--padding-inline-section);\n  overflow: hidden;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.secondary-button[_ngcontent-%COMP%] {\n  border: 0.3px solid #b3aaaa;\n  border-radius: 5px;\n  font-weight: 500;\n  padding: 10px 22px;\n  transition: 0.2s ease-out;\n}\n.secondary-button[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-color);\n  color: var(--accent-color);\n}\n.primary-button[_ngcontent-%COMP%] {\n  background-color: var(--accent-color);\n  color: white !important;\n  font-weight: 500;\n  padding: 10px 20px;\n  border-radius: 5px;\n  transition: 0.2s ease-out;\n}\n.primary-button[_ngcontent-%COMP%]:hover {\n  background-color: var(--accent-color-dark);\n  box-shadow: 0 0 3px var(--secondary-text-color);\n}\n.banner[_ngcontent-%COMP%] {\n  background-color: #4dadf7;\n  background-image: url('asset 32.png');\n  background-size: 300px;\n}\n.banner-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.banner-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: aliceblue;\n  font-size: 0.9rem;\n  font-weight: 100;\n}\nnav[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.nav-bar[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  position: relative;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  gap: 25px;\n}\n.nav-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 170px;\n}\n.nav-options[_ngcontent-%COMP%] {\n  flex-basis: 750px;\n}\n.nav-links[_ngcontent-%COMP%] {\n  gap: 25px;\n  justify-content: flex-end;\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: var(--primary-text-color);\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--accent-color);\n}\n.navigation-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\nheader[_ngcontent-%COMP%] {\n  padding: 10px var(--padding-inline-section) 0;\n}\n.main-body[_ngcontent-%COMP%] {\n  justify-content: center;\n  gap: 50px;\n}\n.main-heading[_ngcontent-%COMP%] {\n  width: 45vw;\n}\n.main-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.main-body-button[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.header-text-below-button[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  text-align: center;\n}\n.main-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.main-body-grid-container[_ngcontent-%COMP%] {\n  width: 19vw;\n  margin-top: 32px;\n  display: grid;\n}\n.main-body-grid-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 14px 0;\n  padding-left: 40px;\n  padding-right: 40px;\n  font-size: 15px;\n}\n.companies-list-section[_ngcontent-%COMP%] {\n  padding: 10px var(--padding-inline-section) 0;\n}\n.company-list[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.company-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--primary-text-color);\n  font-size: 1rem;\n  font-weight: 100;\n  text-align: center;\n}\n.company-logo[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n.company-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 45px;\n}\n.feature-section[_ngcontent-%COMP%] {\n  padding: 80px var(--padding-inline-section) 0;\n}\n.features-heading[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.features-heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.feature-options[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 40px;\n  margin-top: 40px;\n}\n.feature-logo[_ngcontent-%COMP%] {\n  flex-basis: 27%;\n  text-align: center;\n}\n.feature-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.feature-logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-block: 10px;\n}\n.big-feature-section[_ngcontent-%COMP%] {\n  padding: 10px var(--padding-inline-section) 0;\n}\n.big-feature[_ngcontent-%COMP%] {\n  justify-content: center;\n  gap: 50px;\n}\n.big-feature1[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  justify-content: center;\n  gap: 50px;\n}\n.big-feature-banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.big-feature-content[_ngcontent-%COMP%] {\n  width: 40vw;\n}\n.big-feature-content-p[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-top: 12px;\n}\n.big-feature-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 30px;\n  margin-block: 24px;\n}\n.reviewer-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n}\n.reviewer-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.4;\n}\n.reviewer-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  line-height: 20px;\n}\n.examples-section[_ngcontent-%COMP%] {\n  padding: 10px var(--padding-inline-section) 0;\n}\n.examples-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 22px;\n}\n.examples-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.examples[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  max-width: 15vw;\n}\n.example-items[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-block: 7px;\n}\n.examples[_ngcontent-%COMP%] {\n  height: 350px;\n  width: 23%;\n  background: black;\n  position: relative;\n  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url('asset 36.jpeg');\n  background-size: cover;\n}\n.examples[_ngcontent-%COMP%]:nth-child(2) {\n  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url('asset 37.jpeg');\n  background-size: cover;\n}\n.examples[_ngcontent-%COMP%]:nth-child(3) {\n  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url('asset 38.jpeg');\n  background-size: cover;\n}\n.examples[_ngcontent-%COMP%]:nth-child(4) {\n  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url('asset 39.jpeg');\n  background-size: cover;\n}\n.examples[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  right: 20px;\n  color: antiquewhite;\n  font-weight: 700;\n}\n.advertisement-section[_ngcontent-%COMP%] {\n  background-color: #183b54;\n  padding: 10px var(--padding-inline-section) 0;\n}\n.adverstise[_ngcontent-%COMP%] {\n  width: 40vw;\n}\n.advertise[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n}\n.advertise[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #8dbfe5;\n}\n.advertise[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  margin-block: 10px;\n}\n.services[_ngcontent-%COMP%] {\n  gap: 40px;\n}\n.services-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: white;\n}\n.advertise-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.services-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"\u2022\";\n  \n  padding-right: 8px;\n}\nfooter[_ngcontent-%COMP%] {\n  padding-block: 80px;\n  background-color: #d9e9fb;\n}\n.footer-container[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: start;\n}\n.link-options[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n}\n.subfooter[_ngcontent-%COMP%] {\n  background-color: #b9cde4;\n  padding: var(--padding-inline-section);\n}\n.subfooter-container[_ngcontent-%COMP%] {\n  justify-content: center;\n  gap: 30px;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUVoQjtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FBQUo7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFGO0FBR0E7RUFDSSxnQkFBQTtBQUFKO0FBR0E7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFHQTtFQUNJLGlDQUFBO0VBQ0EsMEJBQUE7QUFBSjtBQUdBO0VBQ0kscUNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFHQTtFQUNJLDBDQUFBO0VBQ0EsK0NBQUE7QUFBSjtBQU1BO0VBQ0kseUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0FBSEo7QUFNQTtFQUNJLGtCQUFBO0FBSEo7QUFNQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUhKO0FBUUE7RUFDSSxnQkFBQTtBQUxKO0FBUUE7RUFDRyw4QkFBQTtFQUNBLGtCQUFBO0FBTEg7QUFRQTtFQUNJLFNBQUE7QUFMSjtBQVFBO0VBQ0ksWUFBQTtBQUxKO0FBUUE7RUFDSSxpQkFBQTtBQUxKO0FBUUE7RUFDSSxTQUFBO0VBQ0EseUJBQUE7QUFMSjtBQVFBO0VBQ0ksZ0NBQUE7QUFMSjtBQVFBO0VBQ0ksMEJBQUE7QUFMSjtBQVFBO0VBQ0ksYUFBQTtBQUxKO0FBVUE7RUFDSSw2Q0FBQTtBQVBKO0FBVUE7RUFDSSx1QkFBQTtFQUNBLFNBQUE7QUFQSjtBQVVBO0VBQ0ksV0FBQTtBQVBKO0FBVUE7RUFDSSxtQkFBQTtBQVBKO0FBVUE7RUFDSSxrQkFBQTtBQVBKO0FBVUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFQSjtBQVVBO0VBQ0ksV0FBQTtBQVBKO0FBVUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBUEo7QUFVQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVBKO0FBWUE7RUFDSSw2Q0FBQTtBQVRKO0FBWUE7RUFDSSxnQkFBQTtBQVRKO0FBWUE7RUFDSSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVEo7QUFZQTtFQUNJLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQVRKO0FBWUE7RUFDSSxZQUFBO0FBVEo7QUFjQTtFQUNJLDZDQUFBO0FBWEo7QUFjQTtFQUNJLGtCQUFBO0FBWEo7QUFjQTtFQUNJLGdCQUFBO0FBWEo7QUFjQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQVhKO0FBY0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFYSjtBQWNBO0VBQ0ksWUFBQTtBQVhKO0FBY0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBWEo7QUFnQkE7RUFDSSw2Q0FBQTtBQWJKO0FBZ0JBO0VBQ0ksdUJBQUE7RUFDQSxTQUFBO0FBYko7QUFnQkE7RUFDSSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQWJKO0FBb0JBO0VBQ0ksV0FBQTtBQWpCSjtBQW9CQTtFQUNJLFdBQUE7QUFqQko7QUFvQkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBakJKO0FBb0JBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBakJKO0FBb0JBO0VBQ0ksWUFBQTtBQWpCSjtBQW9CQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFqQko7QUFvQkE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBakJKO0FBdUJBO0VBQ0ksNkNBQUE7QUFwQko7QUF1QkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBcEJKO0FBdUJBO0VBQ0ksa0JBQUE7QUFwQko7QUF1QkE7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QUFwQko7QUF1QkE7RUFDSSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFwQko7QUF1QkE7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5RkFBQTtFQUNBLHNCQUFBO0FBcEJKO0FBdUJBO0VBQ0kseUZBQUE7RUFDQSxzQkFBQTtBQXBCSjtBQXVCQTtFQUNJLHlGQUFBO0VBQ0Esc0JBQUE7QUFwQko7QUF1QkE7RUFDSSx5RkFBQTtFQUNBLHNCQUFBO0FBcEJKO0FBdUJBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBcEJKO0FBeUJBO0VBQ0kseUJBQUE7RUFDQSw2Q0FBQTtBQXRCSjtBQXlCQTtFQUNJLFdBQUE7QUF0Qko7QUF5QkE7RUFDSSxZQUFBO0FBdEJKO0FBeUJBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBdEJKO0FBeUJBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBdEJKO0FBeUJBO0VBQ0ksU0FBQTtBQXRCSjtBQXlCQTtFQUNJLFlBQUE7QUF0Qko7QUF5QkE7RUFDSSxXQUFBO0FBdEJKO0FBeUJBO0VBQ0ksWUFBQTtFQUFjLDJDQUFBO0VBQ2Qsa0JBQUE7QUFyQko7QUEwQkE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FBdkJKO0FBMEJBO0VBRUksOEJBQUE7RUFDQSxrQkFBQTtBQXhCSjtBQTJCQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBeEJKO0FBNkJBO0VBQ0kseUJBQUE7RUFDQSxzQ0FBQTtBQTFCSjtBQTZCQTtFQUNJLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUExQkoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjIwcHg7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctaW5saW5lLXNlY3Rpb24pO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnNlY29uZGFyeS1idXR0b24ge1xuICBib3JkZXI6IDAuM3B4IHNvbGlkICNiM2FhYWE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMTBweCAyMnB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xufVxuXG4uc2Vjb25kYXJ5LWJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbi5wcmltYXJ5LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcbn1cblxuLnByaW1hcnktYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLWRhcmspO1xuICBib3gtc2hhZG93OiAwIDAgM3B4IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbn1cblxuLmJhbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZGFkZjc7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9hc3NldCAzMi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMzAwcHg7XG59XG5cbi5iYW5uZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhbm5lci10ZXh0IGgzIHtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbm5hdiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5uYXYtYmFyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uYXYtaWNvbiB7XG4gIGdhcDogMjVweDtcbn1cblxuLm5hdi1pY29uIGltZyB7XG4gIHdpZHRoOiAxNzBweDtcbn1cblxuLm5hdi1vcHRpb25zIHtcbiAgZmxleC1iYXNpczogNzUwcHg7XG59XG5cbi5uYXYtbGlua3Mge1xuICBnYXA6IDI1cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5uYXYtbGluayB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xufVxuXG4ubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLm5hdmlnYXRpb24tdG9nZ2xlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCB2YXIoLS1wYWRkaW5nLWlubGluZS1zZWN0aW9uKSAwO1xufVxuXG4ubWFpbi1ib2R5IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNTBweDtcbn1cblxuLm1haW4taGVhZGluZyB7XG4gIHdpZHRoOiA0NXZ3O1xufVxuXG4ubWFpbi1oZWFkaW5nIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm1haW4tYm9keS1idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItdGV4dC1iZWxvdy1idXR0b24ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1haW4taW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYWluLWJvZHktZ3JpZC1jb250YWluZXIge1xuICB3aWR0aDogMTl2dztcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLm1haW4tYm9keS1ncmlkLWNvbnRhaW5lciBhIHtcbiAgcGFkZGluZzogMTRweCAwO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmNvbXBhbmllcy1saXN0LXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxMHB4IHZhcigtLXBhZGRpbmctaW5saW5lLXNlY3Rpb24pIDA7XG59XG5cbi5jb21wYW55LWxpc3Qge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uY29tcGFueS1saXN0IGgzIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29tcGFueS1sb2dvIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uY29tcGFueS1sb2dvIGltZyB7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmZlYXR1cmUtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDgwcHggdmFyKC0tcGFkZGluZy1pbmxpbmUtc2VjdGlvbikgMDtcbn1cblxuLmZlYXR1cmVzLWhlYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mZWF0dXJlcy1oZWFkaW5nIGEge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uZmVhdHVyZS1vcHRpb25zIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA0MHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uZmVhdHVyZS1sb2dvIHtcbiAgZmxleC1iYXNpczogMjclO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mZWF0dXJlLWxvZ28gaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uZmVhdHVyZS1sb2dvIHAge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbWFyZ2luLWJsb2NrOiAxMHB4O1xufVxuXG4uYmlnLWZlYXR1cmUtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHggdmFyKC0tcGFkZGluZy1pbmxpbmUtc2VjdGlvbikgMDtcbn1cblxuLmJpZy1mZWF0dXJlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNTBweDtcbn1cblxuLmJpZy1mZWF0dXJlMSB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNTBweDtcbn1cblxuLmJpZy1mZWF0dXJlLWJhbm5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJpZy1mZWF0dXJlLWNvbnRlbnQge1xuICB3aWR0aDogNDB2dztcbn1cblxuLmJpZy1mZWF0dXJlLWNvbnRlbnQtcCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uYmlnLWZlYXR1cmUtY29udGVudCBpbWcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ibG9jazogMjRweDtcbn1cblxuLnJldmlld2VyLWltYWdlIGltZyB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnJldmlld2VyLWRldGFpbHMgaDQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLnJldmlld2VyLWRldGFpbHMgcCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5leGFtcGxlcy1zZWN0aW9uIHtcbiAgcGFkZGluZzogMTBweCB2YXIoLS1wYWRkaW5nLWlubGluZS1zZWN0aW9uKSAwO1xufVxuXG4uZXhhbXBsZXMtaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cblxuLmV4YW1wbGVzLWhlYWRpbmcgaDIge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5leGFtcGxlcyBpbWcge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWF4LXdpZHRoOiAxNXZ3O1xufVxuXG4uZXhhbXBsZS1pdGVtcyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAyMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ibG9jazogN3B4O1xufVxuXG4uZXhhbXBsZXMge1xuICBoZWlnaHQ6IDM1MHB4O1xuICB3aWR0aDogMjMlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuOSkpLCB1cmwoXCIuLi9hc3NldHMvYXNzZXQgMzYuanBlZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmV4YW1wbGVzOm50aC1jaGlsZCgyKSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMSksIHJnYmEoMCwgMCwgMCwgMC45KSksIHVybChcIi4uL2Fzc2V0cy9hc3NldCAzNy5qcGVnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZXhhbXBsZXM6bnRoLWNoaWxkKDMpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4xKSwgcmdiYSgwLCAwLCAwLCAwLjkpKSwgdXJsKFwiLi4vYXNzZXRzL2Fzc2V0IDM4LmpwZWdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5leGFtcGxlczpudGgtY2hpbGQoNCkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuOSkpLCB1cmwoXCIuLi9hc3NldHMvYXNzZXQgMzkuanBlZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmV4YW1wbGVzIHAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hZHZlcnRpc2VtZW50LXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzYjU0O1xuICBwYWRkaW5nOiAxMHB4IHZhcigtLXBhZGRpbmctaW5saW5lLXNlY3Rpb24pIDA7XG59XG5cbi5hZHZlcnN0aXNlIHtcbiAgd2lkdGg6IDQwdnc7XG59XG5cbi5hZHZlcnRpc2UgaDIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hZHZlcnRpc2UgcCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjOGRiZmU1O1xufVxuXG4uYWR2ZXJ0aXNlIGgzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYmxvY2s6IDEwcHg7XG59XG5cbi5zZXJ2aWNlcyB7XG4gIGdhcDogNDBweDtcbn1cblxuLnNlcnZpY2VzLXVsIGxpIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWR2ZXJ0aXNlLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VydmljZXMtdWwgbGk6YmVmb3JlIHtcbiAgY29udGVudDogXCLigKJcIjtcbiAgLyogSW5zZXJ0IGNvbnRlbnQgdGhhdCBsb29rcyBsaWtlIGJ1bGxldHMgKi9cbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG5mb290ZXIge1xuICBwYWRkaW5nLWJsb2NrOiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllOWZiO1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4ubGluay1vcHRpb25zIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTBweDtcbn1cblxuLnN1YmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWNkZTQ7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctaW5saW5lLXNlY3Rpb24pO1xufVxuXG4uc3ViZm9vdGVyLWNvbnRhaW5lciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDMwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn0iXX0= */", "@media screen and (max-width: 991px) {\n  .margin.active-margin[_ngcontent-%COMP%] {\n    margin-top: 355px;\n  }\n\n  .margin.not-active-margin[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .nav-bar[_ngcontent-%COMP%] {\n    overflow: initial;\n  }\n\n  .nav-options[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: white;\n    left: -100%;\n    top: 100%;\n    width: 100%;\n    padding-block: 20px;\n    transition: 0.2s ease-in-out;\n  }\n\n  .nav-options.active[_ngcontent-%COMP%] {\n    left: 0;\n  }\n\n  .nav-links[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .navigation-toggle[_ngcontent-%COMP%] {\n    display: block;\n    margin-right: 15px;\n  }\n\n  .feature-section[_ngcontent-%COMP%] {\n    padding: 40px var(--padding-inline-section) 0;\n  }\n\n  .examples[_ngcontent-%COMP%] {\n    width: calc( 50% - 10px );\n    height: 250px;\n  }\n\n  .services[_ngcontent-%COMP%] {\n    gap: 20px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  footer[_ngcontent-%COMP%] {\n    padding-block: 50px;\n    background-color: #d9e9fb;\n  }\n}\n@media screen and (max-width: 767px) {\n  .main-body[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n\n  .main-heading[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n\n  .main-body-grid-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .feature-options[_ngcontent-%COMP%] {\n    gap: 30px;\n  }\n\n  .feature-logo[_ngcontent-%COMP%] {\n    flex-basis: calc( 50% - 15px );\n  }\n\n  .big-feature[_ngcontent-%COMP%], .big-feature1[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .big-feature-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .footer-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 40px;\n    text-align: center;\n    align-items: center;\n  }\n\n  .link-options[_ngcontent-%COMP%] {\n    align-items: stretch;\n  }\n}\n@media screen and (max-width: 479px) {\n  [_ngcontent-%COMP%]:root {\n    --padding-inline-section: 10px ;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n\n  .becomeTester[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .feature-logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .big-feature-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .adverstisements[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n}\n@media screen and (max-width: 320px) {\n  .feature-logo[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n\n  .examples[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWEtcXVlcnJpcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUk7SUFDSSxpQkFBQTtFQUROOztFQUlFO0lBQ0ksZUFBQTtFQUROOztFQUlFO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFQUROOztFQUlFO0lBQ0ksaUJBQUE7RUFETjs7RUFJRTtJQUNJLGtCQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLDRCQUFBO0VBRE47O0VBSUU7SUFDSSxPQUFBO0VBRE47O0VBSUU7SUFDSSxzQkFBQTtFQUROOztFQUlFO0lBQ0ksY0FBQTtJQUNBLGtCQUFBO0VBRE47O0VBSUU7SUFDSSw2Q0FBQTtFQUROOztFQUlFO0lBQ0kseUJBQUE7SUFDQSxhQUFBO0VBRE47O0VBSUU7SUFDSSxTQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtFQUROOztFQUlFO0lBQ0ksbUJBQUE7SUFDQSx5QkFBQTtFQUROO0FBQ0Y7QUFLQTtFQUVJO0lBQ0ksOEJBQUE7RUFKTjs7RUFPRTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtFQUpOOztFQU9FO0lBQ0ksV0FBQTtFQUpOOztFQU9FO0lBQ0ksU0FBQTtFQUpOOztFQU9FO0lBQ0ksOEJBQUE7RUFKTjs7RUFPRTtJQUNJLHNCQUFBO0VBSk47O0VBT0U7SUFDSSxXQUFBO0VBSk47O0VBT0U7SUFDSSxzQkFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBSk47O0VBT0U7SUFDSSxvQkFBQTtFQUpOO0FBQ0Y7QUFPQTtFQUNJO0lBQ0ksK0JBQUE7RUFMTjs7RUFRRTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUFMTjs7RUFRRTtJQUNJLGFBQUE7RUFMTjs7RUFRRTtJQUNJLGVBQUE7RUFMTjs7RUFRRTtJQUNJLGlCQUFBO0VBTE47O0VBUUU7SUFDSSxlQUFBO0VBTE47O0VBUUU7SUFDSSxlQUFBO0VBTE47O0VBUUU7SUFDSSxlQUFBO0VBTE47O0VBUUU7SUFDSSxlQUFBO0VBTE47O0VBUUU7SUFDSSw4QkFBQTtFQUxOO0FBQ0Y7QUFRQTtFQUVJO0lBQ0ksZ0JBQUE7RUFQTjs7RUFVRTtJQUNJLFdBQUE7RUFQTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWVkaWEtcXVlcnJpcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcblxyXG4gICAgLm1hcmdpbi5hY3RpdmUtbWFyZ2luIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNTVweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFyZ2luLm5vdC1hY3RpdmUtbWFyZ2luIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1iYXIge1xyXG4gICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtb3B0aW9ucyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWJsb2NrOiAyMHB4OyBcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtb3B0aW9ucy5hY3RpdmUge1xyXG4gICAgICAgIGxlZnQ6MDtcclxuICAgIH1cclxuXHJcbiAgICAubmF2LWxpbmtzIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZpZ2F0aW9uLXRvZ2dsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mZWF0dXJlLXNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggdmFyKC0tcGFkZGluZy1pbmxpbmUtc2VjdGlvbikgMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmV4YW1wbGVzIHtcclxuICAgICAgICB3aWR0aDogY2FsYyggNTAlIC0gMTBweCApO1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2VzIHtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIH1cclxuXHJcbiAgICBmb290ZXIge1xyXG4gICAgICAgIHBhZGRpbmctYmxvY2s6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZTlmYjtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XHJcblxyXG4gICAgLm1haW4tYm9keSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLWhlYWRpbmcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1ib2R5LWdyaWQtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuZmVhdHVyZS1vcHRpb25zIHtcclxuICAgICAgICBnYXA6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZlYXR1cmUtbG9nbyB7XHJcbiAgICAgICAgZmxleC1iYXNpczogY2FsYyggNTAlIC0gMTVweCApO1xyXG4gICAgfVxyXG5cclxuICAgIC5iaWctZmVhdHVyZSwgLmJpZy1mZWF0dXJlMSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAuYmlnLWZlYXR1cmUtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZ2FwOiA0MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5rLW9wdGlvbnMge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xyXG4gICAgOnJvb3Qge1xyXG4gICAgICAgIC0tcGFkZGluZy1pbmxpbmUtc2VjdGlvbjogMTBweFxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5iZWNvbWVUZXN0ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmZlYXR1cmUtbG9nbyBwIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmJpZy1mZWF0dXJlLWNvbnRlbnQgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5hZHZlcnN0aXNlbWVudHMge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpXHJcbntcclxuICAgIC5mZWF0dXJlLWxvZ28ge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmV4YW1wbGVzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss', './media-querris.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\UsabilityHub Clone\usabilityhub\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map