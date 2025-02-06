
// redux/localStorage.ts

// Save data to localStorage
export const saveCartToLocalStorage = (state: any) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('cartState', serializedState);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };
  
  // Load data from localStorage
  export const loadCartFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('cartState');
      if (serializedState === null) {
        return undefined; // If nothing in localStorage, return undefined
      }
      return JSON.parse(serializedState);
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      return undefined;
    }
  };
  