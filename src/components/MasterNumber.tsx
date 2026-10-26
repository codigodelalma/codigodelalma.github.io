import type { Reduction } from '../lib/numerology.ts'

/** Número dentro de un orbe: «33/6» con el maestro grande y la forma reducida pequeña; si no hay maestro, solo «6». */
export function MasterNumber({ result }: { result: Reduction }) {
  if (!result.master) return <>{result.value}</>
  return (
    <span className="master-num">
      {result.master}
      <small>/{result.value}</small>
    </span>
  )
}
