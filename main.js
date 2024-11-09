var resumeData = document.querySelector('.edit-resume');
var resumeView = document.querySelector('.display-resume');
resumeData === null || resumeData === void 0 ? void 0 : resumeData.addEventListener('submit', function (e) {
    e.preventDefault();
    var Name = document.querySelector('.name').value;
    var FName = document.querySelector('.f_name').value;
    var cnic = document.querySelector('.cnic').value;
    var email = document.querySelector('.email').value;
    var address = document.querySelector('.address').value;
    var educational = document.querySelector('.educational').value;
    var skills = document.querySelector('.skills').value;
    var experiance = document.querySelector('#experiance').value;
    var about = document.querySelector('.about').value;
    var resumegen = "\n   \n   <h3>About me </h3>\n\n   <p contenteditable=\"true\">".concat(about, "</p>\n\n<h3>APPLICANT INFORMATION </h3>\n\n   <p contenteditable=\"true\"><b>Name</b> : ").concat(Name, "  </p>\n\n      <p contenteditable=\"true\"><b> Father Name </b> : ").concat(FName, "  </p>\n\n   <p contenteditable=\"true\"><b>CNIC </b> : ").concat(cnic, "  </p>\n      <p contenteditable=\"true\"><b>Email </b> : ").concat(email, "  </p>\n         <p contenteditable=\"true\"><b>Address </b> : ").concat(address, "  </p>\n\n<h3>EDUCATIONAL INFORMATION </h3>\n\n            <p contenteditable=\"true\"><b>Education </b> : ").concat(educational, "  </p>\n               \n            <h3>SKILLS</h3>\n\n            <p contenteditable=\"true\"><b> Skills </b> : ").concat(skills, "  </p>\n            \n            <h3>EXPERIENCE</h3>\n            \n            <p contenteditable=\"true\"><b> Experience </b>: ").concat(experiance, "  </p>\n\n                  ");
    if (resumeView) {
        resumeView.innerHTML = resumegen;
    }
});
