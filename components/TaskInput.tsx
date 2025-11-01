import { Ionicons } from '@expo/vector-icons';
import React, { useRef } from 'react';
import { Alert, Keyboard, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

interface TaskInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: (description: string) => void;
}

export default function TaskInput({ value, onChangeText, onSubmit }: TaskInputProps) {
  const textInputRef = useRef<TextInput>(null);

  const handleSubmit = () => {
    const trimmedValue = value.trim();

    // Validate input before submission
    if (trimmedValue.length === 0) {
      Alert.alert('Invalid Task', 'Please enter a task description');
      return;
    }

    if (trimmedValue.length > 200) {
      Alert.alert('Task Too Long', 'Task description must be 200 characters or less');
      return;
    }

    // Dismiss keyboard and blur input for better UX
    Keyboard.dismiss();
    textInputRef.current?.blur();

    onSubmit(trimmedValue);
  };



  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          ref={textInputRef}
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={handleSubmit}

          placeholder="What needs to be done?"
          placeholderTextColor="#a0aec0"
          multiline={false}
          maxLength={200}
          returnKeyType="done"
          accessibilityLabel="Task description input"
          accessibilityHint="Enter a description for your new task"
        />
        <TouchableOpacity
          style={[styles.addButton, value.trim().length === 0 && styles.addButtonDisabled]}
          onPress={handleSubmit}
          disabled={value.trim().length === 0}
          activeOpacity={0.7}
          accessibilityLabel="Add task"
          accessibilityHint="Tap to add the new task to your list"
          accessibilityRole="button"
        >
          <Ionicons
            name="add"
            size={24}
            color={value.trim().length === 0 ? '#ccc' : '#fff'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    shadowColor: '#667eea',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(102, 126, 234, 0.1)',
  },
  textInput: {
    flex: 1,
    fontSize: 17,
    color: '#2d3748',
    paddingVertical: 4,
    fontWeight: '500',
  },
  addButton: {
    backgroundColor: '#667eea',
    borderRadius: 12,
    padding: 12,
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#667eea',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  addButtonDisabled: {
    backgroundColor: '#e2e8f0',
    shadowOpacity: 0,
    elevation: 0,
  },
});