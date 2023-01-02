import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { deleteTask } from '../api';

const TaskItem = ({ item }) => {
	return (
		<View style={styles.itemContainer}>
			<TouchableOpacity>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Text>❌</Text>
            </TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#333333',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemDescription: {
        color: '#fff',
        fontSize: 14,
    }
        
});

export default TaskItem;
