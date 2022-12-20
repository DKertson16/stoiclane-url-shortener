import PocketBase from 'pocketbase'

export const pb = new PocketBase('http://127.0.0.1:8090')
const urlPrefix = 'http://127.0.0.1:5173/url/'

const generateRandomUrl = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }
  return randomString
}

export const shorten = async (url) => {
  try {
    const resource =  await pb.collection('urls').getFirstListItem(`full_url='${url}'`)
    return resource.shortened_url
  } catch {
    const randomUrlString = generateRandomUrl()
    const data = {
      'shortened_url': urlPrefix + randomUrlString,
      'full_url': url,
      'shortened_url_string': randomUrlString
    }
    const {shortened_url} = await pb.collection('urls').create(data)
    return shortened_url
  }
}