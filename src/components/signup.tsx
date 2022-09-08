import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
// import CheckBox from '../../node_modules/react-native-check-box';

const Signup = () => {
    console.log('how to do it.');
  return (
    <SafeAreaView style={styles.container}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', width: '80%', height: 40}}>
            Create Account
        </Text>
        <View style={styles.formView}>
            <TextInput placeholder="Email" style={styles.txtIp} />
            <TextInput placeholder="Password" style={styles.txtIp} />
            <TextInput placeholder="Confirm Password" style={styles.txtIp} />
        </View>
        <View >
            <Text>
            I have read and agree to tearms and conditions
            </Text>
            <View></View>
            <TouchableOpacity style={styles.signupView}>
            <Text style={styles.signuptxt}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      {/* <View style={{flex: 1, justifyContent: 'center'}}>
        
        
        
        <View style={styles.loginView}>
          <Text>Already have an account? </Text>
          <TouchableOpacity>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtIp: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 5,
  },
  signupView: {
    alignItems: 'center',
    flexShrink:1,
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 1,
    padding: 3,
  },
  signuptxt: {
    fontWeight: 'bold',
  },
  loginView: {},
  formView: {

  }
});

export default Signup;
