import {StyleSheet} from 'react-native';
import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'flex-start',
        margin:10
    },

    imageContainer: {
        left:0
    },

    imageItem: {
        width:150,
        height:125,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    },

    itemNameContainer: {
        flexDirection:'column',
        justifyContent:'space-around',
        flex:1,
        marginLeft:10
    },

    itemName: {
        ...FONTS.h2,
        fontWeight:'bold',
        fontSize:19
    },

    itemDescription: {
        color:'gray'
    },
    
    priceContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:6
    },

    childContainer: {
        flexDirection:'row'
    },

    price: {
        ...FONTS.h2,
        fontWeight:'bold',
        color: COLORS.primary
    },

    incDecContainer: {
        flexDirection:'row',
        marginRight:18
    },

    DecrementContainer: {
        width:24,
        height:25,
        backgroundColor: COLORS.white,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        borderWidth:1,
        borderColor: COLORS.primary,
        margin:4
    },

    DecreamentFont: {
        fontSize:20
    },

    countContainer: {
        margin:4
    },

    countNum: {
        fontSize:20,
        fontWeight:'bold'
    },

    IncrementContainer: {
        width:24,
        height:25,
        backgroundColor: COLORS.primary,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        borderWidth:1,
        borderColor: COLORS.primary,
        margin:4
    },

    IncrementFont: {
        fontSize:20
    }



})