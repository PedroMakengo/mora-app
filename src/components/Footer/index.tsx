import { View, Text, TouchableOpacity, Image } from 'react-native'

import { styles } from './styles'

export function Footer({ ...rest }) {
  return (
    <View style={[styles.container, { ...rest }]}>
      <View style={styles.groupsSocials}>
        <TouchableOpacity>
          <Image source={require('@/assets/images/linkedin.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('@/assets/images/instagram.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('@/assets/images/twitter.png')} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>
        Copyright © 2020 - 2024, Nuwa co. All rights reserved.
      </Text>
    </View>
  )
}
