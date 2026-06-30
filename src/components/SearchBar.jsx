import { useState } from 'react'

function SearchBar() {
  const [searchText, setSearchText] = useState("")

  return (
    <div className="px-6 py-4">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search cryptocurrency..."
        className="w-full md:w-1/3 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-400"
      />
    </div>
  )
}

export default SearchBar