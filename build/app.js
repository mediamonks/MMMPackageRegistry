// All super simple, want to keep it vanilla js and compatible with most.
(function(document, window) {

    var container = document.querySelector('.packageList');

    // Old school XMLHttpRequest over fetch api for compatability.
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var object = JSON.parse(xhttp.responseText);

            // Nasty easy clear.
            container.innerHTML = '';

            object.packages.forEach(appendRow);

        } else if (this.readyState == 4) {

            // Nasty easy clear.
            container.innerHTML = '';

            var row = document.createElement('li');
            var header = document.createElement('h4');
            header.innerText = '⛔️ Could not load packages';
            row.appendChild(header);
            container.appendChild(row);
        }
    };

    xhttp.open('GET', 'collection.json', true);
    xhttp.send();

    function appendRow(object) {

        if (object.versions.length < 1) { return }

        var reference = object.versions[0];
        var manifests = Object.values(reference.manifests);

        if (manifests.length < 1) { return }

        var manifest = manifests[0];

        var row = document.createElement('li');

        var link = document.createElement('a');
        link.href = object.url;
        link.setAttribute('class', 'packageList--link');
        link.setAttribute('target', '_blank');

        var image = document.createElement('img');
        image.src = 'package.png';
        image.setAttribute('srcset', 'package@2x.png 2x');

        var header = document.createElement('h4');
        header.innerText = manifest.packageName + ' (' + reference.version + ')';

        link.appendChild(image);
        link.appendChild(header);

        var clear = document.createElement('div');
        clear.setAttribute('class', 'clear');

        row.appendChild(link);
        row.appendChild(clear);

        if (object.summary != null) {
            var description = document.createElement('p');
            description.innerText = object.summary;

            row.appendChild(description);
        }

        container.appendChild(row);
    }

})(document, window);

/*

<li>
    <a href="" class="packageList--link">
        <img src="package.png" srcset="package@2x.png 2x" />
        <h4>MMMTackKit (v0.5.1)</h4>
    </a>
    <div class="clear"></div>
    <p>Type-safe replacement for Auto Layout Visual Formatting Language</p>
</li>

*/
