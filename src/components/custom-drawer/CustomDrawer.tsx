import { Drawer, DrawerContent } from '../ui/drawer'

export type DrawerProps = Parameters<typeof Drawer>[0]

export const CustomDrawer = ({ children, ...props }: DrawerProps) => {
  return (
    <Drawer {...props}>
      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  )
}
