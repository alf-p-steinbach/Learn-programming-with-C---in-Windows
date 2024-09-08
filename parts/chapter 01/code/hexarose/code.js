"use strict"
function $( selector )  { return document.querySelector( selector ); }
function invoke( f )    { return f(); }

class Position
{
    x = 0;  y = 0;
    constructor( _x = 0, _y = 0 )   { this.x = _x; this.y = _y; }
    plus( other )                   { return new Position( this.x + other.x, this.y + other.y ); }
    scaledBy( c )                   { return new Position( c*this.x, c*this.y ); }
}

const canvasElement     = $( 'canvas' );        // Assumes there is a single `<canvas>` element.
const width             = canvasElement.width;
const height            = canvasElement.height;
const canvasSurface     = canvasElement.getContext( '2d' );

const n_points      = 6;
const fullCircle    = 2*Math.PI;                // 360 degrees.
const sixth         = fullCircle/n_points;      // 60 degrees.
const center        = new Position( width/2, height/2 );
const radius        = Math.min( center.x, center.y );
const points        = invoke( () =>
{
    let result = new Array( n_points );
    for( let i = 0; i < n_points; ++i ) {
        const endPoint = new Position( Math.cos( i*sixth ), Math.sin( i*sixth ) );
        result[i] = endPoint.scaledBy( radius );
    }
    return result;
} );

function draw()
{
    const s = canvasSurface;
    s.lineWidth = 7;  s.lineCap = 'round';

    s.strokeStyle = 'black';  s.fillStyle = 'black';
    {
        const p = new Path2D();
        p.rect( 0, 0, width, height );
        s.fill( p );
        s.stroke( p );
    }
    
    s.strokeStyle = 'red';  s.fillStyle = 'green';
    {
        const p = new Path2D();
        p.arc( center.x, center.y, radius, 0, fullCircle );
        s.fill( p );
        s.stroke( p );
    }

    s.strokeStyle = 'red';  s.fillStyle = 'white';
    for( let i = 0; i < n_points; ++i ) {
        const p = new Path2D();
        const o1 = points[i].plus( center );
        p.arc( o1.x, o1.y, radius, (2 + i)*sixth, (3 + i)*sixth );
        const j = (i + 2) % n_points;
        const o2 = points[j].plus( center );
        p.arc( o2.x, o2.y, radius, (5 + i)*sixth, (6 + i)*sixth );
        s.fill( p );
        s.stroke( p );
    }
}

draw();
