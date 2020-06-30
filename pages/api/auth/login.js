import qs from 'qs'
import bcrypt from 'bcryptjs'
import nextConnect from 'next-connect'
import jwt from 'jsonwebtoken'
import middleware from '../../../middlewares/middleware'

const handler = nextConnect()
handler.use(middleware)

handler.post(async (req, res) => {
  const { Models, body } = req
  const { email, password } = qs.parse(body)


  try {
    const user = await Models.Admin.findOne({
      email
    })

    if (!user) {
      res.status(401).json({ message: 'Unauthorized' })
      res.end()
    }

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ email: user.email }, process.env.jwt_secret, { expiresIn: 21600 }) // 6hr token
      return res.end(JSON.stringify({ token }))
    }
    res.status(401).json({ message: 'Unauthorized' })
    res.end()
  } catch (e) {
    console.log('e', e)
  }
})

export default handler
