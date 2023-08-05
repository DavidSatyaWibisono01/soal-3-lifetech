const XLSX = require('xlsx');
const { writeFileSync } = require('fs');
const FileSaver = require('file-saver');

const data = [
  ['Nama', 'Usia'],
  ['David Satya Wibisono', 20],
  ['Jane Smith', 30],
  ['Alice Johnson', 28],
];

const ws = XLSX.utils.aoa_to_sheet(data);

const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

const buffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });

const excelFilename = 'data.xlsx';
writeFileSync(excelFilename, buffer);

const excelBuffer = new Uint8Array(buffer);
const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
FileSaver.saveAs(blob, excelFilename);

console.log(`File ${excelFilename} berhasil diekspor.`);
