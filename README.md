# TTN-Gooogle-Script
HTTP Integration of Google Script for The Things Network 
This Post is highly inspirated by Squix78: https://blog.squix.org/2017/07/thethingsnetwork-how-to-use-google-spreadsheet-to-log-data.html
You may visit his homepage or buy him a coffee. He does a really great work. Unfortuanetly his source code was not working for me. So I had to adapt it to my needs for the Paxcounter.

This Script is made to enable an easy way to integrate an The Things Network to a Google Spreadsheet without the need of a HTTP Server.

To Enable this Perform the following Steps
1. Open Google Drive: https://drive.google.com/drive and login with your google account.
2. Press New: Google Spreadsheet
3. Save the Bowser Adress: https://docs.google.com/spreadsheets/d/xxxxxxxxxx/edit#gid=0 
4. Goto to Tools: Script Editor
5. Paste the Code copied from ttnscript.txt 
6. Replace the "YOURSheetdID" with the xxxxxx[Step 3] from the Browser Adress from Step 3
7. Save and Publish -Publish as a Web App.
8. Select Start as Me and access Everyone even Anonymous: Save the Adress that is displayed
9. Open in another Browser Window your The Thingspeak Account: Select Console -> Application -> YOUR Application -> Integration -> HTTP Integration
10. Edit URL: Paste the URL from your Google Script editor[Step 8] Publishing, Method Post
11. Edit the Script according to your needs or your payload. !You need a matching Payload Decoder on TTN! Otherwise this Script will fail.


Please  be aware: This is not a secure nor a productive solutions. Everybody how knows your Spreadsheet adress can modify your doucments.
This is just for quick tryouts and fast analysis of your data.

