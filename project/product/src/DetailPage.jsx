import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Review from "./components/Review";

const DetailPage = () => {
  const { id } = useParams();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState("1");
  const [size, setSize] = useState("9");

  const images = [
    "https://api.slingacademy.com/public/sample-photos/1.jpeg",
    "https://api.slingacademy.com/public/sample-photos/2.jpeg",
    "https://api.slingacademy.com/public/sample-photos/3.jpeg",
    "https://api.slingacademy.com/public/sample-photos/4.jpeg",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm mb-8">
        <ol className="flex items-center space-x-2">
          <li>
            <Link to="/products" className="">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/products/category/shoes" className="">
              Shoes
            </Link>
          </li>
          <li>/</li>
          <li>{id}</li>
        </ol>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className=" h-[272] w-[360] relative overflow-hidden rounded-lg border">
            <img
              src={images[selectedImage]}
              alt="Product image"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedImage(index);
                }}
                className={`h-[72] w-[56] relative overflow-hidden rounded-lg border ${
                  selectedImage === index ? "ring-2 ring-primary" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`Product thumbnail ${index}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Nike Air Max INTRLK</h1>
              <p className="text-black">Men's Shoes</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">$173</div>

              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`w-5 h-5 ${
                        i < 4 ? "ri-star-fill" : "ri-star-line"
                      }  text-yellow-500`}
                    ></i>
                  ))}
                </div>
                <span className="text-muted-foreground">(15 Reviews)</span>
              </div>
            </div>

            <p className="text-muted-foreground border-y-2 py-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo
              turpis massa tristique augue dignissim volutpat. Quis ultricies eu
              libero tortor dictumst. Molestie laoreet ut aliquet feugiat a
              malesuada non neque.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div>
                <label className="text-sm font-bold mb-2 block">Quantity</label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-24 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  {[1, 2, 3, 4, 5].map((qty) => (
                    <option key={qty} value={qty.toString()}>
                      {qty}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-bold mb-2 block">Size</label>
                <select
                  id="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-24 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  {[7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11].map((size) => (
                    <option key={size} value={size.toString()}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              className="w-fit rounded-lg bg-[#100D22] text-white py-4 px-12"
              size="lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div>
        <Review />
      </div>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Other Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* {otherProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-muted-foreground">{product.category}</p>
              <p className="font-medium">${product.price}</p>
            </div>
          ))} */}
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
