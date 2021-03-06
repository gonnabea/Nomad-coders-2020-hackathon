import React from "react";
import Title from "./title";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";

const BookImage = styled.img`
    width:10vh;
    height:10vh;
    &:hover{
        animation:hover_img 1s linear infinite forwards;
        transition-delay:1s;
    }
    /* box-shadow: 0px 0px 29px 0px rgba(0,0,0,0.75); */

    @keyframes hover_img{
        0%{
            box-shadow: 0px 0px 10px 2px #F6B93B;
        }
        20%{
            box-shadow: 0px 0px 20px 5px #F6B93B;
        }
        100%{
            box-shadow: 0px 0px 29px 0px #F6B93B;
        }
    }
`;

const ProfileImage = styled.img`
    margin-top: 20px;
    width:10vh;
    height:10vh;
    border-radius: 100%;
`

const Div = styled.div`
    position:absolute;
    width:100%;
    top:60px;
    height:93.35%;
    /* align-self: center; */
    display:flex;
    flex-direction:column;
    /* justify-content:center; */
    /* align-items:center; */
    background-repeat:repeat;
    background-size:cover;
    background-color:#F9F7D6;
    
    &>div{
        align-self:center;
    }
    overflow:auto;
`;

const Book = styled.a`
    display:block;
    flex-direction:column;
    text-align:center;
    justify-content:center;
    align-items:center;
    margin-top:0.6rem;
    color:${props => props.color || "black"};
    width:15vh;
    overflow:hidden;
    text-overflow:ellipsis;
    transform-style: preserve-3d;
    perspective: 650vh;
    font-size:1rem;
    
    &>span:nth-child(2){
        overflow:hidden;
        text-overflow:ellipsis;
        font-size: 2.5vh;
        opacity:0.5;
        width:100%;
        height:56px;
    }
    &>span:nth-child(3){
        font-size: 2vh;
        opacity:0.5;
        width:100%;
        height:54.5px;
    }
    &:hover{
        &>span:nth-child(2){
        opacity:1;
        }
        &>span:nth-child(3){
        opacity:1;
        }
    }
    /*
    &>img:first-child{
        
        &:hover{
            animation: image_hover_turn 1.2s linear forwards

        }
        
        @keyframes image_hover_turn{
            0%{
                transform: rotateX(0turn) ;
            }
            50%{
                transform: rotateX(0.5turn); 
                
            }
            100%{
                transform: rotateX(1turn)  translateZ(30vh) translateY(0.5vh) ;
            }
        }
    }
    */

    @media screen and (max-width: 700px)
    { 
        &>span:nth-child(2){
            font-size:1rem;
        }
        &>span:nth-child(3){
            font-size:1rem;
        }
    }

    @media screen and (max-device-width: 420px)
    {
        &>span:nth-child(2){
            font-size:1.5rem;
        }
        &>span:nth-child(3){
            font-size:1.5rem;
        }
    }
`

const BookList = styled.div`
    display: none;
    flex-wrap:wrap;
    justify-content:center;
    width:500px;
    
`;

const Flex_div = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:${props => props.marginTop || "0"};
    color:grey;
`;

const Review_box = styled.div`
    position:relative;
    bottom:0;
    width:500px;
    display:none;
    text-align:center;
    flex-wrap:wrap;
    margin:0 auto;
    justify-content:center;
    align-items:center;
`;

const MyComments = styled.div`
    margin:15px;
    border:1px solid #F6B93B;
    box-shadow: 0px 3.5px 7px 5px rgba(0,0,0,0.75);
    border-radius:5px;

    :hover{
        cursor:pointer;

    }

    @keyframes myComment{
        0%{

        }
        100%{
            transform:translateZ(100px);
        }
    }
`;

const UploadedBookInfo = styled.div`
    display:flex;
    height:25px;
    width: 120px;
    align-self:center;
`;

const UploadedNum = styled.div`
width:20px;
height:20px;
background-color:white;
border-radius:100%;
color:yellowgreen;
display:flex;
justify-content:center;
align-items:center;
`

const EditProfileBtn = styled.a`

