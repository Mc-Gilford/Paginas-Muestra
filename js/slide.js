document.addEventListener("DOMContentLoaded", () =>
{
    const slides = document.querySelectorAll(".project-slide");
    const buttons = document.querySelectorAll(".slide-thumbs button");

    let currentIndex = 0;

    function showSlide(index)
    {
        slides.forEach(slide =>
        {
            slide.classList.remove("active");
        });

        buttons.forEach(button =>
        {
            button.classList.remove("active");
        });

        slides[index].classList.add("active");
        buttons[index].classList.add("active");

        currentIndex = index;
    }

    buttons.forEach((button, index) =>
    {
        button.addEventListener("click", () =>
        {
            showSlide(index);
        });
    });

    setInterval(() =>
    {
        currentIndex++;

        if(currentIndex >= slides.length)
        {
            currentIndex = 0;
        }

        showSlide(currentIndex);

    }, 6000);
});
