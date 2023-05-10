import Joi from "joi";

const schema = Joi.object({
    title: Joi.string().required().min(3).max(255),
    description: Joi.string().required().min(3).max(255),
    status:Joi.string().valid('archive', 'note', 'trash')
})

const validateNote = (note) => {
    return schema.validate(note)
}

export default validateNote