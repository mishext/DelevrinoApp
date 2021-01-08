import {StyleSheet} from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants';


const styles = StyleSheet.create({

 container: {
    flex:1,
    backgroundColor:'white'
},

header: {
    width: 37,
    height:37,
    margin:8,
    justifyContent: 'center',
    backgroundColor:'white',
    borderRadius:10,
    left:15,
    alignItems:'center'
},

imageHeader: {
    width: 20,
    height: 35,
    tintColor:  COLORS.primary
},

itemPhoto: {
    height: SIZES.height * 0.35,
    width:SIZES.width
},

namePriceView: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:12,paddingRight:18
},

itemName: {
    ...FONTS.h2,fontWeight:'bold',
    fontSize:28,width:290,paddingRight:7
},

itemPrice: {
    ...FONTS.h2,fontWeight:'bold',
    fontSize:27, color: COLORS.primary
},

secondLineView: {
    flexDirection:'row',
    width: SIZES.width,
    marginTop: 20 ,
    justifyContent:'flex-start',
    paddingLeft:25,
    paddingBottom:25
},
rateIcon: {
    height: 20,
    width: 20,
    tintColor: COLORS.primary,
    marginRight: 10
},

rateText: {
    ...FONTS.body3,fontWeight:'bold',fontSize:20
},

durationIcon: {
   height: 20,
   width: 20,
   marginLeft:30,
   marginRight: 2
},

durationText: {
    ...FONTS.body3,fontWeight:'bold',
    fontSize:20,marginLeft:5
},

incDecView: {
    flexDirection:'row',
    paddingLeft:55,
},

decreaceView: {
    width:28,
    height:30,
    backgroundColor: COLORS.white,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,
    borderWidth:1,
    borderColor: COLORS.primary
},

decreaseSign: {
    ...FONTS.body1,
    color:COLORS.primary
},

numItemsView: {
   width:35,
   height:30,
   alignItems:'center',
   justifyContent:'center',
},

numItemsText: {
    ...FONTS.body1,
    color:COLORS.black,
    fontWeight:'bold',
    fontSize:25
},

increaseView: {
   width:28,
   height:30,
   backgroundColor: COLORS.primary,
   alignItems:'center',
   justifyContent:'center',
   borderRadius:7,
   borderWidth:1,
   borderColor: COLORS.primary
},

increaseSign: {
    ...FONTS.body1,
    color:'white',
    fontSize:20
},

descriptionView: {
    alignItems:'center',
    alignContent:'center',
    width:400,
    paddingLeft:12
},

descriptionText: {
    fontWeight:'bold',
    fontSize:16,
    color:'gray'
},

orderView: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    bottom: 0,
    left: 0,
    right: 0,
    position:'absolute',
},

numItemsInCartView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 3,
    borderBottomColor: COLORS.lightGray2,
    borderBottomWidth: 12,
},

FontnumItemsInCart: {
    ...FONTS.h3
},

buttonView: {
    padding: SIZES.padding * 1,
    alignItems: 'center',
    justifyContent: 'center',     
},

button: {
    width: SIZES.width * 0.9,
    padding: SIZES.padding,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    borderRadius: 15,
},

buttonWord: {
    color: COLORS.white,
    ...FONTS.h2
}


})


export default styles;