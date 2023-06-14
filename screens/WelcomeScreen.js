import * as React from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <View style={styles.container}>
<Image source={require('../assets/little-lemon-logo.png')}
style={styles.logo}
resizeMode='contain'>

</Image>
<Text style={styles.text}>
  Little Lemon, your local {'\n'} Mediterranean Bistro
</Text>

<Pressable style={styles.button} onPress={()=>{navigation.navigate('Subscribe')}}>
<Text style={styles.buttonText}>
  Newsletter
</Text>

</Pressable>
  </View>;
};

const styles = StyleSheet.create({
  logo:{
    width:  200,
    height: 200,
    
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    paddingTop:60,
    fontSize:20,
    fontWeight:'bold'
  },
  buttonText:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff'
  },
  button:{
    marginTop:30,
    bottom:-40,
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey',
    borderRadius:10
  },
})

export default WelcomeScreen;
