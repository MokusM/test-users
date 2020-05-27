<template>
	<ul class="users-list">
		<users-item v-for="user in users" :key="user.id" :user="user" />
	</ul>
</template>
<script>
import UsersItem from "./UsersItem";
export default {
	name: "UserList",
	components: {
		UsersItem
	},
	props: {
		users: {
			type: Array,
			default: () => ({}),
			required: true
		}
	}
};
</script>