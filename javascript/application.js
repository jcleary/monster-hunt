function getUrlVars()
{
  let vars = [], hash;
  let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(let i = 0; i < hashes.length; i++)
  {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

function showMonsters(perRow = 2) {
  let content = '';
  let colClass = 'col-' + (12 / perRow);

  for (let i = 0; i < 12; i++) {
    if ((i % perRow) == 0) {
      content += '<div class="row">';
    }

    content += '\
      <div class="' + colClass + '"> \
        <div class="card" > \
          <div id="monster-' + (i+1) + '-lock" class="locked"></div> \
          <img src="images/mon-' + (i+1) + '.jpeg" class="card-img-top monster-img"> \
          <div class="card-body text-center"> \
            <p class="card-text">Monster ' + (i+1) + '</p> \
            <div id="monster-' + (i+1) + '-card-body" class="text-center"></div> \
          </div> \
        </div> \
      </div> \
    ';

    if ((i % perRow) == (perRow - 1)) {
      content += '</div>';
    }
  }
  $('#monster-list').append(content);
}
