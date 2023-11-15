/**
 * 클래스 연결 메소드
 */
export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(' ')
}
