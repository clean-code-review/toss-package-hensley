import { RefObject, useEffect } from 'react'

export function useFocusEffect(
  ref: RefObject<HTMLElement | null>,
  condition: boolean,
) {
  useEffect(() => {
    if (ref?.current && condition) {
      ref.current.focus()
    }
  }, [condition])
}
