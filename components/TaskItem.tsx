import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  // Smart date formatting: time for today, day+time for this week, full date for older
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.abs(now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffInHours < 24 * 7) {
      return date.toLocaleDateString([], { weekday: 'short', hour: '2-digit', minute: '2-digit' });
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
    }
  };

  const handleToggle = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onToggle();
  };

  const handleDelete = () => {
    // Confirm deletion to prevent accidental removal
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            onDelete();
          },
        },
      ]
    );
  };

  return (
    <View style={[styles.container, task.completed && styles.completedContainer]}>
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={handleToggle}
        activeOpacity={0.7}
        accessibilityLabel={task.completed ? "Mark as incomplete" : "Mark as complete"}
        accessibilityHint={`Task: ${task.description}`}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: task.completed }}
      >
        <View style={[styles.checkbox, task.completed && styles.checkboxCompleted]}>
          {task.completed && (
            <Ionicons name="checkmark" size={16} color="#fff" />
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.textContainer}
        onPress={handleToggle}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.taskText,
            task.completed && styles.taskTextCompleted,
          ]}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {task.description}
        </Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>
            Created: {formatDate(task.createdAt)}
          </Text>
          {task.completed && task.completedAt && (
            <Text style={styles.dateText}>
              Completed: {formatDate(task.completedAt)}
            </Text>
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={handleDelete}
        activeOpacity={0.7}
        accessibilityLabel="Delete task"
        accessibilityHint={`Delete task: ${task.description}`}
        accessibilityRole="button"
      >
        <Ionicons name="trash-outline" size={18} color="#e53e3e" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginVertical: 4,
    shadowColor: '#667eea',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderLeftWidth: 4,
    borderLeftColor: '#667eea',
  },
  completedContainer: {
    backgroundColor: '#f7fafc',
    borderLeftColor: '#48bb78',
    shadowOpacity: 0.05,
  },
  toggleButton: {
    marginRight: 16,
    padding: 4,
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2.5,
    borderColor: '#667eea',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  checkboxCompleted: {
    backgroundColor: '#48bb78',
    borderColor: '#48bb78',
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  taskText: {
    fontSize: 17,
    color: '#2d3748',
    lineHeight: 24,
    marginBottom: 6,
    fontWeight: '500',
  },
  taskTextCompleted: {
    color: '#718096',
    textDecorationLine: 'line-through',
    fontWeight: '400',
  },
  dateContainer: {
    marginTop: 4,
  },
  dateText: {
    fontSize: 13,
    color: '#a0aec0',
    lineHeight: 18,
    fontWeight: '500',
  },
  deleteButton: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#fed7d7',
  },
});