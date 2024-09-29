import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAllproducts } from '../utils/productlist'
import Cards from './componenets/Cards'

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const products = await getAllproducts();
    setProducts([...products])
    console.log("products", products);

  }

  return (
    <>
      <h1>Hello Asad Islam Kiys Hall HE ap Logo KE</h1>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((data, ind) => {
              return <Cards key={data.id} khan={data} />
            })}
          </div>
        </div>
      </section>



    </>
  )
}

export default App
