import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import "./Main.css";
import useLocalStorage from "../hooks/useLocalStorage";

const Main = () => {
	const [html, setHtml] = useLocalStorage("html", "");
	const [css, setCss] = useLocalStorage("css", "");
	const [js, setJs] = useLocalStorage("js", "");
	const [srcDoc, setSrcDoc] = useState("");
	useEffect(() => {
		const timeout = setTimeout(() => {
			setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
		}, 400);

		return () => clearTimeout(timeout);
		// eslint-disable-next-line
	}, [html, css, js]);

	return (
		<div>
			<div className='top-container'>
				<Editor
					language='xml'
					displayName='HTML'
					value={html}
					onChange={setHtml}
				/>
				<Editor
					language='xml'
					displayName='CSS'
					value={css}
					onChange={setCss}
				/>
				<Editor
					language='xml'
					displayName='JS'
					value={js}
					onChange={setJs}
				/>
			</div>
			<div className='bottom-container'>
				<iframe
					srcDoc={srcDoc}
					title='output'
					sandbox='allow-scripts'
					width='100%'
					height='100%'
				></iframe>
			</div>
		</div>
	);
};

export default Main;
