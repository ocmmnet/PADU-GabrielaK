// ---------------------VOCAB----------------------
function scrollToTopic(topicId) {
  var element = document.getElementById(topicId);
  element.scrollIntoView({ behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo(0, 0);
}
