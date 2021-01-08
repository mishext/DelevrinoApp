import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'; 
import Tabs from './navigation/tabs';
import {Home, Restaurant}  from './screens';
import orderCart from './screens/orderCart/orderCart';
import PayingPage from './screens/payingPage/index';

const Stack = createStackNavigator();


 const App = () => {
  
  return(
    
   <NavigationContainer>
     <Stack.Navigator
     screenOptions={{
       headerShown: false
     }}
     initialRouteName={"Home"}
     >
       <Stack.Screen name="Home" component={Tabs} />
       <Stack.Screen name="Restaurant" component={Restaurant} />
       <Stack.Screen name="orderCart" component={orderCart} />
       <Stack.Screen name="PayingPage" component={PayingPage}/>
     </Stack.Navigator>
   </NavigationContainer>
   
  )
    }

    export default App;