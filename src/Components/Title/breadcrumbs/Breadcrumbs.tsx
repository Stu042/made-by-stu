import React from 'react';
import Breadcrumb, {BreadcrumbProp} from "./Breadcrumb";
import styles from './Breadcrumbs.module.css';


export interface BreadcrumbsProps {
	breadcrumbs: BreadcrumbProp[]
}

class Breadcrumbs extends React.Component<BreadcrumbsProps> {
	static defaultProps: { breadcrumbs: BreadcrumbProp[]; };
	render() {
		const breadcrumbs = this.props.breadcrumbs;
		return (
			<nav className={styles.breadcrumb}>
				{
					breadcrumbs.map(function (value, index, array) {
						if (index < array.length - 1) {
							return <>
								<Breadcrumb index={index} uiName={value.uiName} link={value.link}/>
								<span key={"spacer" + value.index} className={styles.spacer}>::</span>
							</>
						}
						return <Breadcrumb index={0} uiName={value.uiName} link={value.link}/>
					})
				}
			</nav>
		);
	}
}

Breadcrumbs.defaultProps = {
	breadcrumbs: [
		{
			index: 0,
			uiName: "Main Index",
			link: "/index"
		}
	]
}

export default Breadcrumbs;
