import { useState } from "react";
import { StyleSheet, View, FlatList, Pressable, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function deleteGoalHandler(id) {
    //console.log("DELETE");
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        {/* <FlatList>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </FlatList> */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
            // return (
            //   <View style={styles.goalItem}>
            //     <Text style={styles.goalText}>{itemData.item.text}</Text>
            //   </View>
            // );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

<<<<<<< HEAD
const styles = StyleSheet.create({ 
=======
const styles = StyleSheet.create({
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 8310955 (Initial commit)
  container: {
=======
  appContainer: {
>>>>>>> 1329511 (initial)
=======
  appContainer: {
>>>>>>> 1329511 (initial)
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  // inputContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginBottomBottom: 24,
  //   borderBottomColor: "#cccccc",
  //   borderBottomWidth: 1,
  //   flex: 1,
  // },
  // textInput: {
  //   borderWidth: 1,
  //   borderColor: "#cccccc",
  //   width: "90%",
  //   marginRight: 10,
  //   padding: 8,
  //   flex: 1,
  // },
  goalsContainer: {
    paddingTop: 16,
    flex: 4,
  },
  // goalItem: {
  //   margin: 8,
  //   padding: 8,
  //   color: "whitesmoke",
  //   borderRadius: 6,
  //   backgroundColor: "#8d6aba",
  // },
  // goalText: {
  //   color: "whitesmoke",
  // },
});
