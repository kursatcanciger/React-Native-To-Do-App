import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./SaveTodo.styles";

const SaveTodo = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={props.onChangeText}
        placeholder="Yapılacaklar..."
        placeholderTextColor="rgb(102,107,110)"
        style={styles.input}
        value={props.value}
      />
      <TouchableOpacity onPress={props.onPressSave} style={styles.button}>
        <Text style={styles.text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SaveTodo;