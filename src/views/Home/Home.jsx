import React from 'react'
import Typed from 'react-typed'
import logo from '../../assets/img/logo.png';
import app1 from '../../assets/img/app1.png';
import app2 from '../../assets/img/app2.png';
// import angatio from '../../assets/img/angat.png';
import ReactTooltip from 'react-tooltip'


function Home(props) {
  return (
    <div className="content-container">
      <div className="gradient-half">
        <div className="logo-banner p-5">
          <h4><img src={logo} className="logo" alt="sagip-logo" />
            Sagi<span>Pin</span>as
        </h4>
        </div>
        <div className="page">
          <div className="row my-2">

            <div className="col-md-5 text-white">
              <h1>
                A disaster risk response platform for{' '}
                <Typed
                  loop
                  typeSpeed={100}
                  backSpeed={50}
                  smartBackspace={false}
                  strings={['a safer country.', 'a safer future.', 'everyone.']}
                  className="typed-text"
                />
              </h1>
              <p><span className="text-warning">SagiPinas 1.0</span> is under development.</p>
              <button className="btn-hover color-1 join-btn" onClick={() => {
                document.body.scrollIntoView({ behavior: 'smooth', block: 'end' })
              }}><i className="fa fa-hashtag mr-1"></i> TALK TO US</button>
            </div>
            <div className="col-md-6">
              <div className="preview">
                <img src={app1} className="app fade-in-bottom img-fluid" alt="app" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="row mt-5 mx-5">
        <div className="col-md-5 px-5">
          <h2>Work towards resilience.</h2>
          <div className="divider"></div>
          <p className="text-muted">
            Because in an event of a disaster, we believe that having the <b>smallest</b> chance of getting
            help is better than having no chance at all.
          </p>
        </div>
      </div>




      <a href="https://github.com/quadroloop/sagipinas">
        <button className="btn-hover color-9 btn-learn">LEARN MORE</button>
      </a>



      <div className="mobile animated fade-in-bottom"></div>

      <div className="body-page">

        <div className="row mb-4">
          <div className="col-md-7 app-2">
            <img src={app2} className="app img-fluid" alt="img-app" />
          </div>
          <div className="col-md-4">
            <h2>About the Project</h2>
            <div className="divider"></div>
            <p className="text-muted">The project aims to take leverage of available technology in order to help victims of accidents
              and evironmental disasters to call out for help  without relying on full internet connection, which gives
              better chances of locating people who are in need of aid.
          </p>

            <p className="text-muted">
              This is initiated in response to the increasing number of environmental disasters occuring in the Philippines,
              causing hundred of casualties and putting hundreds of lives at risk.
          </p>

            {/* <p className="built-by animated fadeIn">BUILT BY:</p>
            <div className="contributors animated fadeIn">
              <a href="https://github.com/quadroloop" target="_blank" rel="noopener noreferrer"><img src="https://avatars0.githubusercontent.com/u/29462205?s=460&v=4" className="contributor-avatar" alt="avatar" data-tip="Bryce Narciso Mercines" /></a>
              <a href="https://github.com/brenfreeze" target="_blank" rel="noopener noreferrer"><img src="https://avatars0.githubusercontent.com/u/22174665?s=460&v=4" className="contributor-avatar" alt="avatar" data-tip="Bren Aviador" /></a>
              <a href="https://github.com/nardsqq" target="_blank" rel="noopener noreferrer"><img src="https://avatars3.githubusercontent.com/u/21337635?s=460&v=4" className="contributor-avatar" alt="avatar" data-tip="John Bernard Paragas" /></a>
            </div> */}

            <ReactTooltip />


          </div>
        </div>

      </div>

      <div className="mt-5 py-4">
        <center>
          {/* <h2>Supported by</h2>
          <div className="divider"></div>
          <p className="text-muted">This project is supported by the following companies and organizations.</p>
          <div className="supporters m-3">
            <a href="https://angat.io" target="_blank" rel="noopener noreferrer">
              <img src={angatio} alt="angat.io" className="brands" />
            </a>
          </div> */}
          {/* <div className="row my-5">
            <div className="col-md-3">
              <a href="https://angat.io" target="_blank" rel="noopener noreferrer">
                <img src={angatio} alt="angat.io" className="brands" />
              </a>
            </div>
          </div> */}
        </center>
      </div>

      <div className="talk-to-us px-5 mb-5 mt-5" id="talktous">
        <center>
          <h2><i className="fa fa-hashtag text-info mr-2"></i >Talk to us</h2>
          <div className="divider"></div>
          <p className="text-muted">
            If you are interested in contributing or simply have inquiries, simply email:
          </p>
          <div className="m-3">
            <div className="email-card">
              bryce.mercines@gmail.com
            </div>
          </div>
        </center>
      </div>


      <hr />
      <center>
        <p>Made with <i className="fa fa-heart text-danger mx-2 heartbeat"></i>
          <i className="fa fa-copyright mr-1"></i>
          {new Date().getFullYear()} SagiPinas
          </p>
      </center>









    </div>
  )
}

export default Home