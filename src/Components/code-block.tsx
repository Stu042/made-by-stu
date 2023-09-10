import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {foundation} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./code-block.css"

export interface CodeProps {
	codeString: string;
}

export class CodeBlock extends React.Component<CodeProps> {
	static defaultProps: { codeString: string };

	componentDidMount() {
		document.title = "How to Host a Simple Website";
	}

	render() {
		const codeString = this.props.codeString;
		if (codeString === "") {
			return(<></>);
		}
		return (
			<div className={"code-block"}>
				<SyntaxHighlighter language="c" style={foundation}>
					{codeString}
				</SyntaxHighlighter>
			</div>
		);
	}
}


CodeBlock.defaultProps = {
	codeString: ""
}
