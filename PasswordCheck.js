const Leters = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "1234567890";
const pp = document.getElementsByClassName("PasswordCheck");
const ppp = Array.from(pp);
const aa = document.getElementsByClassName("animation-check");
const a = Array.from(aa);



ppp.forEach((x,z,c)=>{

    x.addEventListener("keyup", r =>{

        for(let i=0; i <= x.value.toString().length; i++){

            //=========variables.

            let ArrayForNumbers = x.value.match(/^.*[0-9]+.*$/);
            let ArrayForLetters = x.value.match(/^.*[a-z]+.*$/);


            //==========The if else

            if(x.value.toString().length >= 8)  {
                a[0].style.backgroundColor = "#11B320";
                a[3].style.backgroundColor = "#11B320";
            }   else    {
                    a[0].style.backgroundColor = "red";
                    a[3].style.backgroundColor = "red";
            };

            if(ArrayForNumbers){
                a[2].style.backgroundColor = "#11B320";
                a[5].style.backgroundColor = "#11B320";
            } else {
                a[2].style.backgroundColor = "red";
                a[5].style.backgroundColor = "red";
            }

            if(ArrayForLetters){
                a[1].style.backgroundColor = "#11B320";
                a[4].style.backgroundColor = "#11B320";
            }   else {
                a[1].style.backgroundColor = "red";
                a[4].style.backgroundColor = "red";
            }

            // ========== if theres no text in Input

            if (x.value.toString() == "") {
                a[0].style.backgroundColor = "#ffffff";
                a[1].style.backgroundColor = "#ffffff";
                a[2].style.backgroundColor = "#ffffff";
                a[3].style.backgroundColor = "#ffffff";
                a[4].style.backgroundColor = "#ffffff";
                a[5].style.backgroundColor = "#ffffff";
            }

        };

    })

})