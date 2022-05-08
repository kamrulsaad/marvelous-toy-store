import { ToastContainer } from "react-toastify";
import Footer from "./Pages/Shared/Footer/Footer";
import Nav from "./Pages/Shared/Navbar/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import Animatedroute from "./Pages/AnimatedRoute/Animatedroute";


function App() {

  return (
    <div className="relative">
      <Nav></Nav>
      <Animatedroute></Animatedroute>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
