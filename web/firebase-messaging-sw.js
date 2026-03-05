importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDjqP3CE6VeSbql7jWWkJxdct5CW1X_liM",
  authDomain: "rd-chat-e0eaa.firebaseapp.com",
  projectId: "rd-chat-e0eaa",
  storageBucket: "rd-chat-e0eaa.firebasestorage.app",
  messagingSenderId: "705786929143",
  appId: "1:705786929143:web:6bbca7389ab58e265818f2"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icons/Icon-192.png'
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
