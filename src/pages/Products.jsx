import React, { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext';
import AddToCartMenu from '../components/AddToCartMenu';

const Products = () => {

    const { cart, addToCart } = useContext(CartContext)
    const [opennSideMenu, setOpennSideMenu] = useState(false)

    const products = [
        {
          id: 1,
          name: 'Wireless Headphones',
          price: 99.99,
          description: 'High-quality wireless headphones with noise cancellation.',
          imageUrl: 'https://via.placeholder.com/150',
          stock: 10,
        },
        {
          id: 2,
          name: 'Smartphone',
          price: 699.99,
          description: 'Latest smartphone with cutting-edge features.',
          imageUrl: 'https://via.placeholder.com/150',
          stock: 5,
        },
        {
          id: 3,
          name: 'Gaming Laptop',
          price: 1199.99,
          description: 'Powerful gaming laptop with a high-refresh-rate display.',
          imageUrl: 'https://via.placeholder.com/150',
          stock: 3,
        },
        {
          id: 4,
          name: 'Bluetooth Speaker',
          price: 49.99,
          description: 'Portable Bluetooth speaker with deep bass.',
          imageUrl: 'https://via.placeholder.com/150',
          stock: 15,
        },
        {
          id: 5,
          name: 'Smartwatch',
          price: 199.99,
          description: 'Feature-packed smartwatch with health tracking.',
          imageUrl: 'https://via.placeholder.com/150',
          stock: 8,
        },
      ];
      
  return (
    <div className='relative'>
        <p className='text-center mt-5 text-[22px] font-[500] flex justify-between px-5'>Products <span onClick={() => setOpennSideMenu(true)} className='cursor-pointer text-[14px] text-gray-500'>({cart.length})</span> </p>
        <div className='grid grid-cols-4 gap-8 p-5'>
            {products.map((product) => (
            <div key={product.id} className='shadow'>
                <img src={product.imageUrl} alt={product.name} className='w-full'/>
                <div className='p-3'>
                    <h2 className='font-[500] mb-1'>{product.name}</h2>
                    <p className='text-[13px]'>{product.description}</p>
                    <p>${product.price.toFixed(2)}</p>
                    {
                        product.stock === 0?
                        <p className='text-red-500'>Out of stock</p>
                        :
                        <button onClick={() => addToCart(product)} className='bg-green-500 text-white py-[5px] w-full px-5 mt-3 rounded-[5px]'>Add to Cart</button>
                    }
                </div>
            </div>
            ))}
        </div>
        { opennSideMenu &&
            <AddToCartMenu setOpennSideMenu={setOpennSideMenu}/>
        }
    </div>
  )
}

export default Products