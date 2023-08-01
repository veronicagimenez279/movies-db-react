import { Header } from "../Header"



export const Layout = ({ children }: { children: any }) => {

    return (
        <div>
            <Header />
            {children}
        </div>
    )

}