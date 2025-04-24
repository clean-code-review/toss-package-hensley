export const ItemType = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">물품 유형을 선택해주세요</h2>
      <div className="space-y-2">
        <button className="w-full p-4 border rounded-lg hover:bg-gray-50">
          일반 물품
        </button>
        <button className="w-full p-4 border rounded-lg hover:bg-gray-50">
          냉장/냉동
        </button>
        <button className="w-full p-4 border rounded-lg hover:bg-gray-50">
          취급주의
        </button>
      </div>
    </div>
  )
}
