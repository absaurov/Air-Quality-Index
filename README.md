A web-based AQI management system with a user registration form, styled using Tailwind CSS. It uses JavaScript for client-side validation, PHP for form data processing, and a clean responsive layout for displaying AQI information.

## This project was developed as a collaborative effort by a group of two members. Each member contributed to different aspects of the system, including frontend design, backend development, API integration, and overall functionality. Teamwork and coordination played a key role in successfully building the AQI Monitoring System.


### 📦 `index.html` (AQI Registration Page)

* A **responsive web page** using **Tailwind CSS** for styling.
* Contains:

  * A **header** with logo and title *“AQI Home Page”*
  * A **registration form** for users to enter:

    * Full name
    * Email
    * Password & Confirm Password
    * Date of Birth
    * Gender (Radio buttons)
    * Country (Dropdown)
    * Terms & Conditions agreement checkbox
  * Two main sections:

    * Left panel with the form
    * Right panel with an AQI information message
* Styled layout using nested `div` structures like:

  * `.outer`
  * `.inner1`
  * `.inner2`
  * `.lastinner1`
  * `.lastinner2`

---

### 📦 `script` (inside HTML)

* **Client-side form validation** using plain JavaScript:

  * Listens for form `submit` event.
  * Prevents submission if:

    * Required fields are empty
    * Email format is invalid
    * Passwords don’t match or are too short
    * Date of birth is in the future
    * Gender and country aren’t selected
    * Terms and conditions aren’t agreed to
  * Displays error messages dynamically next to form fields.

* Simple **email format validation** using a regular expression.

* A **terms and conditions popup modal system** is referenced (though modal HTML wasn’t visible).
---
### 📦 1️⃣ `process.php`

* This PHP script handles **form data submitted via POST** from the AQI registration page.
* It retrieves user inputs like **name, email, password, gender, country**, and other form details.
* The script performs **basic input validation** (like checking if fields are empty) and sanitizes the data to prevent malicious input.
* It stores this submitted form data in variables and could be extended to save it into a database or display it back to the user.

---

### 📦 2️⃣ `request.php`

* This PHP file acts as a **server-side handler for API or AJAX requests** (though details are limited since it mostly handles incoming data).
* It likely receives AQI-related queries or form submissions and processes them, though in this version it just echoes a simple test response — probably meant for future expansion.

---

### 📦 3️⃣ `styles.css`

* This CSS stylesheet defines the **styling rules for your Air Quality Index (AQI) web app interface**.
* It styles the layout containers like `.outer`, `.inner1`, `.inner2`, and `.lastinner1` for organized placement of registration forms and AQI data displays.
* It applies consistent **color schemes** (teals and indigos) for backgrounds and tables.
* The `.aqi-table` style sets up a **styled, zebra-striped table layout** to display air quality readings with alternating row colors for clarity.
* Additional rules set up the **form inputs, error messages, body text, and outer card-like container styling**.

---

## 📌 **Overall Purpose**

The project appears to be a **web-based Air Quality Index (AQI) management system** where:

* Users can **register through a styled form**
* Data is processed using `process.php`
* Future data requests (likely AQI lookups) would be handled via `request.php`
* The layout and visual presentation are handled by `styles.css`, giving the application a clean, responsive, and user-friendly interface.
* User lands on the AQI registration page
* Fills out the form
* JavaScript validates the form before submission
* If valid — sends data to `process.php`
* `styles.css` defines the UI layout and appearance
* `request.php` would later handle dynamic data requests (like AQI updates)



