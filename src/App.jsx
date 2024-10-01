import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAllproducts } from '../utils/productlist'
import Cards from './componenets/Cards'

function App() {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [showCardItems, setshowCardItems] = useState(false)

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    const localSeGetItems = JSON.parse(localStorage.getItem("cart"))
    console.log("local==>", localSeGetItems)
    if (localSeGetItems) {
      setCartItems([...localSeGetItems])
    }
  }, [])

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

  const iterateOn = showCardItems ? cartItems : products

  return (
    <>
      <div className='container mx-auto my-10'>
        <div className='fixed w-full h-[80px] bg-black text-white top-0  flex items-center justify-center gap-10'>
          <h1 className='text-center text-2xl font-semibold'>Shopping List</h1>
          <h1
            onClick={() => setshowCardItems(!showCardItems)}
            className='text-center text-2xl underline cursor-pointer hover:text-blue-500'
          >
            {
              showCardItems ? "Show All Products" :
                `Card items : ${cartItems.length}`
            }
          </h1>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {/* {showCardItems} */}
              {iterateOn.map((data, ind) => {
                const isAddToCart = cartItems.findIndex((produtc) => produtc.id === data.id) !== -1
                return (
                  <Cards
                    isAddToCart={isAddToCart}
                    addToCard={() => addCardItems(data)} key={data.id} khan={data}
                    showRemoveFromCart={showCardItems === true}
                    removeCards={() => {
                      const allOtherProduts = cartItems.filter((products) => products.id !== data.id);
                      setCartItems([...allOtherProduts])
                    }}
                  />
                )
              })}
            </div>
          </div>
        </section>
      </div >



    </>
  )
}

export default App
