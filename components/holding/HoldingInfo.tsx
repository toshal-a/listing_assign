import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/constants'



type HoldingInfoProps = {
  items: {title: string, subTitle: string}[]
}

const HoldingInfo = ({
  items
}: HoldingInfoProps) => {
  return (
    <View style={styles.container}>
      {
        items.map((item, index) => (
          <View key={index} style={styles.rowContainer}>
            <Text style={styles.titleStyle}>{item.title}</Text>
            <Text style={styles.subTitleStyle}>{item.subTitle}</Text>
          </View>
        ))
      }
    </View>
  )
}

export default HoldingInfo

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grey30,
    paddingBottom: 15,
  },
  rowContainer: {
    backgroundColor: COLORS.grey30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
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