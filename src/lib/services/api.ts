import { catsData } from "$lib/stores/store"

const ROOT_URL = 'https://cataas.com/api/'
// const COUNTRIES_URL = `${ROOT_URL}/api/v1/countries`
// const TEST_URL = `${ROOT_URL}/api/v1/`
const ALL_CATS_URL = `${ROOT_URL}/cats`
const CAT_URL = `${ROOT_URL}cat`
const RANDOM_CAT = 'https://cataas.com/cat'
const LOGINURL = `${ROOT_URL}/api/v1/auth/api-token-auth/`
const MEURL = `${ROOT_URL}/api/v1/me/`
import { v4 as uuidv4 } from 'uuid';

export async function fetchNmrOfCats(numberOfCats: number): Promise<void> {
  const allCats: Cat[] = []
  for(let i = 0; i < numberOfCats; i++) {
    const res = await fetch(`${RANDOM_CAT}?json=true&width=200&height=200`, { headers: getPublicHeaders() } )
    const cat = await res.json() as Cat
    allCats.push(cat)
    
  }
  const stringifiedCopy = JSON.stringify(allCats)
  const test = JSON.parse(stringifiedCopy)
  const stringifiedCopy2 = JSON.stringify(allCats)
  const test2 = JSON.parse(stringifiedCopy2)
  
  const data = [
    ...test,
    ...test2
  ]

  const duplicates = data.map(cat => {
    cat.uniqueId = uuidv4();
    return cat
  })
  const shuffledArray = duplicates.sort((a, b) => 0.5 - Math.random());
  catsData.update(storeData => [...storeData, ...shuffledArray]);
  
}
// eslint-disable-next-line import/no-anonymous-default-export
// export default class CatsApi {



//   setToken(token) {
//     localStorage.setItem("JWT", token)
//   }

//   getToken() {
//     return localStorage.getItem("JWT")
//   }

  function getPublicHeaders () {
    return  {
      "Content-Type": "application/json"
    }
  }

//   getPrivateHeaders () {
//     return  {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${this.getToken()}`
//     }
//   }
// }

export interface Cat {
  tags: any[]
  createdAt: string
  updatedAt: string
  validated: boolean
  owner: string
  file: string
  mimetype: string
  size: number
  _id: string
  url: string
  body: any
  uniqueId: string
  correct: boolean
}

export type level= "easy" | "medium" | "hard"
export interface Difficulty {
  name: level,
  numberOfCards: number
  timeToThink: number
  numberOfErrors: number
}

export const easy: Difficulty = {
  name: 'easy',
  numberOfCards: 5,
  timeToThink: 2000,
  numberOfErrors: 10
}

export const medium: Difficulty = {
  name: 'medium',
  numberOfCards: 10,
  timeToThink: 1000,
  numberOfErrors: 7
}

export const hard: Difficulty = {
  name: 'hard',
  numberOfCards: 20,
  timeToThink: 500,
  numberOfErrors: 5
}
