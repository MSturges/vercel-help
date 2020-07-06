import nextConnect from 'next-connect'
import qs from 'qs'
import bcrypt from 'bcryptjs'
import middleware from '../../../middlewares/middleware'

const handler = nextConnect()
handler.use(middleware)

handler.post(async (req, res) => {
  const { Models, body } = req

  try {
    const { email, password } = qs.parse(body)
    const hashPassword = await bcrypt.hash(password, 10)

    const Admin = await Models.Admin.create({
      email,
      password: hashPassword
    })

    return res.end(JSON.stringify({ message: 'success' }))
  } catch (e) {
    console.log('e', e)
  }
})

export default handler
