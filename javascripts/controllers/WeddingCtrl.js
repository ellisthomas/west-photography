app.controller("WeddingCtrl", function($location, $rootScope, $scope, PhotographyFactory) {
	$scope.weddings = [];

	let getWedding = () => {
		console.log("getWedding");
		PhotographyFactory.getWeddingPhotos().then((weddingz) => {
			$scope.weddings = weddingz;
			console.log("weddingz", weddingz);
		}).catch((error) => {
			console.log("error in wedding");
		});
	};

	getWedding();

});

