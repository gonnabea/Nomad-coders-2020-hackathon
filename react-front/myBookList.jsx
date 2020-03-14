import React from "react";
import Title from "./title";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";



const Flex_box = styled.div`
    display:flex;
    width:100%;
    height:100%;
    align-items:center;
    justify-content:center;
    text-align:center;
    
`;

const Grid_box = styled.div`
    position:absolute;
    display:flex;
    justify-content:center;
    perspective:800px;  
    
    flex-direction:column;
    width:100%;
    height:100%;
    align-items:center;
    margin:0 auto;
    bottom:0;
    transform-style: preserve-3d;
    animation-fill-mode: forwards;

    &>div>div>div>a>img:nth-child(1){
        /*앞 */
        visibility: hidden; 
        /* opacity: 0; */
    }
    &>div>div>div>a>div:nth-child(3){
        /*뒤 */
        visibility: hidden; 
         /* opacity: 0;  */
    }
    &>div>div>div>a>div:nth-child(4){
        /*위 */
         visibility: hidden;  
        /* opacity: 0; */
    }

    &>div>div>div:hover{
        &>a>img:nth-child(1){
        /*앞 */
        visibility: visible;
            animation: fade_in_out 0.5s linear;
            animation-fill-mode: forwards;
        }
        &>a>div:nth-child(3){
            /*뒤 */
            visibility: visible;
            animation: fade_in_out 0.5s linear;
            animation-fill-mode: forwards;
        }
        &>a>div:nth-child(4){
            /*위 */
            visibility: visible;
            animation: fade_in_out 0.5s linear;
            animation-fill-mode: forwards;
        }
    }

    @keyframes fade_in_out {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

    
`;

const Bottom_nav = styled.div`
    position:relative;
    margin-top:-3vh;
    z-index:-2;
    &>img{
        z-index:-2;
        width:120vh;
    }    
    @media screen and (max-width: 1300px)
    { 
        &>img
        {
            width:100%;
        }   
    }
`;

const Div = styled.div`
  
    display:grid;
    position: relative;
    bottom: 32%;
    margin-bottom: -22.5vh;
    /* margin-right:0.2rem; */
    transform-style: preserve-3d;
    text-overflow: ellipsis;
    
    &:hover{
        cursor: pointer;
        animation: hover_book 1s linear forwards;
        z-index:10;
    }
            @keyframes hover_book {
                0%{

                } 
                30%{
                    transform:rotateX(-16.5deg) translateZ(10vh);
                }
                60%{
                    transform:rotateX(0deg) translateZ(15vh);
                }
                100%{ 
                    transform: translateZ(23vh) rotateY(-90deg);
                }
            }

    &:active{
        animation: active_book 0.5s linear forwards;
    }
        @keyframes active_book{
            0%{
                transform:rotateX(-30deg) translateZ(10vh);
            }
           
            100%{
                transform:  translateZ(20vh) ;

            }
        }
`;

const ImageSize = styled.img`
    width:27vh;
    height:40vh;
    transform: rotateY(90deg)   translateX(13.7vh)  translateZ(2.5vh)   ;
    position:absolute;
    z-index:2;
`;

const Side_cover = styled.div`
    width: 5.7vh;
    height:40vh;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    background-color:${props => props.coverColor ? props.coverColor : "pink"};
    color:white;
    z-index:3;
    
    color:red;
    font-size:100%;
    overflow:hidden;
    text-align:center;
    writing-mode: vertical-rl;
    text-orientation: mixed;
`;

const Back_cover = styled.div`
    z-index:-1;
    width:27vh;
    height:40vh;
    /* background-color:${props => props.coverColor ? props.coverColor : "black"}; */
     background-image:url("https://cdn.pixabay.com/photo/2017/07/20/09/35/particles-2521732_960_720.jpg");  
    /* background-image:url("https://cdn.pixabay.com/photo/2019/12/21/07/44/frame-4709861_960_720.png");  */
    color:white;
    text-overflow:hidden;
    overflow:hidden;
    transform:rotateY(-90deg) translateX(-13.75vh) translateZ(2.5vh); 
    position:absolute;
`;

const Up_cover = styled.div`
    width: 5.25vh;
    height:27vh;
   /* background:black; */
    transform:   translateY(-26.5vh) translateZ(-13.7vh)  rotateX(90deg); 
    position:absolute;
    bottom:0;
    z-index:1;
    background: rgb(255,255,255);
    background: linear-gradient(93deg, rgba(255,255,255,1) 0%, rgba(20,20,20,0.9626225490196079) 51%, rgba(255,255,255,1) 100%);


`;


const Input = styled.input`
    position:absolute;
    bottom:2%;
    left:20%;
    &:hover{
        cursor: pointer;
    }
`;

const A = styled.a`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    transform-style: preserve-3d;
    margin:0 0.2vh;
`;

const Span = styled.span`
    width: 15rem;
    overflow: hidden;
`;

const H2 = styled.h2`
    position:absolute;
    top:0;
    margin-top:6rem;
`;

const Background_img = styled.div`
    position:absolute;
    top:0; 
    width:100%;
    height:100%;
    z-index:-2;
    background-image:url("\/images/wood.jpg");
    background-repeat:repeat;
    background-position:center center;
    background-size:100% auto;
    @media screen and (min-height: 100vh)
    {
        height:150vh;
    }
`;

const Box = styled.div`
    display:flex;
    height:35.5vh;
    align-items:center;
    flex-direction:column;

`;
const Grid_row = styled.div`
    display:grid;
    height:100%;
    grid-template-columns:repeat( 10,5.8vh);
    grid-row-gap:27vh;
    @media screen and (max-width:600px)
    {
        grid-template-columns:repeat( 5,1fr);

    }
`;

class MyBookList extends React.Component {

    render() {

        const routes = this.props.routes
        return (
            <BaseLayout>
                <GlobalStyle />
                {Header(this.props)}
                <Flex_box>
                    <H2 >{this.props.currentUser.username}
                        님의 서재:
                    </H2>
                    <Grid_box className="list">
                        <Box>
                            <Grid_row>
                                {this.props.currentUser.favBooks.map(book => {
                                    return (
                                        <>
                                            <Div>
                                                <A href={`/${this.props.routes.bookDetail(book.id)}`}>
                                                    <ImageSize src={`/${book.imageUrl}`} />

                                                    <Side_cover>
                                                        {book.title}
                                                    </Side_cover>
                                                    {/* <h4>{book.author}</h4> */}
                                                    <Back_cover className="Back_cover">
                                                        <span>{book.description}</span>
                                                    </Back_cover>
                                                    <Up_cover></Up_cover>
                                                </A>

                                                <form action={routes.deleteFavBook(book.id)} method="post">
                                                    <Input type="submit" value="삭제" />
                                                </form>
                                            </Div>
                                        </>
                                    )
                                })}
                            </Grid_row>
                        </Box>



                    </Grid_box>

                </Flex_box>
                    {/* <Bottom_nav>
                        <img src="../images/shelf.png" alt="" />
                    </Bottom_nav>
                    <Bottom_nav>
                        <img src="../images/shelf.png" alt="" />
                    </Bottom_nav> */}
                <Background_img >

                </Background_img>
            </BaseLayout>
        )
    }

}

export default MyBookList