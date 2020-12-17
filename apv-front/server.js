const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
console.log(dev);
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl

        if (pathname === '/regimen-a') {
            app.render(req, res, '/regimenA', query)
        } else if (pathname === '/regimen-b') {
            app.render(req, res, '/regimenB', query)
        } else if (pathname === '/resultado') {
            app.render(req, res, '/resultado', query)
        } else if (pathname === '/solicitud') {
            app.render(req, res, '/solicitud', query)
        } else {
            handle(req, res, parsedUrl)
        }
    }).listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})