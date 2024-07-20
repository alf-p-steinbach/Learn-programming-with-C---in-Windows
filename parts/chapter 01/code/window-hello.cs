using System.Windows.Forms;         // Form, Label
using System.Drawing;               // Point, Size, Font, FontStyle, GraphicsUnit

Application.EnableVisualStyles();   // Modern look & feel.

var window = new Form();
window.Text             = "C# says:";       // `Text` is the window title.
window.ClientSize       = new Size( 800, 120 );
window.FormBorderStyle  = FormBorderStyle.FixedSingle;

var text_display = new Label();
text_display.ForeColor  = Color.Green;
text_display.Location   = new Point( 20, 20 );
text_display.ClientSize = new Size( 760, 60 );
text_display.Text       = "Hello in a GUI window, from C#!";
text_display.Font       = new Font( "Book Antiqua", 48, FontStyle.Italic | FontStyle.Bold, GraphicsUnit.Pixel );
window.Controls.Add( text_display );

Application.Run( window );
