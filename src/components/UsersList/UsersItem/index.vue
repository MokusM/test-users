<template>
	<li class="users-list__item">
		<div class="users-list__card">
			<div class="users-list__ava">
				<img :src="user.avatar" alt />
			</div>
			<div class="users-list__cont">
				<div class="users-list__name">{{ user.first_name }} {{ user.last_name }}</div>
				<div class="users-list__email">{{ user.email }}</div>
				<router-link :to="'/user/' + user.id" class="users-list__more">Подробнее</router-link>
			</div>
		</div>
	</li>
</template>
<script>
export default {
	name: "UserItem",
	props: {
		user: {
			type: Object,
			default: () => ({}),
			required: true
		}
	}
};
</script>