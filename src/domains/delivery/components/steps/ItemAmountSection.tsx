import { Button } from '@hensley-ui/ui'
import { ItemAmountInput } from './ItemAmountInput'
import { useDeliveryStore } from '../../store/deliveryStore'

interface ItemAmountSectionProps {
  visible: boolean
  onConfirm: () => void
}

export const ItemAmountSection = ({
  visible,
  onConfirm,
}: ItemAmountSectionProps) => {
  const { itemType } = useDeliveryStore()

  const handleConfirm = () => {
    onConfirm()
  }

  if (!visible) return null

  return (
    <div className="flex flex-col gap-2">
      <ItemAmountInput placeholder="물건금액" />
      <Button onClick={handleConfirm} disabled={!itemType?.itemAmount}>
        다음
      </Button>
    </div>
  )
}
