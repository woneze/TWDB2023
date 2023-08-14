// 빈 JavaScript 객체를 생성.
// 생성자를 다른 객체에 설정.
// 새로 만들어진 객체를 해당 컨텍스트에서는 this로 전달.
// 마지막엔 this를 return 함.

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(40, 255, 60);
const color2 = new Color(0, 0, 0);

document.body.style.backgroundColor = color1.rgba((a = 0.1));
