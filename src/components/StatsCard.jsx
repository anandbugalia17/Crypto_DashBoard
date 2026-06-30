function StatsCard({ title, value, change }) {
  const isPositive = change && change.startsWith('+')

  return (
    <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
      <p className="text-gray-400 text-sm mb-1">{title}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
      {change && (
        <p className={`text-sm mt-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {change}
        </p>
      )}
    </div>
  )
}

export default StatsCard