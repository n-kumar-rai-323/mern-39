const bodyValidator = (schema) => {
  return async (req, res, next) => {
    try {
      const data = req.body;
      const result = await schema.validateAsync(data, { abortEarly: false })
      next()
    } catch (exception) {
      console.log(exception)
      let messageBag = {}
      if (exception.details) {

        exception.details.map((val) => {
          let key = val.context.label;
          let msg = val.message
          messageBag[key] = msg
        })
      }
      next({
        detail: messageBag,
        code: 400,
        message: "Validation filed",
        status: "VALIDATION_FAILED"
      })
    }
  }
}


module.exports = bodyValidator