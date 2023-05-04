import { HashMap } from './hashmap.ts'

const map = new HashMap<number>()

map.set('Dave', 40)
map.set('Ivan', 14)

console.log('Dave:', map.get('Dave'))

map.set('Dave', 33)

console.log('Dave:', map.get('Dave'))

map.delete('Dave')

console.log('Dave:', map.get('Dave'))

map.set('Anton', 20)
map.set('Elon', 100)

for (const { key, value } of map) {
  console.log(`${key}:`, value)
}
