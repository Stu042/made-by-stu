import React from 'react';
import Breadcrumb from "./Breadcrumb";
import styles from './Breadcrumbs.module.css';


export interface BreadcrumbsProps {
	breadcrumbs: BreadcrumbItem[]
}
export interface BreadcrumbItem {
	uiName: string,
	link: string
}


class Breadcrumbs extends React.Component<BreadcrumbsProps> {
	static defaultProps: { breadcrumbs: BreadcrumbItem[]; };
	render() {
		const breadcrumbs = this.props.breadcrumbs;
		return (
			<nav key={1} className={styles.breadcrumb}>
				{
					breadcrumbs.map(function (value, index, array) {
						if (index < array.length - 1) {
							return <>
								<Breadcrumb index={index} uiName={value.uiName} link={value.link}/>
								<span className={styles.spacer}>::</span>
							</>
						}
						return <Breadcrumb index={array.length} uiName={value.uiName} link={value.link}/>
					})
				}
			</nav>
		);
	}
}


Breadcrumbs.defaultProps = {
	breadcrumbs: [
		{
			uiName: "Main Index",
			link: "/index"
		}
	]
}


export default Breadcrumbs;
