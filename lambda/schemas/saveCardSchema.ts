import joi from 'joi'

export const saveCardSchema = joi.object({
  email: joi.string().min(1).required(),
  card_number: joi.string().min(13).max(16).required(),
  cvv: joi.string().min(3).max(4).required(),
  expiration_year: joi
    .string()
    .valid('2023', '2024', '2025', '2026', '2027', '2028')
    .required(),
  expiration_month: joi
    .string()
    .valid('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12')
    .required(),
})
