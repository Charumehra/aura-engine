import { productSchema } from "../validations/productValidation.js";

const validateProduct = (req, res, next) => {

  const { error } = productSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  next();
};

export default validateProduct;