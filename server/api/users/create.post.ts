import UserModel from "../../models/User.model";
// import Joi from "joi";


export default defineEventHandler(async (event) => {
	// Get data form body
	const body = await readBody(event);
	delete body._id
	console.log('body',body)
  //  const UserSchema = Joi.object({
  //   fname: Joi.string().min(3).required(),
  //   lname: Joi.string().min(3).required(),
  //   father_name: Joi.array(),
  //   education: Joi.date().required(),
  //   email: Joi.number(),
  //   address: Joi.number()
  // });
	// // validate
	// let { value, error } = UserSchema.validate(body);
	// if (error) {
	// 	throw createError({
	// 		message: error.message.replace(/"/g, ""),
	// 		statusCode: 400,
	// 		fatal: false,
	// 	});
	// }

	// create author
	try {
		await UserModel.create(body);
		return { message: "Author created" };
	} catch (e:any) {
		throw createError({
			message: e.message,
		});
	}
});