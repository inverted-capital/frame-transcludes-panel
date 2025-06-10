import type { TranscludesData } from './types/transcludes.ts'

export const defaultTranscludes: TranscludesData = {
  items: [
    {
      id: 'item-1',
      title: 'Repository View',
      view: 'repo',
      timestamp: new Date().toISOString(),
      context: [
        { type: 'repo', value: 'artifact/app' },
        { type: 'branch', value: 'main' }
      ]
    }
  ],
  snapshots: [
    {
      id: 'snapshot-1',
      imageUrl:
        'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Repository View',
      timestamp: new Date().toISOString(),
      description: 'Snapshot of the repository view showing active branches'
    }
  ]
}
