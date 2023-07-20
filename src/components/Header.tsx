import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface HeaderProps {
  title: string; // Header
}

function Header({ title }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    color: 'white'
  },
});
