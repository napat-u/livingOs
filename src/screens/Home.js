import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SliderComponent from '../components/SliderComponent';
import Logout from '../components/Logout';
import ListViewButton from '../components/ListViewButton';

const Home = ({ navigation }) => {

	return (
		<View>
			<SliderComponent navigation={navigation} />
			<ListViewButton navigation={navigation} />
			<Logout navigation={navigation} />
		</View>
	)
}

export default Home;