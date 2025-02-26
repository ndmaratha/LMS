import React from "react";
import {
	LineChart,
	Line,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	PieChart,
	Pie,
	Cell,
} from "recharts";

const Analytics = () => {
	// Dummy data for test scores
	const testScores = [
		{ month: "Jan", Physics: 85, Chemistry: 78, Mathematics: 92 },
		{ month: "Feb", Physics: 88, Chemistry: 82, Mathematics: 88 },
		{ month: "Mar", Physics: 92, Chemistry: 85, Mathematics: 95 },
		{ month: "Apr", Physics: 86, Chemistry: 90, Mathematics: 89 },
		{ month: "May", Physics: 90, Chemistry: 88, Mathematics: 93 },
	];

	// Dummy data for attendance
	const attendanceData = [
		{ name: "Present", value: 85 },
		{ name: "Absent", value: 15 },
	];

	// Dummy data for subject-wise performance
	const subjectPerformance = [
		{ subject: "Physics", score: 88 },
		{ subject: "Chemistry", score: 85 },
		{ subject: "Mathematics", score: 92 },
	];

	const COLORS = ["#E6A800", "#C1272D", "#004A99"];

	return (
		<div className='p-6 bg-[#FFFFFF]'>
			<h1 className='text-2xl font-bold mb-6 text-[#012D5A]'>Analytics</h1>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
				{/* Test Score Trends */}
				<div className='bg-white rounded-lg shadow-md p-6'>
					<h2 className='text-[#004A99] font-semibold mb-4'>
						Test Score Trends
					</h2>
					<div className='h-[300px]'>
						<ResponsiveContainer width='100%' height='100%'>
							<LineChart data={testScores}>
								<CartesianGrid strokeDasharray='3 3' />
								<XAxis dataKey='month' />
								<YAxis />
								<Tooltip />
								<Legend />
								<Line type='monotone' dataKey='Physics' stroke='#E6A800' />
								<Line type='monotone' dataKey='Chemistry' stroke='#C1272D' />
								<Line type='monotone' dataKey='Mathematics' stroke='#004A99' />
							</LineChart>
						</ResponsiveContainer>
					</div>
				</div>

				{/* Subject Performance */}
				<div className='bg-white rounded-lg shadow-md p-6'>
					<h2 className='text-[#004A99] font-semibold mb-4'>
						Subject Performance
					</h2>
					<div className='h-[300px]'>
						<ResponsiveContainer width='100%' height='100%'>
							<BarChart data={subjectPerformance}>
								<CartesianGrid strokeDasharray='3 3' />
								<XAxis dataKey='subject' />
								<YAxis />
								<Tooltip />
								<Bar dataKey='score'>
									{subjectPerformance.map((entry, index) => (
										<Cell key={`cell-${index}`} fill={COLORS[index]} />
									))}
								</Bar>
							</BarChart>
						</ResponsiveContainer>
					</div>
				</div>

				{/* Attendance Overview */}
				<div className='bg-white rounded-lg shadow-md p-6'>
					<h2 className='text-[#004A99] font-semibold mb-4'>
						Attendance Overview
					</h2>
					<div className='h-[300px]'>
						<ResponsiveContainer width='100%' height='100%'>
							<PieChart>
								<Pie
									data={attendanceData}
									innerRadius={60}
									outerRadius={100}
									paddingAngle={5}
									dataKey='value'
								>
									{attendanceData.map((entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={COLORS[index % COLORS.length]}
										/>
									))}
								</Pie>
								<Tooltip />
								<Legend />
							</PieChart>
						</ResponsiveContainer>
					</div>
				</div>

				{/* Quick Stats */}
				<div className='bg-white rounded-lg shadow-md p-6'>
					<h2 className='text-[#004A99] font-semibold mb-4'>Quick Stats</h2>
					<div className='grid grid-cols-2 gap-4'>
						<div className='p-4 rounded-lg bg-[#E6A800] bg-opacity-10'>
							<p className='text-[#012D5A] font-medium'>Average Score</p>
							<p className='text-2xl font-bold text-[#E6A800]'>88.5%</p>
						</div>
						<div className='p-4 rounded-lg bg-[#C1272D] bg-opacity-10'>
							<p className='text-[#012D5A] font-medium'>Attendance Rate</p>
							<p className='text-2xl font-bold text-[#C1272D]'>85%</p>
						</div>
						<div className='p-4 rounded-lg bg-[#004A99] bg-opacity-10'>
							<p className='text-[#012D5A] font-medium'>Completion Rate</p>
							<p className='text-2xl font-bold text-[#004A99]'>75%</p>
						</div>
						<div className='p-4 rounded-lg bg-[#E6A800] bg-opacity-10'>
							<p className='text-[#012D5A] font-medium'>Total Tests</p>
							<p className='text-2xl font-bold text-[#E6A800]'>15</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
