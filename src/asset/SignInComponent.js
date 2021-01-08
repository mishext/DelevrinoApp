// import React from "react";
// import {View, Text, StyleSheet, TextInput,TouchableOpacity,StatusBar} from "react-native";
// import * as Animatable from 'react-native-animatable';
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import Feather from "react-native-vector-icons/Feather";
// import LinearGradient from "react-native-linear-gradient";




// export default class SignInComponent extends React.Component{
//   constructor(props){
//       super(props);
//       this.state={
//         check_textInputChange: false,
//         password:'',
//         secureTextEntry: true
//       }
//   }

//   textInputChange(value){
//       if(value.length!==0){
//           this.setState({
//               check_textInputChange: true
//           });}
//           else{
//             this.setState({
//                 check_textInputChange: false
//             });}
//           }

//           secureTextEntry(){
//               this.setState({
//                   secureTextEntry: !this.state.secureTextEntry
//               })
//           }
  
  

//     render(){
//         return(
//             <View style={styles.container}>
//                 <View style={styles.header}>
//                 <Animatable.Image
//                    animation="bounceIn"
//                    duration={1500}
//                    source={require('./lolo3.png')}
//                    style={styles.logo}
//                    resizeMode={"stretch"}
//                    ></Animatable.Image>
//                    <Text style={styles.visa2}>Easy and Online Payment</Text>
                   
//                 </View>
                
                
//                 <Animatable.View 
//                 animation="fadeInUpBig"
//                 style={styles.footer}>
//                     <Text style={styles.text_footer}>E-MAIL</Text>
//                     <View style={styles.action}>
//                     <FontAwesome 
//                        name="user-o"
//                        color="#05375a"
//                        size={20}/>
//                        <TextInput 
//                        placeholder="Your email..."
//                        style={styles.textInput}
//                        onChangeText={(text)=>this.textInputChange(text)}
//                        />

//                        {this.state.check_textInputChange ?
//                         <Animatable.View 
//                         animation="bounceIn">
//                        <Feather 
//                        name="check-circle"
//                        color="green"
//                        size={20}
//                        />
//                        </Animatable.View>
//                        :null}

//                     </View>
//                     <Text style={[styles.text_footer,{
//                         marginTop:35
//                     }]}>Password</Text>
//                     <View style={styles.action}>
//                     <FontAwesome 
//                        name="lock"
//                        color="#05375a"
//                        size={20}/>
//                        {this.state.secureTextEntry ?
//                        <TextInput 
//                        placeholder="Your password..."
//                        secureTextEntry={true}
//                        style={styles.textInput}
//                        value={this.state.password}
//                        onChangeText={(text)=>this.setState({
//                            password: text
//                        })}
//                        />
//                        :
//                        <TextInput 
//                        placeholder="Your password..."
//                        style={styles.textInput}
//                        value={this.state.password}
//                        onChangeText={(text)=>this.setState({
//                            password: text
//                        })}
//                        />}

//                          <TouchableOpacity
//                          onPress={()=>this.secureTextEntry()}>
//                              {this.state.secureTextEntry ?
//                        <Feather 
//                        name="eye-off"
//                        color="gray"
//                        size={20}
//                        />
//                        :
//                        <Feather 
//                        name="eye"
//                        color="gray"
//                        size={20}
//                        />
//                              }

//                        </TouchableOpacity>
//                     </View>
//                     <Text style={{color:'#009bd1', marginTop:15}}>Forgot password?</Text>


//                     <View style={styles.button}>

//                     <TouchableOpacity 
//                     onPress={()=>this.props.navigation.navigate("Account")}
//                     style={[styles.signIn,{
//                         borderColor:'#5db8fe',
//                         borderWidth:1,
//                         marginTop:15
//                     }]}
//                     >
//                       <LinearGradient colors={['#5db8fe', '#39cff2']}
//                         style={styles.signIn}>
//                          <Text style={styles.textSign}>Sign In</Text>
//                       </LinearGradient>
//                       </TouchableOpacity>

//                       {/* <TouchableOpacity
//                      onPress={()=>this.props.navigation.navigate("Account")}
//                      style={[styles.signIn,{
//                          borderColor:'#5db8fe',
//                          borderWidth:1,
//                          marginTop:15
//                      }]}
//                      >
//                          <Text style={[styles.textSign,{
//                              color:'#4dc2f8'
//                          }]}>Sign In</Text>
//                      </TouchableOpacity> */}

//                      <TouchableOpacity
//                      onPress={()=>this.props.navigation.navigate("SignUpScreen")}
//                      style={[styles.signIn,{
//                          borderColor:'#4dc2f8',
//                          borderWidth:1,
//                          marginTop:15
//                      }]}
//                      >
//                          <Text style={[styles.textSign,{
//                              color:'#4dc2f8'
//                          }]}>Sign Up</Text>
//                      </TouchableOpacity>

//                     </View>
//                 </Animatable.View>
//             </View>
//         )
//     }
// }

// var styles = StyleSheet.create({
//     container: {
//         flex:1,
//         backgroundColor:'#ffa500',
        
//     },
//     header: {
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//         paddingHorizontal:60,
//         paddingBottom:60
//     },
//     footer: {
//         flex:2.7,
//         backgroundColor:'white',
//         borderTopLeftRadius:30,
//         borderTopRightRadius:30,
//         paddingHorizontal:20,
//         paddingVertical:30
//     },
//     text_header: {
//         color:'white',
//         fontWeight:'bold',
//         fontSize:30,
        
//     },
//       logo: {
//           height:120,
//           width:200,  
//           marginTop:48,
        
// },
//       text_footer:{
//           color:'#05375a',
//           fontSize:18
//       },
//       action: {
//         alignItems: 'center',
//           flexDirection:'row',
//           marginTop:10,
//           borderBottomWidth:0,
//           borderBottomColor: '#f2f2f2',
//           paddingBottom:5
//       },
//       textInput: {
//           flex:1,
//           paddingLeft:10,
//           color:'#05375a',
          
//       },
//       button: {
//           alignItems:'center',
//           marginTop:50
//       },
//       signIn:{
//           width:'100%',
//           height:50,
//           justifyContent:'center',
//           alignItems:'center',
//           borderRadius:10
//       },
//       textSign: {
//           fontSize:19,
//           fontWeight:'bold',
//           color:'white'
//       },
//       visa:{
//           color:'black',
//           fontWeight:'bold',
          

//       },
//       visa2:{
//           paddingTop:20,
//           fontSize:25,
//           fontWeight:'bold',
         

//       }
        
    

// })