import React from 'react'
import { View } from 'react-native';
import { useFonts} from 'expo-font';

const Header = (props) => {
 return (
  <View style={{margin:15}}>
    <Text style={{fontWeight:'bold', fontSize:30, color:'white'}}>
      {props.name}
    </Text>
  </View>
 )
}


export default Header;