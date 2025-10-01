import React from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 py-10 px-10 sm:px-40 min-h-screen">
        <div className="bg-white flex flex-col p-12">
          <select className="border self-end text-xs w-48 py-2 bg-gray-100 text-gray-600">
            <option>Default sorting</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <div className="flex flex-wrap justify-between my-4">
              <ProductCard 
              category="Mugs" 
              title="Black Printed Coffee Mug" 
              price={15.0} 
              image="https://m.media-amazon.com/images/I/610V6Qae3pL._UF894,1000_QL80_.jpg"
              />
              <ProductCard 
              category="Mugs" 
              title="Father's Day Coffee Mug" 
              price={19.0} 
              image="https://www.tbhai.com/cdn/shop/files/HappyFathersDayMug.jpg?v=1716386074"
              />
              <ProductCard 
              category="Tshirts" 
              title="Green Printed Tshirt" 
              price={34.0} 
              image="https://muselot.in/cdn/shop/products/Think-like-a-proton_-always-positive-printed-t-shirt-in-olive-green-color-Muselot_800x800.progressive.png.jpg?v=1644490561"
              />
              <ProductCard 
              category="Mugs" 
              title="Personalized Mug" 
              price={15.0} 
              image="https://imgcdn.floweraura.com/personalised-bday-mug-9936170sd-D.jpg.jpg"
              />
              <ProductCard 
              category="Tshirts" 
              title="Printed Brown Tshirt" 
              oldPrice={34.0} 
              price={25.0} 
              image="https://assets.ajio.com/medias/sys_master/root/20240903/W5HT/66d6e81e1d763220fababb24/-473Wx593H-700356037-brown-MODEL.jpg" 
              sale='true'
              />
              <ProductCard 
              category="Tshirts" 
              title="Printed Dark Blue Tshirt" 
              price={34.0}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-iSUzAQ5T1roHyIjspU-FkA9WVmlcuOSZdg&s"
              />
              <ProductCard 
              category="Tshirts" 
              title="Printed Green Tshirt" 
              oldPrice={35.0} 
              price={28.0} 
              image="https://pictures.kartmax.in/live/inside/800x800/sites/9s145MyZrWdIAwpU0JYS/product-images/ucb_light_green_printed_cotton_t_shirt_171421091224p3096csbe4i(pa0)_1.jpg" 
              sale='true'
              />
              <ProductCard 
              category="Tshirts" 
              title="Printed Tshirt Coffee Black Color" 
              oldPrice={35.0} 
              price={25.0} 
              image="https://muselot.in/cdn/shop/products/coffee-is-the-best-medicine--black_2048x.jpg?v=1625175808" 
              sale='true'
              />
              <ProductCard 
              category="Tshirts" 
              title="Typography Teal Printed Tshirt" 
              oldPrice={34.0} 
              price={32.0} 
              image="https://assets.ajio.com/medias/sys_master/root/20231027/1prk/653ba645ddf77915195e382b/-473Wx593H-469470289-teal-MODEL.jpg" 
              sale='true'
              />
          </div>
          <div className="flex mt-8 gap-1">
            <button className="bg-white text-center text-red-600 border-red-600 border-1 h-8 w-8 focus:text-white focus:bg-red-600">1</button>
            <button className="bg-white text-center text-red-600 border-red-600 border-1 h-8 w-8 focus:text-white focus:bg-red-600">2</button>
            <button className="bg-white text-center text-red-600 border-red-600 border-1 h-8 w-8 focus:text-white focus:bg-red-600">&raquo;</button>
          </div>
        </div>
      </div>
      <Footer />
      <ProductDetail />
    </div>
  );
}

export default App;
