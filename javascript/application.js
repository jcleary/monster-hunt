function getUrlVars()
{
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
};

function showMonsters() {
  let i = 0;
  let content = '';

  for (i = 1; i <= 12; i++) {
    if ((i % 2) == 1) {
      content += '<div class="row">';
    }

    content += '\
      <div class="col-6"> \
        <div class="card" > \
          <div id="monster-' + i + '-lock" class="locked"></div> \
          <img src="images/mon-' + i + '.jpeg" class="card-img-top monster-img"> \
          <div class="card-body"> \
            <p class="card-text">Monster ' + i + '</p> \
          </div> \
        </div> \
      </div> \
      ';
    if ((i % 2) == 0) {
      content += '</div>';
    }
  }
  $('#monster-list').append(content);
}
