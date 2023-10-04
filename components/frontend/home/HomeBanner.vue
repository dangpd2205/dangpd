<template>
  <div id="banner" class="home-banner">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <h3 class="highlight">
            NHANH CHÓNG - DỄ DÀNG - HIỆU QUẢ
          </h3>
          <h1>
            Nền tảng tuyển dụng IT kết nối HR Freelancer.
          </h1>
          <p class="sub-title">
            Kiếm tiền bằng cách giới thiệu nhân sự, ứng viên ứng tuyển cho doanh nghiệp, bạn có thể làm việc bất cứ đâu và bất kỳ khi nào mà bạn thích.
          </p>
          <div class="mt-35">
            <router-link :to="{ name: 'job.filter' }" class="btn btn-cta btn-warning gradient">
              Tìm kiếm cơ hội nhận thưởng
            </router-link>
          </div>
        </div>
        <div class="col-md-6 col-xs-12 d-xs-none">
          <!-- <img src="~/assets/images/banner/bg-doctor.png"> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap-banner {
  position: relative;
  height: 318px;
}
</style>
