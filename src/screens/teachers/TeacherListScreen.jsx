import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, SafeAreaView } from 'react-native';
import { collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Button, Card, Title, Paragraph } from 'react-native-paper';

// Your web app's Firebase configuration
const firebaseConfig = {
  "YOU NOT GETTING ANYTHING"
  };
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const Check = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "teachers"));
        const fetchedData = querySnapshot.docs.map((doc) => doc.data());
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const openChatPage = (teacherName, specialties) => {
    navigation.navigate('Chat', { teacherName, specialties });
  };
  

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={{ fontWeight: 'bold', fontSize: 30 }}>{item.Name}</Title>
        <Paragraph style={{ fontSize: 17 }}>Age: {item.Age}</Paragraph>
        <Paragraph style={{ fontSize: 17 }}>Specialties: {item.Specialties}</Paragraph>
        <Paragraph style={{ fontSize: 17 }}>Timezone: {item.Timezone}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => openChatPage(item.Name, item.Specialties)}>Go to Chat</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <>
      <SafeAreaView>
        <Text style={{ fontSize: 40, justifyContent: 'center', alignItems: 'center', marginHorizontal: 120 }}> Teachers</Text>
      </SafeAreaView>

      <View style={{flex: 1,padding: 16,backgroundColor: '#fff'}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.Name}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
    card: {
      marginBottom: 12,
      elevation: 4, // Add a shadow effect to the card
      borderRadius: 8,
    },
    listContainer: {
      paddingBottom: 16,
    },
  });

export default Check;
