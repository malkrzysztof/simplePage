$("#about").on('click', function(){
	$("#about").addClass("clicked")
	$("#services, #clients, #contact").removeClass("clicked")
	$("#aboutContainer").removeClass("d-none").addClass("active")
	$("#servicesContainer, #clientsContainer, #contactContainer").removeClass("active").addClass("d-none")
});

$("#services").on('click', function(){
	$("#services").addClass("clicked")
	$("#about, #clients, #contact").removeClass("clicked")
	$("#servicesContainer").removeClass("d-none").addClass("active")
	$("#aboutContainer, #clientsContainer, #contactContainer").removeClass("active").addClass("d-none")
});

$("#clients").on('click', function(){
	$("#clients").addClass("clicked")
	$("#about, #services, #contact").removeClass("clicked")
	$("#clientsContainer").removeClass("d-none").addClass("active")
	$("#servicesContainer, #aboutContainer, #contactContainer").removeClass("active").addClass("d-none")	
});

$("#contact").on('click', function(){
	$("#contact").addClass("clicked")
	$("#about, #services, #clients").removeClass("clicked")
	$("#contactContainer").removeClass("d-none").addClass("active")
	$("#clientsContainer, #servicesContainer, #aboutContainer").removeClass("active").addClass("d-none")
});