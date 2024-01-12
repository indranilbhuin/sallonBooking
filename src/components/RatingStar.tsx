import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../../assets/colors";

interface Props {
  rating: number;
}

const RatingStar: React.FC<Props> = ({ rating }) => {
  if (rating >= 5) {
    rating = 5;
  }
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  const starIcons = [];

  for (let i = 0; i < filledStars; i++) {
    starIcons.push(
      <FontAwesome5
        key={i}
        name="star"
        size={14}
        color={colors.secondary}
        solid
        testID="filled-star"
      />
    );
  }

  if (hasHalfStar) {
    starIcons.push(
      <FontAwesome5
        key={filledStars}
        name="star-half-alt"
        size={14}
        color={colors.secondary}
        solid
        testID="half-star"
      />
    );
  }

  const emptyStars = 5 - starIcons.length;

  for (let i = 0; i < emptyStars; i++) {
    starIcons.push(
      <FontAwesome5
        key={filledStars + i + 1}
        name="star"
        size={14}
        color={colors.regularGray}
        testID="empty-star"
      />
    );
  }

  return (
    <View style={styles.container}>
      {starIcons}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default RatingStar;
