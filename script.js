/**
 * Javascript functionality for DokuWiki template Sandy
 *
 * @author Michael Klier <chi@chimeric.de>
 */
addInitEvent(function() {
  var toc = $('toc__inside');
  var obj = $('toc__toggle');
  if(toc) {
    toc.style.display   = 'none';
  }
});
