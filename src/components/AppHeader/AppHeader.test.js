import * as React from "react";
import * as ReactDOM from "react-dom";
import AppHeader from "./AppHeader";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<AppHeader/>, div);
})