import { writable } from 'svelte/store';

export const load = () => {
    return {
		data: "This data is server side rendered"
    };
};