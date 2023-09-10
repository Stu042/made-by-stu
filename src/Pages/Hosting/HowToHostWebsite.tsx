import React from "react";
import Title from "../../Components/Title/title";
import {Footer} from "../../Components/footer";

class HowToHostWebsite extends React.Component {
	componentDidMount() {
		document.title = "How to Host a Simple Website";
	}

	render() {
		return <>
			<Title title={"How to Host a Simple Website"} breadcrumbs={[{uiName: "Main Page", link: "/"}]}/>
			<p>This is a self hosted website. I rent the domain name from <a href={"https://www.namecheap.com"}
																			 target="_blank"
																			 rel="noreferrer">NameCheap</a> - not an
				affiliated link.</p>
			<img className={"small-img"} alt={"Search for NameCheap"} src={"/images/SearchForNameCheap.png"}/>
			<p>and searching on NameCheap is easy - mind you finding a name you like which hasn't already been taken is
				not always..</p>
			<img className={"small-img"} alt={"Search within NameCheap"} src="/images/NameCheapDomainName.png"/>
			<p>My browser started to use 100% of cpu when on this page, I'm guessing their javascript is running a tight
				loop to react to your input quickly. Not really bad but a bit euch, events are much nicer way to do
				this.</p>
			<p>You only want to get a domain name here, don't bother with their other services, if you want to keep it
				minimum and cheap.</p>
			<h2>Location, Location, Location</h2>
			<p>Having a domain name is just one part though, I also required somewhere to put this site (host) along
				with a method for people to get there.</p>
			<img className={"small-img"} alt={"Search for Cloudflare"} src="/images/SearchForCloudflare.png"/>
			<p>So next step was to get DNS setup and <a href={"https://www.cloudflare.com"} target="_blank"
														rel="noreferrer">Cloudflare</a> seems to be the first choice for
				a lot of people and with it being free for the basic package - which provides everything I would want -
				I couldn't see any reason not to follow the sheep ;)</p>
			<p>Just sign up for an account at Cloudflare and you will be able to link your DomainName.</p>
			<p>On the DNS &gt; Settings page you will probably see a request to change the DNS on NameCheap. Copy the
				info here and go to NameCheap Domain List, select Manage and enter the nameservers into the two boxes
				here and click the green tick to confirm the edit. This is just to ensure we don't have different
				nameservers serving conflicting information - this prevents an awkward issue to troubleshoot.</p>
			<img className={"small-img"} alt={"DNS setting within Cloudflare"} src="/images/DnsSettings.png"/>
			<Footer/>
		</>
	}
}

export default HowToHostWebsite;