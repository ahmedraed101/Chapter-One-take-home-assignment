import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskInput from '../../components/TaskInput';
import TaskList from '../../components/TaskList';
import { Task } from '../../types/Task';

export default function TaskScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = (description: string) => {
    if (description.trim().length === 0) {
      return;
    }

    // Create new task with unique ID and current timestamp
    const newTask: Task = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 11),
      description: description.trim(),
      completed: false,
      createdAt: new Date(),
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
    setInputValue('');
  };

  const toggleTask = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task => {
        if (task.id === id) {
          const isCompleting = !task.completed;
          return {
            ...task,
            completed: isCompleting,
            // Set completion timestamp when marking as complete
            completedAt: isCompleting ? new Date() : undefined,
          };
        }
        return task;
      })
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  // Sort tasks: incomplete first, then completed (newest first within each group)
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed === b.completed) {
      return b.createdAt.getTime() - a.createdAt.getTime();
    }
    return a.completed ? 1 : -1;
  });

  // Calculate progress for header display
  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.headerGradient}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle} accessibilityRole="header">My Tasks</Text>
          <Text style={styles.headerSubtitle} accessibilityLabel="Task progress">
            {tasks.length === 0 
              ? 'Ready to be productive?' 
              : `${tasks.filter(t => !t.completed).length} of ${tasks.length} remaining`
            }
          </Text>
          {totalCount > 0 && (
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${progressPercentage}%` }]} />
              </View>
              <Text style={styles.progressText}>{Math.round(progressPercentage)}% complete</Text>
            </View>
          )}
        </View>
      </LinearGradient>
      <View style={styles.content}>
        <TaskInput
          value={inputValue}
          onChangeText={setInputValue}
          onSubmit={addTask}
        />
        <TaskList
          tasks={sortedTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  headerGradient: {
    paddingBottom: 20,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  headerSubtitle: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 16,
    fontWeight: '500',
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '600',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
});