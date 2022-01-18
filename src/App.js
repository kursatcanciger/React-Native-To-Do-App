import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet } from "react-native";
import TodoCard from "./components/TodoCard";
import SaveTodo from "./components/TodoSave";

const App = () => {
  // Todo List State Created
  const [todoCount, setTodoCount] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");

  useEffect(() => {
    setTodoCount(todoList.filter(item => !item.isDone).length);
  }, [todoList])

  // Press Todo
  const onPressTodo = (id) => {
    const newTodoList = todoList.map(item => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone }
      }
      return item;
    });
    setTodoList(newTodoList);
  }

  // Long Press Todo
  const onLongPressTodo = (id) => {
    setTodoList(todoList.filter(item => item.id !== id))
  }

  // Flatlist Todo Item
  const renderTodo = ({ item }) => <TodoCard todoItem={item} onPress={onPressTodo} onLongPress={onLongPressTodo} />

  const onChangeTodoInput = (value) => {
    setNewTodoText(value);
  }

  const pressSaveButton = () => {
    const lastTodo = todoList[todoList.length - 1];
    setTodoList(todoList => {
      return [
        ...todoList,
        {
          id: (lastTodo) ? lastTodo.id + 1 : 0,
          text: newTodoText,
          isDone: false
        },
      ];
    });
    setNewTodoText("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.counter}>{todoCount}</Text>
      </View>
      <FlatList
        data={todoList}
        renderItem={renderTodo}
      />
      <View>
        <SaveTodo value={newTodoText} onChangeText={onChangeTodoInput} onPressSave={pressSaveButton} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#142026',
    flex: 1
  },
  header_container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  title: {
    color: 'rgb(242,169,59)',
    fontSize: 34,
    fontWeight: 'bold'
  },
  counter: {
    color: 'rgb(242,169,59)',
    fontSize: 34
  }
});

export default App;