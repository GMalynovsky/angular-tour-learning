webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__heroes_heroes_component__ = __webpack_require__("../../../../../src/app/heroes/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'heroes/:id', component: __WEBPACK_IMPORTED_MODULE_2__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */] },
    { path: 'heroes', component: __WEBPACK_IMPORTED_MODULE_4__heroes_heroes_component__["a" /* HeroesComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_5__search_search_component__["a" /* SearchComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\r\n\r\n<nav>\r\n  <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\r\n  <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\r\n  <a routerLink=\"/search\" routerLinkActive=\"active\">Search</a>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n\r\n<!-- <app-hero-detail></app-hero-detail> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__heroes_heroes_component__ = __webpack_require__("../../../../../src/app/heroes/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_hero_service_service__ = __webpack_require__("../../../../../src/app/services/hero-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_5__heroes_heroes_component__["a" /* HeroesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__search_search_component__["a" /* SearchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_hero_service_service__["a" /* HeroService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/classes/hero.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hero; });
var Hero = (function () {
    function Hero(id, name) {
        this.id = id;
        this.name = name;
    }
    return Hero;
}());

//# sourceMappingURL=hero.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*='col-'] {\r\n  float: left;\r\n  padding-right: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n[class*='col-']:last-of-type {\r\n  padding-right: 0;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n*, *:after, *:before {\r\n  box-sizing: border-box;\r\n}\r\nh3 {\r\n  text-align: center; margin-bottom: 0;\r\n}\r\nh4 {\r\n  position: relative;\r\n}\r\n.grid {\r\n  margin: 0;\r\n}\r\n.col-1-4 {\r\n  width: 25%;\r\n}\r\n.module {\r\n  padding: 20%;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  color: #eee;\r\n  max-height: 120px;\r\n  min-width: 120px;\r\n  background-color: #607D8B;\r\n  border-radius: 5px;\r\n}\r\n.module:hover {\r\n  background-color: #EEE;\r\n  cursor: pointer;\r\n  color: #607d8b;\r\n}\r\n.grid-pad {\r\n  padding: 10px 0;\r\n}\r\n.grid-pad > [class*='col-']:last-of-type {\r\n  padding-right: 20px;\r\n}\r\n@media (max-width: 600px) {\r\n  .module {\r\n    font-size: 10px;\r\n    max-height: 75px; }\r\n}\r\n@media (max-width: 1024px) {\r\n  .grid {\r\n    margin: 0;\r\n  }\r\n  .module {\r\n    min-width: 60px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Top Heroes</h3>\r\n<div class=\"grid grid-pad\">\r\n  <a *ngFor=\"let hero of heroes\" class=\"col-1-4\" [routerLink]=\"['/heroes', hero.id]\">\r\n    <div class=\"module hero\">\r\n      <h4>{{hero.name}}</h4>\r\n    </div>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hero_service_service__ = __webpack_require__("../../../../../src/app/services/hero-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Http, HttpModule } from '@angular/http';
var DashboardComponent = (function () {
    function DashboardComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_hero_service_service__["a" /* HeroService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_hero_service_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_hero_service_service__["a" /* HeroService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label {\r\n  display: inline-block;\r\n  width: 3em;\r\n  margin: .5em 0;\r\n  color: #607D8B;\r\n  font-weight: bold;\r\n}\r\ninput {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n}\r\nbutton {\r\n  margin-top: 20px;\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer; cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #ccc;\r\n  cursor: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hero\">\r\n  <h2>{{hero.name}} details!</h2>\r\n  <div>\r\n    <label>id: </label>{{hero.id}}</div>\r\n  <div>\r\n    <label>name: </label>\r\n    <input [(ngModel)]=\"hero.name\" placeholder=\"name\" />\r\n  </div>\r\n  <button (click)=\"goBack()\">Back</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_hero__ = __webpack_require__("../../../../../src/app/classes/hero.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_hero_service_service__ = __webpack_require__("../../../../../src/app/services/hero-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.heroService.getHero(+params.get('id')); })
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    return HeroDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__classes_hero__["a" /* Hero */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__classes_hero__["a" /* Hero */]) === "function" && _a || Object)
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-hero-detail',
        template: __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_hero_service_service__["a" /* HeroService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_hero_service_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_hero_service_service__["a" /* HeroService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _d || Object])
], HeroDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=hero-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/heroes/heroes.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>My heroes</h2>\r\n<div class=\"heroesContainer\">\r\n  <div>\r\n    <ul class=\"heroes\">\r\n      <li *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\" [class.selected]=\"hero === selectedHero\">\r\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <br>\r\n\r\n  <div *ngIf=\"selectedHero\" class=\"selectedHeroBox\">\r\n    <h2>\r\n      {{selectedHero.name | uppercase}} is my hero\r\n    </h2>\r\n    <button (click)=\"gotoDetail()\">View Details</button>\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"paginatorContainer\">\r\n  <ul class=\"pages\">\r\n    <li *ngFor=\"let page of pages\" (click)=\"onSelectRange(page)\" [class.selected]=\"page === selectedRangeStart\">\r\n      [{{ page + 1 }} - {{ page + 10 }}]\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/heroes/heroes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hero_service_service__ = __webpack_require__("../../../../../src/app/services/hero-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroesComponent = (function () {
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.selectedRangeStart = 0;
        this.rangeLength = 10;
    }
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.onSelectRange = function (page) {
        var _this = this;
        this.selectedRangeStart = page;
        this.selectedHero = null;
        this.heroService
            .getHeroesStartLength(page, this.rangeLength)
            .then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.countPages = function () {
        var _this = this;
        this.heroService
            .getCount()
            .then(function (count) { return _this.generatePageNumbers(count); });
    };
    HeroesComponent.prototype.generatePageNumbers = function (count) {
        var i;
        this.pages = [];
        for (i = 0; i < count; i += 10) {
            this.pages.push(i);
        }
        this.onSelectRange(0);
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/heroes', this.selectedHero.id]);
    };
    HeroesComponent.prototype.ngOnInit = function () {
        // this.getHeroes();
        this.countPages();
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-heroes',
        template: __webpack_require__("../../../../../src/app/heroes/heroes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/styles/common-styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_hero_service_service__["a" /* HeroService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_hero_service_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_hero_service_service__["a" /* HeroService */]) === "function" && _b || Object])
], HeroesComponent);

