import React, {useEffect, useState} from "react"
import './blog-comments.css'
// import LeaveCommentTextbox from "./blog-comment-textbox";
// import DeleteCommentModal from "./blog-delete-comment";
// import { useCookies } from "react-cookie";
// import axios from "axios";
// import { API_BASE_URL } from "../../../constants/apiConstants";
// import moment from "moment/moment";

const commentsAndReplies = {
    children: [
        {
            id: 0,
            comment: 'comment',
            commentAddDate: '27',
            authorStatus: 'Customer',
            author: 'Levan Lursmanashvili', 
            children: [
                {
                    id: 1,
                    comment: 'comment 2',
                    commentAddDate: '27',
                    authorStatus: 'Service Provider',
                    author: 'Levan Lursmanashvili',
                    children: []
   
                },
                {
                    id: 4,
                    comment: 'comment 3',
                    commentAddDate: '27',
                    authorStatus: 'Service Provider',
                    author: 'Levan Lursmanashvili',
                    children: []
                }
                
            ]

        },
        
        {
            id: 9,
            comment: 'comment 54',
            commentAddDate: '27 ',
            authorStatus: '',
            author: 'Levan Lursmanashvili',
            children: [
                {
                    id: 10,
                    comment: '',
                    commentAddDate: '27',
                    authorStatus: 'Service Provider',
                    author: 'Levan Lursmanashvili',
                    children: []
                }
            ]
        }
    ]
};

    type Comments = {
        id: number
        comment: string
        commentAddDate: string
        authorStatus: string
        author: string
        children: Comments[]
    }

    function TraverseReplies({ comment, authorStatus, author, children }: Comments){ 
        // const [cookies, removeCookie] = useCookies(["ContactiAccessToken"]);    
        const [showRepliesOnComment, setShowRepliesOnComment] = useState(false);
        const [commentAreaVisible, setCommentAreaVisible] = useState(false);
        const [deleteCommentVisible, setDeleteCommentVisible] = useState(false);
        const [commentId, setCommentId] = useState(0);

            return (
                <div className="blog__comments">
                    <div className="comment__author">{author}</div> 
                    <div className="author__status">{authorStatus}</div>
                    <div className="blog__comment">{comment}</div>
                    {/* {deleteCommentVisible ? <DeleteCommentModal setDeleteCommentVisible={setDeleteCommentVisible} /> : ""}
                    {commentAreaVisible ? <LeaveCommentTextbox commentId={commentId} articleId={articleId} replyOnComment={true} SetMustUpdateComments={SetMustUpdateComments}/> : ""}  */}
                    <div className="d-flex align-items-center">
                        <i className="bi bi-hand-thumbs-up"></i>
                        <div className="line__between mr-3 ml-3"></div>
                        <i className="bi bi-hand-thumbs-down"></i>
                        {/* <span role="button" className="comment-reply text-primary ml-5" onClick={() => {setCommentAreaVisible(prev => !prev); setCommentId(id)}}>კომენტარის დატოვება</span> */}
                        {/* <span role="button" className={cookies.ContactiUsername === userName ? "comment-reply text-danger ml-5" : "d-none"} onClick={() => {setDeleteCommentVisible(true); setCommentId(id)}}>წაშლა</span> */}
                    </div>
                    {/* <div>
                            {Children && Children.length > 0 ? 
                                <div onClick={() => setShowRepliesOnComment(prev => !prev)}>
                                    <span className="reply__button"><img className={showRepliesOnComment ? "expand__replies__arrow__open" : "expand__replies__arrow__close"} src="../images/gallery/down-arrow.png" />{Children.length} კომენტარი</span>
                                </div> : ""}
                        </div>                                   */}
    
                    {children ? children.map((item) => (                         
                            <TraverseReplies key={item.id} {...item} />                                      
                    )) : ""}
    
                </div>
            )
    }



function BlogComments ({ /*articleId, mustUpdateComments, SetMustUpdateComments*/ }){    

    // useEffect(() => {

    //     async function getAllCommentsForArticle(){
    //         try{
    //             const response = await axios.get(API_BASE_URL + `/api/blog/ka/comments/${articleId}`);

                
    //             setAllCommentsForArticle(response.data)
    //             // console.log("COMMENTSSSSSSSSSSSSSSSSss",response)    
    //         }catch(err){
    //             console.log(err.toString())
    //         }
    //     }

    //     getAllCommentsForArticle()
    // }, [mustUpdateComments])
    
    return (
        <div className="blog__topics"> 
            {commentsAndReplies.children.map((item) => (
                <TraverseReplies key={item.id} {...item}/>
            ))}        
        </div>
    )
}
    
export default BlogComments