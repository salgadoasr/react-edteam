import React from 'react';
import { Provider } from 'react-redux';
import Jugadores from './componentes/Jugadores';
import EquipoSeleccionado from './componentes/EquipoSeleccionado';
import store from "./store";


const App = () => (
  <Provider store={store}>
  <main>
    <h1>EDmanager</h1>
    <Jugadores />
    <EquipoSeleccionado />
  </main>
  </Provider>
)

export default App;
