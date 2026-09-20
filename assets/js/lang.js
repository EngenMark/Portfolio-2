document.addEventListener("DOMContentLoaded", function() {
	const btn = document.querySelector(".lang-btn");
	const dropdown = document.querySelector(".lang-dropdown");

	if (btn && dropdown) {
		btn.addEventListener("click", function(e) {
			e.preventDefault();
			e.stopPropagation();
			dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
		});

		document.addEventListener("click", function() {
			dropdown.style.display = "none";
		});
	}
});
