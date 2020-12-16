const constant = {
  ALLOWED_FILE_TYPES: [
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'text/csv',
  ],
  MAX_FILE_SIZE: '20MB',
  BRIEFING_SUMMARY_CHAR_LIMIT: 800,
  VALID_FILE_TYPES:['xls', 'xlsx', 'csv', 'xlsb', 'xlsm', 'xlt', 'xltm', 'xltx'],
}
export default constant;
