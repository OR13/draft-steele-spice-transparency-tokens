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
  "kid": "https://subject.example/subjects/6320cb92-fffe-4538-8c82-2ad3b6e7fbf8#ZOc9hrQkt6brdbIjrfqsC-DSfJtDhmLhlA40PVVSqg0",
  "jwt_claims": {
    "_sd_hash_alg": "sha-256",
    "_sd_hash": "3859Y9VWqR_B5dd7OjbxIyGJBu3ckSgmKOnpnzDQ3lk",
    "iat": 1700763326,
    "aud": "https://verifier.example/transactions/b9a87c99-1fc3-4292-a324-756d680fa4cf",
    "nonce": "860fc8e5-1ed9-4f25-92ad-964c4197df15"
  }
}
~~~

### Unprotected Header

~~~ json
{
  "issued_token": "eyJhbGciOiJFUzM4NCIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il0sImtpZCI6Imh0dHBzOi8vaXNzdWVyLmV4YW1wbGUvaXNzdWVycy80ZmQ5NGY2My00ZThkLTRiYTAtOGIwOC00OTZjNjA4N2FjZjAjZWc4dXRNWDY1MG85T1BVM2xmdG5GeEVCWThlTm1hby1Gd2pkdlhjU0wzMCIsInR5cCI6ImFwcGxpY2F0aW9uL2Nvb2wram9zZSIsImN0eSI6InRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLTgiLCJqd3RfY2xhaW1zIjp7ImNuZiI6eyJraWQiOiJodHRwczovL3N1YmplY3QuZXhhbXBsZS9zdWJqZWN0cy82MzIwY2I5Mi1mZmZlLTQ1MzgtOGM4Mi0yYWQzYjZlN2ZiZjgjWk9jOWhyUWt0NmJyZGJJanJmcXNDLURTZkp0RGhtTGhsQTQwUFZWU3FnMCJ9LCJpYXQiOjE3MDA3NjMzMjYsIl9zZF9oYXNoX2FsZyI6InNoYS0yNTYiLCJpc3MiOiJodHRwczovL2lzc3Vlci5leGFtcGxlL2lzc3VlcnMvNGZkOTRmNjMtNGU4ZC00YmEwLThiMDgtNDk2YzYwODdhY2YwIiwic3ViIjoiaHR0cHM6Ly9zdWJqZWN0LmV4YW1wbGUvc3ViamVjdHMvNjMyMGNiOTItZmZmZS00NTM4LThjODItMmFkM2I2ZTdmYmY4In19..PHrNXJHOjP2Ufe_qhxM4jbkdm19KHQOa8vX6nQM2kScsW4NuZs3PT15f6qPPnRf9nlS4ylDQv1G9Og3g-f-IsrZDHn2T58IQvQSH9tWtyEWJpRW604ZYljOU5MhtugnW~e30",
  "issued_disclosures": []
}
~~~

### JSON

