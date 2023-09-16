import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MoneyIcons from "./MoneyIcons";

function TopExchange({ usd, eur }) {
	return (
		<View style={styles.exchangeContainer}>
			<View style={styles.container}>
				<View style={styles.title}>
					<View style={styles.iconContianer}>
						<MoneyIcons
							size="72"
							color="#22203A"
							stroke="#555270"
							name={usd?.symbol}
						/>
					</View>
					<Text style={styles.symbol}>{usd?.symbol}</Text>
				</View>

				<View style={styles.exchagne}>
					<Text style={styles.text}>Alış</Text>
					<Text style={styles.price}>{usd?.buying}</Text>
				</View>
				<View style={styles.border} />
				<View style={styles.exchagne}>
					<Text style={styles.text}>Satış</Text>
					<Text style={styles.price}>{usd?.sales}</Text>
				</View>
			</View>
			<View style={styles.container}>
				<View style={styles.title}>
					<View style={styles.iconContianer}>
						<MoneyIcons
							size="72"
							color="#22203A"
							stroke="#555270"
							name={eur?.symbol}
						/>
					</View>
					<Text style={styles.symbol}>{eur?.symbol}</Text>
				</View>

				<View style={styles.exchagne}>
					<Text style={styles.text}>Alış</Text>
					<Text style={styles.price}>{eur?.buying}</Text>
				</View>
				<View style={styles.border} />
				<View style={styles.exchagne}>
					<Text style={styles.text}>Satış</Text>
					<Text style={styles.price}>{eur?.sales}</Text>
				</View>
			</View>
		</View>
	);
}

export default TopExchange;

const styles = StyleSheet.create({
	exchangeContainer: {
		flexDirection: "row",
		paddingTop: 30,
		height: 150,
		paddingHorizontal: 4,
		marginBottom: 4,
	},
	container: {
		flex: 1,
		marginHorizontal: 8,
		paddingVertical: 8,
		paddingHorizontal: 16,
		backgroundColor: "#fff1",
		borderRadius: 24,
		borderWidth: 1,
		borderColor: "#fff2",
	},
	title: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
		height: 48,
		paddingLeft: 72,
		justifyContent: "flex-end",
	},
	iconContianer: {
		position: "absolute",
		width: 72,
		height: 72,
		top: -40,
		left: -18,
	},
	symbol: {
		fontSize: 21,
		fontWeight: "700",
		color: "#EBECED",
	},
	exchagne: {
		alignItems: "center",
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	border: {
		width: "100%",
		height: 1,
		backgroundColor: "#555270",
		marginVertical: 8,
	},
	text: {
		fontSize: 14,
		color: "#555270",
		width: 50,
	},
	price: {
		fontSize: 16,
		fontWeight: "300",
		color: "#EBECED",
	},
});
