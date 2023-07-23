import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import SignUpScreen from './signup';
const Humanscreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.info}>Select an option:</Text>
      <View style={{marginBottom: 20}}> 
      <View style={styles.optionsContainer}>
        <View style={styles.option}>
          <Text style={styles.optionTitle}>Sign Up as a Teacher</Text>
          <Text style={styles.optionInfo}>Are you a teacher? Sign up here to join our teaching community. We provide outreach hours to teachers. </Text>
          <Button
            mode="contained"
            color="#007AFF"
            style={styles.button}
            onPress={() => navigation.navigate('Sign up as a teacher!')}
          >
            Sign Up
          </Button>
        </View>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionTitle}>Get Teaching Help</Text>
          <Text style={styles.optionInfo}>Need assistance with teaching? Get help from experienced educators.</Text>
          <Button
            mode="contained"
            color="#34C759"
            style={styles.button}
            onPress={() => navigation.navigate('Get Teaching help!')}
          >
            Get Help
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 20,
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  option: {
    alignItems: 'center',
    marginBottom: 20,
  },
  optionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  optionInfo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    width: '70%',
    marginTop: 10,
    borderRadius: 10,
  },
});

export default Humanscreen;
