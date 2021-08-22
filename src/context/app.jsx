import React from 'react';

export const AppContext = React.createContext({ cart: [] });
export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider = ({ children, data }) => {
  const [cart, setCart] = React.useState(data || []);

  const deleteItem = (index) => {
    cart.splice(index, 1);
    setCart([...cart]);
  };

  const addToCart = (item) => {
    const sameGroupIndex = cart
      .findIndex((_item) => item.id === _item.id && item.matchYear === _item.matchYear);

    if (sameGroupIndex > -1) {
      cart.splice(sameGroupIndex, 1);
    }

    setCart([...cart, item]);
  };

  const contextValue = {
    cart,
    deleteItem,
    addToCart,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
