function send_mail() {
  var e = jQuery("#name").val(),
    a = jQuery("#email").val(),
    s = jQuery("#subject").val(),
    l = jQuery("#message").val(),
    r = 0;
  if (
    ("" == e
      ? (jQuery("#name").addClass("invalid"),
        jQuery("#val_user_name").html("Your Name is Required"),
        (r = 1))
      : (jQuery("#name").removeClass("invalid"),
        jQuery("#val_user_name").html("")),
    "" == a
      ? (jQuery("#email").addClass("invalid"),
        jQuery("#val_user_email").html("Please Enter Email"),
        (r = 1))
      : a.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ? (jQuery("#email").removeClass("invalid"),
        jQuery("#val_user_email").html(""))
      : (jQuery("#email").addClass("invalid"),
        jQuery("#val_user_email").html("Please Enter Valid Email"),
        (r = 1)),
    "" == s
      ? (jQuery("#subject").addClass("invalid"),
        jQuery("#val_subject").html("Subject is Required"),
        (r = 1))
      : (jQuery("#subject").removeClass("invalid"),
        jQuery("#val_subject").html("")),
    "" == l
      ? (jQuery("#message").addClass("invalid"),
        jQuery("#val_message").html("Please Describe your thoughts"),
        (r = 1))
      : (jQuery("#message").removeClass("invalid"),
        jQuery("#val_message").html("")),
    1 == r)
  )
    return !1;
  var u = { name: e, email: a, subject: s, message: l };
  jQuery.ajax({
    type: "POST",
    crossOrigin: !0,
    url: "process_form.php",
    data: u,
    success: function(e) {
      "1" == e
        ? (jQuery("#suce_message").show(), jQuery("#contact-form")[0].reset())
        : jQuery("#err_message").show();
    },
  });
}
