import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export class Todo extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleChange(text) {
    this.setState({newTodo: text})
  }

  handlePress() {
    const todos = [...this.state.todos, this.state.newTodo]
    console.log(todos)
    this.setState({todos, newTodo: ''})
  }

  render() {
    return (
      <View>
        <TextInput value={this.state.newTodo} onChangeText={this.handleChange.bind(this)} />
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
          <Text>tap me</Text>
        </TouchableOpacity>
        <View style={styles.todos}>
          <Text style={styles.todo}>12345667</Text>
          {this.state.todos.map((todo, i) => {
            console.log(`${i} - ${todo}`)
            return (<Text style={styles.todo} key={i}>{todo}</Text>)
          }
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todos: {
    flex: 1,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111111',
  },
  todo: {
    color: '#AAAAAA'
  }
})