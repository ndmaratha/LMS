import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const isActive = (path) => {
		return location.pathname === path;
	};

	const navLinks = [
		{ path: "/dashboard/courses", label: "Courses" },
		{ path: "/dashboard/live-classes", label: "Live Classes" },
		{ path: "/mock-tests", label: "Mock Tests" },
		{ path: "/zen-mind", label: "Zen Mind" },
		{ path: "/counselling", label: "Counselling" },
	];

	return (
		<nav className='bg-[#012D5A] text-white'>
			<div className='max-w-7xl mx-auto px-4'>
				<div className='flex justify-between h-16'>
					{/* Logo */}
					<div className='flex items-center'>
						<Link to='/dashboard' className='text-2xl font-bold text-[#E6A800]'>
							LMS
						</Link>
					</div>

					{/* Mobile menu button */}
					<div className='md:hidden flex items-center'>
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='text-gray-300 hover:text-white focus:outline-none'
						>
							<svg
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								{isMenuOpen ? (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								) : (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 6h16M4 12h16M4 18h16'
									/>
								)}
							</svg>
						</button>
					</div>

					{/* Desktop Navigation Links */}
					<div className='hidden md:flex space-x-4'>
						{navLinks.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
									isActive(link.path)
										? "bg-[#004A99] text-white"
										: "text-gray-300 hover:bg-[#004A99] hover:text-white"
								}`}
							>
								{link.label}
							</Link>
						))}
					</div>

					{/* Profile Section */}
					<div className='hidden md:flex items-center space-x-4'>
						<Link
							to='/profile'
							className='text-gray-300 hover:bg-[#004A99] hover:text-white px-3 py-2 rounded-md text-sm font-medium'
						>
							Profile
						</Link>
						<button
							onClick={() => {
								// Add logout logic here
								console.log("Logout clicked");
							}}
							className='bg-[#C1272D] hover:bg-[#9B1C23] text-white px-3 py-2 rounded-md text-sm font-medium'
						>
							Logout
						</button>
					</div>
				</div>

				{/* Mobile Navigation Menu */}
				{isMenuOpen && (
					<div className='md:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1'>
							{navLinks.map((link) => (
								<Link
									key={link.path}
									to={link.path}
									className={`block px-3 py-2 rounded-md text-base font-medium ${
										isActive(link.path)
											? "bg-[#004A99] text-white"
											: "text-gray-300 hover:bg-[#004A99] hover:text-white"
									}`}
									onClick={() => setIsMenuOpen(false)}
								>
									{link.label}
								</Link>
							))}
							<Link
								to='/profile'
								className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-[#004A99] hover:text-white'
								onClick={() => setIsMenuOpen(false)}
							>
								Profile
							</Link>
							<button
								onClick={() => {
									// Add logout logic here
									console.log("Logout clicked");
									setIsMenuOpen(false);
								}}
								className='w-full text-left px-3 py-2 rounded-md text-base font-medium bg-[#C1272D] hover:bg-[#9B1C23] text-white'
							>
								Logout
							</button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
