import { useState } from 'react';
import {
  ArrowRight,
  Clock3,
  Facebook,
  Instagram,
  MapPin,
  Menu as MenuIcon,
  Phone,
  Star,
  X,
} from 'lucide-react';

const menuCategories = [
  {
    number: '01',
    title: 'Breakfast & Omelettes',
    description: 'The kind of breakfast that gets the whole day moving.',
    items: [
      ['Two Eggs, Any Style', 'with bacon, ham, or sausage'],
      ['New York Strip Steak & Eggs', ''],
      ['Virginia Ham Steak & Eggs', ''],
      ['Corned Beef Hash & Eggs', ''],
      ['Plain Omelette', ''],
      ['Western Omelette', ''],
      ['Mediterranean Omelette', 'feta, tomato, onion, peppers'],
      ['Athenian Omelette', 'gyro meat, spinach, tomato, onion, peppers, feta'],
      ['Healthy Omelette', '4 egg whites, turkey'],
    ],
  },
  {
    number: '02',
    title: 'Pancakes, French Toast & Waffles',
    description: 'Golden, griddled, and served with a little extra joy.',
    items: [
      ['Buttermilk Pancakes', ''],
      ['Challah French Toast', ''],
      ['Silver Dollar Pancakes', ''],
      ['Chocolate Chip Pancakes', ''],
      ['Belgian Waffle', ''],
      ['Monte Cristo', 'ham, turkey, melted Swiss'],
      ['Waffle & Fried Chicken Strips', ''],
    ],
  },
  {
    number: '03',
    title: 'Sandwiches & Gyros',
    description: 'Stacked high and wrapped with plenty of diner pride.',
    items: [
      ['Greek Gyro', 'on pita with lettuce, tomato, onion, tzatziki'],
      ['Chicken Gyro', 'on pita with lettuce, tomato, onion, tzatziki'],
      ['Gyro Platter', 'French fries & Greek salad'],
      ['Classic Reuben', 'corned beef, sauerkraut, Swiss'],
      ['Happy Waitress', 'open-faced cheese, tomato, bacon'],
      ['Black Forest', 'grilled roast beef, swiss, fried onions'],
      ['Philly Cheese Steak', 'with fried onions'],
    ],
  },
  {
    number: '04',
    title: 'Appetizers',
    description: 'Share a plate, or keep it all to yourself. We understand.',
    items: [
      ['Stuffed Mushrooms', 'crabmeat'],
      ['Buffalo Wings', 'bleu cheese, celery'],
      ['Chicken Fingers', 'honey mustard'],
      ['Disco Fries', 'gravy, cheese'],
      ['Mozzarella Sticks', 'tomato sauce'],
      ['Super Sampler', 'wings, fingers, fries, mozzarella sticks, rings'],
    ],
  },
  {
    number: '05',
    title: 'Burgers & Grilled Chicken',
    description: 'Char-broiled 7 oz. beef burgers and grilled chicken sandwiches.',
    items: [
      ['Plain Burger', 'beef or turkey'],
      ['Cheese Burger', 'American, Swiss, or mozzarella'],
      ['Patty Melt', 'grilled rye, American cheese, onions'],
      ['Taylor Burger', 'Taylor ham, fried egg, cheese'],
      ['Grilled Chicken Breast', 'on a hard roll with coleslaw and pickle'],
      ['Grilled Chicken Cordon Bleu', 'ham, Swiss, French fries'],
      ['Grilled Chicken Greek Style', 'tomato, onion, feta, French fries'],
    ],
  },
  {
    number: '06',
    title: 'Salads & Wraps',
    description: 'Fresh greens and hearty wraps, served with fries.',
    items: [
      ['Garden Salad', 'mixed greens, tomatoes, peppers, onion, cucumber'],
      ['Greek Salad', 'feta, Kalamata olives, anchovies, stuffed grape leaves'],
      ['Classic Caesar Salad', 'romaine, Parmesan, croutons'],
      ['Chicken Caesar Wrap', 'grilled chicken, Caesar salad'],
      ['Turkey Club Wrap', 'roast turkey, bacon, lettuce, tomato, mayo'],
      ['New Yorker Wrap', 'hot corned beef, Swiss, sauerkraut, Russian dressing'],
    ],
  },
  {
    number: '07',
    title: 'Dinner Entrees & Seafood',
    description: 'Served with soup or salad, potato, and vegetable.',
    items: [
      ['N.Y. Strip Steak', 'with onion rings'],
      ['Broiled Fresh Salmon Filet', 'lemon butter sauce'],
      ['Broiled Jumbo Shrimp', 'lemon butter sauce'],
      ['Chicken Marsala', 'mushrooms in Marsala wine sauce'],
      ['Chicken Francaise', 'lemon butter sauce'],
      ['Veal Cutlet Parmigiana', 'served with linguine'],
      ['Spaghetti with Meatballs', ''],
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-cream text-ink">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/95 text-white shadow-lg backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" onClick={closeMenu} className="group flex shrink-0 items-center gap-3" aria-label="Tommy's Family Restaurant home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-gold transition-transform duration-300 group-hover:rotate-12">
              <Star size={17} fill="currentColor" strokeWidth={1.5} />
            </span>
            <span className="font-display text-[16px] leading-[0.95] tracking-tight sm:text-[18px]">
              Tommy&apos;s <span className="text-gold">Family Restaurant</span>
            </span>
          </a>
          <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-[76px] flex-col gap-1 border-b border-white/10 bg-ink px-5 py-5 sm:px-8 lg:static lg:flex lg:flex-row lg:items-center lg:gap-9 lg:border-0 lg:bg-transparent lg:p-0`}>
            {['Menu', 'About', 'Location'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="border-b border-white/10 py-3 text-sm font-medium uppercase tracking-[0.16em] text-white/75 transition-colors hover:text-gold lg:border-0 lg:py-2">
                {item}
              </a>
            ))}
            <a href="tel:+12012171211" onClick={closeMenu} className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-red px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-0.5 hover:bg-red-dark lg:mt-0">
              <Phone size={15} /> Call to Order
            </a>
          </nav>
          <button className="rounded-md p-2 text-white lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="relative flex min-h-screen items-end bg-cream pt-[76px] text-ink">
          
          {/* HERO IMAGE */}
          <img 
            src="/interior.jpg" 
            alt="Tommy's Family Restaurant interior" 
            className="absolute inset-0 w-full h-full object-cover opacity-30" 
          />

          {/* Stronger gradient overlay to fix white-on-white */}
          <div className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-cream via-cream/95 to-transparent lg:right-[28%]" />
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-cream to-transparent" />
          
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8 sm:pb-28 lg:px-12 lg:pb-32">
            <div className="max-w-3xl animate-rise drop-shadow-md">
              <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.26em] text-gold"><span className="h-px w-10 bg-gold" /> Since 1985 · Jersey City</div>
              <h1 className="max-w-3xl font-display text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[92px]">Serving Jersey City <em className="text-gold">Since 1985</em></h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/80 sm:text-xl font-medium">Classic diner fare, hearty portions, and a welcoming atmosphere.</p>
              <a href="#menu" className="mt-10 inline-flex items-center gap-3 rounded-full bg-red px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-xl shadow-black/20 transition-all hover:-translate-y-1 hover:bg-red-dark">View Menu <ArrowRight size={17} /></a>
            </div>
          </div>
          <div className="absolute bottom-9 right-12 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-ink/50 lg:flex"><span className="h-10 w-px bg-ink/30" /> Scroll to explore</div>
        </section>

        <section id="menu" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div><p className="eyebrow">Good food, no fuss</p><h2 className="section-title">The <em>menu</em></h2></div>
              
              {/* Disclaimer placed clearly next to the menu heading */}
              <div className="max-w-sm border-l-2 border-red pl-5 text-sm leading-relaxed text-ink/75 font-semibold bg-sand/50 p-4 rounded-r-lg">
                Prices available in-store or by phone.<br/> Call us for current pricing.
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {menuCategories.map((category) => (
                <article key={category.title} className="menu-card group">
                  <div className="flex items-start justify-between gap-4"><span className="font-display text-4xl text-red/25 transition-colors group-hover:text-red/60">{category.number}</span><span className="mt-2 h-2 w-2 rounded-full bg-gold" /></div>
                  <h3 className="mt-5 max-w-sm font-display text-3xl leading-none text-ink">{category.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/55">{category.description}</p>
                  <div className="my-6 h-px bg-ink/10" />
                  <ul className="space-y-4">
                    {category.items.map(([name, description]) => <li key={name} className="flex items-baseline justify-between gap-4"><span className="text-[15px] font-semibold text-ink">{name}</span><span className="flex-1 border-b border-dotted border-ink/20" /><span className="text-[11px] text-ink/45">{description}</span></li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 bg-sand px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
            <div><p className="eyebrow">A neighborhood original</p><h2 className="section-title">Made for <em>regulars</em></h2><div className="mt-8 space-y-5 text-[17px] leading-[1.75] text-ink/70"><p>Some places feed you. Tommy&apos;s makes you feel at home.</p><p>Family-run since 1985, we&apos;ve been serving up the classics Jersey City loves — from a stack of pancakes at sunrise to a late-night gyro with all the fixings.</p><p>We believe a good meal should be generous, familiar, and served with a smile. Pull up a chair. You&apos;re one of us now.</p></div><div className="mt-9 flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-red text-white"><Star size={19} fill="currentColor" /></span><div><p className="font-display text-lg">The Tommy&apos;s family</p><p className="text-xs uppercase tracking-[0.16em] text-ink/45">Jersey City, NJ</p></div></div></div>
            
            {/* ABOUT SECTION IMAGE */}
            <img 
              src="/food.jpg" 
              alt="Classic diner food" 
              className="w-full aspect-[4/3] min-h-[360px] lg:min-h-[520px] object-cover rounded-lg shadow-md" 
            />

          </div>
        </section>

        <section id="location" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.7fr_1.3fr] lg:items-center lg:gap-24">
            <div><p className="eyebrow">Come on over</p><h2 className="section-title">Find <em>Tommy&apos;s</em></h2><div className="mt-10 space-y-7"><div className="contact-row"><MapPin className="text-red" size={21} /><div><p className="label">Address</p><p>349 Central Ave<br />Jersey City, NJ 07307</p></div></div><div className="contact-row"><Phone className="text-red" size={21} /><div><p className="label">Phone</p><a href="tel:+12012171211" className="transition-colors hover:text-red">+1 201-217-1211</a></div></div><div className="contact-row"><Clock3 className="text-red" size={21} /><div><p className="label">Hours</p><p>Sunday–Saturday<br />6:00 AM – 8:00 PM</p></div></div></div><a href="tel:+12012171211" className="mt-10 inline-flex items-center gap-3 border-b-2 border-red pb-2 text-sm font-bold uppercase tracking-[0.15em] text-red transition-all hover:gap-5">Call ahead <ArrowRight size={16} /></a></div>
            
            {/* MAP IFRAME */}
            <div className="relative w-full min-h-[450px] rounded-lg overflow-hidden shadow-md border border-ink/10 bg-sand">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.877059042026!2d-74.04924802952627!3d40.74703855187072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2576a349f9fd5%3A0xb6b26f2d1ab921bd!2sTommy's%20Family%20Restaurant!5e0!3m2!1sen!2sus!4v1793749967820!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, pointerEvents: 'auto' }} 
                allowFullScreen 
                loading="lazy" 
                className="absolute inset-0 w-full h-full"
                title="Tommy's Family Restaurant Location"
              ></iframe>
            </div>

          </div>
        </section>
      </main>

      <footer className="bg-ink px-5 py-10 text-white sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left"><p className="font-display text-lg">Tommy&apos;s <span className="text-gold">Family Restaurant</span></p><p className="text-xs tracking-wide text-white/45">© 2024 Tommy&apos;s Family Restaurant. Jersey City, NJ.</p><div className="flex gap-3"><a href="#top" aria-label="Instagram" className="social-icon"><Instagram size={17} /></a><a href="#top" aria-label="Facebook" className="social-icon"><Facebook size={17} /></a></div></div></footer>
    </div>
  );
}

export default App;
