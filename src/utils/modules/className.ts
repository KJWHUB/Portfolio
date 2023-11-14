/**
 * 클래스 연결 메소드
 */
const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(' ')
}

/**
 * sample 메소드
 */
const sample = (a: any) => {
  return a.toString()
}

const method = {
  classNames,
  sample,
}

export default method
