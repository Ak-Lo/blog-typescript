import { useEffect, useState } from "react";
import './read-full-article.css'
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from '../../store/store'
import { changeId } from "../../features/comments/commentsSlice";
import BlogComments from "../../components/blog-comments/blog-comments";
import { useParams } from "react-router-dom";
import { blogArticlesData } from "../../assets/json-data";

type TArticle = {
    id: number
    image: string
    title: string
    category: string
    description: string
    text: string
    publishDate: string
}

const initialState = {
    id: 0,
    image: '',
    title: '', 
    category: '',
    description: '',
    text: '',
    publishDate: ''
}

function ReadFullArticle(){
    const { id } = useParams();

    const [articleDetails, setArticleDetails] = useState<TArticle>(initialState);

    const comments = useSelector((state: RootState) => state.comments);

    const dispatch = useDispatch<AppDispatch>();

    // let { id } = useParams();

    // useEffect(() => {
    //     async function getArticleById(){
    //         try{
    //             const articleById = await axios.get(API_BASE_URL + `/api/blog/ka/article/${id}`);
    //             console.log('READ FULL ARTICLE',articleById)
    //             setArticleDetails(articleById.data);
    //             setIsLoading(false)
    //         }catch(err) {
    //             console.log(err.toString()) 
    //             setIsLoading(false)               
    //         }           
    //     }
    //     getArticleById(); 
    // }, [mustUpdateComments])

    // function redirectToRegistration() {
    //     window.location.href = "/login";
    // };

    // async function likePost() {
    //     try{
    //         const authAxios = axios.create({
    //             headers: {
    //                 Authorization: `Bearer ${cookies.ContactiAccessToken}`
    //             }          
    //         })
    //         await authAxios.post(API_BASE_URL + `/api/blog/like/${id}`)
    //     }catch(err){
    //         console.log(err.toString())
            
    //     }
    // }
    
    // async function dislikePost() {
    //     try{
    //         const authAxios = axios.create({
    //             headers: {
    //                 Authorization: `Bearer ${cookies.ContactiAccessToken}`
    //             }          
    //         })
    //         await authAxios.post(API_BASE_URL + `/api/blog/dislike/${id}`)
    //     }catch(err){
    //         console.log(err.toString())
            
    //     }
    // }
useEffect(()=> {
    function getArticleText() {
        // Using type narrowing approach
        if (typeof(id) === "string"){
            const fullArticleDetail = blogArticlesData.filter(articleData => articleData.id === parseInt(id));
            setArticleDetails(fullArticleDetail[0])
        }

        // // using as keyword approach
        // const articleId = blogArticlesData.filter(article => article.id === parseInt(id as string));
    }
    getArticleText()
},[])
    

    return (
        <div className="read-full-article">
            {<div className="article__text">
                <div className="article__name">{comments.id}</div> 
                <div className="article__name">{id}</div> 
                <button onClick={() => dispatch(changeId())}>change id</button>
                <div className="blog__info__panel">
                    <div style={{display:'flex', alignItems:'center'}}>
                        <div className="items" style={{color:'#3989f4'}}>{comments.commentText}</div>
                        <div className="line__between" style={{margin:'0 1rem'}}></div>
                        <div style={{color: '#909090', fontSize:'12px'}}>{}</div>
                    </div>
                    <div  style={{position:'relative', display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <div className="items" style={{display:'flex', alignItems:'center'}}><i role="button" className="bi bi-hand-thumbs-up" onClick={() => {}}></i><div className="line__between" style={{margin:'0 1rem'}}></div><i role="button" className="bi bi-hand-thumbs-down" onClick={() => {}}></i></div>
                            {/* <div onClick={() => setShareMenuVisible(prev => !prev)} className="items" style={{color:'#3989f4', marginLeft:'2rem'}}><i role="button" className="bi bi-share-fill no-italic">&nbsp;გაზიარება</i></div> */}
                        </div>
                        {/* <div className={shareMenuVisible ? "share__menu" : "d-none"}>
                            <div className="ml-3"><i className="bi bi-facebook mr-2"></i>გაზიარება Facebook-ზე</div>
                            <div className="share__links__linebetween"></div>
                            <div>
                            <svg style={{marginLeft:'1rem', marginRight:'5px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-messenger" viewBox="0 0 16 16">
                            <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
                            </svg>გაზიარება Messenger-ზე</div>                            
                            <div className="share__links__linebetween"></div>
                            <div className="ml-3"><i className="bi bi-linkedin mr-2"></i>გაზიარება LinkedIn-ზე</div>
                        </div> */}
                    </div>
                </div> 
                <p className="article__text">                
                    {articleDetails.text}
                </p>
                {/* <LeaveCommentTextbox articleId={id} SetMustUpdateComments={SetMustUpdateComments}/>                */}
            </div>}
            <BlogComments /> 

        </div>
    )

}


export default ReadFullArticle