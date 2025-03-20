'use client'
import Reservations from "@/app/reservations/page"
import { removeReservation } from "@/redux/features/cartSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch, UseDispatch } from "react-redux"
export default function ReservationCart(){
    const carItems = useAppSelector((state)=>state.cartSlice.carItems)
    const dispatch = useDispatch<AppDispatch>();
    return (
        <>
        {
        carItems.map((reservationItems)=>(
            <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"key={reservationItems.carId}>
                <div className="text-xl">{reservationItems.carModel}</div>
                <div className="text-xl">Pick-up {reservationItems.pickupDate} from {reservationItems.pickupLocation}</div>
                <div className="text-xl">Return {reservationItems.returnDate} from {reservationItems.returnLocation}</div>
                <div className="text-xl">Duration: {reservationItems.numOfDays}</div>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={()=>dispatch(removeReservation(reservationItems))}>Reserve this Car</button>
            </div>
            
        ))
        }
        </>
    )
}