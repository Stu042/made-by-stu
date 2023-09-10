import React from 'react';
import './title.css';
import Breadcrumbs from "./breadcrumbs/Breadcrumbs";
import {BreadcrumbProp} from "./breadcrumbs/Breadcrumb";


export interface TitleProps {
	title: string,
	breadcrumbs: BreadcrumbProp[]
}

class Title extends React.Component<TitleProps> {
	static defaultProps: { title: string; breadcrumbs: string[]; };

	render() {
		const title = this.props.title;
		const breadcrumbs = this.props.breadcrumbs;
		return (
			<>
				<h1>Welcome to Made by Stu</h1>
				<h2 className={"sub-title"}>{title}</h2>
				<Breadcrumbs breadcrumbs={breadcrumbs}/>
			</>
		);
	}
}


Title.defaultProps = {
	title: "Hello",
	breadcrumbs: ["/index"]
};


export default Title;
