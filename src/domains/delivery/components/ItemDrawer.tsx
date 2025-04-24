import { CustomDrawer, DrawerProps } from '@/components/custom-drawer'
import { Input } from '@/components/ui/input'
import { Heading } from '@hensley-ui/ui'

type ItemDrawerProps = DrawerProps
//TODO: SelectItem추가
export const ItemDrawer = (props: ItemDrawerProps) => {
  return (
    <CustomDrawer {...props}>
      <div>
        <Heading as="h2">어떤 물건을 보낼까요?</Heading>
        <Input placeholder="물건 정보" />
      </div>
    </CustomDrawer>
  )
}
