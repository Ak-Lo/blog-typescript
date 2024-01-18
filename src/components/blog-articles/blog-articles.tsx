// import { useState } from "react";
import { blogArticlesData } from "../../assets/json-data";
import BlogCard from "../blog-card/blog-card";
import "./blog-articles.css"

type TSelectedTab = {
    selectedTab: string[]
}

function BlogArticles( {selectedTab}:TSelectedTab ){
    // const [blogCategoryArticles, setBlogCategoryArticles] = useState([]);
    // const history = useHistory();

    // const readFullArticle = (articleId) => {
    //     history.push(`/blog-topic-details/${articleId}`);
    //   };

    //This function contains code needed for mobile select if multiple select is required
    function returnFilteredArticles() {
        let fileterdArticles = []
        let filteredArticlesMobile = [];

        for (let i = 0; i < selectedTab.length; i++){
            filteredArticlesMobile = blogArticlesData.filter(blogCategory => blogCategory.category === selectedTab[i])
            fileterdArticles.push(...filteredArticlesMobile);
        }
      return fileterdArticles
    }

    return(
        <>
            <div className='blog__articles'>
            {
                blogArticlesData.length !== 0 && selectedTab[0] === "ALL CATEGORIES" ? blogArticlesData.map((item, index) => {
                    return (
                        <div key={index} /*onClick={() => readFullArticle(item.id)}*/> 
                            <BlogCard 
                                id={item.id} 
                                image={item.image} 
                                name={item.title} 
                                category={item.category} 
                                description={item.description} 
                                postDate={item.publishDate}
                            />
                        </div>
                    )}) : blogArticlesData.length !== 0 ? returnFilteredArticles().map((filteredCategory, index) => {
                        return (
                            <div key={index} /*onClick={() => readFullArticle(filteredCategory.id)}*/>
                            <BlogCard 
                                id={filteredCategory.id} 
                                image={filteredCategory.image} 
                                name={filteredCategory.title} 
                                category={filteredCategory.category} 
                                description={filteredCategory.description} 
                                postDate={filteredCategory.publishDate}
                            />
                            </div>
                        )}) : <div>თემატური კეტეგორიები ვერ მოიძებნა</div>
            }
            </div>
        </>
    )
}

export default BlogArticles