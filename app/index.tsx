import {View, Text, Pressable, StyleSheet, Image} from 'react-native'
import {router} from 'expo-router'

export default function Login() {

    const onPressLogin = () => {
        router.replace('/home')
    }

    return(
<View>
<Pressable onPress={() => router.push("nothave")}>
                <Image
                  style={styles.backbutton}
                  source={require("../assets/images/getstarted.png")}
                />
              </Pressable>
<Image
          style={styles.leaderboard}
          source={require("../assets/images/login1.png")}
        />

<Pressable onPress={() => router.push("have")}>
                <Image
                  style={styles.have}
                  source={require("../assets/images/have.png")}
                />
              </Pressable>
            </View>

)}

const styles = StyleSheet.create({
    leaderboard:{
top:0,
zIndex:-10,
    },
    backbutton: {
        position:"absolute",
        top: 620,
        left: 103,
        zIndex:100,
      },
have:{
    top: -220,
    left: 26,
    zIndex:1000,
},
})