import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Ionicons name="checkmark-circle" size={60} color="#007AFF" />
          <Text style={styles.headerTitle}>Task Management App</Text>
          <Text style={styles.headerSubtitle}>Simple. Efficient. Organized.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How to Use</Text>

          <View style={styles.featureItem}>
            <Ionicons name="add-circle" size={24} color="#667eea" />
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Add Tasks</Text>
              <Text style={styles.featureDescription}>
                Type in the input field and tap + to add tasks
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <Ionicons name="checkmark-circle" size={24} color="#48bb78" />
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Complete Tasks</Text>
              <Text style={styles.featureDescription}>
                Tap the circle or task text to mark as complete
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <Ionicons name="trash" size={24} color="#e53e3e" />
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>Delete Tasks</Text>
              <Text style={styles.featureDescription}>
                Tap the trash icon to remove tasks permanently
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>

          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Progress tracking with visual progress bar</Text>
          </View>

          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Smart date formatting and timestamps</Text>
          </View>

          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Haptic feedback and accessibility support</Text>
          </View>

          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>Works offline with local storage</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tips</Text>

          <View style={styles.tipItem}>
            <Ionicons name="bulb" size={20} color="#ffc107" />
            <Text style={styles.tipText}>
              Completed tasks automatically move to the bottom of your list
            </Text>
          </View>

          <View style={styles.tipItem}>
            <Ionicons name="bulb" size={20} color="#ffc107" />
            <Text style={styles.tipText}>
              Tasks are stored locally and don't sync between devices
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Built with React Native & Expo</Text>
          <Text style={styles.versionText}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 20,
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e9ecef',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  featureText: {
    flex: 1,
    marginLeft: 16,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  bullet: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
    marginRight: 12,
    marginTop: 2,
  },
  bulletText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    lineHeight: 22,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  tipText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginLeft: 12,
    lineHeight: 22,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  versionText: {
    fontSize: 14,
    color: '#999',
  },
});