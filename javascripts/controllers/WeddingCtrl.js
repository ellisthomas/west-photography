app.controller("WeddingCtrl", function($location, $scope, PhotographyFactory) {
	$scope.weddings = [];



	let getWeddingPhotos = () => {
		PhotographyFactory.getAllWeddingPhotos().then((response) => {
			$scope.weddings = weddingz;
			console.log("weddingz", weddingz);
		}).catch((error) => {
			console.log("get weddings error");
		});
	};

	getWeddingPhotos();

});

console.log("hello there");