let resumeData = document.querySelector('.edit-resume')

let resumeView = document.querySelector('.display-resume')


resumeData?.addEventListener('submit', (e)=>{

e.preventDefault()


   let Name = (document.querySelector('.name') as HTMLInputElement).value
   let FName = (document.querySelector('.f_name') as HTMLInputElement).value
   let cnic = (document.querySelector('.cnic') as HTMLInputElement).value
   let email = (document.querySelector('.email') as HTMLInputElement).value
   let address = (document.querySelector('.address') as HTMLInputElement).value
   let educational = (document.querySelector('.educational') as HTMLInputElement).value
   let skills = (document.querySelector('.skills') as HTMLInputElement).value
   let experiance = (document.querySelector('#experiance') as HTMLInputElement).value
let about = (document.querySelector('.about') as HTMLInputElement).value

   let resumegen = `
   
   <h3>About me </h3>

   <p contenteditable="true">${about}</p>

<h3>APPLICANT INFORMATION </h3>

   <p contenteditable="true"><b>Name</b> : ${Name}  </p>

      <p contenteditable="true"><b> Father Name </b> : ${FName}  </p>

   <p contenteditable="true"><b>CNIC </b> : ${cnic}  </p>
      <p contenteditable="true"><b>Email </b> : ${email}  </p>
         <p contenteditable="true"><b>Address </b> : ${address}  </p>

<h3>EDUCATIONAL INFORMATION </h3>

            <p contenteditable="true"><b>Education </b> : ${educational}  </p>
               
            <h3>SKILLS</h3>

            <p contenteditable="true"><b> Skills </b> : ${skills}  </p>
            
            <h3>EXPERIENCE</h3>
            
            <p contenteditable="true"><b> Experience </b>: ${experiance}  </p>

                  `

if(resumeView){

   resumeView.innerHTML = resumegen;

}


});