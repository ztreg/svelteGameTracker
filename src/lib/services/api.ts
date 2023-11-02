import { catsData } from "$lib/stores/store"

const ROOT_URL = 'https://cataas.com/api/'
// const COUNTRIES_URL = `${ROOT_URL}/api/v1/countries`
// const TEST_URL = `${ROOT_URL}/api/v1/`
const ALL_CATS_URL = `${ROOT_URL}/cats`
const CAT_URL = `${ROOT_URL}cat`
const RANDOM_CAT = 'https://cataas.com/cat'
const LOGINURL = `${ROOT_URL}/api/v1/auth/api-token-auth/`
const MEURL = `${ROOT_URL}/api/v1/me/`

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
}



// export function fetchCats(limit: number): void {
//     fetch(`${ALL_CATS_URL}?limit=${limit}&skip=0`).then(res => {
//         console.log(res)
//         console.log(res.json())
//         apiData.set(res.json());
//     })
//   }

export async function fetchNmrOfCats(numberOfCats: number): Promise<void> {

  for(let i = 0; i < numberOfCats; i++) {
    const res = await fetch(`${RANDOM_CAT}?json=true&width=150&height=150`, { headers: getPublicHeaders() } )
    const cat = await res.json() as Cat  
    catsData.update(storeData => [...storeData, cat]);
  }

  
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