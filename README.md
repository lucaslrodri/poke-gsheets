# Poke GSheets

A **simple demo** for working with **Google Sheets query** with Pokemon thematic.

<div style='display:flex!important;justify-content:center!important;align-items:center!important;gap:20px!important;flex-wrap:wrap!important'>
    <img style='max-height: 150px' src='public/pikachu.png' alt='Foto do Pikachu'/>
    <span style='font-size:4rem!important'>+</span>
    <img style='max-height: 150px' src='public/sheets.png' alt='Logo do Google Sheets'/>
    <span style='font-size:4rem!important'>+</span>
    <img style='max-height: 150px' src='public/nextjs.png' alt='Logo do Next JS'/>
</div>


Features:

- Use Google Sheets **API v4** for search cells (methods `batchGet` and `get`).
-  Search Pokemon by Name or National Dex Number.
- **Rich widgets**:
    - Bar Graph with color changing
    - Check mark display for true/false variables
    - Custom text display with custom background color and font weight
    - Image

> **Live demo**: https://poke-gsheets.vercel.app/

> **Google Sheet demo ID:** [1zXlB3QP2BN3Zxkfg8CPNrneO6d-SzqqRgLqJfTETNNs](https://docs.google.com/spreadsheets/d/1zXlB3QP2BN3Zxkfg8CPNrneO6d-SzqqRgLqJfTETNNs)

## Installation

1. Clone this repository

2. Enter in the project root: `cd gsheets-pokedb`

3. Configure Next JS: `npm install` 

4. Install Google APIs: `npm install googleapis`

5. Download your Google API JSON Key and save it in your project root
    - If you don't know how to create a key please see more details here

5. Import `PokeSheet.xlsx` to Google Sheets and **share** it with everyone that has a link

6. Create local enviroment variables (`.env.local` file) in your project root as following:

```
SHEET_ID=your_google_sheets_id
GOOGLE_PROJECTID=sheets-xxxxxxxxxxxxxx
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY.........-----END PRIVATE KEY-----\n
GOOGLE_CLIENT_EMAIL=sheets-account-example@xxxxxxxxxxxxx.gsa.gserviceaccount.com
```

This file should contains:
- SHEET_ID - Find it in your shareable link
- GOOGLE_PROJECTID - See your Google API JSON Key (Credentials)
- GOOGLE_PRIVATE_KEY - RSA Key for authentication with quotes (See your Google API JSON Key)
- GOOGLE_CLIENT_EMAIL - See your Google API JSON Key (Credentials)

7. Start your project in development `npm run dev`

8. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying to Vercel

1. Push your code to your git repository (GitHub, GitLab, BitBucket)
2. Import your Next.js projet into Vercel.
3. Create environment variables:  `SHEET_ID`, `GOOGLE_PROJECTID`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_CLIENT_EMAIL`
    - The environment variables created here are strings, so **you should replace any `\n` with break line**.

## Datasets

Link of useful datasets to use as start point:

- [Pokemon with stats](https://www.kaggle.com/datasets/abcsds/pokemon) -  This data set includes 721 Pokemon, including their number, name, first and second type, and basic stats: HP, Attack, Defense, Special Attack, Special Defense, and Speed. 
- [Pokemon Image Dataset](https://www.kaggle.com/datasets/vishalsubbiah/pokemon-images-and-types) - Images of all Pokemon from generation 1 to generation 7, along with their types (primary and secondary) as a csv.

Don't forget to **upload the csv file in our own Google Sheets project** and make it shareable (as read) with link.

## Learn more

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
- [Google Sheets as a Database](https://fireship.io/lessons/google-sheets-database-nextjs/) - Learn how to use Google Sheets as the primary database for your web app with Next.js.
- [Use Google Sheets as a CMS for your Next.js blog](https://andreaskeller.name/blog/nextjs-google-sheets-cms) - Another guide for create your Next.js app with Google Sheets integration.
- [Creating a Google Sheets API Key](https://handsondataviz.org/google-sheets-api-key.html) - Learn how to create a Google API Key (Credentials).
- [Sheets API Documentation](https://developers.google.com/sheets/api/guides/values) - Reading & Writing Cell Values with Google Sheets API.
- [Google Application Credential without Json File](https://github.com/vercel/vercel/issues/749#issuecomment-715009494) - A new method of authentication using local environmental variables (Useful deploy in Vercel).
- [Vercel Documentation](https://vercel.com/docs/get-started) - A guide for deployment of a Next.js.
- [Vercel Environment Variable Documentation](https://vercel.com/docs/concepts/projects/environment-variables) - A guide to work with environment variables.