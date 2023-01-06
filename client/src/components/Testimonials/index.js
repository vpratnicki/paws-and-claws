import React from "react";
import Avatar1 from "../../assets/images/avatar1.jpg";
import Avatar2 from "../../assets/images/avatar2.jpg";
import Avatar3 from "../../assets/images/avatar3.jpg";
import Avatar4 from "../../assets/images/avatar4.jpg";
import Avatar5 from "../../assets/images/avatar5.jpg";

function Testimonials() {
    const data = [
        { 
        avatar: Avatar1, 
        name: "The Leskos", 
        review: "Dana is the best! We will never get Winnie's nail clipped by anyone else. So convient and great rates." 
        },
        {
        avatar: Avatar5,
        name: "Yvonne Eve",
        review: "I was always nervous about trimming my cats nails, as they can be quite the monsters during the process. But Paws and Claws nail clipping service were so gentle and understanding with her, and made the whole process a breeze! My cats were relaxed and didn't seem to mind at all. I was also impressed with how precise and efficient Dana was – she trimmed my cat's nails perfectly, and even filed them down to prevent them from scratching my furniture. Overall, I had a great experience at this nail clipping service and will definitely be returning in the future."
        },
        {
        avatar: Avatar2,
        name: "Vanessa Pratnicki",
        review: "I absolutely hate clipping my cats nails! Evrytime I attempt to clip there nails they turn into demon cats from another reilm - even my sweet baby CHarles! Dana has been clipping my cats nails for years and I couldn't be happier. She is very professional and my cats love her. I highly recommend her."
        },
        {
        avatar: Avatar4,
        name: "Matti Jean",
        review: ""
        },
        {
        avatar: Avatar3,
        name: "Renae Greensfelder",
        review: ""
        }
    ];
    return (
        <section>
            <h5>Reviews from clients</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials__container">
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={Avatar1} alt="client avatar one" />
                    </div>
                    <h5 className="client__name">The Leskos</h5>
                    <small className="client__review">Dana is the best! We will never get Winnie's nail clipped by anyone else. So convient and great rates.</small>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={Avatar1} alt="client avatar one" />
                    </div>
                    <h5 className="client__name">The Leskos</h5>
                    <small className="client__review">Dana is the best! We will never get Winnie's nail clipped by anyone else. So convient and great rates.</small>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={Avatar1} alt="client avatar one" />
                    </div>
                    <h5 className="client__name">The Leskos</h5>
                    <small className="client__review">Dana is the best! We will never get Winnie's nail clipped by anyone else. So convient and great rates.</small>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={Avatar1} alt="client avatar one" />
                    </div>
                    <h5 className="client__name">The Leskos</h5>
                    <small className="client__review">Dana is the best! We will never get Winnie's nail clipped by anyone else. So convient and great rates.</small>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={Avatar1} alt="client avatar one" />
                    </div>
                    <h5 className="client__name">The Leskos</h5>
                    <small className="client__review">Dana is the best! We will never get Winnie's nail clipped by anyone else. So convient and great rates.</small>
                </article>
                
                
            </div>
        </section>
    );
}

export default Testimonials;