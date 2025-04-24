export const DestinationType = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">목적지 유형을 선택해주세요</h2>
      <div className="space-y-2">
        <button className="w-full p-4 border rounded-lg hover:bg-gray-50">
          집
        </button>
        <button className="w-full p-4 border rounded-lg hover:bg-gray-50">
          회사
        </button>
        <button className="w-full p-4 border rounded-lg hover:bg-gray-50">
          기타
        </button>
      </div>
    </div>
  )
}
