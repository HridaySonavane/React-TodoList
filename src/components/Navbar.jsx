import React from "react";
import { GoHomeFill } from "react-icons/go";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="flex justify-center">
			<div className="absolute top-6 flex justify-around items-center w-6/12 h-12 rounded-full backdrop-blur-3xl bg-white border border-white font-semibold text-lg">
				<Link to="/">Home</Link>
				<Link to="/about/*">About</Link>
				<Link to="/">Bg Gallery</Link>
				<Link to="/">Contact Us</Link>
				<button className="bg-black text-white px-3 py-1 rounded-full">
					Sign Up
				</button>
			</div>
		</div>
	);
}

export default Navbar;
