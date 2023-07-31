import { defineStore } from "pinia";
import { IUser } from "~~/types";
import useToast from "./useToast";

 
export default  defineStore("user-store", {
	state: () => ({
		// List of all users
		users: [] as IUser[],
	}),
	actions: {
		// Get all users from DB
		async getAll() {

			try {

				let data = await $fetch<IUser[]>("/api/users");
				this.users = data;
				return data as IUser[];
			} catch (e:any) {
				 useToast().error(e.message);
			}
		},
		async getById(id:any) {

			try {

				let data = await $fetch<IUser>(`/api/users/${id}`,
				{
					method: "GET",
					// body: {"id":id},
				}
				);
				return data;
			} catch (e:any) {
				 useToast().error(e.message);
			}
		},
		// Create a new user
		async create(users: any) {
 		await $fetch("/api/users/create", {
				method: "POST",
				body: users,
			})
				.catch((e) => {
					useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					 useToast().success("user created");
				});
		},
		// Update a user
		async update(id: string, user: IUser) {
			await $fetch(`/api/users/${id}`, {
				method: "PUT",
				body: user,
			})
				.catch((e) => {
					 useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					 useToast().success("user updated");
				});
		},
		// delete a user
		async remove(id: string) {
			await $fetch(`/api/users/${id}`, {
				method: "DELETE",
			})
				.catch((e) => {
					 useToast().error(e.data.message);
				})
				.then(async () => {
					await this.getAll();
					 useToast().success("users removed");
				});
		},
	},
});

  