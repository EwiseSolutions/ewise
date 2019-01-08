// Build Layouts
jQuery(document.getElementById("mainNavbar")).load("./assets/widgets/layouts/html/common/nav.html", function () {
    commonBuildUtil.activateMainNav("ul#mainNav", "home");
});
jQuery(document.getElementById("mainSlider")).load("./assets/widgets/layouts/html/home/mainSlider.html");
jQuery(document.getElementById("mainFeaturesBlock")).load("./assets/widgets/layouts/html/home/mainFeatures.html");
jQuery(document.getElementById("mainCoursesBlock")).load("./assets/widgets/layouts/html/home/mainCourses.html");
jQuery(document.getElementById("mainFooterSection")).load("./assets/widgets/layouts/html/common/footer.html");