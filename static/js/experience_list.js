$(document).ready(function() {
    $('.search-field').select2();
});

$(".search-field").select2({
    width: 'resolve', // need to override the changed default
    placeholder: "Select a tag"
});

$('.search-field').on('select2:select', function (e) {
    $(this).closest('form').submit();
});