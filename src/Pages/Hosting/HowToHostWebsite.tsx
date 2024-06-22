import React from "react";
import Title from "../../Components/Title/title";
import Footer from "../../Components/footer";
import pageStyles from "../pages.module.css"

class HowToHostWebsite extends React.Component {
	componentDidMount() {
		document.title = "How to Host a Simple Website";
	}

	render() {
		return <>
			<Title title={"How to Host a Simple Website"} breadcrumbs={[{uiName: "Main Page", link: "/"}]}/>
			<p>This is a self hosted website. I rent the domain name from <a href={"https://www.namecheap.com"}
																			 target="_blank"
																			 rel="noreferrer">NameCheap</a>.</p>
			<img className={pageStyles.smallImg} alt={"Search for NameCheap"} src={"/images/SearchForNameCheap.png"}/>
			<p>and searching on NameCheap is easy - finding a name you like which hasn't already been taken is
				not always...</p>
			<img className={pageStyles.smallImg} alt={"Search within NameCheap"} src="/images/NameCheapDomainName.png"/>
			<p>You only want to get a domain name here, don't bother with their other services, if you want to keep it
				minimum and cheap.</p>
			<h2>Location, Location, Location</h2>
			<p>The domain name is just part one, we also need somewhere to put this site (a host) along
				with a method for people to visit.</p>
			<img className={pageStyles.smallImg} alt={"Search for Cloudflare"} src="/images/SearchForCloudflare.png"/>
			<p>Next step is to get DNS setup and <a href={"https://www.cloudflare.com"} target="_blank"
														rel="noreferrer">Cloudflare</a> seems to be the first choice for
				a lot of people and it's free for the basic package - which is plenty for us.</p>
			<p>Just sign up for an account at Cloudflare and you will be able to link your DomainName.</p>
			<p>On the DNS &gt; Settings page you will probably see a request to change the DNS on NameCheap. Copy the
				info here and go to NameCheap Domain List, select Manage and enter the nameservers into the two boxes
				here and click the green tick to confirm the update. This is just to ensure we don't have different
				nameservers serving conflicting information - this prevents an awkward issue to troubleshoot.</p>
			<img className={pageStyles.smallImg} alt={"DNS setting within Cloudflare"} src="/images/DnsSettings.png"/>
			<Footer/>
		</>
	}
}


export default HowToHostWebsite;
