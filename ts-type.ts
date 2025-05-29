type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type MyExclude<T, U> = T extends U ? never : T;

type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}
