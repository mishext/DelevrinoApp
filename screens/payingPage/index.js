import React from "react";
import {View, Text,SafeAreaView,TouchableOpacity,Image } from "react-native";
import { icons, COLORS, SIZES, FONTS } from '../../constants'




const PayingPage = ({ navigation }) => {



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
            <Text style={{fontSize:30, fontWeight:'bold',}}>Payment</Text>
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

function renderFoodorder() {
  return(
    <View>
      {/* {First Apply Pay} */}
<View style={{
  width:390,
  height:100,
  borderRadius:25,
  backgroundColor:'white',
  justifyContent:'center',
  // alignItems:'flex-start',
  paddingLeft:20,
  marginTop:20,
  margin:10,
  left: 0,
  right: 0,
  }}>
    
<View style={{flexDirection:'row',}}>
  <Image
  source={icons.apple}
  resizeMode="contain"
  style={{
    width: 40,
    height: 40,
    tintColor:  'dimgrey'
   
}}
  />
  <Text style={{...FONTS.h2,paddingLeft: 17,paddingTop:4}}>Apple Pay</Text>
 
   <TouchableOpacity 
    style={{width:25,height:25,
    backgroundColor: 'white' ,
    borderRadius:25,
    borderColor: COLORS.primary,
    borderWidth:2,
    // marginLeft:82,
    marginTop:9,
    left:150,
    justifyContent:'center',
    alignItems:'center'
    }}>
 <View style={{backgroundColor:COLORS.primary, width:16,height:16, borderRadius:25, }}/>
  </TouchableOpacity>
  
  </View>

{/* {Visa  Pay} */}
</View>
<View style={{
  width:390,
  height:100,
  borderRadius:25,
  backgroundColor:'white',
  justifyContent:'center',
  // alignItems:'flex-start',
  paddingLeft:20,
  marginTop:20,
  margin:10,
  left: 0,
  right: 0,
  }}>
    
<View style={{flexDirection:'row',}}>
  <Image
  source={icons.visa}
  resizeMode="contain"
  style={{
    width: 40,
    height: 40,
   
}}
  />
  <Text style={{...FONTS.h2,paddingLeft: 17,paddingTop:4}}>Credit Card</Text>
  <View style={{width:25,height:25,
    backgroundColor:COLORS.white,
    borderRadius:25,
    borderColor: COLORS.Gray,
    borderWidth:2,
    // marginLeft:82,
    marginTop:9,
    left:136
    
    }}>

  </View>
</View>

</View>
{/* {Paypal Payment} */}
<View style={{
  width:390,
  height:100,
  borderRadius:25,
  backgroundColor:'white',
  justifyContent:'center',
  paddingLeft:20,
  marginTop:20,
  margin:10,
  left: 0,
  right: 0,
  }}>
    
<View style={{flexDirection:'row',}}>
  <Image
  source={icons.paypal}
  resizeMode="contain"
  style={{
    width: 40,
    height: 40,
   
}}
  />
  <Text style={{...FONTS.h2,paddingLeft: 17,paddingTop:4}}>Paypal</Text>
  <View style={{width:25,height:25,
    backgroundColor:COLORS.white,
    borderRadius:25,
    borderColor: COLORS.Gray,
    borderWidth:2,
    // marginLeft:82,
    marginTop:9,
    left:179
    
    }}>

  </View>
</View>
</View>
</View>
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
  
  >
  <Text style={{ color: COLORS.white, ...FONTS.h2 }}>CONFIRM ORDER</Text>
</TouchableOpacity>
                    
</View>

</View>
  )
}



  return(
    <View style={{flex:1}}>
     {renderHeader()}
     {renderFoodorder()}
     {renderOrder()}
    </View>
  )
  
}

export default PayingPage;