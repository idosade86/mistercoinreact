// var  gUsers = [
//     { name: "Ido sade", username: 'ido', coins: 100, moves: [] },
//     { name: "Nir las", username: 'nir', coins: 100, moves: [] },
//     { name: "Ochoa Hyde", username: 'ochoa', coins: 100, moves: [] }

// ]

function loadeUser(typedDetails) {
    return  { name: typedDetails, coins: 100, moves: [] }
    // return gUsers.filter(user => user.username === typedDetails)
}

export default {
    loadeUser
}