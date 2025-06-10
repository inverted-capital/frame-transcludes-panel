import { useExists, useJson } from '@artifact/client/hooks'
import {
  transcludesDataSchema,
  type TranscludesData
} from '../types/transcludes.ts'
import { useEffect, useState } from 'react'

const useTranscludesData = () => {
  const exists = useExists('transcludes.json')
  const raw = useJson('transcludes.json')
  const [data, setData] = useState<TranscludesData>()

  useEffect(() => {
    if (raw !== undefined) {
      setData(transcludesDataSchema.parse(raw))
    }
  }, [raw])

  const loading = exists === null || (exists && raw === undefined)
  const error = exists === false ? 'transcludes.json not found' : null

  return { data, loading, error }
}

export default useTranscludesData
