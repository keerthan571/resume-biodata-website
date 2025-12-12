// Basic jQuery-based interactions
$(function(){
  // print button
  $('#printBtn').on('click', function(){ window.print(); });

  // download/resume hint
  $('#downloadResume').on('click', function(e){
    e.preventDefault();
    alert('Use your browser: Print → Save as PDF to generate a resume PDF.');
  });

  $('#contactMe').on('click', function(){
    alert('Email: your.email@example.com\nPhone: +91-XXXXXXXXXX');
  });

  // set copyright year
  $('#year,#year2').text(new Date().getFullYear());
});
