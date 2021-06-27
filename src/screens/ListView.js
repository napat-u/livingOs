import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
const ListView = () => {
	const [list, setList] = useState([])

	const fetchData = async () => {
		// const data = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5')
		// .then(res => res.json())
		// .then(res => res)
		const listLength = list.length
		const req = axios.CancelToken.source()
		const data = await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=${listLength}&_limit=3`, {
			cancelToken: req.token
		})
		.then(res => res.data)
		if ( list.length === 0 ) {
			return setList(data)
		}
		list.includes(item => {
			data.map(newData => {
				if (item.id === newData.id) return
			})
		})
		return setList([...list, ...data])
	}
	useEffect(() => {
		let isCancel = false;
		if (!isCancel) {
			fetchData()
		}
		
		return () => {
			isCancel = true;
		}
	}, [])

	const isNearestToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
		const paddingToBottom = 15;
		return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom
	}

	const MapListView = () => {
		return list?.map((item, index) => {
			return (
				<View key={item.id} style={styles.listContainer} >
					<Image source={{ uri: item.url }} style={styles.imageStyle} resizeMode="cover" />
					<Text style={styles.titleStyle}>{item.title}</Text>
				</View>
			)
		})
	}
	return (
		<ScrollView 
		onScroll={({nativeEvent}) => {
			if (isNearestToBottom(nativeEvent)) {
				fetchData()
			}
		}} 
		style={styles.container}
		scrollEventThrottle={400}
		>
			<MapListView />
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	listContainer: {
		width: '100%', 
		height: 300, 
		alignItems: 'center'
	},
	imageStyle: {
		width: '100%',
		height: '70%'
	},
	titleStyle: {
		fontWeight: 'bold' , 
		fontSize: 20 
	}
})

export default ListView;

