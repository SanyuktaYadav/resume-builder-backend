module.exports = ({
  name,
  email,
  phone,
  linkedin,
  github,
  skills,
  exp1_org,
  exp1_pos,
  exp1_desc,
  exp1_dur,
  exp2_org,
  exp2_pos,
  exp2_desc,
  exp2_dur,
  proj1_title,
  proj1_link,
  proj1_desc,
  proj2_title,
  proj2_link,
  proj2_desc,
  edu1_school,
  edu1_year,
  edu1_qualification,
  edu1_desc,
  edu2_school,
  edu2_year,
  edu2_qualification,
  edu2_desc,
  extra_1,
  extra_2,
}) => {
  return `
    <!doctype html>
    <html>
      <head>
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
        <!-- Bootstrap core CSS -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
        <!-- Material Design Bootstrap -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">
        
        <style>
          body {
            font-family: 'Arial', sans-serif;
            color: #333;
            margin: 20px;
          }
          .header, .section-header {
            background-color: #0d47a1;
            color: white;
            padding: 10px;
            margin-bottom: 20px;
          }
          .header h1 {
            font-size: 2.5rem;
            margin: 0;
          }
          .section-header h3 {
            font-size: 1.75rem;
            margin: 0;
          }
          .content {
            margin-bottom: 20px;
          }
          .content p, .content ul {
            font-size: 1.2rem;
          }
          .content ul {
            padding-left: 20px;
          }
          .content ul li {
            margin-bottom: 10px;
          }
          .lead {
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="header text-center">
          ${name ? `<h1>${name}</h1>` : ""}
          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          ${linkedin ? `<p><strong>LinkedIn:</strong> ${linkedin}</p>` : ""}
          ${github ? `<p><strong>GitHub:</strong> ${github}</p>` : ""}
        </div>
        
        <div class="section-header">
          <h3>Skills</h3>
        </div>
        <div class="content">
          <p>${skills || "--"}</p>
        </div>

        <div class="section-header">
          <h3>Experience</h3>
        </div>
        <div class="content">
          ${
            exp1_org || exp1_pos || exp1_desc || exp1_dur
              ? `<p class="lead">${exp1_org || "--"}, ${exp1_pos || "--"} (${
                  exp1_dur || "--"
                })</p>
                 <p>${exp1_desc || "--"}</p>`
              : "<p>--</p>"
          }
          ${
            exp2_org || exp2_pos || exp2_desc || exp2_dur
              ? `<p class="lead">${exp2_org || "--"}, ${exp2_pos || "--"} (${
                  exp2_dur || "--"
                })</p>
                 <p>${exp2_desc || "--"}</p>`
              : "<p>--</p>"
          }
        </div>

        <div class="section-header">
          <h3>Projects</h3>
        </div>
        <div class="content">
          ${
            proj1_title || proj1_link || proj1_desc
              ? `<p class="lead">${proj1_title || "--"} (${
                  proj1_link || "--"
                })</p>
                 <p>${proj1_desc || "--"}</p>`
              : "<p>--</p>"
          }
          ${
            proj2_title || proj2_link || proj2_desc
              ? `<p class="lead">${proj2_title || "--"} (${
                  proj2_link || "--"
                })</p>
                 <p>${proj2_desc || "--"}</p>`
              : "<p>--</p>"
          }
        </div>

        <div class="section-header">
          <h3>Education</h3>
        </div>
        <div class="content">
          ${
            edu1_school || edu1_year || edu1_qualification || edu1_desc
              ? `<p class="lead">${edu1_school || "--"} (${
                  edu1_qualification || "--"
                }, ${edu1_year || "--"})</p>
                 <p>${edu1_desc || "--"}</p>`
              : "<p>--</p>"
          }
          ${
            edu2_school || edu2_year || edu2_qualification || edu2_desc
              ? `<p class="lead">${edu2_school || "--"} (${
                  edu2_qualification || "--"
                }, ${edu2_year || "--"})</p>
                 <p>${edu2_desc || "--"}</p>`
              : "<p>--</p>"
          }
        </div>

        <div class="section-header">
          <h3>Extra-Curriculars/Activities</h3>
        </div>
        <div class="content">
          <ul>
            ${
              extra_1
                ? `<li><p class="lead">Languages: ${extra_1}</p></li>`
                : ""
            }
            ${extra_2 ? `<li><p class="lead">Hobbies: ${extra_2}</p></li>` : ""}
            ${!extra_1 && !extra_2 ? "<li>--</li>" : ""}
          </ul>
        </div>
        
        <!-- JQuery -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- Bootstrap tooltips -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
        <!-- Bootstrap core JavaScript -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <!-- MDB core JavaScript -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>
      </body>
    </html>
  `;
};
