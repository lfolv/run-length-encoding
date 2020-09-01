class RunLengthEncoding {
  static encode(plaintext: string) {
    return plaintext.replace(/(.)\1+/g, (match: string, character: string) =>
      `${match.length}${character}`
    )
  }

  static decode(encodedText: string) {
    return encodedText.replace(/(\d+)(\D)/g, (_, times: string, character: string) =>
      character.repeat(Number(times))
    )
  }
}

export default RunLengthEncoding
