import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Privacy from "./(root)/components/privacy";
import icon from "../constants/icon";
const SignIn = () => {
  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 px-4">

      {/* Logo */}
      <View className="flex-row items-center justify-center mt-8 mb-8">
        <Image
          source={icon.logo}
          className="w-20 h-20"
        />
      </View>
      <View className="flex-row items-center mb-8">
        <Text className="text-5xl font-bold text-black">Snap</Text>
        <Text className="text-5xl font-bold text-blue-500">Vote</Text>
      </View>
      <View className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-lg">
        {/* Title */}
        <Text className=" text-3xl font-bold text-center text-blue-500 mb-4">Login</Text>

        {/* ID Number */}
        <Text className="text-base text-black">Your ID number:</Text>
        <TextInput 
          className=" border border-t-0 border-black rounded-lg px-3 py-2 mt-1 mb-3 text-black"
          value={idNumber}
          onChangeText={setIdNumber}
          placeholder="Enter your ID"
        />

        {/* Password */}
        <Text className="text-base text-black">Your password:</Text>
        <TextInput 
          className="border border-t-0 border-black rounded-lg px-3 py-2 mt-1 mb-3 text-black"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Enter your password"
        />

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text className="text-blue-500 text-sm mb-4">Forgot your password?</Text>
        </TouchableOpacity>



        {/* Checkbox & Login Button */}
        <View className="flex-row items-center justify-between">
          <TouchableOpacity className="bg-blue-500 px-6 py-2 rounded-3xl">
            <Text className="text-white text-lg font-semibold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Privacy Policy */}
      <Privacy />
    </View>
  );
};

export default SignIn;
