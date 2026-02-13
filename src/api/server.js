import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'lxm-protocol-core' });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`LXM Protocol Core listening on port ${port}`);
  });
}

export default app;
