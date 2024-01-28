import { StyleSheet, Text, View } from "react-native"
import { COLORS, PNLText, RUPEE_SYMBOL, ltpText } from "../../utils/constants";

export interface HoldingItem {
    symbol: string;
    ltp: number;
    quantity: number;
    pnl: number;
}

export interface HoldingItemProps {
    item: HoldingItem;
}


const HoldingItem = ({ item }: HoldingItemProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.symbolStyle}>{item?.symbol}</Text>
                <Text style={styles.quantity}>
                    {ltpText}
                    <Text style={styles.symbolStyle}>{RUPEE_SYMBOL + " " + item?.ltp}</Text>
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.quantity}>{item?.quantity}</Text>
                <Text style={styles.quantity}>
                    {PNLText}
                    <Text style={styles.symbolStyle}>{RUPEE_SYMBOL + " " + item?.pnl}</Text>
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