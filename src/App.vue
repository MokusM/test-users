<template>
	<div id="app">{{users}}</div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
	data() {
		return {
			loading: false,
			filters: {
				title: null
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
<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
