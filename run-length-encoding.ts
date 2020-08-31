class RunLengthEncoding {
  static encode(plaintext: string) {
    return plaintext.replace(/(.)\1+/g, (match: string, character: string) => {
      return `${match.length}${character}`
    })
  }

  static decode(encodedText: string) {
    const chunks = encodedText.match(/(\d*\D)/g) || []

    return chunks.reduce((plaintext: string, chunk: string) =>
      plaintext + RunLengthEncoding.decodeChunk(chunk)
      , '')
  }

  static decodeChunk(chunk: string) {
    const times = Number(chunk.slice(0, -1)) || 1
    const character = chunk[chunk.length - 1]

    return character.repeat(times)
  }
}

export default RunLengthEncoding
