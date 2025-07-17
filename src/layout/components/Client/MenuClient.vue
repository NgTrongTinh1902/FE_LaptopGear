<template>
  <div class="nav-container primary-menu">
    <div class="col-lg-10">
      <div class="mobile-topbar-header">
        <div>
          <img src="../../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon" />
        </div>
        <div>
          <h4 class="logo-text">Rukada</h4>
        </div>
        <div class="toggle-icon ms-auto"><i class="bx bx-arrow-to-left"></i></div>
      </div>
      <nav class="navbar navbar-expand-xl w-100">
        <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-outline-dark fs-6" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <i class="fa-solid fa-list"></i>
              DANH MỤC SẢN PHẨM
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" :to="{ name: 'SanPhamTheoDanhMuc', params: { ma_dm: 'DM01' } }">
                  HỌC TẬP - VĂN PHÒNG
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="{ name: 'SanPhamTheoDanhMuc', params: { ma_dm: 'DM02' } }">
                  LAPTOP GAMING
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="{ name: 'SanPhamTheoDanhMuc', params: { ma_dm: 'DM03' } }">
                  LAPTOP ĐỒ HỌA
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="{ name: 'SanPhamTheoDanhMuc', params: { ma_dm: 'DM04' } }">
                  LAPTOP MỎNG NHẸ CAO CẤP
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="{ name: 'SanPhamTheoDanhMuc', params: { ma_dm: 'DM05' } }">
                  LAPTOP LIKE NEW
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="{ name: 'SanPhamTheoDanhMuc', params: { ma_dm: 'DM06' } }">
                  LINH KIỆN - PHỤ KIỆN
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/trang-chu">
              <a class="nav-link" href="/trang-chu">
                <div class="parent-icon"><i class="fa-solid fa-home"></i></div>
                <div class="menu-title">TRANG CHỦ</div>
              </a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/khach-hang/san-pham">
              <a class="nav-link" href="/khach-hang/san-pham">
                <div class="parent-icon"><i class="fa-solid fa-laptop"></i></div>
                <div class="menu-title">SẢN PHẨM</div>
              </a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/khach-hang/thanh-toan">
              <a class="nav-link" href="/khach-hang/thanh-toan">
                <div class="parent-icon"><i class="fa-solid fa-money-check-dollar"></i></div>
                <div class="menu-title">THANH TOÁN</div>
              </a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/khach-hang/hoa-don">
              <a class="nav-link" href="/khach-hang/hoa-don">
                <div class="parent-icon"><i class="fa-solid fa-file-invoice"></i></div>
                <div class="menu-title">HÓA ĐƠN</div>
              </a>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

    <a href="/khach-hang/gio-hang">
      <i class="fa-solid fa-cart-shopping text-danger fa-2xl me-1"></i><a class="text-danger fa-xl">Giỏ hàng</a></a>
  </div>

  <!-- <div class="position-fixed bottom-5 end-0 m-4 d-flex flex-column gap-4 mb-5">
      <a href="tel:0358275621">
        <img width="48" height="48" src="../../../../img/326700_cart_shopping_icon.png" alt="Giỏ hàng" />
      </a>
    </div> -->

  <!-- <div class="position-fixed bottom-0 end-0 m-4 d-flex flex-column gap-4 mb-5">
    <a href="tel:0358275621">
      <img width="48" height="48" src="../../../../public/img/1807538_phone_icon.png" alt="Gọi điện thoại" />
    </a>

    Zalo
    <a href="https://zalo.me" target="_blank">
      <div style="width: 48px; height: 48px; border-radius: 12px; overflow: hidden; background-color: white">
        <img src="/img/7044033_zalo_icon.png" width="48" height="50" alt="zalo" style="object-fit: cover" />
      </div>
    </a>

    Tiktok
    <a href="https://www.tiktok.com" target="_blank">
      <img width="52" height="52" src="/img/7024783_tiktok_social_media_icon.png" alt="tiktok" />
    </a>

    Facebook Messenger
    <a href="https://m.me/yourpageusername?ref=dang-nhap" target="_blank">
      <img width="48" height="48" src="/img/4745733_chat_facebook_media_message_messenger_icon.png" alt="facebook messenger" />
    </a>
  </div> -->

</template>

<script>

</script>
<style></style>
