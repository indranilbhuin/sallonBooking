import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import PrimaryView from "../../components/PrimaryView";
import { useRoute } from "@react-navigation/native";
import { colors } from "../../../assets/colors";
import timeSlots from "../../../assets/mockData/timeSlots.json";
import { navigate } from "../../utils/navigationUtils";

const SaloonScreen = () => {
  const route = useRoute();
  const { title, description, imageUrl, services, saloonId } = route.params;
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleTimeSlotPress = (slot) => {
    setSelectedTimeSlot(slot);
  };

  const handleFillForm = () => {
    navigate("AppointmentScreen", {title, saloonId, selectedTimeSlot});
  };

  return (
    <PrimaryView style={{ justifyContent: "space-between" }}>
      <View>
        <Header title={title} showScanner={true} />
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.icon}
        />
        <Text>{description}</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {services.split(", ").map((service, index) => (
            <View key={index} style={styles.serviceContainer}>
              <Text
                style={{ fontSize: 14, color: colors.blue, fontWeight: "600" }}
              >
                {service}
              </Text>
            </View>
          ))}
        </View>
        <Text style={{ fontWeight: "600", marginTop: 5 }}>
          Available Time Slots
        </Text>
        {timeSlots
          .find((saloon) => saloon.saloonId === saloonId)
          .timeSlots.map((slot) => (
            <TouchableOpacity
              key={slot.id}
              onPress={() => handleTimeSlotPress(slot)}
            >
              <View
                style={[
                  styles.timeSlotContainer,
                  selectedTimeSlot === slot && { borderWidth: 2 },
                ]}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ marginRight: 6 }}>{slot.date}</Text>
                  <Text style={{ fontWeight: "500" }}>{slot.time}</Text>
                </View>
                <Text style={{ fontWeight: "500" }}>
                  {slot.available ? "Available" : "Booked"}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
      </View>
      <View style={{ marginBottom: "10%" }}>
        <TouchableOpacity onPress={handleFillForm}>
          <View style={styles.button}>
            <Text
              style={{ fontSize: 16, fontWeight: "600", color: colors.white }}
            >
              Fill Form
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </PrimaryView>
  );
};

export default SaloonScreen;

const styles = StyleSheet.create({
  icon: {
    height: 200,
    width: "95%",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: "5%",
    marginTop: 5
  },
  serviceContainer: {
    backgroundColor: colors.primary,
    width: undefined,
    padding: 8,
    borderRadius: 5,
    marginRight: 5,
    marginTop: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  timeSlotContainer: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: colors.blue,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
