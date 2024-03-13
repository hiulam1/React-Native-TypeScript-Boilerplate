import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { checkPhoneIfValid, modifyInput } from "@/utils/validatePhone";

const login = () => {
  const [input, setIput] = useState("");
  const [valid, setValid] = useState(false);

  const handleInputChange = (text: string) => {
    const isValid = checkPhoneIfValid(text);
    setIput(text);
    setValid(isValid);

    if (isValid) {
      const formattedInput = modifyInput(text);
      setIput(formattedInput);
    }
  };
  return (
    <View className="flex-1 bg-light-grey justify-center items-center ">
      <Text className="text-white text-[20px] mb-6">
        Please log in with your phone number
      </Text>

      <View className="flex-row items-center rounded-md bg-transparent">
        <TouchableOpacity className="items-center justify-center ">
          <Text className="text-[20px] mx-4 mb-4 text-center text-white">
            +41
          </Text>
        </TouchableOpacity>
        <TextInput
          className="text-white mb-4 w-40 h-10 rounded-md text-[20px] bg-transparent"
          keyboardType="numeric"
          value={input}
          onChangeText={(text) => {
            handleInputChange(text);
          }}
        ></TextInput>
      </View>
      <TouchableOpacity className="bg-white p-3 rounded-md">
        <Text>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};
export default login;
