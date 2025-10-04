// app/(tabs)/TabTwoScreen.tsx
import useAppStore from "@/store/useAppStore";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function TabTwoScreen() {
  const { count, increase, decrease, reset } = useAppStore((state) => ({
    count: state.count,
    increase: state.increase,
    decrease: state.decrease,
    reset: state.reset
  }));

  const theme = useAppStore((state) => state.theme);
  const toggleTheme = useAppStore((state) => state.toggleTheme);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
      <Button title="Increase" onPress={increase} />
      <Button title="Decrease" onPress={decrease} />
      <Button title="Reset" onPress={reset} />

      <Text style={styles.counterText}>Theme: {theme}</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  counterText: {
    fontSize: 20,
    marginVertical: 10
  }
});
