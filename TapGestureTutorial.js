import React, { Component } from 'react';
import { Button, Text, View, ScrollView, StyleSheet, Alert } from 'react-native';

import { TapGestureHandler, State } from 'react-native-gesture-handler';

class TapGestureTutorial extends Component {
  
  constructor(props) {
    super(props);
    this.doubleTapRef = React.createRef();
  }

  onSingleTapped = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      Alert.alert("single tap!")
    }
  }

  onDoubleTapped = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      Alert.alert("double tap!")
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <TapGestureHandler
          ref={this.doubleTapRef}
          numberOfTaps={5}
          onHandlerStateChange={this.onDoubleTapped}
          >
          <View style={styles.square} />
        </TapGestureHandler>
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
  square: {
    width: 150,
    height: 150,
    backgroundColor: 'green',
  },
});


export default TapGestureTutorial;
