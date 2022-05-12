## Description

A simple Pokedex search engine that uses **Google Sheets API** with **Next JS**.

## Instalation

1. Clone this repository

2. Enter in the project root: `cd gsheets-pokedb`

3. Configure Next JS: `npm install` 

4. Install Google APIs: `npm install googleapis`

5. Download your Google API JSON Key and save it in your project root
    - If you don't know how to create a key please see more details here

5. Import `PokeSheet.xlsx` to Google Sheets and **share** it with everyone that has a link

6. Create local enviroment variables (`.env.local` file) in your project root as following:

```
GOOGLE_APPLICATION_CREDENTIALS=./secrets.json
SHEET_ID="your_google_sheets_id"
```

This file should contains:
- Your JSON key
- Your Google Sheets ID (Code in the shareable link)

7. Start your project in development `npm run dev`

8. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.