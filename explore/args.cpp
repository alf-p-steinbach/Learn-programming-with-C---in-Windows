#include <iostream>
using   std::cout;

auto main( int n, char** a ) -> int
{
    for( int i = 0; i < n; ++i ) {
        cout << i << ": '" << a[i] << "'\n";
    }
}
