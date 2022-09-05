import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Landing from './pages/Landing.tsx';
import Demo from './pages/Demo.tsx';


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/demo" element={<Demo />} />
    </Routes>

  )

} 
