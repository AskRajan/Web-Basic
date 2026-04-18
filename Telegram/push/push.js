<!-- Firebase SDKs -->
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"></script>


  // Replace with your config from Firebase Project Settings > General
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();

  // Ask permission and get token
  messaging
    .getToken({
      vapidKey: 'YOUR_VAPID_KEY' // from Firebase Console > Cloud Messaging
    })
    .then((currentToken) => {
      if (currentToken) {
        console.log("Push Token:", currentToken);
        // 🔁 You should send this token to your backend or save in DB
      } else {
        console.log("No registration token available.");
      }
    })
    .catch((err) => {
      console.error("An error occurred while retrieving token. ", err);
    });
