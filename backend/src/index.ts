import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('api/test', (c) => {
  return c.text('api/test')
})

const port = 8000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
})
