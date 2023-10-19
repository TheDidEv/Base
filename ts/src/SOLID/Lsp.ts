class Database {
    connect() { }
    read() { }
    write() { }
    joinTable() { }//for mistake example
}

class MySQLDatabase extends Database {
    connect() { }
    read() { }
    write() { }
    joinTable() { }
}

class MongoDatabase extends Database {
    connect() { }
    read() { }
    write() { }
    joinTable() {
        throw new Error('Mongo haven`t table');//this mistake 
    }
}
//for correct pincepes we need to delete joinTable from class Database
//and add this method to class MySQLDatabase
//and don`t call him on class MongoDatabase

class DatabaseCorrect {
    connect() { }
    read() { }
    write() { }
}

class MySQLDatabaseCorrect extends DatabaseCorrect {
    connect() { }
    read() { }
    write() { }
    joinTable() { }//create new method onli for this class 
}

class MongoDatabaseCorrect extends DatabaseCorrect {
    connect() { }
    read() { }
    write() { }
    createIndex() { }//there also create a new method onli for this class 
}

function startApp(database: DatabaseCorrect) {
    database.connect();
}
startApp(new MongoDatabaseCorrect());
startApp(new MySQLDatabaseCorrect());