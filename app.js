function downloadInnerHtml(filename, elId, mimeType) {
    var elHtml = document.getElementById(elId).innerHTML;
    console.log(elHtml);
    var link = document.createElement('a');
    console.log(link);
    
    mimeType = mimeType || 'text/plain';

    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType  +  ';charset=utf-8,' + encodeURIComponent(elHtml));
    link.click(); 
    console.log(link);

}

var fileName =  'vip-list.txt'; // You can use the .txt extension if you want

downloadInnerHtml(fileName,'main');
downloadInnerHtml(fileName,'main');
downloadInnerHtml(fileName,'main');
downloadInnerHtml(fileName,'main');
downloadInnerHtml(fileName,'main');
downloadInnerHtml(fileName,'main');
downloadInnerHtml(fileName,'main');
downloadInnerHtml(fileName,'main');
downloadInnerHtml(fileName,'main');
downloadInnerHtml(fileName,'main');
downloadInnerHtml(fileName,'main');
downloadInnerHtml(fileName,'main');
downloadInnerHtml(fileName,'main');
downloadInnerHtml(fileName,'main');
downloadInnerHtml(fileName,'main');
downloadInnerHtml(fileName,'main');
downloadInnerHtml(fileName,'main');
