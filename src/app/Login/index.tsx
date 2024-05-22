import { useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer/index'
import { theme } from '@/theme'
import { styles } from './styles'

export function Login() {
  const [errorLogin, setErrorLogin] = useState(false)
  const [isPasswordShow, setIsPasswordShow] = useState(true)

  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} />
      <ImageBackground
        source={
          !errorLogin
            ? require('@/assets/images/splash/splash-login.png')
            : require('@/assets/images/splash/splash-login-error.png')
        }
        style={styles.background}
      >
        <View style={styles.content}>
          <View style={styles.contentForms}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.description}>
              Use your email and password to login
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.controls}>
              <Text style={styles.titleInput}>Email</Text>
              <TextInput
                placeholder="example@gmail.com"
                placeholderTextColor={theme.COLORS.gray_100}
                style={styles.input}
              />
            </View>

            <View style={styles.controls}>
              <Text style={styles.titleInput}>Password</Text>
              <TextInput
                placeholder="password"
                placeholderTextColor={theme.COLORS.gray_100}
                style={styles.input}
                secureTextEntry={isPasswordShow}
              />
              <TouchableOpacity
                style={styles.passwordHidden}
                onPress={() => setIsPasswordShow(!isPasswordShow)}
              >
                {isPasswordShow === true ? (
                  <Ionicons
                    name="eye-off"
                    size={24}
                    color={theme.COLORS.black}
                  />
                ) : (
                  <Ionicons name="eye" size={24} color={theme.COLORS.black} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Footer style={styles.footer} />
      </ImageBackground>
    </SafeAreaView>
  )
}
