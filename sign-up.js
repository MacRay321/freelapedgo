const D = document.querySelector("#box-requirements");
const S = document.querySelector("#sign-up");
const C = document.querySelector("#container-profile");

S.addEventListener("click", (e) =>{

    e.preventDefault();

    if(S.textContent === "Sign up"){

    window.innerWidth <= 300 ? D.style.height = "165px": D.style.height = "148px";
    D.style.border = "1px solid var(--secondary-grey)";
    D.style.marginBottom = "20px";
    document.querySelector(".loginForm__forgotPass").style.display = "none";
    document.querySelector(".signup-text").textContent = "Already have an account?";
    document.querySelector("#sign-up").textContent = "Login";
    C.style.display = "block";
    C.style.height = "56px";
    }   else {

            D.style.height = "0px";
            D.style.border = "none";
            document.querySelector(".signup-text").textContent = "Don't have an account?";
            document.querySelector("#sign-up").textContent = "Sign up";
            document.querySelector(".loginForm__forgotPass").style.display = "block";
            C.style.display = "none";
            C.style.display = "0px";

        }

})

