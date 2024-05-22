import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps ={
    order:OrderItem[],
    tip:number
    placeOrder: () => void
}

export default function OrderTotal({order, tip, placeOrder}: OrderTotalProps) {

    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0 ), [order])

    const tipAmount = useMemo(() => subTotalAmount * tip  , [tip, order])

    const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order])



    return (
        <>

            <div className="space-y-6">
                <h2 className="font-black md:text-2xl max-lg:text-xl">Totales y Propina</h2>

                <p className="font-semibold md:text-xl">Subtotal a Pagar: {''}
                <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
                </p>

                <p className="font-semibold md:text-xl">Propina: {''}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>

                <p className="font-semibold md:text-xl mb-10">Total a pagar: {''}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>

            </div>
        
            <button
            className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
            disabled={totalAmount === 0}
            onClick={() => placeOrder()}
            >
                Guardar Orden 
            </button>
        </>
    )
}
