import React from "react";
import { Link, useLocation } from "react-router-dom";

const CoachingNav = () => {
	const location = useLocation();

	const navLinks = [
		{ path: "/coaching/register", label: "Center Registration" },
		{ path: "/coaching/students", label: "Student Management" },
		{ path: "/coaching/resources", label: "Resources" },
		{ path: "/coaching/mock-tests", label: "Mock Tests" },
		{ path: "/coaching/revenue", label: "Revenue" },
	];

	return (
		<nav className='bg-[#012D5A] p-4'>
			<div className='max-w-7xl mx-auto flex space-x-4'>
				{navLinks.map((link) => (
					<Link
						key={link.path}
						to={link.path}
						className={`px-3 py-2 rounded-md text-sm font-medium ${
							location.pathname === link.path
								? "bg-[#004A99] text-white"
								: "text-gray-300 hover:bg-[#004A99] hover:text-white"
						}`}
					>
						{link.label}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default CoachingNav;
