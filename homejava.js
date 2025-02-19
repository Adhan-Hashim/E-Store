<script>
    const stars = document.querySelectorAll(".star");
    const popup = document.getElementById("thank-you-popup");
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener("click", function() {
            selectedRating = this.getAttribute("data-value");
            stars.forEach(s => s.classList.remove("active"));
            this.classList.add("active");
        });
    });

    function submitReview() {
        if (selectedRating > 0) {
            popup.classList.add("show");
            setTimeout(() => popup.classList.remove("show"), 2000);
        } else {
            alert("Please select a rating before submitting!");
        }
    }
</script>