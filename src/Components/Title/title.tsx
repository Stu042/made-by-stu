import React from 'react';
import Breadcrumbs, {BreadcrumbItem} from "./breadcrumbs/Breadcrumbs";
import styles from "./title.module.css"


export interface TitleProps {
	title: string,
	breadcrumbs: BreadcrumbItem[]
}


class Title extends React.Component<TitleProps> {
	static defaultProps: { title: string; breadcrumbs: string[]; };

	render() {
		const title = this.props.title;
		const breadcrumbs = this.props.breadcrumbs;
		return (
			<>
				<h1>Welcome to Made by Stu</h1>
				<h2 className={styles.subTitle}>{title}</h2>
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
