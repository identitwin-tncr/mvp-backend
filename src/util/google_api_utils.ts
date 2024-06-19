import {google} from 'googleapis';
const sheets = google.sheets('v4');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const getAuthToken = async () => {
    const auth = new google.auth.GoogleAuth({
        scopes: SCOPES
    });
    const authToken = await auth.getClient();
    return authToken;
}

const getSpreadSheet = async ({spreadsheetId, auth}) => {
    const res = await sheets.spreadsheets.get({
        spreadsheetId,
        auth,
    });
    return res;
}

const getSpreadSheetValues = async ({spreadsheetId, auth, sheetName}) => {
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId,
        auth,
        range: sheetName
    });
    return res;
}


export {
  getAuthToken,
  getSpreadSheet,
  getSpreadSheetValues
}

