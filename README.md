# export-excel
A simple node module for exporting data set to excel file or excel buffer.

## Install
```json
    npm i export-excel-js --save 
```

## Usage
```javascript
    const { generateExcelFile, generateExcelBuffer } = require('export-excel-js')
    //or
    import { generateExcelFile, generateExcelBuffer } from 'export-excel-js'
```

## Generate Excel File
```javascript
    import { generateExcelFile } from 'export-excel-js'
    
    (async() => {
        try{
            const options = {
                filename: "sample-filename"
                sheet: "Sheet1",
                columns: [
                    { header: "ID" , key: "id", width: 10 },
                    { header: "Name" , key: "id", width: 10 }
                ],
                rows: [
                    { id: 1, name: "Foo" },
                    { id: 2, name: "Bar" },
                ]
            }
            await generateExcelFile(options);
        }catch(error){
            console.log(error);
        }
    })
```

## Generate Excel Buffer
```javascript
    import { generateExcelBuffer } from 'export-excel-js'
    
    (async() => {
        try{
            const options = {
                sheet: "Sheet1",
                columns: [
                    { key: "id", header: "ID", width: 10 },
                    { key: "name", header: "Name", width: 10 }
                ],
                rows: [
                    { id: 1, name: "Foo" },
                    { id: 2, name: "Bar" },
                ]
            }
            let bufferData = await generateExcelBuffer(options);
            console.log(bufferData);
        }catch(error){
            console.log(error);
        }
    })
```