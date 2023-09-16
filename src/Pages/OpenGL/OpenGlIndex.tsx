import React from "react";
import Footer from "../../Components/footer";
import Title from "../../Components/Title/title";
import PageIndex from "../../Components/PageIndex";

class OpenGlIndex extends React.Component {
	componentDidMount() {
		document.title = "OpenGl Index";
	}

	render() {
		return <>
			<header>
				<Title title={"OpenGL Tutorial Index"}
					   breadcrumbs={[{uiName: "Main Page", link: "/"}]}/>
				<p>Only one so far, and its a very basic - but an excellent starting point.</p>
				<p>Looking to learn OpenGL 4, this is the place to be. The idea here is to show <b>cross
					platform</b> compatible code that will run on Windows, Linux and Mac - at least.</p>
				<p>We are using SDL and OpenGL, two of the most cross platform compatible C libraries available. Also
					the
					style of C will be mostly ANSI C, although later I will show some C++ as well - kinda I tend to use
					more of a
					C-- style, so only using classes where I think it makes sense.</p>
			</header>
			<h3>Tutorials</h3>
			<PageIndex items={[
				{
					link: "OpenGL/HelloWorld",
					text: "Draw a Triangle - its more exciting than it sounds",
					description: "Coded in C, using OpenGL, SDL and GLew. This is not the way to code with OpenGL -" +
						" or really anything thing else. We are using one large function so we can show the" +
						" components required to get a simple shape rendered to a window. This will" +
						" be used as a starting point as we develop this app into something a bit more reasonable."
				}
			]}/>
			<Footer/>
		</>
	}
}

export default OpenGlIndex;
