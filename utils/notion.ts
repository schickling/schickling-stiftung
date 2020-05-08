export function toUUID(str: string): string {
  if (str.length === 36 && str.match(/-/)!.length === 4) {
    return str
  }

  try {
    const str1 = stringSplice(str, '-', 8)
    const str2 = stringSplice(str1, '-', 13)
    const str3 = stringSplice(str2, '-', 18)
    return stringSplice(str3, '-', 23)
  } catch {
    throw new Error(`No valid UUID value" ${str}`)
  }
  return str
  // 'fdda765f-fc57-5604-a269-52a7df8164ec'
}

function stringSplice(str1: string, str2: string, index: number): string {
  return str1.slice(0, index) + str2 + str1.slice(index)
}
