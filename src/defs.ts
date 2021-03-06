export type iTask = iTaskMeta & iVsCodeSchemaEntry & {
  files: string[][]
}

export type iTaskMeta = {
  source: string
  cwd: string
  index: number
}

export type iVsCodeWorkSpace = Partial<{
  "folders": Array<{
    "path": string
  }>
  "settings": iVsCodeSettings
}>

export type iVsCodeSettings = Partial<{
  "json.schemas": iVsCodeSchemaEntry[]
}>

export type iVsCodeSchemaEntry = {
  "fileMatch": string[]
  "url"?: string
  "schema"?: any
}


export type i$id = {$id: string}