~~~ text
{
  "protected": "eyJhbGciOiJFUzM4NCIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il0sImtpZCI6Imh0dHBzOi8vc3ViamVjdC5leGFtcGxlL3N1YmplY3RzLzYzMjBjYjkyLWZmZmUtNDUzOC04YzgyLTJhZDNiNmU3ZmJmOCNaT2M5aHJRa3Q2YnJkYklqcmZxc0MtRFNmSnREaG1MaGxBNDBQVlZTcWcwIiwiand0X2NsYWltcyI6eyJfc2RfaGFzaF9hbGciOiJzaGEtMjU2IiwiX3NkX2hhc2giOiIzODU5WTlWV3FSX0I1ZGQ3T2pieEl5R0pCdTNja1NnbUtPbnBuekRRM2xrIiwiaWF0IjoxNzAwNzYzMzI2LCJhdWQiOiJodHRwczovL3ZlcmlmaWVyLmV4YW1wbGUvdHJhbnNhY3Rpb25zL2I5YTg3Yzk5LTFmYzMtNDI5Mi1hMzI0LTc1NmQ2ODBmYTRjZiIsIm5vbmNlIjoiODYwZmM4ZTUtMWVkOS00ZjI1LTkyYWQtOTY0YzQxOTdkZjE1In19",
  "unprotected": {
    "issued_token": "eyJhbGciOiJFUzM4NCIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il0sImtpZCI6Imh0dHBzOi8vaXNzdWVyLmV4YW1wbGUvaXNzdWVycy80ZmQ5NGY2My00ZThkLTRiYTAtOGIwOC00OTZjNjA4N2FjZjAjZWc4dXRNWDY1MG85T1BVM2xmdG5GeEVCWThlTm1hby1Gd2pkdlhjU0wzMCIsInR5cCI6ImFwcGxpY2F0aW9uL2Nvb2wram9zZSIsImN0eSI6InRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLTgiLCJqd3RfY2xhaW1zIjp7ImNuZiI6eyJraWQiOiJodHRwczovL3N1YmplY3QuZXhhbXBsZS9zdWJqZWN0cy82MzIwY2I5Mi1mZmZlLTQ1MzgtOGM4Mi0yYWQzYjZlN2ZiZjgjWk9jOWhyUWt0NmJyZGJJanJmcXNDLURTZkp0RGhtTGhsQTQwUFZWU3FnMCJ9LCJpYXQiOjE3MDA3NjMzMjYsIl9zZF9oYXNoX2FsZyI6InNoYS0yNTYiLCJpc3MiOiJodHRwczovL2lzc3Vlci5leGFtcGxlL2lzc3VlcnMvNGZkOTRmNjMtNGU4ZC00YmEwLThiMDgtNDk2YzYwODdhY2YwIiwic3ViIjoiaHR0cHM6Ly9zdWJqZWN0LmV4YW1wbGUvc3ViamVjdHMvNjMyMGNiOTItZmZmZS00NTM4LThjODItMmFkM2I2ZTdmYmY4In19..PHrNXJHOjP2Ufe_qhxM4jbkdm19KHQOa8vX6nQM2kScsW4NuZs3PT15f6qPPnRf9nlS4ylDQv1G9Og3g-f-IsrZDHn2T58IQvQSH9tWtyEWJpRW604ZYljOU5MhtugnW~e30",
    "issued_disclosures": []
  },
  "payload": null,
  "signature": "pI6pkxGWwLvWrAMVskehGfc8rYk0DhTbHjvj88BbkUvaVScFLSsxvWElS-xnnAcQPlrt-6RkKE388h39BoG-wCl05oAHvS2DNo7L-NT1cH-eLmsaHALqBU7F1ypNzwNM"
}
~~~

### Compact

