

app.controller("WeddingCtrl", function($scope, PhotographyFactory) {
	$scope.weddings = [];

	let getWeddingPhotos = () => {
		PhotographyFactory.getAllWedding().then((weddingz) => {
			$scope.weddings = weddingz;
			console.log("weddingz", weddingz);
		}).catch((error) => {
			console.log("get weddings error");
		});
	};

	getWeddingPhotos();

});