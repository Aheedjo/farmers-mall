/**
 * Convert a file to a base64 string
 * @param {File} file - The file to be converted
 * @returns {Promise<string>} - A promise that resolves with the base64 string of the file
 */
export const fileToBase64 = (file) => {
  console.log(file)
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
