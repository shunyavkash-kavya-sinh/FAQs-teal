$(document).ready(function () {
  $(".accordion-content").hide();
  $(".accordion-content").first().slideDown();
  $(".accordion-header").first().addClass("active");

  $(".accordion-header").click(function () {
    let content = $(this).next(".accordion-content");
    let blog = $(this).closest(".faq-blog");
    if (content.is(":visible")) {
      content.slideUp();
      $(this).removeClass("active");
      blog.removeClass("active");
    } else {
      $(".accordion-content").slideUp();
      $(".accordion-header").removeClass("active");
      $(".faq-blog").removeClass("active");
      content.slideDown();
      $(this).addClass("active");
      blog.addClass("active");
    }
  });

  //search bar
  const searchBar = document.getElementById("searchBar");
  const blogs = document.querySelectorAll(".faq-blog");
  const noData = document.getElementById("noData");

  searchBar.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }

    const value = searchBar.value.toLowerCase();
    let hasMatch = false;

    blogs.forEach((blog) => {
      if (blog.textContent.toLowerCase().includes(value)) {
        blog.style.display = "";
        hasMatch = true;
      } else {
        blog.style.display = "none";
      }
    });

    noData.style.display = hasMatch ? "none" : "block";
  });
});
