import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className='bg-[#012D5A] text-white mt-auto'>
			<div className='max-w-7xl mx-auto px-4 py-8'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					{/* Quick Links */}
					<div>
						<h3 className='text-[#E6A800] font-semibold mb-4'>Quick Links</h3>
						<ul className='space-y-2'>
							<li>
								<Link to='/dashboard' className='hover:text-[#F2C94C]'>
									Dashboard
								</Link>
							</li>
							<li>
								<Link to='/courses' className='hover:text-[#F2C94C]'>
									Courses
								</Link>
							</li>
							<li>
								<Link to='/live-classes' className='hover:text-[#F2C94C]'>
									Live Classes
								</Link>
							</li>
							<li>
								<Link to='/mock-tests' className='hover:text-[#F2C94C]'>
									Mock Tests
								</Link>
							</li>
						</ul>
					</div>

					{/* Student Support */}
					<div>
						<h3 className='text-[#E6A800] font-semibold mb-4'>
							Student Support
						</h3>
						<ul className='space-y-2'>
							<li>
								<Link to='/zen-mind' className='hover:text-[#F2C94C]'>
									Zen Mind Training
								</Link>
							</li>
							<li>
								<Link to='/counselling' className='hover:text-[#F2C94C]'>
									Counselling
								</Link>
							</li>
							<li>
								<Link to='/doubts' className='hover:text-[#F2C94C]'>
									Doubt Forum
								</Link>
							</li>
							<li>
								<Link to='/analytics' className='hover:text-[#F2C94C]'>
									Analytics
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className='text-[#E6A800] font-semibold mb-4'>Contact Us</h3>
						<ul className='space-y-2'>
							<li>Email: support@lms.com</li>
							<li>Phone: +1 234 567 8900</li>
							<li>Address: 123 Education Street</li>
						</ul>
					</div>

					{/* Social Links */}
					<div>
						<h3 className='text-[#E6A800] font-semibold mb-4'>Follow Us</h3>
						<div className='flex space-x-4'>
							<a href='#' className='hover:text-[#F2C94C]'>
								Facebook
							</a>
							<a href='#' className='hover:text-[#F2C94C]'>
								Twitter
							</a>
							<a href='#' className='hover:text-[#F2C94C]'>
								LinkedIn
							</a>
						</div>
					</div>
				</div>
				<div className='mt-8 pt-4 border-t border-gray-600 text-center'>
					<p>&copy; 2025 LMS. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
