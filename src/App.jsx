import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAllproducts } from '../utils/productlist'
import Cards from './componenets/Cards'

function App() {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  // useEffect(() => {
  //   const localSeGetItems = JSON.parse(localStorage.getItem("cart"))
  //   if (localSeGetItems) {
  //     setCartItems(...localSeGetItems)
  //   }
  // },[])

  useEffect(() => {
    if (cartItems.length) {
      localStorage.setItem("cart", JSON.stringify(cartItems))
      console.log("cartItems==>", cartItems);
    }
  }, [cartItems])

  const addCardItems = (itema) => {
    const items = [...cartItems]
    const itemInd = items.findIndex((data) => data.id === itema.id)
    console.log(itemInd);

    if (itemInd == -1) {
      items.push(itema)
      setCartItems(items)
    }

  }

  const fetchProducts = async () => {
    const products = await getAllproducts();
    setProducts([...products])
    console.log("products", products);

  }

  return (
    <>
      <div className='container mx-auto my-10'>
        <div className='fixed w-full h-[100px] bg-black text-white top-0  flex items-center justify-center gap-10'>
          <h1 className='text-center text-1xl font-semibold'>Shopping List</h1>
          <h1 className='text-center text-1xl underline'>Card items : {cartItems.length}</h1>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {products.map((data, ind) => {
                const isAddToCart = cartItems.findIndex((produtc) => produtc.id === data.id) !== -1
                return (
                  <Cards
                    isAddToCart={isAddToCart}
                    addToCard={() => addCardItems(data)} key={data.id} khan={data}
                  />
                )
              })}
            </div>
          </div>
        </section>
      </div>



    </>
  )
}

export default App
