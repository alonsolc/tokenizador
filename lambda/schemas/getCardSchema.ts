import joi from 'joi'

export const getCardSchema = joi.object({
  token: joi.string().length(16).required(),
})
