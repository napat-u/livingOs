import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ListViewButton = ({ navigation }) => {
	return (
		<View style={styles.buttonContainer}>
			<TouchableOpacity 
			onPress={() => navigation.navigate('ListView')}
			style={styles.buttonStyle}>
				<Text>ListView</Text>
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
		backgroundColor: '#4FC3F7',
		paddingHorizontal: '8%',
		paddingVertical: '3%',
		borderRadius: 15
	}
})

export default ListViewButton; 