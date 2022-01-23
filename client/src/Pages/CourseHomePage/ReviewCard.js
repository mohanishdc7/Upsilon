import { Avatar } from '@chakra-ui/avatar'
import React from 'react'
import './styles.css'
import {BsStarFill,BsStarHalf,BsStar} from "react-icons/bs"

// const rev={
//     review: "Nice Course",
//     reviewAuthorId: "61530168f91b6600166b6722",
//     reviewName: "User",
//     reviewRating: 5
// }
const color="gold"

const rating = (a) => {
    a=(Math.round(2*a)/2);
    let ans=[];
    let x = Math.floor(a)
    let y = Math.ceil(a)
    let z = x!=y;
    while(x--)
    {
      ans.push(<BsStarFill fill={color}/>)
    }
    if(z)
       ans.push(<BsStarHalf fill={color}/>)
    while(y!=5)
    {
     ans.push(<BsStar fill={color}/>)
     y++
    }
    return ans;
 }

function ReviewCard({rev}) {
    return (
        <div className="rcm">
            <div className="rc1">
            <Avatar size="sm" src="https://source.unsplash.com/random/720x404"/>
            <div className="rna">{rev.reviewName}<span className="rra">{rating(rev.reviewRating)}</span></div>
            </div>
            <p className="rde">{rev.review}</p>
            <hr />
        </div>
    )
}

export default ReviewCard
