// 이 함수들은 호출될 때마다 객체를 생성하고 반환함.
// 결과로 나오는 객체들은 모두 같은 '레시피'를 따름.
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex(); // "#23ff96"
firstColor.rgb(); // "rgb(35, 255, 150)"

const black = makeColor(0, 0, 0);
firstColor.hex(); // "#000000"
firstColor.rgb(); // "rgb(0, 0, 0)"
