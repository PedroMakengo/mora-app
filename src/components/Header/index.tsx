import { View, Text, Image } from 'react-native'

import { styles } from './styles'

export function Header({ ...rest }) {
  return (
    <View style={[styles.container, { ...rest }]}>
      <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Community</Text>
    </View>
  )
}
