import { catsData, gameSettings, gameStatus, lifeRemaining } from "$lib/stores/store"


export function resetData() {
    gameSettings.update(() => null)
    catsData.update(() => [])
    lifeRemaining.update(() => 10)
    gameStatus.update(() => '')
}