import { View, Text, StyleSheet, Button } from "react-native"; // Import UI components
import { useRouter } from "expo-router"; // Import Expo Router for navigation

export default function HomeScreen() {
  const router = useRouter(); // Hook to handle navigation

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Chamma Game!</Text>
      <Button title="Start Game" onPress={() => router.push("/game")} />
    </View>
  );
}

// Styling for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up the full screen
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
    backgroundColor: "#F5F5F5", // Light gray background
  },
  text: {
    fontSize: 24, // Large text size
    fontWeight: "bold", // Bold font
  },
});
