import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


const Home = () => {

  const handleExploreAI = () => {
    // Implement the navigation logic for AI feature
  };

  const handleExploreHumanTeacher = () => {
  };

  return (
    <View style={styles.container}>
      <Image source={require('')} style={styles.logo} />
      <Text style={styles.appTitle}>Globe-ED</Text>
      <Text style={styles.tagline}>Learn, Teach, Connect </Text>

      <TouchableOpacity onPress={handleExploreAI} style={styles.featureCard}>
        <Text style={styles.featureTitle}>AI-Powered Learning</Text>
        <Text style={styles.featureDescription}>
          Learn from our AI tutors that provide personalized learning paths
          using state-of-the-art language models.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleExploreHumanTeacher} style={styles.featureCard}>
        <Text style={styles.featureTitle}>Human Teachers</Text>
        <Text style={styles.featureDescription}>
          Connect with real human teachers who are experts in their subjects
          and enhance your learning with live interactions and feedback.
        </Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Get started on your learning journey with Globe-ED today!
      </Text>
      <TouchableOpacity style={styles.getStartedButton}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  tagline: {
    fontSize: 18,
    color: '#888',
    marginBottom: 30,
  },
  featureCard: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featureDescription: {
    fontSize: 16,
    color: '#444',
  },
  footerText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  getStartedButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;