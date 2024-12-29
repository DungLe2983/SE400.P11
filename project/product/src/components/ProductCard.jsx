import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className='group'>
      {/* Hiển thị ảnh sản phẩm */}
      <div className='aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden'>
        <img
          src={product.variations[0]?.image} // Lấy ảnh của biến thể đầu tiên
          alt={product.name}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
        />
      </div>

      {/* Liên kết đến trang chi tiết sản phẩm */}
      <a href={`/products/${product._id}`}>
        <div className='flex justify-between gap-2'>
          <div>
            <h3 className='font-medium'>{product.name}</h3>
            <p className='text-sm text-gray-600'>{product.category.name}</p>
            <p className='text-sm text-gray-600 line-clamp-2'>
              {product.description}
            </p>
          </div>

          {/* Giá sản phẩm */}
          <p className='font-semibold mt-1'>{product.variations[0]?.price}</p>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
