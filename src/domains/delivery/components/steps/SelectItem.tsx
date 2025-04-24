import { Heading } from '@hensley-ui/ui'
import { ItemType } from '../../types'
import { Input } from '@/components/ui/input'
import { ItemDrawer } from '../ItemDrawer'

interface SelectItemProps {
  onSelect: (type: ItemType) => void
}

//TODO: ItemDrawer완성하기
export const SelectItem = ({ onSelect }: SelectItemProps) => {
  return (
    <>
      <div>
        <Heading as="h2">보내는 물건의 정보를 알려주세요</Heading>
        <Input placeholder="물건 정보" />
      </div>
      <ItemDrawer defaultOpen={true} />
    </>
  )
}
