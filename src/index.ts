import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'directus-extension-1to1-inline',
	name: 'Inline 1:1 relation',
	icon: 'box',
	description: 'Displays a 1 to 1 relation inline in the form.',
	component: InterfaceComponent,
	options: null,
	group: 'relational',
	relational: true,
	types: ['alias'],
	localTypes: ['m2o'],
});
