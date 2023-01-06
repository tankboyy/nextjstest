import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

type LayoutTypes = {
	children: ReactNode
}

export default function Layout({children}: LayoutTypes) {
	return (
		<>
			<Header/>
			<h1>레이아웃</h1>
			<div>{children}</div>
			<Footer/>
		</>
	)
}
