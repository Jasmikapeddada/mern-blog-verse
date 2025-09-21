import SignUp from "./SignUp.jsx"
import NavBar from "./NavBar.jsx"
// import ProductCard from "./ProductCard.jsx"
import Login from "./Login.jsx"
import Home from "./Home.jsx"
import {Routes, Route} from "react-router-dom"

const App = () => {
  return (
    // <div className="">
    //   <NavBar/>
    //   {/* <Login/> */}
    //   <Home/>
    //   {/* <SignUp /> */}
    //  {/* <ProductCard/> */}
    // </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
     { /* <Route path="/product/:id" element={<ProductCard/>}/> */}
     {/* <Route path="*" element={<NotFound/>}/> */}
    </Routes>
  )
}

export default App;