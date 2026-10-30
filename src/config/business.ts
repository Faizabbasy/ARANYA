export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee-base' | 'manual-brew' | 'traditional-drink' | 'non-coffee' | 'main-course' | 'dessert-snack';
  categoryLabel: string;
  price: number;
  priceFormatted: string;
  description: string;
  notes?: string;
  tag?: string;
  image: string;
  isPopular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'architecture' | 'nature' | 'coffee' | 'atmosphere';
  categoryLabel: string;
  image: string;
  span?: string;
}

export const BUSINESS_CONFIG = {
  brand: {
    name: "ARANYA COFFEE AND FOREST",
    shortName: "ARANYA",
    suffix: "COFFEE & FOREST",
    tagline: "Where Every Moment Becomes Meaningful",
    heroHeadline: "Where Nature\nMeets Every Sip.",
    heroEyebrow: "A HIDDEN ESCAPE IN PANCAWATI",
    heroDescription: "Discover a quieter side of life, where thoughtfully prepared coffee and the beauty of nature come together.",
    storyEyebrow: "THE ARANYA EXPERIENCE",
    storyHeadline: "More Than Coffee.\nA Place to Belong.",
    storyDescription: "Aranya Coffee and Forest is a place to pause, reconnect, and enjoy the beauty of simple moments. Surrounded by nature, every visit invites you to slow down and discover something meaningful.",
    closingStatement: "Find Your Moment.\nStay a Little Longer.",
    since: "EST. 2022",
  },
  
  location: {
    name: "Aranya Coffee and Forest",
    address: "Jl. Tapos Lbc, Pancawati, Kec. Caringin, Kabupaten Bogor, Jawa Barat 16730, Indonesia",
    district: "Pancawati, Bogor — Indonesia",
    altitude: "850 meters above sea level",
    priceRange: "IDR 25,000 – 50,000 per person",
    googleMapsUrl: "https://maps.google.com/?q=Aranya+Coffee+and+Forest+Pancawati+Bogor",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.444747048743!2d106.877803!3d-6.689211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c79f94532c2d%3A0xe54d6fa0a4b9e115!2sAranya%20Coffee%20and%20Forest!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid",
    directionsTips: "Located in the tranquil pine highland of Pancawati, near the Tapos route. Accessible by both cars and motorcycles with a dedicated parking pavilion.",
  },

  hours: {
    weekdays: "10:00 – 21:00 WIB (Mon – Thu)",
    friday: "10:00 – 22:00 WIB (Friday)",
    weekends: "08:00 – 22:00 WIB (Sat – Sun)",
    summary: "Mon – Thu: 10:00 – 21:00 • Fri: 10:00 – 22:00 • Sat – Sun: 08:00 – 22:00 WIB",
  },

  contact: {
    // Verified official Aranya reservation WhatsApp number
    whatsappNumber: "+6285121070029",
    whatsappDisplay: "+62 851-2107-0029",
    instagramHandle: "@aranya.id",
    instagramUrl: "https://www.instagram.com/aranya.id",
  },

  menuCategories: [
    { id: 'all', label: 'All Selections' },
    { id: 'coffee-base', label: 'Coffee Base' },
    { id: 'manual-brew', label: 'Manual Brew' },
    { id: 'traditional-drink', label: 'Traditional Drink' },
    { id: 'non-coffee', label: 'Non Coffee' },
    { id: 'main-course', label: 'Main Course' },
    { id: 'dessert-snack', label: 'Dessert & Snack' },
  ],

  menuItems: [
    // 1. Coffee Base
    {
      id: 'cb-1',
      name: 'Americano (Hot / Iced)',
      category: 'coffee-base',
      categoryLabel: 'Coffee Base',
      price: 28000,
      priceFormatted: 'Rp 28.000',
      description: 'Double shot of locally roasted Arabica espresso diluted with mountain spring water for a clean, aromatic clarity.',
      tag: 'Classic',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      isPopular: true
    },
    {
      id: 'cb-2',
      name: 'Café Latte',
      category: 'coffee-base',
      categoryLabel: 'Coffee Base',
      price: 32000,
      priceFormatted: 'Rp 32.000',
      description: 'Silky microfoam milk gently folded into a rich double espresso base with subtle notes of toasted hazelnuts.',
      tag: 'Guest Favorite',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
      isPopular: true
    },
    {
      id: 'cb-3',
      name: 'Cappuccino',
      category: 'coffee-base',
      categoryLabel: 'Coffee Base',
      price: 30000,
      priceFormatted: 'Rp 30.000',
      description: 'Harmonious balance of bold espresso, steamed whole milk, and dense velvety crema dusted with cocoa.',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cb-4',
      name: 'Butterscotch Coffee Aranya',
      category: 'coffee-base',
      categoryLabel: 'Coffee Base',
      price: 34000,
      priceFormatted: 'Rp 34.000',
      description: 'Signature cold brew espresso layered with artisanal browned butter caramel, salted cream, and crushed toffee.',
      tag: 'Signature',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
      isPopular: true
    },
    {
      id: 'cb-5',
      name: 'Banana Coffee Cream',
      category: 'coffee-base',
      categoryLabel: 'Coffee Base',
      price: 33000,
      priceFormatted: 'Rp 33.000',
      description: 'Smooth highland espresso shaken with natural sweet banana nectar and topped with whipped velvety milk.',
      tag: 'House Special',
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cb-6',
      name: 'Espresso Affogato',
      category: 'coffee-base',
      categoryLabel: 'Coffee Base',
      price: 32000,
      priceFormatted: 'Rp 32.000',
      description: 'Double ristretto poured table-side over two scoops of Madagascar vanilla bean gelato in a chilled glass.',
      tag: 'Dessert Pairing',
      image: 'https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?auto=format&fit=crop&w=800&q=80'
    },

    // 2. Manual Brew
    {
      id: 'mb-1',
      name: 'V60 Specialty Single Origin',
      category: 'manual-brew',
      categoryLabel: 'Manual Brew',
      price: 34000,
      priceFormatted: 'Rp 34.000',
      description: 'Slow-poured through Japanese Hario V60 paper filter highlighting floral jasmine notes, bright stone fruit acidity, and sweet cane finish.',
      tag: 'Single Origin',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      isPopular: true
    },
    {
      id: 'mb-2',
      name: 'Vietnam Drip Classic',
      category: 'manual-brew',
      categoryLabel: 'Manual Brew',
      price: 28000,
      priceFormatted: 'Rp 28.000',
      description: 'Traditional slow gravity drip of dark roast robusta over rich sweetened condensed milk, served hot or iced.',
      tag: 'Heritage',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'mb-3',
      name: 'Kopi Tubruk Nusantara',
      category: 'manual-brew',
      categoryLabel: 'Manual Brew',
      price: 28000,
      priceFormatted: 'Rp 28.000',
      description: 'Unfiltered rustic Indonesian brew steeped with volcanic mountain water, boasting deep chocolate and earthy spices.',
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80'
    },

    // 3. Traditional Drink
    {
      id: 'td-1',
      name: 'Wedang Jahe Rempah',
      category: 'traditional-drink',
      categoryLabel: 'Traditional Drink',
      price: 28000,
      priceFormatted: 'Rp 28.000',
      description: 'Warm infusion of roasted red ginger, lemongrass, cloves, cinnamon bark, and organic arenga palm sugar.',
      tag: 'Warming Heritage',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
      isPopular: true
    },
    {
      id: 'td-2',
      name: 'Bajigur Pancawati',
      category: 'traditional-drink',
      categoryLabel: 'Traditional Drink',
      price: 30000,
      priceFormatted: 'Rp 30.000',
      description: 'Authentic Sundanese hot coconut milk simmered with pandan leaves, brown sugar, ginger, and young coconut slivers.',
      tag: 'Local Favorite',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'td-3',
      name: 'Sekoteng Hangat Aranya',
      category: 'traditional-drink',
      categoryLabel: 'Traditional Drink',
      price: 32000,
      priceFormatted: 'Rp 32.000',
      description: 'Fragrant warm ginger broth served with pacar cina pearls, toasted peanuts, bread croutons, and kolang-kaling.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
    },

    // 4. Non Coffee
    {
      id: 'nc-1',
      name: 'Artisan Matcha Latte',
      category: 'non-coffee',
      categoryLabel: 'Non Coffee',
      price: 34000,
      priceFormatted: 'Rp 34.000',
      description: 'Ceremonial-grade Uji green tea whisked with creamy steamed milk, imparting sweet vegetal fragrance and deep umami.',
      tag: 'Chef Pick',
      image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
      isPopular: true
    },
    {
      id: 'nc-2',
      name: 'Belgian Hot / Iced Chocolate',
      category: 'non-coffee',
      categoryLabel: 'Non Coffee',
      price: 33000,
      priceFormatted: 'Rp 33.000',
      description: 'Decadent 70% dark Belgian cocoa melted with creamy milk and lightly sweetened with vanilla bean syrup.',
      image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'nc-3',
      name: 'Iced Peach Honey Tea',
      category: 'non-coffee',
      categoryLabel: 'Non Coffee',
      price: 29000,
      priceFormatted: 'Rp 29.000',
      description: 'Crisp brewed Ceylon black tea steeped with sweet white peach purée, natural forest honey, and wild mint leaves.',
      tag: 'Refreshing',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'nc-4',
      name: 'Iced Lychee Mint Tea',
      category: 'non-coffee',
      categoryLabel: 'Non Coffee',
      price: 28000,
      priceFormatted: 'Rp 28.000',
      description: 'Refreshing cold-steeped jasmine tea infused with sweet lychee fruit syrup and whole peeled lychees.',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80'
    },

    // 5. Main Course
    {
      id: 'mc-1',
      name: 'Nasi Goreng Kambing Rempah',
      category: 'main-course',
      categoryLabel: 'Main Course',
      price: 38000,
      priceFormatted: 'Rp 38.000',
      description: 'Wok-tossed fragrant jasmine rice with tender lamb chunks, aromatic cardamom, ghee, pickles, and crispy melinjo crackers.',
      tag: 'House Special',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
      isPopular: true
    },
    {
      id: 'mc-2',
      name: 'Soto Betawi Daging Santan',
      category: 'main-course',
      categoryLabel: 'Main Course',
      price: 45000,
      priceFormatted: 'Rp 45.000',
      description: 'Rich coconut and fresh milk broth with slow-cooked beef brisket, diced potatoes, tomatoes, and lime sambal.',
      tag: 'Comfort Dish',
      image: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80',
      isPopular: true
    },
    {
      id: 'mc-3',
      name: 'Sop Iga Sapi Kuah Hangat',
      category: 'main-course',
      categoryLabel: 'Main Course',
      price: 38000,
      priceFormatted: 'Rp 38.000',
      description: 'Clear nourishing beef short rib soup infused with nutmeg, star anise, carrots, and shallot oil. Ideal for cool mountain air.',
      image: 'https://images.unsplash.com/photo-1579684947550-22e945225d9a?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'mc-4',
      name: 'Beef Teriyaki Rice Bowl',
      category: 'main-course',
      categoryLabel: 'Main Course',
      price: 37000,
      priceFormatted: 'Rp 37.000',
      description: 'Sliced tender beef simmered in sweet savory house-made teriyaki glaze over warm Japanese rice and onsen egg.',
      image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'mc-5',
      name: 'Mie Tek-Tek Goreng Aranya',
      category: 'main-course',
      categoryLabel: 'Main Course',
      price: 32000,
      priceFormatted: 'Rp 32.000',
      description: 'Traditional roadside noodle wok-charred with shredded free-range chicken, greens, and sweet soya spice paste.',
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80'
    },

    // 6. Dessert & Snack
    {
      id: 'ds-1',
      name: 'Croffle with Vanilla Gelato',
      category: 'dessert-snack',
      categoryLabel: 'Dessert & Snack',
      price: 34000,
      priceFormatted: 'Rp 34.000',
      description: 'Warm caramelized flaky croissant waffle served with Madagascar vanilla gelato and drizzled maple syrup.',
      tag: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      isPopular: true
    },
    {
      id: 'ds-2',
      name: 'Rujak Cireng Crispy',
      category: 'dessert-snack',
      categoryLabel: 'Dessert & Snack',
      price: 27000,
      priceFormatted: 'Rp 27.000',
      description: 'Golden fried tapioca fritters with a crisp exterior and chewy heart, served with tangy spicy tamarind dip.',
      tag: 'Traditional Snack',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
      isPopular: true
    },
    {
      id: 'ds-3',
      name: 'Singkong Goreng Gurih Bawang',
      category: 'dessert-snack',
      categoryLabel: 'Dessert & Snack',
      price: 24000,
      priceFormatted: 'Rp 24.000',
      description: 'Steamed then deep-fried mountain cassava marinated with crushed garlic and sea salt, extraordinarily fluffy.',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ds-4',
      name: 'Tempe Mendoan Hangat',
      category: 'dessert-snack',
      categoryLabel: 'Dessert & Snack',
      price: 22000,
      priceFormatted: 'Rp 22.000',
      description: 'Thinly sliced artisan soybean cake lightly battered with scallions and coriander, served with sweet chili soy.',
      image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ds-5',
      name: 'Roti Bakar Cokelat Keju',
      category: 'dessert-snack',
      categoryLabel: 'Dessert & Snack',
      price: 25000,
      priceFormatted: 'Rp 25.000',
      description: 'Thick brioche toast toasted over butter, generously filled with melted dark chocolate and savory cheddar cheese.',
      image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ds-6',
      name: 'Aranya Platter (Cireng, Fries, Sausage)',
      category: 'dessert-snack',
      categoryLabel: 'Dessert & Snack',
      price: 35000,
      priceFormatted: 'Rp 35.000',
      description: 'Generous sharing board featuring hand-cut potato fries, crispy cireng, and grilled beef cocktail sausages.',
      image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80'
    }
  ] as MenuItem[],

  galleryItems: [
    {
      id: 'gal-1',
      title: 'Pine Forest & Glasshouse Pavilion',
      subtitle: 'The iconic glasshouse pavilion and outdoor terrace nested beneath 30-meter highland pines.',
      category: 'nature',
      categoryLabel: 'Forest & Interior',
      image: '/images/aranya-forest-interior.jpg',
      span: 'md:col-span-2'
    },
    {
      id: 'gal-2',
      title: 'The Concrete Facade & Porthole Window',
      subtitle: 'Iconic raw concrete facade and circular porthole window nestled under tropical canopy.',
      category: 'architecture',
      categoryLabel: 'Architecture',
      image: '/images/aranya-story-clean.jpg',
    },
    {
      id: 'gal-3',
      title: 'Specialty Manual Brew Bar',
      subtitle: 'Pour-over V60 extraction bar with single origins and custom cold drip setups.',
      category: 'coffee',
      categoryLabel: 'Coffee & Brew',
      image: '/images/aranya-bar-counter.jpg',
    },
    {
      id: 'gal-4',
      title: 'Misty Forest Pavilion',
      subtitle: 'The open-air pavilion surrounded by morning mountain fog and towering pine trees.',
      category: 'atmosphere',
      categoryLabel: 'Atmosphere',
      image: '/images/the-nature-pavilion.jpg',
    },
    {
      id: 'gal-5',
      title: 'Artisanal Croffle & Coffee Pairing',
      subtitle: 'Warm caramelized flaky pastry accompanied by cold-brewed highland espresso.',
      category: 'coffee',
      categoryLabel: 'Coffee & Brew',
      image: '/images/the-coffee-matcha.jpg',
    },
    {
      id: 'gal-6',
      title: 'Highland Pine Lodge & Stone Steps',
      subtitle: 'Warm amber lanterns illuminating the natural stone stairs as evening descends.',
      category: 'atmosphere',
      categoryLabel: 'Atmosphere',
      image: '/images/the-moments-stairs.jpg',
      span: 'md:col-span-2'
    }
  ] as GalleryItem[],

  features: [
    {
      number: '01',
      title: 'THE NATURE',
      tagline: 'Highland Serenity at 850m ASL',
      description: 'A peaceful environment surrounded by the beauty of nature. Nestled among towering pine trees in the cool hills of Pancawati, Aranya offers a sanctuary from urban haste where gentle mountain breezes and rustling foliage accompany every morning cup.',
      image: '/images/the-nature-pavilion.jpg',
      highlights: ['850m Highland Altitude', 'Lush Pine Forest Canopy', 'Fresh Mountain Air & Morning Mist']
    },
    {
      number: '02',
      title: 'THE COFFEE',
      tagline: 'Craft, Origin & Pure Ritual',
      description: 'Thoughtfully prepared coffee and a selection of delightful beverages. From locally harvested Indonesian single origins brewed by hand to velvety, balanced espresso creations, every beverage is prepared with patience and uncompromising craftsmanship.',
      image: '/images/the-coffee-matcha.jpg',
      highlights: ['Specialty Coffee & Artisan Matcha', 'Single Origin Manual Brew (V60)', 'Traditional Herbal Infusions']
    },
    {
      number: '03',
      title: 'THE MOMENTS',
      tagline: 'Where Conversations Linger',
      description: 'A welcoming destination for meaningful conversations, quiet mornings, and memorable gatherings. Designed with expansive outdoor decks, shaded gravel alcoves, and cool mountain breezes, Aranya invites you to slow down and savor every sip together.',
      image: '/images/the-moments-cheers.jpg',
      highlights: ['Open-air Pine Forest Decks & Terrace', 'Signature Iced Coffee & Artisan Matcha', 'Pet & Family Friendly Atmosphere']
    }
  ]
};

/**
 * Builds a direct WhatsApp click-to-chat URL with a pre-filled reservation message
 */
export function buildReservationWhatsAppUrl(data: {
  fullName: string;
  phone: string;
  date: string;
  timeSlot: string;
  guests: string;
  seatingArea: string;
  notes?: string;
}): string {
  const cleanPhone = BUSINESS_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '');
  
  const text = 
`*RESERVATION INQUIRY — ARANYA COFFEE AND FOREST*
----------------------------------------
*Guest Name:* ${data.fullName}
*WhatsApp:* ${data.phone}
*Date:* ${data.date}
*Preferred Time:* ${data.timeSlot}
*Number of Guests:* ${data.guests}
*Seating Preference:* ${data.seatingArea}
${data.notes ? `*Special Notes:* ${data.notes}\n` : ''}----------------------------------------
_Sent from Aranya Coffee & Forest Website_`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
