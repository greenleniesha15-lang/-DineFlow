/* =============================================
   DineFlow — Full App Logic
   ============================================= */

// ══════════════════════════════════════════════
// DATA
// ══════════════════════════════════════════════
const RESTAURANTS = [
  {
    id: 'sakura',
    name: 'Sakura Japanese',
    emoji: '🍣',
    cuisine: ['japanese'],
    rating: 4.8,
    deliveryTime: '20–30 min',
    minOrder: 15,
    open: true,
    tags: ['Sushi', 'Ramen', 'Japanese'],
    bannerColor: '#1a0a2e',
    menu: {
      'Starters': [
        { id: 's1', name: 'Edamame', emoji: '🫛', desc: 'Steamed salted soybeans', price: 4.50, popular: false },
        { id: 's2', name: 'Gyoza (6pc)', emoji: '🥟', desc: 'Pan-fried pork & cabbage dumplings', price: 7.00, popular: true },
        { id: 's3', name: 'Miso Soup', emoji: '🍵', desc: 'Classic tofu & wakame broth', price: 3.50, popular: false },
      ],
      'Sushi & Rolls': [
        { id: 'r1', name: 'Salmon Nigiri (2pc)', emoji: '🍣', desc: 'Fresh Atlantic salmon on seasoned rice', price: 8.00, popular: true },
        { id: 'r2', name: 'Dragon Roll (8pc)', emoji: '🐉', desc: 'Shrimp tempura, avocado, eel sauce', price: 14.50, popular: true },
        { id: 'r3', name: 'Spicy Tuna Roll', emoji: '🌶️', desc: 'Fresh tuna, sriracha mayo, cucumber', price: 12.00, popular: false },
        { id: 'r4', name: 'Veggie Roll (6pc)', emoji: '🥑', desc: 'Avocado, cucumber, pickled radish', price: 9.50, popular: false, isNew: true },
      ],
      'Mains': [
        { id: 'm1', name: 'Tonkotsu Ramen', emoji: '🍜', desc: 'Rich pork bone broth, chashu, soft egg', price: 16.00, popular: true },
        { id: 'm2', name: 'Chicken Teriyaki', emoji: '🍗', desc: 'Glazed chicken, steamed rice, pickles', price: 15.50, popular: false },
        { id: 'm3', name: 'Tempura Udon', emoji: '🍲', desc: 'Thick udon noodles, prawn tempura', price: 17.00, popular: false },
      ],
      'Drinks': [
        { id: 'd1', name: 'Sake (200ml)', emoji: '🍶', desc: 'House cold sake', price: 9.00, popular: false },
        { id: 'd2', name: 'Green Tea', emoji: '🍵', desc: 'Hot or iced sencha', price: 3.00, popular: false },
        { id: 'd3', name: 'Ramune Soda', emoji: '🥤', desc: 'Original Japanese marble soda', price: 4.00, popular: false, isNew: true },
      ],
    },
  },
  {
    id: 'napoli',
    name: 'Napoli Express',
    emoji: '🍕',
    cuisine: ['italian'],
    rating: 4.6,
    deliveryTime: '25–35 min',
    minOrder: 12,
    open: true,
    tags: ['Pizza', 'Pasta', 'Italian'],
    bannerColor: '#1a0808',
    menu: {
      'Starters': [
        { id: 'n_s1', name: 'Bruschetta (4pc)', emoji: '🍞', desc: 'Toasted bread, tomato, basil, olive oil', price: 6.00, popular: true },
        { id: 'n_s2', name: 'Caprese Salad', emoji: '🥗', desc: 'Fresh mozzarella, tomato, basil', price: 9.00, popular: false },
        { id: 'n_s3', name: 'Arancini (3pc)', emoji: '🟡', desc: 'Crispy risotto balls with mozzarella', price: 8.50, popular: true },
      ],
      'Pizzas': [
        { id: 'n_p1', name: 'Margherita', emoji: '🍕', desc: 'San Marzano tomato, fior di latte, basil', price: 13.00, popular: true },
        { id: 'n_p2', name: 'Diavola', emoji: '🌶️', desc: 'Spicy salami, chilli, mozzarella', price: 15.00, popular: true },
        { id: 'n_p3', name: 'Quattro Stagioni', emoji: '🍄', desc: 'Ham, mushrooms, artichoke, olives', price: 16.00, popular: false },
        { id: 'n_p4', name: 'Prosciutto e Rucola', emoji: '🥬', desc: 'Cured ham, rocket, parmesan, truffle oil', price: 17.50, popular: false, isNew: true },
      ],
      'Pastas': [
        { id: 'n_pa1', name: 'Carbonara', emoji: '🍝', desc: 'Guanciale, egg yolk, pecorino, black pepper', price: 14.00, popular: true },
        { id: 'n_pa2', name: 'Arrabiata', emoji: '🍅', desc: 'Spicy tomato, garlic, pecorino', price: 12.50, popular: false },
        { id: 'n_pa3', name: 'Pesto Genovese', emoji: '🌿', desc: 'Fresh basil pesto, pine nuts, parmesan', price: 13.50, popular: false },
      ],
      'Desserts': [
        { id: 'n_d1', name: 'Tiramisu', emoji: '☕', desc: 'Classic mascarpone, espresso, ladyfingers', price: 7.00, popular: true },
        { id: 'n_d2', name: 'Panna Cotta', emoji: '🍮', desc: 'Vanilla cream, berry coulis', price: 6.50, popular: false },
      ],
    },
  },
  {
    id: 'island',
    name: 'Island Vibes Kitchen',
    emoji: '🌴',
    cuisine: ['caribbean'],
    rating: 4.9,
    deliveryTime: '30–45 min',
    minOrder: 18,
    open: true,
    tags: ['Jerk', 'Caribbean', 'BBQ'],
    bannerColor: '#0a1a08',
    menu: {
      'Starters': [
        { id: 'iv_s1', name: 'Ackee Fritters (4pc)', emoji: '🟡', desc: 'Crispy ackee & saltfish fritters, pepper sauce', price: 7.50, popular: true },
        { id: 'iv_s2', name: 'Festival (4pc)', emoji: '🥖', desc: 'Sweet fried dumplings', price: 4.00, popular: false },
        { id: 'iv_s3', name: 'Soup of the Day', emoji: '🍲', desc: 'Chef\'s daily Caribbean soup', price: 6.50, popular: false },
      ],
      'Mains': [
        { id: 'iv_m1', name: 'Jerk Chicken', emoji: '🍗', desc: 'Slow-cooked scotch bonnet jerk, rice & peas', price: 18.00, popular: true },
        { id: 'iv_m2', name: 'Curry Goat', emoji: '🍛', desc: 'Slow-braised goat, roti, mango chutney', price: 20.00, popular: true },
        { id: 'iv_m3', name: 'Oxtail Stew', emoji: '🫕', desc: 'Tender braised oxtail, butter beans, rice', price: 22.00, popular: true, isNew: false },
        { id: 'iv_m4', name: 'Ackee & Saltfish', emoji: '🐟', desc: 'Jamaica\'s national dish, breadfruit, plantain', price: 17.50, popular: false },
        { id: 'iv_m5', name: 'Vegan Callaloo', emoji: '🌿', desc: 'Callaloo, coconut milk, dumplings, plantain', price: 15.00, popular: false, isNew: true },
      ],
      'Sides': [
        { id: 'iv_si1', name: 'Rice & Peas', emoji: '🍚', desc: 'Coconut rice with kidney beans', price: 4.50, popular: false },
        { id: 'iv_si2', name: 'Fried Plantain', emoji: '🍌', desc: 'Sweet caramelised plantain', price: 4.00, popular: true },
        { id: 'iv_si3', name: 'Coleslaw', emoji: '🥗', desc: 'Creamy island-style coleslaw', price: 3.50, popular: false },
      ],
      'Drinks': [
        { id: 'iv_d1', name: 'Sorrel Punch', emoji: '🌺', desc: 'Hibiscus, ginger, spices (serves 2)', price: 6.00, popular: true },
        { id: 'iv_d2', name: 'Ting (bottle)', emoji: '🍋', desc: 'Jamaican grapefruit soda', price: 3.50, popular: false },
        { id: 'iv_d3', name: 'Red Stripe', emoji: '🍺', desc: 'Jamaican lager, 330ml', price: 4.50, popular: true },
      ],
    },
  },
  {
    id: 'burgerco',
    name: 'The Burger Co.',
    emoji: '🍔',
    cuisine: ['burgers'],
    rating: 4.5,
    deliveryTime: '15–25 min',
    minOrder: 10,
    open: true,
    tags: ['Burgers', 'Fries', 'Shakes'],
    bannerColor: '#1a1008',
    menu: {
      'Burgers': [
        { id: 'bc_b1', name: 'Classic Smash', emoji: '🍔', desc: 'Smashed beef patty, American cheese, pickles, onion', price: 11.00, popular: true },
        { id: 'bc_b2', name: 'Double Double', emoji: '🍔', desc: 'Two patties, two cheeses, special sauce', price: 14.50, popular: true },
        { id: 'bc_b3', name: 'BBQ Bacon', emoji: '🥓', desc: 'Beef, bacon, BBQ sauce, crispy onion', price: 13.50, popular: true },
        { id: 'bc_b4', name: 'Crispy Chicken', emoji: '🍗', desc: 'Buttermilk-fried chicken, slaw, pickles', price: 12.00, popular: false },
        { id: 'bc_b5', name: 'Portobello Veggie', emoji: '🍄', desc: 'Portobello, halloumi, avocado, sriracha', price: 12.50, popular: false, isNew: true },
      ],
      'Sides': [
        { id: 'bc_s1', name: 'Classic Fries', emoji: '🍟', desc: 'Crispy thin-cut salted fries', price: 4.00, popular: true },
        { id: 'bc_s2', name: 'Loaded Fries', emoji: '🧀', desc: 'Fries, cheddar sauce, bacon bits', price: 6.50, popular: true },
        { id: 'bc_s3', name: 'Onion Rings (6pc)', emoji: '🧅', desc: 'Beer-battered rings, chipotle dip', price: 5.50, popular: false },
        { id: 'bc_s4', name: 'Mac Bites (6pc)', emoji: '🧀', desc: 'Crispy mac & cheese bites', price: 6.00, popular: false, isNew: true },
      ],
      'Shakes': [
        { id: 'bc_sh1', name: 'Vanilla Shake', emoji: '🥛', desc: 'Classic hand-spun vanilla', price: 6.50, popular: false },
        { id: 'bc_sh2', name: 'Chocolate Shake', emoji: '🍫', desc: 'Rich dark chocolate', price: 6.50, popular: true },
        { id: 'bc_sh3', name: 'Strawberry Shake', emoji: '🍓', desc: 'Fresh strawberry blend', price: 6.50, popular: false },
      ],
    },
  },
];

