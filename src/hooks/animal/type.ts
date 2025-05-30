export interface Animal {
  name: string
  taxonomy: {
    scientific_name: string
    [key: string]: any
  }
  characteristics: {
    [key: string]: any
  }
  [key: string]: any
}
