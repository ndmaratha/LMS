import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";

// Import your components (you'll need to create these)
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import CourseLibrary from "./pages/CourseLibrary";
import LiveClasses from "./pages/LiveClasses";
import ZenMindTraining from "./pages/ZenMindTraining";
import Counselling from "./pages/Counselling";
import MockTests from "./pages/MockTests";
import Analytics from "./pages/Analytics";
import DoubtForum from "./pages/DoubtForum";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CenterRegistration from "./pages/coaching/CenterRegistration";
import StudentManagement from "./pages/coaching/StudentManagement";

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}

export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/coaching",
				children: [
					{
						path: "register",
						element: <CenterRegistration />,
					},
					{
						path: "students",
						element: <StudentManagement />,
					},
				],
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "/register",
				element: <RegisterPage />,
			},
			{
				path: "/dashboard",
				element: <Dashboard />,
				children: [
					{
						path: "courses",
						element: <CourseLibrary />,
					},
					{
						path: "live-classes",
						element: <LiveClasses />,
					},
					{
						path: "analytics",
						element: <Analytics />,
					},
				],
			},
			{
				path: "/zen-mind",
				element: <ZenMindTraining />,
			},
			{
				path: "/counselling",
				element: <Counselling />,
			},
			{
				path: "/mock-tests",
				element: <MockTests />,
			},
			{
				path: "/analytics",
				element: <Analytics />,
			},
			{
				path: "/doubts",
				element: <DoubtForum />,
			},
		],
	},
]);

export default App;
