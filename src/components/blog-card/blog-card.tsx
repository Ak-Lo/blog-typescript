// import React from 'react'
import "./blog-card.css"

type TCard = {
    id: number
    image:string
    name:string 
    category:string
    description:string
    postDate:string
}

const BlogCard = (props:TCard) => {
  return (
    <div className='card__container'>
        <img src={props.image}/>
        <div className='card__body'>
            <h4>{props.name}</h4>
            <h5>{props.category}</h5> 
            <div className='card__line'></div>
            <p>{props.description}</p>
            <div className='publish__date'>{props.postDate}</div> 
        </div>              
    </div>
  )
}

export default BlogCard