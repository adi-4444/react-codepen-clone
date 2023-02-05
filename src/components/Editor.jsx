import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "./Editor.css";

const Editor = ({ displayName, language, value, onChange }) => {
	const [open, setOpen] = useState(true);
	const handleChange = (editor, data, value) => {
		onChange(value);
	};
	return (
		<div className={`editor-wrapper ${open ? "" : "collapsed"}`}>
			<div className='editor-title'>
				{displayName}
				<button
					className='open-close-btn'
					onClick={(prevOpen) => setOpen((prevOpen) => !prevOpen)}
				>
					{open ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='1.5em'
							height='1.5em'
							viewBox='0 0 24 24'
						>
							<path
								fill='white'
								d='m14.567 8.03l6.343-6.26l1.405 1.423l-6.323 6.24l3.57.015l-.009 2l-7-.028l.028-7l2 .008l-.014 3.601Zm-6.588 6.513l-3.57.003l-.002-2l7-.006l.006 7l-2 .002l-.003-3.602l-6.314 6.29l-1.411-1.416l6.294-6.271Z'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='1.5em'
							height='1.5em'
							viewBox='0 0 24 24'
						>
							<path
								fill='white'
								d='M10 21v-2H6.41l4.5-4.5l-1.41-1.41l-4.5 4.5V14H3v7h7m4.5-10.09l4.5-4.5V10h2V3h-7v2h3.59l-4.5 4.5l1.41 1.41Z'
							/>
						</svg>
					)}
				</button>
			</div>
			<ControlledEditor
				onBeforeChange={handleChange}
				value={value}
				className='code-editor-wrapper'
				options={{
					lineWrapping: true,
					lint: true,
					mode: language,
					lineNumbers: true,
					theme: "material",
				}}
			/>
		</div>
	);
};

export default Editor;
