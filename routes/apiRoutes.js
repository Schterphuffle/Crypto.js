//Use express-session
app.use(session({secret: SECRET, cookie: { maxAge: 60000 }}));

app.get('/', function(req, res, next) {
    if (req.session.views) {
        req.session.views++
        res.setHeader('Content-Type', 'text/html')
        res.write(`<p>views: ${(req.session.views)} </p>`)
        res.write(`<p>expires in: ${(req.session.cookie.maxAge / 1000)} s</p>`)
        res.end()
    } else {
        req.session.views = 1
        res.end(`Login again`)
    }
})