// Animación dinámica al hacer clic en los botones de productos
document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.producto button').forEach(function(btn) {
		btn.addEventListener('click', function(e) {
			btn.classList.remove('btn-animate');
			void btn.offsetWidth;
			btn.classList.add('btn-animate');
		});
	});
});
// Animación dinámica al hacer clic en el botón de login
document.addEventListener('DOMContentLoaded', function() {
	const loginBtn = document.querySelector('.login-container button');
	if (loginBtn) {
		loginBtn.addEventListener('click', function(e) {
			loginBtn.classList.remove('btn-animate');
			void loginBtn.offsetWidth; // Reinicia la animación
			loginBtn.classList.add('btn-animate');
		});
	}
});