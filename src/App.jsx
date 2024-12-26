import React from "react";
import ProductDetail from "./views/ProductDetail.jsx";
import Gallery from "./views/gallery.jsx";
import Login from "./views/login.jsx";
function App() {

  return (
    <div>
      <ProductDetail/>
      <div className="p-20">
      <Gallery/>
      </div>  
      <Login/> 
    </div>
  );
}

export default App;
