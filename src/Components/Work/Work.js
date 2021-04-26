import { images } from "../../assets/images"

export const Work = () => {
    return (
        <section id="work">
        <div className="content-wrap">
          <div className="work">
            <div className="full">
              <h3>my portfolio</h3>
            </div>
            <div className="full">
              <div className="box">
                <figure className="example">
                  <a href="http://axeljorgensen.info/magic-eight-ball/index.html" target="_blank"><img src={images.m8b} alt="magic eight ball project thumbnail" /></a>
                </figure>
              </div>
              <div className="box">
                <h4>Magic Eight Ball</h4>
                <h5>Bringing HTML and CSS to life with JavaScript</h5>
                <p>Remember the classic toy the magic eight ball? It's possible to create a working virutal version of it using Javascript to give life to HTML and CSS with animation and interactive virtual spaces. Check it out!</p>
                <div class="gitbut">
                  <a href="https://github.com/Axist8/m8b" target="_blank" title="View the code on github ;)"><button class="sub">github</button></a>
                </div>
              </div>
            </div>
            <div className="full-rev">
              <div className="box">
                <h4>Unplugged</h4>
                <h5>Responsive Web Design</h5>
                <p>The unplugged website is both mobile first and fully responsive. It will look good on any device it's loaded on and will even scale every part of the page as it's resized in real time.</p>
                <div className="gitbut">
                  <a href="https://github.com/Axist8/Unplugged" target="_blank" title="View the code on github ;)"><button class="sub">github</button></a>
                </div>
              </div>
              <div className="box">
                <figure className="example">
                  <a href="http://axeljorgensen.info/unplugged/index.html" target="_blank"><img src={images.unplugged} alt="Unplugged project thumbnail" /></a>
                </figure>
              </div>
            </div>
            <div className="full">
              <div className="box">
                <figure className="example">
                  <a href="http://axeljorgensen.info/election-map-project/index.html" target="_blank"><img src={images.elecMap} alt="election map project thumbnail" /></a>
                </figure>
              </div>
              <div className="box">
                <h4>Election Map</h4>
                <h5>JavaScript & JQuery</h5>
                <p>This election map shows you just how interactive JavaScript can make a web page especially when using a JQuery library. This particular library allow the creation of an interactive map complete with changing colors and tables that fill in automatically as you hover over the states.</p>
                <div className="gitbut">
                  <a href="https://github.com/Axist8/election-map-project" target="_blank" title="View the code on github ;)"><button class="sub">github</button></a>
                </div>
              </div>
            </div>
            <div className="full-rev">
              <div className="box">
                <h4>Rogue Pickings Home Website</h4>
                <h5>HTML & CSS from Photoshop Design Comp</h5>
                <p>The Rogue Pickings home website illustrates a simple design composition that effectively markets goods and services and seamlessly captures the business's essence.</p>
                <div className="gitbut">
                  <a href="https://github.com/Axist8/rogue-again" target="_blank" title="View the code on github ;)"><button class="sub">github</button></a>
                </div>
              </div>
              <div className="box">
                <figure className="example">
                  <a href="http://axeljorgensen.info/rogue-pickings/index.html" target="_blank"><img src={images.rogue} alt="rogue pickings project thumbnail" /></a>
                </figure>
              </div>
            </div>
            <div className="full">
              <div className="box">
                <figure className="example">
                  <a href="http://axeljorgensen.info/jubilee-austen/index.html" target="_blank"><img src={images.jubilee} alt="austin jubilee project thumbnail" /></a>
                </figure>
              </div>
              <div className="box">
                <h4>Jubilee Austen Simple Portfolio</h4>
                <h5>HTML5 & CSS Website</h5>
                <p>In juxtaposition with my own portfolio this project portfolio shows how important design and aesthetic can be. Both pages have a similar layout, but portray completely unique themes.</p>
                <div className="gitbut">
                  <a href="https://github.com/Axist8/austin-jubilee" target="_blank" title="View the code on github ;)"><button class="sub">github</button></a>
                </div>
              </div>
            </div>
            <div className="full-rev">
              <div className="box">
                <h4>LOLCat</h4>
                <h5>JavaScript, HTML, and CSS</h5>
                <p>What would the internet be without cats? As you can see with this interactive clock you are getting a new lolcat depending on the time of day that you visit the site. Websites can be made fully modular and custom to what you need it for when you need it.</p>
                <div className="gitbut">
                  <a href="https://github.com/Axist8/lolcat" target="_blank" title="View the code on github ;)"><button class="sub">github</button></a>
                </div>
              </div>
              <div className="box">
                <figure className="example">
                  <a href="http://axeljorgensen.info/lol-cat/index.html" target="_blank"><img src={images.lolCat} alt="lol cat project thumbnail" /></a>
                </figure>
              </div>
            </div>
            <div className="full">
              <div className="box">
                <figure className="example">
                  <a href="http://axeljorgensen.info/recipe/index.html" target="_blank"><img src={images.recipe} alt="recipe project thumbnail" /></a>
                </figure>
              </div>
              <div className="box">
                <h4>Recipe Collection</h4>
                <h5>HTML & CSS Exercise</h5>
                <p>HTML & CSS websites are incredibly dynamic and can be made to fit your own needs. The possibilities are endless when designing web pages. Whatever you need, we can make it happen.</p>
                <div className="gitbut">
                  <a href="https://github.com/Axist8/recipe-collection" target="_blank" title="View the code on github ;)"><button class="sub">github</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}