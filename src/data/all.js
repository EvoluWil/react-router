import {femaleProducts} from './female'
import {maleProducts} from './male'

export const allProducts = [...femaleProducts, ...maleProducts].sort((productA, productB) => productA.image > productB.image ? -1 : 1)