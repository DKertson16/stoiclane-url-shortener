import {useEffect, useState} from 'react'
import {shorten} from './pocketbase.js'

function App() {
  const [url, setUrl] = useState('')
  const [shortenedUrl, setShortenedUrl] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (url.length < 8) return
    if (!url.includes('http://') && !url.includes('https://')) {
      setError('URL must start with "http://" or "https://"')
    } else {
      setError('')
    }
  }, [url])

  const onSubmit = async () => {
    setShortenedUrl(await shorten(url))
  }

  return (
    <>
      <div>
        <p>Shorten URL</p>
      </div>
      <div>
        <input type="text" name="url" value={url} onChange={(e) => setUrl(e.target.value)} />
        <button disabled={error} type="submit" onClick={() => onSubmit()}>submit</button>
        <a href={shortenedUrl}><p>{shortenedUrl}</p></a>
      </div>
      <div style={{color: 'red'}}>
        <p>{error}</p>
      </div>
    </>
  )
}

export default App;

