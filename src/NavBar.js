import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './App.css'
import FPLogo from './images/FPLogo.jpg'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
		const elementsToHide = document.querySelectorAll("body > *:not(header)");
		elementsToHide.forEach((el) => el.classList.toggle("hidden"));
	};

	return (
		<header>
			<img 
			src={FPLogo}
			alt="your-image-alt-text" 
    		style={{
    		  marginRight: '10px', /* space between image and text */
    		  width: '40px',
    		  height: '40px',
    		  borderRadius: '22.17px',
    		  objectFit: 'cover', /* ensure image fills the container */
  			 }}
 				 />
  
			<h3 style={{fontSize: '20px', marginTop: '0.5%' }}>FilipinoPassport.com</h3>
			<div>
			<nav ref={navRef} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flex: 1, marginRight: '-250px'}}>
				<a href="/#">Home</a>
				<a href="https://mrandmrshowe.com/visa-assistance1">Services</a>
				<a href="https://mrandmrshowe.com/about-kach">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			</div>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;