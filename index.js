import Login from './App';
import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import React from 'react';

const store = configureStore();   // yeh function configure store ki file say a raha ha
function ReduxProvider(Component) {
    // store = store || createStore({});

    return (props) => (
        <Provider store={store}>
            <Component {...props} />
        </Provider>
    );
}

Navigation.registerComponent('Login', () => ReduxProvider(Login), () => Login);
Navigation.events().registerAppLaunchedListener(() => {


    Navigation.setDefaultOptions({
        topBar: {
            visible: false,
            drawBehind: false,
            animate: false,
          },

        statusBar: {

             drawBehind: false,
             visible: false,
             backgroundColor:"#FFFF",
             style: 'dark',

         
     },
     
         
      
        })






   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'Login',
               options: {
                statusBar: {
                      drawBehind: true,
                      visible: false
                    }
                 }
             }
           }  
         ]
       }
     }
  });
});
