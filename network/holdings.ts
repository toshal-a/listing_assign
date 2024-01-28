import { HOLDING_URL } from "../utils/constants";


export const fetchHoldings = async (
) => {
    return fetch(HOLDING_URL)
        .then(response => response.json())
}