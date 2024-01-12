import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../assets/colors";
import { Octicons, MaterialIcons, Feather } from "@expo/vector-icons";

const Header = ({ title, showScanner }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <View style={styles.circle}>
          <Feather name="user" size={24} color="black" />
        </View>
        <Text style={{ fontWeight: "500" }}>{title}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Octicons
          name="bell"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
        {showScanner ? (
          <MaterialIcons name="qr-code-scanner" size={24} color="black" />
        ) : null}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: 60,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    height: 45,
    width: 45,
    borderRadius: 50,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderWidth: 2,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 40,
    width: 40,
  },
  iconContainer: {
    flexDirection: "row",
  },
});
