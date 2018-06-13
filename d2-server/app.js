const restify = require('restify');

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

server.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    return next();
});

const itemsRoutes = require('./routes/itemsRoutes');
server.get('/items', itemsRoutes.getAll);
server.get('/items/:id', itemsRoutes.getSingle);
server.post('/items', itemsRoutes.addNew);

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});