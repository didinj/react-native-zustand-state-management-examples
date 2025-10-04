import useCounterStore from "@/store/useCounterStore";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function CounterDisplay() {
  // Only subscribe to `count`
  const count = useCounterStore((state) => state.count);
  return <Text style={styles.counterText}>Count: {count}</Text>;
}

function CounterControls() {
  // Only subscribe to actions
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);
  const reset = useCounterStore((state) => state.reset);

  return (
    <View>
      <Button title="Increase" onPress={increase} />
      <Button title="Decrease" onPress={decrease} />
      <Button title="Reset" onPress={reset} />
    </View>
  );
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <CounterDisplay />
      <CounterControls />
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
    fontSize: 24,
    marginBottom: 20
  }
});
