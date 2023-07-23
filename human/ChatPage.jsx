// ChatPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const ChatPage = ({ route }) => {
  const { teacherName, specialties } = route.params;
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = () => {
    if (messageText.trim() !== '') {
      setMessages([...messages, { id: messages.length, sender: 'Me', text: messageText }]);
      setMessageText('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={item.sender === 'Me' ? styles.myMessage : styles.teacherMessage}>
      <Text style={{ fontSize: 16, color: 'white' }}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.teacherName}>{teacherName}</Text>
      <Text style={styles.specialtiesName}>Specialties: {specialties}</Text>

      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={messageText}
          onChangeText={(text) => setMessageText(text)}
          placeholder="Type your message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={{ color: 'white' }}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  teacherName: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
  specialtiesName: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
  },
  myMessage: {
    backgroundColor: '#007AFF',
    alignSelf: 'flex-end',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    marginVertical: 5,
    marginRight: 10,
    maxWidth: '70%',
  },
  teacherMessage: {
    backgroundColor: '#34C759',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    marginVertical: 5,
    marginLeft: 10,
    maxWidth: '70%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  textInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  sendButton: {
    marginLeft: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#007AFF',
    borderRadius: 20,
  },
});

export default ChatPage;
