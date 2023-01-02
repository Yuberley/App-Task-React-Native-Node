import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import Layout from '../components/Layout'
import { saveTask } from '../api';

const TaskFormScreen = ({ navigation }) => {

  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  const handleTextChange = (name, value) => {
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = () => {
    const response = saveTask(task);
    navigation.navigate('Home');
    if (response) {
      alert('Task saved successfully');
    }
  };

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
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

    </Layout>
  )
}

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
  }
});


export default TaskFormScreen