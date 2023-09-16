import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Item from "./src/components/Item";
import { useEffect, useState } from "react";
import axios from "axios";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TopExchange from "./src/components/TopExchange";

export default function App() {
	const [data, setData] = useState({
		exchange: [],
		eur: {},
		usd: {},
	});

	const getData = async () => {
		const res = await axios.get("https://www.tcmb.gov.tr/kurlar/today.xml");

		if (res.status !== 200)
			return {
				status: false,
				exchange: [],
			};

		const xml = res.data;

		let newList = [];

		const list = xml.split('<Currency CrossOrder="');

		list.forEach((item, index) => {
			if (index > 0) {
				const symbol = item?.split('Kod="')[1]?.split('"')[0];
				const name = item?.split("<Isim>")[1]?.split("</Isim>")[0];
				let buying = item
					?.split("<ForexBuying>")[1]
					?.split("</ForexBuying>")[0];

				const buyingSplit = buying.split(".");
				const buyingTamLength = buyingSplit[0].length;
				const buyingOndalik = buyingSplit[1].slice(
					0,
					6 - buyingTamLength
				);

				buying = buyingSplit[0] + "." + buyingOndalik;

				let sales = item
					?.split("<ForexSelling>")[1]
					?.split("</ForexSelling>")[0];

				if (sales) {
					const salesSplit = sales.split(".");
					const salesTamLength = salesSplit[0].length;
					const salesOndalik = salesSplit[1].slice(
						0,
						6 - salesTamLength
					);

					sales = salesSplit[0] + "." + salesOndalik;
				}

				newList.push({
					symbol,
					name,
					buying,
					sales: sales || 0,
				});
			}
		});

		newList = newList.filter(
			(item) => !(item.sales === 0 || item.sales === 0)
		);

		setData({
			exchange: newList,
			eur: newList.find((item) => item.symbol === "EUR"),
			usd: newList.find((item) => item.symbol === "USD"),
		});
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.safearea}>
				<View style={styles.container}>
					<StatusBar style="light" />

					<FlatList
						ListHeaderComponent={
							<TopExchange eur={data.eur} usd={data.usd} />
						}
						data={data.exchange}
						style={{ width: "100%" }}
						renderItem={({ item }) => (
							<Item
								key={item?.symbol}
								symbol={item?.symbol}
								name={item?.name}
								buying={item?.buying}
								sales={item?.sales}
							/>
						)}
						keyExtractor={(item) => item.symbol}
					/>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	safearea: {
		flex: 1,
		backgroundColor: "#151336",
	},
	container: {
		flex: 1,
		backgroundColor: "#151336",
		alignItems: "center",
		justifyContent: "center",
	},
});
