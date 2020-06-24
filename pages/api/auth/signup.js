import middleware from '../../../middlewares/middleware'

export default async (req, res) => {
  // console.log('req', req)

  try {
    await middleware(req, res)

    const { Models } = req

    console.log(
      Models
    )

    const UserDoc = await Models.Admin.find({})

    console.log('UserDoc', UserDoc)

    // const yo = AdminModel.findOne({email: 'max.r.sturges+asdasd@gmail.com'})

    // console.log('yo', yo)
  } catch (e) {
    console.log('e', e)
    res.end('e', e)
  }

  res.end('e')
}
