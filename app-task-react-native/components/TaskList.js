import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import TaskItem from './TaskItem';
import { getTasks, deleteTask } from '../api';

const TaskList = () => {

    const [tasks, setTasks] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const isFocused = useIsFocused();

	const loadTasks = async () => {
		const tasks = await getTasks();
        setTasks(tasks);
	};

    const renderItem = ({ item }) => {
        return <TaskItem item={item} handleDeleteItem={handleDeleteItem} />;
    };
    
    useEffect(() => {
        if (isFocused) {
            loadTasks();
        }
    }, [isFocused]);

    const onRefresh = useCallback( async () => {
        setRefreshing(true);
        await loadTasks();
        setRefreshing(false);
    }, []);

    const handleDeleteItem = async (id) => {
        await deleteTask(id);
        await loadTasks();
    };

	return (
		<FlatList
            style={{ width: '100%', marginTop: 20, marginBottom: 20, }}
			data={tasks}
			renderItem={renderItem}
			keyExtractor={(item) => item.id}
            refreshControl={
                <RefreshControl
                    colors={['#10ac84']}
                    onRefresh={onRefresh}
                    refreshing={refreshing}
                    progressBackgroundColor="#222f3e"
                />
            }
		/>
	);
};

export default TaskList;
