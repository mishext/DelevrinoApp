import React from "react";
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, images, SIZES } from '../../constants';
import styles from './styles';
import { connect } from "react-redux";

const Home = ({ navigation }) => {
    
  // Dummy Datas

  const initialCurrentLocation = {
      streetName: "143 troy street,NYC",
      gps: {
          latitude: 1.5496614931250685,
          longitude: 110.36381866919922
      }
  }

  const categoryData = [
      {
          id: 1,
          name: "Rice",
          icon: icons.rice_bowl,
      },
      {
          id: 2,
          name: "Noodles",
          icon: icons.noodle,
      },
      {
          id: 3,
          name: "Hot Dogs",
          icon: icons.hotdog,
      },
      {
          id: 4,
          name: "Salads",
          icon: icons.salad,
      },
      {
          id: 5,
          name: "Burgers",
          icon: icons.hamburger,
      },
      {
          id: 6,
          name: "Pizza",
          icon: icons.pizza,
      },
      {
          id: 7,
          name: "Snacks",
          icon: icons.fries,
      },
      {
          id: 8,
          name: "Sushi",
          icon: icons.sushi,
      },
      {
          id: 9,
          name: "Desserts",
          icon: icons.donut,
      },
      {
          id: 10,
          name: "Drinks",
          icon: icons.drink,
      },

  ]

  // price rating
  const affordable = 1
  const fairPrice = 2
  const expensive = 3

  const restaurantData = [
      {
          id: 1,
          name: "Burger",
          rating: 4.8,
          categories: [5, 7],
          priceRating: affordable,
          photo: images.burger_restaurant_1,
          duration: "30 - 45 min",
          location: {
              latitude: 1.5347282806345879,
              longitude: 110.35632207358996,
          },
          courier: {
              avatar: images.avatar_1,
              name: "Amy"
          },
          menu: [
              {
                  menuId: 1,
                  name: "Crispy Chicken Burger",
                  photo: images.crispy_chicken_burger,
                  description: "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty As with other hamburgers, a cheeseburger may include toppings such as lettuce, tomato, onion, pickles, bacon, mayonnaise, ketchup",
                  calories: 200,
                  price: 9.99,
                  type: '$',
                  rating: 4.9,
                  duration: "30 - 45 min",
                  quantity: 1,
                  selected: false,
              },
              {
                  menuId: 2,
                  name: "Crispy Chicken Burger with Honey Mustard",
                  photo: images.honey_mustard_chicken_burger,
                  description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                  calories: 250,
                  price: 15,
                  type: '$',
                  rating: 4.9,
                  duration: "20 - 30 min",
                  quantity: 1,
                  selected: false,
              },
              {
                  menuId: 3,
                  name: "Crispy Baked French Fries",
                  photo: images.baked_fries,
                  description: "Crispy Baked French Fries",
                  calories: 194,
                  price: 8.99,
                  type: '$',
                  rating: 4.9,
                  duration: "30 - 45 min",
                  quantity: 1,
                  selected: false,
              }
          ]
      },
      {
          id: 2,
          name: "Pizza",
          rating: 4.8,
          categories: [2, 4, 6],
          priceRating: expensive,
          photo: images.pizza_restaurant,
          duration: "15 - 20 min",
          location: {
              latitude: 1.556306570595712,
              longitude: 110.35504616746915,
          },
          courier: {
              avatar: images.avatar_2,
              name: "Jackson"
          },
          menu: [
              {
                  menuId: 4,
                  name: "Hawaiian Pizza",
                  photo: images.hawaiian_pizza,
                  description: "Canadian bacon, homemade pizza crust, pizza sauce",
                  calories: 250,
                  price: 15.99,
                  type: '$',
                  rating: 4.9,
                  duration: "30 - 45 min",
                  quantity: 1,
                  selected: false,
              },
              {
                  menuId: 5,
                  name: "Tomato & Basil Pizza",
                  photo: images.pizza,
                  description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                  calories: 250,
                  price: 9.99,
                  type: '$',
                  rating: 4.9,
                  duration: "30 - 40 min",
                  quantity: 1,
                  selected: false,
              },
              {
                  menuId: 6,
                  name: "Tomato Pasta",
                  photo: images.tomato_pasta,
                  description: "Pasta with fresh tomatoes",
                  calories: 100,
                  price: 9.99,
                  type: '$',
                  rating: 4.9,
                  duration: "30 - 45 min",
                  quantity: 1,
                  selected: false,
              },
              {
                  menuId: 7,
                  name: "Mediterranean Chopped Salad ",
                  photo: images.salad,
                  description: "Finely chopped lettuce, tomatoes, cucumbers",
                  calories: 100,
                  price: 9.99,
                  type: '$',
                  rating: 4.9,
                  duration: "30 - 45 min",
                  quantity: 1,
                  selected: false,
              }
          ]
      },
      {
          id: 3,
          name: "Hotdogs",
          rating: 4.8,
          categories: [3],
          priceRating: expensive,
          photo: images.hot_dog_restaurant,
          duration: "20 - 25 min",
          location: {
              latitude: 1.5238753474714375,
              longitude: 110.34261833833622,
          },
          courier: {
              avatar: images.avatar_3,
              name: "James"
          },
          menu: [
              {
                  menuId: 8,
                  name: "Chicago Style Hot Dog",
                  photo: images.chicago_hot_dog,
                  description: "Fresh tomatoes, all beef hot dogs",
                  calories: 100,
                  price: 9.99,
                  type: '$',
                  rating: 4.9,
                  duration: "30 - 45 min",
                  quantity: 1,
                  selected: false,
              }
          ]
      },
      {
          id: 4,
          name: "Sushi",
          rating: 4.8,
          categories: [8],
          priceRating: expensive,
          photo: images.japanese_restaurant,
          duration: "10 - 15 min",
          location: {
              latitude: 1.5578068150528928,
              longitude: 110.35482523764315,
          },
          courier: {
              avatar: images.avatar_4,
              name: "Ahmad"
          },
          menu: [
              {
                  menuId: 9,
                  name: "Sushi sets",
                  photo: images.sushi,
                  description: "Fresh salmon, sushi rice, fresh juicy avocado",
                  calories: 100,
                  price: 9.99,
                  type: '$',
                  rating: 4.3,
                  duration: "30 - 45 min",
                  quantity: 1,
                  selected: false,
              }
          ]
      },
      {
          id: 5,
          name: "Cuisine",
          rating: 4.8,
          categories: [1, 2],
          priceRating: affordable,
          photo: images.noodle_shop,
          duration: "15 - 20 min",
          location: {
              latitude: 1.558050496260768,
              longitude: 110.34743759630511,
          },
          courier: {
              avatar: images.avatar_4,
              name: "Muthu"
          },
          menu: [
              {
                  menuId: 10,
                  name: "Kolo Mee",
                  photo: images.kolo_mee,
                  description: "Noodles with char siu",
                  calories: 200,
                  price: 3.99,
                  type: '$',
                  rating: 4.7,
                  duration: "30 - 45 min",
                  quantity: 1,
                  selected: false,
              },
              {
                  menuId: 11,
                  name: "Sarawak Laksa",
                  photo: images.sarawak_laksa,
                  description: "Vermicelli noodles, cooked prawns",
                  calories: 300,
                  price: 3.99,
                  type: '$',
                  rating: 4.6,
                  duration: "30 - 45 min",
                  quantity: 1,
                  selected: false,
              },
              {
                  menuId: 12,
                  name: "Nasi Lemak",
                  photo: images.nasi_lemak,
                  description: "A traditional Malay rice dish",
                  calories: 300,
                  price: 5,
                  type: '$',
                  rating: 4.9,
                  duration: "30 - 45 min",
                  quantity: 1,
                  selected: false,
              },
              {
                  menuId: 13,
                  name: "Nasi Briyani with Mutton",
                  photo: images.nasi_briyani_mutton,
                  description: "A traditional Indian rice dish with mutton",
                  calories: 300,
                  price: 7.99,
                  type: '$',
                  rating: 4.9,
                  duration: "30 - 45 min",
                  quantity: 1,
                  selected: false,
              },

          ]
      },
      {

          id: 6,
          name: "Dessets",
          rating: 4.6,
          categories: [9, 10],
          priceRating: affordable,
          photo: images.kek_lapis_shop,
          duration: "35 - 40 min",
          location: {
              latitude: 1.5573478487252896,
              longitude: 110.35568783282145,
          },
          courier: {
              avatar: images.avatar_1,
              name: "Jessie"
          },
          menu: [
              {
                  menuId: 12,
                  name: "Teh C Peng",
                  photo: images.teh_c_peng,
                  description: "Three Layer Teh C Peng",
                  calories: 100,
                  price: 4.99,
                  type: '$',
                  rating: 4.9,
                  duration: "30 - 45 min",
                  quantity: 1,
                  selected: false,
              },
              {
                  menuId: 13,
                  name: "ABC Ice Kacang",
                  photo: images.ice_kacang,
                  description: "Shaved Ice with red beans",
                  calories: 100,
                  price: 4.99,
                  type: '$',
                  rating: 4.5,
                  duration: "30 - 45 min",
                  quantity: 1,
                  selected: false,
              },
              {
                  menuId: 14,
                  name: "Kek Lapis",
                  photo: images.kek_lapis,
                  description: "Layer cakes",
                  calories: 300,
                  price: 20,
                  type: '$',
                  rating: 4.3,
                  duration: "30 - 45 min",
                  quantity: 1,
                  selected: false,
              }
          ]

      }


  ]

  const [categories, setCategories] = React.useState(categoryData)
  const [selectedCategory, setSelectedCategory] = React.useState(null)
  const [restaurants, setRestaurants] = React.useState(restaurantData)
  const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


  function onSelectCategory(category) {
      //filter restaurant
      let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

      setRestaurants(restaurantList)

      setSelectedCategory(category)
  }

  function getCategoryNameById(id) {
      let category = categories.filter(a => a.id == id)

      if (category.length > 0)
          return category[0].name

      return ""
  }

  function renderHeader() {
    
      return (
          <View style={styles.parentHeader}>  

              <View style={styles.insideParent}>
                  <View style={styles.imageAndText}>
                      <Image source={icons.pin} resizeMode="contain" style={styles.headerImage}
                      />
                      <Text style={styles.textHeader}>{currentLocation.streetName}</Text>
                  </View>
              </View>

              <TouchableOpacity
                  style={styles.basket}
                  onPress={()=> navigation.navigate('orderCart',)}
              >
                  <Image
                      source={icons.basket}
                      resizeMode="contain"
                      style={styles.imageBasket}
                  />
              </TouchableOpacity>

          </View>
      )
  }

  function renderMainCategories() {
      const renderItem = ({ item }) => {
          return (
              <TouchableOpacity
                  style={[styles.mainCategory,{...styles.shadow,backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white} ]}
                  onPress={() => onSelectCategory(item)}>

                  <View style={[styles.category,{backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray}]}>
                      <Image
                          source={item.icon}
                          resizeMode="contain"
                          style={styles.iconOfItem} />
                  </View>
                 
                  <Text style={[styles.textOfItem,{...styles.shadow,color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black}]}>
                      {item.name}
                  </Text>

              </TouchableOpacity>
          )
      }

      return (
          <View style={styles.textUnderHeader} >
              <Text style={styles.textOfUnderHeader}>What would you</Text>
              <Text style={styles.textOfUnderHeader}>like to eat?</Text>

              <FlatList
                  data={categories}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => `${item.id}`}
                  renderItem={renderItem}
                  contentContainerStyle={styles.contentContainer}
              />
          </View>
      )
  }

  function renderRestaurantList() {
      const renderItem = ({ item }) => (

          <TouchableOpacity
              style={styles.restaurant}
              onPress={() => navigation.navigate("Restaurant", {
                  item,
                  currentLocation
              })}
          >
              {/* Image */}
              <View style={styles.restautantView}>
                  <Image
                      source={item.photo}
                      resizeMode="cover"
                      style={styles.restaurantImage}/>

                  <View style={styles.durationView}>
                      <Text style={styles.textOfDuration}>{item.duration}</Text>
                  </View>
              </View>

              {/* Restaurant Info */}
              <Text style={styles.restItemName}>{item.name}</Text>

              <View style={styles.infoView}>
                  {/* Rating */}
                  <Image
                      source={icons.star}
                      style={styles.starIcon}/>
                  <Text style={styles.ratingStyle}>{item.rating}</Text>

                  {/* Categories */}
                  <View style={styles.categories}>
                      {
                          item.categories.map((categoryId) => {
                              return (
                                  <View
                                      style={{ flexDirection: 'row' }}
                                      key={categoryId}
                                  >
                                      <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                      <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                  </View>
                              )
                          })
                      }

                      {/* Price */}
                      {
                          [1, 2, 3].map((priceRating) => (
                              <Text
                                  key={priceRating}
                                  style={{
                                      ...FONTS.body3,
                                      color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                  }}
                              >$</Text>
                          ))
                      }
                  </View>
              </View>
          </TouchableOpacity>
      )

      return (
          <FlatList
              data={restaurants}
              keyExtractor={item => `${item.id}`}
              renderItem={renderItem}
              contentContainerStyle={{
                  paddingHorizontal: SIZES.padding * 2,
                  paddingBottom: 30
              }}
          />
      )
  }

  return (
      <SafeAreaView style={styles.container}>
          {renderHeader()}
          {renderMainCategories()}
          {renderRestaurantList()}
      </SafeAreaView>
  )
}




export default Home;