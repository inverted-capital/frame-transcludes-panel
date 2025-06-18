import { useArtifact } from '@artifact/client/hooks'
import type { TranscludesData } from '../types/transcludes.ts'

const useTranscludesSaver = () => {
  const artifact = useArtifact()

  return async (data: TranscludesData): Promise<void> => {
    if (!artifact) return
    artifact.files.write.json('transcludes.json', data)
    await artifact.branch.write.commit('Update transcludes data')
  }
}

export default useTranscludesSaver
