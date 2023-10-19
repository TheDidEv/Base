import uuid from 'uuid';

const generateId = () => {
    return uuid.v4();
}
//EXAMPLE - 1
class User {
    id: string;
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.id = generateId();
        this.username = username;
        this.password = password;
    }

    //BAD practic
    /*
    saveUSer() {
        ...
    }

    userController() {
        ...
    }

    userLoger() {
        ...
    }

    */
}

//good practic

class UserRepository {
    save(user: User) {
        //save user to DB
    }
}

class UserLogger {
    log(user: User) {
        console.log(user);
    }
}

class userController {
    send(user: User) {
        //return http.send();
    }
}


//EXAMPLE - 2

class DataFetcher {
    get(url: string) { };
    post() { };
    put() { };
    delete() { };


    //BAD practic
    /*
    getUser(id: string) {
        this.get('http://localhost:5000/' + id);
    }
    getRequisit(id: string) {
        this.get('http://localhost:5000/' + id);
    }
    getClient(id: string) {
        this.get('http://localhost:5000/getClient' + id);
    }
    */
}


//GOOD practic
class HttpClient {
    get(url: string) { };
    post() { };
    put() { };
    delete() { };
}
class UserService {
    client: HttpClient;
    constructor(client: HttpClient) {
        this.client = client;
    }

    getOneUser(id: number) {
        this.client.get('http://localhost:5000/' + id);
    }

    getAllUser() {
        this.client.get('http://localhost:5000/allUsers');
    }
}

class RequisitesService {
    createRequisites() { };
    getRequisites() { };
    updateRequisites() { };
}

// class DataFetcherCorrect {
//     client: HttpClient;
//     constructor(client: HttpClient) {
//         this.client = client;
//     }

//     getUser(id: string) {
//         this.client.get('http://localhost:5000/' + id);
//     }
//     getRequisit(id: string) {
//         this.client.get('http://localhost:5000/' + id);
//     }
//     getClient(id: string) {
//         this.client.get('http://localhost:5000/getClient' + id);
//     }
// }