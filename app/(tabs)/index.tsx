import LevelButton from "@/components/LevelButton";
import { StyleSheet, View, Text,Button,Alert,Image, Pressable, } from "react-native";
export default function home(){



return(

<View>
   
  <Text style={styles.header}>Subject Math</Text>


  <Image 
              style={styles.stretch}
              source={require('../../assets/images/lastlevel.png')}></Image>
  <Pressable  onPress={() => Alert.alert('Started !')} >
    <Image 
                style={styles.levelbutton}
                source={require('../../assets/images/levelbutton.png')}/>
  </Pressable>
            
  <Pressable  onPress={() => Alert.alert('Started !')} >

    <Image
                style={styles.sigma}
                source={require('../../assets/images/giftlevel.png')}></Image>
    <Image 
                style={styles.levelbutton2}
                source={require('../../assets/images/levelbutton.png')}/>
  </Pressable>
  <Pressable  onPress={() => Alert.alert( 
                      'Started !')} >
    <Image 
                style={styles.levelbutton3}
                source={require('../../assets/images/levelbutton.png')}/>
  </Pressable>
  
  <Pressable  onPress={() => Alert.alert('Started !')} >
    <Image 
                style={styles.levelbutton4}
                source={require('../../assets/images/levelbutton.png')}/>
  </Pressable>
  
  <Pressable  onPress={() => Alert.alert('Started !')} >
    <Image 
                style={styles.levelbutton5}
                source={require('../../assets/images/levelbutton.png')}/>
  </Pressable>
  <Image
                style={styles.Arrow1}
                source={require('../../assets/images/Arrow1.png')}></Image>
  <Image
                style={styles.Arrow2}
                source={require('../../assets/images/Arrow2.png')}></Image>
          <Image
                style={styles.Arrow3}
                source={require('../../assets/images/Arrow3.png')}></Image>    

<Image
                style={styles.Arrow4}
                source={require('../../assets/images/Arrow4.png')}></Image> 
<Image
                style={styles.Arrow5}
                source={require('../../assets/images/Arrow5.png')}></Image> 
<Image
                style={styles.star}
                source={require('../../assets/images/star.png')}></Image> 
<Image
                style={styles.lineheader}
                source={require('../../assets/images/lineheader.png')}></Image> 
 <Pressable  onPress={() => Alert.alert('Started !')} >
    <Image 
                style={styles.leftarrow}
                source={require('../../assets/images/leftarrow.png')}/>
  </Pressable>
  <Pressable  onPress={() => Alert.alert('Started !')} >
    <Image 
                style={styles.rightarrow}
                source={require('../../assets/images/rightarrow.png')}/>
  </Pressable>





</View>

)};
const styles= StyleSheet.create({

    header :{
      position: 'absolute',
    top: 80, 
    fontSize: 45,
    left: 85, 
}
,stretch: {
  position: 'absolute', 
  width: 100,
    height: 100,
    left: 70,
    top: 164,
  }
  ,sigma: {
    position: 'absolute',
    zIndex: 7,
    width: 45,
    height: 45,
    left: 94,
    top: 349,
  }
  
  ,levelbutton: {
    position: 'absolute',
    top: 240,
    right:70,
    width:95,
    height:95,
  }
  ,levelbutton2: {
    position: 'absolute',
    top: 334,
    left: 70,
    width:95,
    height:95,
  }
  ,levelbutton3: {
    position: 'absolute',
    right:70,
    top:446,
    width:95,
    height:95,
  }
,levelbutton4: {
  position: 'absolute',
  left:70,
  top:540,
  width:95,
  height:95,
}
,levelbutton5:{
  position: 'absolute',
  right:70,
  top:650,
  width:95,
  height:95,
}
,Arrow1: {
position: 'absolute',
top: 600,
right:170,
}
,Arrow2: {
  position: 'absolute',
top: 500,
right:175,
}
,Arrow3: {
  position: 'absolute',
top: 390,
right:175,
}
,Arrow4: {
  position: 'absolute',
top: 298,
right:175,
} 
,Arrow5: {
  position: 'absolute',
top: 240,
right:165,
} 
,star: {
  position: 'absolute',
  zIndex: 7,
  width: 45,
  height: 45,
  right:95,
  top:664,
}
,lineheader: {
  position: 'absolute',
top: 150,
right:70,
width: 300, 
} 
,leftarrow:{
  position: 'absolute',
  top: 85,
left: 25,
}
,rightarrow:{
  position: 'absolute',
  top: 85,
right:33,
}







})
