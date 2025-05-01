import { Button } from '@/components/ui/button'

export const AddAmountButtons = ({
  onAddAmount,
}: {
  onAddAmount: (amount: number) => void
}) => {
  return (
    <div className="flex justify-start gap-2">
      {[1, 5, 10, 50].map((amount) => (
        <Button key={amount} onClick={() => onAddAmount(amount)}>
          {`+${amount}만원`}
        </Button>
      ))}
    </div>
  )
}
