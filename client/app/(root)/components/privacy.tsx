import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Privacy = () => {
  return (
    <View>
      <Link
      href={'/privacy'}
      className='text-blue-500 mt-6 underline'
      >
        Privacy Policy
      </Link>
    </View>
  )
}

export default Privacy