import { StyleSheet, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { StatusBar } from "expo-status-bar";
import { colors } from "../../assets/colors";
import { SafeAreaView } from "react-native-safe-area-context";

interface PrimaryViewProps {
  children?: ReactNode;
  style?: ViewStyle;
}

const PrimaryView: React.FC<PrimaryViewProps> = ({ children, style }) => {
  return (
    <SafeAreaView>
      <View style={[styles.mainContainer, style]}>
        <StatusBar style="auto" />
        {children}
      </View>
    </SafeAreaView>
  );
};

export default PrimaryView;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingLeft: "6%",
    paddingRight: "6%",
    backgroundColor: colors.white,
  },
});
