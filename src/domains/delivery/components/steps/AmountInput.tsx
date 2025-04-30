import {
  ChangeEvent,
  forwardRef,
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export interface AmountInputProps {
  value?: number | null
  onChange?: (value: number) => void
  onBlur?: (value: number) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  error?: string
  max?: number
  min?: number
  serialize?: (value: number) => string
  deserialize?: (value: string) => number
  isLoading?: boolean
  fallbackValue?: number
}

export const AmountInput = forwardRef<HTMLInputElement, AmountInputProps>(
  (
    {
      value = null,
      onChange,
      onBlur,
      placeholder,
      disabled,
      className,
      error,
      max = 500_000,
      min = 0,
      serialize = (value) => value.toLocaleString(),
      deserialize = (value) => {
        const numericValue = value.replace(/,/g, '')
        const parsedValue = Number(numericValue)
        return isNaN(parsedValue) ? undefined : parsedValue
      },
      isLoading = false,
      fallbackValue = 0,
    },
    ref,
  ) => {
    const [displayValue, setDisplayValue] = useState<string>('')
    const previousValueRef = useRef<number | null>(value)

    // 초기값 설정 및 서버 값과 로컬 상태 동기화
    useEffect(() => {
      if (value === null || value === undefined) {
        setDisplayValue('')
        return
      }

      if (value !== previousValueRef.current) {
        previousValueRef.current = value
        setDisplayValue(serialize(value))
      }
    }, [value, serialize])

    // 로딩 상태일 때 처리
    useEffect(() => {
      if (isLoading) {
        setDisplayValue('로딩 중...')
      }
    }, [isLoading])

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        if (isLoading) return

        const newValue = event.target.value
        setDisplayValue(newValue)
        // 실제 값 업데이트 시 deserialize 해야함
        const parsedValue = deserialize(newValue)
        if (parsedValue !== undefined) {
          onChange?.(parsedValue)
        }
      },
      [onChange, deserialize, isLoading],
    )

    const handleBlur = () => {
      if (isLoading) return
      // 입력값이 없거나 잘못된 경우 폴백 값 사용
      const parsedValue = deserialize(displayValue) ?? fallbackValue
      // 최소/최대 값 제한 적용
      const clampedValue = Math.min(Math.max(parsedValue, min), max)
      // 포맷팅된 값으로 표시
      setDisplayValue(serialize(clampedValue))
      // 실제 값 업데이트
      onChange?.(clampedValue)
      onBlur?.(clampedValue)
    }

    const handleFocus = () => {
      if (isLoading) return
      setDisplayValue(displayValue.replace(/,/g, ''))
    }

    return (
      <div className="space-y-2">
        <Input
          ref={ref}
          value={displayValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder={placeholder}
          disabled={disabled || isLoading}
          className={cn(
            'w-full',
            error && 'border-red-500 focus-visible:ring-red-500',
            isLoading && 'opacity-50 cursor-not-allowed',
            className,
          )}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        {isLoading && <p className="text-sm text-gray-500">로딩 중...</p>}
      </div>
    )
  },
)

AmountInput.displayName = 'AmountInput'
