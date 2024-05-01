const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : null;
};

const rgbToHsl = ([r, g, b]) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0;
  return [
    Math.ceil(60 * h < 0 ? 60 * h + 360 : 60 * h),
    Math.ceil(100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)),
    Math.ceil((100 * (2 * l - s)) / 2),
  ];
};

window.addEventListener('load', () => {
  const color = document.querySelector('input[type="color"]').value;
  const rgb = hexToRgb(color);
  const hsl = rgbToHsl(rgb);

  document.getElementById('hex').textContent = color;
  document.getElementById('rgb').textContent = rgb;
  document.getElementById('hsl').textContent = hsl;

  const palette = document.querySelector('palette');
  palette.style.setProperty("--color", color);
});

document.querySelector('input[type="color"]').addEventListener('input', (e) => {
  const color = e.target.value;
  const rgb = hexToRgb(color);
  const hsl = rgbToHsl(rgb);

  document.getElementById('hex').textContent = color;
  document.getElementById('rgb').textContent = rgb;
  document.getElementById('hsl').textContent = hsl;

  const palette = document.querySelector('palette');
  palette.style.setProperty("--color", color);

});