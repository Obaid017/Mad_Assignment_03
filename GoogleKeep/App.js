import {
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();


// Dummy Data
const notes = [
  {
    id: '1',
    title: 'Shopping List',
    description: 'Buy milk, bread, eggs, and juice',
  },

  {
    id: '2',
    title: 'Mobile App Assignment',
    description: 'Complete React Native Google Keep clone',
  },

  {
    id: '3',
    title: 'Meeting Reminder',
    description: 'Project discussion at 5 PM tomorrow',
  },

  {
    id: '4',
    title: 'Gym Routine',
    description: 'Chest workout and 30 min cardio',
  },

  {
    id: '5',
    title: 'Exam Preparation',
    description: 'Study Software Quality Engineering notes',
  },

  {
    id: '6',
    title: 'Weekend Plan',
    description: 'Visit friends and watch a movie',
  },

  {
    id: '7',
    title: 'Ideas',
    description: 'Build a plant disease detection mobile app',
  },

  {
    id: '8',
    title: 'Daily Tasks',
    description: 'Reply to emails and complete coding practice',
  },

  {  id: '9',
    title: 'Shopping',
    description: 'Buy milk and bread',
  },
  {
    id: '10',
    title: 'Assignment',
    description: 'Complete React Native project',
  },
  {
    id: '11',
    title: 'Meeting',
    description: 'Project discussion at 5 PM',
  },
  

];


// Reusable Component
function NoteCard({ title, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}


// Screen 1
function NotesScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.header}>
        Google Keep
      </Text>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteCard
            title={item.title}
            description={item.description}
          />
        )}
      />

    </View>
  );
}


// Screen 2
function ArchiveScreen() {
  return (
    <View style={styles.centerContainer}>

      <Text style={styles.screenText}>
        Archived Notes
      </Text>

      <NoteCard
        title="Old Notes"
        description="These are archived notes"
      />

    </View>
  );
}


// Screen 3
function LabelsScreen() {
  return (
    <View style={styles.centerContainer}>

      <Text style={styles.screenText}>
        Labels
      </Text>

      <NoteCard
        title="Work"
        description="Office related notes"
      />

      <NoteCard
        title="Personal"
        description="Personal tasks and reminders"
      />

    </View>
  );
}


// Main App
export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffffff',
          },

          tabBarStyle: {
            backgroundColor: '#ffffff',
          },

          tabBarActiveTintColor: '#f4b400',
        }}
      >

        <Tab.Screen
          name="Notes"
          component={NotesScreen}
        />

        <Tab.Screen
          name="Archive"
          component={ArchiveScreen}
        />

        <Tab.Screen
          name="Labels"
          component={LabelsScreen}
        />

      </Tab.Navigator>

    </NavigationContainer>
  );
}


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },

  centerContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#fff8b8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});