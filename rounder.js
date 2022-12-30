window.onload = function () {
    let nav_option=document.getElementsByClassName("nav_option")[0];
    let sidebar=document.getElementsByClassName("sidebar")[0];
    sidebar.addEventListener("click",()=>{
            console.log("clicked");
            nav_option.classList.toggle("nav_option_click");
            if(sidebar.innerHTML===`<i class="fa-solid fa-bars fa-1.3x"></i>`){
            sidebar.innerHTML=`<i class="fa-solid fa-xmark"></i>`
            }
            else{
                sidebar.innerHTML=`<i class="fa-solid fa-bars fa-1.3x"></i>`
            }
    })

let h1= document.getElementById('skill_name_span');
let name =["frontend developer","ui designer","web developer"];
let countletter=0;
let count =0;

update();
function update()
{   countletter++;
    h1.innerText =" "+name[count].slice(0,countletter);
    if(countletter===name[count].length)
    {
        count++
        countletter=0;
    }
    if (count===name.length) {
        count=0;
    }
    
    setTimeout(update,400);
}
}