let my_book_list_book = document.querySelectorAll(".my_book_list_book");
let my_book_list_side_cover = document.querySelectorAll(".my_book_list_side_cover");
let My_book_list_form = document.querySelectorAll(".My_book_list_form");

let pos = 0;
const handle = async () => {

    let Back_cover = document.querySelectorAll("Back_cover");
    /*
    for (i = 0; i < my_book_list_side_cover.length; i++) {
        let r = Math.random() * 256;
        let g = Math.random() * 256;
        let b = Math.random() * 256;

        var colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16)
        //'#' + (Math.random().toString(16) + "000000").substring(2,8);
        //"#"+((1<<24)*Math.random()|0).toString(16);
        my_book_list_side_cover[i].style.background = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        my_book_list_side_cover[i].style.color = "white";
    }
*/
    if (my_book_list_book.length < 11) {
        let img = document.createElement("img");
        img.src = "/images/shelf.png";
        my_book_list_book[0].parentNode.appendChild(img);
        // img.style.position = "relative";
        // img.style.top = "-10%";
        // img.style.zIndex = "-2";
        // img.style.width = "450px";
        // img.style.height = "10vh";
        img.style.top = "350px";
        if(screen.width <= 420)
        {
            // img.style.top = "-525px";
            img.style.top = "20%";
        }
    }
    else {
        let img1 = document.createElement("img");
        img1.src = "/images/shelf.png";
        my_book_list_book[0].parentNode.appendChild(img1);
        img1.style.position = "absolute";
        img1.style.zIndex = "-2";
        img1.style.height = "100px";
        // img1.style.top = "-55%";
        img1.style.top = "50%";
        img1.style.width = "100vh";
        if(screen.width <= 420)
        {
            img1.style.top = "-680px";
        }
        for (i = 0; i < my_book_list_book.length; i++) {
            if (1 <= i * 0.1 || i === 11) {
                let img = document.createElement("img");
                img.className = "book_list_img";
                img.src = "/images/shelf.png";
                my_book_list_book[i].parentNode.appendChild(img);
                img.style.top = "-40px";
                img.style.width= "100vh";
                my_book_list_book[i].style.boxShadow = " -1px 10px 37px -10px rgba(0,0,0,0.75)";
                my_book_list_book[i].style.marginTop = "60px"
                if(screen.width <= 420)
                {
                    img.style.top = "-385px";
                }
            }
        }
    }
}

handle();
