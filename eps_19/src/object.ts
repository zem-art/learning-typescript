// object

type User = {
    name : string,
    age : number,
    alamat : string,
}

let user: User = {
    name : "ucups",
    age : 20,
    alamat : ''
}

user = {
    ...user,
    alamat : 'jln pahlawan'
}