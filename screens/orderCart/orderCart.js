import React from "react";
import {View, Text,SafeAreaView,TouchableOpacity,Image, FlatList } from "react-native";
import { connect } from "react-redux";

import { icons, COLORS, SIZES, FONTS,images } from '../../constants';
import CartView from '../cartView/cartView';
import { useRoute } from '@react-navigation/native';
import cartReducer from '../../redux/reducer';
import { useState } from "react";
import * as addAction from '../../redux/actions' ;

const orderCart = ({ navigation, props }) => {
  const {cartItems} = useState();
  const route = useRoute();
  
function renderHeader() {
  return (
      <View style={{flexDirection:'row'}}>
        <View style={{flex:1}}>
          <TouchableOpacity
              style={{
                  width: 37,
                  height:37,
                  justifyContent: 'center',
                  top:20,
                  backgroundColor:'white',
                  borderRadius:10,
                  left:15,
                  alignItems:'center'
              }}
              onPress={() => navigation.goBack()}
          >
              <Image
                  source={icons.back}
                  resizeMode="contain"
                  style={{
                      width: 20,
                      height: 35,
                      tintColor:  COLORS.primary
                  }}
              />
          </TouchableOpacity>
          </View>

          <View style={{justifyContent:'center',top:10,padding: SIZES.padding,flex:2,left:30}}>
            <Text style={{fontSize:30, fontWeight:'bold',}}>CART</Text>
          </View>

          <View style={{alignContent:'flex-end'}}>
          <TouchableOpacity
              style={{
                width: 37,
                height:37,
                alignItems:'center',
                justifyContent: 'center',
                top:20,
                backgroundColor:'white',
                borderRadius:10,
                right:15
                  
              }}
              onPress={() => navigation.goBack()}
          >
              <Image
                  source={icons.x}
                  resizeMode="contain"
                  style={{
                      width: 25,
                      height: 25,
                      tintColor:  COLORS.primary
                  }}
              />
          </TouchableOpacity>
          </View>
          
      </View>
  )
}

function _renderItem() {
<CartView source={images.chicago_hot_dog}/>
}

function renderCartItem(){
  return(
<FlatList 
     data={cartItems}
     keyExtractor={({item, index}) => item.id}
     renderItem={_renderItem}
     />
     )
  }




function renderOrder(){
  return(
    //  Buttons ADD TO CARTS //
    <View
    style={{
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        bottom: 0,
        left: 0,
        right: 0,
        position:'absolute',
    }}
>
  {/* {items To cart} */}
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: SIZES.padding * 2,
            paddingHorizontal: SIZES.padding * 3,
            borderBottomColor: COLORS.lightGray2,
            borderBottomWidth: 0,
           }}
    >
        <Text style={{ ...FONTS.h3 }}> items in Cart</Text>
        <Text style={{ ...FONTS.h3 }}>$</Text>
    </View>
    {/* {Add To cart} */}
    <View
 style={{
padding: SIZES.padding * 1,
alignItems: 'center',
justifyContent: 'center',                            
}}
>
<TouchableOpacity
  style={{
  width: SIZES.width * 0.9,
  padding: SIZES.padding,
  backgroundColor: COLORS.primary,
  alignItems: 'center',
  borderRadius: 15,
  
  }}
  onPress={() => navigation.navigate('PayingPage')}
  >
  <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Pay Now</Text>
</TouchableOpacity>
                    
</View>

</View>
  )
}



  return(
    <View style={{flex:1, backgroundColor:'white'}}>
     {renderHeader()}
     
     <CartView source={images.noodle_shop}/>
     {renderCartItem()}
    
     {renderOrder()}
    </View>
  )
  
}



const mapStateToProps = (state) =>{
  return { 
    cartItems: state.cartReducer.cartItems
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: () => dispatch(addAction.addItem())
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(orderCart);