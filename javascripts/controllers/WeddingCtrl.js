app.controller("WeddingCtrl", function($location, $rootScope, $scope, PhotographyFactory) {
	$scope.weddings = [];

	let getWeddingPhotos = () => {
		PhotographyFactory.getAllWeddingPhotos($rootScope).then((weddingz) => {
			$scope.weddings = weddingz;
		}).catch((error) => {
			console.log("get wedding error", error);
		});
	};

	getWeddingPhotos();


});