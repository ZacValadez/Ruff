import { StyleSheet, View, Text,Button,Alert,Image, Pressable } from "react-native";


export default function LevelButton(){

return(
<View>
   
<Pressable  onPress={() => Alert.alert( 
                    'Started !')} >
<Image 
            // style={styles.stretch}
            source={require('../assets/images/levelbutton.png')}/>
</Pressable>

</View>

)};



    
