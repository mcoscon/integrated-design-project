import pyrebase
import uuid
import time
from datetime import datetime
from datetime import date

def startFirebase():
    firebaseConfig = {
    "apiKey": "AIzaSyA-gXX_1TReOf8gZFR2-3tjJWlMu5yJai0",
    "authDomain": "idp-app-70f95.firebaseapp.com",
    "databaseURL": "https://idp-app-70f95.firebaseio.com",
    "projectId": "idp-app-70f95",
    "storageBucket": "idp-app-70f95.appspot.com",
    "messagingSenderId": "267731967690",
    "appId": "1:267731967690:web:69c8342fbcac81c5acde33",
    "measurementId": "G-8WSENE6SC0"
    }
    firebase = pyrebase.initialize_app(firebaseConfig)
    ### Required modules
    return firebase.database(), firebase.storage()

def sendFirebase(db, stor):
    ## Date
    today = date.today()
    ## Textual month, day and year	
    dateToday = today.strftime("%B %d, %Y")
    now = datetime.now()
    dt_string = now.strftime("%d/%m/%Y %H:%M:%S")

    ## Example image to send
    random = str(uuid.uuid1())
    imagePath = random + ".jpg"
    print (imagePath)
    stor.child(imagePath).put("test.jpg")
    time.sleep(3)

    ## Set imageURL
    imageURL = stor.child(imagePath).get_url(None)

    ## Example data to send
    data = {"Timestamp": dt_string,"Location": 'Lot 9181',"ImageURL": imageURL}
    print("data uploaded!")
    db.child("users").push(data)
    locationCount = db.child("curtin_university_count").get()
    newCountValue = locationCount.val() + 1
    db.child("curtin_university_count").push(newCountValue)

## Main program
db, stor = startFirebase()
sendFirebase(db, stor)
