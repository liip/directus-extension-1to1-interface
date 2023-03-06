import { computed } from 'vue';
import { useItems } from '@directus/extensions-sdk';

export default (collection: string, id: number) => {
	return useItems(
		computed(() => collection),
		{
			filter: computed(() => ({
				id: {
					_eq: id,
				},
			})),
			fields: computed(() => ['*']),
			limit: computed(() => 1),
			page: computed(() => null),
			sort: computed(() => null),
			search: computed(() => null),
		}
	);
};
