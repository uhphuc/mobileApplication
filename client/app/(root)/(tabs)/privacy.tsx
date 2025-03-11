import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const privacy = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.date}>Effective Date: [Insert Date]</Text>

      <Text style={styles.sectionTitle}>1. Introduction</Text>
      <Text style={styles.text}>
        Welcome to [Your App Name] ("we," "our," or "us"). Your privacy is important to us.
        This Privacy Policy explains how we collect, use, and protect your information when you use our application.
      </Text>

      <Text style={styles.sectionTitle}>2. Information We Collect</Text>
      <Text style={styles.text}>
        - **Personal Information:** Username, email, and password during registration.
        - **Course and Discussion Data:** Course participation, discussions, and chat messages.
        - **Grades and Exam Data:** Uploaded grades, quizzes, and exams.
        - **Usage Data:** Interaction data for app improvements.
      </Text>

      <Text style={styles.sectionTitle}>3. How We Use Your Information</Text>
      <Text style={styles.text}>
        We use collected information to provide services, manage accounts, store grades securely, and enhance security.
      </Text>

      <Text style={styles.sectionTitle}>4. Security</Text>
      <Text style={styles.text}>
        We implement security measures, but no transmission method is 100% secure.
      </Text>

      <Text style={styles.sectionTitle}>5. Contact Us</Text>
      <Text style={styles.text}>
        If you have any questions, contact us at [Your Contact Email].
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default privacy;
