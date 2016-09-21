/**
 * mm 2016-07-08
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';


export default class MyProject extends Component {

    constructor(props){
        super(props);
        this.state={
            disabled:false,
        };
    }

    Press=()=>{
        const {onClick}=this.props;
        this.Disabled();
        onClick(this.Enable);
     }

    Enable=()=>{
        this.setState({
           disabled:false,
        });
    };


    Disabled=()=>{
        this.setState({
            disabled:true,
        });
    }

    render() {
        const {text,backColor}=this.props;
        
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    disabled={this.state.disabled}
                    style={[styles.style_button,this.state.disabled&&styles.button_disabled]}
                    onPress={this.Press}>
                    <Text style={styles.text_styles}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    style_button:{
        marginTop:30,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#FD6256',
        height:45,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_styles: {
        color:'#ffffff',
    },
    button_disabled: {
        backgroundColor:'gray',
},
});

