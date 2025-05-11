export default function EditPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">編輯圖片資訊</h1>
        
        <form className="space-y-6">
          <div>
            <label className="block mb-2">圖片名稱</label>
            <input 
              type="text" 
              placeholder="請輸入圖片名稱"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-2">標籤</label>
            <input 
              type="text" 
              placeholder="請輸入標籤，用逗號分隔"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex gap-4">
            <button 
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded"
            >
              儲存
            </button>
            <button 
              type="button"
              className="flex-1 px-4 py-2 bg-red-500 text-white rounded"
            >
              刪除
            </button>
          </div>
        </form>
      </main>
    </div>
  );
} 