// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">我的迷因收藏</h1>
        
        {/* Search Section */}
        <div className="mb-8">
          <h2 className="text-xl mb-4">搜尋圖片</h2>
          <div className="flex gap-4">
            <input 
              type="text" 
              placeholder="搜尋圖片名稱或標籤..."
              className="flex-1 p-2 border rounded"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              搜尋
            </button>
          </div>
        </div>

        {/* Upload Link */}
        <Link 
          href="/upload"
          className="inline-block px-4 py-2 bg-green-500 text-white rounded mb-8"
        >
          上傳新圖片
        </Link>

        {/* Search Results will be displayed here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Search results will be rendered here */}
        </div>
      </main>
    </div>
  );
}
