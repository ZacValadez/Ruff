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
export default function profile() {
  return (
    <View>
      <Image
        style={styles.ballprofile}
        source={require("../../assets/images/ballprofile.png")}
      />
      <Image
        style={styles.userprofile}
        source={require("../../assets/images/jeanprofile.png")}
      />
      <Image
        style={styles.ballborderleft}
        source={require("../../assets/images/ballborderleft.png")}
      />
      <Image
        style={styles.ballborderright}
        source={require("../../assets/images/ballborderright.png")}
      />
      <Image
        style={styles.textbox}
        source={require("../../assets/images/textbox.png")}
      />
      <Image
        style={styles.textbox2}
        source={require("../../assets/images/textbox.png")}
      />
      <Image
        style={styles.textbox3}
        source={require("../../assets/images/textbox.png")}
      />
      <Image
        style={styles.textbox4}
        source={require("../../assets/images/textbox.png")}
      />
      <Image
        style={styles.textbox5}
        source={require("../../assets/images/textbox.png")}
      />
      <Text style={styles.username}>Username</Text>
      <Text style={styles.usernametext}>JeanBean123</Text>

      <Text style={styles.fullname}>Fullname</Text>
      <Text style={styles.fullnametext}>Jean baltazar</Text>

      <Text style={styles.email}>Email</Text>
      <Text style={styles.emailtext}>jeanbaltazar49@gmail.com</Text>

      <Text style={styles.password}>Password</Text>
      <Text style={styles.passwordtext}>******</Text>

      <Text style={styles.birthday}>Birthday</Text>
      <Text style={styles.birthdaytext}>2/14/2009</Text>
      <Pressable onPress={() => router.push("stats")}>
        <Image
          style={styles.stats}
          source={require("../../assets/images/stats.png")}
        />
      </Pressable>
      <Pressable onPress={() => router.push("leaderboard")}>
        <Image
          style={styles.leaderboard}
          source={require("../../assets/images/leaderboardbutton.png")}
        />
      </Pressable>
      <Pressable onPress={() => router.push("badge")}>
        <Image
          style={styles.badge}
          source={require("../../assets/images/badges.png")}
        />
      </Pressable>
      <Pressable onPress={() => router.push("friends")}>
        <Image
          style={styles.friends}
          source={require("../../assets/images/friend.png")}
        />
      </Pressable>
      <Image style={styles.ex} source={require("../../assets/images/ex.png")} />
    </View>
  );
}
const styles = StyleSheet.create({
  ballprofile: { position: "absolute" },
  ex: {
    top: 240,
    left: 85,
  },
  userprofile: {
    position: "absolute",
    left: 97,
    top: 117,
    zIndex: 10,
  },
  ballborderleft: {
    position: "absolute",
    left: -3,
    top: 117,
  },
  ballborderright: {
    position: "absolute",
    top: 117,
    right: 0,
  },
  changeprofile: {
    top: 297,
    position: "absolute",
    right: 122,
    zIndex: 15,
  },
  username: {
    position: "absolute",
    top: 382,
    left: 43,
    fontSize: 15,
    fontWeight: 400,
  },
  usernametext: {
    position: "absolute",
    top: 414,
    left: 148,
    fontSize: 20,
    color: "#08457E",
    fontWeight: 400,
  },
  textbox: {
    position: "absolute",
    top: 405,
    left: 22,
  },
  textbox2: {
    position: "absolute",
    top: 480,
    left: 22,
  },

  textbox3: {
    position: "absolute",
    top: 553,
    left: 22,
  },

  textbox4: {
    position: "absolute",
    top: 629,
    left: 22,
  },

  textbox5: {
    position: "absolute",
    top: 702,
    left: 22,
  },
  fullname: {
    position: "absolute",
    top: 460,
    left: 43,
    fontSize: 15,
    fontWeight: 400,
  },
  fullnametext: {
    position: "absolute",
    top: 490,
    left: 148,
    fontSize: 20,
    color: "#08457E",
    fontWeight: 400,
  },
  email: {
    position: "absolute",
    top: 533,
    left: 45,
    fontSize: 15,
    fontWeight: 400,
  },
  emailtext: {
    position: "absolute",
    top: 563,
    left: 78,
    fontSize: 20,
    color: "#08457E",
    fontWeight: 400,
  },
  password: {
    position: "absolute",
    top: 605,
    left: 46,
    fontSize: 15,
    fontWeight: 400,
  },
  passwordtext: {
    position: "absolute",
    top: 641,
    left: 183,
    fontSize: 20,
    color: "#08457E",
    fontWeight: 400,
  },
  birthday: {
    position: "absolute",
    top: 680,
    left: 46,
    fontSize: 15,
    fontWeight: 400,
  },
  birthdaytext: {
    position: "absolute",
    top: 712,
    left: 162,
    fontSize: 20,
    color: "#08457E",
    fontWeight: 400,
  },
  stats: {
    top: 765,
    left: 7,
  },
  leaderboard: {
    position: "absolute",
    top: 240,
    left: 22,
  },
  badge: {
    position: "absolute",
    top: 170,
    left: 350,
  },
  friends: {
    left: 350,
    top: 240,
  },
});
