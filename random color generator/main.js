const getColor = () => {
  console.log("button clicked");
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);

  const randomCode = `rgba(${red},${blue},${green},1)`;
  document.body.style.backgroundColor = randomCode;

  document.getElementById("color-code").textContent = randomCode;
};

document.getElementById("btn").addEventListener("click",getColor);
