import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './App.css'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
		const elementsToHide = document.querySelectorAll("body > *:not(header)");
		elementsToHide.forEach((el) => el.classList.toggle("hidden"));
	};

	return (
		<header>
			<h3 style={{fontSize: '24px'}}>FilipinoPassport.com</h3>
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