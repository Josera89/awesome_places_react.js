import React, { Component } from 'react';
import { View, Text , Button, TextInput, StyleSheet } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
	loginHandler = () => {
		startMainTabs();
	}

	render() {
		return (
			<View style={styles.container}>
					<Text>Please Log In</Text>
					<Button title="Switch to Login" />
					<TextInput placeholder="Your E-Mail Address" style={styles.input}/>
				<TextInput placeholder="Password" style={styles.input}/>
				<TextInput placeholder="Confirm Password" style={styles.input}/>
					<Button title="Submit" onPress={this.loginHandler}></Button>
			</View>
		);
	}
}

const styles =StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}, 
	input : {
		width: "80%"
	}
});

export default AuthScreen;