# Transparency Token 

## Presented Token 

### Protected Header

~~~ json
{
  "alg": "ES384",
  "b64": false,
  "crit": [
    "b64"
  ],
  "kid": "https://subject.example/subjects/6320cb92-fffe-4538-8c82-2ad3b6e7fbf8#L1jl6Z6C99DoKrZglJo_zjW28WvjxYRe8iYl49plwHE",
  "jwt_claims": {
    "_sd_hash_alg": "sha-256",
    "_sd_hash": "74nSXj3MiQOe3PxHhvTDa0zSVn1gkNlqVAE5-rqfJRA",
    "iat": 1700518433,
    "aud": "https://verifier.example/transactions/b9a87c99-1fc3-4292-a324-756d680fa4cf",
    "nonce": "860fc8e5-1ed9-4f25-92ad-964c4197df15"
  }
}
~~~

### Unprotected Header

~~~ json
{
  "issued_token": "eyJhbGciOiJFUzM4NCIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il0sImtpZCI6Imh0dHBzOi8vaXNzdWVyLmV4YW1wbGUvaXNzdWVycy80ZmQ5NGY2My00ZThkLTRiYTAtOGIwOC00OTZjNjA4N2FjZjAjNFVSeVNMaUpTRjNNdnhqWmVWQzVIZkZScy1EVk5XbEp6Q09sbk03UFJXWSIsInR5cCI6ImFwcGxpY2F0aW9uL2Nvb2wram9zZSIsImN0eSI6InRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLTgiLCJqd3RfY2xhaW1zIjp7ImNuZiI6eyJraWQiOiJodHRwczovL3N1YmplY3QuZXhhbXBsZS9zdWJqZWN0cy82MzIwY2I5Mi1mZmZlLTQ1MzgtOGM4Mi0yYWQzYjZlN2ZiZjgjTDFqbDZaNkM5OURvS3JaZ2xKb196alcyOFd2anhZUmU4aVlsNDlwbHdIRSJ9LCJpYXQiOjE3MDA1MTg0MzMsIl9zZF9oYXNoX2FsZyI6InNoYS0yNTYiLCJpc3MiOiJodHRwczovL2lzc3Vlci5leGFtcGxlL2lzc3VlcnMvNGZkOTRmNjMtNGU4ZC00YmEwLThiMDgtNDk2YzYwODdhY2YwIiwic3ViIjoiaHR0cHM6Ly9zdWJqZWN0LmV4YW1wbGUvc3ViamVjdHMvNjMyMGNiOTItZmZmZS00NTM4LThjODItMmFkM2I2ZTdmYmY4In19..R5UAIeJmAA48YbTHGCfu8QEyDNdbRKOs0cjLLJUIUmxSd0BzQAfxxq1GILuYOGnJfMZbKg8pgLRhK9NFi67MivTjvY9CYvZergBGyLmK7lK_6hwDETZn2uQ6_4J05b7v~e30",
  "issued_disclosures": [],
  "counter_signatures": [
    "eyJhbGciOiJFUzM4NCIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il0sImtpZCI6Imh0dHBzOi8vZW5kb3JzZXIuZXhhbXBsZS9hdWRpdG9yLzBhZWViZjJjLWU2ODUtNDExMS05M2Y1LTIzNTJhMWE5YmRmMyNhTTFERjI5MHU1RDhRckhWZUw4ZzdnWGtNWjE1WFlmcS16QXpiZUpQTDFJIiwidHlwIjoiYXBwbGljYXRpb24vY29vbC1jb3VudGVyc2lnbitqb3NlIiwiand0X2NsYWltcyI6eyJpYXQiOjE3MDA1MTg0MzMsIl9zZF9oYXNoX2FsZyI6InNoYS0yNTYiLCJpc3MiOiJodHRwczovL2VuZG9yc2VyLmV4YW1wbGUvYXVkaXRvci8wYWVlYmYyYy1lNjg1LTQxMTEtOTNmNS0yMzUyYTFhOWJkZjMiLCJzdWIiOiJodHRwczovL2VuZG9yc2VyLmV4YW1wbGUvYXVkaXRvci8wYWVlYmYyYy1lNjg1LTQxMTEtOTNmNS0yMzUyYTFhOWJkZjMvcmVjZWlwdHMvMjY3NDg3NDItMjVkNC00ZGVhLThiYjgtOWU4MTk3ZmQzNDcxIn19..rM3Fo5FKaLGvx3LX69KOmjVzBLa5TzYXTndCgcc2JFoNp4EONXcH_CPsVFgW8YKgtuUJQSeQuUtKz4snqmkATm9xJq-TV-2j82_lg5O5jRRtXJGHe9R9OKnNmKulYu2j"
  ]
}
~~~

