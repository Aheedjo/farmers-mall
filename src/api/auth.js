import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

/**
 * Register a new user with email and password
 * @param {string} email - The email address of the new user
 * @param {string} password - The password for the new user
 * @returns {Promise} - A promise that resolves with the user credential on success, or an error on failure
 */
export const registerUser = (username, email, password) => {
  return createUserWithEmailAndPassword(auth, username, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      return { user };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { error: { code: errorCode, message: errorMessage } };
    });
};

/**
 * Log in an existing user with email and password
 * @param {string} email - The email address of the user
 * @param {string} password - The password for the user
 * @returns {Promise} - A promise that resolves with the user credential on success, or an error on failure
 */
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      return { user };
    })
    .catch((error) => {
      console.log(error)
      const errorCode = error.code;
      const errorMessage = error.message;
      return { error: { code: errorCode, message: errorMessage } };
    });
};
