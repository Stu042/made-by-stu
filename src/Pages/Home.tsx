import React from "react";
import Title from "../Components/Title/title";
import Footer from "../Components/footer";
import PageIndex from "../Components/PageIndex";


class Home extends React.Component {
	componentDidMount() {
		document.title = "Home Page";
	}

	render() {
		return <>
			<header>
				<Title title={"Main Page"} breadcrumbs={[]}/>
				<section>This will slowly grow as I add new tutorials and information. At the moment though, it is very
					quiet in here.
				</section>
			</header>
			<PageIndex items={[
				{
					text: "How to Host a Website",
					link: "HowToHostWebsite",
					description: "This tutorial shows you how to host your own site - and how I host this one. Originally this site was written just using Html and CSS, but since then I am now using React, that wont matter here though as this is about how to get a host name, DNS, hosting and ways of keeping it all in sync using as cheap and minimal setup as is reasonable."
				},
				{
					text: "OpenGL Tutorials",
					link: "/OpenGL",
					description: "Group of tutorials, starting with the simplest of OpenGL applications. The aim here is to have code that is portable, concise amd will work in as many environments as possible."
				}
			]}/>
			<Footer/>
		</>
	}
}


export default Home;