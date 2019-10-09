# Ttn-gooogle-script
Http integration of google script for The Things Network 
This Post is highly inspirated by Squix78: https://blog.squix.org/2017/07/thethingsnetwork-how-to-use-google-spreadsheet-to-log-data.html
You may visit his homepage or buy him a coffee. He does a really great work.

This Script is made to enable an easy way to integrate an The Things Network to a Google Spreadsheet.

To Enable this Perform the following Steps
1. Open Google Drive: https://drive.google.com/drive and login with your google account.
2. Press New: Google Spreadsheet
3. Save the Bowser Adress: https://docs.google.com/spreadsheets/d/xxxxxxxxxx/edit#gid=0 
4. Goto to Tools: Script Editor
5. Paste the Code copied from ttnscript.txt 
6. Replace the "YOURSheetdID" with the xxxxxx from the Browser Adress from Step 3
7. Save and Publish -Publish as a Web App.
8. Select Start as Me and access Everyone even Anonymous: Save the Adress that is displayed
9. Open in another Browser Window your The Thingspeak Account: Selcet Console -> Application -> YOUR Application -> Integartion -> HTTp Intgration
10. Edit URL: Paste the URL from your Google Script editor Publishing, Method Post
11. Edit the Script accoding to your needs or your payload.


Please  be aware: This is not a secure nor a productive solutions. Everybody how knwos your Spreadsheet adress can modify your doucments.
This is just for quick tryouts and fast analsis of data.

