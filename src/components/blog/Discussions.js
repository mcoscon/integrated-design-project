// https://www.youtube.com/watch?v=rSgbYCdc4G0
import React, {useState, useEffect} from "react";
import fire from '/home/marcos/Documents/github-stuff/shards-dashboard-react/src/fire.js'
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
  ModalHeader
} from "shards-react";


function firebaseData(){
  const [data, setData] = useState([]);
  useEffect(()=>{
    fire
      .firestore()
      .collection('test')
      .onSnapshot((snapshot)=>{
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id, 
          ...doc.data()
        }))
        //console.log("Document data:", snapshot.docs[0].data())
        setData(newData)
      })
  }, [])
  return data
}

function Discussions ({title, discussions})
{
  const datas = firebaseData();
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
  <Card small className="blog-comments">
    <CardHeader className="border-bottom">
      <h6 className="m-0"> Pending Summons </h6>
    </CardHeader>
    <CardBody className="p-0">
      {datas.map((data) => (
        <div key={data.id} className="blog-comments__item d-flex p-3">
          {/* Avatar */}
          <div className="blog-comments__avatar mr-3">
            
            {/*<img src={discussion.author.image} alt={discussion.author.name} />*/}
          </div>

          {/* Content */}
          <div className="blog-comments__content">
            {/* Content :: Title */}
            <div className="blog-comments__meta text-mutes">
              <a className="text-secondary" /*href={discussion.author.url}*/>
                {data.name}
              </a>{" "}
              on{" "}
              <a className="text-secondary" /*href={discussion.post.url}*/>
                {data.name}
              </a>
              <span className="text-mutes">- {data.name}</span>
            </div>

            {/* Content :: Body */}
            <p className="m-0 my-1 mb-2 text-muted">{data.name}</p>

            {/* Content :: Actions */}
            <div className="blog-comments__actions">
              <ButtonGroup size="sm">
                <Button theme="white" onClick = {handleButtonClick}>
                  <span className="text-success">
                  </span>{" "}
                  Details
                </Button>
                <Modal open={modalOpen} sm="lg">
                  <ModalHeader> Location </ModalHeader>
                  <ModalBody>👋 {data.name} </ModalBody>
                  <Button squared theme="light" onClick = {handleModalClick}>
                    CLOSE
                  </Button>
                   </Modal>
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
      ))}
    </CardBody>

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
