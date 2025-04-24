import { Button } from '@/components/ui/button'
import { DestinationType } from '../../types'
import { DELIVERY_TEXTS } from '../../constants/texts'
import { useDeliveryStore } from '../../store/deliveryStore'
import { Heading } from '@hensley-ui/ui'

interface SelectDestinationProps {
  onSelect: (type: DestinationType) => void
}

export const SelectDestination = ({ onSelect }: SelectDestinationProps) => {
  const { deliveryType } = useDeliveryStore()

  if (!deliveryType) {
    //TODO : 택배 타입 선택 페이지로 이동
    return
  }

  return (
    <>
      <Heading as="h2">물건을 어디로 보낼까요?</Heading>
      <div className="space-y-2">
        <Button onClick={() => onSelect(deliveryType)}>
          {/* 선택한 택배 타입에 따라 텍스트 변경 */}
          {`${deliveryType} 편의점으로`}
        </Button>
        <Button onClick={() => onSelect('ADDRESS')}>
          {DELIVERY_TEXTS.DESTINATION_TYPE.ADDRESS}
        </Button>
      </div>
    </>
  )
}
