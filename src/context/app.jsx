import React from 'react';
import PropTypes from 'prop-types';

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
      .findIndex((_item) => item.id === _item.id && item.matchCode === _item.matchCode);

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

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
};
