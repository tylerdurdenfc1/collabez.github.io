<!DOCTYPE html>
<html>
    <head>
        <title>collabnow</title>
        <link rel="stylesheet" href="styles.css">
        <link rel="icon" href="images/icon logo.png">

    <script src="jquery/jquery.js"></script>
    <script>
        $(function() {

            $('#btn1').html('Add your business');

        });

    </script>
    
    </head>
      
    <body>
        <header class="header2">
            <nav>
                <ul>
                    <li class="mobile"><a href="index.html">Home</a></li>
                    <li class="mobile"><a href="businesses.html">Businesses</a></li>
                    <li class="logo"><a href="index.html">collabnow logo</a></li>
                    <li class="desktop"><a href="index.html">Home</a></li>
                    <li class="desktop"><a href="businesses.html">Businesses</a></li>
                </ul>
            </nav>

        </header>

<!-- end of header --> 


<section class="flex-container">

        <section class="divider">
            <div></div>
        </section>   
    
        <section>
            <div>
                <div>   
                    <button id="btn1" class="open-popup">Add your business here</button>      
                </div>
                <div class="popup">
                    <div class="popup-overlay"></div>
                    <div class="main-popup">
                        <div class="popup-content">
                            <span class="close-popup">&times;</span> 
                            
                            
                            <section class="form">
                                <div class="container2">
                                  <form action="mail.php" method="POST" id="my-form">
                              
                                    <div class="form-group">
                                      <label  for="name"> Full Name</label>
                                      <input name="name" type="text" id="name">
                                    </div>

                                    <div class="form-group">
                                        <label  for="info"> Business info page*</label>
                                        <input name="info" type="link" id="info"> 
                                      </div>

                                    <div class="form-group">
                                        <label   for="contact">Contact (email and number*)</label>
                                        <textarea name="contact" type="text" id="contact" rows="2"></textarea>
                                      </div>
            
                                                    
                                    <div class="form-group">
                                      <label  for="task">Task required: <br> (Indicate incentive to 'experts' if any) </label>
                                      <textarea name="task" type="text" id="task" rows="10"></textarea>
                                    </div>

                                    <div> 
                                        * - optional
                                    </div>
                              
                                    <button type="submit">Submit</button>
                                  </form>

                                  <script>
                                    var form = document.POSTElementById('sheetdb-form');
                                    form.addEventListener("submit", e => {
                                      e.preventDefault();
                                      fetch(form.action, {
                                          method : "POST",
                                          body: new FormData(document.POSTElementById("sheetdb-form")),
                                      }).then(
                                          response => response.json()
                                      ).then((html) => {
                                        // you can put any JS code here
                                        alert('Success. Please  ')
                                      });
                                    });
                                  </script>

                                </div>
                                <div id="status"></div>
                              </section>

                        </div>
                    </div>
                </div>
            </div>
            <script src="./app.js"></script>
        </section>
       
        <section class="divider">
            <div></div>
        </section>

        <section class="flex-container info">
            <div>  
            </div>
        </section>

        <section class="flex-container info">
            <div>  
            </div>
        </section>

</section>

<!-- start of footer --> 

        <footer> 
            
            <div> ©2022 collabnow</div>
            <div><a href="index.html">Home</a></div>
            <div><a href="businesses.html">Businesses</a></div>
           
        </footer>
        
    </body>



</html>