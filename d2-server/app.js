const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware')

const server = restify.createServer({
    name: 'd2-server',
    version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser({
    mapParams: true
}));
server.use(restify.plugins.bodyParser({
    mapParams: true
}));

const cors = corsMiddleware({
    origins: ['*']
});

server.pre(cors.preflight);
server.use(cors.actual);

const itemsRoutes = require('./routes/itemsRoutes');
server.get('/items', itemsRoutes.getAll);
server.get('/items/:id', itemsRoutes.getSingle);
server.post('/items', itemsRoutes.addNew);

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});