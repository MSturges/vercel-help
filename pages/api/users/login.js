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
      'custom:email': user.email,
      'custom:user_id': user._id.toString(),
      'custom:team_id': user.team_id,
      'custom:company_id': user.company_id
    },
    process.env.jwt_secret,
    { expiresIn: 21600 }
  )

  return res.send({ token })
})

export default handler
