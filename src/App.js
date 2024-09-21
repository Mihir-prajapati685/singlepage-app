import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import UseSmooth from "./Component/UseSmooth";
import Home from "./Component/Home";
import About from "./Component/About";
import Project from "./Component/Project";
import Contact from "./Component/Contact";

function App() {
  //UseSmooth(); // Custom hook for smooth scrolling

  return (
//     <Router>
//        <SmoothScrollWrapper>
//       {/* <nav>
//         <ul>
//           <li>
//             <Link to='/'>Home</Link>
//           </li>
//           <li>
//             <ScrollLink to='about' smooth={true} duration={500}>About</ScrollLink>
//           </li>
//           <li>
//             <ScrollLink to='contact' smooth={true} duration={500}>Contact</ScrollLink>
//           </li>
//           <li>
//             <ScrollLink to='product' smooth={true} duration={500}>Product</ScrollLink>
//           </li>
//         </ul>
//       </nav> */}
          
//       <div id="home">
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </div>

//         <div id="about">
//         <Routes>
//           <Route path="/about" element={<About />} />
//         </Routes>
          
//         {/* <About /> */}
//       </div>

//       <div id="contact">
//         <Contact />
//       </div>

//       <div id="product">
//         <Project />
//         </div>
//         </SmoothScrollWrapper>
//     </Router>
//   );
// }
// function SmoothScrollWrapper({ children }) {
//   UseSmooth(); // Custom hook for smooth scrolling
//   return children;
    // }
    <div>
      <Contact/>
    </div>
  )
}

export default App;