var _a, _b;
//# sourceMappingURL=heroes.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 20px 20px;;\">\r\n  <input type=\"search\" [(ngModel)]=\"searchString\" (keydown)=\"pressedEnter($event)\">\r\n  <input type=\"submit\" (click)=\"goSearch()\" value=\"Search!\" [disabled]=\"!isSearchEnabled\">\r\n</div>\r\n\r\n<h2>Found {{ occurensesFound }} occurenses.</h2>\r\n<div class=\"heroesContainer\">\r\n  <div>\r\n    <ul class=\"heroes\">\r\n      <li *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\" [class.selected]=\"hero === selectedHero\">\r\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <br>\r\n\r\n  <div *ngIf=\"selectedHero\" class=\"selectedHeroBox\">\r\n    <h2>\r\n      {{selectedHero.name | uppercase}} is my hero\r\n    </h2>\r\n    <button (click)=\"gotoDetail()\">View Details</button>\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"paginatorContainer\">\r\n  <ul class=\"pages\">\r\n    <li *ngFor=\"let page of pages\" (click)=\"onSelectRange(page)\" [class.selected]=\"page === selectedRangeStart\">\r\n      [ {{ page + 1 }} -\r\n      <span *ngIf=\"occurensesFound >= (page + rangeLength); then notEnd; else overflow\">{{ page + rangeLength }}</span>\r\n      <ng-template #notEnd>{{ page + rangeLength }}</ng-template>\r\n      <ng-template #overflow>{{ occurensesFound }}</ng-template>\r\n      ]\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hero_service_service__ = __webpack_require__("../../../../../src/app/services/hero-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.searchString = '';
        this.selectedRangeStart = 0;
        this.occurensesFound = 0;
        this.rangeLength = 10;
    }
    Object.defineProperty(SearchComponent.prototype, "isSearchEnabled", {
        get: function () {
            if (this.searchString) {
                return this.searchString.length !== 0;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    SearchComponent.prototype.goSearch = function () {
        var _this = this;
        if (this.isSearchEnabled) {
            this.heroService
                .getSearchCount(this.searchString)
                .then(function (count) { return _this.evalSearch(count); });
        }
    };
    SearchComponent.prototype.evalSearch = function (count) {
        this.heroes = null;
        this.pages = [];
        this.countSearchPages();
    };
    SearchComponent.prototype.pressedEnter = function (event) {
        if (event.keyCode === 13) {
            this.goSearch();
        }
    };
    SearchComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    SearchComponent.prototype.onSelectRange = function (page) {
        var _this = this;
        this.selectedRangeStart = page;
        this.selectedHero = null;
        if (this.isSearchEnabled) {
            this.heroService
                .getSearchStartLength(page, this.rangeLength, this.searchString)
                .then(function (heroes) { return _this.heroes = heroes; });
        }
        else {
            this.heroService
                .getHeroesStartLength(page, this.rangeLength)
                .then(function (heroes) { return _this.heroes = heroes; });
        }
    };
    SearchComponent.prototype.countPages = function () {
        var _this = this;
        this.heroService
            .getCount()
            .then(function (count) { return _this.generatePageNumbers(count); });
    };
    SearchComponent.prototype.countSearchPages = function () {
        var _this = this;
        this.heroService
            .getSearchCount(this.searchString)
            .then(function (count) { return _this.generatePageNumbers(count); });
    };
    SearchComponent.prototype.generatePageNumbers = function (count) {
        var i;
        this.occurensesFound = count;
        this.pages = [];
        for (i = 0; i < count; i += 10) {
            this.pages.push(i);
        }
        this.onSelectRange(0);
    };
    SearchComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/heroes', this.selectedHero.id]);
    };
    SearchComponent.prototype.ngOnInit = function () {
        this.countPages();
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/styles/common-styles.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_hero_service_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_hero_service_service__["a" /* HeroService */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/hero-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroServiceUrl = 'http://wtwcfservice20170815043540.azurewebsites.net/Service.svc/rest/heroes';
    }
    HeroService.prototype.getCount = function () {
        return this.http.get(this.heroServiceUrl + '/count')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.getSearchCount = function (search) {
        return this.http.get(this.heroServiceUrl + '/count/' + search)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this.heroServiceUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.getHeroesStartLength = function (start, length) {
        return this.http.get(this.heroServiceUrl + '/' + start + '/' + length)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.getSearchStartLength = function (start, length, search) {
        return this.http.get(this.heroServiceUrl + '/' + start + '/' + length + '/' + search)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.getHeroesBest = function () {
        return this.http.get(this.heroServiceUrl + '/best')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    HeroService.prototype.getHero = function (id) {
        return this.http.get(this.heroServiceUrl + '/' + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    return HeroService;
}());
HeroService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], HeroService);

var _a;
//# sourceMappingURL=hero-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/styles/common-styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\r\n  background-color: #CFD8DC !important;\r\n  color: white;\r\n}\r\n\r\n.heroes li{\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.heroes li.selected:hover{\r\n  background-color: #BBD8DC;\r\n  color: white;\r\n}\r\n\r\n.heroes li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: 1em;\r\n}\r\n\r\n.heroes .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n\r\n.heroes .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\n.heroes{\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 30%;\r\n  display: table-cell;\r\n}\r\n\r\n.selectedHeroBox{\r\n  display: table-cell;\r\n  position: relative;\r\n  left: 50px;\r\n}\r\n\r\n.heroesContainer{\r\n  float: none;\r\n  display: table;\r\n}\r\n\r\n.paginatorContainer{\r\n  width: 100%;\r\n}\r\n\r\n.pages{\r\n  list-style-type: none;\r\n  float: none;\r\n}\r\n\r\n.pages li{\r\n  float: left;\r\n  margin: 0px 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.pages li.selected{\r\n  color: red;\r\n  background: blue;\r\n}\r\n\r\n.pages li:hover{\r\n  margin: 0px 6px;\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map