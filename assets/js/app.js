// ============================================================================
// AXON PETRO ENGINEERING PVT. LTD. (axonpetro.in)
// Main Interactive Application Controller, Router, WPS Explorer & Editable CMS
// ============================================================================

const STORAGE_KEY = 'AXONPETRO_CMS_DATA_V7';
const LEADS_KEY = 'AXONPETRO_LEADS_V2';

let appData = loadAppData();
let activePage = 'company';
let selectedProductCategory = 'All';
let productSearchQuery = '';
let selectedProjectCategory = 'All';
let selectedGalleryCategory = 'All';
let wpsCodeFilter = 'All';
let wpsProcessFilter = 'All';
let wpsSearchQuery = '';
let activeRndTab = 0;
let staffLoggedIn = true;
let currentStaffUser = 'admin@axonpetro.in (Chief Engineer)';
let liveBlockEditEnabled = false;

function loadAppData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Validate that the cached object has the modern business verticals structure
      if (parsed && parsed.products && parsed.products.length >= 30 && parsed.businessVerticals && parsed.businessVerticals.length >= 4) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Could not load saved CMS data:', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_AXON_DATA));
}

// Ensure businessVerticals is always present
if (!appData.businessVerticals || appData.businessVerticals.length < 4) {
  appData.businessVerticals = JSON.parse(JSON.stringify(DEFAULT_AXON_DATA.businessVerticals));
}

function saveAppData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
  } catch (e) {
    console.warn('Could not save CMS data:', e);
  }
}

function getLeads() {
  try {
    return JSON.parse(localStorage.getItem(LEADS_KEY) || '[]');
  } catch (e) {
    return [];
  }
}

function saveLead(lead) {
  const leads = getLeads();
  leads.unshift({
    id: 'RFQ-' + Date.now().toString().slice(-6),
    createdAt: new Date().toLocaleString(),
    ...lead
  });
  localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
}

// ============================================================================
// NAVIGATION & ROUTING
// ============================================================================
function navigateTo(pageId, scrollTargetId = null) {
  const pageMap = {
    'home': 'index.html',
    'company': 'about.html',
    'about': 'about.html',
    'verticals': 'business-verticals.html',
    'business-verticals': 'business-verticals.html',
    'technology': 'technology.html',
    'rnd': 'technology.html',
    'news': 'newsroom.html',
    'newsroom': 'newsroom.html',
    'contact': 'contact.html',
    'wps': 'wps-registry.html',
    'wps-registry.html': 'wps-registry.html',
    'admin': 'admin.html',
    'admin.html': 'admin.html'
  };

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  if (pageMap[pageId]) {
    const targetFile = pageMap[pageId];
    if (currentPath !== targetFile) {
      window.location.href = targetFile + (scrollTargetId ? '#' + scrollTargetId : '');
      return;
    }
  }

  // Handle anchor targets or direct section IDs on the current page
  const targetElementId = scrollTargetId || pageId;
  const el = document.getElementById(targetElementId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (history.pushState) {
      history.replaceState(null, '', '#' + targetElementId);
    }
    return;
  }

  const mainNav = document.getElementById('mainNav');
  if (mainNav) mainNav.classList.remove('open');

  // Collapse dropdown menus immediately when a link is clicked
  document.querySelectorAll('.adani-dropdown-menu').forEach(menu => {
    menu.style.display = 'none';
  });
  setTimeout(() => {
    document.querySelectorAll('.adani-dropdown-menu').forEach(menu => {
      menu.style.display = '';
    });
  }, 300);

  if (document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur();
  }
}

// Mobile Menu: Close when clicking outside or tapping any nav link
document.addEventListener('click', (e) => {
  const mainNav = document.getElementById('mainNav');
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  if (mainNav && mainNav.classList.contains('open')) {
    if (!mainNav.contains(e.target) && (!toggleBtn || !toggleBtn.contains(e.target))) {
      mainNav.classList.remove('open');
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      const mainNav = document.getElementById('mainNav');
      if (mainNav && window.innerWidth <= 1024) {
        mainNav.classList.remove('open');
      }
    });
  });
});

// ============================================================================
// RENDER FUNCTIONS
// ============================================================================
function renderAll() {
  renderHeroStats();
  renderBuyerPillars();
  renderAdaniBusinessVerticals();
  renderHomeFeaturedProducts();
  renderHomeProjectsPreview();
  renderClientsGrid('homeClientsGrid');
  renderClientsGrid('companyClientsGrid');
  renderLeadershipAndNews();
  renderProductCatalog();
  renderServicesSection();
  renderRndSection();
  renderCompanyProjects();
  renderCareersList();
  renderWpsTable();
  renderFacilitiesGrid();
  renderAdminPanel();
  populateRfqProductDropdown();
}

function getIconSvg(name) {
  const icons = {
    cog: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    factory: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M2 20h20M4 20V8l6 4V8l6 4V4h4v16"/></svg>`,
    shield: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    flask: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2v7.31L4.72 18.55A2 2 0 0 0 6.45 21.5h11.1a2 2 0 0 0 1.73-2.95L14 9.31V2"/><path d="M8.5 2h7"/><path d="M7 15h10"/></svg>`
  };
  return icons[name] || icons.cog;
}

function renderHeroStats() {
  const el = document.getElementById('heroStatsBar');
  if (!el) return;
  el.innerHTML = appData.company.stats.map(s => `
    <div class="stat-box">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
      <div class="stat-detail">${s.detail}</div>
    </div>
  `).join('');
}

function renderBuyerPillars() {
  const el = document.getElementById('buyerPillarsGrid');
  if (!el) return;
  el.innerHTML = appData.buyerPillars.map(p => `
    <div class="pillar-card">
      <div>
        <div class="pillar-icon">${getIconSvg(p.icon)}</div>
        <span style="font-size:0.72rem;font-weight:700;color:var(--slate-500);text-transform:uppercase;letter-spacing:0.06em;">${p.badge}</span>
        <h3 style="font-size:1.3rem;margin-top:0.25rem;">${p.title}</h3>
        <div class="pillar-question">"${p.question}"</div>
        <p class="pillar-answer">${p.answer}</p>
      </div>
      <span class="pillar-link" onclick="navigateTo('${p.linkTarget}')">
        ${p.linkText} <span>→</span>
      </span>
    </div>
  `).join('');
}

