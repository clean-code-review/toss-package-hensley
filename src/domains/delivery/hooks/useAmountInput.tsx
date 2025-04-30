import { useEffect } from 'react'

import { MAX_ITEM_AMOUNT } from '@/utils/constant'
import { useState } from 'react'
import { formatNumberWithComma, valueCleaner } from '@/utils/format'

export function useAmountInput(
  initialValue: number | undefined,
  onValidAmount: (amount: number) => void,
  max = MAX_ITEM_AMOUNT,
) {
  const [displayValue, setDisplayValue] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    /* useEffect 외 다른 방식 알아보기 */
    setDisplayValue(initialValue ? formatNumberWithComma(initialValue) : '')
  }, [initialValue])

  const validateAmount = (value: number) => {
    if (!value) {
      setError('입력한 금액이 없어요')
      return false
    }
    if (value >= max) {
      setError(`${max.toLocaleString()}만원까지만 입력할 수 있어요`)
      return false
    }
    setError('')
    return true
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanedValue = valueCleaner(/,/g)(e.target.value)

    if (cleanedValue === '') {
      setDisplayValue('')
      onValidAmount(0)
    }

    if (validateAmount(Number(cleanedValue))) {
      onValidAmount(Number(cleanedValue))
      setDisplayValue(formatNumberWithComma(cleanedValue))
    }
  }

  const handleBlur = () => {
    const raw = displayValue.replace(/,/g, '')
    const num = Number(raw)
    if (raw === '' || isNaN(num)) {
      setError('입력한 금액이 없어요')
      onValidAmount(0)
      setDisplayValue('')
      return
    }
    if (validateAmount(num)) {
      onValidAmount(num)
      setDisplayValue(formatNumberWithComma(num))
    }
  }

  return {
    displayValue,
    error,
    handleAmountChange,
    handleBlur,
    setDisplayValue,
  }
}
