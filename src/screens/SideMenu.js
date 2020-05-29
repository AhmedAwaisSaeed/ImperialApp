import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Platform,
  ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SideMenuItem from '../components/SideMenuItem';
class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount(){
      StatusBar.setHidden(true);
  }
  settingsPressed = (value)=>{

  }
  contactusPressed = (value)=>{

  }
  sharePressed = (value)=>{

  }
  render() {
    return (
      <>
        
        <SafeAreaView style={{flex: 1,marginTop:"20%",marginBottom:"10%",borderTopRightRadius:20,borderBottomRightRadius:20}}>
        <LinearGradient colors={['#6BE3D6', '#66DDE5','#71F1D6']} style={styles.linearGradient}>

<View style={{flex:0.6}}>
    <ImageBackground
     style={styles.image} 
     imageStyle={{  borderTopRightRadius:20,
        borderBottomRightRadius:20, }}
     source={require('../assets/imageBackground.jpg')}>

<View style={styles.overlay}>

    <View style={{flex:1,justifyContent:"center"}}>
    
        <TouchableOpacity onPress={()=>this.props.onClose()} style={styles.RightCorner}>

            <Image source={require('../assets/group.png')}></Image>

            
        </TouchableOpacity>
         <View style={{alignItems:"center",marginBottom:20}}><Text style={[styles.textStyle,{fontSize:hp('3%')}]}>Me Julie</Text></View>
         <View style={{alignItems:"center"}}>
         <View style={{backgroundColor:"red",height:100,width:100,
         borderRadius:100,borderWidth:1,borderColor:"#FFFF"
         
         }}>
             <Image style={{width:"100%",height:"100%",borderRadius:100}} source={require('../assets/imageBackground.jpg')}>
                 
             </Image>
         </View>
         </View>
 </View>

</View>
    </ImageBackground>
    
    
</View>





            <SideMenuItem
            on_touch={this.settingsPressed}>
                <View style={{flex:0.2}}><Image style={{width:30,height:50}} source={require('../assets/settings.png')}></Image></View>
                <View style={{flex:1}}><Text style={styles.textStyle}>App Settings</Text></View>
            </SideMenuItem>

            <SideMenuItem
            on_touch={this.contactusPressed}>
                <View style={{flex:0.2}}><Image style={{flex:1,resizeMode:"contain"}} source={require('../assets/contactus.png')}></Image></View>
                <View style={{flex:1}}><Text style={styles.textStyle}>Contact Us</Text></View>
            </SideMenuItem>


            <SideMenuItem
            style={{marginLeft:53}}
            on_touch={this.sharePressed}>
               <View style={{flex:0.2}}><Image style={{flex:1,resizeMode:"contain"}} source={require('../assets/share.png')}></Image></View>
                <View style={{flex:1}}><Text style={styles.textStyle}>Share</Text></View>
            </SideMenuItem>
            




        </LinearGradient>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderTopRightRadius:20,
    borderBottomRightRadius:20
    
  },
  textStyle:{
    color:"#FFF",
    fontSize:hp('2.5%'),
    fontWeight:"bold"
  },
  image: {
    flex:1,
    resizeMode: "contain",
    justifyContent: "center",
  
    
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderTopRightRadius:20,
    borderBottomRightRadius:20
  },
  RightCorner: {
    position: 'absolute',
    right: 15,
    top: 15,
  }
});
export default SideMenu;
