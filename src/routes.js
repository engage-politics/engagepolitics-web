import {
  Routes,
  Route
} from "react-router-dom";
import Landing from './pages/Landing.tsx';
import Demo from './pages/Demo.tsx';
import About from "./pages/About";
import Podcast from "./pages/Podcast";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/podcast" element={<Podcast />} />
      <Route path="/blog" element={<Blog />} />
      <Route exact path="/blog/:id" element={<BlogPost />}/>
      <Route path="/demo" element={<Demo />} />
    </Routes>
  )
} 
