// import React, { useEffect, useState } from "react";
// import Filter from "./components/Filter";
// import ProductCard from "./components/ProductCard";
// import Header from "home/Header";
// import Footer from "home/Footer";
// import {
//   getAllProducts,
//   getAllCategories,
// } from "../src/service/productService";

// const ProductPage = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]); // State để lưu danh mục sản phẩm
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
//   const [productsPerPage] = useState(6); // 6 sản phẩm mỗi trang
//   const [selectedCategories, setSelectedCategories] = useState([]); // Danh mục được chọn cho việc lọc

//   const colors = [
//     { name: "Black", class: "bg-black" },
//     { name: "Gray", class: "bg-gray-400" },
//     { name: "Pink", class: "bg-pink-300" },
//     { name: "Rose", class: "bg-rose-400" },
//     { name: "Blue", class: "bg-sky-300" },
//     { name: "Purple", class: "bg-purple-400" },
//     { name: "Green", class: "bg-green-200" },
//   ];

//   // Lấy danh mục và sản phẩm khi component mount
//   useEffect(() => {
//     const fetchCategoriesAndProducts = async () => {
//       try {
//         const categoriesData = await getAllCategories(); // Lấy danh mục từ API
//         setCategories(categoriesData.categories); // Cập nhật danh mục vào state

//         const productsData = await getAllProducts(); // Lấy sản phẩm từ API
//         setProducts(productsData.products); // Cập nhật sản phẩm vào state
//         setLoading(false); // Đã tải xong
//       } catch (err) {
//         setError("Lỗi khi tải dữ liệu");
//         setLoading(false); // Dù lỗi hay không thì cũng kết thúc trạng thái tải
//       }
//     };

//     fetchCategoriesAndProducts(); // Gọi hàm lấy dữ liệu
//   }, []);

//   // Lọc sản phẩm theo danh mục
//   const filteredProducts = products.filter((product) => {
//     if (selectedCategories.length === 0) return true; // Nếu không có danh mục nào được chọn, hiển thị tất cả sản phẩm
//     return selectedCategories.some(
//       (category) => product.category.name === category
//     );
//   });

//   console.log("Products==", products);
//   // Xử lý phân trang: lấy các sản phẩm cần hiển thị cho trang hiện tại
//   const indexOfLastProduct = currentPage * productsPerPage; // Chỉ số của sản phẩm cuối cùng
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // Chỉ số của sản phẩm đầu tiên
//   const currentProducts = filteredProducts.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   ); // Các sản phẩm cần hiển thị

//   // Chuyển sang trang tiếp theo
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Tính toán số lượng trang
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <>
//       <Header />
//       <div className='container mx-auto px-4 pb-8 pt-24'>
//         <div className='flex items-center space-x-2 text-sm mb-8'>
//           <a href='/' className='text-gray-600 hover:text-gray-900'>
//             Home
//           </a>
//           <span>/</span>
//           <a href='/products' className='text-gray-600 hover:text-gray-900'>
//             Shop
//           </a>
//           <span>/</span>
//           <span className='text-gray-900'>All Products</span>
//         </div>

//         {/* Page Title */}
//         <div className='flex items-center justify-between mb-8'>
//           <h1 className='text-2xl font-bold'>All Products</h1>
//           <button className='flex items-center text-sm border px-4 py-2 rounded-lg'>
//             <span>Sort By</span>
//             <i className='ri-arrow-down-s-line text-lg'></i>
//           </button>
//         </div>

//         {/* Filter and Product List */}
//         <div className='grid grid-cols-12 gap-8'>
//           <Filter
//             categories={categories}
//             selectedCategories={selectedCategories}
//             setSelectedCategories={setSelectedCategories} // Truyền hàm setSelectedCategories để cập nhật state
//             colors={colors}
//           />
//           <div className='col-span-9 grid grid-cols-3 gap-6'>
//             {currentProducts.map((product) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </div>
//         </div>

//         {/* Phân trang */}
//         <div className='flex justify-center mt-8'>
//           <nav>
//             <ul className='flex space-x-2'>
//               {Array.from({ length: totalPages }, (_, index) => (
//                 <li key={index + 1}>
//                   <button
//                     onClick={() => paginate(index + 1)}
//                     className={`px-4 py-2 rounded-lg border ${
//                       currentPage === index + 1
//                         ? "bg-blue-500 text-white"
//                         : "bg-white text-black"
//                     }`}
//                   >
//                     {index + 1}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ProductPage;

import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import ProductCard from "./components/ProductCard";
import Header from "home/Header";
import Footer from "home/Footer";
import {
  getAllProducts,
  getAllCategories,
} from "../src/service/productService";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 5000000]);

  const colors = [
    { name: "Black", class: "bg-black" },
    { name: "Gray", class: "bg-gray-400" },
    { name: "Pink", class: "bg-pink-300" },
    { name: "Rose", class: "bg-rose-400" },
    { name: "Blue", class: "bg-sky-300" },
    { name: "Purple", class: "bg-purple-400" },
    { name: "Green", class: "bg-green-200" },
  ];

  // Lấy danh mục và sản phẩm khi component mount
  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      try {
        const categoriesData = await getAllCategories(); // Lấy danh mục từ API
        setCategories(categoriesData.categories); // Cập nhật danh mục vào state

        const productsData = await getAllProducts(); // Lấy sản phẩm từ API
        setProducts(productsData.products); // Cập nhật sản phẩm vào state
        setLoading(false); // Đã tải xong
      } catch (err) {
        setError("Lỗi khi tải dữ liệu");
        setLoading(false); // Dù lỗi hay không thì cũng kết thúc trạng thái tải
      }
    };

    fetchCategoriesAndProducts(); // Gọi hàm lấy dữ liệu
  }, []);

  // Lọc sản phẩm theo danh mục và giá
  const filteredProducts = products.filter((product) => {
    const isInSelectedCategories =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category.name);
    const isInPriceRange =
      product.basePrice >= priceRange[0] && product.basePrice <= priceRange[1];

    return isInSelectedCategories && isInPriceRange;
  });

  console.log("Products==", products);
  // Xử lý phân trang: lấy các sản phẩm cần hiển thị cho trang hiện tại
  const indexOfLastProduct = currentPage * productsPerPage; // Chỉ số của sản phẩm cuối cùng
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // Chỉ số của sản phẩm đầu tiên
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  ); // Các sản phẩm cần hiển thị

  // Chuyển sang trang tiếp theo
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Tính toán số lượng trang
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 pb-8 pt-24">
        <div className="flex items-center space-x-2 text-sm mb-8">
          <a href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <span>/</span>
          <a href="/products" className="text-gray-600 hover:text-gray-900">
            Shop
          </a>
          <span>/</span>
          <span className="text-gray-900">All Products</span>
        </div>

        {/* Page Title */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">All Products</h1>
          {/* <button className='flex items-center text-sm border px-4 py-2 rounded-lg'>
            <span>Sort By</span>
            <i className='ri-arrow-down-s-line text-lg'></i>
          </button> */}
        </div>

        {/* Filter and Product List */}
        <div className="grid grid-cols-12 gap-8">
          <Filter
            categories={categories}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories} // Truyền hàm setSelectedCategories để cập nhật state
            colors={colors}
            priceRange={priceRange}
            setPriceRange={setPriceRange} // Truyền giá trị và setter cho priceRange
          />
          <div className="col-span-9 grid grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>

        {/* Phân trang */}
        <div className="flex justify-center mt-8">
          <nav>
            <ul className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index + 1}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 rounded-lg border ${
                      currentPage === index + 1
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
