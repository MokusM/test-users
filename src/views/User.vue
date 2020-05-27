<template>
	<div class="user wrapper">
		<a href="#" @click="$router.go(-1)" class="back-link">Вернуться назад</a>
		<h1>Подробная информация</h1>
		<div class="users-list__item">
			<div class="users-list__card">
				<div class="users-list__ava">
					<img :src="user.avatar" alt />
				</div>
				<div class="users-list__cont">
					<div class="users-list__name">{{ user.first_name }} {{ user.last_name }}</div>
					<div class="users-list__email">{{ user.email }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
	name: "User",
	data() {
		return {
			loading: false
		};
	},
	mounted() {
		let id = parseInt(this.$route.params.id);
	},
	computed: {
		...mapGetters({
			user: "users/user"
		})
	},
	beforeMount() {
		const id = this.$route.params.id;
		this.loadUser(id);
	},
	methods: {
		...mapActions("users", ["usersById"]),
		async loadUser(id) {
			this.loading = true;
			try {
				await this.usersById(id);
			} catch (error) {
				console.log(error);
			} finally {
				this.loading = false;
			}
		}
	}
};
</script>
