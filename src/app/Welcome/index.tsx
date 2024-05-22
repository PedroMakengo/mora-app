import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native'
import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Footer } from '../../components/Footer'

export function Welcome({ navigation }: any) {
  setTimeout(() => {
    navigation.navigate('Login')
  }, 5000)
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/splash/splash-welcome.png')}
        style={styles.background}
      >
        <View style={styles.content}>
          <Image
            source={require('@/assets/images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Community</Text>
        </View>
        <Footer />
      </ImageBackground>
    </SafeAreaView>
  )
}
