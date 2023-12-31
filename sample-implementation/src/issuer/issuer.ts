
import yaml from 'yaml'
import { JWS } from '../jose'

import { base64url } from 'jose'
import { jsonToken } from '../encoding'

export type IssuerOptions = {
  issuerId: string
  issuerKeyId: string

  tokenType: string
  contentType: string

  secretKeyJwk?: any
  signer?:any
}

export type IssuanceOptions ={   
  holderKey?: string
  holderKeyId?: string, 
  claimset: string, 
  content: Buffer  
}

export const issuer = (options: IssuerOptions) => {
  // TODO: a real implementation goes here... 
  return {
    issue: async ({  claimset, content, holderKeyId }: IssuanceOptions) => {
      if (options.secretKeyJwk){
        options.signer = await JWS.signer(options.secretKeyJwk)
      }
      // TODO: support for SD stuff here...
      const claimsObject = JSON.parse(JSON.stringify(yaml.parse(claimset)))
      const detachedPayloadJws = await options.signer.sign({
        protectedHeader: {
          alg: options.secretKeyJwk.alg,
          b64: false,
          crit: ["b64"],
          kid: options.issuerKeyId,
          typ: options.tokenType,
          cty: options.contentType,
          jwt_claims: {
            cnf: {
              kid: holderKeyId
            },
            iat: Math.floor(Date.now() / 1000), // unix time stamp in seconds 
            _sd_hash_alg: 'sha-256',
            ...claimsObject
          }
        },
        payload: content
      })
      const [protectedHeader, signature] = detachedPayloadJws.split('..')
      return jsonToken.encode({
        protected: protectedHeader,
        unprotected: {},
        signature
      })
    }
  }
}

