// https://www.youtube.com/watch?v=rSgbYCdc4G0
// Need to import array of images
import React, {useState, useEffect} from "react";
import firebase from '/home/marcos/Documents/github-stuff/idp-app/src/fire.js'
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
import { useObject,useList, useListKeys, useListVals } from 'react-firebase-hooks/database';
 

function Discussions ({title, discussions})
{
  const [data, setData] = useState([]);
  const handleButtonClick =()=>
  {
    console.log("hi");
  }

  useEffect(()=> {
    const dataRef = firebase.database().ref('users');
    dataRef.on('value', function(snapshot){
        var returnArr = [];
        snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        console.log(item)
        returnArr.push(item);
    });
    setData(returnArr)
  })
  return () => dataRef.off('value', dataRef);
},[firebase.database])

  return(
  <Card  style={{
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <CardHeader className="border-bottom">
      <h6 className="m-0"> Pending Summons </h6>
    </CardHeader>
    {data.map((d) => (
    <div>
    <img src={d.ImageURL}/>
    <CardBody className="p-0">
        <div key={d.key} className="blog-comments__item d-flex p-3">
          <div className="blog-comments__content">
            {/* Content :: Title */}
            <div className="blog-comments__mseta text-mutes">
              <a className="text-secondary" /*href={discussion.author.url}*/>
                Case ID: {d.key}
              </a>
            </div>
             {/* Content :: Body */}
              <p className="m-0 my-1 mb-2 text-muted">
              Timestamp: {d.Timestamp}
              </p>
            <p className="m-0 my-1 mb-2 text-muted">
            Location: {d.Location}
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
