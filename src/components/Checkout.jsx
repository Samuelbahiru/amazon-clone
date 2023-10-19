import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import { GB_CURRENCY } from '../utils/Constants'
import { removeFromCart } from '../Redux/cartSlice'
const Checkout = () => {
    const products = useSelector((state) => state.cart.products )
    const itemNumber = useSelector((state)=> state.cart.productsNumber)
    const subtotal = useSelector((state)=> state.cart.products.reduce((subtotal, product)=> subtotal + (product.price * product.quantity),0))
    const dispatch = useDispatch()
  return (
    <div className='h-screen bg-amazonclone-background'>
        <div className='min-w-[1000px] max-[500px] m-auto pt-8'>
          <div className='grid grid-cols-8 bg-white gap-10'>
            {/* products */}
            <div className='col-span-6'>
              <div className='text-2xl xl:text-3xl m-4'>Shooping Cart</div>
              {
                products.map((product)=>{
                  return (<div key={product.id}>
                    <div className='grid grid-cols-12 divide-y divide-gray-400 mr-4'>
                        <div className='col-span-10 grid grid-cols-8 divide-y divide-gray-400'>
                        <div className='col-span-2'>
                              <Link to={`product/${product.id}`}>
                              <img className='p-4 margin-auto' src={product.image_small}/>
                              </Link>
                        </div>
                        <div className='col-span-6 bg-white'>
                            <div className='font-medium text-black mt-2'>
                              <Link to={`product/${product.id}`}>
                                  <ProductDetails product={product} ratings={false}/>
                              </Link>
                            </div>
                            <div>
                                <button onClick={()=>dispatch(removeFromCart(product.id))} className='text-sm xl:text-base rounded font-semibold'>Delete</button>
                            </div>
                            <div className='grid grid-cols-3 w-20'>
                                <div className='text-xl xl:text-2xl bg-gray-400 rounded '>-</div>
                                <div className='text-lg xl:text-sxl bg-gray-200 text-center '>{product.quantity}</div>
                                <div className='text-xl xl:text-2xl bg-gray-400 rounded '>+</div>
                            </div>
                        </div>

                        </div>
                        <div className='col-span-2'>
                             <div className='text-lg xl:text-xl mt-2 mr-4 font-semibold'>{GB_CURRENCY.format(product.price)}</div>
                        </div>
                    </div>
                    
                    </div>)
                })
              }
              <div className='text-lg xl:text-xl text-right mb-4 mr-4 font-semibold'>SubTotal {itemNumber}: <span>{GB_CURRENCY.format(subtotal)}</span></div>
            </div>
            {/* checkout */}
            <div className='col-span-2 bg-white rounded h-[250px] p-7'>
                  <div className='text-xs xl:text-sm text-green-800 mb-2'>Your order qualifies for <span>FREE DELIVERY</span>. Delivery Details</div>
                  <div className='text-base xl:text-lg text-right mb-4 mr-4 font-semibold'>SubTotal {itemNumber}: <span>{GB_CURRENCY.format(subtotal)}</span></div>
                  <button className='bg-yellow-400 w-full p-3 text-xs xl:text-sm rounded hover: bg-yellow-500 mt-3'>Proceed to Checkout</button>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Checkout