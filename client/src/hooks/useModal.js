import { useState } from 'react'

const useModal = (initialMode = false) => {
  const [isOpened, setIsOpened] = useState(initialMode)
  const [modalData, setModalData] = useState([])
  const toggle = ()=> setIsOpened(!isOpened)
  return {isOpened, setIsOpened, modalData, setModalData, toggle}
}

export default useModal