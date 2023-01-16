import React, { useEffect, useState } from "react";
import Index from "../../Index";


function NFTStory() {
  const [story, setStory] = useState([]);
  useEffect(() => {
    UseCase();
  }, []);
  const UseCase = () => {
    let UseCases = JSON.stringify({
      languageId: "607adac76f8fe5000c1e636d",
      toneId: "60572a639bdd4272b8fe358b",
      useCaseId: "60cdad891d63cb00138240d3",
      inputContexts: {
        STORY_IDEA_LABEL: "Blockchain nft marketplace",
      },
      variations: 1,
      userId: "1",
      format: "text",
      creativityLevel: "default",
    });
    Index.DataService.post(Index.Api.Ryte, UseCases).then((response) => {
      setStory(response.data.data[0].text);
    });
  };
  return (
    <>
      <div className="non-hero-bg">
        <div className="last-col">
          <Index.Link to={"/"}
            className="home-btn"
            style={{ display: "flex", justifyContent: "end", padding: "30px" }}
          >
            <img src={Index.svg.btnImg}></img>
          </Index.Link>

          <section className="hero-section">
            <div className="container">
              <div className="hero-row">
                <div className="col-50">
                  <img
                    className="hero-img"
                    src={Index.png.heroimg}
                    alt="hero-img"
                  ></img>
                </div>
                <div className="col-50">
                  <div className="hero-text-box">
                    <p className="hero-text">
                
                      {story}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Index.Footer />
        </div>{" "}
      </div>
    </>
  );
}

export default NFTStory;
