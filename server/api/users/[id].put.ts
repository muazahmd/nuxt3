import UserModel from "../../models/User.model";

export default defineEventHandler(async (event: any) => {
  const body = await readBody(event);
  const id = event.context.params.id;

  try {
    await UserModel.findByIdAndUpdate(id, body);
    return { message: "Author updated" };
  } catch (e: any) {
    throw createError({
      message: e.message,
    });
  }
});
