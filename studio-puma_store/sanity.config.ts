import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structureTool} from 'sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'puma_store',

  projectId: 'k8177nxd',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), structureTool()],

  schema: {
    types: schemaTypes,
  },
})
