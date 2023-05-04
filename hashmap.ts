type Record<T> = { key: string; value: T }

export class HashMap<T> {
  private readonly size = 16
  private readonly hashConst = 127

  private readonly table: Record<T>[][] = Array.from({ length: this.size }, () => [])

  set(key: string, value: T) {
    const hash = this.getHash(key)
    const record = this.table[hash].find(record => record.key === key)
    if (record) record.value = value
    else this.table[hash].push({ key, value })
  }

  delete(key: string) {
    const hash = this.getHash(key)
    const index = this.table[hash].findIndex(record => record.key === key)
    return this.table[hash].splice(index, 1)[0]?.value
  }

  get(key: string) {
    const hash = this.getHash(key)
    return this.table[hash].find(record => record.key === key)?.value
  }

  private getHash(key: string) {
    let hash = key.charCodeAt(0) * this.hashConst + key.charCodeAt(1)
    for (let i = 2; i < key.length; i++) hash = hash * this.hashConst + i
    return hash % this.size
  }

  *[Symbol.iterator]() {
    for (const records of this.table) {
      for (const record of records) yield record
    }
  }
}