~~~ text
eyJhbGciOiJFUzM4NCIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il0sImtpZCI6Imh0dHBzOi8vc3ViamVjdC5leGFtcGxlL3N1YmplY3RzLzYzMjBjYjkyLWZmZmUtNDUzOC04YzgyLTJhZDNiNmU3ZmJmOCNaT2M5aHJRa3Q2YnJkYklqcmZxc0MtRFNmSnREaG1MaGxBNDBQVlZTcWcwIiwiand0X2NsYWltcyI6eyJfc2RfaGFzaF9hbGciOiJzaGEtMjU2IiwiX3NkX2hhc2giOiIzODU5WTlWV3FSX0I1ZGQ3T2pieEl5R0pCdTNja1NnbUtPbnBuekRRM2xrIiwiaWF0IjoxNzAwNzYzMzI2LCJhdWQiOiJodHRwczovL3ZlcmlmaWVyLmV4YW1wbGUvdHJhbnNhY3Rpb25zL2I5YTg3Yzk5LTFmYzMtNDI5Mi1hMzI0LTc1NmQ2ODBmYTRjZiIsIm5vbmNlIjoiODYwZmM4ZTUtMWVkOS00ZjI1LTkyYWQtOTY0YzQxOTdkZjE1In19..pI6pkxGWwLvWrAMVskehGfc8rYk0DhTbHjvj88BbkUvaVScFLSsxvWElS-xnnAcQPlrt-6RkKE388h39BoG-wCl05oAHvS2DNo7L-NT1cH-eLmsaHALqBU7F1ypNzwNM~eyJpc3N1ZWRfdG9rZW4iOiJleUpoYkdjaU9pSkZVek00TkNJc0ltSTJOQ0k2Wm1Gc2MyVXNJbU55YVhRaU9sc2lZalkwSWwwc0ltdHBaQ0k2SW1oMGRIQnpPaTh2YVhOemRXVnlMbVY0WVcxd2JHVXZhWE56ZFdWeWN5ODBabVE1TkdZMk15MDBaVGhrTFRSaVlUQXRPR0l3T0MwME9UWmpOakE0TjJGalpqQWpaV2M0ZFhSTldEWTFNRzg1VDFCVk0yeG1kRzVHZUVWQ1dUaGxUbTFoYnkxR2QycGtkbGhqVTB3ek1DSXNJblI1Y0NJNkltRndjR3hwWTJGMGFXOXVMMk52YjJ3cmFtOXpaU0lzSW1OMGVTSTZJblJsZUhRdmNHeGhhVzQ3SUdOb1lYSnpaWFE5ZFhSbUxUZ2lMQ0pxZDNSZlkyeGhhVzF6SWpwN0ltTnVaaUk2ZXlKcmFXUWlPaUpvZEhSd2N6b3ZMM04xWW1wbFkzUXVaWGhoYlhCc1pTOXpkV0pxWldOMGN5ODJNekl3WTJJNU1pMW1abVpsTFRRMU16Z3RPR000TWkweVlXUXpZalpsTjJaaVpqZ2pXazlqT1doeVVXdDBObUp5WkdKSmFuSm1jWE5ETFVSVFprcDBSR2h0VEdoc1FUUXdVRlpXVTNGbk1DSjlMQ0pwWVhRaU9qRTNNREEzTmpNek1qWXNJbDl6WkY5b1lYTm9YMkZzWnlJNkluTm9ZUzB5TlRZaUxDSnBjM01pT2lKb2RIUndjem92TDJsemMzVmxjaTVsZUdGdGNHeGxMMmx6YzNWbGNuTXZOR1prT1RSbU5qTXROR1U0WkMwMFltRXdMVGhpTURndE5EazJZell3T0RkaFkyWXdJaXdpYzNWaUlqb2lhSFIwY0hNNkx5OXpkV0pxWldOMExtVjRZVzF3YkdVdmMzVmlhbVZqZEhNdk5qTXlNR05pT1RJdFptWm1aUzAwTlRNNExUaGpPREl0TW1Ga00ySTJaVGRtWW1ZNEluMTkuLlBIck5YSkhPalAyVWZlX3FoeE00amJrZG0xOUtIUU9hOHZYNm5RTTJrU2NzVzROdVpzM1BUMTVmNnFQUG5SZjlubFM0eWxEUXYxRzlPZzNnLWYtSXNyWkRIbjJUNThJUXZRU0g5dFd0eUVXSnBSVzYwNFpZbGpPVTVNaHR1Z25XfmUzMCIsImlzc3VlZF9kaXNjbG9zdXJlcyI6W119
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
  "kid": "https://issuer.example/issuers/4fd94f63-4e8d-4ba0-8b08-496c6087acf0#eg8utMX650o9OPU3lftnFxEBY8eNmao-FwjdvXcSL30",
  "typ": "application/cool+jose",
  "cty": "text/plain; charset=utf-8",
  "jwt_claims": {
    "cnf": {
      "kid": "https://subject.example/subjects/6320cb92-fffe-4538-8c82-2ad3b6e7fbf8#ZOc9hrQkt6brdbIjrfqsC-DSfJtDhmLhlA40PVVSqg0"
    },
    "iat": 1700763326,
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
  "protected": "eyJhbGciOiJFUzM4NCIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il0sImtpZCI6Imh0dHBzOi8vaXNzdWVyLmV4YW1wbGUvaXNzdWVycy80ZmQ5NGY2My00ZThkLTRiYTAtOGIwOC00OTZjNjA4N2FjZjAjZWc4dXRNWDY1MG85T1BVM2xmdG5GeEVCWThlTm1hby1Gd2pkdlhjU0wzMCIsInR5cCI6ImFwcGxpY2F0aW9uL2Nvb2wram9zZSIsImN0eSI6InRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLTgiLCJqd3RfY2xhaW1zIjp7ImNuZiI6eyJraWQiOiJodHRwczovL3N1YmplY3QuZXhhbXBsZS9zdWJqZWN0cy82MzIwY2I5Mi1mZmZlLTQ1MzgtOGM4Mi0yYWQzYjZlN2ZiZjgjWk9jOWhyUWt0NmJyZGJJanJmcXNDLURTZkp0RGhtTGhsQTQwUFZWU3FnMCJ9LCJpYXQiOjE3MDA3NjMzMjYsIl9zZF9oYXNoX2FsZyI6InNoYS0yNTYiLCJpc3MiOiJodHRwczovL2lzc3Vlci5leGFtcGxlL2lzc3VlcnMvNGZkOTRmNjMtNGU4ZC00YmEwLThiMDgtNDk2YzYwODdhY2YwIiwic3ViIjoiaHR0cHM6Ly9zdWJqZWN0LmV4YW1wbGUvc3ViamVjdHMvNjMyMGNiOTItZmZmZS00NTM4LThjODItMmFkM2I2ZTdmYmY4In19",
  "unprotected": {},
  "payload": null,
  "signature": "PHrNXJHOjP2Ufe_qhxM4jbkdm19KHQOa8vX6nQM2kScsW4NuZs3PT15f6qPPnRf9nlS4ylDQv1G9Og3g-f-IsrZDHn2T58IQvQSH9tWtyEWJpRW604ZYljOU5MhtugnW"
}
~~~

