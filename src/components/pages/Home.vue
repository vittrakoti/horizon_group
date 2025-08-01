<template>
  <section class="relative min-h-[70vh] md:min-h-screen flex flex-col justify-between text-white font-main px-4 md:px-10 lg:px-16 py-8 md:py-12 bg-cover bg-center bg-no-repeat" style="background-image: url('/hb-hero-image.jpg');background-position: center 0%;">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-[rgba(80,90,110,0.6)] z-0"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-full md:max-w-2xl lg:max-w-3xl mt-8 md:mt-16">
      <p class="text-base md:text-lg mb-1 md:mb-2 opacity-80">世界と日本をつなぐチカラ</p>
      <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-3 md:mb-6 leading-tight">HORIZON GROUP</h1>
      <p class="text-xs md:text-sm lg:text-base leading-relaxed mb-6 md:mb-10 max-w-full md:max-w-xl">
        成長を志す外国籍の皆様と、世界へ羽ばたく企業様との架け橋となることを目指しております。
        共に支え、高めあうことができますよう、全身全霊でサポートいたします。
      </p>
      <div class="flex flex-col sm:flex-row gap-3 md:gap-5">
        <button class="px-5 py-2.5 bg-black text-white font-medium text-sm md:text-base transition-colors duration-200 hover:bg-neutral-700">企業方へお問い合わせ</button>
        <button class="px-5 py-2.5 rounded bg-blue-500 text-white font-medium text-sm md:text-base transition-colors duration-200 hover:bg-blue-700">求人方へお問い合わせ</button>
      </div>
    </div>

    <!-- News Bar -->
    <div class="relative z-10 w-full bg-white text-neutral-800 flex flex-col md:flex-row justify-between items-center border-t border-neutral-200 px-4 md:px-10 lg:px-16 py-3 text-xs md:text-sm font-main mt-6 gap-2">
      <div class="flex items-center gap-2 md:gap-3 flex-1 min-w-0 overflow-x-auto">
        <span class="font-bold text-sm md:text-base">NEWS</span>
        <span class="text-neutral-400">2025.07.17</span>
        <span class="bg-black text-white text-[10px] md:text-xs px-2 py-0.5">お知らせ</span>
        <p class="ml-2 truncate">
          代表をはじめ、スタッフ全員が日本で学び、働き、生活してきた経験がございます。
        </p>
      </div>
      <div class="shrink-0">
        <a href="#" class="text-blue-500 font-semibold hover:underline">すべてを見る →</a>
      </div>
    </div>

    <!-- Scroll Down -->
    <div class="absolute right-2 md:right-5 bottom-2 md:bottom-5 z-10 flex flex-col items-center opacity-60 select-none">
      <span class="writing-vertical text-[10px] md:text-xs">Scroll down</span>
      <span class="text-lg md:text-2xl mt-1">↓</span>
    </div>
  </section>
</template>

<style scoped>
.font-main {
  font-family: 'M PLUS 1', 'Roboto', Arial, sans-serif;
}
.writing-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
</style>
