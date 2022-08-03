export interface IPost {
    userId: number
    id: number,
    title: string,
    body: string,
}

export interface IUser {
    id: number,
    name: string,
    company: {
        name: string
    },
}

export interface Item {
    id: number
    title: string
    username: string
    company: {
        name: string
    }
}

export interface IAdmin {
    login: string
    password: string
}
