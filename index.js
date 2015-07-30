navigator.serviceWorker.register('./service-worker.js').then(function (serivceWorkerRegistration) {
    console.log('registered service worker');
    console.log(serivceWorkerRegistration);
    serivceWorkerRegistration.pushManager.subscribe().then(function (pushSubscription) {
        console.log(pushSubscription);
    }).catch(function (err) {
        console.log(err);
    });
}).catch(function (err) {
    console.log(err);
});


// "https://updates.push.services.mozilla.com/push/gAAAAABVuN3zuLlXhJmc___weJcTso3-YeB9lO6VCuohOWxR9hlEXkZer5ij8CvszHH2rTAoBTVVozv_AxDUSPvO22mHknr3RWfEy6UsAtL8Nt5Aed0CkRVWH5rqmy0KTNJEjVJvG8v7shd9Rz4M6H0fBB2NEnUVJvHm-Jf38U4wGrbXQVrg0cw="
// "https://updates.push.services.mozilla.com/push/gAAAAABVuN3zuLlXhJmc___weJcTso3-YeB9lO6VCuohOWxR9hlEXkZer5ij8CvszHH2rTAoBTVVozv_AxDUSPvO22mHknr3RWfEy6UsAtL8Nt5Aed0CkRVWH5rqmy0KTNJEjVJvG8v7shd9Rz4M6H0fBB2NEnUVJvHm-Jf38U4wGrbXQVrg0cw="
// https://updates.push.services.mozilla.com/push/gAAAAABVuOlEonizMtf_PstelynL7OZrWIlvfO7G2LEDMPXbG475eYcHF9AGCt2g0ak30lmIEdt37g-owDKfeEXoZhS5YcGZipzXzpQShycCOFQhg14dwtRSswfX1L6ebqH0S6fHsQ5oLd2VuuhSXfjTbCSd4CCtQHk9MN8BH_lYvrvyb84y9Ak=