### JSON

~~~ text
{
  "protected": "eyJhbGciOiJFUzM4NCIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il0sImtpZCI6Imh0dHBzOi8vc3ViamVjdC5leGFtcGxlL3N1YmplY3RzLzYzMjBjYjkyLWZmZmUtNDUzOC04YzgyLTJhZDNiNmU3ZmJmOCNMMWpsNlo2Qzk5RG9LclpnbEpvX3pqVzI4V3ZqeFlSZThpWWw0OXBsd0hFIiwiand0X2NsYWltcyI6eyJfc2RfaGFzaF9hbGciOiJzaGEtMjU2IiwiX3NkX2hhc2giOiI3NG5TWGozTWlRT2UzUHhIaHZURGEwelNWbjFna05scVZBRTUtcnFmSlJBIiwiaWF0IjoxNzAwNTE4NDMzLCJhdWQiOiJodHRwczovL3ZlcmlmaWVyLmV4YW1wbGUvdHJhbnNhY3Rpb25zL2I5YTg3Yzk5LTFmYzMtNDI5Mi1hMzI0LTc1NmQ2ODBmYTRjZiIsIm5vbmNlIjoiODYwZmM4ZTUtMWVkOS00ZjI1LTkyYWQtOTY0YzQxOTdkZjE1In19",
  "unprotected": {
    "issued_token": "eyJhbGciOiJFUzM4NCIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il0sImtpZCI6Imh0dHBzOi8vaXNzdWVyLmV4YW1wbGUvaXNzdWVycy80ZmQ5NGY2My00ZThkLTRiYTAtOGIwOC00OTZjNjA4N2FjZjAjNFVSeVNMaUpTRjNNdnhqWmVWQzVIZkZScy1EVk5XbEp6Q09sbk03UFJXWSIsInR5cCI6ImFwcGxpY2F0aW9uL2Nvb2wram9zZSIsImN0eSI6InRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLTgiLCJqd3RfY2xhaW1zIjp7ImNuZiI6eyJraWQiOiJodHRwczovL3N1YmplY3QuZXhhbXBsZS9zdWJqZWN0cy82MzIwY2I5Mi1mZmZlLTQ1MzgtOGM4Mi0yYWQzYjZlN2ZiZjgjTDFqbDZaNkM5OURvS3JaZ2xKb196alcyOFd2anhZUmU4aVlsNDlwbHdIRSJ9LCJpYXQiOjE3MDA1MTg0MzMsIl9zZF9oYXNoX2FsZyI6InNoYS0yNTYiLCJpc3MiOiJodHRwczovL2lzc3Vlci5leGFtcGxlL2lzc3VlcnMvNGZkOTRmNjMtNGU4ZC00YmEwLThiMDgtNDk2YzYwODdhY2YwIiwic3ViIjoiaHR0cHM6Ly9zdWJqZWN0LmV4YW1wbGUvc3ViamVjdHMvNjMyMGNiOTItZmZmZS00NTM4LThjODItMmFkM2I2ZTdmYmY4In19..R5UAIeJmAA48YbTHGCfu8QEyDNdbRKOs0cjLLJUIUmxSd0BzQAfxxq1GILuYOGnJfMZbKg8pgLRhK9NFi67MivTjvY9CYvZergBGyLmK7lK_6hwDETZn2uQ6_4J05b7v~e30",
    "issued_disclosures": [],
    "counter_signatures": [
      "eyJhbGciOiJFUzM4NCIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il0sImtpZCI6Imh0dHBzOi8vZW5kb3JzZXIuZXhhbXBsZS9hdWRpdG9yLzBhZWViZjJjLWU2ODUtNDExMS05M2Y1LTIzNTJhMWE5YmRmMyNhTTFERjI5MHU1RDhRckhWZUw4ZzdnWGtNWjE1WFlmcS16QXpiZUpQTDFJIiwidHlwIjoiYXBwbGljYXRpb24vY29vbC1jb3VudGVyc2lnbitqb3NlIiwiand0X2NsYWltcyI6eyJpYXQiOjE3MDA1MTg0MzMsIl9zZF9oYXNoX2FsZyI6InNoYS0yNTYiLCJpc3MiOiJodHRwczovL2VuZG9yc2VyLmV4YW1wbGUvYXVkaXRvci8wYWVlYmYyYy1lNjg1LTQxMTEtOTNmNS0yMzUyYTFhOWJkZjMiLCJzdWIiOiJodHRwczovL2VuZG9yc2VyLmV4YW1wbGUvYXVkaXRvci8wYWVlYmYyYy1lNjg1LTQxMTEtOTNmNS0yMzUyYTFhOWJkZjMvcmVjZWlwdHMvMjY3NDg3NDItMjVkNC00ZGVhLThiYjgtOWU4MTk3ZmQzNDcxIn19..rM3Fo5FKaLGvx3LX69KOmjVzBLa5TzYXTndCgcc2JFoNp4EONXcH_CPsVFgW8YKgtuUJQSeQuUtKz4snqmkATm9xJq-TV-2j82_lg5O5jRRtXJGHe9R9OKnNmKulYu2j"
    ]
  },
  "payload": null,
  "signature": "m017kwRld7-P_4XILEba-33DumSuAPXayngVOKHoKnulxE-Hwzs79P7hsXKv-n_SCYQnH3FEz1S2CD9AIefn9kQ3zrKzgdD_NIcgFqRUyrV9TaYE9HCGDg2dgS9EWg_m"
}
~~~

