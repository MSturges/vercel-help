import qs from 'qs'
import bcrypt from 'bcryptjs'

import middleware from '../../../middlewares/middleware'

export default async (req, res) => {
  // console.log('req', req)

  try {
    await middleware(req, res)

    console.log('req', req.Models)

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
