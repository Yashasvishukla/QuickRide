import CustomButton from "@/components/customButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = async () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View>
        <View className="flex-1 bg-white">
          <View className="relative w-full h-[250px]">
            <Image
              className="w-full h-[250px] z-0"
              source={images.signUpCar}
            ></Image>
            <Text className="text-2xl text-black font-JakartaSemiBold bottom-5 left-5">
              Welcome 👋
            </Text>
          </View>
          <View className="p-5">
            <InputField
              icon={icons.email}
              label="Email"
              placeholder="Enter your email"
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
            ></InputField>
            <InputField
              icon={icons.lock}
              label="Password"
              placeholder="Enter your password"
              secureTextEntry={true}
              value={form.password}
              onChangeText={(text) => setForm({ ...form, password: text })}
            ></InputField>
            <CustomButton
              title="Sign In"
              className="mt-5"
              onPress={() => onSignInPress}
            ></CustomButton>

            <OAuth></OAuth>

            <Link
              className="text-lg text-center mt-5 text-general-200"
              href="/sign-up"
            >
              <Text>Don't have an account? </Text>
              <Text className="text-primary-500">Sign Up</Text>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
