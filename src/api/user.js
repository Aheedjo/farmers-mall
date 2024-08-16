const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

exports.createUser = functions.https.onRequest(async (req, res) => {
  const { username, email } = req.body;
  try {
    const userRef = db.collection('users').add({
      username,
      email,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      stores: []
    });
    res.status(201).send({ userId: userRef.id });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
