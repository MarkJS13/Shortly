import brand from '/src/assets/images/icon-brand-recognition.svg'


const Banners = () => {
    return(
        <div className="banners">
            <div className="banner-text">
                <h1> Advanced Statistics </h1>
                <p>Track how your links are performing across the web with our <span> advanced statistics dashboard. </span>  </p>
            </div>

            <div className="cards">
                <div className="card one">
                    <div className="brand-logo">
                    </div>
                    <h3> Brand Recognition </h3>
                    <p>  Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>

                <div className="card two">
                    <div className="detailed-logo">
                    </div>
                    <h3> Detailed Records </h3>
                    <p> Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                    </p>
                </div>

                <div className="card three">
                    <div className="custom-logo">
                        
                    </div>
                    <h3> Fully Customizable </h3>
                    <p> Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                    </p>
                </div>

                <hr />
            </div>
        </div>
    )
}

export default Banners;
