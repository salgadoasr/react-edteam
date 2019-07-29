import { createStore } from "redux"

const initialState = {
    jugadores : [{
        id: 1,
        nombre: "Juan Carlitos",
        foto: "https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg"
    }],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
    return state
}

export default createStore(reducerEntrenador)


