import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.image}
        source={require('../assets/img/logo.png')}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#177ABD',
    width: '100%',
  },
  image: {
    width: 156,
    height: 36,
    marginVertical: 14,
    marginLeft: 24,
  },
});