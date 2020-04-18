import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

const WebClientID ='1056256636551-9e8efi74jvubaqm60ku1nskg2co8r6to.apps.googleusercontent.com';

const App: () => React$Node = () => {

const [userInfo,setUserInfo] = useState(null)

  useEffect(()=>{
    GoogleSignin.configure({
      
      webClientId: WebClientID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER 
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
     
    });
  },[userInfo])



  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const info = await GoogleSignin.signIn();
      console.warn({userInfo:info})
      setUserInfo(info)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex:1}}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={signIn} style={styles.signIn_btn}>
            <Text>Log out</Text>
          </TouchableOpacity>
           
          <GoogleSigninButton style={{ width: 312, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={signIn}/>
  <Text style={{fontSize:14}}>{JSON.stringify(userInfo)}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signIn_btn: {
    // alignSelf:"center",
    width:"78%",
    justifyContent:'center',
    alignItems:"center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#060606',

  },
});

export default App;
