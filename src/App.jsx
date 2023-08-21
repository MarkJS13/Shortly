import Hero from "./Hero";
import Middle from "./Middle";
import Footer from "./Footer";
import ErrorDisplay from "./ErrorDisplay";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

function App() {
  const [showError, setShowError] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 730) {
        setToggle(false);
      }
    };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
  }, [])
  
  
  return (
    <div className="container">
      <Sidebar toggle={toggle} setToggle={setToggle}/>
      <ErrorDisplay showError={showError}/>
      <Hero setToggle={setToggle}/>
      <Middle showError={showError} setShowError={setShowError}/>
      <Footer/>
    </div>
  )
}

export default App;