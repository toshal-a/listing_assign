import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import { PNLText, PageState, RUPEE_SYMBOL, currValueText, holdingHeaderTitle, ltpText, todayPNLText, totalInvestedText, totalProfitText } from '../utils/constants'
import ActivityIndicatorCustomized from '../components/ActivityIndicatorCustomized'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import HoldingItem from '../components/holding/HoldingItem'
import ExpandingAccordion from '../components/ExpandingAccordion'
import HoldingInfo from '../components/holding/HoldingInfo'
import ProfitAndLoss from '../components/holding/ProfitAndLoss'
import { getStockHoldings } from '../service/holdings'

interface Response {
    userHolding: any[]; // Update the type of userHolding property as per your requirement
    totalPnl?: number;
    currentValue?: number;
    investmentValue?: number;
    todayPnl?: number;
}

const StockHoldings = () => {
    const [response, setResponse] = React.useState<Response>({
        userHolding: []
    });
    const [pageState, setPageState] = React.useState(PageState.EMPTY);

    const makeApiCall = () => {
        setPageState(PageState.LOADING)
        getStockHoldings()
            .then(data => {
                setResponse(data)
                setPageState(PageState.SUCCESS)
            })
            .catch(error => {
                setPageState(PageState.ERROR)
                throw error;
            })
    }

    useEffect(() => {
        makeApiCall()
    }, [])

    const renderItem = ({ item } : any) => {
        return (
            <HoldingItem 
                firstTitle={item?.symbol}
                secondTitle={item?.quantity}
                firstSubtitle={RUPEE_SYMBOL + " " + item?.ltp}
                secondSubtitle={RUPEE_SYMBOL + " " + item?.pnl}
                firstSubtitlePrefix={ltpText}
                secondSubtitlePrefix={PNLText}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={styles.backgroundStyle.backgroundColor}
            />
            {
                pageState === PageState.SUCCESS
                    ? (
                        <View style={styles.container}>
                            <PageHeader
                                title={holdingHeaderTitle}
                            />
                            <FlatList
                                data={response?.userHolding}
                                renderItem={renderItem}
                                keyExtractor={item => item?.symbol}
                            />
                            <View style={styles.bottomContainer}>
                                <ExpandingAccordion
                                    ExpandedChildren={() => (
                                        <HoldingInfo
                                            items={[
                                                { title: currValueText, subTitle: RUPEE_SYMBOL + response?.currentValue },
                                                { title: totalInvestedText, subTitle: RUPEE_SYMBOL + response?.investmentValue },
                                                { title: todayPNLText, subTitle: RUPEE_SYMBOL + response?.todayPnl}
                                            ]}
                                        />
                                    )}
                                    NonExpandedChildren={() => (
                                        <ProfitAndLoss title={totalProfitText} subTitle={RUPEE_SYMBOL + response?.totalPnl}                                        /> 
                                    )}
                                />
                            </View>
                        </View>
                    )
                    : null
            }
            {
                pageState === PageState.LOADING
                    ? <ActivityIndicatorCustomized /> 
                    : null
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    backgroundStyle: {
        backgroundColor: Colors.lighter,
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1
    }
})

export default StockHoldings