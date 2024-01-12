import { TextInput, View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { colors } from "../../assets/colors";

interface CustomInputProps {
  input: string;
  label?: string;
  placeholder: string;
  setInput: (value: string) => void;
  schema: any;
}

const CustomInput: React.FC<CustomInputProps> = ({
  input,
  setInput,
  placeholder,
  label,
  schema,
}) => {
  const [hasInteracted, setHasInteracted] = useState(false);

  const errors = hasInteracted
    ? schema?.safeParse(input).error?.errors || []
    : [];

  const handleTextInputFocus = () => {
    setHasInteracted(true);
  };

  return (
    <View>
      {label ? (
        <Text style={{ marginBottom: 5, fontWeight: "600" }}>{label}</Text>
      ) : null}
      <TextInput
        style={[
          styles.textInput,
          {
            borderColor: colors.blue,
            color: colors.blue,
            backgroundColor: `${colors.secondary}40`,
          },
        ]}
        value={input}
        onChangeText={setInput}
        onChange={handleTextInputFocus}
        placeholder={placeholder}
        placeholderTextColor={colors.graySecond}
      />
      {errors.length > 0 && (
        <View style={{ marginBottom: 10 }}>
          {errors.map((error) => (
            <View key={error.message}>
              <Text style={{ color: colors.red, fontSize: 12 }}>
                {error.message}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  textInput: {
    height: 60,
    borderWidth: 2,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 15,
    padding: 20,
    includeFontPadding: false,
  },
  textInputContainer: {
    height: 60,
    alignItems: "center",
    borderWidth: 2,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 15,
    paddingLeft: 20,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  textInputWithIcon: {
    padding: 20,
    height: 60,
    width: "100%",
    includeFontPadding: false,
  },
});
