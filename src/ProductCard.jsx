import React from "react";

function ProductCard(product) {
  return (
    <div>
      <div className="bg-white">
        <div className="relative pt-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-80 h-80 object-cover mb-3"
          />
          {product.sale == "true" && (
            <span className="absolute top-2 right-0 rounded-full bg-red-500 text-black font-bold text-xs px-1 py-2.5 z-10">
              Sale!
            </span>
          )}
        </div>

        <p className="text-sm text-gray-400">{product.category}</p>
        <h3 className="font-semibold text-gray-800">{product.title}</h3>
        <div className="flex text-red-500">☆☆☆☆☆</div>
        <div className="flex gap-2 mt-1 mb-8">
          {product.oldPrice && (
            <span className="text-gray-400 line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
          <span className="text-red-500 font-bold">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
