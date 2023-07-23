import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Picker, Platform, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { collection, addDoc } from "firebase/firestore"; 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  "YOU NOT GETTING ANYTHING"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const timezones = ['GMT', 'PST', 'EST', 'IST', 'CET']; // Timezone options for Android

export default function SignUpScreen () {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [specialties, setSpecialties] = useState('');
  const [timezone, setTimezone] = useState(''); // For dropdown on Android


  const handleSignUp = async () => {
    // Save the data to Firebase Firestore
    try {
        const docRef = await addDoc(collection(db, "teachers"), {
          Name : name,
          Age : age,
          Specialties: specialties,
          Timezone: timezone
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    /*
    db.collection('teachers').add({
      name,
      age,
      specialties,
      timezone,
    })
    .then(() => {
      console.log('Teacher data saved successfully!');
    })
    .catch((error) => {
      console.error('Error saving teacher data: ', error);
    });
    */
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