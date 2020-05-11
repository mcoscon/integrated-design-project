import pyrebase
import uuid
import time
from datetime import datetime
from datetime import date
from twilio.rest import Client
from PIL import Image
#load_dotenv()
import base64
from io import BytesIO



def lambda_handler(event, context):
    try:
        data = sendFirebase(event)
        send_twilio(data)
    except:
        return {'error':'error'}

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

def sendFirebase(event):
    db, stor = startFirebase();
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

   
    image = BytesIO(base64.b85decode(event['image_bytes'])) #image_bytes = base64.b85decode(event['image_bytes'])
       

    stor.child(imagePath).put(image)
    ## Set imageURL
    imageURL = stor.child(imagePath).get_url(None)

    ## Example data to send
    data = {"Timestamp": dt_string,"Location": 'Lot 9181',"ImageURL": imageURL}
    print("data uploaded!")
    db.child("users").push(data)
    return data

def send_twilio(data):

    # Your Account SID from twilio.com/console
    account_sid = "ACd5dd547737971988ec77e6014c9d290e"

    # Your Auth Token from twilio.com/console
    auth_token  = "2d04f00463566efb6187d51479228f4f"
    client = Client(account_sid, auth_token)
    message = client.messages \
    .create(
         media_url=data["ImageURL"],
         from_='whatsapp:+14155238886',
         body="Smoker detected at" + data["Location"] + " on " + data["Timestamp"],
         to='whatsapp:+601136776256'
     )
    print(message.sid)