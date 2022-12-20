import {Link, useParams} from 'react-router-dom'
import {pb} from '../pocketbase.js'
import {useEffect, useState} from 'react'

function ReRouter() {
  const {shortenedUrlString} = useParams()
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        return await pb.collection('urls').getFirstListItem(`shortened_url_string='${shortenedUrlString}'`)
      } catch {
        setIsError(true)
      }
    }
    fetchData().then((record) => {
      if (record?.full_url) {
        window.open(record?.full_url, '_blank')
      }
    })
  }, [])

  if (isError) {
    return (
      <>
        <p>Could not find URL for specified route, are you sure it is valid?</p>
        <Link to="/">Make a New One</Link>
      </>
    )
  }
  else {
    return <p>redirecting...</p>
  }
}

export default ReRouter