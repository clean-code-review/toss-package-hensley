import { useDeliveryStore } from '../store/deliveryStore'
import { InputWithError } from './InputWithError'
import { useAmountInput } from '../hooks/useAmountInput'
import { RefObject } from 'react'

interface ItemAmountInputProps {
  placeholder: string
  disabled?: boolean
  amountRef: RefObject<HTMLInputElement> | null
}
/* */
export const ItemAmountInput = ({
  placeholder,
  amountRef,
}: ItemAmountInputProps) => {
  const { itemType, setItem } = useDeliveryStore()

  const { displayValue, error, handleAmountChange } = useAmountInput(
    itemType?.itemAmount ?? undefined,
    (amount) => setItem({ itemAmount: amount }),
  )

  return (
    <div className="space-y-4">
      <InputWithError
        ref={amountRef}
        value={displayValue}
        onChange={handleAmountChange}
        placeholder={placeholder}
        error={error}
      />
    </div>
  )
}
