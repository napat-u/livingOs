import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
	const [form, setForm] = useState({
		id: '',
		password: ''
	})

	const handleInput = name => text => {
		
		setForm({
			...form,
			[name]: text
		})
	}

	const formConfirm = () => {
		if (form.id.length < 4) {
			return alert('ID must have more than 4 characters')
		} else if (form.password.length < 6) {
			return alert('Password must have more than 4 characters')
		}
		setForm({
			id: '',
			password: ''
		})
		return navigation.navigate('Home')
	}

	return (
		<View style={styles.container}>
			<View style={styles.logoStyle}>
				<Text style={{ fontSize: 35}}>Logo</Text>
			</View>
			<View style={styles.formContainer}>
				<View style={styles.formWrap}>
					<Text style={styles.labelStyle}>ID</Text>
					<TextInput value={form.id} autoCorrect={false} autoCapitalize="none" onChangeText={handleInput('id')} style={styles.textInputStyle} />
				</View>
				<View style={[styles.formWrap, { marginTop: '5%'}]}>
					<Text style={styles.labelStyle}>Password</Text>
					<TextInput value={form.password} autoCapitalize="none" autoCorrect={false} onChangeText={handleInput('password')} secureTextEntry={true} style={styles.textInputStyle} />
				</View>
				<TouchableOpacity onPress={formConfirm} style={styles.buttonStyle}>
					<Text>Login</Text>
				</TouchableOpacity>
			</View>
			
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	logoStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: .3
	},
	formContainer: {
		flex: .7,
		marginHorizontal: '5%',
		alignItems: 'center' 
	},
	formWrap: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	labelStyle: {
		flex: .3
	},
	textInputStyle: {
		borderWidth: 1,
		borderColor: 'black',
		flex: .7,
		borderRadius: 7,
		 paddingVertical: '1%'
	},
	buttonStyle: {
		marginTop: '15%',
		borderWidth: 1,
		borderColor: 'skyblue',
		paddingHorizontal: '8%',
		paddingVertical: '3%',
		borderRadius: 15,
		backgroundColor: 'skyblue'
	}
})

export default Login;