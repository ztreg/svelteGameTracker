import { catsData, gameSettings } from "$lib/stores/store"

export function resetData() {
    gameSettings.set(null)
    catsData.set([])
}