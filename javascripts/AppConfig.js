app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "partials/home.html",
            controller: "HomeCtrl"
        })
        .when("/album", {
            templateUrl: "partials/album.html",
            controller: "AlbumCtrl"
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