import './stylesUsers.css'
import Trash from '../assets/trash.svg'
import api from '../services/api'


export default function Users({ users, deleteUsers }) {

    return (
        <div>
            {users.map((user) => (
                <div className='card' key={user._id}>
                    <div>
                        <p>Name: <span>{user.name}</span></p>
                        <p>Age: <span>{user.age}</span></p>
                        <p>Email: <span>{user.email}</span></p>
                    </div>

                    <button
                        className='button'
                        onClick={() => deleteUsers(user._id)}
                    >
                        <img src={Trash} sizes='10px' />
                    </button>
                </div>
            ))}
        </div>
    )
}