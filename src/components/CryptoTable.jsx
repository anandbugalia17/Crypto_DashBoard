const cryptoData = [
  { name: "Bitcoin", symbol: "BTC", price: "$67,432", change: "+2.5%", marketCap: "$1.3T" },
  { name: "Ethereum", symbol: "ETH", price: "$3,521", change: "+1.8%", marketCap: "$423B" },
  { name: "Solana", symbol: "SOL", price: "$178", change: "-1.2%", marketCap: "$82B" },
  { name: "Cardano", symbol: "ADA", price: "$0.58", change: "+0.9%", marketCap: "$20B" },
  { name: "Dogecoin", symbol: "DOGE", price: "$0.16", change: "-3.4%", marketCap: "$23B" },
]

function CryptoTable() {
  return (
    <div className="px-6 pb-6">
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700 text-gray-400 text-sm">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">24h Change</th>
              <th className="px-4 py-3">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((coin) => {
              const isPositive = coin.change.startsWith('+')
              return (
                <tr key={coin.symbol} className="border-b border-gray-700 last:border-0">
                  <td className="px-4 py-3 text-white font-medium">
                    {coin.name} <span className="text-gray-500">{coin.symbol}</span>
                  </td>
                  <td className="px-4 py-3 text-white">{coin.price}</td>
                  <td className={`px-4 py-3 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {coin.change}
                  </td>
                  <td className="px-4 py-3 text-white">{coin.marketCap}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CryptoTable