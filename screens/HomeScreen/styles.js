import {StyleSheet} from 'react-native';
import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    parentHeader: {
        flexDirection: 'row',
        height: 50
    },

    insideParent:{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    imageAndText: {
        flexDirection: 'row',
        width: '65%',
        height: "100%",
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 12,
        borderRadius: SIZES.radius
      },

      headerImage: {
        width:20,
        height:20,
        tintColor: COLORS.primary,
        paddingRight:22
    },

      textHeader: { 
        ...FONTS.h4,
        fontWeight:'bold' 
    },

       basket: {
        width: 50,
        paddingRight: SIZES.padding * 2,
        justifyContent: 'center'
    },

    imageBasket: {
        width: 30,
        height: 30
    },

    mainCategory: {
        flexDirection: 'row' ,
        padding: SIZES.padding,
        paddingBottom: SIZES.padding * 1,
        // backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
        borderRadius: SIZES.radius,
        alignItems: "center",
        justifyContent: "center",
        marginRight: SIZES.padding,
        
       
    },

    category: {
        width: 50,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
    },

    iconOfItem: {
        width: 30,
        height: 30
    },

    textOfItem: {
        paddingLeft: 12,
        paddingRight:12,
        marginTop: SIZES.padding,
        // color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
        ...FONTS.body5
    },

    textUnderHeader: {
        padding: SIZES.padding * 2
    },

    textOfUnderHeader: {
        ...FONTS.h1,
        fontWeight:'bold'
    },

    contentContainer: {
        paddingVertical: SIZES.padding * 2 
    },

    restaurant: {
        marginBottom: SIZES.padding * 2 
    },

    restaurantView: {
        marginBottom: SIZES.padding
    },

    restaurantImage: {
        width: "100%",
        height: 200,
        borderRadius: SIZES.radius
    },

    durationView: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: SIZES.width * 0.3,
        backgroundColor: COLORS.white,
        borderTopRightRadius: SIZES.radius,
        borderBottomLeftRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        // ...styles.shadow
    
    },

    textOfDuration: {
        ...FONTS.h4
    },

    restItemName: {
        ...FONTS.body2
    },

    infoView: {
        marginTop: SIZES.padding,
        flexDirection: 'row'
    },

    starIcon: {
        height: 20,
        width: 20,
        tintColor: COLORS.primary,
        marginRight: 10
    },

    ratingStyle: {
        ...FONTS.body3
    },

    categories: {
        flexDirection: 'row',
        marginLeft: 10
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
});

export default styles;