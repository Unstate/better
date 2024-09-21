import {FC, ReactNode} from "react";

type TLayOut = {
    children:ReactNode
}

const LayOut:FC<TLayOut> = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}

export default LayOut