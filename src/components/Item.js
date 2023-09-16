import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

const Item = ({ symbol, name, buying, sales }) => {
	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<Image
					style={styles.icon}
					source={{
						uri:
							"https://www.tcmb.gov.tr/kurlar/kurlar_tr_dosyalar/images/" +
							symbol +
							".gif",
					}}
				/>
			</View>
			<View style={styles.nameContainer}>
				<Text style={styles.nameTitle}>{symbol}</Text>
				<Text style={styles.nameText}>{name}</Text>
			</View>
			<View style={styles.titleContainer}>
				<Text style={styles.changeTitle}>Alıs: </Text>
				<Text style={styles.changeTitle}>Satış: </Text>
			</View>
			<View style={styles.changeContainer}>
				<Text style={styles.changeText}>{buying}</Text>
				<Text style={styles.changeText}>{sales}</Text>
			</View>
		</View>
	);
};

export default Item;

const styles = StyleSheet.create({
	container: {
		width: width - 24,
		height: 72,
		borderRadius: 20,
		backgroundColor: "#fff1",
		marginHorizontal: 12,
		marginVertical: 6,
		borderWidth: 1,
		borderColor: "#fff2",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	iconContainer: {
		width: 48,
		height: 48,
		borderRadius: 24,
		backgroundColor: "#fff1",
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 12,
	},
	icon: {
		width: 24,
		height: 24,
	},
	changeContainer: {
		height: 72,
		justifyContent: "center",
		width: 72,
	},
	changeText: {
		color: "#EBECED",
		fontSize: 14,
		fontWeight: "bold",
		paddingVertical: 3,
	},
	titleContainer: {
		height: 72,
		justifyContent: "center",
		width: 52,
	},
	changeTitle: {
		color: "#6D6F76",
		fontSize: 14,
		paddingVertical: 3,
	},
	nameContainer: {
		height: 72,
		justifyContent: "center",
		flex: 1,
	},
	nameTitle: {
		color: "#EBECED",
		fontSize: 14,
		fontWeight: "bold",
		paddingVertical: 3,
	},
	nameText: {
		color: "#6D6F76",
		fontSize: 12,
		paddingVertical: 3,
	},
});
