/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StatusBar,
  View,
  TouchableOpacity,
} from 'react-native';
import Campana from './src/component/Campana';


const App = () => {

  const [ringTheBell, setRingTheBell] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle='dark-content' />
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Campana
          run={ringTheBell}
        />

        <TouchableOpacity
          onPress={() => setRingTheBell(!ringTheBell)}
          style={{
            marginTop: 70,
            borderWidth: 1,
            paddingHorizontal: 30,
            paddingVertical: 20
          }}>
          <Text style={{
            fontSize: 23,
            fontWeight: '600'
          }}>Press me</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default App;
