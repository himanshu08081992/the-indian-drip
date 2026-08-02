import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });
  const addToCart = (product, size, quantity) => {
    const availableStock = product.stock?.[size] || 0;

    if (availableStock <= 0) {
      alert("This size is out of stock.");
      return;
    }
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.size === size,
      );

      if (existingItem) {
        const availableStock = product.stock?.[size] || 0;

        const newQuantity = Math.min(
          existingItem.quantity + quantity,
          availableStock,
        );

        return prevCart.map((item) =>
          item.id === product.id && item.size === size
            ? {
                ...item,
                quantity: newQuantity,
              }
            : item,
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          size,
          quantity,
        },
      ];
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const removeFromCart = (productId, size) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === productId && item.size === size)),
    );
  };

  const increaseQuantity = (productId, size) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId && item.size === size) {
          const maxStock = item.stock?.[size] || 0;

          return {
            ...item,
            quantity: Math.min(item.quantity + 1, maxStock),
          };
        }

        return item;
      }),
    );
  };

  const decreaseQuantity = (productId, size) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId && item.size === size) {
          return {
            ...item,
            quantity: Math.max(item.quantity - 1, 1),
          };
        }

        return item;
      }),
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
