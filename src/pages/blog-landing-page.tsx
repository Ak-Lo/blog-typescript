import { useState } from "react";
import BlogTabs from "../components/blog-tabs/blog-tabs"
import BlogArticles from "../components/blog-articles/blog-articles";

function BlogLandingPage(){
  const [selectedTab, setSelectedTab] = useState(['ALL CATEGORIES']);

 return (
      <div>
        <BlogTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        <BlogArticles selectedTab={selectedTab} />
      </div>)
}

export default BlogLandingPage