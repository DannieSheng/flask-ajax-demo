function calculateQTc() {
    var prolonged;
    var heartRate = parseInt(document.getElementById("hr").value);
    var qtInt = parseInt(document.getElementById("qt").value);
    var sex = document.getElementsByName("sex");
    var qtcResult = document.getElementById("qtc");
    var prolongedResult = document.getElementById("prolonged");
    var resultsContainer = document.getElementById("qtc-results");

    // being able to show the result
    resultsContainer.style.display = "block";

    // use a for loop to find the selected radio buttion
    for(var i=0; i<sex.length; i++) {
      if(sex[i].checked) var selectedSex = sex[i].value;
    }

    // actual calculation
    qtSeconds = qtInt / 1000; 
    rrInterval = (6000 / heartRate); 
    QTc = qtSeconds / Math.sqrt(rrInterval); 
    formatedQTc = Math.round((QTc * 1000) * 10, 0);
    qtcResult.innerHTML = formatedQTc;

    // check if prolonged (store in the prolonged status in a variable called prolonged)
    if((formatedQTc > 440 && selectedSex == 'm') || 
      (formatedQTc > 460 && selectedSex == 'f')) {
        prolongedResult.innerHTML = "This is a prolonged QT interval";
        prolonged = "Prolonged QT";
    }
    else{
      prolongedResult.innerHTML = "This is a normal QT interval";
      prolonged = "Normal QT";
    }

    // store the data we want to pass back to the server in an array
    var server_data = [
      {"QTc": formatedQTc},
      {"prolonged": prolonged},
      {"HR": heartRate},
      {"QT": qtInt},
      {"Sex": selectedSex}
    ];

    // create an ajax request
    $.ajax({
      type: "POST",
      url: "/process_qtc",
      data: JSON.stringify(server_data),
      contentType: "application/json",
      dataType: 'json' 
    });

    $.ajax({
      type: "POST",
      url: "/process_qtc",
      data: JSON.stringify(server_data),
      contentType: "application/json",
      dataType: 'json',
      success: function(result) {
        console.log("Result:");
        console.log(result);
      } 
    });
}

