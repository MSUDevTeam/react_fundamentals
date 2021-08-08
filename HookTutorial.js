import React, { Component, useState } from 'react';
import { TextInput, Button, Text, View, StyleSheet, TouchableHighlightBase } from 'react-native';

export default function HookTutorial() {
    const [timesClicked, updateClicked] = useState(0);

    return (
        <View>
            <Button
                title="Click me!"
                onPress={() => updateClicked(timesClicked+1)}
            >
                Click Me!
            </Button>
            <Text>
                {timesClicked} 
            </Text>
        </View>
      );
}  