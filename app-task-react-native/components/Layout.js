import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#222f3e" barStyle="light-content" />
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#222f3e'
    }
})

export default Layout