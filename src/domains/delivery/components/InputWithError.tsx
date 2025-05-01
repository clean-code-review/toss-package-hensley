import { ChangeEvent, ComponentProps, RefObject } from 'react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export interface InputWithErrorProps extends ComponentProps<'input'> {
  error?: string
  isLoading?: boolean
  ref?: RefObject<HTMLInputElement | null>
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
/** view component */
export const InputWithError = ({
  value,
  onChange,
  onBlur,
  placeholder,
  className,
  error,
  isLoading = false,
  ref,
  ...props
}: InputWithErrorProps) => {
  return (
    <div className="space-y-2">
      <Input
        ref={ref}
        value={value ?? ''}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={cn(
          'w-full',
          error && 'border-red-500 focus-visible:ring-red-500',
          isLoading && 'opacity-50 cursor-not-allowed',
          className,
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
      {isLoading && <p className="text-sm text-gray-500">로딩 중...</p>}
    </div>
  )
}

InputWithError.displayName = 'InputWithError'
