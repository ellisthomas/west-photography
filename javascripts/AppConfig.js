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
        .otherwise("/home");
});