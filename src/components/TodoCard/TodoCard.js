import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./TodoCard.styles";

const TodoCard = (props) => {
  return (
    <View style={props.todoItem.isDone ? styles.container_disable : styles.container_enable}>
      <TouchableOpacity
        onPress={() => props.onPress(props.todoItem.id)}
        onLongPress={() => props.onLongPress(props.todoItem.id)}
        key={props.todoItem.id}
      >
        <Text>{props.todoItem.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TodoCard;