import routes from "../routes";
import Book from "../model/book";
import User from "../model/user";
import passport from "passport";
import MiniSearch from "minisearch";


export const home = async(req, res) => {
    try{
    const books = await Book.find({}).populate("enrolledBy");
    
    
    res.render("home", {books})
    }catch(error){
        console.log(error);
    }
};

export const login = (req, res) => {
    res.render("login");
}

export const postLogin =
     passport.authenticate('local', {  
    successRedirect: routes.home,
    failureRedirect: routes.login,
    failureFlash: true })
   

export const join = (req, res) => {
    res.render("join");
}

export const postJoin = async(req, res) => {
    const {
        body: {username, email, password, password2}
    } = req;
    if(password == password2){
    try{const user ={
        username,
        email
    }
    const newUser = await User.register(
        user,
        password
    )
    console.log(`newUser:${newUser}`);
    res.redirect(routes.home)
}catch(error){
    console.log(error);
}
}else{
    res.render("join", {error:"비밀번호가 일치하지 않습니다."})
}
}

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
}

export const profile = async(req, res) => {
    const {
        params: {id}
    } = req;
    const currentUser = await User.findById(id).populate("uploadedBooks");
    res.render("profile", {currentUser})
}

export const search = async(req, res) => {
    const books = await Book.find({})
    let miniSearch = new MiniSearch({
        fields: ['title', 'author'], // fields to index for full-text search
        storeFields: ['title', 'author'] // fields to return with search results
      })
    const documents = books
    miniSearch.addAll(documents);
    let results = miniSearch.search(req.body.search)
    console.log(results)
    res.redirect(routes.home)
}