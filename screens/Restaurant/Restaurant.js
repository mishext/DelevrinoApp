import React from "react";
import {View, Text, SafeAreaView,Image, TouchableOpacity, Animated } from "react-native";
import { connect } from "react-redux";
import { icons, COLORS, SIZES, FONTS } from '../../constants';
import styles from './styles';
import {addItem} from '../../redux/actions'
import { useRoute } from '@react-navigation/native';
import * as addAction from '../../redux/actions' ;


const Restaurant = ({ route, navigation }) => {
 
  
  const [restaurant, setRestaurant] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [orderItems, setOrderItems] = React.useState([]);

  React.useEffect(() => {
    let { item, currentLocation } = route.params;

    setRestaurant(item)
    setCurrentLocation(currentLocation)
})

  function editOrder(action, menuId, price) {
  let orderList = orderItems.slice()
  let item = orderList.filter(a => a.menuId == menuId)

  if (action == "+") {
      if (item.length > 0) {
          let newQty = item[0].qty + 1
          item[0].qty = newQty
          item[0].total = item[0].qty * price
      } else {
          const newItem = {
              menuId: menuId,
              qty: 1,
              price: price,
              total: price
          }
          orderList.push(newItem)
      }

      setOrderItems(orderList)
  } else {
      if (item.length > 0) {
          if (item[0]?.qty > 0) {
              let newQty = item[0].qty - 1
              item[0].qty = newQty
              item[0].total = newQty * price
          }
      }

      setOrderItems(orderList)
  }
}

function getOrderQty(menuId) {
  let orderItem = orderItems.filter(a => a.menuId == menuId)

  if (orderItem.length > 0) {
      return orderItem[0].qty
  }

  return 0
}

function getBasketItemCount(){
  let itemCount = orderItems.reduce((a, b) => a + (b.qty ||0), 0)
     
      return itemCount
}

function sumOrder() {
  let total = orderItems.reduce((a, b) => a + (b.total || 0), 0)
  
  return  total.toFixed(2)
}


function renderHeader() {
  return (
      <View style={{  }}>
          <TouchableOpacity
              style={styles.header}
              onPress={() => navigation.goBack()}
          >
              <Image
                  source={icons.back}
                  resizeMode="contain"
                  style={styles.imageHeader}
              />
          </TouchableOpacity>

          
      </View>
  )
}



function renderFoodinfo() {
 
  return(
    <Animated.ScrollView
    horizontal
    pagingEnabled
    scrollEventThrottle={16}
    snapToAlignment="center"
    showsHorizontalScrollIndicator={false}
    >
     
     {
       restaurant?.menu.map((item, index) => (
         <View
         key={`menu-${index}`}
         style={{alignItems:'center',}}
         >
           {/* Photo of item */}
         <View>
           <Image 
           source={item.photo}
           resizeMode="cover"
          style={styles.itemPhoto}
          />
         </View>
           {/* Name and Price */}
    
    <View style={styles.namePriceView}>
     <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.type}{item.price}</Text> 
    </View>

{/* Rate and Duration time */}
<View
style={styles.secondLineView}>
<Image
  source={icons.star}
  style={styles.rateIcon}
  />
 <Text style={styles.rateText}>{item.rating}</Text>
 <Image
  source={icons.duration}
  style={styles.durationIcon}
  />
 <Text style={styles.durationText}>{item.duration}</Text>

 {/* - and number and  + */}

  <View style={styles.incDecView}>
     
     <TouchableOpacity
      onPress={() => editOrder("-", item.menuId, item.price)}
      style={styles.decreaceView}>
        <Text style={styles.decreaseSign}>-</Text>
     </TouchableOpacity>

  <View>
    <TouchableOpacity style={styles.numItemsView}>
      <Text style={styles.numItemsText}>{getOrderQty(item.menuId)}</Text>
    </TouchableOpacity>
   </View>

 <TouchableOpacity
 onPress={() => editOrder("+", item.menuId, item.price)}
 style={styles.increaseView}>
   <Text style={styles.increaseSign}>+</Text>
 </TouchableOpacity>
  
   </View>
</View>

  {/* Description  */}

    <View style={styles.descriptionView}>
    <Text style={styles.descriptionText}>{item.description}</Text>
    </View>

</View>              
   
       ))
     }
     
   </Animated.ScrollView>
  )
}

function renderOrder(){
  const route = useRoute();

  return(
    //  Buttons ADD TO CARTS //
<View style={styles.orderView}>

  {/* {items In cart} */}
    <View style={styles.numItemsInCartView}>
        <Text style={styles.FontnumItemsInCart}>{getBasketItemCount()} items in Cart</Text>
        <Text style={styles.FontnumItemsInCart}>${sumOrder()}</Text>
    </View>
    {/* {Add To cart} */}
    <View style={styles.buttonView}>
         <TouchableOpacity
           style={styles.button}
           onPress={() => addItem(route.params.item)}>
             
           <Text style={styles.buttonWord}>ADD TO CART</Text>
         </TouchableOpacity>
    </View>

</View>
  )
}



  return(
    
      <SafeAreaView style={styles.container}>
      
      {renderHeader()}
      
      {renderFoodinfo()}

      {renderOrder()}
    </SafeAreaView> 
    
   
  )
}
// ({
//   addItem: item => dispatch(addItem(item))
// });

// function mapStateToProps (state)  {
// return {
// addItem: item => state(addItem(item))
// }
// }
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

export default connect(mapStateToProps,mapDispatchToProps)(Restaurant);