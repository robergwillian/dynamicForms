## Getting Started with Dyamic Form Code Asssessment

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The app gets its initial form config and values from the API.

You can edit the field values and save them ( This will send a post request to the API and overwrite the original data.json file in the backend)

You can also load a new form config by uploading a JSON file in the following format:

* at the time of this writing the following field types are supported: TextField ( text, number, date ), and Select from MUI.


```bash
{
  "id": 1,
  "formName": "Your form name",
  "fields": [
    {
      "id": 000,
      "name": "Field name",
      "type": "text"
    },
    {
      "id": 001,
      "name": "Field name",
      "type": "select",
      "options": [
        {
          "name": "Boston",
          "value": 1
        },
        {
          "name": "Houston",
          "value": 2
        },
        {
          "name": "New York",
          "value": 3
        },
        {
          "name": "Barcelona",
          "value": 4
        }
      ]
    }
  ]
}

```