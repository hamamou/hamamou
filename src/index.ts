import {serve} from '@hono/node-server';
import {Hono} from 'hono';
import Resume from './resume';

const app = new Hono();

app.get('/', (c) => {
    return c.html(Resume());
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
    fetch: app.fetch,
    port,
});
