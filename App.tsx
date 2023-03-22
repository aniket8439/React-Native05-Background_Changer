

import React, { useState } from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';





function App(): JSX.Element {

  const[randomColor, setRandomColor] = useState("#000000") 
  const[randomColor2, setRandomColor2] = useState("#EF5354")
  const[randomColor3, setRandomColor3] = useState("#E8BD0D")
  
  const generateColor = () => {
    const hexRange = '123456789ABCDEF'
    let color = '#'
    let color2 = '#'
    let color3 = '#'

  for (let i = 0; i < 6; i++) {
    color += hexRange[Math.floor(Math.random() * 16)]
    color2 += hexRange[Math.floor(Math.random() * 16)]
    color3 += hexRange[Math.floor(Math.random() * 16)]
    
  }
  setRandomColor(color)
  setRandomColor2(color2)
  setRandomColor3(color3)
  }

  return (
    <>
    <StatusBar backgroundColor={"#000000"}/>
    <View style={[styles.container, {backgroundColor: randomColor}]}>
      <View style={styles.flex}>
      <View style={[styles.circle, {backgroundColor:randomColor2}]}>
        <Text style={styles.actionbtntxt}>Hey</Text>
      </View>
      <View style={[styles.circle, {backgroundColor:randomColor3}]}>
        <Text style={styles.actionbtntxt}>There!</Text>
      </View>
      </View>
      
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionbtn}>
          <Text style={styles.actionbtntxt}>Press me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  actionbtn:{
    paddingVertical:10,
    paddingHorizontal:10,
    backgroundColor:"#B9345A",
    borderRadius:10,
    elevation:3,
    
  },
  actionbtntxt:{
    color:"#FFFFFF",
    fontSize:20,
    textAlign:"center"
  },
  flex:{
    marginBottom:20,
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
    paddingHorizontal:0
  },
  circle:{
    height:100,
    width:100,
    borderRadius:100/2,
    alignItems:"center",
    justifyContent:"center",
    margin:20
  }
 
});

export default App;
