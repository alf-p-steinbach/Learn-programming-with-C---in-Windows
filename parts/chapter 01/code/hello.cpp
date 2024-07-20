#include <windows.h>

auto main() -> int
{
    MessageBox(
        0,                                      // Parent window - none.
        "Hello from C++!",                      // Message text.
        "C++ says:",                            // Box title.
        MB_ICONINFORMATION | MB_SETFOREGROUND   // Icon, button set, options.
        );
}
