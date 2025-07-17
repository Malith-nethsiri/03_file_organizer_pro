📁 File Organizer Pro
  🔄 Automatically organize files in Google Drive based on data from a Google Sheet using Google Apps Script.

🚀 Features
       
        ✅ Moves files to specified folders based on Sheet data
        
        ✅ Creates folders if they don’t exist
        
        ✅ Marks files as "Moved" with timestamp
        
        ✅ Fully automated via custom toolbar menu (📁 File Tools)
        
        ✅ Zero coding knowledge needed after setup


📊 Sheet Format
| File Name        | Folder Name    | EPID    | Status    | Timestamp       |
| ---------------- | -------------- | ------- | --------- | --------------- |
| `report_102.pdf` | `Reports/2025` | `EP102` | `To Move` | *(auto-filled)* |

    File Name: Exact file name in Google Drive
    
    Folder Name: Destination folder path
    
    Status: Use To Move, script changes to Moved
    
    Timestamp: Filled automatically when moved


🛠️ How to Use

          Create a Google Sheet with the format above
          
          Upload files to your Google Drive
          
          Open Apps Script Editor:
          
          Extensions → Apps Script
          
          Paste in organizeFiles() and onOpen() functions
          
          Refresh your Sheet → a menu appears: 📁 File Tools
          
          Click 🗂️ Organize Files Now to run the automation
          
          Files will move, Sheet updates, and you get a toast notification

🧠 How It Works
      
      Loops through each row in the sheet
      
      Skips already "Moved" rows
      
      Searches Drive for file name
      
      Creates folder if it doesn’t exist
      
      Moves the file and updates the row

💡 Advanced (Optional)

    To limit to a specific folder, modify the code:
    const parentFolderId = 'YOUR_FOLDER_ID_HERE';
    const parentFolder = DriveApp.getFolderById(parentFolderId);

🧰 Tech Stack
    
    Google Sheets
    
    Google Apps Script
    
    Google Drive API (via DriveApp)


📦 Project Structure

03_file_organizer_pro

  ├── Code.gs
  
  ├── README.md
  
  └── example_sheet.png (optional screenshot)


👨‍💻 Author
Built by Malith as part of the 30 Brutal Projects challenge to master automation, freelancing, and Python/AI tools on the road to $1M.
💼 Portfolio-ready + client-usable.
