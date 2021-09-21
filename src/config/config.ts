export default {
    DB:{
        URI: process.env.URI_DB || 'mongodb://localhost:27017/pushka',
        USER_DB: process.env.USER_DB || '',
        PASS_DB: process.env.PASS_DB || '',

    },
    jwt: process.env.SECRET_JWT || 'secreto'
}