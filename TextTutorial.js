import React, { Component } from 'react';
import { TextInput, Button, Text, View, StyleSheet, TouchableHighlightBase } from 'react-native';

class TextTutorial extends Component {  

  constructor(props) {
    super(props);

    this.state = {
      textInputValue: '',
      textLabelValue: 'Update text here',
    }
  }

  handleTextInput = (text) => {
    this.setState({textInputValue:text})
  }

  onButtonClicked = () => {
    this.setState({textLabelValue:this.state.textInputValue})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Enter text below:
        </Text>
        <TextInput
          placeholder="Type something..."
          onChangeText={this.handleTextInput}
        >
        </TextInput>
        <Button
          title="Click me"
          onPress={this.onButtonClicked}>
          Click me
        </Button>
        <Text>{this.state.textLabelValue}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default TextTutorial;