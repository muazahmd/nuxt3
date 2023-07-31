import UserModel from "../../models/User.model";

export default defineEventHandler(async (event: any) => {
  const id = event.context.params.id;
  return await UserModel.findOne({ _id: id });
});
