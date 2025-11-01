import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Task } from '../types/Task';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export default function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  const renderTask = ({ item }: { item: Task }) => (
    <TaskItem
      task={item}
      onToggle={() => onToggleTask(item.id)}
      onDelete={() => onDeleteTask(item.id)}
    />
  );

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <View style={styles.emptyIconContainer}>
        <Ionicons name="checkmark-done-circle-outline" size={80} color="#cbd5e0" />
      </View>
      <Text style={styles.emptyTitle}>All caught up!</Text>
      <Text style={styles.emptySubtitle}>Add your first task above to get started on your productivity journey.</Text>
    </View>
  );

  const keyExtractor = (item: Task) => item.id;



  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={keyExtractor}

        ListEmptyComponent={renderEmptyState}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tasks.length === 0 ? styles.emptyListContainer : styles.listContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingBottom: 32,
    paddingTop: 8,
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyIconContainer: {
    marginBottom: 24,
    opacity: 0.6,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4a5568',
    marginBottom: 12,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 17,
    color: '#718096',
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '500',
  },
  separator: {
    height: 12,
  },
});