export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">Total Penjualan Hari Ini</h2>
          <p className="text-3xl font-bold">Rp 0</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">Jumlah Transaksi</h2>
          <p className="text-3xl font-bold">0</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">Total Item Terjual</h2>
          <p className="text-3xl font-bold">0</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">Stok Kulit</h2>
          <p className="text-3xl font-bold">0</p>
        </div>
      </div>
    </div>
  )
}