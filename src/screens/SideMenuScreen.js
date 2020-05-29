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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Drawer from 'react-native-drawer';
import SideMenu from '../screens/SideMenu';
class SideMenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render() {
    return (
      <>
        <Drawer
  type="overlay"
  ref={(ref) => this._drawer = ref}
  content={<SideMenu
  onClose={this.closeControlPanel}
  ></SideMenu>}
  tapToClose={true}
  openDrawerOffset={0.2} // 20% gap on the right side of drawer
  panCloseMask={0.2}
  
  
  >
        <SafeAreaView style={{flex: 1}}>
        <LinearGradient colors={['#71F1D6', '#6BE3D6', '#66DDE5']} style={styles.linearGradient}>

            <TouchableOpacity onPress={()=>this.openControlPanel()} style={{marginLeft:20,marginTop:20}}><Image 
            style={{height:50,width:50,resizeMode:"contain",tintColor:"#FFFF", marginRight:5}}
             source={require('../assets/menu.png')}></Image></TouchableOpacity>
        </LinearGradient>
        </SafeAreaView>
        </Drawer>
      </>
    );
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    
  },
});
export default SideMenuScreen;
