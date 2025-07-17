import { createRouter, createWebHistory } from "vue-router";
// cài vue-router: npm install vue-router@next --save
// import checkNhanVienLogin from "./checkNhanVienLogin";
// import checkKhachHang from "./checkKhachHang";
const routes = [
  //==== Admin ========
  {
    path: "/admin/dang-nhap",
    component: () => import("../components/Admin/DangNhap/index.vue"),
    meta: { layout: "blank" },
  },
  {
    path: "/admin/danh-muc",
    component: () => import("../components/Admin/DanhMuc/index.vue"),
  },
  {
    path: "/admin/danh-gia",
    component: () => import("../components/Admin/DanhGia/index.vue"),
  },
  {
    path: "/admin/don-hang",
    component: () => import("../components/Admin/DonHang/index.vue"),
  },
  {
    path: "/admin/san-pham",
    component: () => import("../components/Admin/SanPham/index.vue"),
  },
  {
    path: "/admin/nhan-vien",
    component: () => import("../components/Admin/NhanVien/index.vue"),
  },
  {
    path: "/admin/khach-hang",
    component: () => import("../components/Admin/KhachHang/index.vue"),
  },
  {
    path: "/admin/thong-ke",
    component: () => import("../components/Admin/ThongKe/index.vue"),
  },
    {
    path: "/admin/profile",
    component: () => import("../components/Admin/Profile/index.vue"),
  },

  //===========  Khách Hàng =======================
  {
    path: "/khach-hang/dang-nhap",
    component: () => import("../components/KhachHang/DangNhap/index.vue"),
    meta: { layout: "blank" },
  },
  {
    path: "/khach-hang/dang-ky",
    component: () => import("../components/KhachHang/DangKy/index.vue"),
    meta: { layout: "blank" },
  },
  {
    path: "/trang-chu",
    component: () => import("../components/KhachHang/TrangChu/index.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/khach-hang/chi-tiet-san-pham/:id_san_pham",
    component: () => import("../components/KhachHang/ChiTietSanPham/index.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/khach-hang/san-pham",
    component: () => import("../components/KhachHang/SanPham/index.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/khach-hang/thanh-toan",
    component: () => import("../components/KhachHang/ThanhToan/index.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/khach-hang/gio-hang",
    component: () => import("../components/KhachHang/GioHang/index.vue"),
    meta: { layout: "client" },
  },
    {
    path: "/khach-hang/san-pham-theo-danh-muc",
    component: () => import("../components/KhachHang/SanPhamTheoDanhMuc/index.vue"),
    meta: { layout: "client" },
  },
      {
    path: "/khach-hang/hoa-don",
    component: () => import("../components/KhachHang/HoaDon/index.vue"),
    meta: { layout: "client" },
  },
        {
    path: "/khach-hang/profile",
    component: () => import("../components/KhachHang/Profile/index.vue"),
    meta: { layout: "client" },
  },
  {
  path: '/khach-hang/san-pham-theo-danh-muc/:ma_dm',
  name: 'SanPhamTheoDanhMuc',
  component: () => import('../components/KhachHang/SanPhamTheoDanhMuc/index.vue'),
    meta: { layout: "client" },

},

];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
