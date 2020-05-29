import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { connect } from "react-redux";
import {
  addPlace
} from "./src/store/actions/index";
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CardView from './src/components/Cards/CardViewSmall';
import inputTextView from './src/components/Input/InputTextView';
import InputTextView from './src/components/Input/InputTextView';
import BlueButton from './src/components/Buttons/BlueButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class App extends Component  {

  constructor(props) {
  super(props);
  this.state={
    email:"",
    password:""
  }
  }

setEmail = (value)=>{

  this.setState({
    email:value
  })

}


setPassword = (value)=>{

  this.setState({
    password:value
  })

}

onPressedLogin = ()=>{

}

onPressedForgotPassword = ()=>{
  
}

onPressedSignUp = ()=>{
  
}
  placeAddedHandler = placeName => {

    this.props.onAddPlace(2);

  };
  render(){
  return (
    <>
      

      <SafeAreaView style={{flex:1}}>
      <LinearGradient colors={['#71F1D6', '#6BE3D6', '#66DDE5']} style={styles.linearGradient}>
     
<View style={{flex:0.3,marginLeft:20,marginRight:20,justifyContent:"flex-end"}}>
        
          <View style={styles.logoView}><Image style={{flex:1,resizeMode:"contain",tintColor:"#FFFF"}} source={require('./src/assets/logo.png')}></Image></View>
          <View style={styles.logoTextView}><Text style={styles.LogoText}>Imperial App</Text></View>
     
    </View>
          
  <KeyboardAwareScrollView 
  
  style={{flex:1}}
   contentContainerStyle={{paddingBottom:"5%",marginLeft:20,marginRight:20}}
   > 
   
<View><Text style={styles.whiteLabelText}>College Email</Text></View>
          <CardView>
            <View style={{flexDirection:"row",alignItems:"center"}}>
            <Image style={{height:25,width:30,resizeMode:"contain",tintColor:"#BBBBBB", marginRight:5}} source={require('./src/assets/usernameicon.png')}></Image>
            <InputTextView
             onChangeText={(value)=>this.setEmail(value)}
             value={this.state.email}
             placeholder="username@imperial.uc.uk"
             // autoCapitalize = 'none'
             placeholderTextColor="#BBBBBB" 
            ></InputTextView>
            </View>
          </CardView>



<View style={{marginTop:20}}><Text style={styles.whiteLabelText}>Password</Text></View>
          <CardView>
            <View style={{flexDirection:"row",alignItems:"center"}}>
            <Image style={{height:25,width:30,resizeMode:"contain",tintColor:"#BBBBBB", marginRight:5}} source={require('./src/assets/passwordicon.png')}></Image>
            <InputTextView
             onChangeText={(value)=>this.setPassword(value)}
             value={this.state.password}
             placeholder="Enter Your Password"
             secureTextEntry={true}
             // autoCapitalize = 'none'
             placeholderTextColor="#BBBBBB" 
            ></InputTextView>
            </View>
          </CardView>



          <TouchableOpacity onPress={()=>this.onPressedLogin()} style={{height:50,backgroundColor:"#939AF8",justifyContent:"center",alignItems:"center",marginTop:50}}>
            <Text style={[styles.whiteLabelText,{fontWeight:"bold"}]}>Login</Text>
          </TouchableOpacity>

        <View style={{height:20,justifyContent:"center",alignItems:"center",marginTop:20}}>
          <TouchableOpacity onPress={()=>this.onPressedForgotPassword()}>
            <Text style={[styles.whiteLabelText,{fontWeight:"700"}]}>Forgot Password?</Text>
          </TouchableOpacity>
          </View>

          <View style={{height:20,justifyContent:"center",alignItems:"center",marginTop:60}}>
          
            <Text style={[styles.whiteLabelText]}>New To The App?</Text>
          
          </View>

        <View style={{marginTop:10,marginLeft:40,marginRight:40}}>
          <BlueButton
          on_touch={this.onPressedSignUp}>
            <Text style={styles.LogoText}>Sign Up Now!</Text>
          </BlueButton>
          </View>

          

          </KeyboardAwareScrollView>
          
          
          


        


       </LinearGradient>
      </SafeAreaView>
      
    </>
  );
}
};

const styles = StyleSheet.create({
    container: {
      flex: 1
    },

  linearGradient:{
    flex:1
  },
  LogoText:{
    color:"#FFF",
    fontSize:hp('3%'),
    fontWeight:"bold"
  },
  logoView:{

    height:50,
    //  backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center"

  },
  logoTextView:{
      height:60,
      // backgroundColor:"grey",
      // justifyContent:"center",
    alignItems:"center"
  },
  whiteLabelText:{
    color:"#FFF",
    fontSize:hp('2.5%'),
    fontWeight:"500"
  },

  
});

const mapStateToProps = state => {
  console.log("in map state to props");
  return {
    places: state.placessRoot.places,   //placessRoot configure store me ha reducer me say places ka varibale 
    
  }; //state to props change kiya
};

const mapDispatchToProps = dispatch => {  //fucntions ko dispach kiya
  console.log("in map dispatch to props");
  return {
    onAddPlace: name => dispatch(addPlace(name)),  //addplace actions me ha index.js me.
    // onDeletePlace: () => dispatch(deletePlace()),
    // onSelectPlace: key => dispatch(selectPlace(key)),
    // onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
