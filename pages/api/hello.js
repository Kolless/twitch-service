// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import videoname from './videoname.json'

export default (req, res) => {
  res.status(200).json({ name: '' })
}



/* export default (req, res) => {
  res.status(200).json(videoname)
} */