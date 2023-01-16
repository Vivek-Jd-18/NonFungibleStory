import React, { useEffect, useState } from "react";
import Index from "../../Index";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { providerOptions } from "../../../utils/providerOptions";
function Home() {
  const [accountAddress, setAccountAddress] = useState("");
  const [connect, setConnect] = useState("Connect Wallet");

  const walletConnect = async () => {
    const web3Modal = new Web3Modal({
      network: "bnbMainet",
      theme: "dark",
      cacheProvider: true,
      providerOptions,
    });

    var provider = await web3Modal.connect();
    var etherprovider = new ethers.providers.Web3Provider(provider);

    await etherprovider.getSigner().getAddress();
    await provider.send("eth_requestAccounts");
    // Asking if metamask is already present or not
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        setAccountAddress(res[0]);
      });
    } else {
      alert("install metamask extension!!");
    }
  };

  useEffect(() => {
    setConnect(
      `${accountAddress?.slice(0, 5)}...${accountAddress.slice(
        accountAddress.length - 4
      )}`
    );
  }, [accountAddress]);

  return (
    <>
      <div className="non-hero-bg">
        <Index.Header />
        <section className="hero-section">
          <div className="container">
            <div className="hero-row">
              <div className="col-50">
                <video
                  className="hero-iframe"
                  src={Index.homeVideo}
                  title="YouTube video player"
                  frameBorder="0"
                  muted 
                  autoPlay='true'
                  loop
                  controls
                  // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  // controls={true}
                  // autoplay={true}
                ></video>
            
              </div>
              <div className="col-50">
                <div className="hero-text-box">
                  <p className="hero-text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo.
                  </p>
                  <button
                    className="primary-btn"
                    onClick={() => walletConnect()}
                  >
                    {accountAddress ? connect : "Connect Wallet"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Index.Footer />
      </div>
    </>
  );
}
export default Home;
