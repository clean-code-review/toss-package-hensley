import { Input } from '@/components/ui/input'
import { useDeliveryStore } from '../../store/deliveryStore'
import { useRef } from 'react'

interface ItemWeightSectionProps {
  visible: boolean
  onFocus: () => void
}

export const ItemWeightSection = ({
  visible,
  onFocus,
}: ItemWeightSectionProps) => {
  const { itemType, setItem } = useDeliveryStore()
  const weightRef = useRef<HTMLInputElement>(null)

  if (!visible) return null

  return (
    <>
      <Input
        placeholder="물건무게"
        ref={weightRef}
        type="text"
        value={itemType ? `${itemType?.itemDescription}` : ''}
        readOnly
        onFocus={onFocus}
      />
    </>
  )
}
