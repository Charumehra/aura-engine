import Joi from "joi";

export const productSchema = Joi.object({
  productName: Joi.string()
    .min(2)
    .max(150)
    .required(),

  sku: Joi.string()
    .uppercase()
    .required(),

  category: Joi.string()
    .required(),

  price: Joi.number()
    .min(0)
    .required(),

  cost: Joi.number()
    .min(0)
    .required(),

  stockQuantity: Joi.number()
    .min(0)
    .required(),

  reorderLevel: Joi.number()
    .min(0)
    .required(),

  lastUpdated: Joi.date().optional(),
})
.custom((value, helpers) => {

  if (value.price < value.cost) {
    return helpers.error("any.invalid");
  }

  return value;
})
.messages({
  "any.invalid":
    "Price cannot be lower than cost.",
});