function renderLeadershipAndNews() {
  const leadEl = document.getElementById('leadershipGrid');
  if (leadEl && appData.leadership) {
    leadEl.innerHTML = appData.leadership.map(l => `
      <div class="pillar-card">
        <div>
          <span class="section-eyebrow">${l.role}</span>
          <h3 style="font-size:1.15rem;margin-bottom:0.45rem;">${l.name}</h3>
          <p style="font-size:0.86rem;color:var(--slate-600);">${l.bio}</p>
        </div>
      </div>
    `).join('');
  }
}

// Interactive Adani Business Verticals Switcher
let activeVerticalIndex = 0;
function renderAdaniBusinessVerticals() {
  const navEl = document.getElementById('adaniVerticalsNav');
  const showcaseEl = document.getElementById('adaniVerticalShowcase');
  if (!navEl || !showcaseEl) return;
  if (!appData.businessVerticals || appData.businessVerticals.length < 4) {
    appData.businessVerticals = JSON.parse(JSON.stringify(DEFAULT_AXON_DATA.businessVerticals));
  }

  navEl.innerHTML = appData.businessVerticals.map((v, idx) => `
    <button class="adani-vertical-tab ${idx === activeVerticalIndex ? 'active' : ''}" onclick="switchBusinessVertical(${idx})">
      <div class="mono" style="font-size:0.75rem;font-weight:700;color:var(--primary);margin-bottom:0.35rem;">VERTICAL ${v.code} //</div>
      <div style="font-family:var(--font-display);font-size:1.15rem;font-weight:700;color:var(--text-900);line-height:1.25;margin-bottom:0.3rem;">${v.title}</div>
      <div style="font-size:0.8rem;color:var(--text-500);">${v.subtitle}</div>
    </button>
  `).join('');

  const current = appData.businessVerticals[activeVerticalIndex] || appData.businessVerticals[0];
  showcaseEl.innerHTML = `
    <div style="display:grid;grid-template-columns:1.1fr 0.9fr;gap:2.5rem;align-items:center;" class="hero-grid">
      <div>
        <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;margin-bottom:0.85rem;">
          <span class="utility-badge" style="background:#eaf2fc;color:#1b5299;border-color:#c7daf2;">${current.badge}</span>
          <span class="mono" style="font-size:0.76rem;color:var(--text-500);font-weight:600;">AXON ECOSYSTEM VERTICAL ${current.code}</span>
        </div>
        <h2 style="font-size:clamp(1.75rem,3vw,2.35rem);margin-bottom:0.75rem;color:var(--text-900);">${current.title}</h2>
        <div class="mono" style="font-size:0.84rem;font-weight:700;color:var(--cyan);margin-bottom:1rem;">${current.tagline}</div>
        <p style="font-size:0.98rem;color:var(--text-600);margin-bottom:1.4rem;line-height:1.7;">${current.desc}</p>
        
        <div style="background:var(--surface-50);border:1px solid var(--surface-200);border-radius:14px;padding:1.35rem 1.5rem;margin-bottom:1.5rem;">
          <div style="font-weight:700;font-size:0.86rem;color:var(--text-900);margin-bottom:0.85rem;text-transform:uppercase;letter-spacing:0.04em;">Detailed Capabilities &amp; Strategic Solutions</div>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:0.75rem;padding:0;margin:0;">
            ${(current.pillars || []).map(p => {
              const parts = p.split(':');
              const heading = parts.length > 1 ? parts[0] : '';
              const detail = parts.length > 1 ? parts.slice(1).join(':') : p;
              return `
                <li style="display:flex;align-items:flex-start;gap:0.7rem;font-size:0.89rem;color:var(--text-700);line-height:1.55;">
                  <span style="color:var(--primary);font-weight:800;font-size:1rem;line-height:1.2;">✓</span>
                  <div>
                    ${heading ? `<strong style="color:var(--text-900);">${heading}:</strong>` : ''}
                    <span>${detail}</span>
                  </div>
                </li>
              `;
            }).join('')}
          </ul>
        </div>

        <div style="display:flex;gap:0.85rem;flex-wrap:wrap;">
          <a class="btn btn-primary" href="contact.html">
            <span>Connect on ${current.title}</span>
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      <div>
        <div style="border-radius:18px;overflow:hidden;border:1px solid var(--surface-200);box-shadow:var(--shadow-md);background:#ffffff;">
          <img src="${current.image}" alt="${current.title}" style="width:100%;height:380px;object-fit:cover;">
          <div style="padding:1.25rem;background:#ffffff;border-top:1px solid var(--surface-100);display:flex;justify-content:space-between;align-items:center;">
            <div>
              <div style="font-weight:700;font-size:0.9rem;color:var(--text-900);">Axon Petro Engineering Pvt. Ltd.</div>
              <div style="font-size:0.76rem;color:var(--text-500);">Engineering Beyond Conventional Boundaries</div>
            </div>
            <img src="assets/images/axon-symbol-user.png" alt="Axon Emblem" style="height:34px;width:34px;object-fit:contain;">
          </div>
        </div>
      </div>
    </div>
  `;
}

function switchBusinessVertical(index) {
  activeVerticalIndex = index;
  renderAdaniBusinessVerticals();
}

