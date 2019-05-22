const db = require('../data/dbconfig.js');

getUsers = () => {
    return db('users')
};

getUserById = (firebase_id) => {
    return db('users')
    .where({ firebase_id })
};

postNewUser = (user) => {
    return db('users').insert(user)
};

module.exports = {
    getUsers,
    getUserById,
    postNewUser
}