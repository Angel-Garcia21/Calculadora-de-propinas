import type { MenuItem, } from "../types"

type MenuItemProps = {
    item:MenuItem,
    addItem: (item: MenuItem) => void

}

export default function MenuItem({item, addItem}: MenuItemProps) {

    return (
        <button
        className="border-2 border-indigo-300 w-full p-3 rounded-md flex justify-between hover:bg-indigo-100 "
        onClick={() => addItem(item)}>
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
            
        </button>
    )
}
