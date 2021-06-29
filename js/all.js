$(document).ready(() =>{
	$('.burgerBtn').click((e) => {
        e.preventDefault();
        $('.navbar').toggleClass('burgerBtn-active');
    });

	$('.favorite').each((i, item)=>{
		$(item).click(e => {
			e.preventDefault();
            $(item).toggleClass('active');
		})
	})

	$('#toRegister').click(() => {
        window.location = 'register.html';
    })
});