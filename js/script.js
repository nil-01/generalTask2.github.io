
        
var count=1;
 // Get the modal
 var modal = $('#modalDialog');
 // Get the button that opens the modal
 var btn = $("#mbtn");
 // Get the <span> element that closes the modal
 var span = $(".close");
 // Save btn function
 $(document).on('click', '.remCF1', function () {
     $(this).parent().parent().remove();
     $('#myTable tbody tr').each(function (i) {
         $($(this).find('td')[0]).html(i + 1);
     });
     
 });

 $(document).ready(function () {
     
     // When the user clicks the button, open the modal 
     btn.on('click', function () {
         modal.show();
     });

     // When the user clicks on <span> (x), close the modal
     span.on('click', function () {
         modal.hide();
     });
     $('#save').on('click', function () {
     var dataTable = $("#myTable").DataTable();
     var name = $('#name').val();
     var age = $('#age').val();
     var designation = $('#designation').val();
     if (name != "" && age != "" && designation != "" && !(age<20) && !(age>100) && isNaN(name) && isNaN(designation)) {
         // $('#myTable tbody').append('<tr class="child"><td>' + count + '</td><td>' + name + '</td><td>' + age + '</td><td>' + designation + '</td><td><a href="javascript:void(0);" class="remCF1 btn btn-small btn-danger">Remove</a></td></tr>');
         dataTable.row.add( [
         count,
         name,
         age,
         designation,
          ] ).draw();
         count++;
         modal.hide();
     }
     else{
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Enter Valid Input And All field are mandatory and Age Limit 20 to 100",
          })
     }
 }); 
 });   

  