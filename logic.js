var err = "";
var required = "";

$(function() {
    function isEmail(mail) {
        var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]{2,4}$/;
        return regex.test(mail);
    }
function isValidPassword(password) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
}
 function isValidPhoneNumber(phone) {
        var regex = /^[0-9]{10}$/;
        return regex.test(phone);
 }
    $("#button").on("click", function() {
        err = "";
        required = "";

        if ($("#email").val() == "") {
            required += "Email is required.<br><br>";
        } else if (!isEmail($("#email").val())) {
            err += "Invalid email address.<br><br>";
        }

        if ($("#num").val() == "") {
            required += "Phone number is required.<br><br>";
        } else if (!isValidPhoneNumber($("#num").val())) {
            err += "Phone number must be exactly 10 digits.<br><br>";
        }

        if ($("#pass").val() == "") {
            required += "Password is required.<br><br>";
        } else if (!isValidPassword($("#pass").val())) {
            err += "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character<br><br>";
        }

        if ($("#pass").val() !== $("#conpass").val()) {
            err += "Passwords do not match.<br><br>";
        }

        if (err == "" && required == "") {
            $("#errors").html("You are registered.").css("color","green");
        } else {
            $("#errors").html(err + required);
        }
    });
});