### Compact

~~~ text
eyJhbGciOiJFUzM4NCIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il0sImtpZCI6Imh0dHBzOi8vc3ViamVjdC5leGFtcGxlL3N1YmplY3RzLzYzMjBjYjkyLWZmZmUtNDUzOC04YzgyLTJhZDNiNmU3ZmJmOCNMMWpsNlo2Qzk5RG9LclpnbEpvX3pqVzI4V3ZqeFlSZThpWWw0OXBsd0hFIiwiand0X2NsYWltcyI6eyJfc2RfaGFzaF9hbGciOiJzaGEtMjU2IiwiX3NkX2hhc2giOiI3NG5TWGozTWlRT2UzUHhIaHZURGEwelNWbjFna05scVZBRTUtcnFmSlJBIiwiaWF0IjoxNzAwNTE4NDMzLCJhdWQiOiJodHRwczovL3ZlcmlmaWVyLmV4YW1wbGUvdHJhbnNhY3Rpb25zL2I5YTg3Yzk5LTFmYzMtNDI5Mi1hMzI0LTc1NmQ2ODBmYTRjZiIsIm5vbmNlIjoiODYwZmM4ZTUtMWVkOS00ZjI1LTkyYWQtOTY0YzQxOTdkZjE1In19..m017kwRld7-P_4XILEba-33DumSuAPXayngVOKHoKnulxE-Hwzs79P7hsXKv-n_SCYQnH3FEz1S2CD9AIefn9kQ3zrKzgdD_NIcgFqRUyrV9TaYE9HCGDg2dgS9EWg_m~eyJpc3N1ZWRfdG9rZW4iOiJleUpoYkdjaU9pSkZVek00TkNJc0ltSTJOQ0k2Wm1Gc2MyVXNJbU55YVhRaU9sc2lZalkwSWwwc0ltdHBaQ0k2SW1oMGRIQnpPaTh2YVhOemRXVnlMbVY0WVcxd2JHVXZhWE56ZFdWeWN5ODBabVE1TkdZMk15MDBaVGhrTFRSaVlUQXRPR0l3T0MwME9UWmpOakE0TjJGalpqQWpORlZTZVZOTWFVcFRSak5OZG5ocVdtVldRelZJWmtaU2N5MUVWazVYYkVwNlEwOXNiazAzVUZKWFdTSXNJblI1Y0NJNkltRndjR3hwWTJGMGFXOXVMMk52YjJ3cmFtOXpaU0lzSW1OMGVTSTZJblJsZUhRdmNHeGhhVzQ3SUdOb1lYSnpaWFE5ZFhSbUxUZ2lMQ0pxZDNSZlkyeGhhVzF6SWpwN0ltTnVaaUk2ZXlKcmFXUWlPaUpvZEhSd2N6b3ZMM04xWW1wbFkzUXVaWGhoYlhCc1pTOXpkV0pxWldOMGN5ODJNekl3WTJJNU1pMW1abVpsTFRRMU16Z3RPR000TWkweVlXUXpZalpsTjJaaVpqZ2pUREZxYkRaYU5rTTVPVVJ2UzNKYVoyeEtiMTk2YWxjeU9GZDJhbmhaVW1VNGFWbHNORGx3YkhkSVJTSjlMQ0pwWVhRaU9qRTNNREExTVRnME16TXNJbDl6WkY5b1lYTm9YMkZzWnlJNkluTm9ZUzB5TlRZaUxDSnBjM01pT2lKb2RIUndjem92TDJsemMzVmxjaTVsZUdGdGNHeGxMMmx6YzNWbGNuTXZOR1prT1RSbU5qTXROR1U0WkMwMFltRXdMVGhpTURndE5EazJZell3T0RkaFkyWXdJaXdpYzNWaUlqb2lhSFIwY0hNNkx5OXpkV0pxWldOMExtVjRZVzF3YkdVdmMzVmlhbVZqZEhNdk5qTXlNR05pT1RJdFptWm1aUzAwTlRNNExUaGpPREl0TW1Ga00ySTJaVGRtWW1ZNEluMTkuLlI1VUFJZUptQUE0OFliVEhHQ2Z1OFFFeUROZGJSS09zMGNqTExKVUlVbXhTZDBCelFBZnh4cTFHSUx1WU9HbkpmTVpiS2c4cGdMUmhLOU5GaTY3TWl2VGp2WTlDWXZaZXJnQkd5TG1LN2xLXzZod0RFVFpuMnVRNl80SjA1Yjd2fmUzMCIsImlzc3VlZF9kaXNjbG9zdXJlcyI6W10sImNvdW50ZXJfc2lnbmF0dXJlcyI6WyJleUpoYkdjaU9pSkZVek00TkNJc0ltSTJOQ0k2Wm1Gc2MyVXNJbU55YVhRaU9sc2lZalkwSWwwc0ltdHBaQ0k2SW1oMGRIQnpPaTh2Wlc1a2IzSnpaWEl1WlhoaGJYQnNaUzloZFdScGRHOXlMekJoWldWaVpqSmpMV1UyT0RVdE5ERXhNUzA1TTJZMUxUSXpOVEpoTVdFNVltUm1NeU5oVFRGRVJqSTVNSFUxUkRoUmNraFdaVXc0WnpkbldHdE5XakUxV0ZsbWNTMTZRWHBpWlVwUVRERkpJaXdpZEhsd0lqb2lZWEJ3YkdsallYUnBiMjR2WTI5dmJDMWpiM1Z1ZEdWeWMybG5iaXRxYjNObElpd2lhbmQwWDJOc1lXbHRjeUk2ZXlKcFlYUWlPakUzTURBMU1UZzBNek1zSWw5elpGOW9ZWE5vWDJGc1p5STZJbk5vWVMweU5UWWlMQ0pwYzNNaU9pSm9kSFJ3Y3pvdkwyVnVaRzl5YzJWeUxtVjRZVzF3YkdVdllYVmthWFJ2Y2k4d1lXVmxZbVl5WXkxbE5qZzFMVFF4TVRFdE9UTm1OUzB5TXpVeVlURmhPV0prWmpNaUxDSnpkV0lpT2lKb2RIUndjem92TDJWdVpHOXljMlZ5TG1WNFlXMXdiR1V2WVhWa2FYUnZjaTh3WVdWbFltWXlZeTFsTmpnMUxUUXhNVEV0T1RObU5TMHlNelV5WVRGaE9XSmtaak12Y21WalpXbHdkSE12TWpZM05EZzNOREl0TWpWa05DMDBaR1ZoTFRoaVlqZ3RPV1U0TVRrM1ptUXpORGN4SW4xOS4uck0zRm81RkthTEd2eDNMWDY5S09talZ6QkxhNVR6WVhUbmRDZ2NjMkpGb05wNEVPTlhjSF9DUHNWRmdXOFlLZ3R1VUpRU2VRdVV0S3o0c25xbWtBVG05eEpxLVRWLTJqODJfbGc1TzVqUlJ0WEpHSGU5UjlPS25ObUt1bFl1MmoiXX0
~~~

