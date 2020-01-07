import React, { Component } from 'react';
import { Button, Alert } from 'react-native';

export default class PizzaTranslator extends Component {
    render() {
        return ( 
            <Button
                onPress={() => {
                    Alert.alert("你点击了按钮！");
                }}
                title="点我！"
            />
        )
    }
}