const REWARDS_CATALOG = [
  { id: 'r1', name: 'Free Drink', desc: 'Any drink on your next order', icon: '🥤', cost: 200 },
  { id: 'r2', name: '10% Off', desc: 'One order at any restaurant', icon: '🏷️', cost: 350 },
  { id: 'r3', name: 'Free Starter', desc: 'Any starter on your next order', icon: '🥗', cost: 400 },
  { id: 'r4', name: 'Free Dessert', desc: 'Any dessert on your next order', icon: '🍰', cost: 450 },
  { id: 'r5', name: '25% Off', desc: 'One order at any restaurant', icon: '🎁', cost: 750 },
  { id: 'r6', name: 'Free Main', desc: 'Any main dish on your next order', icon: '🍽️', cost: 900 },
];

// ══════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════
const State = {
  cart: [],           // { item, restaurantId, qty }
  cartRestaurant: null,
  orders: JSON.parse(localStorage.getItem('df_orders') || '[]'),
  points: parseInt(localStorage.getItem('df_points') || '0'),
  activeView: 'home',
  currentFilter: 'all',
  currentRestaurant: null,
  currentDetailTab: 'menu',

  saveOrders() { localStorage.setItem('df_orders', JSON.stringify(this.orders)); },
  savePoints() { localStorage.setItem('df_points', String(this.points)); },

  addPoints(n) {
    this.points += n;
    this.savePoints();
    document.getElementById('nav-points').textContent = `⭐ ${this.points} pts`;
  },
};

