import { useState } from 'react'
import { useDeliveryStore } from '../../store/deliveryStore'
import { Button } from '@/components/ui/button'
import { AmountInput } from './AmountInput'

interface ItemAmountInputProps {
  placeholder: string
  disabled?: boolean
}

export const ItemAmountInput = ({ placeholder }: ItemAmountInputProps) => {
  const { itemType, setItem } = useDeliveryStore()
  const [error, setError] = useState<string>('')

  const validateAmount = (value: number) => {
    if (value === 0) {
      setError('입력한 금액이 없어요')
      return false
    }
    if (value >= 500_000) {
      setError('50만원까지만 입력할 수 있어요')
      return false
    }
    setError('')
    return true
  }

  const handleAmountChange = (value: number) => {
    if (!validateAmount(value)) return
    setItem({ itemAmount: value })
  }

  const handleAddAmountClicked = (amount: number) => {
    const currentAmount = itemType?.itemAmount ?? 0 + amount

    if (!validateAmount(currentAmount)) return
    setItem({ itemAmount: currentAmount })
  }

  return (
    <div className="space-y-4">
      <AmountInput
        value={itemType?.itemAmount}
        onChange={handleAmountChange}
        placeholder={placeholder}
        error={error}
        max={500_000}
      />

      <div className="flex justify-start gap-2">
        {[1, 5, 10, 50].map((amount) => (
          <Button
            key={amount}
            onClick={() => handleAddAmountClicked(amount)}
          >{`+${amount}만원`}</Button>
        ))}
      </div>
    </div>
  )
}
