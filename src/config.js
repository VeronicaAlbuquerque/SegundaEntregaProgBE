export default{
    PORT :process.env.PORT|| 8080,

    mongoRemote:{
        client: "mongoDb",
        cxnStr:"mongodb+srv://cluster0.iaq0u.mongodb.net/myFirstDatabase"
    }

}