// Load persisted points on init
State.points = parseInt(localStorage.getItem('df_points') || '0');

// ══════════════════════════════════════════════
// APP ROUTER
// ══════════════════════════════════════════════
const App = {
  goTo(view) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => {
      l.classList.toggle('active', l.dataset.view === view);
    });
    const el = document.getElementById(`view-${view}`);
    if (el) {
      el.classList.add('active');
      State.activeView = view;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Render dynamic views
    if (view === 'restaurants') Restaurants.render();
    if (view === 'orders')      Orders.render();
    if (view === 'loyalty')     Loyalty.render();
  },
};

// ══════════════════════════════════════════════
// RESTAURANTS VIEW
// ══════════════════════════════════════════════
const Restaurants = {
  render() {
    const grid = document.getElementById('restaurant-grid');
    const filter = State.currentFilter;
    const list = filter === 'all'
      ? RESTAURANTS
      : RESTAURANTS.filter(r => r.cuisine.includes(filter));

    grid.innerHTML = list.map(r => `
      <div class="rest-card" onclick="Detail.open('${r.id}')">
        <div class="rest-banner" style="background:${r.bannerColor}">
          <span style="filter:drop-shadow(0 4px 8px rgba(0,0,0,0.5))">${r.emoji}</span>
        </div>
        <div class="rest-body">
          <div class="rest-top">
            <div class="rest-name">${r.name}</div>
            <div class="rest-rating">★ ${r.rating}</div>
          </div>
          <div class="rest-tags">
            ${r.tags.map(t => `<span class="rest-tag">${t}</span>`).join('')}
          </div>
          <div class="rest-meta">
            <span class="${r.open ? 'rest-open' : 'rest-closed'}">${r.open ? '● Open' : '● Closed'}</span>
            <span>${r.deliveryTime}</span>
            <span>Min $${r.minOrder}</span>
          </div>
        </div>
      </div>
    `).join('');
  },

  initFilters() {
    document.getElementById('filter-tabs').addEventListener('click', (e) => {
      const tab = e.target.closest('.filter-tab');
      if (!tab) return;
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      State.currentFilter = tab.dataset.filter;
      this.render();
    });
  },
};

