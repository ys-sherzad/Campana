/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import Campana from './src/component/Campana';
import AwesomeButton from "react-native-really-awesome-button/src/themes/cartman";


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
        <AwesomeButton
          size='large'
          type="secondary"
          backgroundActive="rgba(0,0,0,0)"
          activeOpacity={.5}
          textColor="#FFFFFF"
          width={140}
          style={{
            marginTop: 100
          }}
          onPress={() => setRingTheBell(value => !value)}
        >
          Press me
        </AwesomeButton>
      </View>
    </SafeAreaView>
  );
};




export default App;
