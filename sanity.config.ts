import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'constellation_mens_ensemble',
  title: 'Constellation Backend',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
