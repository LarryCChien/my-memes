export default function UploadPage() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">上傳新圖片</h1>

        <form className="space-y-6">
          <div>
            <label className="block mb-2">選擇圖片</label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 border rounded"
            />
          </div>

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

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded"
          >
            上傳
          </button>
        </form>
      </main>
    </div>
  );
}
