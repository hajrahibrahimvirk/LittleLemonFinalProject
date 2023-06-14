import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome"
      screenOptions={{headerStyle:{backgroundColor:'#000', }, headerTintColor: '#fff', 
      headerTitleStyle:{
        fontWeight:'bold',
        color:'#fff',
      
      }}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} 
        options={{
          title:'Welcome',
          headerTintColor:(props)=><logoTitle {...props}/>
        }}/>
        <Stack.Screen name="Subscribe" component={SubscribeScreen} />
      </Stack.Navigator>
  );
};

export default RootNavigator;