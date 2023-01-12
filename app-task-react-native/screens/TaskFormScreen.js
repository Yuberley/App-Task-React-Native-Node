import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import Layout from '../components/Layout';
import { saveTask, updateTask } from '../api';

const TaskFormScreen = ({ navigation, route }) => {
	const [task, setTask] = useState({
		title: '',
		description: '',
	});

	const handleTextChange = (name, value) => {
		setTask({ ...task, [name]: value });
	};

	const handleSubmit = () => {
		if (route.params?.item) {
			updateTask({ ...task, id: route.params.item.id })
				.then((res) => {
					navigation.navigate('Home');
				})
				.catch((err) => console.log(err));
		}

		if (!route.params?.item) {
			saveTask(task)
				.then((res) => {
					navigation.navigate('Home');
				})
				.catch((err) => console.log(err));
		}
	};

	useEffect(() => {
		if (route.params?.item) {
			navigation.setOptions({ title: 'Edit Task' });
			setTask(route.params.item);
		}
	}, [route.params?.item]);

	return (
		<Layout>
			<TextInput
				style={styles.input}
				value={task.title}
				placeholder="Title"
				placeholderTextColor={'#999'}
				onChangeText={(text) => handleTextChange('title', text)}
			/>
			<TextInput
				style={styles.input}
				value={task.description}
				placeholder="Description"
				placeholderTextColor={'#999'}
				onChangeText={(text) => handleTextChange('description', text)}
			/>
			<TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
				<Text style={styles.buttonText}>
					{route.params?.item ? 'Update' : 'Save'}
				</Text>
			</TouchableOpacity>
		</Layout>
	);
};

const styles = StyleSheet.create({
	input: {
		width: '90%',
		height: 50,
		padding: 10,
		fontSize: 14,
		textAlign: 'center',
		color: '#ffffff',
		borderColor: '#10ac84',
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 10,
	},
	button: {
		width: '90%',
		height: 50,
		padding: 10,
		fontSize: 14,
		textAlign: 'center',
		color: '#ffffff',
		borderColor: '#10ac84',
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 10,
		backgroundColor: '#10ac84',
	},
	buttonText: {
		color: '#ffffff',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

export default TaskFormScreen;
