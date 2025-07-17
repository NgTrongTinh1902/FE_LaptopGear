<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card radius-10 border-top border-0 border-3 border-info">
        <div class="card-header d-flex justify-content-between">
          <h4 class="mt-2 text-primary"><b>DANH SÁCH ĐƠN HÀNG</b></h4>
        </div>
        <div class="card-body table-responsive">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search...." />
            <button class="btn btn-secondary input-group-text" style="width: 110px">Tìm kiếm</button>
          </div>
          <div class="table-responsive">
            <table class="table table-bordered table-hover">
              <thead>
                <tr class="bg-primary text-light text-nowrap">
                  <th class="text-center">#</th>
                  <th class="text-center">MHĐ</th>
                  <th class="text-center">Họ Và Tên</th>
                  <th class="text-center">Email</th>
                  <th class="text-center">Địa Chỉ</th>
                  <th class="text-center">SĐT</th>
                  <th class="text-center">Tên Sản Phẩm</th>
                  <th class="text-center">Số Lượng</th>
                  <th class="text-center">Đơn Giá</th>
                  <th class="text-center">Ghi Chú</th>
                  <th class="text-center">Trạng Thái</th>
                  <th class="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
 <template v-for="(items, maHD, hoaDonIndex) in groupedHoaDon" :key="maHD">
    <template v-for="(item, idx) in items" :key="item.id">
      <tr>
        <!-- ✅ Hiển thị số thứ tự cho mỗi hóa đơn -->
        <th class="align-middle text-center">
          {{ idx === 0 ? hoaDonIndex + 1 : '' }}
        </th>

        <td class="align-middle  text-center">{{ item.ma_hoa_don }}</td>
        <td class="align-middle text-center">{{ item.ho_ten }}</td>
        <td class="align-middle">{{ item.email }}</td>
        <td class="align-middle">{{ item.dia_chi }}</td>
        <td class="align-middle text-center">{{ item.sdt }}</td>
        <td class="align-middle">{{ item.ten_sp }}</td>
        <td class="align-middle text-center">{{ item.so_luong }}</td>
        <td class="align-middle text-danger text-center">{{ formatVND(item.don_gia) }}</td>
        <td class="align-middle text-center">{{ item.ghi_chu }}</td>

        <!-- Trạng thái và Hủy Đơn chỉ hiển thị 1 lần trên hóa đơn -->
        <td
          v-if="idx === 0"
          @click="duyetHoaDon(item)"
          class="align-middle text-warning text-nowrap text-center"
          :rowspan="items.length"
        >
          <button
            v-if="item.tinh_trang == 0"
            class="btn btn-secondary me-2"
            style="color: white; width: 127px"
          >
            Duyệt Đơn
          </button>
          <button
            v-else
            class="btn btn-success me-2"
            style="color: white"
          >
            Đã Duyệt Đơn
          </button>
        </td>

        <td
          v-if="idx === 0"
          class="align-middle text-center"
          :rowspan="items.length"
        >
          <button
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#deleteModal"
            @click="Object.assign(del_hoa_don, item)"
          >
            Hủy Đơn
          </button>
        </td>
      </tr>
    </template>
  </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Xóa -->
  <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Hủy Hóa Đơn</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="alert alert-danger" role="alert">
            Bạn có chắc chắn muốn hủy hóa đơn của
            <strong>{{ del_hoa_don.ho_ten }}</strong>
            >?
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal" v-on:click="xoaHoaDon()">
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list_hoa_don: [],
      del_hoa_don: {},
    };
  },
  mounted() {
    this.index = 1;
    this.getHoaDon();
  },
  computed: {
    groupedHoaDon() {
      const grouped = {};
      this.list_hoa_don.forEach((item) => {
        if (!grouped[item.ma_hoa_don]) {
          grouped[item.ma_hoa_don] = [];
        }
        grouped[item.ma_hoa_don].push(item);
      });
      return grouped;
    },
  },
  methods: {
        formatVND(number) {
      return new Intl.NumberFormat("vi-VI", { style: "currency", currency: "VND" }).format(number);
    },
    getHoaDon() {
      axios.get("http://127.0.0.1:8000/api/admin/don-hang/get-data").then((res) => {
        this.list_hoa_don = res.data.data;
      });
    },
    xoaHoaDon() {
      axios.post("http://127.0.0.1:8000/api/admin/don-hang/delete", this.del_hoa_don).then((res) => {
        if (res.data.status) {
          this.$toast.success(res.data.message);
          this.getHoaDon();
        }
      });
    },
    duyetHoaDon(value) {
      axios.post("http://127.0.0.1:8000/api/admin/don-hang/change-status", value).then((res) => {
        if (res.data.status) {
          this.$toast.success(res.data.message);
          this.getHoaDon();
        }
      });
    },
  },
};
</script>

<style></style>
