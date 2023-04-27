

let submit=document.querySelector(".submit");

submit.addEventListener('click',()=>{

    var output=document.querySelector(".output");
    console.log(output);
    let imageurl=document.querySelector("#card").value;
    var generatedurl=`https://drive.google.com/uc?export=view&id=${imageurl}`;
    
   


   //storing the data in objects getting from form
    const data={
        BatchCode: document.getElementById("bcode").value,
    
        RequirementCode: document.getElementById("reqcode").value,
        Location: document.getElementById("loc").value,
        Eligibility: document.getElementById("elg").value,
        skills: document.getElementById("skills").value,
        Interview: document.getElementById("DOI").value,
        HrDetails: document.getElementById("details").value

    };
    console.log(data);

    //Card Template
    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML=`
      
      <div class="RequirementContainer">Batch Code: ${data.BatchCode}</div>
      <div class="CodeContainer">Requirement Code: ${data.RequirementCode}</div>
      <div class="locContainer">Location: ${data.Location}</div>
      <div class="ElgContainer">Eligibility: ${data.Eligibility}</div>
      <div class="SkillContainer">Skills: ${data.skills}</div>
      <div class="DateContainer">Interview Date: ${data.Interview}</div>
      <div class="hrdetailsContainer">Hr contact details:${data.HrDetails}</div>
      
    `
    console.log(newlist);
    //adding the card one after the other
    output.appendChild(newlist);
   
    //clearing the input fields after submission
    let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
      });

})