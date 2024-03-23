// ======== E-MAIL JS =======

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

    const sendEmail =(e)=>{
       e.preventDefault()
                        //service ID ,templateID, #form ,public key
       emailjs.sendForm('service_2a1mmo1','template_35djnyu','#contact-form','dQ1ogvW6-HI863avZ')
        .then(()=>{
        //show Sent Message
        contactMessage.textContent = 'Message sent Successfully ✅'
        
        //remove meassage After five seconds

        setTimeout(()=>{
            contactMessage.textContent =''

        },5000)

        contactFrom.reset() 
       },()=>{
        contactMessage.textContent='Message not sent.Error⚠️'
       })

    }

contactForm.addEventListener('submit',sendEmail)


// service_2a1mmo1