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
export default function profile() {
  return (
    <View>
      <Image
        style={styles.ballprofile}
        source={require("../../assets/images/ballprofile.png")}
      />
      <Image
        style={styles.userprofile}
        source={require("../../assets/images/userprofile.png")}
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
        style={styles.changeprofile}
        source={require("../../assets/images/changeprofile.png")}
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
      <Text style={styles.usernametext}>CoolJean123</Text>

      <Text style={styles.fullname}>Fullname</Text>
      <Text style={styles.fullnametext}>Jean baltazar</Text>

      <Text style={styles.email}>Email</Text>
      <Text style={styles.emailtext}>jeanbaltazar49@gmail.com</Text>

      <Text style={styles.password}>Password</Text>
      <Text style={styles.passwordtext}>******</Text>

      <Text style={styles.birthday}>Birthday</Text>
      <Text style={styles.birthdaytext}>2/14/2009</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  ballprofile: { position: "absolute" },
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
    top: 403,
    left: 43,
    fontSize: 15,
    fontWeight: 400,
  },
  usernametext: {
    position: "absolute",
    top: 446,
    left: 148,
    fontSize: 20,
    color: "#08457E",
    fontWeight: 400,
  },
  textbox: {
    position: "absolute",
    top: 437,
    left: 22,
  },
  textbox2: {
    position: "absolute",
    top: 512,
    left: 22,
  },

  textbox3: {
    position: "absolute",
    top: 586,
    left: 22,
  },

  textbox4: {
    position: "absolute",
    top: 661,
    left: 22,
  },

  textbox5: {
    position: "absolute",
    top: 732,
    left: 22,
  },
fullname:{
    position: "absolute",
    top:489,
    left: 43,
    fontSize: 15,
    fontWeight: 400,
},
fullnametext:{
    position: "absolute",
    top:524,
    left: 148,
    fontSize: 20,
    color: "#08457E",
    fontWeight: 400,
},
email:{
    position: "absolute",
    top:566,
    left: 45,
    fontSize: 15,
    fontWeight: 400,
},
emailtext:{
    position: "absolute",
    top:595,
    left: 78,
    fontSize: 20,
    color: "#08457E",
    fontWeight: 400,
},
password:{
    position: "absolute",
    top:639,
    left: 46,
    fontSize: 15,
    fontWeight: 400,
},
passwordtext:{
    position: "absolute",
    top:673,
    left: 183,
    fontSize: 20,
    color: "#08457E",
    fontWeight: 400,
},
birthday:{
    position: "absolute",
    top:713,
    left: 46,
    fontSize: 15,
    fontWeight: 400,
},
birthdaytext:{
    position: "absolute",
    top:744,
    left: 162,
    fontSize: 20,
    color: "#08457E",
    fontWeight: 400,
}
});
