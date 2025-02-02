import { View, Text, Image } from "react-native";
import CustomButton from "./customButton";
import { icons } from "@/constants";

const OAuth = () => {
  const handleGoogleSignIn = async () => {};

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-2">
        <View className="flex-1 h-[2px] bg-general-100"></View>
        <Text>Or</Text>
        <View className="flex-1 h-[2px] bg-general-100"></View>
      </View>
      <CustomButton
        className="w-full mt-5 shadow-none"
        title="Sign up with Google"
        bgVariant="outline"
        textVariant="primary"
        IconLeft={() => (
          <Image
            source={icons.google}
            className="w-6 h-6 mr-3"
            resizeMode="contain"
          />
        )}
        onPress={() => handleGoogleSignIn()}
      ></CustomButton>
    </View>
  );
};
export default OAuth;
