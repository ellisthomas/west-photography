app.run(function($location, $rootScope, FIREBASE_CONFIG, PhotographyFactory) {
  firebase.initializeApp(FIREBASE_CONFIG);

});


app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "partials/home.html",
            controller: "HomeCtrl"
        })
        .when("/gallery", {
            templateUrl: "partials/gallery.html",
            controller: "GalleryCtrl"
        })
        .when("/wedding", {
            templateUrl: "partials/wedding.html",
        })
        .when("/about", {
            templateUrl: "partials/about.html",
            controller: "AboutCtrl"
        })
        .when("/contact", {
            templateUrl: "partials/contact.html",
            controller: "ContactCtrl"
        })
        .otherwise("/home");
});