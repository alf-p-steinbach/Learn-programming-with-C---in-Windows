'use strict';

document.write( "Script says:<br>" );

function invoke( f ) { return f(); }

function setReadOnly( obj, propertyName, aValue )
{
    Object.defineProperty( obj, propertyName, { value: aValue } );
}

const location_info = invoke( function()
{
    const gitpagesHostSuffix = ".github.io";

    let o = {};
    setReadOnly( o, 'alfa', 20 );
// const docUrl = new URL( 'https://alf-p-steinbach.github.io/Learn-programming-with-C---in-Windows/parts/chapter%2001/01.md' );
    setReadOnly( o, 'docUrl', new URL( location.href ) );
    document.write( 'docUrl = ' + o.docUrl + '<br>\n' );
    document.write( 'protocol = ' + o.docUrl.protocol + '<br>\n' );

    setReadOnly( o, 'docHost', o.docUrl.hostname );
    document.write( 'o.docHost = ' + o.docHost + '<br>\n' );
    document.write( 'o.path = `' + o.docUrl.pathname + '`<br>' );

    setReadOnly( o, 'docPathParts', o.docUrl.pathname.split( '/' ) );
    document.write( 'o.docPathParts = ' + o.docPathParts + '<br>\n' );

    setReadOnly( o, 'isGitPage', o.docHost.endsWith( gitpagesHostSuffix ) );
    document.write( 'o.isGitPage = ' + o.isGitPage + '<br>\n' );

    setReadOnly( o, 'gitAccount', (o.isGitPage
        ? o.docHost.substring( 0, o.docHost.length - gitpagesHostSuffix.length )  // E.g. 'alf-p-steinbach'.
        : null) );
    setReadOnly( o, 'srcHost', (o.isGitPage? "github.com/" + o.gitAccount : o.docHost) );
    setReadOnly( o, 'srcRepo', o.docPathParts[1] ); // E.g. 'Learn-programming-with-C---in-Windows'.
    setReadOnly( o, 'srcBranch', 'master' );
    document.write( 'o.gitAccount = `' + o.gitAccount + '`.<br>' );
    document.write( 'o.srcRepo = `' + o.srcRepo + '`.<br>' );
    return o;
} );

function sourceCodeUrl( urlString )
{
    let url = new URL( urlString );
    const x = location_info;
    if( x.isGitPage ) {
        url.hostname = x.srcHost;
        url.pathname =
            '/' + x.gitAccount +
            '/' + x.srcRepo +
            '/blob/' + x.srcBranch +
            '/' + x.docPathParts.slice( 2 ).join( '/' );
    }
    return url;
}

function sourceCodeUrlString( sourcePath )
{
    const x = location_info;
    let sourceUrl = 'file:' + encodeURI( sourcePath );
    return (x.gitAccount? sourceCodeUrl( sourceUrl ).toString() : sourceUrl);
}

const x = location_info;
document.write( '<p>Doc host = ' + x.docHost + '\n<p>Source host = ' + x.srcHost + '</p>' );
document.write( '<p>Path \'parts/chapter 01/code/hello.js.html\' as source code URL: ' + sourceCodeUrlString( 'parts/chapter 01/code/hello.js.html' ) + '</p>' );
