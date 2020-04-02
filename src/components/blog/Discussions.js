// https://www.youtube.com/watch?v=rSgbYCdc4G0
// Need to import array of images
import React, {useState, useEffect} from "react";
import firebase from '/home/marcos/Documents/github-stuff/shards-dashboard-react/src/fire.js'
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col,
  Modal,
  ModalBody, 
  ModalHeader,
  CardImg

} from "shards-react";


function getImageURL(){
var storageRef = firebase.storage().ref();
storageRef.child('images/appendix_diggypod-300x200.jpg').getDownloadURL().then(function(url) {
  // `url` is the download URL for 'images/stars.jpg
    console.log(url);
    // Or inserted into an <img> element:
    var img = document.getElementById('myimg');
    img.src = url;
  }).catch(function(error) {
    // Handle any errors
  });
}



function firebaseData(){
  /*
  var storage = firebase.storage();
var storageRef = storage.ref();
var spaceRef = storageRef.child('images/appendix_diggypod-300x200.jpg');
*/
useEffect(() => {
  const [data, setData] = useState([]);
  const unsubscribe = firebase
    .db.collection('myCollectionName')
    .onSnapshot(snapshot => {
      if (snapshot.size) {
        // we have something
        let myDataArray = []
        snapshot.forEach(doc =>
        myDataArray.push({ ...doc.data() })
        )
        setData(myDataArray)
      } else {
        // it's empty
      }
  });
  return () => {
    unsubscribe()
  }
}, [firebase])
}


function Discussions ({title, discussions})
{
  const [datas, setData] = useState([]);
  useEffect(() => {
    firebase.ref('users')
      .onSnapshot(snapshot => {
        if (snapshot.size) {
          // we have something
          let myDataArray = []
          snapshot.forEach(doc =>
          myDataArray.push({ ...doc.data() })
          )
          setData(myDataArray)
        } else {
          // it's empty
        }
    });
  }, [firebase])

  getImageURL();
  const [modalOpen, setmodalOpen] = useState(false)
  const handleButtonClick = () => {
    setmodalOpen(true)
    console.log(modalOpen)
    console.log("Clicked!!")
  }

  const handleModalClick = () => {
    setmodalOpen(false);
  }
  return(
  <Card  style={{
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <CardHeader className="border-bottom">
      <h6 className="m-0"> Pending Summons </h6>
    </CardHeader>
    {/*<img src= "https://place-hold.it/300x200" alt="test"/>*/}
    {datas.map((data) => (
    <div>
    <img alt="test" id="myimg"/>
    <CardBody className="p-0">
        <div key={data.id} className="blog-comments__item d-flex p-3">
          <div className="blog-comments__content">
            {/* Content :: Title */}
            <div className="blog-comments__mseta text-mutes">
              <a className="text-secondary" /*href={discussion.author.url}*/>
                Case ID: {data.id}
              </a>
            </div>
             {/* Content :: Body */}
             <p className="m-0 my-1 mb-2 text-muted">
              Date: {data.date}
              </p>
            <p className="m-0 my-1 mb-2 text-muted">
            Location: {data.place}
            </p>
            {/* Content :: Actions */}
            <div className="blog-comments__actions">
              <ButtonGroup size="sm">
                <Button theme="white" onClick = {handleButtonClick}>
                  <span className="text-success">
                  </span>{" "}
                  Details
                </Button>
                <Button theme="white">
                  <span className="text-success">
                    <i className="material-icons">check</i>
                  </span>{" "}
                  Close Case
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
    </CardBody>
    </div>
    ))}

    <CardFooter className="border-top">
      <Row>
        <Col className="text-center view-report">
          <Button theme="white" type="submit">
            View All Pending Summons
          </Button>
        </Col>
      </Row>
    </CardFooter>
  </Card>
  );
      }

Discussions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The discussions dataset.
   */
  discussions: PropTypes.array
};

Discussions.defaultProps = {
  title: "Discussions",
  discussions: [
    {
      id: 1,
      date: "3 days ago",
      author: {
        image: require("../../images/avatars/curtin.jpg"),
        name: "John Doe",
        url: "#"
      },
      post: {
        title: "Hello World!",
        url: "#"
      },
      body: "Well, the way they make shows is, they make one show ..."
    },
    {
      id: 2,
      date: "4 days ago",
      author: {
        image: require("../../images/avatars/newworld.jpeg"),
        name: "John Doe",
        url: "#"
      },
      post: {
        title: "Hello World!",
        url: "#"
      },
      body: "After the avalanche, it took us a week to climb out. Now..."
    },
    {
      id: 3,
      date: "5 days ago",
      author: {
        image: require("../../images/avatars/download.png"),
        name: "John Doe",
        url: "#"
      },
      post: {
        title: "Hello World!",
        url: "#"
      },
      body: "My money's in that office, right? If she start giving me..."
    }
  ]
};

export default Discussions;
