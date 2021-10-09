const express = require('express');
const { auth } = require('express-openid-connect');
const {GraphQLClient} = require('graphql-request')
const cors = require('cors');
const app = express();

// TODO: make more secure
var corsOption = {
    origin: '*'
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOption));

app.use((err, req, res, next) => {
    console.error(err);
    if (!res.status) res.send(500, "Something went wrong");
    else next();
})


require('dotenv').config()
app.env = process.env;

if (app.env.DEBUG){
    app.use((req, res, next) => {
        console.log({
                "url": req.originalUrl, 
                "method": req.method, 
                "headers":req.headers, 
                "body":req.body, 
                "oidc":req.oidc
            });
        next();
    })
}

// auth config
const config = { 
    authRequired: false,
    auth0Logout: true,
    secret: app.env.SECRET,
    baseURL: app.env.BASE_URL,
    clientID: app.env.CLIENT_ID,
    issuerBaseURL: app.env.ISSUER_BASE_ID
};

app.use(auth(config));

app.listen(parseInt(app.env.PORT) || 3000);

module.exports = app;

const graphqlPath = 'http://80.80.96.244:8080/api/graphql'
module.exports.graphqlPath = graphqlPath
module.exports.graphQLClient = new GraphQLClient(graphqlPath, {
    headers: {
        authorization: 'Basic ZGF0YWh1YjpkYXRhaHVi'
    }
})