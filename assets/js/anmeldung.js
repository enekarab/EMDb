function validateForm() {
      var alertMessage = document.getElementById("alert");
      alertMessage.innerHTML = "Das Konto wurde nicht gefunden!";
      return false;
  }

  function loginAsGuest() {
    window.location.href = "../../home.html";
  }

  function forgotPassword() {
      document.getElementById("loginForm").classList.add("hidden");
      var newPasswordForm = document.createElement("form");
      newPasswordForm.id = "forgotPasswordForm";
      newPasswordForm.innerHTML = `
          <div class="center-view">
              <h2>Neu Kennwort erstellen!</h2><br>
              <p>Geben Sie bitte Ihre E-Mail hier ein!</p>
              <input type="email" id="forgotEmail" name="email" required><br><br>
              <button type="submit" class="button button-primary">Neu Kennwort erstellen!</button>
              <button type="button" class="button button-secondary" onclick="cancelForgotPassword()">Abrechen!</button>
          </div>
      `;
      newPasswordForm.onsubmit = function(event) {
          event.preventDefault();
          var email = document.getElementById("forgotEmail").value;
   
          alert("Wir werden uns bald bei Ihnen über " + email + " melden!");
          
          newPasswordForm.parentElement.removeChild(newPasswordForm);
          document.getElementById("loginForm").classList.remove("hidden");
      };
      document.querySelector('.container').appendChild(newPasswordForm);
  }

  function cancelForgotPassword() {
      document.getElementById("forgotPasswordForm").parentElement.removeChild(document.getElementById("forgotPasswordForm"));
      document.getElementById("loginForm").classList.remove("hidden");
  }

  document.getElementById("registrationNotification").addEventListener("click", function(event) {
      event.preventDefault();
      alert("Aufgrund der großen Anzahl an Nutzern können wir derzeit keine Neuanmeldungen entgegennehmen.");
        alert("Bitte logen Sie sich als Gast oder mit Ihrem Profil, falls vorhanden, auf der Seite ein!");
    });