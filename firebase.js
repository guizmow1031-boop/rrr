// Import Firebase depuis le CDN (version 10.x)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js';
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

console.log("🔥 firebase.js chargé !");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBceabrOm3Hwxcs3N6GKgdJrpZLWnMcNU",
  authDomain: "iinador.firebaseapp.com",
  projectId: "iinador",
  storageBucket: "iinador.firebasestorage.app",
  messagingSenderId: "937236894682",
  appId: "1:937236894682:web:968d9a4d18fce03494a6e3",
  measurementId: "G-PXDFJVS4NL"
};

console.log("📝 Configuration Firebase chargée");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("✅ Firebase initialisé");

const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Activer la persistance locale (par défaut, mais explicite)
console.log("💾 Persistance Firebase activée (local storage)");

console.log("🔐 Auth initialisé");
console.log("📊 Firestore initialisé");

// ========================================
// CONFIGURATION GOOGLE AUTH
// ========================================
const googleProvider = new GoogleAuthProvider();
console.log("✅ GoogleAuthProvider configuré");
console.log("📧 AuthDomain:", firebaseConfig.authDomain);

// ========================================
// AUTHENTIFICATION
// ========================================

// Écouter les changements d'authentification (log seulement)
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("✅ Utilisateur Firebase connecté");
    console.log("UID:", user.uid);
    console.log("Type:", user.isAnonymous ? "🎭 Anonyme" : "👤 Identifié avec Google");
    if (!user.isAnonymous && user.email) {
      console.log("📧 Email:", user.email);
    }
    console.log("💾 Session persistée dans le navigateur");
  } else {
    console.log("🔒 Aucun utilisateur connecté");
  }
});

// Exporter pour utilisation dans d'autres fichiers
export { app, auth, analytics, db, googleProvider };