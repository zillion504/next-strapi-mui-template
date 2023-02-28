import { get } from "@/services/strapi"
import { Box, Stack, Typography } from "@mui/material"
import { type GetServerSidePropsResult, type GetServerSidePropsContext } from "next"
import { type FC } from "react"

interface DynamicPageProps {
  items: any[]
}

const DynamicPage: FC<DynamicPageProps> = ({ items }) => {
  return (
    <Stack
      spacing={2}
    >
      {
        items.map((item) => (
          <Box key={item.id}>
            <Typography variant="h3">{item.attributes.name}</Typography>
            <Typography>{item.attributes.price}</Typography>
          </Box>
        ))
      }
    </Stack>
  )
}
export default DynamicPage

export async function getServerSideProps (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<DynamicPageProps>> {
  const data = await get("/api/items")

  return {
    props: {
      items: data.data
    }
  }
}
