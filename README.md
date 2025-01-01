# MICRO FRONTEND - WEBSITE THƯƠNG MẠI ĐIỆN TỬ

Dự án này là một ứng dụng thương mại điện tử được phát triển theo kiến trúc **Micro Frontend**. 
Mỗi phần của ứng dụng sẽ được phát triển độc lập và tích hợp với nhau thông qua các giao diện API, giúp việc phát triển và bảo trì dễ dàng hơn. 

## Nội dung dự án

Website thương mại điện tử này cung cấp các chức năng cơ bản như:

- Quản lý sản phẩm
- Quản lý đơn hàng
- Quản lý giỏ hàng
- Xem chi tiết sản phẩm và tìm kiếm
- Thêm sản phẩm vào giỏ hàng
- Thanh toán
  
### Kiến trúc Micro Frontend
Dự án này áp dụng mô hình Micro Frontend để phân chia giao diện người dùng thành các module nhỏ, độc lập. Các module này có thể được phát triển và triển khai riêng biệt nhưng vẫn có thể hoạt động như 
một hệ thống hoàn chỉnh khi kết hợp lại. Cấu trúc dự án bao gồm:

  1. **Home**: Đảm nhiệm chức năng hiển thi trang chủ .
  2. **Product**: Hiển thi danh sách sản phẩm, chi tiết sản phẩm.
  3. **Checkout**: Quản lý giỏ hàng, mua hàng.
  4. **Auth**: Quản lý thông tin người dùng, đăng nhập và đăng ký.
![MF](./UI/demo_ui/WR.png)

## Công nghệ sử dụng

Dự án này sử dụng các công nghệ sau:

- **ReactJS**: Framework JavaScript để xây dựng giao diện người dùng.
- **Webpack Module Federation**: Công cụ để kết nối các micro frontend module.
- **Node.js**: Máy chủ backend để phục vụ dữ liệu.
- **Express.js**: Framework web cho Node.js để xây dựng API.
- **CSS Modules / SCSS**: Quản lý kiểu dáng cho từng module độc lập.

## User Interface

![Home](./UI/demo_ui/Home.png)
![ProdutcDetail](./UI/demo_ui/Detail.png)
![Products](./UI/demo_ui/Products.png)

## Authors

[Lê Quốc Dũng](https://github.com/DungLe2983)

[Phạm Thanh Đồng ](https://github.com/ThanhDong00)

