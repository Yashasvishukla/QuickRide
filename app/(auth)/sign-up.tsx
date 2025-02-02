import CustomButton from "@/components/customButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [pendinfVerification, setPendingVerification] = useState(true);
  const [code, setCode] = useState("");
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onSignUpPress = async () => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: formValue.email,
        password: formValue.password,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setPendingVerification(true);
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
    }
  };

  const onVerifyPress = async () => {
    if (!isLoaded) return;
    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/");
      } else {
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
    }
  };
  if (pendinfVerification) {
    return (
      <ScrollView className="flex-1 bg-white">
        <View className="flex-1 bg-white">
          <View className="relative w-full h-[250px]">
            <Image
              source={images.signUpCar}
              className="w-full h-[250px] z-0"
            ></Image>
            <Text className="text-2xl font-JakartaSemiBold text-black bottom-5 left-5">
              Create your account
            </Text>
          </View>
          <View className="p-5">
            <InputField
              icon={icons.person}
              label="Name"
              placeholder="Enter your name"
              value={formValue.name}
              onChangeText={(text) =>
                setFormValue({ ...formValue, name: text })
              }
            ></InputField>

            <InputField
              icon={icons.email}
              label="Email"
              placeholder="Enter your email"
              value={formValue.email}
              onChangeText={(text) =>
                setFormValue({ ...formValue, email: text })
              }
            ></InputField>

            <InputField
              icon={icons.lock}
              label="Password"
              placeholder="Enter your password"
              secureTextEntry={true}
              value={formValue.password}
              onChangeText={(text) =>
                setFormValue({ ...formValue, password: text })
              }
            ></InputField>

            <CustomButton
              title="Sign Up"
              onPress={() => onSignUpPress()}
              className="mt-5"
            ></CustomButton>

            <OAuth></OAuth>

            <Link
              className="text-lg text-center text-general-200 mt-10"
              href="/(auth)/sign-in"
            >
              <Text>Already have an account? </Text>
              <Text className="text-primary-500">Log In</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default SignUp;
