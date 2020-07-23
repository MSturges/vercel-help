/* eslint-disable radix */
/* eslint-disable dot-notation */
import jwt from 'jsonwebtoken'
import nextConnect from 'next-connect'
import qs from 'qs'
import middleware from '../../../middlewares/middleware'

const handler = nextConnect()
handler.use(middleware)

handler.post(async (req, res) => {
  const { Models, body } = req

  const { id } = qs.parse(body)

  const user = await Models.User.findOne({ _id: id })

  const token = jwt.sign(
    {
      email: user.email,
      user_id: user.user_id,
      team_id: user.team_id,
      company_id: user.company_id
    },
    process.env.jwt_secret,
    { expiresIn: 21600 }
  )

  return res.send({ token })
})

export default handler
