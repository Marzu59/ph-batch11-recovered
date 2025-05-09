export default function Friend({friendd}){
const {name, email, id} = friendd
return (
    <div className="usercard">
        Name:{name} Email:{email} id: {id}
    </div>
)
}