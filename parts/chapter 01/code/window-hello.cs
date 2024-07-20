using System.Windows.Forms;             // Form, Label
using System.Drawing;                   // Point, Size, Font, FontStyle, GraphicsUnit
    
Application.EnableVisualStyles();       // Modern look ’n feel, please.

var window = new Form();
window.Text             = "C# says:";       // `Text` is the window title.
window.ClientSize       = new Size( 512, 256 );
window.FormBorderStyle  = FormBorderStyle.Sizable;

var rows = new System.Windows.Forms.TableLayoutPanel();
rows.Dock               = DockStyle.Fill;
rows.RowStyles.Add( new RowStyle( SizeType.Percent, 100 ) );
rows.RowStyles.Add( new RowStyle( SizeType.Absolute, 40 ) );
window.Controls.Add( rows );

var upper_panel = new System.Windows.Forms.FlowLayoutPanel();
upper_panel.Dock        = DockStyle.Fill;
upper_panel.BackColor   = Color.White;
rows.Controls.Add( upper_panel, 0, 0 );

var text_display = new Label();
text_display.AutoSize   = true;
text_display.Text       = "A GUI window hello from C#!";
text_display.Font       = new Font(
    "Book Antiqua", 48, FontStyle.Italic | FontStyle.Bold, GraphicsUnit.Pixel
    );
text_display.ForeColor  = Color.Green;
upper_panel.Controls.Add( text_display );

var ok_button = new Button();
ok_button.Anchor        = AnchorStyles.Right | AnchorStyles.Bottom;
ok_button.Text          = "OK";
ok_button.Click         += (object o, System.EventArgs ea) => { window.Close(); };
rows.Controls.Add( ok_button, 0, 1 );
// window.Controls.Add( ok_button );

Application.Run( window );
