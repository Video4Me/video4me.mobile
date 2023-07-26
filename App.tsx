import React from 'react';
import {Text, View} from 'react-native';
import Register from './src/screens/register';
import EmptyState from './src/modules/EmptyState/screens';

const App = () => {
  return (
    <View>
      <EmptyState />
      <Register />
    </View>
  );
};
export default App;
