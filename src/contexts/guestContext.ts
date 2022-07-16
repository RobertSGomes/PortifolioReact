import { createContext } from "react"

interface GuestInterface {
    name: string,
    keyPressed?: React.KeyboardEvent
}

export const guestValue: GuestInterface = {
    name: "world"
}

export const GuestContext = createContext<GuestInterface>(guestValue)