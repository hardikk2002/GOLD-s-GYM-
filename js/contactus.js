window.onload = function(){
	// getting the scrolled value
	const header = document.querySelector('.header');
	window.onscroll = function(){
		const topNavbar = document.querySelector('.nav-top');
		let scroll = window.scrollY;
		let offsetY =  document.documentElement.scrollTop;
		  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		  let scrolled = (offsetY / height) * 100;
		if(scrolled > 5){
			topNavbar.style.background = "rgba(0, 0, 0, 0.99)";
		} else{
			topNavbar.style.background = "transparent";
		}
		if(scroll > 50){
			header.style.backgroundPositionY = -scroll+'px';
		}else{
			header.style.backgroundPosition = 'center';
		}
	}
		const topNavbar = document.querySelector('.nav-top');
		let scroll = window.scrollY;
		let offsetY =  document.documentElement.scrollTop;
		  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		  let scrolled = (offsetY / height) * 100;
		if(scrolled > 5){
			topNavbar.style.background = "rgba(0, 0, 0, 0.99)";
		} else{
			topNavbar.style.background = "transparent";
		}


	// contact for validations
	const contactForm = document.querySelector('.contactForm');

	contactForm.addEventListener("submit",function(e){
		e.preventDefault();
		if(e.target.firstName.value == '' || e.target.lastName.value == '' || e.target.email.value == '' || e.target.subject.value == '' || e.target.message.value == ''){
			alert('please fill all the fields');
		}else{
			e.target.firstName.value == '';
			e.target.lastName.value == '' ;
			e.target.email.value == '';
			e.target.subject.value == '';
			e.target.message.value == '';
			alert('message sent successfully');
		}
	});
}