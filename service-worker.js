self.addEventListener('push', function (evt) {
  console.log(evt);

  console.log('Received a push message', event);

//  THis didn't really work
  var title = 'Yay a message.';
  var body = 'We have received a push message.';
  var icon = '/images/icon-192x192.png';
  var tag = 'simple-push-demo-notification-tag';

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag
    })
  );
});

// The SW will be shutdown when not in use to save memory,
// be aware that any global state is likely to disappear
console.log("SW startup");

self.addEventListener('install', function(event) {
  console.log("SW installed");
  alert('SW Instaled');
});

self.addEventListener('activate', function(event) {
  console.log("SW activated");
});
