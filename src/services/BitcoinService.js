import axios from 'axios'

function getRate() {
    // return axios.get('https://blockchain.info/tobtc?currency=USD&value=1').then(res=>console.log(res))
    return 0.00028904
}

function getMarketPrice(value = 5) {
    return axios.get(`https://api.blockchain.info/charts/market-price?timespan=${value}months&format=json&cors=true`)
}

export default {
    getRate,
    getMarketPrice
}