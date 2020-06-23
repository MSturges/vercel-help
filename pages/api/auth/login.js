import middleware from '../../../middlewares/middleware'

export default async (req, res) => {
  // console.log('req', req)

  try {
    await middleware(req, res)

    // console.log('req.db.collection', req.db.collection)

    const shared = await req.db.collection('shared').findOne({ slug: 'Xzx1c01w' })
    console.log('shared', shared)
  } catch (e) {
    console.log('e', e)
    res.end('e', e)
  }

  res.end('e')
}
