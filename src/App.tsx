import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import BlogLandingPage from './pages/blog-landing-page/blog-landing-page'
import ReadFullArticle from "./pages/read-full-article/read-full-article";

function App() {
  return (       
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogLandingPage />} />
        <Route path="/read-full-article/:id" element={<ReadFullArticle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
