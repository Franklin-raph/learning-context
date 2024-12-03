import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const AddToCartMenu = ({ setOpennSideMenu }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="w-[300px] bg-white shadow-md h-[100vh] fixed z-[99] top-0 right-0 overflow-y-scroll">
      <div className="m-5 flex items-center justify-between">
        <p className="text-center text-[14px]">Items in cart</p>
        <p className="text-[20px] cursor-pointer" onClick={() => setOpennSideMenu(false)}>
          &times;
        </p>
      </div>
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
          <p>Sub Total: ${(item.price * item.quantity).toFixed(2)} </p>
          <div className='flex gap-2 mt-3'>
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
  );
};

export default AddToCartMenu;
