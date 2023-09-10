import React from 'react';

export interface BreadcrumbProp {
    index?: number,
    uiName: string,
    link: string
}

class Breadcrumb extends React.Component<BreadcrumbProp> {
    static defaultProps: { index: number, uiName: string, link: string };

    render() {
        const uiName = this.props.uiName;
        const link = this.props.link;
        const index = this.props.index;
        return (
            <a key={index} href={link}>{uiName}</a>
        );
    }
}

Breadcrumb.defaultProps = {
    index: 0,
    uiName: "Main Index",
    link: "/index"
}

export default Breadcrumb
