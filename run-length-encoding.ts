class RunLengthEncoding {
  static encode(plaintext: string) {
    return plaintext.replace(/(.)\1+/g, (match: string, character: string) => {
      return `${match.length}${character}`
    })
  }

  static decode(encodedText: string) {
    return encodedText.replace(/(\d+)(\D)/g, (_, times: string, character: string) => {
      return character.repeat(Number(times))
    })
  }
}

export default RunLengthEncoding
