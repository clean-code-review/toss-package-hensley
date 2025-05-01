import { Button } from '@hensley-ui/ui'
import { ItemAmountInput } from './ItemAmountInput'
import { useDeliveryStore } from '../store/deliveryStore'
import { AddAmountButtons } from './AddAmountButtons'
import { RefObject } from 'react'
import { useFocusEffect } from '@/hooks/useFocusEffect.tsx'

interface ItemAmountSectionProps {
  visible: boolean
  onConfirm: () => void
  amountRef: RefObject<HTMLInputElement | null>
}

export const ItemAmountSection = ({
  visible,
  onConfirm,
  amountRef,
}: ItemAmountSectionProps) => {
  const { itemType, setItem } = useDeliveryStore()
  useFocusEffect(amountRef, visible)
  const handleConfirm = () => {
    onConfirm()
  }

  if (!visible) return null
  return (
    <div className="flex flex-col gap-2">
      <ItemAmountInput amountRef={amountRef} placeholder="물건금액" />
      <AddAmountButtons
        onAddAmount={
          (amount) =>
            setItem({ itemAmount: (itemType?.itemAmount ?? 0) + amount }) //TODO: 가독성, selector 고려 ?
        }
      />

      <Button onClick={handleConfirm} disabled={!itemType?.itemAmount}>
        다음
      </Button>
    </div>
  )
}
