import { useEffect, useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer/index'
import { theme } from '@/theme'
import { styles } from './styles'

export function Login({ navigation }: any) {
  const [errorLogin, setErrorLogin] = useState(false)
  const [isPasswordShow, setIsPasswordShow] = useState(true)

  // FORMS
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitLogin = () => {
    if (email === '' || password === '') {
      setErrorLogin(true)
    } else {
      setErrorLogin(false)
    }
  }

  useEffect(() => {
    if (email !== '' || password !== '') {
      setErrorLogin(false)
    }
  }, [email, password])

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
            {errorLogin && (
              <View style={styles.error}>
                <Text>Error</Text>
              </View>
            )}
            <View style={styles.controls}>
              <Text style={styles.titleInput}>Email</Text>
              <TextInput
                placeholder="example@gmail.com"
                placeholderTextColor={'#808080'}
                style={styles.input}
                onChangeText={setEmail}
                value={email}
              />
            </View>

            <View style={styles.controls}>
              <Text style={styles.titleInput}>Password {password}</Text>
              <TextInput
                placeholder="password"
                placeholderTextColor={'#808080'}
                style={styles.input}
                secureTextEntry={isPasswordShow}
                onChangeText={setPassword}
                value={password}
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

            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.buttonSubmit}
                onPress={onSubmitLogin}
              >
                <Text style={styles.titleButton}>Continue</Text>
              </TouchableOpacity>

              <View style={styles.footerLogin}>
                <Text style={styles.footerTitle}>Don't have an account?</Text>
                <Pressable onPress={() => navigation.navigate('Welcome')}>
                  <Text style={styles.footerTitleSignUp}>Sign Up</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <Footer style={styles.footer} />
      </ImageBackground>
    </SafeAreaView>
  )
}
