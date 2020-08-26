import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    // Hide splashscreen when app is loaded
    SplashScreen.hide();
  });

  return (
    <View>
      <Text></Text>
    </View>
  );
}
