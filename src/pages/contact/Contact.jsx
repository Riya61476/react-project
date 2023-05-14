import "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Contact(){
  return (
    <section class="form-section">
        <div class="about-container">
            <div class="form-wrapper">
                <div class="company-address">
                    <div class="address-group">
                      <FontAwesomeIcon className="contactIcon" icon={faLocationDot} />
                      <h2 class="text-gray">location</h2>
                      <p>161, Opp Pillar No. 356, Kapil Vihar, Pitampura</p>
                    </div>
                    <div class="address-group">
                      <FontAwesomeIcon className="contactIcon" icon={faEnvelope} />
                      <h2 class="text-gray">Email</h2>
                      <p>blogReact@gmail.com</p>
                    </div>
                    <div class="address-group">
                      <FontAwesomeIcon className="contactIcon" icon={faPhone} />
                      <h2 class="text-gray">Call</h2>
                      <p>+09810119422</p>
                    </div>
                    <img src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt="" />
                </div>
                <form action="" class="form">
                    <h1 class="text-black">Contact us</h1>
                    <p class="text-gray">Let us know your questions, suggestions and concerns by filling out the contect form below.</p>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" required />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="text" id="phone" required />
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea name="message" id="message"></textarea>
                    </div>
                    <button type="submit" class="form-btn">Submit</button>
                </form>
            </div>
        </div>
    </section>
  );
}