### Compact

~~~ text
eyJhbGciOiJFUzM4NCIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il0sImtpZCI6Imh0dHBzOi8vc3ViamVjdC5leGFtcGxlL3N1YmplY3RzLzYzMjBjYjkyLWZmZmUtNDUzOC04YzgyLTJhZDNiNmU3ZmJmOCNaT2M5aHJRa3Q2YnJkYklqcmZxc0MtRFNmSnREaG1MaGxBNDBQVlZTcWcwIiwiand0X2NsYWltcyI6eyJfc2RfaGFzaF9hbGciOiJzaGEtMjU2IiwiX3NkX2hhc2giOiIzODU5WTlWV3FSX0I1ZGQ3T2pieEl5R0pCdTNja1NnbUtPbnBuekRRM2xrIiwiaWF0IjoxNzAwNzYzMzI2LCJhdWQiOiJodHRwczovL3ZlcmlmaWVyLmV4YW1wbGUvdHJhbnNhY3Rpb25zL2I5YTg3Yzk5LTFmYzMtNDI5Mi1hMzI0LTc1NmQ2ODBmYTRjZiIsIm5vbmNlIjoiODYwZmM4ZTUtMWVkOS00ZjI1LTkyYWQtOTY0YzQxOTdkZjE1In19..pI6pkxGWwLvWrAMVskehGfc8rYk0DhTbHjvj88BbkUvaVScFLSsxvWElS-xnnAcQPlrt-6RkKE388h39BoG-wCl05oAHvS2DNo7L-NT1cH-eLmsaHALqBU7F1ypNzwNM~eyJpc3N1ZWRfdG9rZW4iOiJleUpoYkdjaU9pSkZVek00TkNJc0ltSTJOQ0k2Wm1Gc2MyVXNJbU55YVhRaU9sc2lZalkwSWwwc0ltdHBaQ0k2SW1oMGRIQnpPaTh2YVhOemRXVnlMbVY0WVcxd2JHVXZhWE56ZFdWeWN5ODBabVE1TkdZMk15MDBaVGhrTFRSaVlUQXRPR0l3T0MwME9UWmpOakE0TjJGalpqQWpaV2M0ZFhSTldEWTFNRzg1VDFCVk0yeG1kRzVHZUVWQ1dUaGxUbTFoYnkxR2QycGtkbGhqVTB3ek1DSXNJblI1Y0NJNkltRndjR3hwWTJGMGFXOXVMMk52YjJ3cmFtOXpaU0lzSW1OMGVTSTZJblJsZUhRdmNHeGhhVzQ3SUdOb1lYSnpaWFE5ZFhSbUxUZ2lMQ0pxZDNSZlkyeGhhVzF6SWpwN0ltTnVaaUk2ZXlKcmFXUWlPaUpvZEhSd2N6b3ZMM04xWW1wbFkzUXVaWGhoYlhCc1pTOXpkV0pxWldOMGN5ODJNekl3WTJJNU1pMW1abVpsTFRRMU16Z3RPR000TWkweVlXUXpZalpsTjJaaVpqZ2pXazlqT1doeVVXdDBObUp5WkdKSmFuSm1jWE5ETFVSVFprcDBSR2h0VEdoc1FUUXdVRlpXVTNGbk1DSjlMQ0pwWVhRaU9qRTNNREEzTmpNek1qWXNJbDl6WkY5b1lYTm9YMkZzWnlJNkluTm9ZUzB5TlRZaUxDSnBjM01pT2lKb2RIUndjem92TDJsemMzVmxjaTVsZUdGdGNHeGxMMmx6YzNWbGNuTXZOR1prT1RSbU5qTXROR1U0WkMwMFltRXdMVGhpTURndE5EazJZell3T0RkaFkyWXdJaXdpYzNWaUlqb2lhSFIwY0hNNkx5OXpkV0pxWldOMExtVjRZVzF3YkdVdmMzVmlhbVZqZEhNdk5qTXlNR05pT1RJdFptWm1aUzAwTlRNNExUaGpPREl0TW1Ga00ySTJaVGRtWW1ZNEluMTkuLlBIck5YSkhPalAyVWZlX3FoeE00amJrZG0xOUtIUU9hOHZYNm5RTTJrU2NzVzROdVpzM1BUMTVmNnFQUG5SZjlubFM0eWxEUXYxRzlPZzNnLWYtSXNyWkRIbjJUNThJUXZRU0g5dFd0eUVXSnBSVzYwNFpZbGpPVTVNaHR1Z25XfmUzMCIsImlzc3VlZF9kaXNjbG9zdXJlcyI6W119
~~~