/**
 * mm 2016-07-08
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
	TouchableOpacity,

} from 'react-native';

import Button from './src/component/Button';

import Toast from 'react-native-root-toast';

import Icon from 'react-native-vector-icons/FontAwesome';


// Add a Toast on screen.
let toast = Toast.show('This is a message', {
	duration: Toast.durations.LONG,
	position: Toast.positions.BOTTOM,
	shadow: true,
	animation: true,
	hideOnPress: true,
	delay: 0,
	onShow: () => {
		// calls on toast\`s appear animation start
	},
	onShown: () => {
		// calls on toast\`s appear animation end.
	},
	onHide: () => {
		// calls on toast\`s hide animation start.
	},
	onHidden: () => {
		// calls on toast\`s hide animation end.
	}
});


class MyProject extends Component {
	
	constructor(props){
		super(props);
		this.state={
			title:'请求数据中',
		};
}

	fetchData=(enaleCallBack)=>{
		fetch("http://bbs.reactnative.cn/api/category/3")
			.then((response) => response.json())
			.then((jsondata) => {
				Toast.show('请求成功');
					enaleCallBack();
				this.setState({
					title:jsondata.topics[0].title,
				});
			})
			.catch((error) => {
				console.warn(error);
			});


	}

	componentWillUnmount() {
		// 如果存在this.timer，则使用clearTimeout清空。
		// 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
		this.timer && clearTimeout(this.timer);
	}

  render() {
    return (
      <View style={styles.container}>
		  <Icon name="rocket" size={30} color="#900" />

	    <Image style={styles.img_styles} source={require('./img/logo.png')}/>
		
		<View style={styles.container_row}>
			 <Image source={require('./img/login_user.png')}/>
			 <TextInput placeholder="请输入电话号码" style={styles.input_styles}
				numberOfLines={1}  
				autoFocus={true}  
				underlineColorAndroid={'transparent'}  
				textAlign='center' />
		</View>
		
		<View  
             style={styles.line_styles}  
          /> 
		
		<View style={styles.container_row}>
			 <Image source={require('./img/login_psw.png')}/>
			 <TextInput placeholder="请输入密码" style={styles.input_styles}
				 numberOfLines={1}  
				 underlineColorAndroid={'transparent'}  
				 secureTextEntry={true}  
				 textAlign='center'  
			 />
		</View>
		
		<View  
             style={styles.line_styles}  
          />

		  <Text style={styles.text_styles}>{this.state.title}</Text>

		  <Button text="登录" backColor="#FD6256" onClick={this.fetchData}></Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container_row: {
	flexDirection: 'row',
	marginLeft: 20,
	marginRight: 20,
	marginTop: 10,
  },
  line_styles: {
	height:1,
	backgroundColor:'#f4f4f4',
	marginLeft: 20,
	marginRight: 20,
  },
  img_styles: {
	margin: 30,
	alignSelf:'center',  
  },
  input_styles: {
	height: 45,
	width: 200,
  },
	text_styles: {
		margin:10,
		height: 45,
		color:'#000000',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

AppRegistry.registerComponent('MyProject', () => MyProject);
