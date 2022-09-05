// routes
import Router from "./routes";
import Footer from './layout/Footer';
import NavBar from './layout/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Router />
      <Footer />

    </>
  );
}

export default App;
