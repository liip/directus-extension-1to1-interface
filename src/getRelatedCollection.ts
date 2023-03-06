import { useStores } from '@directus/extensions-sdk';

export default (collection: string, field: string) => {
	const stores = useStores();
	const relationsStore = stores.useRelationsStore();
	const collectionsStore = stores.useCollectionsStore();

	return collectionsStore.getCollection(relationsStore.getRelationForField(collection, field).related_collection);
};
