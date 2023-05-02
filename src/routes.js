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
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/podcast" element={<Podcast />} />
      <Route path="/blog" element={<Blog />} />
      <Route exact path="/blog/:id" element={<BlogPost />}/>
      <Route path="/demo" element={<Demo />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookies-policy" element={<CookiesPolicy />} />
    </Routes>
  )
} 
