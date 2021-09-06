const BASE_URL = "http://localhost:8000/"

const tryCatchFetch = async (url, init) => {
  try {
    let response = await fetch(url, init)
    if (response.ok) {
      console.log("status", response.status)
      if (response.status !== 204) {
        let data = await response.json()
        console.log(data)
        return data
      }else {
        return { "success": true }
      }
    }
  }
  catch (error) {
    console.error(":ERR:", error)
    return null
  }
}

const fetchStocks = async () => {
  let url = `${BASE_URL}api/stock-list/`
  return await tryCatchFetch(url)
}

const getStockQuote = async (symbol) => {
  let url = `${BASE_URL}api/stock-quote/${symbol}/`
  console.log(url)
  return await tryCatchFetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/JSON"
    }
  })
}

const myExport = {
  fetchStocks,
  getStockQuote,
}

export default myExport;