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

    let getWeddingPhotos = () => {
        let weddingz = [];
        return $q((resolve, reject) => {
         $http.get(`${FIREBASE_CONFIG.databaseURL}/weddings.json`)
             .then((fbItems) => {
                 let weddingCollection = fbItems.data;
                 if (weddingCollection !== null) {
                     Object.keys(weddingCollection).forEach((key) => {
                         weddingCollection[key].id = key;
                         weddingz.push(weddingCollection[key]);
                     });
                 }
                 resolve(weddingz);
                 console.log("weddingz", weddingz);
             }).catch((error) => {
                 reject(error);
             });
        });
    };


    
    
return {getAllPhotos:getAllPhotos, getWeddingPhotos:getWeddingPhotos};

 });
