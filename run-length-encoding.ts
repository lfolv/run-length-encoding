class RunLengthEncoding {
  static encode(plaintext: string) {
    return plaintext.replace(/(.)\1+/g, (match: string, character: string) => {
      return `${match.length}${character}`
    })
  }

  static decode(encodedText: string) {
    return encodedText.replace(/(\d*)?(\D)/g, (_, length: string, character: string) => {
      const times = Number(length) || 1

      return character.repeat(times)
    })
  }
}

export default RunLengthEncoding
