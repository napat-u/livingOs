import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const FullScreenImage = ({ route }) => {
	const { data } = route.params
	return (
		<View style={styles.imageContainer}>
			<Image source={{ uri: data }} style={styles.imageStyle} resizeMode="contain" />
		</View>
	)
}

const styles = StyleSheet.create({
	imageContainer: {
		flex: 1,
		backgroundColor: 'black'
	},
	imageStyle: {
		width: '100%', 
		height: '100%'
	}
})

export default FullScreenImage;