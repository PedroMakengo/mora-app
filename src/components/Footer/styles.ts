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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 22,
    marginBottom: 8,
  },

  title: {
    fontSize: 13,
    color: theme.COLORS.gray_100,
  },
})
