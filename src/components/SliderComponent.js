import React, { useState, useRef } from 'react';
import { View, Image, Dimensions, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window')

const SliderComponent = ({ navigation }) => {
	const carouselRef = useRef(null)
	const [carouselItem, setCarouselItem] = useState([
		{
			type: 'url',
			url_image: 'https://www.thelivingos.com/wp-content/uploads/2021/03/767px-01.png',
			nav_outside_to: 'https://www.thelivingos.com/ ',
			lat: 0,
			long: 0
		},
		{
			type: 'map',
			url_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/533px-Google_Maps_Logo_2020.svg.png',
			nav_outside_to: '',
			lat: 13.759081193594726,
			long: 100.56818430716469
		},
		{
			type: 'picture',
			url_image: 'https://www.petguide.com/wp-content/uploads/2016/10/Istanbul-Famous-Fat-Cat-copy.jpg',
			nav_outside_to: '',
			lat: '',
			long: ''
		}
	])

	const renderSnapCarousel = ({ item, index }) => {
		return (
			<View key={index}>
				<TouchableOpacity onPress={() => decisionToOpen(item)}>
					<Image resizeMode="contain" source={{ uri: item.url_image }} style={styles.imageStyle} />
				</TouchableOpacity>
			</View>
		)
	}

	function decisionToOpen(item) {
		if (item.type === 'url') {
			return Linking.openURL('https://www.thelivingos.com').catch(err => console.error(err))
		} else if (item.type === 'map') {
			const position = `${item.lat},${item.long}`
			return Linking.openURL(`https://maps.google.com/?q=${position}`)
		} else if (item.type === 'picture') {
			return navigation.navigate('FullScreenImage', { data: item.url_image })
		}
	}
	return (
		<View style={styles.carouselContainer}>
			<Carousel 
				layout="default"
				ref={carouselRef}
				data={carouselItem}
				renderItem={renderSnapCarousel}
				sliderWidth={width}
				itemWidth={width}
				activeSlideAlignment="center"
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	imageStyle: {
		height: '100%',
		width: '100%'
	},
	carouselContainer: {
		height: 200,
		width: '100%',
		marginTop: '5%'
	}
})

export default SliderComponent