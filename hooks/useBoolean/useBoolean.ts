import {useCallback, useState, Dispatch, SetStateAction,} from "react";

//useBoolean - хук для работы с логическими значениями, помогает избежать дублирования кода.

interface UseBooleanOutput {
    value: boolean
    setValue: Dispatch<SetStateAction<boolean>>
    setTrue: () => void
    setFalse: () => void
    toggle: () => void
}

function useBoolean(defaultValue?: boolean): UseBooleanOutput {
    const [value, setValue] = useState(!!defaultValue)

    const setTrue = useCallback(() => setValue(true), [])
    const setFalse = useCallback(() => setValue(false), [])
    const toggle = useCallback(() => setValue(x => !x), [])

    return { value, setValue, setTrue, setFalse, toggle }
}