// ══════════════════════════════════════════════
// RESTAURANT DETAIL
// ══════════════════════════════════════════════
const Detail = {
  open(id) {
    State.currentRestaurant = RESTAURANTS.find(r => r.id === id);
    State.currentDetailTab = 'menu';
    this.render();
    App.goTo('detail');
  },

  render() {
    const r = State.currentRestaurant;
    if (!r) return;

    document.getElementById('detail-content').innerHTML = `
      <div class="detail-hero">
        <div>
          <div class="detail-emoji">${r.emoji}</div>
          <div class="detail-name">${r.name}</div>
          <div class="detail-meta">
            <span>★ ${r.rating}</span>
            <span>🕐 ${r.deliveryTime}</span>
            <span>💳 Min $${r.minOrder}</span>
            <span class="${r.open ? 'rest-open' : 'rest-closed'}">${r.open ? '● Open now' : '● Closed'}</span>
          </div>
          <div class="detail-actions">
            <button class="btn-primary btn-sm" onclick="Reservation.open('${r.id}')">📅 Reserve a Table</button>
            <div class="rest-tags" style="margin:0">
              ${r.tags.map(t => `<span class="rest-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>

      <div class="detail-tabs">
        <button class="detail-tab active" data-tab="menu" onclick="Detail.switchTab('menu', this)">Menu</button>
        <button class="detail-tab" data-tab="info" onclick="Detail.switchTab('info', this)">Info</button>
      </div>

      <div class="tab-panel active" id="tab-menu">
        ${this.renderMenu(r)}
      </div>

      <div class="tab-panel" id="tab-info">
        ${this.renderInfo(r)}
      </div>
    `;
  },

  renderMenu(r) {
    return Object.entries(r.menu).map(([cat, items]) => `
      <div class="menu-category">
        <div class="menu-cat-title">${cat}</div>
        <div class="menu-items">
          ${items.map(item => `
            <div class="menu-item">
              <div class="menu-item-icon">${item.emoji}</div>
              <div class="menu-item-info">
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-desc">${item.desc}</div>
                <div class="menu-item-badges">
                  ${item.popular ? '<span class="badge-popular">🔥 Popular</span>' : ''}
                  ${item.isNew ? '<span class="badge-new">✨ New</span>' : ''}
                </div>
              </div>
              <div class="menu-item-right">
                <div class="menu-item-price">$${item.price.toFixed(2)}</div>
                <button class="add-btn" onclick="Cart.add('${r.id}', ${JSON.stringify(item).replace(/'/g, "&#39;").replace(/"/g, '&quot;')})">+</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  },

  renderInfo(r) {
    return `
      <div style="display:flex;flex-direction:column;gap:14px">
        <div style="background:var(--bg2);border:0.5px solid var(--border);border-radius:var(--r-md);padding:16px 20px;">
          <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.8px;color:var(--text2);margin-bottom:12px;font-weight:500;">Opening Hours</div>
          ${['Monday–Friday','Saturday','Sunday'].map((day, i) => `
            <div style="display:flex;justify-content:space-between;font-size:13px;padding:6px 0;border-bottom:0.5px solid var(--border)">
              <span style="color:var(--text2)">${day}</span>
              <span>${i === 2 ? '12:00 – 22:00' : '11:00 – 23:00'}</span>
            </div>
          `).join('')}
        </div>
        <div style="background:var(--bg2);border:0.5px solid var(--border);border-radius:var(--r-md);padding:16px 20px;">
          <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.8px;color:var(--text2);margin-bottom:12px;font-weight:500;">Details</div>
          <div style="display:flex;flex-direction:column;gap:8px;font-size:13px;">
            <div style="display:flex;justify-content:space-between"><span style="color:var(--text2)">Delivery time</span><span>${r.deliveryTime}</span></div>
            <div style="display:flex;justify-content:space-between"><span style="color:var(--text2)">Minimum order</span><span>$${r.minOrder}</span></div>
            <div style="display:flex;justify-content:space-between"><span style="color:var(--text2)">Rating</span><span>★ ${r.rating} / 5.0</span></div>
            <div style="display:flex;justify-content:space-between"><span style="color:var(--text2)">Cuisine</span><span>${r.tags.join(', ')}</span></div>
          </div>
        </div>
      </div>
    `;
  },

  switchTab(tab, btn) {
    State.currentDetailTab = tab;
    document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`tab-${tab}`).classList.add('active');
  },
};

// ══════════════════════════════════════════════
// CART
// ══════════════════════════════════════════════
const Cart = {
  add(restaurantId, item) {
    // If cart has items from a different restaurant, ask to clear
    if (State.cartRestaurant && State.cartRestaurant !== restaurantId && State.cart.length > 0) {
      if (!confirm(`Your cart has items from ${RESTAURANTS.find(r=>r.id===State.cartRestaurant)?.name}. Clear it and start a new cart from ${RESTAURANTS.find(r=>r.id===restaurantId)?.name}?`)) return;
      State.cart = [];
    }
    State.cartRestaurant = restaurantId;

    const existing = State.cart.find(c => c.item.id === item.id);
    if (existing) {
      existing.qty += 1;
    } else {
      State.cart.push({ item, restaurantId, qty: 1 });
    }

    this.updateUI();
    Toast.show(`${item.emoji} ${item.name} added to cart`, 'info');

    // Show FAB
    const fab = document.getElementById('cart-fab');
    fab.style.display = 'block';
  },

  remove(itemId) {
    State.cart = State.cart.filter(c => c.item.id !== itemId);
    if (State.cart.length === 0) {
      State.cartRestaurant = null;
      document.getElementById('cart-fab').style.display = 'none';
    }
    this.updateUI();
    this.renderDrawer();
  },

  changeQty(itemId, delta) {
    const entry = State.cart.find(c => c.item.id === itemId);
    if (!entry) return;
    entry.qty += delta;
    if (entry.qty <= 0) { this.remove(itemId); return; }
    this.updateUI();
    this.renderDrawer();
  },

  total() {
    return State.cart.reduce((sum, c) => sum + c.item.price * c.qty, 0);
  },

  count() {
    return State.cart.reduce((sum, c) => sum + c.qty, 0);
  },

  updateUI() {
    document.getElementById('cart-count').textContent = this.count();
    this.renderDrawer();
  },

  open() {
    document.getElementById('cart-drawer').classList.add('open');
    document.getElementById('cart-overlay').classList.add('open');
    this.renderDrawer();
  },

  close() {
    document.getElementById('cart-drawer').classList.remove('open');
    document.getElementById('cart-overlay').classList.remove('open');
  },

  renderDrawer() {
    const itemsEl = document.getElementById('cart-items');
    const footerEl = document.getElementById('cart-footer');
    const upsellEl = document.getElementById('cart-upsell');

    if (State.cart.length === 0) {
      itemsEl.innerHTML = `<div class="cart-empty">🛒<br><br>Your cart is empty.<br>Browse restaurants to add items.</div>`;
      footerEl.innerHTML = '';
      upsellEl.innerHTML = '';
      return;
    }

    itemsEl.innerHTML = State.cart.map(c => `
      <div class="cart-item">
        <div class="cart-item-icon">${c.item.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${c.item.name}</div>
          <div class="cart-item-price">$${(c.item.price * c.qty).toFixed(2)}</div>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="Cart.changeQty('${c.item.id}', -1)">−</button>
          <span class="qty-num">${c.qty}</span>
          <button class="qty-btn" onclick="Cart.changeQty('${c.item.id}', 1)">+</button>
        </div>
      </div>
    `).join('');

    // Upsell suggestions
    this.renderUpsell(upsellEl);

    const subtotal = this.total();
    const delivery = 2.50;
    const totalPts = Math.floor(subtotal * 10);

    footerEl.innerHTML = `
      <div class="cart-subtotal"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
      <div class="cart-subtotal"><span>Delivery</span><span>$${delivery.toFixed(2)}</span></div>
      <div class="cart-subtotal" style="color:var(--yellow)"><span>⭐ You'll earn</span><span>${totalPts} pts</span></div>
      <div class="cart-total"><span>Total</span><span class="total-val">$${(subtotal + delivery).toFixed(2)}</span></div>
      <button class="cart-checkout" onclick="Cart.checkout()">Place Order →</button>
    `;
  },

  renderUpsell(el) {
    const r = RESTAURANTS.find(r => r.id === State.cartRestaurant);
    if (!r) { el.innerHTML = ''; return; }

    // Get all items not in cart
    const cartIds = new Set(State.cart.map(c => c.item.id));
    const allItems = Object.values(r.menu).flat();
    const suggestions = allItems.filter(i => !cartIds.has(i.id) && i.popular).slice(0, 4);

    if (suggestions.length === 0) { el.innerHTML = ''; return; }

    el.innerHTML = `
      <div class="upsell-title">🤩 You might also like</div>
      <div class="upsell-items">
        ${suggestions.map(item => `
          <div class="upsell-item" onclick="Cart.add('${r.id}', ${JSON.stringify(item).replace(/"/g, '&quot;')})">
            <span>${item.emoji}</span>
            <div class="upsell-item-info">
              <div class="upsell-name">${item.name}</div>
              <div class="upsell-price">$${item.price.toFixed(2)}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  checkout() {
    if (State.cart.length === 0) return;
    const r = RESTAURANTS.find(r => r.id === State.cartRestaurant);
    const subtotal = this.total();
    const pts = Math.floor(subtotal * 10);

    const order = {
      id: 'ORD-' + Date.now().toString(36).toUpperCase(),
      restaurantId: State.cartRestaurant,
      restaurantName: r.name,
      restaurantEmoji: r.emoji,
      items: State.cart.map(c => ({ ...c.item, qty: c.qty })),
      subtotal,
      total: subtotal + 2.50,
      ptsEarned: pts,
      status: 'confirmed',
      statusStep: 1, // 0=placed,1=confirmed,2=preparing,3=on-the-way,4=delivered
      placedAt: new Date().toISOString(),
      eta: 25,
    };

    State.orders.unshift(order);
    State.saveOrders();
    State.addPoints(pts);

    // Clear cart
    State.cart = [];
    State.cartRestaurant = null;
    document.getElementById('cart-fab').style.display = 'none';

    this.close();
    this.updateUI();

    // Simulate order progression
    Orders.simulateProgress(order.id);

    Toast.show(`✅ Order placed! +${pts} pts earned`, 'success');
    App.goTo('orders');
  },
};

// ══════════════════════════════════════════════
// ORDERS VIEW
// ══════════════════════════════════════════════
const Orders = {
  STEPS: ['Placed', 'Confirmed', 'Preparing', 'On the way', 'Delivered'],
  STEP_ICONS: ['📋', '✅', '🔥', '🛵', '🎉'],

  render() {
    const el = document.getElementById('orders-content');
    if (State.orders.length === 0) {
      el.innerHTML = `
        <div class="orders-empty">
          <h3>No orders yet</h3>
          <p>Your order history will appear here after you place your first order.</p>
          <button class="btn-primary" onclick="App.goTo('restaurants')">Browse Restaurants</button>
        </div>
      `;
      return;
    }

    el.innerHTML = State.orders.map(order => this.renderCard(order)).join('');
  },

  renderCard(order) {
    const step = order.statusStep || 0;
    const isLive = step < 4;
    const progress = Math.round((step / 4) * 100);
    const date = new Date(order.placedAt);
    const dateStr = date.toLocaleDateString('en-GB', { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' });

    const statusLabels = ['Placed','Confirmed','Preparing','On the way','Delivered'];
    const statusClasses = ['status-confirmed','status-confirmed','status-preparing','status-on-the-way','status-delivered'];
    const statusLabel = statusLabels[step];
    const statusClass = statusClasses[step];

    const itemsSummary = order.items.map(i => `${i.qty}× ${i.name}`).join(', ');

    return `
      <div class="order-card" id="order-${order.id}">
        <div class="order-header">
          <div>
            <div class="order-rest-name">${order.restaurantEmoji} ${order.restaurantName}</div>
            <div class="order-date">${dateStr} · #${order.id}</div>
          </div>
          <span class="order-status ${statusClass}">${statusLabel}</span>
        </div>
        <div class="order-body">
          ${isLive ? this.renderTracker(order, step, progress) : ''}
          <div class="order-items-list">${itemsSummary}</div>
          <div class="order-footer">
            <div class="order-total">$${order.total.toFixed(2)}</div>
            <div class="order-actions">
              ${step === 4 ? `<button class="btn-ghost btn-sm" onclick="Orders.reorder('${order.id}')">🔄 Reorder</button>` : ''}
              <button class="btn-ghost btn-sm" onclick="App.goTo('restaurants')">Order again</button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  renderTracker(order, step, progress) {
    const etaMin = Math.max(1, (order.eta || 25) - (step * 6));
    return `
      <div class="live-tracker">
        <div class="live-tracker-title">
          <div class="live-dot"></div>
          Live tracking
        </div>
        <div class="tracker-steps">
          ${this.STEPS.map((label, i) => `
            <div class="tracker-step ${i < step ? 'done' : i === step ? 'active' : ''}">
              <div class="tracker-dot">${i < step ? '✓' : this.STEP_ICONS[i]}</div>
              <div class="tracker-label">${label}</div>
            </div>
          `).join('')}
        </div>
        <div class="tracker-progress-wrap">
          <div class="tracker-progress-bg">
            <div class="tracker-progress-fill" style="width:${progress}%"></div>
          </div>
          <div class="tracker-eta">
            ${step < 4 ? `Est. ${etaMin} min remaining` : '🎉 Order delivered!'}
          </div>
        </div>
      </div>
    `;
  },

  simulateProgress(orderId) {
    const delays = [8000, 15000, 35000, 55000]; // ms between steps
    let step = 1;

    const advance = () => {
      const order = State.orders.find(o => o.id === orderId);
      if (!order || order.statusStep >= 4) return;

      order.statusStep = step;
      if (step === 4) order.status = 'delivered';
      State.saveOrders();

      // Re-render if orders view is active
      if (State.activeView === 'orders') this.render();

      step++;
      if (step <= 4 && delays[step - 1]) {
        setTimeout(advance, delays[step - 1]);
      }
    };

    setTimeout(advance, delays[0]);
  },

  reorder(orderId) {
    const order = State.orders.find(o => o.id === orderId);
    if (!order) return;

    const r = RESTAURANTS.find(r => r.id === order.restaurantId);
    if (!r) return;

    // Clear cart first
    State.cart = [];
    State.cartRestaurant = null;

    const allMenuItems = Object.values(r.menu).flat();

    order.items.forEach(orderItem => {
      const menuItem = allMenuItems.find(m => m.id === orderItem.id);
      if (menuItem) {
        for (let i = 0; i < orderItem.qty; i++) {
          Cart.add(r.id, menuItem);
        }
      }
    });

    Cart.open();
    Toast.show('🔄 Previous order added to cart!', 'success');
  },
};

// ══════════════════════════════════════════════
// LOYALTY
// ══════════════════════════════════════════════
const Loyalty = {
  TIERS: [
    { name: 'Bronze', min: 0,    max: 500,  icon: '🥉' },
    { name: 'Silver', min: 500,  max: 1500, icon: '🥈' },
    { name: 'Gold',   min: 1500, max: 3000, icon: '🥇' },
    { name: 'Platinum', min: 3000, max: Infinity, icon: '💎' },
  ],

  getTier(pts) {
    return this.TIERS.slice().reverse().find(t => pts >= t.min) || this.TIERS[0];
  },

  render() {
    const pts = State.points;
    const tier = this.getTier(pts);
    const nextTier = this.TIERS[this.TIERS.indexOf(tier) + 1];
    const ordersCount = State.orders.filter(o => o.status === 'delivered' || o.statusStep === 4).length;

    const tierProgress = nextTier
      ? Math.round(((pts - tier.min) / (nextTier.min - tier.min)) * 100)
      : 100;

    document.getElementById('loyalty-content').innerHTML = `
      <div class="loyalty-overview">
        <div class="loyalty-card featured">
          <div class="loyalty-icon">⭐</div>
          <div class="loyalty-val">${pts.toLocaleString()}</div>
          <div class="loyalty-label">Total Points</div>
        </div>
        <div class="loyalty-card">
          <div class="loyalty-icon">${tier.icon}</div>
          <div class="loyalty-val" style="font-size:22px">${tier.name}</div>
          <div class="loyalty-label">Current Tier</div>
        </div>
        <div class="loyalty-card">
          <div class="loyalty-icon">🧾</div>
          <div class="loyalty-val">${ordersCount}</div>
          <div class="loyalty-label">Orders Completed</div>
        </div>
      </div>

      ${nextTier ? `
        <div class="tier-progress">
          <div class="section-title" style="font-size:18px">Progress to ${nextTier.icon} ${nextTier.name}</div>
          <div class="tier-bar-wrap">
            <div class="tier-labels">
              <span>${tier.icon} ${tier.name} (${pts} pts)</span>
              <span>${nextTier.icon} ${nextTier.name} (${nextTier.min} pts)</span>
            </div>
            <div class="tier-bar-bg">
              <div class="tier-bar-fill" style="width:${tierProgress}%"></div>
            </div>
            <div class="tier-next-label">${nextTier.min - pts} more points to reach ${nextTier.name}</div>
          </div>
        </div>
      ` : `
        <div style="background:linear-gradient(135deg,rgba(255,107,53,0.12),transparent);border:0.5px solid var(--orange-border);border-radius:var(--r-lg);padding:20px;text-align:center;margin-bottom:28px">
          <div style="font-size:32px;margin-bottom:8px">💎</div>
          <div style="font-family:var(--font-d);font-size:18px;font-weight:800;margin-bottom:4px">Platinum Member</div>
          <div style="font-size:13px;color:var(--text2);font-weight:300">You've reached the highest tier. Enjoy exclusive perks!</div>
        </div>
      `}

      <div class="rewards-section">
        <h3>Redeem Rewards</h3>
        <div class="rewards-grid">
          ${REWARDS_CATALOG.map(reward => {
            const canRedeem = pts >= reward.cost;
            return `
              <div class="reward-card">
                <div class="reward-icon">${reward.icon}</div>
                <div class="reward-name">${reward.name}</div>
                <div class="reward-desc">${reward.desc}</div>
                <div class="reward-cost">⭐ ${reward.cost} pts</div>
                <button class="reward-btn ${canRedeem ? 'can-redeem' : ''}"
                        onclick="Loyalty.redeem('${reward.id}')"
                        ${!canRedeem ? 'disabled title="Not enough points"' : ''}>
                  ${canRedeem ? 'Redeem Now' : `Need ${reward.cost - pts} more pts`}
                </button>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  redeem(rewardId) {
    const reward = REWARDS_CATALOG.find(r => r.id === rewardId);
    if (!reward || State.points < reward.cost) return;

    if (!confirm(`Redeem "${reward.name}" for ${reward.cost} points?`)) return;

    State.points -= reward.cost;
    State.savePoints();
    document.getElementById('nav-points').textContent = `⭐ ${State.points} pts`;

    Toast.show(`${reward.icon} "${reward.name}" redeemed! Applied to your next order.`, 'success');
    this.render();
  },
};

// ══════════════════════════════════════════════
// RESERVATION MODAL
// ══════════════════════════════════════════════
const Reservation = {
  open(restaurantId) {
    const r = RESTAURANTS.find(r => r.id === restaurantId);
    if (!r) return;

    document.getElementById('modal-title').textContent = `Reserve at ${r.name}`;

    const today = new Date().toISOString().split('T')[0];
    const maxDate = new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0];

    document.getElementById('modal-body').innerHTML = `
      <div class="reserve-form" id="reserve-form">
        <div class="form-row">
          <div class="form-group">
            <label>Date</label>
            <input type="date" id="res-date" min="${today}" max="${maxDate}" value="${today}" />
          </div>
          <div class="form-group">
            <label>Time</label>
            <select id="res-time">
              ${this.timeSlots().map(t => `<option value="${t}">${t}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Party Size</label>
            <select id="res-party">
              ${[1,2,3,4,5,6,7,8].map(n => `<option value="${n}" ${n===2?'selected':''}>${n} ${n===1?'guest':'guests'}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>Seating</label>
            <select id="res-seating">
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor / Terrace</option>
              <option value="bar">Bar seating</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Special Requests (optional)</label>
          <input type="text" id="res-notes" placeholder="Allergies, occasion, high chair…" />
        </div>
        <button class="btn-primary" style="width:100%;margin-top:4px" onclick="Reservation.confirm('${r.id}')">Confirm Reservation</button>
      </div>
    `;

    Modal.open();
  },

  timeSlots() {
    const slots = [];
    for (let h = 11; h <= 22; h++) {
      slots.push(`${String(h).padStart(2,'0')}:00`);
      if (h < 22) slots.push(`${String(h).padStart(2,'0')}:30`);
    }
    return slots;
  },

  confirm(restaurantId) {
    const r = RESTAURANTS.find(r => r.id === restaurantId);
    const date = document.getElementById('res-date').value;
    const time = document.getElementById('res-time').value;
    const party = document.getElementById('res-party').value;
    const seating = document.getElementById('res-seating').value;

    if (!date || !time) {
      Toast.show('Please fill in all required fields', 'error');
      return;
    }

    const dateFormatted = new Date(date).toLocaleDateString('en-GB', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
    const refNum = 'RES-' + Math.random().toString(36).substring(2,8).toUpperCase();

    document.getElementById('modal-body').innerHTML = `
      <div class="reservation-confirm">
        <div class="confirm-icon">🎉</div>
        <div class="confirm-title">You're all set!</div>
        <div class="confirm-sub">Your table has been reserved at ${r.name}. We'll send a reminder 2 hours before.</div>
        <div class="confirm-details">
          <div class="confirm-row"><span>Restaurant</span><span>${r.emoji} ${r.name}</span></div>
          <div class="confirm-row"><span>Date</span><span>${dateFormatted}</span></div>
          <div class="confirm-row"><span>Time</span><span>${time}</span></div>
          <div class="confirm-row"><span>Party size</span><span>${party} ${party==1?'guest':'guests'}</span></div>
          <div class="confirm-row"><span>Seating</span><span style="text-transform:capitalize">${seating}</span></div>
          <div class="confirm-row"><span>Reference</span><span style="color:var(--orange)">${refNum}</span></div>
        </div>
        <button class="btn-primary" style="width:100%" onclick="Modal.close()">Done</button>
      </div>
    `;

    State.addPoints(50);
    Toast.show('📅 Reservation confirmed! +50 pts earned', 'success');
  },
};

// ══════════════════════════════════════════════
// MODAL
// ══════════════════════════════════════════════
const Modal = {
  open() {
    document.getElementById('modal').classList.add('open');
    document.getElementById('modal-overlay').classList.add('open');
  },
  close() {
    document.getElementById('modal').classList.remove('open');
    document.getElementById('modal-overlay').classList.remove('open');
  },
};

// ══════════════════════════════════════════════
// TOAST
// ══════════════════════════════════════════════
const Toast = {
  show(msg, type = '') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  },
};

// ══════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Nav links
  document.querySelectorAll('.nav-link[data-view]').forEach(btn => {
    btn.addEventListener('click', () => App.goTo(btn.dataset.view));
  });

  // Restaurant filter tabs
  Restaurants.initFilters();

  // Initial nav points display
  document.getElementById('nav-points').textContent = `⭐ ${State.points} pts`;

  // If there are active orders, show FAB
  const hasCartItems = State.cart.length > 0;
  if (hasCartItems) document.getElementById('cart-fab').style.display = 'block';

  // Render home (active by default)
  // Home is static, no render needed

  // Kick off progress simulation for any in-flight orders from previous sessions
  // (In real app these would come from server)
});
