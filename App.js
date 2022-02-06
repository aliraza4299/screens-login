//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from './scr/Screens/Login';

// create a component
const App = () => {
  return (
    <View style={{flex:1}}>
     <Login/>
    </View>
  );
};


//make this component available to the app
export default App;
