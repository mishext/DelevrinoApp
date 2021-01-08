// import React from "react";
// import {View, Text, StyleSheet, TextInput,TouchableOpacity} from "react-native";
// import * as Animatable from 'react-native-animatable';
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import Feather from "react-native-vector-icons/Feather";
// import LinearGradient from "react-native-linear-gradient";




// export default class SignUpComponent extends React.Component{
//   constructor(props){
//       super(props);
//       this.state={
//         check_textInputChange: false,
//         password:'',
//         password_confirm:'',
//         secureTextEntry: true,
//         secureTextEntry_confirm: true
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
//           secureTextEntry_confirm(){
//             this.setState({
//                 secureTextEntry_confirm: !this.state.secureTextEntry_confirm
//             })
//         }
  
  

//     render(){
//         return(
//             <View style={styles.container}>
//                 {/* <StatusBar barStyle="light-content" /> */}
//                 <View style={styles.header}>
//                 <Animatable.Image
//                    animation="bounceIn"
//                    duration={1500}
//                    source={require('./loo1.png')}
//                    style={styles.logo}
//                    resizeMode={"stretch"}
//                    ></Animatable.Image>
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
//                     <Text style={[styles.text_footer,{
//                         marginTop:35
//                     }]}>Confirm Password</Text>
//                     <View style={styles.action}>
//                     <FontAwesome 
//                        name="lock"
//                        color="#05375a"
//                        size={20}/>
//                        {this.state.secureTextEntry_confirm ?
//                        <TextInput 
//                        placeholder="Confirm password..."
//                        secureTextEntry={true}
//                        style={styles.textInput}
//                        value={this.state.password_confirm}
//                        onChangeText={(text)=>this.setState({
//                            password_confirm: text
//                        })}
//                        />
//                        :
//                        <TextInput 
//                        placeholder="Confirm password..."
//                        style={styles.textInput}
//                        value={this.state.password_confirm}
//                        onChangeText={(text)=>this.setState({
//                            password_confirm: text
//                        })}
//                        />}

//                          <TouchableOpacity
//                          onPress={()=>this.secureTextEntry_confirm()}>
//                              {this.state.secureTextEntry_confirm ?
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
//                     <View style={styles.textPrivate}>
//                         <Text style={styles.color_textPrivate}>By signing up you agree to our</Text>
//                         <Text style={styles.color_textPrivate,{
//                         fontWeight:'bold',color:'gray'}}> Terms of Service</Text>
//                         <Text style={styles.color_textPrivate}> and</Text>
//                         <Text style={styles.color_textPrivate,{
//                         fontWeight:'bold',color:'gray'}}> Privacy Policy</Text>
//                     </View>
                    
//                     <View style={styles.button}>
//                       <LinearGradient colors={['#5db8fe', '#39cff2']}
//                         style={styles.signUp}>
//                          <Text style={styles.textSign}>Sign Up</Text>
//                       </LinearGradient>
         
                     

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
//         justifyContent:'flex-start',
//         alignItems:'flex-start',
//         paddingHorizontal:60,
//         paddingBottom:60
//     },
//     footer: {
//         flex:3,
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
//         // justifyContent:'center',
//         // alignItems:'center'
//     },
//       logo: {
//           height:180,
//           width:200,  
//           marginLeft:44,
//           marginTop:8
//       },
//       text_footer:{
//           color:'#05375a',
//           fontSize:18
//       },
//       action: {
//         alignItems: 'center',
//           flexDirection:'row',
//           marginTop:1,
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
//           marginTop:27
//       },
//       signUp:{
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
//       textPrivate:{
//           flexDirection:'row',
//           flexWrap:'wrap',
//           marginTop:1
//       },
//       color_textPrivate:{
//           color:'gray'
//       }
        
    

// })