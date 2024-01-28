import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, totalProfitText } from '../../utils/constants'

type ProfitAndLossProps = {
    title: string,
    subTitle: string,
}

const ProfitAndLoss = ({
    title,
    subTitle
}: ProfitAndLossProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.subTitleStyle}>{subTitle}</Text>
    </View>
  )
}

export default ProfitAndLoss

const styles = StyleSheet.create({
   container: {
        backgroundColor: COLORS.grey30,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 30,
   },
   titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.black,
   },
   subTitleStyle: {
        fontSize: 18,
        color: COLORS.grey90,
   }
})