import React from 'react'
import { Row, Col } from 'react-bootstrap';
import rocket from '../../../assets/img/launch-rocket.png'

function News(props) {
  return (
    <div className="news-page">
      <h1><i className="fa fa-file-text-o"></i> News</h1>
      <div className="divider"></div>
      <p className="sub-title">You can publish small articles or annoucements here.</p>



      <div className="publish">
        <Row>
          <Col md={5}>
            <img className="article-image" alt="img" src="http://savings.gov.pk/wp-content/plugins/ldd-directory-lite/public/images/noimage.png" />
          </Col>
          <Col md={7}>
            <div className="news-form">
              <span><i className="fa fa-image"></i> Image Link</span><br></br>
              <input type="text" placeholder="Image URL" /><br />
              <span><i className="fa fa-list"></i> Article Title</span><br></br>
              <input type="text" placeholder="Title" /><br />
              <span><i className="fa fa-list"></i> Body</span><br></br>
              <input type="text" placeholder="Article Body" /><br />
            </div>
          </Col>
        </Row>
      </div>




      <div className="publish-button animated bounceIn">
        <center>
          <img src={rocket} alt="rocket" />
          <p>All set! it seems that your all good to publish this post!</p>
          <button><i className="fa fa-file-text-o"></i> Publish Post</button>
        </center>
      </div>



    </div>


  )
}

export default News