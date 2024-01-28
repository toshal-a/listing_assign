import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../utils/constants'

interface PageHeaderProps {
    title: string
}

const PageHeader = ({
    title
}: PageHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>{title}</Text>
    </View>
  )
}

export default PageHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.purple,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    headerStyle: {
        fontSize: 18,
        fontWeight: '500',
        color: COLORS.white,
    }
})