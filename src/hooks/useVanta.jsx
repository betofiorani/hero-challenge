import { useRef, useEffect, useState } from 'react'
import Cells from 'vanta/dist/vanta.cells.min'
import * as THREE from 'three'

const useVanta = () => {

    const myRefDiv = useRef(null) 
    const [ vanta, setVanta ] = useState(0); 
    useEffect( ()=> {

        if (!vanta){
            setVanta(Cells({
                THREE,
                el: myRefDiv.current,
                color2: 0x3556f2,
                minHeight: 800,
                minWidth: 500.00
            }))
        }
        
        return () => {
            if(vanta) {
                vanta.destroy()
            }
        }
    },[vanta])
    
    return { myRefDiv }

}

export default useVanta