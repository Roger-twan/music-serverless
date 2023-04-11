import CryptoJS from 'crypto-js'
import RSA from '../lib/rsa'

type NetEaseRequestCrypto = {
  params: string
  encSecKey: string,
}

const generateRandomString = (length: number): string => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      result += characters.charAt(randomIndex)
  }
  return result
}

const aesEncrypt = (text: string, key: string): string => {
  const message = CryptoJS.enc.Utf8.parse(text)
  const encryptKey = CryptoJS.enc.Utf8.parse(key)
  const iv = CryptoJS.enc.Utf8.parse('0102030405060708')
  const encrypted = CryptoJS.AES.encrypt(message, encryptKey, { iv, mode: CryptoJS.mode.CBC })
  return encrypted.toString()
}

const rsaEncrypt = (text: string): string => {
  const publicKey: string = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'
  RSA.setMaxDigits(131)
  const keyPair = new RSA.RSAKeyPair('010001', '', publicKey)
  return RSA.encryptedString(keyPair, text)
}

const netEaseCrypto = (params: Object): NetEaseRequestCrypto => {
  const presetKey: string = '0CoJUm6Qyw8W8jud'
  const secretKey: string = generateRandomString(16)
  const aesEncrypted: string = aesEncrypt(JSON.stringify(params), presetKey)
  const result = {
    params: aesEncrypt(aesEncrypted, secretKey),
    encSecKey: rsaEncrypt(secretKey)
  }

  return result
}

export default (params: Object): string => {
  const encryptedParams = netEaseCrypto(params)
  return new URLSearchParams(encryptedParams).toString()
}