border-radius:20px;
background-color:#F7C04E;
color:white;
width: 15vh;
height: 4vh;
display:flex;
align-items:center;
justify-content:center;
:hover{
box-shadow: 3px 3px 3px #F7C04E;

}
`
const Username = styled.span`

`

const Email = styled.span`

`


const UploadedBookTitle = styled.span`
    cursor:pointer;
    height:25px;
`
const ProfileArea = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    height:30vh;
`;

const BookTitle = styled.div`
    font-weight:700;
    margin-top:10px;
`

const BookAuthor = styled.div`
margin-top:10px;
`
const UserInfoArea = styled.section`
    display : flex;
    margin-top:1rem;
`

const ReviewArea = styled.section`
display:flex;
flex-direction:column;
`

const ReviewBtn = styled.span`
cursor:pointer;
height:25px;
`
const ReviewdNum = styled.div`
width:20px;
height:20px;
background-color:white;
border-radius:100%;
color:yellowgreen;
display:flex;
justify-content:center;
align-items:center;
`

const ReviewHeader = styled.div`
    display:flex;
    align-self:center;
`

const BookArea = styled.div`
display:flex;
flex-direction:column;
`
class profile extends React.Component {
    render() {
        let translated
        function translateTime(createdAt){
            translated = `${createdAt.getYear()+1900}년 ${createdAt.getMonth()+1}월 ${createdAt.getDate()}일`;
        }
        
        return (
            <BaseLayout>
                <GlobalStyle />
                {Header(this.props)}
                <div style={{height:"60px"}}>
                </div>
                <Div>
                    <Flex_div>
                        <ProfileArea>
                            <ProfileImage src={this.props.currentUser.profilePhoto} />
                            <Username>{this.props.currentUser.username}</Username>
                            <Email>{this.props.currentUser.email}</Email>
                        <EditProfileBtn href={this.props.routes.editUser}>
                            프로필 수정
                        </EditProfileBtn>
                    </ProfileArea>
                    <UserInfoArea>
                        <BookArea>
                            <UploadedBookInfo>
                                <UploadedBookTitle id="uploadedBooksBtn">
                                    등록하신 책 
                                </UploadedBookTitle>
                                <UploadedNum>
                                    {this.props.currentUser.uploadedBooks.length}
                                </UploadedNum>
                            </UploadedBookInfo>
                            <BookList id="bookList">
                                {this.props.currentUser.uploadedBooks.map(book => {
                                    return (
                                        <Book id="book" href={`/${this.props.routes.bookDetail(book.id)}`}>
                                            <BookImage src={book.imageUrl} />
                                            <BookTitle>{book.title}</BookTitle>
                                            <BookAuthor>{book.author}</BookAuthor>
                                            {/* <h4 style={{height:"20vh"}}>{book.description}</h4> */}
                                        </Book>
                                    )
                                })}
                            </BookList>
                        </BookArea>
                        <ReviewArea>
                            <ReviewHeader>
                                <ReviewBtn id="reviewBtn">
                                    리뷰
                                </ReviewBtn >
                                <ReviewdNum>
                                    {this.props.currentUser.reviews.length}
                                </ReviewdNum>
                            </ReviewHeader>
                            <Review_box id="reviewList">
                                {this.props.currentUser.reviews.map(review => {
                                    return (
                                            <MyComments className="MyComments">
                                                <h3>
                                                    {review.content}
                                                </h3>
                                                <h3>
                                                    {review.rate}
                                                </h3>
                                                <h3>
                                                    {translateTime(review.createdAt)}
                                                    {translated}
                                                </h3>
                                            </MyComments>
                                            )
                                })}
                            </Review_box>
                        </ReviewArea>
                    </UserInfoArea>
                    </Flex_div>
                </Div>
                
                <script src="/vanilla/profile.js"></script>

            </BaseLayout>
        )
    }

}

export default profile