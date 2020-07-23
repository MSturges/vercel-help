/* eslint-disable radix */
/* eslint-disable dot-notation */
import nextConnect from 'next-connect'
import middleware from '../../../middlewares/middleware'

const handler = nextConnect()
handler.use(middleware)

handler.get(async (req, res) => {
  const { Models } = req
  const { skip, limit, sort_column, sort_dir, q } = req.query

  const $query = {
    status: 'active'
  }
  let sort = [[sort_column, sort_dir]]
  if (q !== '') {
    sort = { score: { $meta: 'textScore' } }
    $query['$text'] = { $search: q, $language: 'none' }
  }
  try {
    const total = await Models.User.countDocuments($query).exec()
    const users = await Models.User.find($query, {
      email: 1,
      name: 1,
      status: 1,
      profile_image: 1,
      role: 1,
      score: { $meta: 'textScore' }
    })
      .populate({
        path: 'company_id',
        model: Models.Company,
        select: 'name'
      })
      .sort(sort)
      .skip(parseInt(skip))
      .limit(parseInt(limit))
      .exec()

    return res.send({ users, total })
  } catch (e) {
    console.error(e)
    return res.status(500).send(e.message)
  }
})

export default handler
