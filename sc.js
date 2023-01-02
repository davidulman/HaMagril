window.addEventListener("load", createFooter);
function createFooter() {
  var footer = document.createElement("footer");

  footer.innerHTML =
    ".כל הזכיות שמורות לאתר ״המגריל״ - אתר  המגריל לא מבטיח זכיה בלוטו ולא מקיים הגרלות, האתר מגריל מספרים רנדומלים בלבד";

  document.body.appendChild(footer);
}
