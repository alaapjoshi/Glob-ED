import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  "YOU NOT GETTING ANYTHING"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function SignUpScreen () {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [specialties, setSpecialties] = useState('');
  const [timezone, setTimezone] = useState('');

  const handleSignUp = async () => {
    // Save the data to Firebase Firestore
    try {
        await addDoc(collection(db, "teachers"), {
          Name : name,
          Age : age,
          Specialties: specialties,
          Timezone: timezone
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up as a Teacher</Text>
      <TextInput
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
        style={styles.input}
      />
      <TextInput
        label="Age"
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Specialties"
        value={specialties}
        onChangeText={text => setSpecialties(text)}
        style={styles.input}
      />
      <TextInput
        label="Timezone"
        value={timezone}
        onChangeText={text => setTimezone(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSignUp}>
        Sign Up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
});