import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Review from "./components/Review";
import ProductList from "./components/ProductList";
import Header from "home/Header";
import Footer from "home/Footer";
import { getProductById } from "../src/service/productService"; // Import service để lấy dữ liệu

const DetailPage = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState("1");
  const [size, setSize] = useState("9");

  useEffect(() => {
    // Gọi API để lấy thông tin sản phẩm
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        console.log("Product data", productData);
        setProduct(productData.product); // Cập nhật dữ liệu sản phẩm
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm", error);
      }
    };

    fetchProduct();
  }, [id]); // Chạy lại khi id thay đổi

  if (!product) {
    return <div>Loading...</div>; // Nếu sản phẩm chưa tải xong, hiển thị Loading
  }

  console.log("Product", product);

  return (
    <>
      <Header />
      <div className='container mx-auto px-4 pb-8 pt-24'>
        <nav className='text-sm mb-8'>
          <ol className='flex items-center space-x-2'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to='/products/category/shoes'>Shoes</Link>
            </li>
            <li>/</li>
            <li>{product.name}</li> {/* Hiển thị tên sản phẩm */}
          </ol>
        </nav>

        <div className='grid md:grid-cols-2 gap-8 mb-16'>
          {/* Product Images */}
          <div className='space-y-4'>
            <div className='h-[550px] w-[730px] relative overflow-hidden rounded-lg border'>
              <img
                src={product.variations[selectedImage].image} // Dùng ảnh từ API
                alt='Product image'
                className='object-cover'
              />
            </div>
            <div className='grid grid-cols-4 gap-4'>
              {product.variations.map((variation, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={` relative overflow-hidden rounded-lg border ${
                    selectedImage === index ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <img
                    src={variation.image} // Dùng ảnh từ API
                    alt={`Product thumbnail ${index}`}
                    className='object-cover h-[150px] w-[220px]'
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className='flex flex-col '>
            <div className='space-y-6'>
              <div>
                <h1 className='text-4xl font-bold mb-2'>{product.name}</h1>
                <p className='text-gray-400 font-semibold text-[20px]'>
                  {product.category.name}
                </p>{" "}
                {/* Hiển thị tên thể loại */}
              </div>
              <div className='flex items-center justify-between'>
                <div className='text-3xl font-bold'>
                  {product.basePrice.toLocaleString() + " đ"}
                </div>{" "}
                {/* Hiển thị giá */}
                <div className='flex items-center space-x-2'>
                  <div className='flex'>
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4 ? "ri-star-fill" : "ri-star-line"
                        } text-yellow-500`}
                      ></i>
                    ))}
                  </div>
                  <span className='text-muted-foreground'>(15 Reviews)</span>
                </div>
              </div>
              <p className='text-muted-foreground border-y-2 py-12'>
                {product.description}
              </p>{" "}
              {/* Hiển thị mô tả */}
            </div>

            <div className='space-y-4'>
              <div className='flex gap-4 mt-8'>
                <div>
                  <label className='text-sm font-bold mb-2 block'>
                    Quantity
                  </label>
                  <select
                    id='quantity'
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className='w-24 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-slate-900'
                  >
                    {[1, 2, 3, 4, 5].map((qty) => (
                      <option key={qty} value={qty.toString()}>
                        {qty}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className='text-sm font-bold mb-2 block'>Size</label>
                  <select
                    id='size'
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className='w-24 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-slate-900'
                  >
                    {product.variations[0].sizes.map((sizeOption) => (
                      <option key={sizeOption.size} value={sizeOption.size}>
                        {sizeOption.size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                className='w-fit rounded-lg bg-[#100D22] text-white py-4 px-12'
                size='lg'
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* <div>
          <Review />
        </div> */}

        {/* <section>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Other Products
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            <ProductList products={[]} count={4} />
          </div>
        </section> */}
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
