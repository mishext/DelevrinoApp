import React from 'react';
import {View, Text,Image, TouchableOpacity } from "react-native";
import { COLORS, images, SIZES } from '../../constants';
import styles from './styles'
import { useRoute } from '@react-navigation/native';

export default function CartView(props){
  // const route = useRoute();
  const {source, text1, text2, price} = props;

    return(

        <View style={{borderRadius:14, borderWidth:1,margin:4,borderColor:COLORS.primary, marginTop:10,}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start', margin:3,}}>
             
               <Image source={source} resizeMode="cover" 
                     style={{ width: 145,
                     height:120,
                     borderTopLeftRadius:10,
                     borderBottomLeftRadius:10
                     }}/>
             <View>
             {/* Crispy Cheese Burger */}
            <View style={{left:6,flex:1, width:245}}>
                <Text style={{fontSize:23, fontWeight:'bold', }} TextName={text1}/>
                {/* A cheeseburger is a hamburger topped with cheese */}
                <Text style={{fontSize:13, color:'gray', }} TextDesc={text2} />
            </View>
            <View style={{flexDirection:'row', left:6,justifyContent:'space-between', bottom:0}}>
               <Text style={{fontSize:25, fontWeight:'bold', color: COLORS.primary}} price={price}/>

               <View style={{flexDirection:'row'}}>
                   <TouchableOpacity 
                     style={{width:24,
                     height:25,
                     backgroundColor: COLORS.white,
                     alignItems:'center',
                     justifyContent:'center',
                     borderRadius:7,
                     borderWidth:1,
                     borderColor: COLORS.primary,
                     margin:4 }}
                 >
                         <Text style={{fontSize:20}}>-</Text>
                    </TouchableOpacity>

            <View style={{margin:4}}>
              <Text style={{fontSize:20,fontWeight:'bold'}}>2</Text>
            </View>

                  <TouchableOpacity 
                     style={{
                     width:24,
                     height:25,
                     backgroundColor: COLORS.primary,
                     alignItems:'center',
                     justifyContent:'center',
                     borderRadius:7,
                     borderWidth:1,
                     borderColor: COLORS.primary,
                     margin:4}}>
                              <Text style={{fontSize:20}}>+</Text>
                  </TouchableOpacity>
               </View>
          </View>



            </View>
            </View>
          
        </View>
    )
}