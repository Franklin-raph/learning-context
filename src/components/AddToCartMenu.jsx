import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext';

const AddToCartMenu = ({ setOpennSideMenu }) => {
  const { cart, addToCart, removeFromCart, setCart } = useContext(CartContext);
  const { logInUser, logout } = useContext(AuthContext)

  return (
    <div className="w-[300px] bg-white shadow-md h-[100vh] fixed z-[99] top-0 right-0 flex flex-col">
      {/* Header */}
      <div className="m-5 flex items-center justify-between">
        <p className="text-center text-[14px]">Items in cart</p>
        <p className="text-[20px] cursor-pointer" onClick={() => setOpennSideMenu(false)}>
          &times;
        </p>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-scroll">
        {cart.map((item) => (
          <div key={item.id} className="border-b border-gray-200 px-5 py-3">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-[100px] h-[100px] object-cover"
            />
            <p>{item.name}</p>
            <div className="flex items-center justify-between">
              <p>${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <p>Sub Total: ${(item.price * item.quantity).toFixed(2)}</p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-500 w-full border border-red-500 rounded-[5px] hover:bg-red-500 hover:text-white"
              >
                &minus;
              </button>
              <button
                onClick={() => item.quantity < item.stock && addToCart(item)}
                className="text-gray-500 w-full border border-green-500 rounded-[5px] hover:bg-green-500 hover:text-white"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="flex gap-2 px-2 py-3 bg-white">
        <button onClick={() => setCart([])} className="bg-gray-500 w-full rounded-[5px] text-white">
          Clear Cart
        </button>
        <button onClick={logout} className="py-1 w-full rounded-[5px] bg-red-500 text-white">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default AddToCartMenu;
