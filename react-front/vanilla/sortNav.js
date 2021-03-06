const sortBtn = document.getElementById("sortBtn");
const sortNav = document.getElementById("sortNav");
const sortContent = document.getElementById("sortContent");
const genreMenus = document.querySelectorAll("#genreMenus");


const checkValue = async () =>{
    const sort_value = document.getElementById("sort_value");
    // console.log(sort_value)

    if(sort_value)
    {
        for(i = 0; i < genreMenus.length; i++)
        {
            if(genreMenus[i].value == sort_value.innerHTML)
            {
                genreMenus[i].style.animation = "Genre_select 0.2s linear forwards";
            }
        }
    }
}

async function handleSortBtn(){ 
    console.log("It's working!")
    
    checkValue();
    
    sortBtn.className = 'far fa-caret-square-left fa-3x';
    sortBtn.style.color = "#F6B93B";
    sortContent.style.display="flex";
    sortContent.style.animation="slide .5s forwards";
    sortBtn.style.animation="slideBtn .5s forwards";
    sortNav.style.width="30vh";
    sortBtn.removeEventListener("click", handleSortBtn);
    
    sortBtn.addEventListener("click", function revertSlide(){
        sortNav.style.width="0";
        sortBtn.className = 'far fa-caret-square-right fa-3x';
        sortBtn.style.animation="revertSlideBtn .5s forwards";
        sortBtn.removeEventListener("click",revertSlide);
        sortBtn.addEventListener("click", handleSortBtn);
        sortContent.style.display="none";
    });
}

const sortInit= async ()=> {
    
    sortBtn.addEventListener("click", handleSortBtn);
    window.addEventListener("load", ()=>{
        const sort_value = document.getElementById("sort_value");
        if(sort_value){
            handleSortBtn()
        }
    })
}

if(sortBtn)
{
    sortInit();
}