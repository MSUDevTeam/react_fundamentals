import React, { Component } from 'react';
import { Button, Text, View, ScrollView, StyleSheet } from 'react-native';
import HookTutorial from './HookTutorial';

class LifeCycle extends Component {
  
  constructor(props) {
    super(props);
    this.state = {count: 1};
    console.log("the constructor was called!");
  }

  buttonAction = () => {
    this.setState({count: this.state.count+1});
    // navigate to TapGestureTutorial
    this.props.navigation.navigate('TapGestureTutorial')
  }

  componentDidMount() {
    console.log("componentDidMount was called!");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate was called!");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount was called!");
  }

  render() {
    console.log("render was called!");
    return (
      <View style={styles.container}>
          <Button title="Navigate to TapGestureTutorial" onPress={this.buttonAction}/>
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

export default LifeCycle;
