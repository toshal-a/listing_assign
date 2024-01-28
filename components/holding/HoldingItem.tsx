import { StyleSheet, Text, View } from "react-native"
import { COLORS, PNLText, RUPEE_SYMBOL, ltpText } from "../../utils/constants";
export interface HoldingItemProps {
    firstTitle: string;
    secondTitle: string;
    firstSubtitle: string;
    secondSubtitle: string;
    firstSubtitlePrefix: string;
    secondSubtitlePrefix: string;
}


const HoldingItem = ({ 
    firstTitle,
    secondTitle,
    firstSubtitle,
    secondSubtitle,
    firstSubtitlePrefix,
    secondSubtitlePrefix,
}: HoldingItemProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.symbolStyle}>{firstTitle}</Text>
                <Text style={styles.quantity}>
                    {firstSubtitlePrefix}
                    <Text style={styles.symbolStyle}>{firstSubtitle}</Text>
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.quantity}>{secondTitle}</Text>
                <Text style={styles.quantity}>
                    {secondSubtitlePrefix}
                    <Text style={styles.symbolStyle}>{secondSubtitle}</Text>
                </Text>
            </View>
            <View style={styles.divider} />
        </View>
    )

}

export default HoldingItem

const styles = StyleSheet.create({
    symbolStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: COLORS.black,
    },
    quantity: {
        fontSize: 16,
        color: COLORS.grey90,
    },
    container: {
        backgroundColor: COLORS.white,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    divider: {
        height: 1,
        marginTop: 10,
        backgroundColor: COLORS.lightGray,
        marginHorizontal: 20,
    }
})