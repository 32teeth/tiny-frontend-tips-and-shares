setTimeout(() => {
  const input = document.querySelector("input[type='color']");
  input.addEventListener("input", (e) => {
    document.documentElement.style.setProperty("--primary-tint", e.target.value);
  });
}, 100);