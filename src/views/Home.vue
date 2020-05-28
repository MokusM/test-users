<template>
	<div class="wrapper">
		<users-filter :filters="filters" @update:filters="onFiltersUpdate" />
		<div class="main-container">
			<loader v-if="loading" />
			<div v-else class="user-wrap">
				<users-list :users="users" />
			</div>
		</div>
	</div>
</template>

<script>
import UsersList from "@/components/UsersList";
import UsersFilter from "@/components/UsersFilter";
import Loader from "@/components/Loader";
import { mapGetters, mapActions } from "vuex";

export default {
	name: "Home",
	components: {
		UsersList,
		UsersFilter,
		Loader
	},
	data() {
		return {
			loading: false,
			filters: {
				name: null,
				limit: 6,
				page: null
			}
		};
	},
	computed: {
		...mapGetters({
			users: "users/users"
		})
	},
	async beforeMount() {
		this.loadUsers();
	},
	methods: {
		...mapActions("users", ["fetchUsers"]),
		onFiltersUpdate(filters) {
			this.loadUsers(filters);
		},
		async loadUsers(filters = {}) {
			this.loading = true;
			try {
				await this.fetchUsers({
					...filters
				});
			} catch (error) {
				console.log(error);
			} finally {
				this.loading = false;
			}
		}
	}
};
</script>