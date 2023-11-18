'use client'

import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'

import css from './backController.module.scss'

const BackController = () => {
  const router = useRouter()
  const handleClick = () => {
    console.log('1', document.referrer)
    router.back()
  }
  return (
    <button className={css.btn} onClick={handleClick}>
      <ArrowLeftIcon className={css.icon} />
    </button>
  )
}

export default BackController