function createProductCardHtml(p) {
  const topSpecs = (p.specs || []).slice(0, 3);
  return `
    <article class="product-card">
      <div class="product-img-wrap" onclick="openProductModal('${p.id}')" style="cursor:pointer;">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="product-code-badge">${p.code}</span>
        <span class="product-std-badge">${p.badge}</span>
      </div>
      <div class="product-body">
        <div class="product-cat">${p.category}</div>
        <h3 class="product-title" onclick="openProductModal('${p.id}')">${p.name}</h3>
        <p class="product-desc">${p.shortDesc}</p>
        <div class="product-mini-specs">
          ${topSpecs.map(s => `
            <div class="mini-spec-row">
              <span>${s.param}</span>
              <span>${s.value}</span>
            </div>
          `).join('')}
        </div>
        <div class="material-tags">
          ${(p.materials || []).slice(0, 4).map(m => `<span class="mat-tag">${m}</span>`).join('')}
        </div>
        <div class="product-actions">
          <button class="btn btn-outline btn-sm" onclick="openProductModal('${p.id}')">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> Spec Sheet
          </button>
          <button class="btn btn-primary btn-sm" onclick="openRfqModal('${p.name} (${p.code})')">
            Enquire Now
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderHomeFeaturedProducts() {
  const el = document.getElementById('homeFeaturedProductsGrid');
  if (!el) return;
  const featured = appData.products.filter(p => p.featured).slice(0, 6);
  el.innerHTML = featured.map(createProductCardHtml).join('');
}

function renderProductCatalog() {
  const filterWrap = document.getElementById('productCategoryPills');
  const grid = document.getElementById('catalogProductsGrid');
  const countEl = document.getElementById('catalogCountLabel');
  if (!grid || !filterWrap) return;

  const categories = ['All', ...new Set(appData.products.map(p => p.category))];
  filterWrap.innerHTML = categories.map(cat => {
    const count = cat === 'All' ? appData.products.length : appData.products.filter(p => p.category === cat).length;
    return `
      <button class="filter-pill ${selectedProductCategory === cat ? 'active' : ''}"
              onclick="setProductCategory('${cat.replace(/'/g, "\\'")}')">
        ${cat} (${count})
      </button>
    `;
  }).join('');

  const q = productSearchQuery.trim().toLowerCase();
  const filtered = appData.products.filter(p => {
    const matchCat = selectedProductCategory === 'All' || p.category === selectedProductCategory;
    const matchSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      (p.materials || []).some(m => m.toLowerCase().includes(q)) ||
      (p.specs || []).some(s => s.param.toLowerCase().includes(q) || s.value.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${appData.products.length} Engineered Equipment Lines`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:3rem;background:#fff;border-radius:10px;border:1px solid var(--slate-200);">
        <h3>No matching equipment found</h3>
        <p style="color:var(--slate-500);margin:0.5rem 0 1.25rem;">We custom-fabricate vessels, skids, and piping to client drawings. Send us your P&ID or datasheet for a custom quote.</p>
        <button class="btn btn-primary" onclick="openRfqModal('Custom Fabrication Per Client Drawing')">Request Custom Fabrication Quote</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(createProductCardHtml).join('');
}

function setProductCategory(cat) {
  selectedProductCategory = cat;
  renderProductCatalog();
}

function handleProductSearch(val) {
  productSearchQuery = val;
  renderProductCatalog();
}

