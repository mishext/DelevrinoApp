// import React from 'react';
// import {View, Text, StyleSheet, StatusBar, Dimensions, TouchableOpacity} from "react-native";
// import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// MaterialIcons.loadFont();

// export default class SplashComponent extends React.Component{
//     render(){
//         return(
//             <View style={styles.container}>
//                 <StatusBar barStyle="light-content" />
//                 <View style={styles.header}>
//                 <Animatable.Image
//                    animation="bounceIn"
//                    duration={1500}
//                    source={require('./logo6.png')}
//                    style={styles.logo}
//                    resizeMode={"stretch"}
//                    ></Animatable.Image>
//                 </View>
//                 <Animatable.View
//                  style={styles.footer}
//                  animation="fadeInUpBig">
//                     <Text style={styles.title}>Sign up and order now!</Text>
//                     <Text style={styles.text}>Sign in with account</Text>
//                     <View style={styles.button}>
//                 <TouchableOpacity onPress={()=>this.props.navigation.navigate("SignInScreen")} >
//                     <LinearGradient colors={['#5db8fe', '#39cff2']}
//                     style={styles.signIn}>
//                     <Text style={styles.textSign}>Get Started </Text>
//                     <MaterialIcons
//                     name="navigate-next"
//                     color="white"
//                     size={20}
//                      />
 
//                     </LinearGradient>
//                     </TouchableOpacity>
//                     </View>
//                 </Animatable.View>
                
//             </View>
//         )
//     }
// }

// const {height} = Dimensions.get("screen");
// const height_logo = height * 0.8 * 0.6;
// var styles = StyleSheet.create({
//    container: {
//        flex:1,
//     //    backgroundColor:'#ff8c00'
//     backgroundColor:'#ffa500'
//    },
//    header: {
//        flex:2,
//        justifyContent:'center',
//        alignItems:'center'
//    },
//    footer: {
//        flex:1,
//        backgroundColor:'white',
//        borderTopLeftRadius:30,
//        borderTopRightRadius:30,
//        paddingVertical:50,
//        paddingHorizontal:30
//    },
//    logo: {
//        width: height_logo,
//        height: height_logo
//    },
//    title: {
//        color:'#05375a',
//        fontWeight:'bold',
//        fontSize: 30
//    },
//    text:{
//        color:'grey',
//        marginTop:5,
//        margin:5
//    },
//    button: {
//        alignItems:'flex-end',
//        marginTop:30
//    },
//    signIn:{
//        width:150,
//        height:40,
//        justifyContent:'center',
//        alignItems:'center',
//        borderRadius:50,
//        flexDirection:'row'
//    },
//    textSign: {
//        color:'white',
//        fontWeight:'bold'
//    }

// })