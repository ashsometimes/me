import React, { Component } from 'react'

class Contact extends Component {
   constructor(props) {
      
      super(props);
      this.state = {
         email: "",
         name:"",
         subject:"",
         message:""
      };
      this.submitForm = this.submitForm.bind(this);

    }

    

    handleChange = (name) => (event) => {
      this.setState({[name]: event.target.value,
      error: ""})
  }

  submitForm(ev) {
   ev.preventDefault();
   const form = ev.target;
   const data = new FormData(form);
   const xhr = new XMLHttpRequest();
   xhr.open(form.method, form.action);
   xhr.setRequestHeader("Accept", "application/json");
   xhr.onreadystatechange = () => {
     if (xhr.readyState !== XMLHttpRequest.DONE) return;
     if (xhr.status === 200) {
       form.reset();
       this.setState({ status: "SUCCESS", 
                       email: "",
                       name:"",
                       subject:"",
                       message:""
                  });
     } else {
       this.setState({ status: "ERROR" });
     }
   };
   xhr.send(data);
 }
  

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form onSubmit={this.submitForm} action="https://formspree.io/xzbkpyyo" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" value={this.state.name} size="35" id="name" name="name" onChange={this.handleChange("name")} />
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" value={this.state.email} size="35" id="email" name="email" onChange={this.handleChange("email")}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" value={this.state.subject} size="35" id="subject" name="subject" onChange={this.handleChange("subject")}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="message" name="message" onChange={this.handleChange("message")} value={this.state.message}></textarea>
                  </div>

                  <div>
                     <button type="submit" className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>
            <div id="message-warning"> Error boy</div>
            {this.state.status==="SUCCESS"}?
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>:				   
           <div id="message-error">
                  <i className="fa fa-check"></i>Your message was could not be sent, please try again later<br />
				   </div>



            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>
         </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
