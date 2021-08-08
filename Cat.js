import React, { Component } from 'react';
import { Text, View } from 'react-native';

function getFullName(first, second, third) {
    return first + " " + second + " " + third;
}

class Cat extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const {
        //     name
        // } = this.props;
        return (
            <View>
                <Text>Hello, I am {this.props.name + " " + this.props.lastName}</Text>
            </View>
        );
    }
}

export default Cat;