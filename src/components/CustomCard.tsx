import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../../assets/colors";
import RatingStar from "./RatingStar";
import { navigate } from "../utils/navigationUtils";

const CustomCard = ({ title, services, description, imageUrl, saloonId }) => {
  const handleSaloonPress = () => {
    navigate("SaloonScreen", {
      title,
      description,
      imageUrl,
      services,
      saloonId,
    });
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={handleSaloonPress}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.icon}
        />
        <View style={styles.bottomContainer}>
          <Text style={{ fontWeight: "600" }}>{title}</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {services.split(", ").map((service, index) => (
              <View key={index} style={styles.serviceContainer}>
                <Text style={{ fontSize: 11 }}>{service}</Text>
              </View>
            ))}
          </View>
          <View style={{ marginTop: 5 }}>
            <RatingStar rating={5} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: "48%",
    borderRadius: 5,
    height: 200,
    padding: 8,
    backgroundColor: colors.primary,
    marginRight: 5,
    marginTop: 5,
  },
  icon: {
    width: "100%",
    height: "50%",
    borderRadius: 5,
  },
  serviceContainer: {
    backgroundColor: colors.white,
    width: undefined,
    padding: 3,
    borderRadius: 5,
    marginRight: 2,
    marginTop: 3,
  },
  bottomContainer: {
    marginTop: 5,
  },
});
