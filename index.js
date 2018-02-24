const next = require('next');

var PORT = process.env['PORT'] || 5000;
const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({
    dev
});
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    const app = require('./lib/app.js')();

    // Handle everything that is not covered in above routes with next.js
    app.get('*', (request, response) => {
        return handle(request, response);
    });

    app.listen(PORT, () => {
        console.log(
            `Running @ http://localhost:${PORT}. Press ^C to Terminate.`
        );
    });
});
