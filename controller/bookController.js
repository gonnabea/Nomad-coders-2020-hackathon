import Book from "../model/book";
import routes from "../routes";
import User from "../model/user";

export const getAddBook = (req, res) => {
    res.render("uploadBook")
}


export const postAddBook = async(req, res) => {
    const {
        body: {bookName,bookDescription,author}, file:{path}
    } = req;
    try{
    const newBook = await Book.create({
        title:bookName,
        author,
        description:bookDescription,
        imageUrl:path,
        enrolledBy: req.user.id
    })
    
    const currentUser = req.user;
    currentUser.uploadedBooks.push(newBook.id);
    currentUser.save();
}catch(error){
    console.log(error);
}
    res.redirect(routes.home);
}

export const bookDetail = async(req, res) => {
    const { params: {id} } = req;
    
    const book = await Book.findById(id).populate("enrolledBy");
    
    res.render("book-detail" , {book});
}

export const myBookList = async(req, res) => {
    const currentUser = await User.findById(req.user.id).populate("favBooks");
    
    res.render("myBookList", {currentUser});
}

export const postMyBookList = (req, res) => {
    const {
        params: {id}, user
    } = req;
    let overlap = false;
    user.favBooks.forEach(element => {
        if(element == id){
            overlap = true;
        }
    });
    if(overlap === false){
    user.favBooks.push(id)
    user.save();
    }
    res.redirect(`/${routes.myBookList(user.id)}`);
}