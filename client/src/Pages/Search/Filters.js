import { Checkbox } from '@chakra-ui/checkbox'
import {GrNext,GrPrevious} from 'react-icons/gr';
import React from 'react'

const rat=[{
    main : "Ratings",
    sub : ["4.5 & above","4.5 & above","4.5 & above","4.5 & above"]
},{
    main : "Ratings",
    sub : ["4.5 & above","4.5 & above","4.5 & above","4.5 & above"]
},{
    main : "Ratings",
    sub : ["4.5 & above","4.5 & above","4.5 & above","4.5 & above"]
},{
    main : "Ratings",
    sub : ["4.5 & above","4.5 & above","4.5 & above","4.5 & above"]
},{
    main : "Ratings",
    sub : ["4.5 & above","4.5 & above","4.5 & above","4.5 & above"]
},{
    main : "Ratings",
    sub : ["4.5 & above","4.5 & above","4.5 & above","4.5 & above"]
}]

function Filters() {
    return (
       
            <div className="filt">
                <div className="filth">Filters
                </div> 
                {rat.map(r=>(<div className="filti"><div className="filtm">{r.main}</div>
               {r.sub.map(s=>(<Checkbox  className="filto" size="md" colorScheme="purple" >
                  {s}
               </Checkbox>))}</div>
            ))
               }
           </div>
    )
}

export default Filters
