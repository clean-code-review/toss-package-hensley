export const DeliveryType = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">배송 유형을 선택해주세요</h2>
      <div className="space-y-2">
        <button className="w-full p-4 border rounded-lg hover:bg-gray-50">
          일반 배송
        </button>
        <button className="w-full p-4 border rounded-lg hover:bg-gray-50">
          긴급 배송
        </button>
      </div>
    </div>
  )
}
