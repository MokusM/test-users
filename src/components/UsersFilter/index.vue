<template>
	<div class="hello">
		<div class="search">
			<form>
				<div class="search__row">
					<select class="search__select" @change="updateFilters" v-model="innerFilters.limit">
						<option value="2">2</option>
						<option value="5">5</option>
						<option value="10">10</option>
						<option value="20">20</option>
					</select>
					<input v-model="innerFilters.name" type="text" class="search__input" @keyup="updateFilters" />
				</div>
			</form>
		</div>
		<div class="pagination">
			<div class="pagination__left">
				<a
					href="#"
					@click.prevent="changePage(prevPage)"
					class="pagination__btn"
					:class="{disabled: !hasPrev}"
				>Предыдущая</a>
			</div>
			<div class="pagination__mid">
				<ul class="pagination-list">
					<li v-for="(page, index) in totalPages" :key="index" class="pagination-list__item">
						<a href="#" @click.prevent="changePage(page)" class="pagination-list__link">{{ page }}</a>
					</li>
				</ul>
			</div>
			<div class="pagination__right">
				<a
					href="#"
					@click.prevent="changePage(nextPage)"
					class="pagination__btn"
					:class="{disabled: !hasNext}"
				>Следующая</a>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
const initialFilters = {
	page: null,
	limit: 5
};
export default {
	name: "UsersFilter",
	props: {
		filters: {
			type: Object,
			default: () => ({}),
			required: true
		}
	},
	data() {
		return {
			current: 1,
			innerFilters: { ...initialFilters }
		};
	},
	watch: {
		filters: {
			immediate: true,
			handler(filters) {
				this.innerFilters = { ...filters };
			}
		}
	},
	computed: {
		...mapGetters({
			totalPages: "users/totalPages"
		}),
		hasPrev() {
			return this.totalPages > 1 && this.innerFilters.page !== 1;
		},
		hasNext() {
			return this.innerFilters.page < this.totalPages;
		}
	},
	methods: {
		updateFilters() {
			this.$emit("update:filters", this.innerFilters);
		},
		onChange(event) {
			this.$emit("update:filters", this.innerFilters);
		},
		nextPage() {
			return this.innerFilters.page + 1;
		},
		prevPage() {
			return this.innerFilters.page - 1;
		},
		changePage(page) {
			this.innerFilters.page = page;
			this.$emit("update:filters", this.innerFilters);
		}
	}
};
</script>
