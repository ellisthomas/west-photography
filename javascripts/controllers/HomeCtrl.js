app.controller("HomeCtrl", function($scope, PhotographyFactory) {
	$scope.photos = [];

	let getPhotos = () => {
		PhotographyFactory.getAllPhotos().then((photoz) => {
			$scope.photos = photoz;
			console.log("photoz", photoz);
		}).catch((error) => {
			console.log("get photos error");
		});
	};

	getPhotos();

});