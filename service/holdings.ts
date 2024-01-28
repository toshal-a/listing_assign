import { fetchHoldings } from "../network/holdings";

const getFinalData = (data: any) => {
    let currentValue = 0.0;
    let investmentValue = 0.0;
    let closingValue = 0.0;
    const finalUserHolding = data.userHolding?.map((item: any) => {
        let pnl = (item?.ltp - item?.avgPrice) * item?.quantity;
        pnl = Math.round((pnl + Number.EPSILON) * 100) / 100;

        currentValue += item?.ltp * item?.quantity;
        investmentValue += item?.avgPrice * item?.quantity;
        closingValue += item?.close * item?.quantity;
        return {
            symbol: item?.symbol,
            ltp: item?.ltp,
            quantity: item?.quantity,
            pnl: pnl,
            avgPrice: item?.avgPrice,
        }
    })

    let totalPnl: number = currentValue - investmentValue;
    totalPnl = Math.round((totalPnl + Number.EPSILON) * 100) / 100;

    let todayPnl: number = currentValue - closingValue;
    todayPnl = Math.round((todayPnl + Number.EPSILON) * 100) / 100;

    return {
        userHolding: finalUserHolding,
        currentValue: currentValue,
        investmentValue: investmentValue,
        totalPnl: totalPnl,
        todayPnl: todayPnl
    }
}

export const getStockHoldings = async () => {

    return fetchHoldings()
        .then(data => {
            if (__DEV__) {
                console.log("Holding Data", data)
            }

            return getFinalData(data)
        })
        .catch(error => {
            if (__DEV__) {
                console.log(error)
            }
            throw error;
        });
}
