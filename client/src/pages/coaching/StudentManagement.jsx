import React from "react";

const StudentManagement = () => {
	const students = [
		{
			id: 1,
			name: "John Doe",
			course: "Physics",
			progress: 75,
			attendance: 90,
		},
		{
			id: 2,
			name: "Jane Smith",
			course: "Chemistry",
			progress: 85,
			attendance: 95,
		},
	];

	return (
		<div className='min-h-screen bg-[#FFFFFF] p-6'>
			<h1 className='text-2xl font-bold text-[#012D5A] mb-6'>
				Student Management
			</h1>
			<div className='bg-white rounded-lg shadow-md'>
				<div className='overflow-x-auto'>
					<table className='w-full'>
						<thead className='bg-[#012D5A] text-white'>
							<tr>
								<th className='px-6 py-3 text-left'>Name</th>
								<th className='px-6 py-3 text-left'>Course</th>
								<th className='px-6 py-3 text-left'>Progress</th>
								<th className='px-6 py-3 text-left'>Attendance</th>
								<th className='px-6 py-3 text-left'>Actions</th>
							</tr>
						</thead>
						<tbody>
							{students.map((student) => (
								<tr key={student.id} className='border-b'>
									<td className='px-6 py-4 text-[#012D5A]'>{student.name}</td>
									<td className='px-6 py-4 text-[#004A99]'>{student.course}</td>
									<td className='px-6 py-4'>
										<div className='w-full bg-gray-200 rounded-full h-2.5'>
											<div
												className='bg-[#E6A800] h-2.5 rounded-full'
												style={{ width: `${student.progress}%` }}
											></div>
										</div>
									</td>
									<td className='px-6 py-4 text-[#C1272D]'>
										{student.attendance}%
									</td>
									<td className='px-6 py-4'>
										<button className='text-[#004A99] hover:text-[#C1272D]'>
											View Details
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default StudentManagement;
