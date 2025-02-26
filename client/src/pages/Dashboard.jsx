import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
	const location = useLocation();

	const summaryData = {
		courses: {
			total: 5,
			inProgress: 3,
		},
		liveClasses: {
			today: 2,
			nextClass: "Physics at 2:00 PM",
		},
		analytics: {
			averageScore: 85,
			attendance: "95%",
		},
	};

	return (
		<div className='min-h-screen bg-[#FFFFFF]'>
			{/* Dashboard Summary - Always visible */}
			<div className='p-6'>
				<h1 className='text-2xl font-bold mb-4 text-[#012D5A]'>Dashboard</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{/* Courses Card */}
					<Link
						to='/dashboard/courses'
						className={`p-4 rounded-lg bg-white shadow-md border-l-4 border-[#E6A800] hover:shadow-lg transition-shadow ${
							location.pathname === "/dashboard/courses"
								? "ring-2 ring-[#E6A800]"
								: ""
						}`}
					>
						<h2 className='text-[#004A99] font-semibold'>Courses</h2>
						<div className='mt-3'>
							<p className='text-[#012D5A]'>
								Total Courses: {summaryData.courses.total}
							</p>
							<p className='text-[#C1272D] mt-1'>
								In Progress: {summaryData.courses.inProgress}
							</p>
						</div>
					</Link>

					{/* Live Classes Card */}
					<Link
						to='/dashboard/live-classes'
						className={`p-4 rounded-lg bg-white shadow-md border-l-4 border-[#C1272D] hover:shadow-lg transition-shadow ${
							location.pathname === "/dashboard/live-classes"
								? "ring-2 ring-[#C1272D]"
								: ""
						}`}
					>
						<h2 className='text-[#004A99] font-semibold'>Live Classes</h2>
						<div className='mt-3'>
							<p className='text-[#012D5A]'>
								Classes Today: {summaryData.liveClasses.today}
							</p>
							<p className='text-[#C1272D] mt-1'>
								Next: {summaryData.liveClasses.nextClass}
							</p>
						</div>
					</Link>

					{/* Analytics Card */}
					<Link
						to='/dashboard/analytics'
						className={`p-4 rounded-lg bg-white shadow-md border-l-4 border-[#004A99] hover:shadow-lg transition-shadow ${
							location.pathname === "/dashboard/analytics"
								? "ring-2 ring-[#004A99]"
								: ""
						}`}
					>
						<h2 className='text-[#004A99] font-semibold'>Analytics</h2>
						<div className='mt-3'>
							<p className='text-[#012D5A]'>
								Average Score: {summaryData.analytics.averageScore}%
							</p>
							<p className='text-[#C1272D] mt-1'>
								Attendance: {summaryData.analytics.attendance}
							</p>
						</div>
					</Link>
				</div>
			</div>

			{/* Nested Route Content */}
			<div className='mt-6 border-t border-gray-200'>
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
