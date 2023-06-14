import * as React from 'react';
import {useState} from 'react'
import { View, Image , StyleSheet, Text, TextInput, Pressable, Alert} from 'react-native';
import { ValidateEmail } from '../utils';

const SubscribeScreen = () => {

  const [email, setEmail] = useState('')

  return <View style= {styles.container}>
    <Image source={require('../assets/little-lemon-logo-grey.png')}
    style={styles.logo}>

    </Image>
    <Text style={styles.text}>
      Subscribe to our newsletter for our {'\n'}latest delicious recipes!
    </Text>
    <TextInput
    placeholder='Email'
    onChange={setEmail}
    value={email}
    style={styles.input}
    ></TextInput>
    <Pressable style={styles.button} onPress={()=>{Alert.alert("Thanks for subscribing, stay tuned!")}}>
      <Text style={styles.buttonText}>Subscribe</Text>
    </Pressable>
  </View>;
};

const styles = StyleSheet.create({
  logo:{
    marginTop:-240,
    width:  100,
    height: 100,
    
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    paddingTop:40,
    fontSize:20,
  
  },
  buttonText:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff'
  },
  button:{
    marginTop:5,
    bottom:-40,
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey',
    borderRadius:10
  },
  input:{
    marginTop:40, 
    height:60,
    width:310,
    borderWidth:1,
    borderRadius:10,
    fontSize:20,
    padding:10
  }
})

export default SubscribeScreen;
