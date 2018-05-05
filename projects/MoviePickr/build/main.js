webpackJsonp([5],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_movie_details_movie_details__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(storage, navCtrl, navParams) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favorites = [];
    }
    FavoritesPage.prototype.goToMovieDetailsPage = function (movie) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_movie_details_movie_details__["a" /* MovieDetailsPage */], {
            movieDetails: movie
        });
    };
    FavoritesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.getAllFavorites()
            .then(function (movies) {
            if (movies)
                _this.favorites = movies;
            console.log(_this.favorites);
        });
        console.log(this.favorites);
        console.log('ionViewDidLoad FavoritesPage');
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"C:\Users\moise\Documents\Applications\projects\lasttry\MoviePickr\src\pages\favorites\favorites.html"*/'<!--\n\n  Generated template for the FavoritesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Favorites</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-grid>\n\n      <ion-row detail-push *ngFor="let favorite of favorites" (click)="goToMovieDetailsPage(favorite)">\n\n        <ion-col col-4>\n\n          <img margin-vertical width="80" height="120" [src]="favorite.Poster" />\n\n        </ion-col>\n\n        <ion-col col-8>\n\n          <ion-label margin-vertical text-wrap>{{favorite.Title}}</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\moise\Documents\Applications\projects\lasttry\MoviePickr\src\pages\favorites\favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movie_details_movie_details__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MoviesPage = /** @class */ (function () {
    function MoviesPage(http, navCtrl, navParams) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MoviesPage.prototype.goToMovieDetailsPage = function (movie) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__movie_details_movie_details__["a" /* MovieDetailsPage */], {
            movieDetails: movie
        });
    };
    MoviesPage.prototype.request = function () {
        var _this = this;
        var key = 'bb7201bc';
        var url = "https://www.omdbapi.com/?s=" + this.query + "&type=movie&plot=full&apikey=" + key;
        //url
        //param
        //headers
        this.http.get(url, {}, {})
            .then(function (response) {
            console.log("response", response);
            var data = JSON.parse(response.data);
            _this.items = data.Search;
            console.log("data", _this.items);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    MoviesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movies',template:/*ion-inline-start:"C:\Users\moise\Documents\Applications\projects\lasttry\MoviePickr\src\pages\movies\movies.html"*/'<!--\n\n  Generated template for the MoviesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Movies</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-toolbar>\n\n    <ion-row>\n\n      <ion-col col-8>\n\n        <ion-searchbar [(ngModel)]="query"> </ion-searchbar>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button (click)="request(query);">Search</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-toolbar>\n\n  <ion-grid>\n\n    <ion-row detail-push *ngFor="let item of items" (click)="goToMovieDetailsPage(item)">\n\n      <ion-col col-4>\n\n        <img margin-vertical width="80" height="120" [src]="item.Poster" />\n\n      </ion-col>\n\n      <ion-col col-8>\n\n        <ion-label margin-vertical text-wrap>{{item.Title}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\moise\Documents\Applications\projects\lasttry\MoviePickr\src\pages\movies\movies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MoviesPage);
    return MoviesPage;
}());

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheatherDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TheatherDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TheatherDetailsPage = /** @class */ (function () {
    function TheatherDetailsPage(http, navCtrl, navParams) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.theatherDetails = navParams.get("theatherDetails");
    }
    TheatherDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TheatherDetailsPage');
        console.log(this.theatherDetails);
        this.request();
    };
    TheatherDetailsPage.prototype.request = function () {
        var _this = this;
        var key = 'w4m3xwur2n8je4nr4fhs44uh';
        var currentTime = new Date();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();
        var date = year + '-' + month + '-' + day;
        var url = "https://data.tmsapi.com/v1.1/theatres/" + this.theatherDetails.theatreId + "/showings?startDate=" + date + "&numDays=2&api_key=" + key;
        //param
        //headers
        console.log(url);
        this.http.get(url, {}, {})
            .then(function (response) {
            var data = JSON.parse(response.data);
            _this.items = data;
            console.log(_this.items);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    TheatherDetailsPage.prototype.toggleSection = function (i) {
        this.items[i].open = !this.items[i].open;
    };
    TheatherDetailsPage.prototype.toggleItem = function (i, j) {
        this.items[i].showtimes[j].open = !this.items[i].showtimes[j].open;
    };
    TheatherDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-theather-details',template:/*ion-inline-start:"C:\Users\moise\Documents\Applications\projects\lasttry\MoviePickr\src\pages\theather-details\theather-details.html"*/'<!--\n\n  Generated template for the TheatherDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{theatherDetails.name}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n  <ion-content padding>\n\n      <p text-wrap padding-top padding-bottom><b>Distance: </b>{{theatherDetails.location.distance | number : \'1.2-2\'}} miles away | <b>Phone: </b> {{theatherDetails.location.telephone}}</p>\n\n      <p text-wrap padding-bottom><b>Address: </b>{{theatherDetails.location.address.street}},\n\n       {{theatherDetails.location.address.city}}, {{theatherDetails.location.address.state}}, <span *ngIf="theatherDetails.location.address.postalcode"> {{theatherDetails.location.address.postalcode}},</span> {{theatherDetails.location.address.country}}</p>\n\n\n\n      <ion-list-header>Movies showing</ion-list-header>\n\n\n\n      <ion-list class="accordion-list">\n\n        <!-- First Level -->\n\n        <ion-list-header *ngFor="let item of items; let i = index" no-lines no-padding>\n\n          <!-- Toggle Button -->\n\n          <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n\n            <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n\n            <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n\n              <p>{{ item.title }}</p>\n\n          </button>\n\n     \n\n          <ion-list *ngIf="item.showtimes && item.open" no-lines>\n\n            <p text-wrap padding><b>Description: </b>{{item.longDescription}}</p>\n\n            <p text-wrap padding><b>Genres: </b>{{item.genres | addSpaceToArray}} | <span *ngIf="item.ratings"> <b>Age restriction: </b> {{item.ratings[0].code}} </span></p>\n\n            <p text-wrap padding><b>Top cast: </b>{{item.topCast | addSpaceToArray}} | <b>Director(s): </b> {{item.directors | addSpaceToArray}}  </p> \n\n            \n\n            <!-- Second Level -->\n\n            <ion-list-header *ngFor="let showtime of item.showtimes; let j = index" no-padding>\n\n              <!-- Toggle Button -->\n\n              <ion-item ion-item detail-none class="child-item" text-wrap>\n\n                <p>{{showtime.dateTime | date:\'full\'}}</p>\n\n              </ion-item>\n\n     \n\n            </ion-list-header>\n\n          </ion-list>\n\n          \n\n        </ion-list-header>\n\n      </ion-list>\n\n    </ion-content>\n\n'/*ion-inline-end:"C:\Users\moise\Documents\Applications\projects\lasttry\MoviePickr\src\pages\theather-details\theather-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TheatherDetailsPage);
    return TheatherDetailsPage;
}());

//# sourceMappingURL=theather-details.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheathersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theather_details_theather_details__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TheathersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TheathersPage = /** @class */ (function () {
    function TheathersPage(geolocation, http, navCtrl, navParams) {
        this.geolocation = geolocation;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TheathersPage.prototype.goToTheatherDetailsPage = function (theater) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__theather_details_theather_details__["a" /* TheatherDetailsPage */], {
            //operation object will be available on details page from
            // the nav controller as 'operationDetails'
            theatherDetails: theater
        });
    };
    TheathersPage.prototype.ionViewDidLoad = function () {
        this.displayNearby();
    };
    TheathersPage.prototype.displayNearby = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            _this.request(lat, lng);
        }, function (err) {
            console.log(err);
        });
    };
    TheathersPage.prototype.request = function (lat, lng) {
        var _this = this;
        var key = 'w4m3xwur2n8je4nr4fhs44uh';
        // let currentTime = new Date();
        // let month = currentTime.getMonth() + 1;
        // let day = currentTime.getDate();
        // let year = currentTime.getFullYear();
        // let date = year + '-' + month + '-' + day;
        var url = "https://data.tmsapi.com/v1.1/theatres?&lat=" + lat + "&lng=" + lng + "&radius=10&api_key=" + key;
        //param
        //headers
        this.http.get(url, {}, {})
            .then(function (response) {
            var data = JSON.parse(response.data);
            _this.items = data;
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    TheathersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-theathers',template:/*ion-inline-start:"C:\Users\moise\Documents\Applications\projects\lasttry\MoviePickr\src\pages\theathers\theathers.html"*/'<!--\n\n  Generated template for the TheathersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Movie Showings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row detail-push *ngFor="let item of items" (click)="goToTheatherDetailsPage(item)">\n\n      <ion-col col-8>\n\n        <ion-label margin-vertical float-left text-wrap>{{item.name}}</ion-label>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <ion-label margin-vertical float-right text-wrap>\n\n          <p>{{item.location.distance | number : \'1.2-2\'}} miles away</p>\n\n          \n\n          </ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\moise\Documents\Applications\projects\lasttry\MoviePickr\src\pages\theathers\theathers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TheathersPage);
    return TheathersPage;
}());

//# sourceMappingURL=theathers.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/favorites/favorites.module": [
		282,
		4
	],
	"../pages/movie-details/movie-details.module": [
		283,
		3
	],
	"../pages/movies/movies.module": [
		284,
		2
	],
	"../pages/theather-details/theather-details.module": [
		285,
		1
	],
	"../pages/theathers/theathers.module": [
		286,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movies_movies__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theathers_theathers__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorites_favorites__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__movies_movies__["a" /* MoviesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__theathers_theathers__["a" /* TheathersPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__favorites_favorites__["a" /* FavoritesPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\moise\Documents\Applications\projects\lasttry\MoviePickr\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Movies" tabIcon="film"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Theaters" tabIcon="easel"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Favorites" tabIcon="star"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\moise\Documents\Applications\projects\lasttry\MoviePickr\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_movies_movies__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_movie_details_movie_details__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_theathers_theathers__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_theather_details_theather_details__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_favorites_favorites__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_add_space_to_array_add_space_to_array__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_storage_storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_movie_details_movie_details__["a" /* MovieDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_theathers_theathers__["a" /* TheathersPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_theather_details_theather_details__["a" /* TheatherDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_add_space_to_array_add_space_to_array__["a" /* AddSpaceToArrayPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movie-details/movie-details.module#MovieDetailsPageModule', name: 'MovieDetailsPage', segment: 'movie-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movies/movies.module#MoviesPageModule', name: 'MoviesPage', segment: 'movies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/theather-details/theather-details.module#TheatherDetailsPageModule', name: 'TheatherDetailsPage', segment: 'theather-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/theathers/theathers.module#TheathersPageModule', name: 'TheathersPage', segment: 'theathers', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_movies_movies__["a" /* MoviesPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_movie_details_movie_details__["a" /* MovieDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_theathers_theathers__["a" /* TheathersPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_theather_details_theather_details__["a" /* TheatherDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_storage_storage__["a" /* StorageProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\moise\Documents\Applications\projects\lasttry\MoviePickr\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\moise\Documents\Applications\projects\lasttry\MoviePickr\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSpaceToArrayPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the AddSpaceToArrayPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var AddSpaceToArrayPipe = /** @class */ (function () {
    function AddSpaceToArrayPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    AddSpaceToArrayPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.join(', ');
    };
    AddSpaceToArrayPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'addSpaceToArray',
        })
    ], AddSpaceToArrayPipe);
    return AddSpaceToArrayPipe;
}());

//# sourceMappingURL=add-space-to-array.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MovieDetailsPage = /** @class */ (function () {
    function MovieDetailsPage(toastCtrl, storage, http, navCtrl, navParams) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favorites = [];
        this.isFavorite = false;
        this.movieDetails = navParams.get("movieDetails");
        this.storage.isFavorite(this.movieDetails).then(function (isFav) {
            _this.isFavorite = isFav;
        });
    }
    MovieDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.movieDetails);
        var url = "https://www.omdbapi.com/?t=" + encodeURI(this.movieDetails.Title) + "&type=movie&plot=full&apikey=bb7201bc";
        console.log(url);
        this.http.get(url, {}, {})
            .then(function (response) {
            console.log("response", response);
            _this.item = JSON.parse(response.data);
            console.log("data", _this.item);
            _this.ratings = _this.item.Ratings;
            console.log(_this.ratings);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    MovieDetailsPage.prototype.favorite = function () {
        var _this = this;
        this.storage.favorite(this.movieDetails).then(function () {
            _this.isFavorite = true;
        });
        var toast = this.toastCtrl.create({
            message: 'Movie was added to favorites',
            duration: 1500,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MovieDetailsPage.prototype.unfavorite = function () {
        var _this = this;
        this.storage.unfavorite(this.movieDetails).then(function () {
            _this.isFavorite = false;
        });
        var toast = this.toastCtrl.create({
            message: 'Movie was removed from favorites',
            duration: 1500,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MovieDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movie-details',template:/*ion-inline-start:"C:\Users\moise\Documents\Applications\projects\lasttry\MoviePickr\src\pages\movie-details\movie-details.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-wrap *ngIf="item">{{item.Title}}</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only (click)="unfavorite()" *ngIf="isFavorite"><ion-icon name="star"></ion-icon></button>\n\n        <button ion-button icon-only (click)="favorite()" *ngIf="!isFavorite"><ion-icon name="star-outline"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding text-wrap>\n\n  <ion-list *ngIf="item">\n\n    <ion-item>\n\n      <img width="120" height="180" [src]="item.Poster" />\n\n    </ion-item>\n\n    <ion-item>\n\n      <b>Plot:</b> {{item.Plot}}\n\n    </ion-item>\n\n    <ion-item>\n\n      <b>Released:</b> {{item.Released}}\n\n    </ion-item>\n\n    <ion-item>\n\n      <b>Rating:</b> {{item.Rated}}\n\n    </ion-item>\n\n    <ion-item>\n\n      <b>Length:</b> {{item.Runtime}}\n\n    </ion-item>\n\n    <ion-item>\n\n      <b>Genre:</b> {{item.Genre}}\n\n    </ion-item>\n\n    <ion-item>\n\n      <b>Director:</b> {{item.Director}}\n\n    </ion-item>\n\n    <ion-item>\n\n      <b>writer(s):</b> {{item.Writer}}\n\n    </ion-item>\n\n    <ion-item>\n\n      <b>Actors:</b> {{item.Actors}}\n\n    </ion-item>\n\n    <ion-item>\n\n      <b>Awards:</b> {{item.Awards}}\n\n    </ion-item>\n\n    <ion-item>\n\n      <b>Metascore:</b> {{item.Metascore}}\n\n    </ion-item>\n\n    <ion-item>\n\n      <b>IMDBs Votes:</b> {{item.imdbVotes}}\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Ratings\n\n    </ion-list-header>\n\n\n\n    <ion-card *ngFor="let rating of ratings">\n\n      <ion-card-header>\n\n        {{rating.Source}}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        {{rating.Value}}\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\moise\Documents\Applications\projects\lasttry\MoviePickr\src\pages\movie-details\movie-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MovieDetailsPage);
    return MovieDetailsPage;
}());

//# sourceMappingURL=movie-details.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = /** @class */ (function () {
    function StorageProvider(storage) {
        this.storage = storage;
        console.log('Hello StorageProvider Provider');
    }
    StorageProvider.prototype.isFavorite = function (movie) {
        return this.getAllFavorites().then(function (result) {
            return result && result.indexOf(movie) !== -1;
        });
    };
    StorageProvider.prototype.favorite = function (movie) {
        var _this = this;
        return this.getAllFavorites().then(function (result) {
            if (result) {
                movie.favorite = 'true';
                result.push(movie);
                return _this.storage.set('favorites', result);
            }
            else {
                return _this.storage.set('favorites', [movie]);
            }
        });
    };
    StorageProvider.prototype.unfavorite = function (movie) {
        var _this = this;
        return this.getAllFavorites().then(function (result) {
            if (result) {
                var index = result.indexOf(movie);
                result.splice(index, 1);
                return _this.storage.set('favorites', result);
            }
        });
    };
    StorageProvider.prototype.getAllFavorites = function () {
        return this.storage.get('favorites');
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map