## Issued Token 

### Protected Header

~~~ json
{
  "alg": "ES384",
  "b64": false,
  "crit": [
    "b64"
  ],
  "kid": "https://issuer.example/issuers/4fd94f63-4e8d-4ba0-8b08-496c6087acf0#4URySLiJSF3MvxjZeVC5HfFRs-DVNWlJzCOlnM7PRWY",
  "typ": "application/cool+jose",
  "cty": "text/plain; charset=utf-8",
  "jwt_claims": {
    "cnf": {
      "kid": "https://subject.example/subjects/6320cb92-fffe-4538-8c82-2ad3b6e7fbf8#L1jl6Z6C99DoKrZglJo_zjW28WvjxYRe8iYl49plwHE"
    },
    "iat": 1700518433,
    "_sd_hash_alg": "sha-256",
    "iss": "https://issuer.example/issuers/4fd94f63-4e8d-4ba0-8b08-496c6087acf0",
    "sub": "https://subject.example/subjects/6320cb92-fffe-4538-8c82-2ad3b6e7fbf8"
  }
}
~~~

### Unprotected Header

~~~ json
{}
~~~

### JSON

~~~ text
{
  "protected": "eyJhbGciOiJFUzM4NCIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il0sImtpZCI6Imh0dHBzOi8vaXNzdWVyLmV4YW1wbGUvaXNzdWVycy80ZmQ5NGY2My00ZThkLTRiYTAtOGIwOC00OTZjNjA4N2FjZjAjNFVSeVNMaUpTRjNNdnhqWmVWQzVIZkZScy1EVk5XbEp6Q09sbk03UFJXWSIsInR5cCI6ImFwcGxpY2F0aW9uL2Nvb2wram9zZSIsImN0eSI6InRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLTgiLCJqd3RfY2xhaW1zIjp7ImNuZiI6eyJraWQiOiJodHRwczovL3N1YmplY3QuZXhhbXBsZS9zdWJqZWN0cy82MzIwY2I5Mi1mZmZlLTQ1MzgtOGM4Mi0yYWQzYjZlN2ZiZjgjTDFqbDZaNkM5OURvS3JaZ2xKb196alcyOFd2anhZUmU4aVlsNDlwbHdIRSJ9LCJpYXQiOjE3MDA1MTg0MzMsIl9zZF9oYXNoX2FsZyI6InNoYS0yNTYiLCJpc3MiOiJodHRwczovL2lzc3Vlci5leGFtcGxlL2lzc3VlcnMvNGZkOTRmNjMtNGU4ZC00YmEwLThiMDgtNDk2YzYwODdhY2YwIiwic3ViIjoiaHR0cHM6Ly9zdWJqZWN0LmV4YW1wbGUvc3ViamVjdHMvNjMyMGNiOTItZmZmZS00NTM4LThjODItMmFkM2I2ZTdmYmY4In19",
  "unprotected": {},
  "payload": null,
  "signature": "R5UAIeJmAA48YbTHGCfu8QEyDNdbRKOs0cjLLJUIUmxSd0BzQAfxxq1GILuYOGnJfMZbKg8pgLRhK9NFi67MivTjvY9CYvZergBGyLmK7lK_6hwDETZn2uQ6_4J05b7v"
}
~~~

