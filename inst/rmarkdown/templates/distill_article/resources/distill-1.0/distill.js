

window.document.addEventListener("DOMContentLoaded", function (event) {

  // replace citations with <dt-cite>
  $('.citation>a').each(function(i, val) {
    var href = $(this).attr('href');
    var key = href.replace('#ref-', '');
    var cite = $('<dt-cite></dt-cite>');
    cite.attr('key', key);
    $(this).parent().replaceWith(cite);
  });

  // replace footnotes with <dt-fn>
  $('.footnote-ref').each(function(i, val) {
    var href = $(this).attr('href');
    var id = href.replace('#', '');
    var fn = $('#' + id);
    var fn_p = $('#fn1>p');
    fn_p.find('.footnote-back').remove();
    var text = fn_p.text();
    var dtfn = $('<dt-fn></dt-fn>');
    dtfn.text(text);
    $(this).replaceWith(dtfn);
  });

});