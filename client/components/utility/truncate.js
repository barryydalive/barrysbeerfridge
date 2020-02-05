const truncate = (str) => {
  let i = 150
  let curr = str[i]

  while (curr && !curr.match(/[\s.,]/)) {
    i++
    curr = str[i]
  }
  const truncatedStr = i < str.length ? str.slice(0, i) + '...' : str
  return truncatedStr
}

export default truncate
