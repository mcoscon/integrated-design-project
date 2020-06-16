<p align="center">
<a href="https://designrevision.com/downloads/shards-dashboard-lite-react/">
<img src="assets/preview.png" width="250" />
</a>
</p>

<h1 align="center" style="border-bottom: none !important; margin-bottom: 5px !important;"><a href="https://designrevision.com/downloads/shards-dashboard-lite-react/">Integrated Design Project</a></h1>
<p align="center">
  <a href="#">
    <img src="https://img.shields.io/badge/License-MIT-brightgreen.svg" />
  </a>
</p>

<p align="center">
This is the proposed project for EEET 4002 Integrated Design Project. The project is a smoker detection system that alerts authorities or premise owners when an offence has been made on a non-smoking zone. Visit https://www.youtube.com/watch?v=bJ7rTVDnL4Q for a brief rundown of the system and the full demo.
</p>

<p align="center">
  <a href="https://idp-app-70f95.firebaseapp.com">
    <img height="55px" src="assets/btn-live-preview.png" />
  </a>
</p>

<br />


![Output sample](https://github.com/mcoscon/integrated-design-project/blob/master/ProgressDemo.gif)


<br />

### Dashboard User Interface Quick Start 
* Nodejs, Firebase and Firebase Command Line Interface (CLI) should be first installed on your system.
* Install dependencies by running `yarn` or `npm install` on the root folder.
* Run `npm run start` to start the local development server.
* Run `npm run build` to deploy all static files into the build folder and then run `firebase deploy` to deploy the dashboard to Firebase Hosting.
* Do note that in the Raspberry PI Quick Start, the two methods are interfaced to a Firebase web-applicatino project.

<br />

### Raspberry PI Quick Start 
#### General Requirements
* Python version 3.6, pillow module, Twilio API, AWS Python API for Method 1, Pyrebase API for Method 2
#### MQTT over AWS IoT Core
* A registered AWS account is needed, with the following service enabled: AWS IoT, AWS Lambda & AWS Cloudwatch.
* A zip file containing the AWS Lambda code (in lambda-function) is to be uploaded to the Lambda console. This is to deploy external python dependencies (i.e pillow module & Twilio) to lambda. The methods [here](https://www.twilio.com/blog/serverless-phone-number-validation-aws-lambda-python-twilio) was modified and used for this project.
* Run the `idpMQTT.py` script which contains the publishing MQTT Client.
 #### HTTP with Firebase
* A registered firebase project is needed with the credentials written to `raspberrySend.py` script.
* Run the `idpMQTT.py` script which contains a HTTP post method to Firebase storage & Realtime database.

<br />

### Built using
- [Reactjs](https://reactjs.org/)
- [Material UI](https://material-ui.com/)
- [Firebase](https://firebase.google.com/)
- [Raspberry PI 3B+](https://www.raspberrypi.org/)
- [Intel Neural Compute Stick](https://software.intel.com/en-us/articles/intel-movidius-neural-compute-stick)
- [Pyrebase](https://github.com/thisbejim/Pyrebase)
- [AWS service](https://aws.amazon.com/)

<br />
