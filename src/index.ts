import app from './app';
import { APP_PORT } from './config';

app.listen({ port: APP_PORT }, () => {
  console.log(`Server is running on http://localhost:${APP_PORT}`);
});

app.get('/', () => ({ ok: true }));
