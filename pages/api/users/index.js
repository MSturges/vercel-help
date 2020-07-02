/* eslint-disable radix */
/* eslint-disable dot-notation */
import nextConnect from 'next-connect'
import middleware from '../../../middlewares/middleware'

const handler = nextConnect()
handler.use(middleware)

handler.get(async (req, res) => {
  const { Models } = req

  const { skip, limit, sort_column, sort_dir, q } = req.query

  const $query = {}
  if (q !== '') {
    $query['$text'] = { $search: q }
  }
  const total = await Models.User.countDocuments($query).exec()
  const users = await Models.User.find($query, {
    email: 1,
    name: 1,
    status: 1,
    profile_image: 1,
    role: 1
  })
    .populate({
      path: 'company_id',
      model: Models.Company,
      select: 'name'
    })
    .sort([[sort_column, sort_dir]])
    .skip(parseInt(skip))
    .limit(parseInt(limit))
    .exec()
  return res.send({ users, total })
})

export default handler
