import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import PrimaryView from "../../components/PrimaryView";
import Header from "../../components/Header";
import allSaloon from "../../../assets/mockData/allSaloon.json";
import CustomCard from "../../components/CustomCard";

const HomeScreen = () => {
  return (
    <PrimaryView>
      <Header title={"Hey John"} showScanner={false} isUri={false} imageUrl={undefined} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 18,
              fontWeight: "600",
              marginBottom: 10,
            }}
          >
            All Saloons
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {allSaloon.map((saloon) => (
              <CustomCard
                title={saloon.name}
                services={saloon.services}
                key={saloon.id}
                imageUrl={saloon.imageurl}
                description={saloon.description}
                saloonId={saloon.id}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </PrimaryView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: "10%",
  },
});
