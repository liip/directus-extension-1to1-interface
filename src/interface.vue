<template>
	<v-form
		class="form-inline"
		:collection="relatedCollection.collection"
		:initial-values="initialFieldValues"
		:loading="loading"
		v-model="value"
	/>
</template>

<script setup lang="ts">
import { type PropType, computed } from 'vue';
import getRelatedCollection from './getRelatedCollection';
import getSingleEntry from './getSingleEntry';

const props = defineProps({
	collection: {
		type: String,
		required: true,
	},
	field: {
		type: String,
		required: true,
	},
	value: {
		type: Object as PropType<object | number | null>,
		default: null,
	},
});
const emit = defineEmits(['input']);

const isId = (value: object | number | null) => typeof value === typeof Number();

const relatedCollection = getRelatedCollection(props.collection, props.field);
const isCollectionSingleton = relatedCollection.meta.singleton;

// If collection is a singleton, id is always 1
const initialValue = isCollectionSingleton ? 1 : props.value;

const entry = isId(initialValue) ? getSingleEntry(relatedCollection.collection, Number(initialValue)) : null;
const initialFieldValues = entry
	? computed(() => (isCollectionSingleton ? entry.items.value : entry.items.value[0]))
	: computed(() => ({}));
const loading = entry ? entry.loading : computed(() => false);

const value = computed({
	get: () => (isId(props.value) || (isCollectionSingleton && !props.value) ? { id: initialValue } : props.value),
	set: (value) => {
		const changedKeys = Object.keys(value as object).filter((key) => key !== 'id');

		if (changedKeys.length) {
			emit('input', value);
		} else {
			emit('input', initialValue);
		}
	},
});
</script>
<style scoped>
.form-inline {
	border: var(--border-width) solid var(--border-normal);
	border-radius: var(--border-radius);
	padding: var(--form-horizontal-gap) var(--form-vertical-gap);
}
</style>
