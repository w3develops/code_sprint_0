# API 

## Quote

_GET_ `/api/quote`

Response:
---
```json
{
  "id": "inner id",
  "content": "Quote content",
  "author": "Quote author", 
}
```

## Quiz

_POST_ `/api/quiz`

Payload:
---

```json
{

}
```

## Quiz Filter

_GET_ `/api/quiz/languages?area[]=%area`

Response:
---

```json
{
  "languages": [
    //Languages in this area
    {
      "title": "Language name",
      "option": "option name",
    },
  ]
}
```

_GET_ `/api/quiz/framevork?lang[]=%languages`

Response:
---

```json
{
  "frameworks": [

    {
      "title": "Language name",
      "option": "option name",
    },
  ]
}
```

## Calculator

_POST_ `/api/calculator`

Payload:
---

```json
{

}
```

Response:  
---  


```json
{
  "cups": /number of cups/ 
}
```