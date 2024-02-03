# Translate API

This is a very light rest API for the Fictional Translation App.

## Setup

```bash
  npm install # to install the dependencies
  npm start # to start the application, It defaults to PORT 9000
```

## Endpoints

### Login
This returns a token on successful login, Note that the only accepted password is `password` and it returns same token regardless of the username entered

#### Request `POST /login`

    curl -i -H 'Accept: application/json' -d 'username=anything&password=password' http://localhost:9000/login

#### Response

    HTTP/1.1 200 Ok
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    {  "access_token": "cGFzc3dvcmQ=" }


### Translate
This returns a random lorem ipsum text, The response is an array of paragraphs(The number of paragraphs is based on the number of paragraphs in the `text` payload)
#### Request `POST /translate`

    curl -X POST \
      'http://localhost:9000/translate' \
      --header 'Authorization: Bearer cGFzc3dvcmQ=' \
      --header 'Content-Type: application/json' \
      -d '{
        "text": "sadfsf\n\nasdads\n\n asdasd",
        "sourceLanguage": "en"
        "targetLanguage": "de"
     }'

#### Response

    HTTP/1.1 200 Ok
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    { 
      "translated_segments": [ 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prioris generis est docilitas, memoria; Sed ad haec, nisi molestum est, habeo quae velim. Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus", 
        "Duo Reges: constructio interrete. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Quae hic rei publicae vulnera inponebat, eadem ille sanabat."
      ]
    }

### Get supported Languages
Returns the languages supported by the API
#### Request `POST /languages`

    curl -X GET \
      'http://localhost:9000/languages' \
      --header 'Authorization: Bearer cGFzc3dvcmQ=' \
      --header 'Content-Type: application/json' \

#### Response

    HTTP/1.1 200 Ok
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    { 
      "languages": [{name: "English", code: "en"}, {name: "German", code: "de"}]
    }
