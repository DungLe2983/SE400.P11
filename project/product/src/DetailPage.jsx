import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Review from "./components/Review";
import ProductList from "./components/ProductList";
import Header from "home/Header";
import Footer from "home/Footer";
import { getProductById } from "../src/service/productService"; // Import service để lấy dữ liệu
import { addItemToCart } from "checkout/service/cartService";

const DetailPage = () => {
  const { id } = useParams(); // Lấy id từ URL
  const token = localStorage.getItem("shosingToken");
  const [product, setProduct] = useState(null);
  const [selectedVariation, setSelectedVariation] = useState(0);
  // const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState("1");
  // const [size, setSize] = useState("");
  const [selectedSize, setSelectedSize] = useState({
    size: "",
    price: 0,
    stock: 0,
  });
  const [formData, setFormData] = useState({
    productId: "",
    color: "",
    size: "",
    quantity: 1,
    price: 0,
  });

  useEffect(() => {
    // Gọi API để lấy thông tin sản phẩm
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        // console.log("Product data", productData);
        setProduct(productData.product); // Cập nhật dữ liệu sản phẩm

        const firstVariation = productData.product.variations[0];
        const firstSize = firstVariation.sizes[0];

        setSelectedSize({
          size: firstSize.size,
          price: firstSize.price,
          stock: firstSize.stock,
        });

        setFormData({
          productId: productData.product._id,
          color: firstVariation.color,
          size: firstSize.size,
          quantity: 1,
          price: firstSize.price,
        });
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm", error);
      }
    };
    fetchProduct();
  }, [id]); // Chạy lại khi id thay đổi

  const handleVariationChange = (index) => {
    const variation = product.variations[index];
    const firstSize = variation.sizes[0];
    setQuantity(1);

    setSelectedVariation(index);
    setSelectedSize({
      size: firstSize.size,
      price: firstSize.price,
      stock: firstSize.stock,
    });
    setFormData((prev) => ({
      ...prev,
      color: variation.color,
      size: firstSize.size,
      price: firstSize.price,
      quantity: 1,
    }));
  };

  const handleSizeChange = (e) => {
    const size = e.target.value;
    const variation = product.variations[selectedVariation];
    const sizeData = variation.sizes.find((s) => s.size === size);

    setSelectedSize({
      size: sizeData.size,
      price: sizeData.price,
      stock: sizeData.stock,
    });
    setFormData((prev) => ({
      ...prev,
      size: sizeData.size,
      price: sizeData.price,
    }));
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    setFormData((prev) => ({
      ...prev,
      quantity: newQuantity,
    }));
  };

  const handleAddToCart = async () => {
    console.log("Form data", formData);
    const { productId, color, size, quantity, price } = formData;
    const response = await addItemToCart(
      token,
      productId,
      color,
      size,
      quantity
    );

    if (response !== null) {
      console.log("Thêm vào giỏ hàng thành công");
    } else {
      console.error("Lỗi khi thêm vào giỏ hàng", response.message);
    }
  };

  // console.log("Product", product);

  if (!product) {
    return <div>Loading...</div>; // Nếu sản phẩm chưa tải xong, hiển thị Loading
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 pb-8 pt-24">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/products">Shoes</Link>
            </li>
            <li>/</li>
            <li>{product.name}</li>
          </ol>
        </nav>

        <div className="grid md:grid-cols-1 grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="h-[550px] w-[730px] relative overflow-hidden rounded-lg border">
              <img
                src={product.variations[selectedVariation].image} // Dùng ảnh từ API
                alt="Product image"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.variations.map((variation, index) => (
                <button
                  key={index}
                  onClick={() => handleVariationChange(index)}
                  className={` relative overflow-hidden rounded-lg border ${
                    selectedVariation === index ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <img
                    src={variation.image} // Dùng ảnh từ API
                    alt={`Product thumbnail ${index}`}
                    className="object-cover h-[150px] w-[220px]"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col ">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                <p className="text-gray-400 font-semibold text-[20px]">
                  {product.category.name}
                </p>
              </div>
              <div className="flex items-center justify-between">
                {/* Hiển thị giá */}
                <div className="text-3xl font-bold">
                  {selectedSize.price.toLocaleString()} đ
                </div>

                {/* Hiển thị rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4 ? "ri-star-fill" : "ri-star-line"
                        } text-yellow-500`}
                      ></i>
                    ))}
                  </div>
                  <span className="text-muted-foreground">(15 Reviews)</span>
                </div>
              </div>
              {/* Hiển thị mô tả */}
              <p className="text-muted-foreground border-y-2 py-12">
                {product.description}
              </p>{" "}
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 mt-8">
                <div>
                  <label className="text-sm font-bold mb-2 block">Size</label>
                  {/* <select
                    id="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-24 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    {product.variations[selectedVariation].sizes.map(
                      (sizeOption) => (
                        <option key={sizeOption.size} value={sizeOption.size}>
                          {sizeOption.size}
                        </option>
                      )
                    )}
                  </select> */}
                  <select
                    value={selectedSize.size}
                    onChange={handleSizeChange}
                    className="w-24 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    {product.variations[selectedVariation].sizes.map((size) => (
                      <option key={size.size} value={size.size}>
                        {size.size}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-bold mb-2 block">
                    Quantity
                  </label>
                  {/* <select
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-24 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    {Array.from(
                      {
                        length:
                          product.variations[selectedVariation].sizes[0].stock,
                      },
                      (_, i) => i + 1
                    ).map((qty) => (
                      <option key={qty} value={qty}>
                        {qty}
                      </option>
                    ))}
                  </select> */}
                  <select
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-24 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    {[...Array(selectedSize.stock)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-fit rounded-lg bg-[#100D22] text-white py-4 px-12"
                size="lg"
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
