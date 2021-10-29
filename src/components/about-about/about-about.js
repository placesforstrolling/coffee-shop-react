import Beans from '../beans/beans';

import './about-about.scss';

const AboutAbout = () => {


    return (
        <section className="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <img src="/images/girl.jpg" alt="Girl drinking coffee" />
                    </div>
                    <div className="col-lg-4">
                        <h3>About our beans</h3>
                        <Beans black={true} />
                        <p>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br />
                            <br />
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.
                            <br />
                            As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </p>
                    </div>
                    <div className="col-lg-12">
                        <hr />
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default AboutAbout;