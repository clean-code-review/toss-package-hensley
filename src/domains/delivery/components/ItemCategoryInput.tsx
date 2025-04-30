import { Input } from '@/components/ui/input'
import { useDeliveryStore } from '../store/deliveryStore'

export const ItemCategoryInput = ({ onFocus }: { onFocus: () => void }) => {
  const { itemType } = useDeliveryStore()

  return (
    <>
      <Input
        placeholder="카테고리 검색"
        value={itemType?.itemCategory}
        readOnly
        onFocus={onFocus}
      />
    </>
  )
}
