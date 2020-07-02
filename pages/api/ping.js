import nextConnect from 'next-connect'

const handler = nextConnect()

handler.get(async (req, res) => {
  console.log(req.query)
  res.json({ msg: 'pong' })
})

export default handler
