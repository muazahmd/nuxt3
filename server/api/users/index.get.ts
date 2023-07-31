import UserModel from "../../models/User.model";

export default defineEventHandler(async (event) => {
	// return all user
	return await UserModel.find();
});