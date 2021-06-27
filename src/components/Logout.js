import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Logout = ({ navigation }) => {
	return (
		<View style={styles.buttonContainer}>
			<TouchableOpacity 
			onPress={() => navigation.navigate('Login')}
			style={styles.buttonStyle}>
				<Text>Logout</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '5%'
	},
	buttonStyle: {
		alignItems: 'center',
		backgroundColor: 'rgba(255, 99, 71, .5)',
		paddingHorizontal: '8%',
		paddingVertical: '3%',
		borderRadius: 15
	}
})

export default Logout; 