export default async function request(sheets,ranges,majorDimension){
    const response = (Array.isArray(ranges))? (
        await sheets.spreadsheets.values.batchGet({
        spreadsheetId: process.env.SHEET_ID,
        ranges,
        majorDimension
        })
        ):(
        await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range:ranges,
        majorDimension
        })
    )

    return (Array.isArray(ranges))?  response.data.valueRanges: response.data.values
}