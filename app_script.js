function organizeFiles() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('data_table');
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    const fileName = data[i][0];
    const folderName = data[i][1];
    const status = data[i][3];

    if (status === 'Moved') continue;

    // Step 1: Search file in Drive
    const files = DriveApp.getFilesByName(fileName);
    if (!files.hasNext()) {
      Logger.log(`❌ File not found: ${fileName}`);
      continue;
    }
    const file = files.next();

    // Step 2: Check/create folder
    let folder;
    const folderIterator = DriveApp.getFoldersByName(folderName);
    if (folderIterator.hasNext()) {
      folder = folderIterator.next();
    } else {
      folder = DriveApp.createFolder(folderName);
    }

    // Step 3: Move file
    folder.addFile(file);
    DriveApp.getRootFolder().removeFile(file); // remove from root

    // Step 4: Update sheet
    sheet.getRange(i + 1, 4).setValue("Moved");
    sheet.getRange(i + 1, 5).setValue(new Date());
  }
}
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('📁 File Tools')
    .addItem('🗂️ Organize Files Now', 'organizeFiles')
    .addToUi();
}
