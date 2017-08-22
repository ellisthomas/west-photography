app.factory("PhotographyFactory", function($q, $http, FIREBASE_CONFIG) {


    let getAllPhotos = () => {
        let photoz = [];
        return $q((resolve, reject) => {
         $http.get(`${FIREBASE_CONFIG.databaseURL}/photos.json`)
             .then((fbItems) => {
                 let photoCollection = fbItems.data;
                 if (photoCollection !== null) {
                     Object.keys(photoCollection).forEach((key) => {
                         photoCollection[key].id = key;
                         photoz.push(photoCollection[key]);
                     });
                 }
                 resolve(photoz);
                 console.log("photoz", photoz);
             }).catch((error) => {
                 reject(error);
             });
        });
    };

    
return {getAllPhotos:getAllPhotos};

 });
