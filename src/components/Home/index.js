import './index.css'

const Home = () => (
  <div className="main-bg-container">
    <div className="card">
      <img
        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lgawchgfvcmasjqc3t0v"
        alt="company-logo"
        className="logo"
      />
      <h1 className="title">
        Let's <span className="blue-text">Innovate!</span>
      </h1>
      <h1 className="heading-text">
        How can you help Sunita Sharma (65+ years old) to live a healthier and
        better life?
      </h1>
      <div className="img-and-description-container">
        <img
          src="https://kratinmobile.com/css/images/hospice.jpg"
          alt="sunita"
          className="card-img"
        />
        <div className="description-container">
          <p>
            Identify one use case for elderly care (for the age group 65+) and
            create a <span className="green-text"> working prototype</span> to
            demonstrate your idea using technologies known to you.
          </p>
          <p className="efforts">Expected Efforts: 2-3 days</p>
        </div>
      </div>
      <p className="efforts">What we are looking for this in the activity?</p>
      <div className="footer-container">
        <div className="footer-card-container">
          <p className="footer-card-head">Innovation & ideation</p>

          <ul className="footer-items-container">
            <li className="footer-item">Original in idea</li>
            <li className="footer-item">Research skill</li>
            <li className="footer-item">Value outcome</li>
          </ul>
        </div>

        <div className="footer-card-container">
          <p className="footer-card-head">Coding skills</p>

          <ul className="footer-items-container">
            <li className="footer-item">Logic</li>
            <li className="footer-item">Rapid Prototype</li>
            <li className="footer-item">Coding practice</li>
          </ul>
        </div>
        <div className="footer-card-container">
          <p className="footer-card-head">Your magic touch</p>
          <ul className="footer-items-container">
            <li className="footer-item">
              Secrete ingredient for going towards expertise
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Home
