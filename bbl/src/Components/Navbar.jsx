import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Element } from 'react-scroll';

function Navbar0() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">BBL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#aboutme">
                            <Link to="aboutme" smooth={true} duration={500}>
                                About Me
                            </Link>
                        </Nav.Link>
                        <Nav.Link href="#aboutsoup">
                            <Link to="aboutsoup" smooth={true} duration={500}>
                                About Soup
                            </Link>
                        </Nav.Link>
                        <Nav.Link href="#dietaryinfo">
                            <Link to="dietaryinfo" smooth={true} duration={500}>
                                Dietary Info
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar0;

// import React from 'react';
// import { Link, Element } from 'react-scroll';

// const Navbar = () => {
//     return (

//     );
// };

// export default Navbar;

{/* <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <Link to="aboutme" smooth={true} duration={500} href="#aboutme" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to="aboutsoup" smooth={true} duration={500} href="#aboutsoup" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        About Soup
                    </Link>
                </li>
                <li>
                    <Link to="dietaryinfo" smooth={true} duration={500} href="#dietaryinfo" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        Dietary Information
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div> */}

// import React, { useState } from 'react';
// import { Link, Element } from 'react-scroll';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// const Navbar = () => {
//     // State to manage the navbar's visibility
//     const [nav, setNav] = useState(false);

//     // Toggle function to handle the navbar's display
//     const handleNav = () => {
//         setNav(!nav);
//     };

//     // Array containing navigation items
//     const navItems = [
//         { id: '#aboutme', text: 'About Me' },
//         { id: '#aboutsoup', text: 'About Soup' },
//         { id: '#dietaryinfo', text: 'Dietary Information' },
//     ];

//     return (
//         <div className='bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
//             {/* Logo */}
//             <h1 className='w-full text-3xl font-bold text-[#00df9a]'>BBL</h1>

//             {/* Desktop Navigation */}
//             <ul className='hidden md:flex'>
//                 {navItems.map(item => (
//                     <li
//                         key={item.id}
//                         className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
//                     >
//                         <Link to={item.id} smooth={true} duration={500} href={item.id} aria-current="page">
//                             {item.text}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>

//             {/* Mobile Navigation Icon */}
//             {/* <div onClick={handleNav} className='block md:hidden'>
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div> */}

//             {/* Mobile Navigation Menu */}
//             {/* <ul
//         className={
//           nav
//             ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
//             : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
//         }
//       > */}
//             {/* Mobile Logo */}
//             {/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1> */}

//             {/* Mobile Navigation Items */}
//             {/* {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul> */}
//         </div>
//     );
// };

// export default Navbar;