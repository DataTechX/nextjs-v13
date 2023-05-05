import { NextApiRequest, NextApiResponse } from 'next'

export default function GET(req: Request | any, res: Response) {
  res.send('Hello World')
  return new Response('Hello World')
}

export function POST(req: Request | any, res: Response) {
  const body = req.body
  console.log(body)

  return new Response('Hello World')
}