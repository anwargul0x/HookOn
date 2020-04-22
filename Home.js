import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

const Home = props => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.avatar_box}>
        <Image
          source={{
            uri:
              props.userInfo?.user.photo ||
              'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png',
          }}
          style={styles.avatar_img}
          resizeMode="contain"
        />
        <Text style={styles.username}>{props.userInfo?.user.name}</Text>
        <Text style={[styles.username,{marginVertical:12}]}>{props.userInfo?.user.email}</Text>
      </View>
      <View
        style={[
          styles.wrapper,
          {
            width: '100%',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            zIndex: 1,
            marginTop: -15
          },
        ]}>
             
        <TouchableOpacity onPress={props.log_out} style={styles.logout_btn}>
          <Text style={{fontSize: 24, lineHeight: 32}}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34495e',
  },
  avatar_box: {
    width: '100%',
    paddingVertical: 35,
    paddingHorizontal: 25,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  avatar_img: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  username: {
    fontSize: 25,
    fontWeight: '700',
    color: '#ffffff',
  },
  logout_btn: {
    // alignSelf:"center",
    width: 250,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#060606',
  },
});
export default Home;
