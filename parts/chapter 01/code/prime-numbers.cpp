// Prime numbers up to some max value, using O(N) memory where N is number of primes.
// A sort of /dynamic/ sieve (see “Sieve of Eratosthenes” for static sieve approach).
#include <iostream>
#include <queue>
#include <vector>

auto& out = std::cout;

template< class Item, class Compare_func >
using Priority_q = std::priority_queue<Item, std::vector<Item>, Compare_func>;

struct Multiple
{
    int base; int n;
    auto value() const -> int{ return n*base; }
};
    
struct Descending_order
{
    auto operator()( const Multiple& a, const Multiple& b ) const
        -> bool
    { return a.value() > b.value(); }       // Note: direction of comparison.
};

auto main() -> int
{
    const int max_value = 1'000;        // Or a billion. Or a hundred. Whatever.
    out << 2;
    auto larger_composites = Priority_q<Multiple, Descending_order>();
    larger_composites.push( Multiple{2, 2} );
    for( int current = 3; current < max_value; ++current ) {
        bool is_composite = false;
        for( ;; ) {
            const Multiple next_composite = larger_composites.top();
            if( current < next_composite.value() ) {
                break;
            }
            larger_composites.pop();
            is_composite = true;
            larger_composites.push( Multiple{next_composite.base, 1 + next_composite.n} );
        }
        if( not is_composite ) {
            out << ' ' << current;
            larger_composites.push( Multiple{current, 2} );
        }
    }
    out << '\n';
    out << "Found " << larger_composites.size() << " primes less than " << max_value << ".\n";
}

