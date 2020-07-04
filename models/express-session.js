//express-session github repo: https://github.com/expressjs/session
//https://www.npmjs.com/package/express-session
const app = express();
//Must trust proxy if node.js is behind a proxy, proxy in package.json file
app.set('trust proxy', 1);
app.use(session({
    //generate unique ids for separate sessions open at the same time so they do not conflict
    genid: function(req) {
        return genuuid()
    },
    //Set secret in .env file
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    //recommended to set secure: true, this requires https enabled website
    //cookie will not set for http with secure: true
    cookie: { secure: true }
}))