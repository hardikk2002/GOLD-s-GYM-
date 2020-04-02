window.onload = function(){
	const nextBtn = document.querySelector('.next');
	const prevBtn = document.querySelector('.prev');
	const slideIndicators = document.querySelector('.slide-indicator').getElementsByTagName('input');

	// adding event listener
	nextBtn.addEventListener("click",function(){
		nextSlide();
	});
	prevBtn.addEventListener("click",function(){
		prevSlide();
	});
	for(let i=0; i<slideIndicators.length; i++){
		slideIndicators[i].addEventListener("click",function(e){
			slideIndicator(this,i);
		});
	}
	// connecting html files using object
	document.querySelector('.package-output').innerHTML='<object class="package-object" type="text/html" data="../../CSE326%20project/11901731/pages/package1.html" ></object>' ;
		const packages = document.querySelectorAll('.package');
		for(let i=0; i<packages.length; i++){
			packages[i].addEventListener("click",function(e){
				const packageActive = document.querySelector('.packageslinks ul li.active');
				packageActive.classList.remove('active');
				e.target.parentElement.classList.add('active');
				document.querySelector('.package-output').innerHTML='<object class="package-object" type="text/html" data="../../CSE326%20project/11901731/pages/'+e.target.getAttribute('data-redirect')+'" ></object>' ;
      			let object = document.querySelector('.package-object');
		      	// console.log(object);
		      	// getting the inner height of the html file from the local storage for easyness (new concept by using combination of two concepts -- Raman Sharma)
		      	var x = localStorage.getItem("packageoneheight");
				if(x != 0){
					object.height = x ;
				}else{
					object.height =0;
				}
			});
		}
      
      	let object = document.querySelector('.package-object');
      	// console.log(object);
      	// getting the inner height of the html file from the local storage for easyness (new concept by using combination of two concepts -- Raman Sharma)
      	var x = localStorage.getItem("packageoneheight");
		if(x != 0){
			object.height = x * 1.03;
		}else{
			object.height =0;
		}
		// onscroll events
	window.onscroll = function(){
		const topNavbar = document.querySelector('.nav-top');
		let offsetY =  document.documentElement.scrollTop;
		  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		  let scrolled = (offsetY / height) * 100;
		if(scrolled > 5){
			topNavbar.style.background = "rgba(0, 0, 0, 0.99)";
		} else{
			topNavbar.style.background = "transparent";
		}
			const packageslinks = document.querySelector('.packageslinks');
		if(scrolled >= 33.378075379919956/100 && scrolled<95){
			packageslinks.style.left = "0";
		}else{
			packageslinks.style.left = "-100%";
		}
	}
		// getting the scrolled value
		const topNavbar = document.querySelector('.nav-top');
		let offsetY =  document.documentElement.scrollTop;
		  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		  let scrolled = (offsetY / height) * 100;
		const packageslinks = document.querySelector('.packageslinks');
		if(scrolled >= (33.378075379919956)/100){
			packageslinks.style.left = "0%";
		}else{
			packageslinks.style.left = "-100%";
		}
}
// slide number
let slideNo = 0;
// next slide arrow function(ES6)
const nextSlide = () =>{
	const slider = document.querySelector('.slides');
	const slides = slider.getElementsByClassName('slide');
	const slideActive = slider.querySelector('.slide.active');
	const slideIndicators = document.querySelector('.slide-indicator').getElementsByTagName('input');

	// logic
	slideActive.classList.remove('active');
	slideNo = (slideNo + 1) % slides.length; //vanilla javascript
	slider.style.marginLeft ="-"+slideNo+"00%";
	for(let i=0; i<slideIndicators.length; i++){
		slideIndicators[i].checked = false;
	}
	slideIndicators[slideNo].checked = true;
	slides[slideNo].classList.add('active');
};
// prev slide arrow function(ES6)
const prevSlide = () =>{
	const slider = document.querySelector('.slides');
	const slides = slider.getElementsByClassName('slide');
	const slideActive = slider.querySelector('.slide.active');
	const slideIndicators = document.querySelector('.slide-indicator').getElementsByTagName('input');

	// logic
	slideActive.classList.remove('active');
	slideNo = (slideNo - 1 + slides.length) % slides.length; //vanilla javascript
	slider.style.marginLeft ="-"+slideNo+"00%";
	for(let i=0; i<slideIndicators.length; i++){
		slideIndicators[i].checked = false;
	}
	slideIndicators[slideNo].checked = true;
	slides[slideNo].classList.add('active');
};
// slide indicators click function
const slideIndicator = (e,i) =>{
	const slider = document.querySelector('.slides');
	const slides = slider.getElementsByClassName('slide');
	const slideActive = slider.querySelector('.slide.active');

	// logic
	slideActive.classList.remove('active');
	this.checked = true;
	slideNo = i;
	slider.style.marginLeft ="-"+slideNo+"00%";
	slides[slideNo].classList.add('active');
};
