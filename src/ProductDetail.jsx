import React from "react";
import AddToCart from "./AddToCart";

function ProductDetail() {
  return (
    <div className="bg-gray-100 px-4 py-10">
      <div className="bg-white flex p-12 gap-3">
        <img
          className="w-1/2 object-cover"
          src="https://m.media-amazon.com/images/I/610V6Qae3pL._UF894,1000_QL80_.jpg"
          alt="Black Printed Coffee Mug"
        />
        <div className="w-1/2 px-6">
          <h1 className="text-5xl font-semibold text-gray-500 mb-10">
            Black Printed Coffee Mug
          </h1>
          <p className="text-3xl font-bold text-gray-600 mb-4">$15.00</p>
          <p className="text-gray-500 mb-6 font-semibold text-2xl">
            Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
            consectetur adipisci velit, sed quia non incidunt lores ta porro
            ame. numquam eius modi tempora incidunt lores ta porro ame.
          </p>

          <AddToCart />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
