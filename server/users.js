const users = []

const addUser = ({id, name, room}) => {
    name = name.trim().toLowerCase()
    room = room.trim().toLowerCase()

    const  existingUser = users.find(user => user.room === room && user.name === name)
    if(existingUser) return {error: 'UserName already taken'}

    const newUser = {id, name, room}

    users.push(newUser)

    return { newUser }
}

const removeUser = (id) => {
    const index = users.findIndex(user => user.id === id)
    if(index !== -1) users.splice(index, 1)[0]
}

const getUser = (id) => users.find(user => user.id === id)


const getUsersInRoom = (room) => users.filter(user => user.room === room)


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}