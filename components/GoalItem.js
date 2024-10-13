import { StyleSheet, View, Text, Touchable, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#93bfac" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  ); 
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    color: "whitesmoke",
    borderRadius: 6,
    backgroundColor: "#8d6aba",
  },
  goalText: {
    color: "whitesmoke",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: "#93bfac",
  },
});
