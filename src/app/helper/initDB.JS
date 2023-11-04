const { default: mongoose } = require("mongoose");
function initDB() {
    
    if (mongoose.connections[0].readystate) {
        console.log('alrady connected ')
    return
    }
    mongoose.connect(process.env.MONGO_URL)
    useNewUrlParser: true


    mongoose.connection.on('connected', () => {
        console.log('connected to mongoo');
    })
    mongoose.connection.on('error', (err) => {
        console.log(' mongoo errr', err);
    })
}


export default initDB;

//LPRd6J9luf1VMAiB
//mongodb+srv://<username>:<password>@cluster0.3lto8el.mongodb.net/?retryWrites=true&w=majority