import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { router, useRouter } from "expo-router";
export default function settings(){



return(
<View>
            <Pressable onPress={() => router.back()}>
          <Image
            style={styles.exittip}
            source={require("../assets/images/exittip.png")}
          />
        </Pressable>
<Image
            style={styles.tip1}
            source={require("../assets/images/tip3.png")}
          />


</View>

)};
const styles= StyleSheet.create({
tip1:{
top:0,
position:"absolute",
zIndex:-5,
},
exittip:{
    position:"absolute",
    zIndex:100,
top:663,
left:48,
},


    
})