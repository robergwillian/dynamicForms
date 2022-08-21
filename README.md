## Getting Started with Dyamic Form Code Asssessment

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Make sure you have a .env.local file with the following: 

```bash
NEXT_PUBLIC_HOST=http://localhost:3000
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The app gets its initial form config and values from the API.

You can edit the field values and save them ( This will send a post request to the API and overwrite the original data.json file in the backend)

You can also load a new form config by uploading a JSON file in the following format:

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
* at the time of this writing the following field types are supported: TextField ( text, number, date ), and Select from MUI.

### Future changes and improvements:

* Add unit tests
* Add storybook to compose the components that would be used on the forms
* Be able to save form configs that are uploaded via API along with its values
* Save form values in a DB schema instead of writing directly to the data.json file
* Implement drag and drop to reorder fields in the forms