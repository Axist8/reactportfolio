import { images } from '../../assets/images';

export const Contact = () => {
    return (
        <section id="contact">
        <div className="content-wrap">
          <div className="contact">
            <div>
              <h3>let's connect</h3>
            </div>
            <div className="thirds">
              <div className="third">
                <h4>Hire me</h4>
                <p>(707)888-8614<br />code@axeljorgensen.info</p>
              </div>
              <div className="third">
                <div>
                  <h4>Follow me</h4>
                </div>
                <div className="social-icons">
                  <div className="social">
                    <figure>
                      <a href="https://github.com/Axist8" target="_blank"><img src={images.github} alt="github" /></a>
                    </figure>
                  </div>
                  <div className="social">
                    <figure>
                      <a href="https://www.linkedin.com/in/c-axel-jorgensen-37521bb1/" target="_blank"><img src={images.linkedin} alt="linked in" /></a>
                    </figure>
                  </div>
                  <div className="social">
                    <figure>
                      <a href="https://www.instagram.com/axistcoding/" target="_blank"><img src={images.instagram} alt="instagram" /></a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="third">
                <h4>Meet me</h4>
                <p>Bay Area, CA<br />Let's connect online or IRL!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}