import { use } from "react"
import Friend from "./friend"

export default function Friends({friendspromis}){
 const friends = use(friendspromis)

    return (
        <div className="usercard">
            <h4>Friends:  </h4>
     {
    friends.map(friend=> <Friend friendd={friend} key={friend.id} ></Friend> )
    }
        </div>
    )
}