import { useEffect, useLayoutEffect } from 'react'

//Этот хук устраняет эту проблему, переключаясь между средой выполнения useEffect и следуя ей.useLayoutEffect

const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default useIsomorphicLayoutEffect
