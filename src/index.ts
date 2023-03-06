import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'directus-extension-1to1-interface',
	name: 'One to One Inline',
	icon: 'list_alt',
	description: 'Displays a one to one relationship inline as a subform.',
	component: InterfaceComponent,
	options: null,
	group: 'relational',
	relational: true,
	types: ['alias'],
	localTypes: ['m2o'],
});
