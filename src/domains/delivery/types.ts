export type DeliveryType = 'GS25' | 'CU'
export type DestinationType = 'GS25' | 'CU' | 'ADDRESS'
export type ItemType = {
  itemCategory: ItemCategories
  itemAmount: number | null
  itemWeight: number | null
}

export const ItemCategory = {
  의류: '의류',
  가전제품류: '가전제품류',
  잡화서적: '잡화.서적',
  곡물류: '곡물류',
  식품류: '식품류',
  과일류: '과일류',
  한약류: '한약류',
} as const

export type ItemCategories = ValueOf<typeof ItemCategory>
export interface DeliveryState {
  deliveryType: DeliveryType | null
  destinationType: DestinationType | null
  itemType: ItemType | null
}

/* 유틸리티 타입 */
export type ValueOf<T> = T[keyof T]
