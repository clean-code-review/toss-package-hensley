import { Button } from '@hensley-ui/ui'
import { ItemAmountInput } from './ItemAmountInput'
import { useDeliveryStore } from '../store/deliveryStore'
import { AddAmountButtons } from './AddAmountButtons'
import { RefObject } from 'react'

interface ItemAmountSectionProps {
  visible: boolean
  onConfirm: () => void
  amountRef: RefObject<HTMLInputElement> | null
}

export const ItemAmountSection = ({
  visible,
  onConfirm,
  amountRef,
}: ItemAmountSectionProps) => {
  const { itemType, setItem } = useDeliveryStore()

  const handleConfirm = () => {
    onConfirm()
  }

  if (!visible) return null
  return (
    <div className="flex flex-col gap-2">
      <ItemAmountInput placeholder="물건금액" amountRef={amountRef} />
      <AddAmountButtons
        onAddAmount={(amount) =>
          setItem({ itemAmount: (itemType?.itemAmount ?? 0) + amount })
        }
      />

      <Button onClick={handleConfirm} disabled={!itemType?.itemAmount}>
        다음
      </Button>
    </div>
  )
}
