import React,{Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
  } from 'react-native';


const SideMenuItem = (props) =>{


    return(
        
        

<TouchableOpacity onPress={()=>props.on_touch()}  style={[styles.itemView,props.style]}>
{props.children}
</TouchableOpacity>
            

            
            
            
        
        

        

    )



}


const styles = StyleSheet.create({

    itemView:{
        flexDirection:"row",
        alignItems:"center",
        height:40,
        // backgroundColor:"grey",
        marginTop:30,
        marginLeft:50

    }

});

export default SideMenuItem;
