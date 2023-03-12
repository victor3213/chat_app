const users = []

const addUser = ({id, name, room}) => {
    name = name.toLowerCase() 
    room = room.toLowerCase() 

    const  existingUser = users.find(user => user.room === room && user.name === name)
    // if(existingUser) return {error: 'UserName already taken'}

    const user = {id, name, room}

    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex(user => user.id === id)
    if(index !== -1) users.splice(index, 1)[0]
}

const getUser = (id) => {
    return users.find(user => user.id === id)
}


const getUsersInRoom = (room) => users.filter(user => user.room === room)


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}