import React from 'react';
import { Text, StyleSheet  } from 'react-native';
import { Layout } from 'react-native-ui-kitten';

export default function Loading() {
  return (
    <Layout style={styles.loading}>
      <Text style={styles.text}>
        Loading...
      </Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 45
  }  
});

