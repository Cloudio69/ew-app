import { AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai"
import { BsCart, BsSliders } from "react-icons/bs"
import { VscSettingsGear } from "react-icons/vsc"


export const links = [
    {
       icon: <AiOutlineUser />,
       text: "Il mio profilo",
       slug: "profile"  
    },
    {
        icon: <AiOutlineUsergroupAdd />,
        text: "Il mio team",
        slug: "team"
    },
    {
        icon: <BsSliders />,
        text: "Report",
        slug: "report" 
    },
    {
        icon: <BsCart />,
        text: "I miei prodotti",
        slug: "products"
    },
    {
        icon: <VscSettingsGear />,
        text: "Impostazioni",
        slug: "settings"
    }
]