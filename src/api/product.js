import { firestore } from '../firebaseConfig';
import { collection, doc, getDoc, updateDoc, addDoc } from 'firebase/firestore';

/**
 * Create a new product in Firestore
 * @param {Object} productData - The data of the product to be created
 * @param {string} productData.title - The title of the product
 * @param {string} productData.description - The description of the product
 * @param {number} productData.price - The price of the product
 * @param {string} productData.image - The image URL of the product
 * @param {string} productData.category - The category of the product
 * @returns {Promise} - A promise that resolves with the product document ID on success, or an error on failure
 */
export const createProduct = async (productData) => {
  try {
    // Reference to the 'products' collection
    const productsCollection = collection(firestore, 'products');

    // Add the new product document
    const docRef = await addDoc(productsCollection, productData);

    return { id: docRef.id }; // Return the ID of the created document
  } catch (error) {
    console.error('Error occurred:', error);
    const errorCode = error.code;
    const errorMessage = error.message;
    return { error: { code: errorCode, message: errorMessage } };
  }
};

/**
 * Get product by ID from Firestore
 * @param {string} id - The ID of the product
 * @returns {Promise<Object>} - A promise that resolves with the product data
 */
export const getProductById = async (id) => {
  try {
    const productDoc = doc(firestore, 'products', id);
    const productSnapshot = await getDoc(productDoc);
    if (productSnapshot.exists()) {
      return productSnapshot.data();
    } else {
      throw new Error('Product not found');
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

/**
 * Update a product in Firestore
 * @param {string} id - The ID of the product
 * @param {Object} productData - The updated product data
 * @returns {Promise<void>} - A promise that resolves when the product is updated
 */
export const updateProduct = async (id, productData) => {
  try {
    const productDoc = doc(firestore, 'products', id);
    await updateDoc(productDoc, productData);
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};
