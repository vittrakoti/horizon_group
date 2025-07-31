<template>
  <section class="hero-section">
    <div class="overlay"></div>
    <div class="content">
      <p class="subtitle">世界と日本をつなぐチカラ</p>
      <h1>HORIZON GROUP</h1>
      <p class="description">
        成長を志す外国籍の皆様と、世界へ羽ばたく企業様との架け橋となることを目指しております。
        共に支え、高めあうことができますよう、全身全霊でサポートいたします。
      </p>

      <div class="buttons">
        <button class="btn btn-black">企業方へお問い合わせ</button>
        <button class="btn btn-blue">求人方へお問い合わせ</button>
      </div>
    </div>

    <div class="news-bar">
      <div class="news-left">
        <span class="news-label">NEWS</span>
        <span class="news-date">2025.07.17</span>
        <span class="news-type">お知らせ</span>
        <p class="news-text">
          代表をはじめ、スタッフ全員が日本で学び、働き、生活してきた経験がございます。
        </p>
      </div>
      <div class="news-right">
        <a href="#" class="news-link">すべてを見る →</a>
      </div>
    </div>

    <div class="scroll-down">
      Scroll down
      <span class="arrow">↓</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  background: url('/path/to/your/background-image.jpg') center center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  font-family: 'M PLUS 1', 'Roboto', sans-serif;
  padding: 40px 60px;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(80, 90, 110, 0.6); /* semi-transparent overlay */
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  max-width: 900px;
}

.subtitle {
  font-size: 20px;
  margin-bottom: 10px;
  opacity: 0.8;
}

h1 {
  font-size: 60px;
  font-weight: 900;
  margin-bottom: 20px;
  letter-spacing: 0.05em;
}

.description {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 600px;
}

.buttons {
  display: flex;
  gap: 15px;
}

.btn {
  padding: 12px 25px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.btn-black {
  background-color: #000000;
  color: #ffffff;
}

.btn-black:hover {
  background-color: #333333;
}

.btn-blue {
  background-color: #1EA7FF;
  color: #fff;
}

.btn-blue:hover {
  background-color: #0b8ae6;
}

/* News bar styles */
.news-bar {
  position: relative;
  z-index: 2;
  background-color: white;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  padding: 12px 60px;
  font-size: 14px;
  font-family: 'M PLUS 1', 'Roboto', sans-serif;
}

.news-left {
  display: flex;
  align-items: center;
  gap: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}

.news-label {
  font-weight: bold;
  font-size: 16px;
}

.news-date {
  color: #999;
}

.news-type {
  background-color: #000;
  color: #fff;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 2px;
}

.news-text {
  margin-left: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
}

.news-right a {
  color: #1EA7FF;
  font-weight: 600;
  text-decoration: none;
}

.news-right a:hover {
  text-decoration: underline;
}

/* Scroll down */
.scroll-down {
  position: absolute;
  right: 20px;
  bottom: 20px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 12px;
  color: white;
  opacity: 0.6;
  cursor: default;
  z-index: 2;
  user-select: none;
}

.scroll-down .arrow {
  display: block;
  margin-top: 5px;
  font-size: 20px;
}
</style>
