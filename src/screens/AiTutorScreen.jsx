
import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const Ai2 = () => {

  const renderMessage = ({ item }) => (
    <View style={item.isUser ? styles.userMessageContainer : styles.aiMessageContainer}>
      <Text style={item.isUser ? styles.userMessage : styles.aiMessage}>
        {item.text}
      </Text>
    </View>
  );
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const test = () => {
    setMessages([...messages, { text: inputMessage, isUser: true }])
    handleSendMessage()
  }
  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;
    try {
      const apiKey = 'YOU NOT GETTING ANYTHING'; // Replace with your actual API key
      const url = 'https://api.openai.com/v1/chat/completions';
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      };
      const data = {
        model: 'gpt-3.5-turbo',
        temperature: 0.5,
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: inputMessage },
        ],
      };

      const response = await axios.post(url, data, { headers });
      const botReply = response.data.choices[0].message.content.trim();
      setMessages([...messages, { text: inputMessage, isUser: true } , { text: botReply, isUser: false }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item, index) => index.toString()}
        style={{flex: 1,marginTop: 30}}
      />
      <TextInput
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10 }}
        value={inputMessage}
        onChangeText={setInputMessage}
        placeholder="Type a message..."
      />
      <Button title="Send" onPress={test} />
    </View>
  );
};


const styles = StyleSheet.create({
  userMessageContainer: {
    alignItems: 'flex-end',
    marginBottom: 10,
    borderRadius: 200
  },
  aiMessageContainer: {
    alignItems: 'flex-start',
    marginBottom: 10,
    borderRadius: 200,
  },
  userMessage: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: 10,
    borderRadius: 15
  },
  aiMessage: {
    backgroundColor: '#D3D3D3',
    color: '#333',
    padding: 10,
  },
});

export default Ai2;
