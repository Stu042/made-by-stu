import React from "react";
import styles from "./PageIndex.module.css"

export interface PageIndexProps {
    items: PageIndexItem[];
}

export interface PageIndexItem {
	link: string;
	text: string;
	description: string;
}

class PageIndex extends React.Component<PageIndexProps> {
	static defaultProps: { items: PageIndexItem[]; };
	render() {
		const items = this.props.items;
		return <ul className={styles.container}>
			{
				items.map(function (value) {
					return <li className={styles.item} key={value.link}>
						<a href={value.link}>{value.text}</a>
						<p className={styles.info}>{value.description}</p>
					</li>
				})
			}
		</ul>
    }
}

PageIndex.defaultProps = {
    items: []
}

export default PageIndex;