<template>
  <div class="topbar d-flex align-items-center">
    <nav class="navbar navbar-expand">
      <div class="topbar-logo-header">
        <div class="">
          <img src="../../../assets/img/logo.png" style="height: 55px" alt="logo icon" />
        </div>
        <div class=""></div>
      </div>
      <div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div>
      <div class="search-bar flex-grow-1">
        <div class="position-relative search-bar-box">
          <input type="text" class="form-control search-control" placeholder="Tìm Kiếm?" />
          <span class="position-absolute top-50 search-show translate-middle-y"><i class="bx bx-search"></i></span>
          <span class="position-absolute top-50 search-close translate-middle-y"><i class="bx bx-x"></i></span>
        </div>
      </div>
      <div class="text-center me-2">
        <i class="fa-solid fa-phone me-1" style="color: #ff0000"></i><b class="text-danger">HOTLINE</b>
        <br />
        <b>0961 1560999</b>
      </div>
      <div class="user-box dropdown">
        <a
          class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img :src="khach_hang.avatar" class="user-img" alt="user avatar" />
          <div class="user-info ps-3">
            <p class="user-name mb-0">{{ khach_hang.ho_ten }}</p>
            <p class="designattion mb-0">Khách Hàng</p>
          </div>
        </a>
        <ul class="dropdown-menu dropdown-menu-end">
          <li>
            <router-link to="/khach-hang/profile">
              <a class="dropdown-item" href="/khach-hang/profile"><i class="bx bx-user"></i><span>Profile</span></a>
            </router-link>
          </li>
          <li>
            <router-link to="/khach-hang/dang-nhap">
              <a class="dropdown-item" href="javascript:;"><i class="bx bx-log-out-circle"></i><span>Logout</span></a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import axios from "axios";
export default {
 data() {
		return {
      khach_hang: {},
			ho_ten: localStorage.getItem('ho_ten'),
			avatar: localStorage.getItem('avatar'),
			noi_dung_tim: '',
			
		}
	},
    mounted() {

    const kh = localStorage.getItem("khach_hang");
     if (!kh) {
      this.$toast.error("Vui lòng đăng nhập trước khi đặt hàng!");
      this.$router.push("/dang-nhap");
      return;
    }
    this.khach_hang = JSON.parse(kh);
    },
	methods: {
		timKiem() {
            this.$router.push({
                name: 'name_tim_kiem',
                params: {
                    thong_tin: this.noi_dung_tim,
                }
            });
        },
		// logout() {
		// 	axios.get('ps://laptopgear.onrender.com/api/khach-hang/dang-xuat', {
		// 		headers: {
		// 			Authorization: "Bearer " + localStorage.getItem("khach_hang_login"),
		// 		},
		// 	})
		// 		.then(res => {
		// 			if (res.data.status) {
		// 				this.$toast.success(res.data.message);
		// 				localStorage.removeItem('khach_hang_login');
		// 				this.$router.push('/khach-hang/dang-nhap');
		// 			} else {
		// 				this.$toast.error(res.data.message);
		// 			}
		// 		})
		// 		.catch(res => {
		// 			const list = Object.values(res.res.data.errors);
		// 			list.forEach((v, i) => {
		// 				this.$toast.error(v[0]);
		// 			});
		// 		});
		// },
		// logoutAll() {
		// 	axios.get('ps://laptopgear.onrender.com/api/khach-hang/dang-xuat-tat-ca', {
		// 		headers: {
		// 			Authorization: "Bearer " + localStorage.getItem("khach_hang_login"),
		// 		},
		// 	})
		// 		.then(res => {
		// 			if (res.data.status) {
		// 				this.$toast.success(res.data.message);
		// 				localStorage.removeItem('khach_hang_login');
		// 				this.$router.push('/khach-hang/dang-nhap');
		// 			} else {
		// 				this.$toast.error(res.data.message);
		// 			}
		// 		})
		// 		.catch(res => {
		// 			const list = Object.values(res.res.data.errors);
		// 			list.forEach((v, i) => {
		// 				this.$toast.error(v[0]);
		// 			});
		// 		});
		// },
	}
};
</script>
<style></style>
