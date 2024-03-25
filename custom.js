"use strict";
$(document).ready(function(){
$(function () {
	$('#example').DataTable();
	$('#example2').DataTable();
	$('#example3').DataTable();
	$('#example4').DataTable();
	$('#example5').DataTable();
	$('#example6').DataTable();
	$('#example7').DataTable();
	$('#example8').DataTable();
	$('#example9').DataTable();
	$('#example10').DataTable();
});

	
});
//  Add and delete Button
function BtnAdd() {
	var v = $("#TRow").clone().appendTo("#TBody");
	$(v).find("input").val('');
	$(v).removeClass(".d-none .d-sm-block");
}
function BtnDel(v) {
	$(v).parent().parent().remove();
}
// invoive Templates
function GenerateInvoice(){
	window.open("../InvoiceTemplate.html");
}
function printInvoice(){
	// window.open();
	window.focus();
    window.print();
}
$('a').click(function(){
	$('a.active').each(function(){
	  $(this).removeClass('active');
	});
	$(this).addClass('active');
  });
 
  






