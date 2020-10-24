document.getElementById("form1").onsubmit=function() {
    number = parseInt(document.querySelector('input[name = "number"]:checked').value);
    science = parseInt(document.querySelector('input[name = "science"]:checked').value);
    business = parseInt(document.querySelector('input[name = "business"]:checked').value);
    language = parseInt(document.querySelector('input[name = "language"]:checked').value);
    socialS = parseInt(document.querySelector('input[name = "socialS"]:checked').value);
    math = parseInt(document.querySelector('input[name = "math"]:checked').value);
    read = parseInt(document.querySelector('input[name = "read"]:checked').value);
    skill = parseInt(document.querySelector('input[name = "skill"]:checked').value);
    conflict = parseInt(document.querySelector('input[name = "conflict"]:checked').value);
    body = parseInt(document.querySelector('input[name = "body"]:checked').value);

    
    result = number + science + business + language + socialS + math + read + skill + conflict + body;
    
 document.getElementById("grade").innerHTML = result;
  

 if (result >=1 && result<=10) {result2 = "من نتائجك ، فإن كلية الآداب هي التي تناسبك, تركز كلية الاداب على الجوانب الادبية في كل المواد والنظرات الفلسفية والمنطقية لكل مادة."};
 if (result >=11 && result<=19) {result2 = "من نتائجك, فان كلية العلوم الاجتماعية هي التي تناسبك , العلوم الاجتماعية هي فرع من فروع العلوم المتعلقة بالسلوك الانساني وتشمل جوانبها الاجتماعية والثقافية."};
 if (result >=20 && result<=31) {result2 = "من نتائجك, كلية العلوم الادارية هي التي تناسبك ,العلوم الإدارية هي إحدى العلوم التي تتبع التخصصات النظرية، والتي تقوم على دراسة الإدارة وكلّ احتياجاتها وأنواعه"};
 if (result >=32 && result<=40) {result2 = "من نتائجك, دراسة العلوم والرياضيات هي التي تناسبك, وقد تكون من التخصصات التالية: طب - هندسة - عمارة - والى اخره."};
 document.getElementById("grade2").innerHTML = result2; 
 
 
  
 
 

return false; // required to not refresh the page; just leave this here
} //this ends the submit function

