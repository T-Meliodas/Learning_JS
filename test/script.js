// Micro-interaction: Hiệu ứng hover cho nút CTA
document
  .querySelector(".cta-button")
  .addEventListener("mouseover", function () {
    this.style.backgroundColor = "#e67e22";
  });

document.querySelector(".cta-button").addEventListener("mouseout", function () {
  this.style.backgroundColor = "#f39c12";
});

// Scroll Animation đơn giản
const items = document.querySelectorAll(".content-item");
window.addEventListener("scroll", () => {
  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }
  });
});

// Khởi tạo opacity và transform ban đầu
items.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
  item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
});
