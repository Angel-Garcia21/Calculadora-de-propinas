
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContent"
import OrderTotal from "./components/OrderTotal"
import TipPercentageForm from "./components/TipPercentageForm"


function App() {
  
  const {addItem,order, tip, setTip, removeItem, placeOrder} = useOrder()

  return (
    <>
      <header className="bg-indigo-300 max-w py-6">
      <h1 className="md:text-4xl font-black text-center  max-lg:text-3xl">Consumo y propinas</h1>
      </header>

      <main className="max-w-7xl mx-auto mt-20 md:py-20 grid md:grid-cols-2 md:">
        <div className="p-5">
          <h2 className="text-4xl font-black text-center max-lg:text-2xl mb-4 ">Menu</h2>
          <div className="md:mt-10 md:space-y-2">
            {menuItems.map(item => (
            <MenuItem
            key={item.id}
            item={item}
            addItem={addItem}
            />
          ) )}</div>
        </div>

        
            <div className="border border-dashed border-slate-600 p-5 rounded-lg space-y-5">

              {order.length > 0 ? (
                <>
              <OrderContent
              order={order}
              removeItem={removeItem}
              />
              
              <TipPercentageForm
              setTip={setTip}
              tip={tip}
              />

              <OrderTotal
              order={order}
              tip={tip}
              placeOrder={placeOrder}
              />
                </>
              ): (
                <p className="text-center"> 'La orden esta vacia'</p> 
              ) }


            
            </div>

      </main>

      <footer className="bg-indigo-100 w-full py-3 mt-20">
              <div className="">
                <p className="mx-4 m-2">Todos los Derechos Reservados- Angel Garcia</p>
                <p className="mx-4 mb-5  font-light text-sm">Consumo y propinas 2024</p>
              </div>


      </footer>
    </>
  )
}

export default App
