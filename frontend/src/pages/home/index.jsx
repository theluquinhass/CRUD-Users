import { useRef, useEffect, useState } from 'react'
import './style.css'
import Users from '../../components/Users'
import api from '../../services/api'


function Home() {

  const [users, setUsers] = useState([])

  async function getUsers() {
    const usersFromApi = await api.get('/users')

    setUsers(usersFromApi.data)
  }

  useEffect(() => {
    getUsers()
  }, [])


  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function createUsers() {

    await api.post('/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
    getUsers()
  }

  async function deleteUsers(id) {

    console.log('ID recebido', id)

    await api.delete(`/users/${id}`)
    getUsers()
  }

  return (
    <div className='container'>
      <form >
        <h1>Register Users</h1>
        <input name='name' className='input' placeholder='Name' type='text' ref={inputName} />
        <input name='Age' className='input' placeholder='Age' type='number' ref={inputAge} />
        <input name='Email' className='input' placeholder='Email' type='text' ref={inputEmail} />
        <button type='button' onClick={createUsers}>Register</button>
      </form>
      <Users
        users={users}
        deleteUsers={deleteUsers}
      />
    </div>

  )
}

export default Home
