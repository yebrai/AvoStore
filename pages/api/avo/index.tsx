import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'


export default async function allAvos(request: NextApiRequest, response: NextApiResponse) {
   const db = new DB()

   request.query.id
    const allEntries = await db.getAll()
    const length = allEntries.length

    response.statusCode = 200
    response.setHeader('Content-type', 'application/json')
    response.end(JSON.stringify({length, data: allEntries}))
}