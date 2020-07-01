import qs from 'qs'
import bcrypt from 'bcryptjs'

import middleware from '../../../middlewares/middleware'

export default async (req, res) => {
  try {
    await middleware(req, res)

    const { Models, body } = req

    const { email, password } = qs.parse(body)
    const hashPassword = await bcrypt.hash(password, 10)

    const Admin = await Models.Admin.create({
      email,
      password: hashPassword
    })

    console.log('Admin', Admin)
  } catch (e) {
    console.log('e', e)
    res.end('e', e)
  }

  res.end('e')
}
