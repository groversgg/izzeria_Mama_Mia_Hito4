import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import React, {useState, useEffect} from "react";
import Cart from "./components/Cart/Cart";
import Pizza from "./components/Pizza/Pizza";



function App() {
  const [pizzas, setPizzas] = useState([])

  const info = async()=>{
    const result = await fetch("http://localhost:5000/api/pizzas")
    const data = await result.json()
    setPizzas(data)
  } 
  useEffect(()=>{
    info()
  },[])

  
  const [products, setProducts] = useState([])

  const infoProduct = async()=>{
    const resultProduct = await fetch("http://localhost:5000/api/pizzas/p001")
    const dataproduct = await resultProduct.json()
    setProducts(dataproduct)    
  }
  useEffect(()=>{
    infoProduct()
  },[])

  const [email, setEmail] = useState ("")
  const [password1, setPassword1] = useState ("")
  const [password2, setPassword2] = useState("")
  

  return (
    <>
      <Navbar/>
      <Pizza 
        name={products.name}
        price={products.price}
        ingredients={products.ingredients}
        img={products.img}
        desc={products.desc}
      />
      {/*<Home pizzas={pizzas}/>*/}
      {/*<Register/>*/}
      {/*<Login/>*/}
      {/*<Cart productos = {productos}/>*/}
      <Footer/>
    </>      

  )
}

export default App
