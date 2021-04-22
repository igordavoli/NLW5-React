import { useEffect } from "react"

export default function Home(props) {
  console.log(props.episodes)


  return (
    <div>

    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3333/episodes')
  const data = await res.json()
  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 8
  }
}


