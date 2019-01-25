// Deals with storage
// sets an item in local storage
export const setLocalStorage = (key, val) => {
  val = JSON.stringify(val);
  localStorage.setItem(key, val);
};

// removes an item from local storage
export const removeLocalStorage = key => localStorage.removeItem(key);

// gets an item from local storage
export const getLocalStorage = key => JSON.parse(localStorage.getItem(key));
