import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import rocket from '../../../assets/img/launch-rocket.png'
import axios from 'axios';
import swal from 'sweetalert2';

function News(props) {

  const el = (element) => {
    return document.getElementById(element);
  }

  function searchNews() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search1");
    filter = input.value.toUpperCase();
    table = document.getElementById("news-table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].innerText.replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, '').toUpperCase();
      if (td) {
        txtValue = td;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  const checkifPublishable = () => {
    let img = el('imgurl').value, atitle = el('atitle').value, abody = el('abody').value;
    if (img.trim() !== '' && img.includes('https://')) {
      el('x-img').src = img;
    } else {
      el('x-img').src = 'http://savings.gov.pk/wp-content/plugins/ldd-directory-lite/public/images/noimage.png';
    }

    if (img.trim() !== '' && atitle.trim() !== '' && abody.trim() !== '') {
      el('publish-div').style.display = 'block';
    } else {
      el('publish-div').style.display = 'none';
    }
  }

  const publishPost = () => {
    let img = el('imgurl').value, atitle = el('atitle').value, abody = el('abody').value;
    axios.get(`https://sagipinas.herokuapp.com/addEvent?title=${atitle}&subtitle=${abody}&image_url=${img}`)
      .then(res => {
        swal.fire('Post Published!', "your article was published successfully", 'success');
        el('x-img').src = 'http://savings.gov.pk/wp-content/plugins/ldd-directory-lite/public/images/noimage.png';
        el('atitle').value = "";
        el('abody').value = "";
        el('imgurl').value = "";
        el('publish-div').style.display = 'none';
        renderNews()
      })
  }


  const renderNews = () => {
    axios.get('https://sagipinas.herokuapp.com/events')
      .then(res => {
        if (res.data) {
          el('news-table').innerHTML = '';
          res.data.forEach(news => {
            if (document.contains(document.getElementById('news-table'))) {
              el('news-table').innerHTML += `
              <tr>
              <td data-label="Image"><img src="${news.image_url}" alt="prev" class="prev-img" /></td>
              <td data-label="Title">${news.title}</td>
              <td data-label="Body">${news.subtitle}</td>
            </tr>
           `
            }
          })
        }
      })
  }


  useEffect(() => {
    renderNews();
  })


  return (
    <div className="news-page">
      <h1><i className="fa fa-file-text-o"></i> News</h1>
      <div className="divider"></div>
      <p className="sub-title">You can publish small articles or annoucements here.</p>



      <div className="publish">
        <Row>
          <Col md={5}>
            <img className="article-image" id='x-img' alt="img" src="http://savings.gov.pk/wp-content/plugins/ldd-directory-lite/public/images/noimage.png" />
          </Col>
          <Col md={7}>
            <div className="news-form">
              <span><i className="fa fa-image"></i> Image Link</span><br></br>
              <input type="text" id="imgurl" placeholder="Image URL" onChange={() => {
                checkifPublishable();
              }} /><br />
              <span><i className="fa fa-list"></i> Article Title</span><br></br>
              <input type="text" id="atitle" placeholder="Title" onChange={() => {
                checkifPublishable();
              }} /><br />
              <span><i className="fa fa-list"></i> Body</span><br></br>
              <input type="text" id="abody" placeholder="Article Body" onChange={() => {
                checkifPublishable();
              }} /><br />
            </div>
          </Col>
        </Row>
      </div>




      <div className="publish-button animated bounceIn" id="publish-div">
        <center>
          <img src={rocket} alt="rocket" />
          <p>All set! it seems that your all good to publish this post!</p>
          <button onClick={() => {
            publishPost();
          }}><i className="fa fa-file-text-o"></i> Publish Post</button>
        </center>
      </div>



      <div className="table-delta">



        <input type="text" className="search-bar news" id="search1" placeholder="Search Articles" onKeyUp={() => {
          searchNews();
        }} />

        <table>
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
            </tr>
          </thead>
          <tbody id='news-table'>
          </tbody>
        </table>

      </div>



    </div>


  )
}

export default News