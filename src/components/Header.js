import React from 'react';

import {
 Platform, View, Text, StyleSheet 
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20,
      },
      android: {
        height: 56,
      },
    }),
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>GoNative App</Text>
  </View>
);

export default Header;
