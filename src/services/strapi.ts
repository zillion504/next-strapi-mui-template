import axios from "axios"

const NODE_ENV = process.env.NODE_ENV

let STRAPI_PREFIX: string
if (NODE_ENV === "production") {
  STRAPI_PREFIX = "/strapi"
} else {
  /*
  This setup assumes that you have an Nginx reverse proxy set up as follows:
  Listen on port 8080
    Next.JS -       http://localhost:8080/ -> http://localhost:3000/
    Strapi  - http://localhost:8080/strapi -> http://localhost:1337
  */
  STRAPI_PREFIX = "http://localhost:8080/strapi"
}

axios.defaults.headers.common.Authorization = `Bearer ${process.env.STRAPI_API_TOKEN as string}`

export async function get (path: string): Promise<any> {
  const url = STRAPI_PREFIX + path

  const res = await axios.get(url)

  return res.data
}
