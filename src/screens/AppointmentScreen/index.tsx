import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import PrimaryView from "../../components/PrimaryView";
import CustomInput from "../../components/CustomInput";
import { emailSchema, nameSchema } from "../../utils/validationSchema";
import { useRoute } from "@react-navigation/native";
import Header from "../../components/Header";
import { colors } from "../../../assets/colors";

const AppointmentScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const route = useRoute();
  const { title, selectedTimeSlot } = route.params;
  const isNameValid = nameSchema.safeParse(name).success;
  const isEmailValid = emailSchema.safeParse(email).success;

  const isValid = isEmailValid && isNameValid;

  const handleSubmit = () => {
    ToastAndroid.show("Appointment created successfully!", ToastAndroid.SHORT);
  };
  return (
    <PrimaryView style={{ justifyContent: "space-between" }}>
      <View>
        <Header title={title} showScanner={true} />
        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
            fontWeight: "600",
            marginBottom: 10,
          }}
        >
          Application Form
        </Text>
        <CustomInput
          input={name}
          setInput={setName}
          placeholder="eg. Name"
          label="Name"
          schema={nameSchema}
        />
        <CustomInput
          input={email}
          setInput={setEmail}
          placeholder="eg. email@email.com"
          label="Email Id"
          schema={emailSchema}
        />
        <Text style={{ fontWeight: "600", marginTop: 5 }}>Selected Slot</Text>
        <View style={styles.timeSlotContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginRight: 6 }}>{selectedTimeSlot.date}</Text>
            <Text style={{ fontWeight: "500" }}>{selectedTimeSlot.time}</Text>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: "10%" }}>
        <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
          <View
            style={[
              styles.button,
              !isValid
                ? { backgroundColor: `${colors.blue}40` }
                : { backgroundColor: colors.blue },
            ]}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "600", color: colors.white }}
            >
              Submit
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </PrimaryView>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    height: 60,
    borderRadius: 10,
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
});
