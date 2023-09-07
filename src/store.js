//ESTE ARCHIVO CONTIENE EL ESTADO GLOBAL CON ZUSTAND DE LA APLICACION

//importo el metodo create de zustand
import { create } from 'zustand';

//creo un Custom Hook para poder acceder a este estado
const useStore = create((set) => ({
    reservations : [],
    addReservation: (hotel, dates) =>
    set((state) => ({
        reservations: [...state.reservations, { hotel, dates }],
    })),
}));

export default useStore;