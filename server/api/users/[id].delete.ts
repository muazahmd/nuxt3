import UserModel from "../../models/User.model";

export default defineEventHandler(async (event:any) => {
	// Get id from params
	const id = event.context.params.id;

	// Remove author
	try {
		await UserModel.findByIdAndDelete(id);
		return { message: "Author removed" };
	} catch (e:any) {
		throw createError({
			message: e.message,
		});
	}
});