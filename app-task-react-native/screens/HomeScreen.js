import React from 'react';
import { View, Text } from 'react-native';

import Layout from '../components/Layout';
import TaskList from '../components/TaskList';

const HomeScreen = () => {
	return (
		<Layout>
      		<TaskList />
		</Layout>
	);
};

export default HomeScreen;