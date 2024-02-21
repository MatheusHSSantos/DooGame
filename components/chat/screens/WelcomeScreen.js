import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white">
      <View className="space-y-2">
        <Text style={{fontSize: wp(10)}}className="text-center font-bold text-gray-700">
          Doo
        </Text>
        <Text style={{fontSize: wp(4)}} className="text-center tracking-wider text-gray-600 font-semibold">
          O seu amigo Pinguim.
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Image source={require('../../../assets/img/doo.png')} style={{width: wp(75), height: wp(75)}} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} className="bg-violet-500 mx-5 p-4 rounded-2xl">
        <Text style={{fontSize: wp(6)}} className="text-center font-bold text-white text-2xl">Iniciar Conversa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}