import {useEffect, useState} from "react"

// custom hook
function useCurrencyInfo(currency) {
    const [data,setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)  // most api call data's is in string format. it seems like json data but it actually not
        .then((res) => res.json())
        .then((res) => setData(res[currency]))      //res.currency (key and value access)
        console.log(data);
    },[currency]);   
    console.log(data);
    return data;
}

export default useCurrencyInfo;
