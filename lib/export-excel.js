const Excel = require('exceljs');
const filesaver = require('file-saver');
const Blob = require('blob');

const wbConfig = ({sheet, columns, rows}) => new Promise(async(resolve, reject) => {
    try {
        if(columns.length < 1){
            reject({message: "Missing Column Headers!"})
            return;
        }

        if(rows.length < 1){
            reject({message: "No rows found!"})
            return;
        }

        const workbook = new Excel.Workbook();
        const worksheet = await workbook.addWorksheet(sheet);
        worksheet.columns = columns; //@header, @key, @width
        await worksheet.addRows(rows); //array of data based on columns
        const buffer = await workbook.xlsx.writeBuffer();
        resolve(buffer)
    } catch (error) { reject(error) }
})

const generateExcelFile = ({filename, sheet="Sheet1", columns, rows}) => new Promise((resolve, reject) => {
    try {
        let bufferData = await wbConfig({sheet, columns, rows})
        const data = new Blob([bufferData], { type: 'application/octet-stream' });
        filesaver.saveAs(data, `${filename}.xlsx`)
    } catch (error) {
        reject(error)
    }
})

const generateExcelBuffer = ({filename, sheet="Sheet1", columns, rows}) => new Promise((resolve, reject) => {
    try {
        let bufferData = await wbConfig({sheet, columns, rows})
        resolve(bufferData)
    } catch (error) {
        reject(error)
    }
})

module.exports = { generateExcelFile, generateExcelBuffer }