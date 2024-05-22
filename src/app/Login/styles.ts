import { StyleSheet } from 'react-native'
import { theme } from '@/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  header: {
    height: '15%',
  },
  footer: {
    height: '10%',
  },
  content: {
    width: '86%',
    height: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  contentForms: {
    marginTop: 46,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  description: {
    color: theme.COLORS.gray_100,
  },
  form: {
    marginTop: 60,
    gap: 16,
  },
  controls: {},
  titleInput: {
    fontWeight: '700',
  },

  passwordHidden: {
    position: 'absolute',
    right: 12,
    top: 34,
  },

  input: {
    width: '100%',
    backgroundColor: theme.COLORS.white,
    marginTop: 5,
    padding: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    fontWeight: '300',
  },

  buttons: {
    marginTop: 100,
  },

  buttonSubmit: {
    width: '100%',
    backgroundColor: theme.COLORS.gray_200,
    padding: 12,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleButton: {
    color: theme.COLORS.white,
  },

  footerLogin: {
    flexDirection: 'row',
    marginTop: 28,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },

  footerTitle: {
    fontWeight: '300',
  },

  footerTitleSignUp: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: theme.COLORS.gray_100,
  },
})
