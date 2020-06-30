import nextConnect from 'next-connect'
import middleware from '../../middlewares/middleware'

const handler = nextConnect()
handler.use(middleware)

handler.get(async (req, res) => {
  res.json({ "msg": "pong" })
})

export default handler
