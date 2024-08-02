import {
    StyleSheet,
    View,
    Text,
    Button,
    Alert,
    Image,
    Pressable,
    TextInput,
  } from "react-native";
  import { router, useRouter } from "expo-router";
export default function settings(){



return(
<View>
<Image
        style={styles.leaderboard}
        source={require("../assets/images/friendsback.png")}
      />
      <Image
        style={styles.leaderboard}
        source={require("../assets/images/friends.png")}
      />
<Pressable onPress={() => router.back()}>
          <Image
            style={styles.backbutton}
            source={require("../assets/images/backbutton.png")}
          />
        </Pressable>   
</View>

)};
const styles= StyleSheet.create({

leaderboard:{
position:"absolute",
},
backbutton:{
    top:100,
    left:48,
}
    
})