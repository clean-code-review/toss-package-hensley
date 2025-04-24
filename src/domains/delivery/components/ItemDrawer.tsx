import { CustomDrawer, DrawerProps } from '@/components/custom-drawer'
import { Button, Heading } from '@hensley-ui/ui'
import { DestinationType, ItemCategory, ItemType } from '../types'

export type ItemDrawerProps = DrawerProps & {
  destinationType: DestinationType
  onClick: (itemCategory: ItemType['itemCategory']) => void
}

export const ItemDrawer = ({
  onClick,
  destinationType,
  ...props
}: ItemDrawerProps) => {
  // TODO : 계산 로직 분리
  const options = (destinationType: DestinationType) => {
    if (destinationType === 'ADDRESS') {
      return Object.values(ItemCategory)
    }

    return Object.values(ItemCategory).filter(
      (category) =>
        category === '의류' ||
        category === '가전제품류' ||
        category === '잡화.서적' ||
        category === '곡물류',
    )
  }

  return (
    <CustomDrawer {...props}>
      <div>
        <Heading as="h2">어떤 물건을 보낼까요?</Heading>
        <div className="gap-2">
          {options(destinationType).map((option) => (
            <div>
              <Button
                variant={'ghost'}
                value={option}
                key={option}
                onClick={() => onClick(option)}
              >
                {option}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </CustomDrawer>
  )
}
