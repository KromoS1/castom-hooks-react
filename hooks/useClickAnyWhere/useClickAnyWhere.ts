
// Этот простой хук React предлагает вам прослушиватель событий щелчка на уровне страницы,

import useEventListener from "../useEventListener/useEventListener";

type Handler = (event: MouseEvent) => void

function useClickAnyWhere(handler: Handler) {
    useEventListener('click', event => {
        handler(event)
    })
}