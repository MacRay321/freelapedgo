const btnEye = document.getElementById("icon-eye-checked");
const password = document.getElementById("password");

btnEye.addEventListener("click", () => {

  if(password.type == "password") showPassword();
  else hidePassword();

})

function showPassword(){

  password.setAttribute("type", "text");
  btnEye.setAttribute("src", "./Imagens/icons8-eye-24-checked.png");

}

function hidePassword(){

  password.setAttribute("type", "password");
  btnEye.setAttribute("src", "./Imagens/icons8-eye-24-unchecked.png");

}