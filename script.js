const btn = document.getElementById("gen-btn")
const pass = document.getElementById("pass-gen")

btn.addEventListener('click', () => {
  const password = Math.random().toString(16).substr(2, 18);
  pass.innerHTML = `<a>${password}</a>`
})