### Compact

~~~ text
eyJhbGciOiJFUzM4NCIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il0sImtpZCI6Imh0dHBzOi8vc3ViamVjdC5leGFtcGxlL3N1YmplY3RzLzYzMjBjYjkyLWZmZmUtNDUzOC04YzgyLTJhZDNiNmU3ZmJmOCNMMWpsNlo2Qzk5RG9LclpnbEpvX3pqVzI4V3ZqeFlSZThpWWw0OXBsd0hFIiwiand0X2NsYWltcyI6eyJfc2RfaGFzaF9hbGciOiJzaGEtMjU2IiwiX3NkX2hhc2giOiI3NG5TWGozTWlRT2UzUHhIaHZURGEwelNWbjFna05scVZBRTUtcnFmSlJBIiwiaWF0IjoxNzAwNTE4NDMzLCJhdWQiOiJodHRwczovL3ZlcmlmaWVyLmV4YW1wbGUvdHJhbnNhY3Rpb25zL2I5YTg3Yzk5LTFmYzMtNDI5Mi1hMzI0LTc1NmQ2ODBmYTRjZiIsIm5vbmNlIjoiODYwZmM4ZTUtMWVkOS00ZjI1LTkyYWQtOTY0YzQxOTdkZjE1In19..m017kwRld7-P_4XILEba-33DumSuAPXayngVOKHoKnulxE-Hwzs79P7hsXKv-n_SCYQnH3FEz1S2CD9AIefn9kQ3zrKzgdD_NIcgFqRUyrV9TaYE9HCGDg2dgS9EWg_m~eyJpc3N1ZWRfdG9rZW4iOiJleUpoYkdjaU9pSkZVek00TkNJc0ltSTJOQ0k2Wm1Gc2MyVXNJbU55YVhRaU9sc2lZalkwSWwwc0ltdHBaQ0k2SW1oMGRIQnpPaTh2YVhOemRXVnlMbVY0WVcxd2JHVXZhWE56ZFdWeWN5ODBabVE1TkdZMk15MDBaVGhrTFRSaVlUQXRPR0l3T0MwME9UWmpOakE0TjJGalpqQWpORlZTZVZOTWFVcFRSak5OZG5ocVdtVldRelZJWmtaU2N5MUVWazVYYkVwNlEwOXNiazAzVUZKWFdTSXNJblI1Y0NJNkltRndjR3hwWTJGMGFXOXVMMk52YjJ3cmFtOXpaU0lzSW1OMGVTSTZJblJsZUhRdmNHeGhhVzQ3SUdOb1lYSnpaWFE5ZFhSbUxUZ2lMQ0pxZDNSZlkyeGhhVzF6SWpwN0ltTnVaaUk2ZXlKcmFXUWlPaUpvZEhSd2N6b3ZMM04xWW1wbFkzUXVaWGhoYlhCc1pTOXpkV0pxWldOMGN5ODJNekl3WTJJNU1pMW1abVpsTFRRMU16Z3RPR000TWkweVlXUXpZalpsTjJaaVpqZ2pUREZxYkRaYU5rTTVPVVJ2UzNKYVoyeEtiMTk2YWxjeU9GZDJhbmhaVW1VNGFWbHNORGx3YkhkSVJTSjlMQ0pwWVhRaU9qRTNNREExTVRnME16TXNJbDl6WkY5b1lYTm9YMkZzWnlJNkluTm9ZUzB5TlRZaUxDSnBjM01pT2lKb2RIUndjem92TDJsemMzVmxjaTVsZUdGdGNHeGxMMmx6YzNWbGNuTXZOR1prT1RSbU5qTXROR1U0WkMwMFltRXdMVGhpTURndE5EazJZell3T0RkaFkyWXdJaXdpYzNWaUlqb2lhSFIwY0hNNkx5OXpkV0pxWldOMExtVjRZVzF3YkdVdmMzVmlhbVZqZEhNdk5qTXlNR05pT1RJdFptWm1aUzAwTlRNNExUaGpPREl0TW1Ga00ySTJaVGRtWW1ZNEluMTkuLlI1VUFJZUptQUE0OFliVEhHQ2Z1OFFFeUROZGJSS09zMGNqTExKVUlVbXhTZDBCelFBZnh4cTFHSUx1WU9HbkpmTVpiS2c4cGdMUmhLOU5GaTY3TWl2VGp2WTlDWXZaZXJnQkd5TG1LN2xLXzZod0RFVFpuMnVRNl80SjA1Yjd2fmUzMCIsImlzc3VlZF9kaXNjbG9zdXJlcyI6W10sImNvdW50ZXJfc2lnbmF0dXJlcyI6WyJleUpoYkdjaU9pSkZVek00TkNJc0ltSTJOQ0k2Wm1Gc2MyVXNJbU55YVhRaU9sc2lZalkwSWwwc0ltdHBaQ0k2SW1oMGRIQnpPaTh2Wlc1a2IzSnpaWEl1WlhoaGJYQnNaUzloZFdScGRHOXlMekJoWldWaVpqSmpMV1UyT0RVdE5ERXhNUzA1TTJZMUxUSXpOVEpoTVdFNVltUm1NeU5oVFRGRVJqSTVNSFUxUkRoUmNraFdaVXc0WnpkbldHdE5XakUxV0ZsbWNTMTZRWHBpWlVwUVRERkpJaXdpZEhsd0lqb2lZWEJ3YkdsallYUnBiMjR2WTI5dmJDMWpiM1Z1ZEdWeWMybG5iaXRxYjNObElpd2lhbmQwWDJOc1lXbHRjeUk2ZXlKcFlYUWlPakUzTURBMU1UZzBNek1zSWw5elpGOW9ZWE5vWDJGc1p5STZJbk5vWVMweU5UWWlMQ0pwYzNNaU9pSm9kSFJ3Y3pvdkwyVnVaRzl5YzJWeUxtVjRZVzF3YkdVdllYVmthWFJ2Y2k4d1lXVmxZbVl5WXkxbE5qZzFMVFF4TVRFdE9UTm1OUzB5TXpVeVlURmhPV0prWmpNaUxDSnpkV0lpT2lKb2RIUndjem92TDJWdVpHOXljMlZ5TG1WNFlXMXdiR1V2WVhWa2FYUnZjaTh3WVdWbFltWXlZeTFsTmpnMUxUUXhNVEV0T1RObU5TMHlNelV5WVRGaE9XSmtaak12Y21WalpXbHdkSE12TWpZM05EZzNOREl0TWpWa05DMDBaR1ZoTFRoaVlqZ3RPV1U0TVRrM1ptUXpORGN4SW4xOS4uck0zRm81RkthTEd2eDNMWDY5S09talZ6QkxhNVR6WVhUbmRDZ2NjMkpGb05wNEVPTlhjSF9DUHNWRmdXOFlLZ3R1VUpRU2VRdVV0S3o0c25xbWtBVG05eEpxLVRWLTJqODJfbGc1TzVqUlJ0WEpHSGU5UjlPS25ObUt1bFl1MmoiXX0
~~~