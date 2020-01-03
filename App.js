import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

class Blink extends Component {
    //声明state对象
    state = { 
        isShowingText: true,
        men: 'Ho'
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                isShowingText: !this.state.isShowingText
            })
        }, 1000)
    }

    render() {
        const state = this.state 
        //根据当前showText的值决定是否显示text内容
        if(!state.isShowingText){
//             return null
        }

        return (
            <Text style={{marginBottom: 15}}>
                {state.men}: {this.props.text} in {this.props.time}</Text>
        )
    }
}

class FooterImg extends Component {
    render() {
        let pic = {
           uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576920767428&di=c360f928ba3ac737a40d7c0391a627c1&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb3b7d0a20cf431ad7427dfad4136acaf2fdd98a9.jpg'
        };
        return (
            <Image source={pic} style={{width: 200,height:100}}/>
        )
    }
}

export default class BlinkApp extends Component {

    render() {
        return (
            <View style={{alignItems: "center",height:'100%',justifyContent: "center"}}>
                <Blink text='I love to blink' time='2019-12-21' />
                <Blink text='Yes blinking is so great' time='2019-10-12' />
                <Blink text='Why did they ever take this out of HTML' time='2019-02-24' />
                <Blink text='Look at me look at me look at me' time='2019-06-23' />
                <FooterImg />
            </View>
        )
    }
}

