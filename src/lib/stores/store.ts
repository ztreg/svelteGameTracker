import type { Cat, Difficulty } from '$lib/services/api';
import { writable } from 'svelte/store';

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const catsData = writable(new Array<Cat>());
export const correctCats = writable(new Array<Cat>());
export const points = writable(<number>(0));
export const lifeRemaining = writable(<number>(0));
export const gameSettings = writable(<Difficulty | null>(null))
export const catJamLevel = writable<string>('level-1')
export const gameStatus = writable<string>('')


// Writeable (observable)
export const myWritable = writable(<string | undefined>(undefined))

