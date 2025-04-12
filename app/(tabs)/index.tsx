// Make an counter app

import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// Make a component called Counter
function Counter(){
  // We use useState(0) to initialise the value of count=0.
  const[count , setCount]=useState(0);
  
  // We need to return the component to show on the browser
return(
  // Make a   called view , It is same as <div></div>
  <View>
    {/* We create a <Text></Text> which is as similar as the tags of html like <p> <h1>. */}
    <Text style={styles.counterText}>Count : {count} </Text>
    {/* To display the value of state , We need to make a button */}
    <View style={styles.buttonContainer}>
    <View style={styles.button1}>
    <Button  title="+" onPress={()=>setCount(count+1)}/>
    </View>
    <View style={styles.button2}>
    <Button title="-" onPress={()=>setCount(count-1)}/>
    </View>
  </View>
  <View style={styles.button3}>
      <Button title="RESET" onPress={() => setCount(0) }/>
    </View>
  </View>

);
}
// We use this as a design of our Home Screen.
function HomeScreen(){
  return(
    <View style = {styles.container}>
      <Counter/>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  counterText: {
    fontSize: 50,
    marginBottom: 20,
    fontWeight:'bold',
    alignItems:'center',
    color:'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 100,
    height:50,
    marginTop: 20,
    marginBottom: 10,
    gap: 20,
    marginLeft:50,
    alignItems:'center',
  },
  button1: {
    borderRadius: 100,
    width: 50,
    marginTop:10,
  },
  button2: {
    borderRadius: 10,
    width: 50,
    marginTop:10,
  },
  button3: {
    // backgroundColor: 'black',
    borderRadius: 200,
    marginBottom: 80,
    alignSelf:'center',
    width:100,
    
  }
  // buttonText: {
  //   color: 'white',
  //   fontSize: 18,
  // }
  // // resetText: {
  // //   color: 'white',
  // //   fontSize: 16,
  // // }
});
export default HomeScreen;