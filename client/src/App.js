import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import {ToastContainer} from "react-toastify";
import Form from "./pages/Form";
import Upload from "./pages/Upload";
import Search from "./pages/Search";

function App() {
	return (
		<Router>
			<div className="App">
				<ToastContainer />
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Header />
								<Body />
								<Footer />
							</>
						}
					/>
					<Route
						path="Search/*"
						element={
							<>
								<Header />
								<Search/>
								<Footer />
							</>
						}
					/>
					{/* <Route
						path="Subject/*"
						element={
							<>
								<Header />
								<Subject />
								<Footer />
							</>
						}
					/> */}
					<Route
						path="Form/"
						element={
							<>
								<Form />
							</>
						}
					/>
					<Route
						path="Upload/"
						element={
							<>
								<Header />
								<Upload />
								<Footer />
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
