const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("Name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email) {
    alert(`Thank you, ${name}! We look forward to reading your message.`);
    form.reset();
  } else {
    alert("Please fill out all required fields before submitting. Thanks!");
  }

  const textarea = document.getElementById("textarea");

  textarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });
});
