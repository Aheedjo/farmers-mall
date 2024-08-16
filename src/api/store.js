import { firestore } from '../firebaseConfig';
import { collection, addDoc, doc, getDoc, updateDoc, query, where, getDocs } from 'firebase/firestore';

/**
 * Create a new store in Firestore
 * @param {Object} storeData - The data of the store to be created
 * @param {File} storeData.imageFile - The image file of the store
 * @param {string} storeData.title - The title of the store
 * @param {string} storeData.status - The status of the store
 * @param {string} storeData.description - The description of the store
 * @param {number} storeData.rating - The rating of the store
 * @param {string} storeData.category - The category of the store
 * @param {string} storeData.owner - The ID of the user who owns the store
 * @returns {Promise} - A promise that resolves with the store document ID on success, or an error on failure
 */
export const createStore = async (storeData) => {
  try {
    // Reference to the 'stores' collection
    const storesCollection = collection(firestore, 'stores');

    // Add the new store document
    const docRef = await addDoc(storesCollection, storeData);

    return { id: docRef.id }; // Return the ID of the created document
  } catch (error) {
    console.error('Error occurred:', error);
    const errorCode = error.code;
    const errorMessage = error.message;
    return { error: { code: errorCode, message: errorMessage } };
  }
};

/**
 * Get a store's details by its ID from Firestore
 * @param {string} id - The ID of the store to retrieve
 * @returns {Promise} - A promise that resolves with the store data on success, or an error on failure
 */
export const getStoreById = async (id) => {
  try {
    // Reference to the specific store document
    const storeDocRef = doc(firestore, 'stores', id);

    // Get the store document
    const storeDoc = await getDoc(storeDocRef);

    if (storeDoc.exists()) {
      console.log({ id: storeDoc.id, ...storeDoc.data() })
      return { id: storeDoc.id, ...storeDoc.data() };
    } else {
      throw new Error('Store not found');
    }
  } catch (error) {
    console.error('Error occurred:', error);
    const errorCode = error.code;
    const errorMessage = error.message;
    return { error: { code: errorCode, message: errorMessage } };
  }
};

/**
 * Update a store in Firestore
 * @param {string} id - The ID of the store to be updated
 * @param {Object} updatedData - The updated data of the store
 * @returns {Promise} - A promise that resolves on successful update, or an error on failure
 */
export const updateStore = async (id, updatedData) => {
  try {
    const storeDoc = doc(firestore, 'stores', id);
    await updateDoc(storeDoc, updatedData);
    return { success: true };
  } catch (error) {
    console.error('Error occurred:', error);
    const errorCode = error.code;
    const errorMessage = error.message;
    return { error: { code: errorCode, message: errorMessage } };
  }
};

/**
 * Get all products for a specific store ID
 * @param {string} storeId - The ID of the store
 * @returns {Promise<Array>} - A promise that resolves with the list of products
 */
export const getProductsByStoreId = async (storeId) => {
  try {
    // Reference to the 'products' collection
    const productsCollection = collection(firestore, 'products');
    // Query to get products that belong to the store with the specified ID
    const q = query(productsCollection, where('storeId', '==', storeId));
    // Execute the query
    const querySnapshot = await getDocs(q);

    // Map query results to an array of products
    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

/**
 * Get all stores from Firestore
 * @returns {Promise<Array>} - A promise that resolves with the list of stores
 */
export const getAllStores = async () => {
  try {
    // Reference to the 'stores' collection
    const storesCollection = collection(firestore, 'stores');
    
    // Get all documents in the 'stores' collection
    const querySnapshot = await getDocs(storesCollection);
    
    // Map query results to an array of store objects
    const stores = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    return stores;
  } catch (error) {
    console.error('Error fetching stores:', error);
    throw error;
  }
};

/**
 * Get all products from Firestore
 * @returns {Promise<Array>} - A promise that resolves with the list of products
 */
export const getAllProducts = async () => {
  try {
    // Reference to the 'products' collection
    const productsCollection = collection(firestore, 'products');
    
    // Get all documents in the 'products' collection
    const querySnapshot = await getDocs(productsCollection);
    
    // Map query results to an array of store objects
    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

/**
 * Get all stores owned by a specific user from Firestore
 * @param {string} userId - The ID of the user whose stores to retrieve
 * @returns {Promise<Array>} - A promise that resolves with the list of stores owned by the user
 */
export const getStoresByUserId = async (userId) => {
  try {
    // Reference to the 'stores' collection
    const storesCollection = collection(firestore, 'stores');
    
    // Query to get stores that belong to the user with the specified ID
    const q = query(storesCollection, where('owner', '==', userId));
    
    // Execute the query
    const querySnapshot = await getDocs(q);
    
    // Map query results to an array of store objects
    const stores = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    return stores;
  } catch (error) {
    console.error('Error fetching stores:', error);
    throw error;
  }
};
