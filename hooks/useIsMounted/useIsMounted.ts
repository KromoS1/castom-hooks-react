import {useCallback, useEffect, useRef} from "react";

//useIsMounted - проверяет вмонтирован ли компонент в DOM

const useIsMounted = () => {
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;

        return () => {
            isMounted.current = false;
        }
    },[]);

    return useCallback(() => isMounted.current,[]);
}