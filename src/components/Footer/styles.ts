import { StyleSheet } from 'react-native'
import { theme } from '@/theme'

export const styles = StyleSheet.create({
  container: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 36,
    paddingHorizontal: 16,
  },
  groupsSocials: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
  },

  title: {
    fontSize: 13,
    color: theme.COLORS.gray_100,
  },
})
