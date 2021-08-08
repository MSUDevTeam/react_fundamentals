import React, { Component } from 'react';
import { FlatList, TextInput, Button, Text, View } from 'react-native';

class FlatListBasics extends Component {
  constructor(props) {
    super(props);
    this.data = [
        {key: 'apple'},
        {key: 'orange'},
        {key: 'banana'},
        {key: 'mango'},
        {key: 'pineapple'},
        {key: 'peach'},
    ];
  }

  render() {
    return (
      <View>
          <FlatList 
            data={this.data}
            renderItem={({item}) => 
                <Text>{item.key}</Text>}
            >
          </FlatList>
      </View>
    );
  }
}

export default FlatListBasics;