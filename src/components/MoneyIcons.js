import React from "react";
import Usd from "./Usd";
import Eur from "./Eur";
import Gbp from "./Gbp";

const MoneyIcons = ({ name, size = "36", color = "#fefefe", stroke }) => {
	const list = {
		USD: <Usd size={size} color={color} stroke={stroke} />,
		EUR: <Eur size={size} color={color} stroke={stroke} />,
		GBP: <Gbp size={size} color={color} stroke={stroke} />,
	};

	return list[name];
};

export default MoneyIcons;
