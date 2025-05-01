/**
 * 숫자 -> 원화
 * @param value 포맷팅할 숫자
 * @returns 원화 형식의 문자열
 */

import { LOCALE_KO_KR } from './constant'

export const formatWon = (value: number): string =>
  value.toLocaleString(LOCALE_KO_KR, {})

/**
 * 주어진 패턴에 따라 문자열을 정리합니다.
 * @param pattern 정리할 패턴
 * @param value 정리할 문자열
 * @returns 정리된 문자열
 */
export const valueCleaner = (pattern: RegExp) => (value: string) =>
  value.replace(pattern, '')

/**
 * 쉼표를 제거하고 숫자로 변환합니다.
 * @param value 변환할 문자열
 * @returns number
 */
export const formatNumberWithComma = (value: string | number) => {
  const cleaned = valueCleaner(/,/g)(String(value))
  const cleanedNumber = Number(cleaned)
  if (isNaN(cleanedNumber)) return ''
  return cleanedNumber.toLocaleString()
}

export const parseNumber = (value: string): number | undefined => {
  const numericValue = value.replace(/,/g, '')
  const parsedValue = Number(numericValue)
  return isNaN(parsedValue) ? undefined : parsedValue
}
