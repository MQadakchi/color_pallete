const colors = {
  red: ["#dc143c", "قرمز"],
  green: ["#006400", "سبز"],
  yellow: ["#ffd700", "زرد"],
  purple: ["#800080", "بنفش"],
  orange: ["#ff4500", "نارنجی"],
};
const items = document.querySelectorAll(".item");
const tag = document.createElement("h1");
tag.innerText = "یک پالت رنگ انتخاب کنید";
document.querySelector("main").appendChild(tag);

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    const color = e.currentTarget.dataset.color;
    document.body.style.backgroundColor = colors[color][0];
    tag.innerText = `شما رنگ ${colors[color][1]} را انتخاب کردید`;
    document.querySelector("main").appendChild(tag);
  });
});
