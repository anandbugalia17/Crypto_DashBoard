import Header from './components/Header'
import SearchBar from './components/SearchBar'
import StatsCard from './components/StatsCard'
import CryptoTable from './components/CryptoTable'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <SearchBar />
      
      <div className="px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatsCard title="Bitcoin Price" value="$67,432" change="+2.5%" />
        <StatsCard title="Market Cap" value="$1.3T" change="+1.8%" />
        <StatsCard title="24h Change" value="2.5%" change="+2.5%" />
        <StatsCard title="Trading Volume" value="$45.2B" change="-3.1%" />
      </div>

      <CryptoTable />
    </div>
  )
}

export default App