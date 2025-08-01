<template>
  <footer class="font-main bg-[#F2F2F2] pt-10 pb-5 px-8 border-t border-[#ddd]">
    <div class="flex flex-col md:flex-row justify-between items-start gap-10 flex-wrap px-8 py-6">
      <!-- Left Side -->
<div class="flex-1 min-w-[300px] max-w-[350px]">
  <!-- Use flex to align horizontally -->
  <div class="flex items-center">
    <img :src="logoImg" alt="Horizon Group Logo" class="w-[50px] h-[50px] mb-2" />
    <div class="ml-4">
      <p class="text-[14px] text-[#666] mb-1 font-bold">世界と日本をつなぐチカラ</p>
      <h2 class="text-[24px] text-[#0D0F11] font-extrabold m-0">
        HORIZON <span class="text-[#00B1E6] font-extrabold">GROUP</span>
      </h2>
    </div>
  </div>
  <address class="not-italic mt-2">
    <p class="text-[13px] leading-[1.4] my-[3px]">〒105-0011 東京都港区芝公園４丁目２−８</p>
    <p class="text-[13px] leading-[1.4] my-[3px]">Tel. 03-5497-8734 Fax. 03-5497-8735</p>
    <p class="text-[13px] leading-[1.4] my-[3px]">info@horizongroup.co.jp</p>
  </address>
</div>


      <!-- Right Side -->
      <div class="nav-links-container">
        <nav class="footer-nav">
          <ul class="flex gap-4 m-0 p-0 list-none inline-flex ">
            <li><a href="#" class="footer-nav-link text-[14px] relative text-[#595D61] font-normal hover:font-bold transition-all duration-200 ease-in-out">ご挨拶</a></li>
            <li><a href="#" class="footer-nav-link text-[14px] relative text-[#595D61] font-normal hover:font-bold transition-all duration-200 ease-in-out">登録鑑</a></li>
            <li><a href="#" class="footer-nav-link text-[14px] relative text-[#595D61] font-normal hover:font-bold transition-all duration-200 ease-in-out">サービス</a></li>
            <li><a href="#" class="footer-nav-link text-[14px] relative text-[#595D61] font-normal hover:font-bold transition-all duration-200 ease-in-out">教育業務</a></li>
            <li><a href="#" class="footer-nav-link text-[14px] relative text-[#595D61] font-normal hover:font-bold transition-all duration-200 ease-in-out">お知らせ</a></li>
            <li><a href="#" class="footer-nav-link text-[14px] relative text-[#595D61] font-normal hover:font-bold transition-all duration-200 ease-in-out">会社概要</a></li>
            <li><a href="#" class="footer-nav-link text-[14px] relative text-[#595D61] font-normal hover:font-bold transition-all duration-200 ease-in-out">お問い合わせ</a></li>
          </ul>
        </nav>
        <div class="flex gap-3 mt-8 justify-end">
          <a href="#" aria-label="Facebook" class="hover:opacity-80"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
        <a href="#" aria-label="TikTok" class="hover:opacity-80"><font-awesome-icon :icon="['fab', 'tiktok']" /></a>
        <a href="#" aria-label="Twitter/X" class="hover:opacity-80"><font-awesome-icon :icon="['fab', 'x-twitter']" /></a>
        </div>
      </div>
    </div>

    <!-- Policies and copyright -->
    <hr class="border-gray-300 mt-2" />
    <div class="flex flex-wrap justify-between items-center pt-2 pb-6 px-8">
      <div class="flex gap-4">
        <a href="#" class="text-[12px] text-[#888] mr-4 no-underline hover:underline">プライバシーポリシー</a>
        <a href="#" class="text-[12px] text-[#888] no-underline hover:underline">クッキーポリシー</a>
      </div>
      <div>
        <small class="text-[12px] text-[#999]">© 2025 Horizon Group. All rights reserved.</small>
      </div>
    </div>
  </footer>
</template>

<script>
import logoImg from '../../assets/logo.png';

export default {
  name: "FooterSection",
  data() {
    return {
      logoImg
    };
  },
};
</script>
<!-- Add any additional styles here if needed -->
<style scoped>  
.footer-nav {
  position: relative;
  overflow: hidden; /* Prevents the underline from overflowing */
}

.footer-nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1.5px;
  background: #00B1E6;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease-in-out;
}

.footer-nav-link:hover::after,
.nav-link:focus-visible::after {
  transform: scaleX(1);
}

</style>
