import { Client, Databases } from 'appwrite'

export const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('670b98ce003610e1c9c7')

export const databases = new Databases(client)