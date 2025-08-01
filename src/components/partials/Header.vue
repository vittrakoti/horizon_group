<template>
  <header>
    <!-- Top Contact Bar -->
  <div class="bg-[#00B1E6] text-white text-sm flex justify-between items-center py-2 px-4 md:px-8">
    <div class="flex gap-4 md:gap-6"><!-- -->
      <span>info@horizongroup.co.jp</span>
      <span>03-5497-8734</span>
    </div>
    <!-- Social icons: hidden on md and up, visible on mobile only -->
    <div class="flex items-center gap-4 hidden md:flex">
      <a href="#" aria-label="Facebook" class="hover:opacity-80">
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
      </a>
      <a href="#" aria-label="TikTok" class="hover:opacity-80">
        <font-awesome-icon :icon="['fab', 'tiktok']" />
      </a>
      <a href="#" aria-label="Twitter/X" class="hover:opacity-80">
        <font-awesome-icon :icon="['fab', 'x-twitter']" />
      </a>
      <button class="ml-2 text-white hover:underline">
        En <font-awesome-icon :icon="['fas', 'angle-down']" />
      </button>
    </div>
    <!-- On md and up, nothing (or you can add different content for desktop if needed) -->
  </div>

    <!-- Main Navigation Bar -->
    <nav class="bg-white text-neutral-900 flex justify-between items-center px-8 shadow-md nav_bar">
      <div class="flex items-center">
        <span class="text-2xl tracking-wide"style="color: #0D0F11;padding-right: 8px;font-weight: 900;">HORIZON </span> <span class="text-2xl font-bold tracking-wide" style="color: #00B1E6;">GROUP</span>
        <!-- Replace LOGO with <img> if you have a logo image -->
      </div>
      <div class="flex items-center gap-8 ">
        <a href="#" class="nav-link relative text-[#595D61] font-normal hover:font-bold transition-all duration-200 ease-in-out">ホーム</a>
        <a href="#" class="nav-link relative text-[#595D61] font-normal hover:font-bold transition-all duration-200 ease-in-out">サービス</a>
        <a href="#" class="nav-link relative text-[#595D61] font-normal hover:font-bold transition-all duration-200 ease-in-out">教育業務</a>
        <a href="#" class="nav-link relative text-[#595D61] font-normal hover:font-bold transition-all duration-200 ease-in-out">お知らせ</a>
        <a href="#" class="nav-link relative text-[#595D61] font-normal hover:font-bold transition-all duration-200 ease-in-out">FAQ</a> 
        <a href="#" class="nav-link relative text-[#595D61] font-normal hover:font-bold transition-all duration-200 ease-in-out">会社概要</a>
        <a href="#"class="ml-4 bg-slate-950  px-4 py-2 hover:bg-slate-800 transition text-center inline-block nav_bar_btn">お問い合わせ</a>
      </div>
    </nav>
  </header>
</template>

<script setup>
// No logic needed for now. If you want language switching, you can add i18n here later!
</script>

<style scoped>
/* You can add component-specific CSS here if needed */
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
.nav_bar {
    height: 80px;
}
.nav-link {
  position: relative;
  overflow: hidden; /* Prevents the underline from overflowing */
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: #00B1E6;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease-in-out;
}

.nav-link:hover::after,
.nav-link:focus-visible::after {
  transform: scaleX(1);
}

.nav_bar_btn{
    color:#fff;
    font-size: 14px;
}
</style>
