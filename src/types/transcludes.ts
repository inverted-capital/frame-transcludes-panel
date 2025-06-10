import { z } from 'zod'

export const contextPartSchema = z.object({
  type: z.string(),
  value: z.string()
})

export const transcludeItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  view: z.string(),
  timestamp: z.string(),
  context: contextPartSchema.array().optional()
})

export type TranscludeItem = z.infer<typeof transcludeItemSchema>

export const snapshotSchema = z.object({
  id: z.string(),
  imageUrl: z.string(),
  title: z.string(),
  timestamp: z.string(),
  description: z.string().optional()
})

export type Snapshot = z.infer<typeof snapshotSchema>

export const transcludesDataSchema = z.object({
  items: transcludeItemSchema.array(),
  snapshots: snapshotSchema.array()
})

export type TranscludesData = z.infer<typeof transcludesDataSchema>