// ============================================================================
// PRODUCT DETAIL & SPEC SHEET MODAL (DHIRAJ "WHAT WE DO BETTER" MODEL)
// ============================================================================
function openProductModal(productId) {
  const p = appData.products.find(item => item.id === productId);
  if (!p) return;

  const modal = document.getElementById('productDetailModal');
  const titleEl = document.getElementById('modalProductTitle');
  const bodyEl = document.getElementById('modalProductBody');

  titleEl.textContent = `${p.code} — ${p.name}`;
  const galleryImgs = p.gallery && p.gallery.length ? p.gallery : [p.image];

  bodyEl.innerHTML = `
    <div class="modal-product-grid">
      <div>
        <div class="modal-product-img-box">
          <img id="modalMainProductImg" src="${galleryImgs[0]}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">
        </div>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:1.25rem;">
          ${galleryImgs.map((imgUrl, idx) => `
            <img src="${imgUrl}" alt="Thumbnail ${idx+1}"
                 style="width:68px;height:50px;object-fit:cover;border-radius:6px;cursor:pointer;border:2px solid var(--axon-blue);"
                 onclick="document.getElementById('modalMainProductImg').src='${imgUrl}'">
          `).join('')}
        </div>
        <div style="background:var(--slate-50);border:1px solid var(--slate-200);border-radius:8px;padding:1.1rem;">
          <h4 style="margin-bottom:0.5rem;font-size:0.95rem;">Available Material Grades</h4>
          <div class="material-tags" style="margin-bottom:0.9rem;">
            ${(p.materials || []).map(m => `<span class="mat-tag" style="background:#fff;border:1px solid var(--slate-300);">${m}</span>`).join('')}
          </div>
          <h4 style="margin-bottom:0.5rem;font-size:0.95rem;">Target Industries</h4>
          <div class="material-tags" style="margin-bottom:0;">
            ${(p.industries || []).map(ind => `<span class="mat-tag" style="background:var(--axon-sky);color:var(--axon-blue);">${ind}</span>`).join('')}
          </div>
        </div>
      </div>

      <div>
        <span class="section-eyebrow">${p.category} • ${p.badge}</span>
        <h2 style="font-size:1.65rem;margin-bottom:0.65rem;">${p.name}</h2>
        <p style="color:var(--slate-600);font-size:0.95rem;margin-bottom:1.25rem;">${p.overview || p.shortDesc}</p>

        <h4 style="font-size:1rem;margin-bottom:0.4rem;">Technical Specification Sheet</h4>
        <table class="spec-sheet-table">
          <tbody>
            ${(p.specs || []).map(s => `
              <tr>
                <th>${s.param}</th>
                <td>${s.value}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-top:1.5rem;">
          <button class="btn btn-primary" onclick="closeProductModal(); openRfqModal('${p.name} (${p.code})')">
            Submit Project Enquiry &rarr;
          </button>
          <button class="btn btn-outline" onclick="printProductSpecSheet('${p.id}')">
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg> Print / Save Spec Brochure (PDF)
          </button>
          <a class="btn btn-whatsapp" href="https://wa.me/${appData.company.whatsapp}?text=${encodeURIComponent('Hello Axonpetro Engineering, I would like technical details and specifications for ' + p.name + ' (' + p.code + ').')}" target="_blank" rel="noopener">
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function closeProductModal() {
  const modal = document.getElementById('productDetailModal');
  if (modal) modal.classList.remove('open');
}

function printProductSpecSheet(productId) {
  const p = appData.products.find(item => item.id === productId);
  if (!p) return;
  const win = window.open('', '_blank', 'width=900,height=800');
  if (!win) return;
  win.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Technical Datasheet - ${p.code} ${p.name} | Axon Petro Engineering</title>
      <style>
        body { font-family: Arial, sans-serif; color: #0f172a; padding: 32px; line-height: 1.5; }
        .hdr { display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #0066cc; padding-bottom: 16px; margin-bottom: 24px; }
        h1 { font-size: 22px; margin: 0 0 6px; color: #0a192f; }
        table { width: 100%; border-collapse: collapse; margin: 18px 0; }
        th, td { border: 1px solid #cbd5e1; padding: 10px 12px; text-align: left; font-size: 13px; }
        th { background: #f1f5f9; width: 35%; }
        .ftr { margin-top: 32px; font-size: 12px; color: #475569; border-top: 1px solid #cbd5e1; padding-top: 12px; }
      </style>
    </head>
    <body>
      <div class="hdr">
        <div>
          <h1>AXON PETRO ENGINEERING PVT. LTD.</h1>
          <div style="font-size:13px;color:#0066cc;font-weight:bold;">Engineered to perform. | www.axonpetro.in | Greengold Energy (JV)</div>
        </div>
        <div style="text-align:right;font-size:12px;">
          <strong>Document Ref:</strong> ${p.code}-SPEC<br>
          <strong>Design Code:</strong> ${p.badge}<br>
          <strong>Date:</strong> ${new Date().toLocaleDateString()}
        </div>
      </div>
      <h2>${p.name} (${p.code})</h2>
      <p>${p.overview || p.shortDesc}</p>
      <p><strong>Material Grades Qualified:</strong> ${(p.materials || []).join(', ')}</p>
      <p><strong>Industries Served:</strong> ${(p.industries || []).join(', ')}</p>
      <h3>Technical Specifications</h3>
      <table>
        <tbody>
          ${(p.specs || []).map(s => `<tr><th>${s.param}</th><td>${s.value}</td></tr>`).join('')}
        </tbody>
      </table>
      <div class="ftr">
        <strong>Axon Petro Engineering Pvt. Ltd.</strong> • RFQ Desk: ${appData.company.rfqEmail} • Phone/WhatsApp: ${appData.company.phone}<br>
        All welding procedures qualified to ASME Section IX (2010) and AWS D1.1 (2006).
      </div>
      <script>window.onload = () => { window.print(); }</script>
    </body>
    </html>
  `);
  win.document.close();
}

function printPolicyDocument(code, title, scope) {
  const win = window.open('', '_blank', 'width=900,height=800');
  if (!win) return;
  win.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${code} - ${title} | Axon Petro Engineering Pvt. Ltd.</title>
      <style>
        body { font-family: Arial, sans-serif; color: #0f172a; padding: 40px; line-height: 1.6; }
        .hdr { border-bottom: 3px solid #0066cc; padding-bottom: 16px; margin-bottom: 24px; }
        h1 { font-size: 22px; margin: 0; color: #0a192f; }
        .box { background: #f8fafc; border: 1px solid #cbd5e1; padding: 20px; border-radius: 8px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="hdr">
        <h1>AXON PETRO ENGINEERING PVT. LTD. & GREENGOLD ENERGY (JV)</h1>
        <div style="color:#0066cc;font-weight:bold;">Corporate Compliance & HSE Policy Document — www.axonpetro.in</div>
      </div>
      <h2>${code}: ${title}</h2>
      <div class="box">
        <strong>Certified Scope:</strong><br>${scope}
      </div>
      <h3>Policy Commitment</h3>
      <ul>
        <li><strong>Zero-LTI Safety Priority:</strong> Every shop-floor fabrication bay and client EPC construction site operates under strict Permit-to-Work (PTW), Job Safety Analysis (JSA), and LOTO procedures.</li>
        <li><strong>Full Weld & Material Traceability:</strong> 100% of pressure-retaining and structural welds are executed by qualified welders in accordance with our 26 certified ASME Section IX (2010) and AWS D1.1 (2006) WPS procedures (DESB-WPS-001 through DESB-WPS-026).</li>
        <li><strong>Third-Party Inspection (TPI):</strong> Open access for client and third-party inspectors (Lloyds, TUV, DNV, BV, PETRONAS) across all stage gates—from Mill Test Certificate (MTC) review and XRF PMI to 100% Radiography and Hydrotesting.</li>
      </ul>
      <p style="margin-top:40px;font-size:12px;color:#475569;">Authorized by: Head of QA/QC & HSE • Axon Petro Engineering Pvt. Ltd. (${appData.company.rfqEmail})</p>
      <script>window.onload = () => { window.print(); }</script>
    </body>
    </html>
  `);
  win.document.close();
}

// ============================================================================
// ELINTA MOTORS (/services/) MODEL: FULL-WIDTH ALTERNATING LIFECYCLE STAGES
// ============================================================================
function renderServicesSection() {
  const el = document.getElementById('elintaServicesGrid');
  if (!el) return;
  el.innerHTML = appData.services.map((srv, idx) => `
    <div id="service-stage-${srv.step}" class="elinta-stage-row ${idx % 2 === 1 ? 'reverse' : ''}">
      <div class="elinta-stage-media">
        <img src="${srv.image}" alt="${srv.title}" loading="lazy">
        <span class="elinta-stage-badge">STAGE ${srv.step} // ${srv.subtitle.toUpperCase()}</span>
      </div>
      <div class="elinta-stage-content">
        <div class="elinta-stage-num">0${idx + 1}</div>
        <div class="service-step-num">STAGE ${srv.step} • ${srv.subtitle}</div>
        <h3 style="font-size:clamp(1.45rem,2.2vw,1.85rem);margin-bottom:0.75rem;color:var(--text-900);">${srv.title}</h3>
        <p style="font-size:0.98rem;color:var(--text-600);margin-bottom:1.25rem;line-height:1.7;">${srv.description}</p>
        <div style="font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-900);margin-bottom:0.6rem;">Core Engineering & Execution Deliverables:</div>
        <ul class="service-cap-list">
          ${srv.capabilities.map(c => `<li>${c}</li>`).join('')}
        </ul>
        <div style="border-top:1px solid var(--surface-200);padding-top:1.15rem;margin-top:1.15rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
          <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
            ${srv.standards.map(st => `<span class="wps-badge">${st}</span>`).join('')}
          </div>
          <button class="btn btn-primary btn-sm" onclick="openRfqModal('Engineering Service: ${srv.title}')">
            Consult Engineering Team →
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================================================
// THERMAX R&D MODEL: INNOVATION PILLARS IN TABS + LAB-TO-MARKET
// ============================================================================
function renderRndSection() {
  const tabsHeader = document.getElementById('rndTabsHeader');
  const panelEl = document.getElementById('rndPillarActivePanel');
  const journeyEl = document.getElementById('rndLabToMarketGrid');
  const projEl = document.getElementById('rndProjectCardsGrid');
  if (!tabsHeader || !panelEl) return;

  const pillars = appData.rnd.pillars;
  tabsHeader.innerHTML = pillars.map((pil, idx) => `
    <button class="rnd-tab-btn ${activeRndTab === idx ? 'active' : ''}" onclick="setRndTab(${idx})">
      0${idx + 1}. ${pil.tabTitle}
    </button>
  `).join('');

  const cur = pillars[activeRndTab] || pillars[0];
  panelEl.innerHTML = `
    <div>
      <span class="section-eyebrow">${cur.badge}</span>
      <h3 style="font-size:1.7rem;margin-bottom:0.75rem;">${cur.heading}</h3>
      <p style="color:var(--slate-600);font-size:0.96rem;">${cur.description}</p>
      <div class="rnd-metrics-row">
        ${cur.metrics.map(m => `
          <div class="rnd-metric-box">
            <div class="rnd-metric-val">${m.value}</div>
            <div class="rnd-metric-lbl">${m.label}</div>
          </div>
        `).join('')}
      </div>
      <h4 style="font-size:0.95rem;margin-bottom:0.5rem;">Core R&D Initiatives & Deliverables:</h4>
      <ul style="padding-left:1.2rem;color:var(--slate-700);font-size:0.9rem;margin-bottom:1.5rem;">
        ${cur.keyFocusAreas.map(k => `<li style="margin-bottom:0.4rem;">${k}</li>`).join('')}
      </ul>
      <button class="btn btn-primary" onclick="navigateTo('rnd', 'rndCollabFormWrap')">
        Collaborate on ${cur.tabTitle} →
      </button>
    </div>
    <div>
      <div style="border-radius:12px;overflow:hidden;border:1px solid var(--slate-200);box-shadow:var(--shadow-md);height:340px;">
        <img src="${cur.image}" alt="${cur.heading}" style="width:100%;height:100%;object-fit:cover;">
      </div>
    </div>
  `;

  if (journeyEl) {
    journeyEl.innerHTML = appData.rnd.labToMarket.map(st => `
      <div class="lab-step-card">
        <div class="lab-step-num">${st.step}</div>
        <h4 style="font-size:1.05rem;margin-bottom:0.45rem;">${st.title}</h4>
        <p style="font-size:0.85rem;color:var(--slate-600);">${st.desc}</p>
      </div>
    `).join('');
  }

  if (projEl) {
    projEl.innerHTML = appData.rnd.projects.map(pr => `
      <div class="pillar-card">
        <div>
          <span class="section-eyebrow" style="margin-bottom:0.6rem;">${pr.tag}</span>
          <h3 style="font-size:1.2rem;margin-bottom:0.5rem;">${pr.title}</h3>
          <p style="font-size:0.88rem;color:var(--slate-600);margin-bottom:1rem;">${pr.summary}</p>
        </div>
        <div style="border-top:1px solid var(--slate-200);padding-top:0.85rem;font-size:0.8rem;">
          <div><strong>Partner / Division:</strong> ${pr.partner}</div>
          <div style="color:var(--emerald-600);font-weight:700;margin-top:0.2rem;">● ${pr.status}</div>
        </div>
      </div>
    `).join('');
  }
}

function setRndTab(idx) {
  activeRndTab = idx;
  renderRndSection();
}

// ============================================================================
// PROJECTS & CASE STUDIES (REAL PORTFOLIO FROM PDF 1)
// ============================================================================
function createProjectCardHtml(proj, idx) {
  const mainImgId = `proj-img-${proj.id}-${idx}`;
  return `
    <article class="project-card">
      <div class="project-img-box">
        <img id="${mainImgId}" src="${proj.mainImage}" alt="${proj.title}" loading="lazy">
        <span class="product-code-badge">${proj.category}</span>
        <span class="product-std-badge">${proj.year}</span>
      </div>
      ${proj.gallery && proj.gallery.length > 1 ? `
        <div class="project-thumbs">
          ${proj.gallery.map((gUrl, gIdx) => `
            <img src="${gUrl}" alt="View ${gIdx+1}" class="project-thumb ${gIdx === 0 ? 'active' : ''}"
                 onclick="switchProjectImage('${mainImgId}', '${gUrl}', this)">
          `).join('')}
        </div>
      ` : ''}
      <div class="product-body">
        <h3 style="font-size:1.18rem;margin-bottom:0.4rem;">${proj.title}</h3>
        <p style="font-size:0.86rem;color:var(--slate-600);margin-bottom:0.5rem;">${proj.scope}</p>
        <table class="project-meta-table">
          <tr><td>Client:</td><td><strong>${proj.client}</strong></td></tr>
          <tr><td>End User:</td><td>${proj.endUser}</td></tr>
          <tr><td>Location:</td><td>${proj.location}</td></tr>
          <tr><td>Execution:</td><td>${proj.pm} (${proj.jv})</td></tr>
        </table>
        <ul style="padding-left:1.1rem;font-size:0.81rem;color:var(--slate-600);margin-bottom:1.1rem;">
          ${(proj.highlights || []).map(h => `<li>${h}</li>`).join('')}
        </ul>
        <div style="margin-top:auto;">
          <button class="btn btn-outline btn-sm" style="width:100%;" onclick="openRfqModal('Similar Turnkey Project: ${proj.title}')">
            Request Similar Project Proposal →
          </button>
        </div>
      </div>
    </article>
  `;
}

function switchProjectImage(imgId, newSrc, thumbEl) {
  const mainEl = document.getElementById(imgId);
  if (mainEl) mainEl.src = newSrc;
  if (thumbEl && thumbEl.parentElement) {
    thumbEl.parentElement.querySelectorAll('.project-thumb').forEach(t => t.classList.remove('active'));
    thumbEl.classList.add('active');
  }
}

function renderHomeProjectsPreview() {
  const el = document.getElementById('homeProjectsGrid');
  if (!el) return;
  el.innerHTML = appData.projects.slice(0, 6).map((p, i) => createProjectCardHtml(p, 'home-' + i)).join('');
}

function renderCompanyProjects() {
  const pillsEl = document.getElementById('projectCategoryPills');
  const gridEl = document.getElementById('companyProjectsGrid');
  if (!gridEl || !pillsEl) return;

  const cats = ['All', ...new Set(appData.projects.map(p => p.category))];
  pillsEl.innerHTML = cats.map(c => `
    <button class="filter-pill ${selectedProjectCategory === c ? 'active' : ''}"
            onclick="setProjectCategory('${c.replace(/'/g, "\\'")}')">
      ${c}
    </button>
  `).join('');

  const filtered = selectedProjectCategory === 'All'
    ? appData.projects
    : appData.projects.filter(p => p.category === selectedProjectCategory);

  gridEl.innerHTML = filtered.map((p, i) => createProjectCardHtml(p, 'comp-' + i)).join('');
}

function setProjectCategory(cat) {
  selectedProjectCategory = cat;
  renderCompanyProjects();
}

function renderClientsGrid(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = appData.clients.map(c => `
    <div class="client-logo-card">
      ${c.logo ? `
        <div class="client-logo-img-box">
          <img src="${c.logo}" alt="${c.name}" loading="lazy">
        </div>
      ` : `
        <div class="client-logo-img-box" style="color:var(--axon-cyan);font-weight:800;font-size:0.95rem;">
          ${c.name}
        </div>
      `}
      <div style="font-weight:700;font-size:0.9rem;color:var(--navy-900);">${c.name}</div>
      <div style="font-size:0.76rem;color:var(--slate-500);">${c.sector}</div>
      <div style="font-size:0.72rem;color:var(--axon-blue);margin-top:0.15rem;font-family:var(--font-mono);font-weight:600;">${c.location}</div>
    </div>
  `).join('');
}

// ============================================================================
// WPS REGISTRY TABLE (PDF 1 PAGES 7, 8, 9: AWS D1.1 & ASME IX.2010)
// ============================================================================
function renderWpsTable() {
  const tbody = document.getElementById('wpsTableBody');
  const countEl = document.getElementById('wpsCountBadge');
  if (!tbody) return;

  const q = wpsSearchQuery.trim().toLowerCase();
  const filtered = appData.wpsRegistry.filter(row => {
    const matchCode = wpsCodeFilter === 'All' || row.code === wpsCodeFilter;
    const matchProc = wpsProcessFilter === 'All' || row.process.toLowerCase().includes(wpsProcessFilter.toLowerCase());
    const matchSearch = !q ||
      row.wpsNo.toLowerCase().includes(q) ||
      row.bm1Spec.toLowerCase().includes(q) ||
      row.bm2Spec.toLowerCase().includes(q) ||
      row.filler.toLowerCase().includes(q) ||
      row.process.toLowerCase().includes(q) ||
      row.code.toLowerCase().includes(q);
    return matchCode && matchProc && matchSearch;
  });

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${appData.wpsRegistry.length} Certified Procedures`;
  }

  tbody.innerHTML = filtered.map(r => `
    <tr>
      <td><strong>#${r.no}</strong></td>
      <td><span class="wps-badge">${r.wpsNo}</span></td>
      <td><span style="font-weight:700;color:${r.code.includes('ASME') ? 'var(--axon-blue)' : 'var(--amber-600)'};">${r.code}</span></td>
      <td><div style="font-weight:600;">${r.bm1Spec}</div><div style="font-size:0.74rem;color:var(--slate-500);">Group: ${r.bm1Group}</div></td>
      <td><div style="font-weight:600;">${r.bm2Spec}</div><div style="font-size:0.74rem;color:var(--slate-500);">Group: ${r.bm2Group}</div></td>
      <td><strong>${r.process}</strong></td>
      <td><code>${r.filler}</code></td>
      <td>${r.thickMin} – <strong>${r.thickMax}</strong></td>
      <td>${r.diaMin} – ${r.diaMax}</td>
    </tr>
  `).join('');
}

function setWpsCodeFilter(code, btnEl) {
  wpsCodeFilter = code;
  if (btnEl && btnEl.parentElement) {
    btnEl.parentElement.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
  }
  renderWpsTable();
}

function setWpsProcessFilter(proc) {
  wpsProcessFilter = proc;
  renderWpsTable();
}

function handleWpsSearch(val) {
  wpsSearchQuery = val;
  renderWpsTable();
}

function exportWpsCsv() {
  const headers = ['No', 'WPS_No', 'Code', 'Base_Material_1_Group', 'Base_Material_1_Spec', 'Base_Material_2_Group', 'Base_Material_2_Spec', 'Welding_Process', 'Filler_Metal', 'Min_Thickness', 'Max_Thickness', 'Min_Diameter', 'Max_Diameter'];
  const rows = appData.wpsRegistry.map(r => [
    r.no, r.wpsNo, r.code, r.bm1Group, r.bm1Spec, r.bm2Group, r.bm2Spec, r.process, r.filler, r.thickMin, r.thickMax, r.diaMin, r.diaMax
  ]);
  const csvContent = [headers, ...rows].map(e => e.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Axonpetro_WPS_Specification_Registry_ASME_IX_AWS_D1_1.csv';
  a.click();
  URL.revokeObjectURL(url);
}

function renderFacilitiesGrid() {
  const el = document.getElementById('facilitiesCardsGrid');
  const certEl = document.getElementById('certificationsCardsGrid');
  const galPills = document.getElementById('facilitiesGalleryPills');
  const galGrid = document.getElementById('facilitiesGalleryGrid');

  if (el) {
    el.innerHTML = appData.infrastructure.facilities.map(f => `
      <div class="project-card">
        <div class="project-img-box" style="height:210px;cursor:pointer;" onclick="openLightbox('${f.image}', '${f.title.replace(/'/g, "\\'")}')">
          <img src="${f.image}" alt="${f.title}" loading="lazy">
          <span class="product-std-badge">${f.metric}</span>
        </div>
        <div class="product-body">
          <h3 style="font-size:1.15rem;margin-bottom:0.45rem;">${f.title}</h3>
          <p style="font-size:0.88rem;color:var(--slate-600);">${f.desc}</p>
        </div>
      </div>
    `).join('');
  }

  if (galGrid && galPills && appData.infrastructure.gallery) {
    const galleryItems = appData.infrastructure.gallery;
    const cats = ['All', ...new Set(galleryItems.map(g => g.cat))];
    galPills.innerHTML = cats.map(c => `
      <button class="filter-pill ${selectedGalleryCategory === c ? 'active' : ''}"
              onclick="setGalleryCategory('${c.replace(/'/g, "\\'")}')">
        ${c}
      </button>
    `).join('');

    const filteredGal = selectedGalleryCategory === 'All'
      ? galleryItems
      : galleryItems.filter(g => g.cat === selectedGalleryCategory);

    galGrid.innerHTML = filteredGal.map(g => `
      <div class="project-card" style="cursor:pointer;" onclick="openLightbox('${g.src}', '${g.caption.replace(/'/g, "\\'")}')">
        <div class="project-img-box" style="height:195px;">
          <img src="${g.src}" alt="${g.caption}" loading="lazy">
          <span class="product-code-badge">${g.cat}</span>
        </div>
        <div style="padding:0.85rem 1rem;font-size:0.82rem;font-weight:600;color:var(--navy-900);">
          ${g.caption}
        </div>
      </div>
    `).join('');
  }

  if (certEl) {
    certEl.innerHTML = appData.infrastructure.certifications.map(c => `
      <div class="pillar-card">
        <div>
          <span class="section-eyebrow">${c.code}</span>
          <h3 style="font-size:1.15rem;margin-bottom:0.5rem;">${c.title}</h3>
          <p style="font-size:0.88rem;color:var(--slate-600);">${c.scope}</p>
        </div>
        <div style="display:flex;flex-direction:column;gap:0.5rem;margin-top:1rem;">
          <button class="btn btn-outline btn-sm" onclick="printPolicyDocument('${c.code.replace(/'/g, "\\'")}', '${c.title.replace(/'/g, "\\'")}', '${c.scope.replace(/'/g, "\\'")}')">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg> Download / Print Policy PDF
          </button>
          <button class="btn btn-primary btn-sm" onclick="openRfqModal('Request Signed ${c.code} Audit Package')">
            Request Signed Audit Dossier →
          </button>
        </div>
      </div>
    `).join('');
  }
}

function setGalleryCategory(cat) {
  selectedGalleryCategory = cat;
  renderFacilitiesGrid();
}

function openLightbox(src, caption) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  if (modal && img && cap) {
    img.src = src;
    cap.textContent = caption || '';
    modal.classList.add('open');
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.remove('open');
}

function toggleLiveBlockEdit() {
  liveBlockEditEnabled = !liveBlockEditEnabled;
  const btn = document.getElementById('liveEditToggleBtn');
  const targets = document.querySelectorAll('h1, h2, h3, p, .stat-value, .stat-label, .pillar-question, .pillar-answer');
  targets.forEach(el => {
    el.contentEditable = liveBlockEditEnabled ? 'true' : 'false';
    el.style.outline = liveBlockEditEnabled ? '1px dashed #00a8e8' : '';
  });
  if (btn) {
    btn.innerHTML = liveBlockEditEnabled
      ? '<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg> Done Editing'
      : '<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> Live Edit';
    btn.style.background = liveBlockEditEnabled ? 'var(--emerald-600)' : 'rgba(255,255,255,0.06)';
  }
  showToast(liveBlockEditEnabled
    ? 'Live Block Edit Mode ON: Click any heading, paragraph, or stat on the page to edit text inline!'
    : 'Live Block Edit Mode saved & closed.');
}

function exportFullCatalogJson() {
  const blob = new Blob([JSON.stringify(appData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'axonpetro_cms_catalog_backup.json';
  a.click();
  URL.revokeObjectURL(url);
}

function renderCareersList() {
  const el = document.getElementById('careersGrid');
  if (!el) return;
  el.innerHTML = appData.careers.map(job => `
    <div class="pillar-card">
      <div>
        <span class="section-eyebrow">${job.dept} • ${job.type}</span>
        <h3 style="font-size:1.15rem;margin-bottom:0.4rem;">${job.title}</h3>
        <p style="font-size:0.86rem;color:var(--slate-600);margin-bottom:0.85rem;">
          <strong>Location:</strong> ${job.location} &nbsp;|&nbsp; <strong>Experience:</strong> ${job.exp}
        </p>
      </div>
      <button class="btn btn-outline btn-sm" onclick="openRfqModal('Career Application: ${job.title}')">
        Apply Now →
      </button>
    </div>
  `).join('');
}

// ============================================================================
// RFQ MODAL & ENQUIRY SUBMISSION
// ============================================================================
function populateRfqProductDropdown() {
  const selects = document.querySelectorAll('.rfq-product-select');
  const optionsHtml = `
    <option value="General Turnkey EPC / Custom Fabrication Enquiry">General Turnkey EPC / Custom Fabrication Enquiry</option>
    ${appData.products.map(p => `<option value="${p.name} (${p.code})">${p.code} — ${p.name}</option>`).join('')}
    <option value="Custom Fabrication to Client Drawing / P&ID">Custom Fabrication to Client Drawing / P&ID</option>
  `;
  selects.forEach(s => { s.innerHTML = optionsHtml; });
}

function openRfqModal(prefillSubject = '') {
  const modal = document.getElementById('rfqModal');
  const selectEl = document.getElementById('modalRfqProduct');
  const notesEl = document.getElementById('modalRfqNotes');
  if (selectEl && prefillSubject) {
    let matched = false;
    for (let opt of selectEl.options) {
      if (opt.value === prefillSubject) {
        selectEl.value = prefillSubject;
        matched = true;
        break;
      }
    }
    if (!matched) {
      const customOpt = document.createElement('option');
      customOpt.value = prefillSubject;
      customOpt.textContent = prefillSubject;
      selectEl.prepend(customOpt);
      selectEl.value = prefillSubject;
    }
  }
  if (notesEl && prefillSubject) {
    notesEl.placeholder = `Specify required capacity, material grade (e.g. SS 316L, SA 516 Gr.70, Hastelloy C276), operating pressure/temperature, and delivery location for ${prefillSubject}...`;
  }
  if (modal) modal.classList.add('open');
}

function closeRfqModal() {
  const modal = document.getElementById('rfqModal');
  if (modal) modal.classList.remove('open');
}

function handleRfqSubmit(event, formSource) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());
  payload.source = formSource;

  saveLead(payload);
  form.reset();
  closeRfqModal();
  renderAdminPanel();

  showToast(`Enquiry received! Reference logged for ${payload.companyName || payload.fullName}. Our engineering desk will respond within 24 hours.`);
}

function showToast(msg) {
  let toast = document.getElementById('axonToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'axonToast';
    toast.style.cssText = 'position:fixed;bottom:1.5rem;left:1.5rem;z-index:3000;background:#ffffff;color:#0f172a;padding:1rem 1.4rem;border-radius:12px;border:1px solid #cbd5e1;border-left:4px solid #16a34a;box-shadow:0 12px 32px rgba(15,23,42,0.12);max-width:440px;font-size:0.9rem;font-weight:600;transition:all 0.3s ease;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
  }, 5000);
}

// ============================================================================
// MODULE 06 PROPOSAL: ADMIN CMS PANEL (MANAGE PRODUCTS, PROJECTS, STAFF LOGINS & LEADS)
// ============================================================================
function renderAdminPanel() {
  const prodList = document.getElementById('adminProductsList');
  const projList = document.getElementById('adminProjectsList');
  const leadsList = document.getElementById('adminLeadsList');
  const prodCountTitle = document.getElementById('adminProductCountHeading');
  const staffBadge = document.getElementById('adminStaffStatusBadge');

  if (staffBadge) {
    staffBadge.textContent = `Logged in as: ${currentStaffUser}`;
  }

  if (prodCountTitle) {
    prodCountTitle.textContent = `Active Equipment Catalog (${appData.products.length} Products Uploaded)`;
  }

  if (prodList) {
    prodList.innerHTML = appData.products.map(p => `
      <tr>
        <td><strong>${p.code}</strong></td>
        <td>${p.name}</td>
        <td>${p.category}</td>
        <td><span class="wps-badge">${p.badge}</span></td>
        <td>${(p.specs || []).length} rows</td>
        <td>
          <button class="btn btn-outline btn-sm" onclick="editProductInAdmin('${p.id}')">Edit</button>
          <button class="btn btn-outline btn-sm" style="color:#dc2626;border-color:#fca5a5;" onclick="deleteProductInAdmin('${p.id}')">Delete</button>
        </td>
      </tr>
    `).join('');
  }

  if (projList) {
    projList.innerHTML = appData.projects.map(pr => `
      <tr>
        <td><strong>${pr.year}</strong></td>
        <td>${pr.title}</td>
        <td>${pr.client} / ${pr.endUser}</td>
        <td>${pr.location}</td>
        <td>
          <button class="btn btn-outline btn-sm" style="color:#dc2626;border-color:#fca5a5;" onclick="deleteProjectInAdmin('${pr.id}')">Delete</button>
        </td>
      </tr>
    `).join('');
  }

  if (leadsList) {
    const leads = getLeads();
    if (leads.length === 0) {
      leadsList.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--slate-500);padding:1.5rem;">No RFQ or R&D enquiries submitted in this browser session yet. Try submitting any quote form!</td></tr>`;
    } else {
      leadsList.innerHTML = leads.map(l => `
        <tr>
          <td><span class="wps-badge">${l.id}</span><div style="font-size:0.72rem;color:var(--slate-500);">${l.createdAt}</div></td>
          <td><strong>${l.fullName || '-'}</strong><br><span style="font-size:0.78rem;color:var(--slate-500);">${l.companyName || ''}</span></td>
          <td>${l.email || '-'}<br>${l.phone || ''}</td>
          <td><strong>${l.productInterest || l.topic || l.source}</strong></td>
          <td>${l.materialGrade || '-'}</td>
          <td style="max-width:260px;font-size:0.8rem;">${l.notes || '-'}</td>
        </tr>
      `).join('');
    }
  }
}

function switchStaffRole(roleLabel) {
  currentStaffUser = roleLabel;
  renderAdminPanel();
  showToast(`Switched active staff session to ${roleLabel}`);
}

function handleAdminSaveProduct(event) {
  event.preventDefault();
  const f = event.target;
  const id = f.prodId.value || ('custom-eq-' + Date.now());
  const specsRaw = f.prodSpecs.value.trim().split('\n').filter(Boolean);
  const parsedSpecs = specsRaw.map(line => {
    const [param, ...rest] = line.split(':');
    return { param: (param || 'Specification').trim(), value: (rest.join(':') || 'Custom').trim() };
  });

  const newProd = {
    id,
    code: f.prodCode.value.trim(),
    name: f.prodName.value.trim(),
    category: f.prodCategory.value.trim(),
    badge: f.prodBadge.value.trim() || 'ASME Sec VIII',
    shortDesc: f.prodShortDesc.value.trim(),
    overview: f.prodShortDesc.value.trim(),
    image: f.prodImage.value.trim() || 'assets/images/project-reactor-crayvalley.jpg',
    gallery: [f.prodImage.value.trim() || 'assets/images/project-reactor-crayvalley.jpg'],
    featured: true,
    materials: f.prodMaterials.value.split(',').map(s => s.trim()).filter(Boolean),
    industries: ['Petrochemicals & Oleochemicals', 'Oil & Gas', 'Chemical Processing'],
    specs: parsedSpecs.length ? parsedSpecs : [{ param: 'Design Standard', value: 'ASME Sec VIII Div. 1' }]
  };

  const existingIdx = appData.products.findIndex(p => p.id === id);
  if (existingIdx >= 0) {
    appData.products[existingIdx] = newProd;
  } else {
    appData.products.unshift(newProd);
  }

  saveAppData();
  renderAll();
  f.reset();
  f.prodId.value = '';
  showToast(`Equipment "${newProd.name}" saved to catalog!`);
}

function handleAdminSaveProject(event) {
  event.preventDefault();
  const f = event.target;
  const newProj = {
    id: 'proj-' + Date.now(),
    title: f.projTitle.value.trim(),
    category: f.projCategory.value.trim(),
    client: f.projClient.value.trim(),
    endUser: f.projEndUser.value.trim(),
    pm: 'Axon Petro Engineering / Greengold Energy (JV)',
    location: f.projLocation.value.trim(),
    year: f.projYear.value.trim() || '2026',
    jv: 'Axon Petro Engineering',
    mainImage: f.projImage.value.trim() || 'assets/images/project-turnkey-emery-main.jpg',
    gallery: [f.projImage.value.trim() || 'assets/images/project-turnkey-emery-main.jpg'],
    scope: f.projScope.value.trim(),
    highlights: f.projHighlights.value.split('\n').map(s => s.trim()).filter(Boolean)
  };
  appData.projects.unshift(newProj);
  saveAppData();
  renderAll();
  f.reset();
  showToast(`Case Study "${newProj.title}" added to portfolio!`);
}

function deleteProjectInAdmin(projId) {
  appData.projects = appData.projects.filter(p => p.id !== projId);
  saveAppData();
  renderAll();
  showToast('Project removed from portfolio.');
}

function editProductInAdmin(productId) {
  const p = appData.products.find(item => item.id === productId);
  if (!p) return;
  const f = document.getElementById('adminProductForm');
  if (!f) return;
  f.prodId.value = p.id;
  f.prodCode.value = p.code;
  f.prodName.value = p.name;
  f.prodCategory.value = p.category;
  f.prodBadge.value = p.badge;
  f.prodImage.value = p.image;
  f.prodMaterials.value = (p.materials || []).join(', ');
  f.prodShortDesc.value = p.shortDesc;
  f.prodSpecs.value = (p.specs || []).map(s => `${s.param}: ${s.value}`).join('\n');
  f.scrollIntoView({ behavior: 'smooth', block: 'center' });
  showToast(`Loaded "${p.name}" into editor form.`);
}

function deleteProductInAdmin(productId) {
  appData.products = appData.products.filter(p => p.id !== productId);
  saveAppData();
  renderAll();
  showToast('Equipment removed from catalog.');
}

function resetCmsToDefaults() {
  localStorage.removeItem(STORAGE_KEY);
  appData = JSON.parse(JSON.stringify(DEFAULT_AXON_DATA));
  renderAll();
  showToast('CMS Catalog reset to 30-product factory defaults.');
}

// ============================================================================
// INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderAll();

  const hash = (window.location.hash || '').replace('#', '');
  if (hash) {
    navigateTo(hash);
  }

  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', e => {
      if (e.target === backdrop) backdrop.classList.remove('open');
    });
  });
});
