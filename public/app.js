// =========================================================================
// SVG WIREFRAME ILLUSTRATIONS (Matching the screenshot aesthetic)
// =========================================================================
const illustrations = {
  channels: `
    <svg class="w-56 h-32" viewBox="0 0 240 120" fill="none">
      <circle cx="72" cy="60" r="28" fill="#ffffff" stroke="#0f172a" stroke-width="1.8"/>
      <path d="M72 32A28 28 0 0198 50L72 60V32z" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.4"/>
      <path d="M98 50A28 28 0 0182 86L72 60L98 50z" fill="#d1fae5" stroke="#10b981" stroke-width="1.4"/>
      <circle cx="72" cy="60" r="11" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <rect x="118" y="36" width="84" height="10" rx="4" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <rect x="124" y="39.5" width="38" height="3" rx="1.5" fill="#7c3aed"/>
      <rect x="118" y="55" width="84" height="10" rx="4" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <rect x="124" y="58.5" width="52" height="3" rx="1.5" fill="#10b981"/>
      <rect x="118" y="74" width="84" height="10" rx="4" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <rect x="124" y="77.5" width="26" height="3" rx="1.5" fill="#0ea5e9"/>
    </svg>
  `,
  reports: `
    <svg class="w-56 h-32" viewBox="0 0 240 120" fill="none">
      <line x1="24" y1="30" x2="216" y2="30" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="24" y1="62" x2="216" y2="62" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 3"/>
      <rect x="44" y="64" width="18" height="30" rx="2.5" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="1.2"/>
      <rect x="76" y="76" width="18" height="18" rx="2.5" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.2"/>
      <rect x="108" y="52" width="18" height="42" rx="2.5" fill="#d1fae5" stroke="#10b981" stroke-width="1.2"/>
      <rect x="140" y="68" width="18" height="26" rx="2.5" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>
      <rect x="172" y="42" width="18" height="52" rx="2.5" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.2"/>
      <polyline points="53,54 85,66 117,42 149,56 181,32" stroke="#10b981" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="53" cy="54" r="2.5" fill="#10b981"/>
      <circle cx="117" cy="42" r="2.5" fill="#10b981"/>
      <circle cx="181" cy="32" r="2.5" fill="#10b981"/>
      <line x1="20" y1="94" x2="220" y2="94" stroke="#cbd5e1" stroke-width="1.5"/>
    </svg>
  `,
  aeoSeo: `
    <svg class="w-56 h-32" viewBox="0 0 240 120" fill="none">
      <rect x="28" y="14" width="52" height="92" rx="6" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <rect x="34" y="24" width="40" height="20" rx="3" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
      <rect x="38" y="30" width="22" height="2.5" rx="1" fill="#7c3aed"/>
      <rect x="38" y="35" width="14" height="2.5" rx="1" fill="#c4b5fd"/>
      <rect x="34" y="72" width="40" height="20" rx="3" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <rect x="38" y="78" width="20" height="2.5" rx="1" fill="#94a3b8"/>
      <rect x="38" y="83" width="12" height="2.5" rx="1" fill="#cbd5e1"/>
      <rect x="94" y="14" width="52" height="92" rx="6" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <circle cx="102" cy="21" r="2" fill="#0ea5e9"/>
      <rect x="100" y="28" width="40" height="20" rx="3" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1"/>
      <rect x="104" y="34" width="24" height="2.5" rx="1" fill="#0ea5e9"/>
      <rect x="104" y="39" width="14" height="2.5" rx="1" fill="#7dd3fc"/>
      <rect x="160" y="14" width="52" height="92" rx="6" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <circle cx="204" cy="21" r="2.2" fill="#10b981"/>
      <rect x="166" y="28" width="40" height="20" rx="3" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1"/>
      <rect x="170" y="34" width="24" height="2.5" rx="1" fill="#10b981"/>
      <rect x="170" y="39" width="14" height="2.5" rx="1" fill="#6ee7b7"/>
      <rect x="58" y="48" width="46" height="22" rx="4" fill="#ffffff" stroke="#6366f1" stroke-width="1.6"/>
      <rect x="64" y="55" width="24" height="3" rx="1" fill="#6366f1"/>
      <rect x="64" y="61" width="14" height="2.5" rx="1" fill="#a5b4fc"/>
    </svg>
  `,
  competitors: `
    <svg class="w-56 h-32" viewBox="0 0 240 120" fill="none">
      <rect x="28" y="14" width="52" height="92" rx="6" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <rect x="34" y="24" width="40" height="20" rx="3" fill="#fffbeb" stroke="#fde68a" stroke-width="1"/>
      <rect x="38" y="30" width="22" height="2.5" rx="1" fill="#f59e0b"/>
      <rect x="38" y="35" width="14" height="2.5" rx="1" fill="#fcd34d"/>
      <rect x="34" y="72" width="40" height="20" rx="3" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <rect x="38" y="78" width="20" height="2.5" rx="1" fill="#94a3b8"/>
      <rect x="94" y="14" width="52" height="92" rx="6" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <rect x="100" y="28" width="40" height="20" rx="3" fill="#fff1f2" stroke="#fecdd3" stroke-width="1"/>
      <rect x="104" y="34" width="24" height="2.5" rx="1" fill="#f43f5e"/>
      <rect x="160" y="14" width="52" height="92" rx="6" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <circle cx="204" cy="21" r="2.2" fill="#0ea5e9"/>
      <rect x="166" y="28" width="40" height="20" rx="3" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1"/>
      <rect x="170" y="34" width="24" height="2.5" rx="1" fill="#0ea5e9"/>
      <rect x="66" y="54" width="48" height="22" rx="4" fill="#ffffff" stroke="#7c3aed" stroke-width="1.8"/>
      <rect x="72" y="61" width="26" height="3.5" rx="1" fill="#7c3aed"/>
      <rect x="72" y="67" width="14" height="2.5" rx="1" fill="#c4b5fd"/>
    </svg>
  `,
  assistant: `
    <svg class="w-56 h-32" viewBox="0 0 240 120" fill="none">
      <rect x="34" y="14" width="172" height="92" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
      <rect x="122" y="22" width="74" height="14" rx="7" fill="#7c3aed"/>
      <rect x="132" y="28" width="44" height="2.5" rx="1.25" fill="#ffffff"/>
      <rect x="44" y="44" width="104" height="20" rx="7" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1"/>
      <circle cx="55" cy="54" r="3" fill="#10b981"/>
      <rect x="63" y="50" width="68" height="3" rx="1.5" fill="#059669"/>
      <rect x="63" y="56" width="44" height="2.5" rx="1.25" fill="#6ee7b7"/>
      <rect x="44" y="76" width="152" height="18" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <rect x="52" y="83.5" width="72" height="3" rx="1.5" fill="#cbd5e1"/>
      <circle cx="184" cy="85" r="5" fill="#0ea5e9"/>
    </svg>
  `,
  budget: `
    <svg class="w-56 h-32" viewBox="0 0 240 120" fill="none">
      <line x1="28" y1="92" x2="212" y2="92" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect x="44" y="48" width="14" height="44" rx="2.5" fill="#6366f1"/>
      <rect x="61" y="60" width="14" height="32" rx="2.5" fill="#e0e7ff" stroke="#a5b4fc" stroke-width="1"/>
      <rect x="92" y="34" width="14" height="58" rx="2.5" fill="#7c3aed"/>
      <rect x="109" y="42" width="14" height="50" rx="2.5" fill="#ede9fe" stroke="#c4b5fd" stroke-width="1"/>
      <rect x="140" y="54" width="14" height="38" rx="2.5" fill="#10b981"/>
      <rect x="157" y="46" width="14" height="46" rx="2.5" fill="#d1fae5" stroke="#6ee7b7" stroke-width="1"/>
      <rect x="188" y="38" width="14" height="54" rx="2.5" fill="#0ea5e9"/>
    </svg>
  `,
  contacts: `
    <svg class="w-56 h-32" viewBox="0 0 240 120" fill="none">
      <rect x="40" y="20" width="160" height="80" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <circle cx="64" cy="44" r="9" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.4"/>
      <circle cx="71" cy="50" r="2.5" fill="#10b981"/>
      <rect x="82" y="39" width="64" height="4" rx="2" fill="#0f172a"/>
      <rect x="82" y="47" width="42" height="3" rx="1.5" fill="#a78bfa"/>
      <line x1="54" y1="64" x2="186" y2="64" stroke="#f1f5f9" stroke-width="1.2"/>
      <circle cx="64" cy="80" r="9" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="1.4"/>
      <rect x="82" y="75" width="54" height="4" rx="2" fill="#475569"/>
      <rect x="82" y="83" width="38" height="3" rx="1.5" fill="#7dd3fc"/>
    </svg>
  `,
  leads: `
    <svg class="w-56 h-32" viewBox="0 0 240 120" fill="none">
      <rect x="28" y="18" width="56" height="84" rx="6" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <rect x="35" y="26" width="28" height="4" rx="2" fill="#0ea5e9"/>
      <rect x="35" y="36" width="42" height="22" rx="3" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1"/>
      <rect x="35" y="64" width="42" height="22" rx="3" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <rect x="92" y="18" width="56" height="84" rx="6" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <rect x="99" y="26" width="28" height="4" rx="2" fill="#7c3aed"/>
      <rect x="99" y="36" width="42" height="26" rx="3" fill="#7c3aed"/>
      <rect x="104" y="43" width="24" height="3" rx="1.5" fill="#ffffff"/>
      <rect x="104" y="50" width="16" height="2.5" rx="1.25" fill="#ddd6fe"/>
      <rect x="156" y="18" width="56" height="84" rx="6" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
      <rect x="163" y="26" width="28" height="4" rx="2" fill="#10b981"/>
      <rect x="163" y="36" width="42" height="20" rx="3" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1"/>
    </svg>
  `,
  seoAudit: `
    <svg class="w-56 h-32" viewBox="0 0 240 120" fill="none">
      <rect x="42" y="14" width="140" height="92" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
      <line x1="42" y1="26" x2="182" y2="26" stroke="#e2e8f0" stroke-width="1"/>
      <circle cx="50" cy="20" r="1.8" fill="#f43f5e"/>
      <circle cx="56" cy="20" r="1.8" fill="#f59e0b"/>
      <circle cx="62" cy="20" r="1.8" fill="#10b981"/>
      <rect x="52" y="36" width="86" height="5" rx="2" fill="#e0f2fe"/>
      <rect x="52" y="52" width="110" height="5" rx="2" fill="#d1fae5"/>
      <rect x="52" y="66" width="84" height="5" rx="2" fill="#ede9fe"/>
      <rect x="52" y="80" width="96" height="5" rx="2" fill="#fef3c7"/>
      <line x1="43" y1="47" x2="181" y2="47" stroke="#6366f1" stroke-width="1.8"/>
      <circle cx="201" cy="35" r="9" fill="#d1fae5"/>
      <path d="M196 35l3 3 6-6" stroke="#10b981" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  integrations: `
    <svg class="w-56 h-32" viewBox="0 0 240 120" fill="none">
      <line x1="88" y1="60" x2="112" y2="40" stroke="#cbd5e1" stroke-width="1.6" stroke-dasharray="3 3"/>
      <line x1="88" y1="60" x2="112" y2="80" stroke="#cbd5e1" stroke-width="1.6" stroke-dasharray="3 3"/>
      <line x1="152" y1="40" x2="174" y2="60" stroke="#cbd5e1" stroke-width="1.6" stroke-dasharray="3 3"/>
      <line x1="152" y1="80" x2="174" y2="60" stroke="#cbd5e1" stroke-width="1.6" stroke-dasharray="3 3"/>
      <rect x="44" y="42" width="44" height="36" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
      <rect x="54" y="56" width="24" height="4" rx="2" fill="#7c3aed"/>
      <rect x="54" y="63" width="16" height="3" rx="1.5" fill="#c4b5fd"/>
      <rect x="108" y="24" width="44" height="30" rx="7" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
      <rect x="117" y="37" width="26" height="4" rx="2" fill="#10b981"/>
      <rect x="108" y="66" width="44" height="30" rx="7" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="1.5"/>
      <rect x="117" y="79" width="26" height="4" rx="2" fill="#0ea5e9"/>
      <circle cx="182" cy="60" r="14" fill="#ffffff" stroke="#6366f1" stroke-width="1.6"/>
      <circle cx="182" cy="60" r="5" fill="#6366f1"/>
    </svg>
  `
};

const apps = [
  {
    id: 'channels',
    title: 'Channels',
    status: 'Active',
    description: 'Manage marketing channels and track channel share and lead share across all apps.',
    illustration: illustrations.channels,
    actionType: 'open'
  },
  {
    id: 'budget',
    title: 'Budget',
    status: 'Active',
    description: 'Plan and track monthly marketing budgets by channel and year.',
    illustration: illustrations.budget,
    actionType: 'open'
  },
  {
    id: 'contacts',
    title: 'Contacts',
    status: 'Active',
    description: 'Organize contact groups, partners, working countries, and contact persons.',
    illustration: illustrations.contacts,
    actionType: 'open'
  },
  {
    id: 'leads',
    title: 'Leads',
    status: 'Active',
    description: 'Kanban pipeline with custom stages, ERP systems, integrations, and channels.',
    illustration: illustrations.leads,
    actionType: 'open'
  },
  {
    id: 'integrations',
    title: 'Integrations',
    status: 'Active',
    description: 'Manage ERP, TA, and other integrations and track their distribution across leads.',
    illustration: illustrations.integrations,
    actionType: 'open'
  },
  {
    id: 'marketing-reports',
    title: 'Marketing Reports',
    status: 'In progress',
    description: 'End-to-end marketing performance reporting and customizable summaries.',
    illustration: illustrations.reports,
    actionType: 'open'
  },
  {
    id: 'aeo-seo',
    title: 'AEO & SEO Comparison',
    status: 'Active',
    description: 'Compare visibility across AI answer engines and traditional search rankings.',
    illustration: illustrations.aeoSeo,
    actionType: 'open'
  },
  {
    id: 'competitors',
    title: 'Competitor Analysis',
    status: 'Active',
    description: 'Track competitors, positioning, pricing, strengths, weaknesses, and channel overlap synced with Channels.',
    illustration: illustrations.competitors,
    actionType: 'open'
  },
  {
    id: 'ai-assistant',
    title: 'AI Marketing Assistant',
    status: 'Planned',
    description: 'Unified AI assistant for automating repetitive marketing workflows and tasks.',
    illustration: illustrations.assistant,
    actionType: 'open'
  },
  {
    id: 'seo-audit',
    title: 'SEO Audit',
    status: 'Planned',
    description: 'Automated technical and on-page SEO auditing for your web properties.',
    illustration: illustrations.seoAudit,
    actionType: 'open'
  }
];

let statusFilter = 'All';
let totalBudget = 0;
let currency = 'NOK';
let sidebarCollapsed = false;
let currentNavId = 'nav-hub';

function toggleSidebar() {
  sidebarCollapsed = !sidebarCollapsed;
  const aside = document.getElementById('app-sidebar');
  const mainEl = document.getElementById('app-main');
  const header = document.getElementById('sidebar-brand-header');
  const brandBtn = document.getElementById('sidebar-brand-btn');
  const navWrap = document.getElementById('sidebar-nav-wrap');
  const footerRow = document.getElementById('sidebar-footer-row');
  const toggleBtn = document.getElementById('sidebar-toggle-btn');
  const toggleIcon = document.getElementById('sidebar-toggle-icon');

  if (sidebarCollapsed) {
    aside.classList.remove('md:w-60');
    aside.classList.add('md:w-14');
    mainEl?.classList.remove('md:ml-60');
    mainEl?.classList.add('md:ml-14');
    header.classList.remove('px-4', 'justify-between');
    header.classList.add('px-2', 'justify-center');
    brandBtn.classList.add('hidden');
    navWrap.classList.remove('p-3');
    navWrap.classList.add('p-2');
    footerRow.classList.remove('px-2.5', 'justify-between');
    footerRow.classList.add('px-0', 'justify-center');
    toggleBtn.title = 'Expand sidebar';
    toggleIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 5l7 7-7 7M5 5l7 7-7 7"/>';
  } else {
    aside.classList.remove('md:w-14');
    aside.classList.add('md:w-60');
    mainEl?.classList.remove('md:ml-14');
    mainEl?.classList.add('md:ml-60');
    header.classList.remove('px-2', 'justify-center');
    header.classList.add('px-4', 'justify-between');
    brandBtn.classList.remove('hidden');
    navWrap.classList.remove('p-2');
    navWrap.classList.add('p-3');
    footerRow.classList.remove('px-0', 'justify-center');
    footerRow.classList.add('px-2.5', 'justify-between');
    toggleBtn.title = 'Collapse sidebar';
    toggleIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>';
  }

  document.querySelectorAll('#app-sidebar .sidebar-label').forEach(el => {
    el.classList.toggle('hidden', sidebarCollapsed);
  });

  renderSidebarApps();
  setActiveNavHighlight(currentNavId);
  setTimeout(() => window.dispatchEvent(new Event('resize')), 210);
}

let appGroups = [];
let selectedAppGroupAppsTemp = [];

function renderAppGroupAppsPicker() {
  const wrap = document.getElementById('ag-apps-picker');
  if (!wrap) return;
  wrap.innerHTML = apps.map(app => {
    const active = selectedAppGroupAppsTemp.includes(app.id);
    return `
      <button
        type="button"
        onclick="toggleAppGroupAppTemp('${app.id}')"
        class="px-2.5 py-1 rounded-full text-[11px] font-medium border transition-colors inline-flex items-center gap-1.5 ${
          active
            ? 'bg-[#0f172a] text-white border-[#0f172a]'
            : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
        }"
      >
        ${app.status === 'Active' ? `<span class="w-1.5 h-1.5 rounded-full ${active ? 'bg-emerald-400' : 'bg-emerald-500'}"></span>` : ''}
        <span>${app.title}</span>
      </button>
    `;
  }).join('');
}

function toggleAppGroupAppTemp(appId) {
  if (selectedAppGroupAppsTemp.includes(appId)) {
    selectedAppGroupAppsTemp = selectedAppGroupAppsTemp.filter(id => id !== appId);
  } else {
    selectedAppGroupAppsTemp.push(appId);
  }
  renderAppGroupAppsPicker();
}

function toggleAppGroupForm(show, editId = null) {
  const panel = document.getElementById('app-group-form');
  if (!panel) return;
  if (!show) {
    panel.classList.add('hidden');
    return;
  }
  panel.classList.remove('hidden');

  if (editId) {
    const grp = appGroups.find(g => g.id === editId);
    if (!grp) return;
    document.getElementById('app-group-form-title').textContent = 'Edit App Group';
    document.getElementById('ag-edit-id').value = String(grp.id);
    document.getElementById('ag-name').value = grp.name;
    selectedAppGroupAppsTemp = apps.filter(a => a.groupId === grp.id).map(a => a.id);
  } else {
    document.getElementById('app-group-form-title').textContent = 'New App Group';
    document.getElementById('ag-edit-id').value = '';
    document.getElementById('ag-name').value = '';
    selectedAppGroupAppsTemp = [];
  }
  renderAppGroupAppsPicker();
  document.getElementById('ag-name').focus();
}

function saveAppGroup() {
  const editId = document.getElementById('ag-edit-id').value;
  const name = (document.getElementById('ag-name').value || '').trim();
  if (!name) {
    document.getElementById('ag-name').focus();
    return;
  }

  let grpId;
  if (editId) {
    grpId = Number(editId);
    const idx = appGroups.findIndex(g => g.id === grpId);
    if (idx !== -1) appGroups[idx].name = name;
  } else {
    grpId = Date.now();
    appGroups.push({ id: grpId, name, collapsed: false });
  }

  apps.forEach(app => {
    if (selectedAppGroupAppsTemp.includes(app.id)) {
      app.groupId = grpId;
    } else if (app.groupId === grpId) {
      app.groupId = null;
    }
  });

  toggleAppGroupForm(false);
  renderSidebarApps();
  renderCards();
  if (activeGroupViewId && !document.getElementById('view-app-group')?.classList.contains('hidden')) {
    renderAppGroupView();
  }
}

function deleteAppGroup(groupId) {
  const grp = appGroups.find(g => g.id === groupId);
  confirmDeleteAction(`Delete group "${grp?.name || 'this group'}"? Apps inside will become ungrouped.`, () => {
    appGroups = appGroups.filter(g => g.id !== groupId);
    apps.forEach(app => {
      if (app.groupId === groupId) app.groupId = null;
    });
    renderSidebarApps();
    renderCards();
    if (activeGroupViewId === groupId) {
      openHub();
    }
  });
}

function toggleAppGroupCollapse(groupId) {
  const grp = appGroups.find(g => g.id === groupId);
  if (!grp) return;
  grp.collapsed = !grp.collapsed;
  renderSidebarApps();
}

function assignAppGroup(appId, groupIdVal) {
  const app = apps.find(a => a.id === appId);
  if (!app) return;
  app.groupId = groupIdVal ? Number(groupIdVal) : null;
  renderSidebarApps();
  renderCards();
  if (activeGroupViewId && !document.getElementById('view-app-group')?.classList.contains('hidden')) {
    renderAppGroupView();
  }
}

let activeGroupViewId = null;

function openAppGroup(groupId) {
  const grp = appGroups.find(g => g.id === groupId);
  if (!grp) return;
  activeGroupViewId = groupId;
  hideAllViews();
  document.getElementById('view-app-group').classList.remove('hidden');
  renderAppGroupView();
  setActiveNavHighlight('nav-hub');
  syncRouteUrl(`/groups/${slugifyRouteSegment(grp.name)}`);
}

function renderAppGroupView() {
  const grp = appGroups.find(g => g.id === activeGroupViewId);
  if (!grp) {
    openHub();
    return;
  }
  const grpApps = apps.filter(a => a.groupId === grp.id);
  document.getElementById('group-view-breadcrumb').textContent = grp.name;
  document.getElementById('group-view-title').textContent = grp.name;
  document.getElementById('group-view-subtitle').textContent =
    `${grpApps.length} app${grpApps.length === 1 ? '' : 's'} in this group`;

  document.getElementById('group-view-edit-btn').onclick = () => {
    openHub();
    toggleAppGroupForm(true, grp.id);
  };
  document.getElementById('group-view-delete-btn').onclick = () => {
    deleteAppGroup(grp.id);
  };

  const emptyEl = document.getElementById('group-apps-empty');
  const gridEl = document.getElementById('group-apps-grid');
  if (grpApps.length === 0) {
    emptyEl.classList.remove('hidden');
    gridEl.classList.add('hidden');
    return;
  }
  emptyEl.classList.add('hidden');
  gridEl.classList.remove('hidden');
  gridEl.innerHTML = grpApps.map(renderAppCardHtml).join('');
}

function renderSidebarAppItem(app) {
  const initial = app.title.charAt(0).toUpperCase();
  if (sidebarCollapsed) {
    return `
      <button
        onclick="openApp('${app.id}')"
        id="side-app-${app.id}"
        title="${app.title}"
        class="side-app-btn w-full flex items-center justify-center py-1.5 rounded-lg text-xs text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 transition-colors"
      >
        <span class="w-6 h-6 rounded-md border border-slate-200/80 bg-white flex items-center justify-center text-[11px] font-semibold text-slate-700">${initial}</span>
      </button>
    `;
  }
  return `
    <button
      onclick="openApp('${app.id}')"
      id="side-app-${app.id}"
      title="${app.title}"
      class="side-app-btn w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 transition-colors text-left"
    >
      <span class="truncate">${app.title}</span>
      ${app.status === 'Active' ? '<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>' : ''}
    </button>
  `;
}

function renderSidebarApps() {
  const container = document.getElementById('sidebar-apps-list');
  if (!container) return;

  if (appGroups.length === 0) {
    container.innerHTML = apps.map(renderSidebarAppItem).join('');
    setActiveNavHighlight(currentNavId);
    return;
  }

  const groupBlocks = appGroups.map(grp => {
    const grpApps = apps.filter(a => a.groupId === grp.id);
    if (sidebarCollapsed) {
      if (grpApps.length === 0) return '';
      return `
        <div class="pt-1.5 mt-1.5 border-t border-slate-200/60 first:border-t-0 first:pt-0 first:mt-0 space-y-0.5">
          ${grpApps.map(renderSidebarAppItem).join('')}
        </div>
      `;
    }
    return `
      <div class="space-y-0.5 pt-1.5">
        <div class="w-full flex items-center justify-between px-2.5 py-1 rounded-md text-[11px] font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100/60 transition-colors">
          <button onclick="openAppGroup(${grp.id})" class="truncate text-left flex-1">${grp.name}</button>
          <button onclick="toggleAppGroupCollapse(${grp.id})" class="inline-flex items-center gap-1 text-[10px] text-slate-400 shrink-0 pl-1">
            <span class="tabular-nums">${grpApps.length}</span>
            <svg class="w-3 h-3 transition-transform ${grp.collapsed ? '-rotate-90' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
        </div>
        ${grp.collapsed ? '' : `<div class="pl-2 space-y-0.5">${grpApps.length > 0 ? grpApps.map(renderSidebarAppItem).join('') : `<div class="px-2.5 py-1 text-[11px] text-slate-400">Empty</div>`}</div>`}
      </div>
    `;
  }).join('');

  const ungroupedApps = apps.filter(a => !a.groupId || !appGroups.some(g => g.id === a.groupId));
  const ungroupedBlock = ungroupedApps.length > 0
    ? (sidebarCollapsed
        ? `<div class="pt-1.5 mt-1.5 border-t border-slate-200/60 space-y-0.5">${ungroupedApps.map(renderSidebarAppItem).join('')}</div>`
        : `<div class="space-y-0.5 pt-2">
             <div class="px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-400">Other</div>
             ${ungroupedApps.map(renderSidebarAppItem).join('')}
           </div>`)
    : '';

  container.innerHTML = groupBlocks + ungroupedBlock;
  setActiveNavHighlight(currentNavId);
}

function renderGroupCardHtml(grp, grpApps) {
  const previewTiles = grpApps.slice(0, 4).map(a => `
    <div class="px-2.5 py-2 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between gap-2 shadow-2xs">
      <span class="text-[11px] font-medium text-slate-700 truncate">${a.title}</span>
      ${a.status === 'Active' ? '<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>' : '<span class="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></span>'}
    </div>
  `).join('');

  const illustrationHtml = grpApps.length > 0
    ? `<div class="w-full grid grid-cols-2 gap-2">${previewTiles}</div>`
    : `<div class="text-xs text-slate-400">Empty group</div>`;

  const desc = grpApps.length > 0
    ? `Includes ${grpApps.map(a => a.title).join(', ')}.`
    : 'No apps assigned yet. Click Edit to add apps to this group.';

  return `
    <article class="rounded-2xl border border-slate-200/80 bg-white overflow-hidden flex flex-col justify-between card-shadow transition-all">
      <div>
        <div onclick="openAppGroup(${grp.id})" class="h-44 bg-[#f5f7fa] border-b border-slate-200/60 flex items-center justify-center p-5 cursor-pointer">
          ${illustrationHtml}
        </div>

        <div class="p-5 space-y-2.5">
          <div class="flex items-start justify-between gap-2">
            <h2 onclick="openAppGroup(${grp.id})" class="text-[15px] font-bold text-slate-900 cursor-pointer hover:underline underline-offset-2">
              ${grp.name}
            </h2>
            <div class="flex items-center gap-1.5 shrink-0">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 tabular-nums">
                ${grpApps.length} app${grpApps.length === 1 ? '' : 's'}
              </span>
            </div>
          </div>

          <p class="text-xs text-slate-500 leading-relaxed line-clamp-2">
            ${desc}
          </p>
        </div>
      </div>

      <div class="px-5 pb-4 pt-2 flex items-center justify-between gap-2">
        ${renderActionMenuHtml(`toggleAppGroupForm(true, ${grp.id})`, `deleteAppGroup(${grp.id})`)}
        <button onclick="openAppGroup(${grp.id})" class="h-8 px-3.5 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white text-xs font-medium flex items-center gap-1.5 transition-colors shrink-0">
          <span>Open</span>
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M7 17L17 7M9 7h8v8"/>
          </svg>
        </button>
      </div>
    </article>
  `;
}

function renderAppCardHtml(app) {
  const badgeStyle = app.status === 'Active'
    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
    : 'bg-slate-100 text-slate-700';

  const groupSelectHtml = appGroups.length > 0
    ? `<select
         onchange="assignAppGroup('${app.id}', this.value)"
         title="Assign group"
         class="h-7 max-w-[130px] px-2 rounded-md border border-slate-200/80 bg-[#fbfcfd] text-[11px] text-slate-600 focus:outline-none focus:border-slate-400"
       >
         <option value="" ${!app.groupId ? 'selected' : ''}>Ungrouped</option>
         ${appGroups.map(g => `<option value="${g.id}" ${app.groupId === g.id ? 'selected' : ''}>${g.name}</option>`).join('')}
       </select>`
    : `<span class="text-[11px] text-slate-400 font-medium">App module</span>`;

  return `
    <article class="rounded-2xl border border-slate-200/80 bg-white overflow-hidden flex flex-col justify-between card-shadow transition-all">
      <div>
        <div onclick="openApp('${app.id}')" class="h-44 bg-[#f5f7fa] border-b border-slate-200/60 flex items-center justify-center p-4 cursor-pointer">
          ${app.illustration}
        </div>

        <div class="p-5 space-y-2.5">
          <div class="flex items-start justify-between gap-2">
            <h2 onclick="openApp('${app.id}')" class="text-[15px] font-bold text-slate-900 cursor-pointer hover:underline underline-offset-2">
              ${app.title}
            </h2>
            <div class="flex items-center gap-1.5 shrink-0">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-medium ${badgeStyle}">
                ${app.status}
              </span>
              <button onclick="openApp('${app.id}')" title="More options" class="w-7 h-7 rounded-full border border-slate-200/80 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-500">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="5" cy="12" r="1.6"/>
                  <circle cx="12" cy="12" r="1.6"/>
                  <circle cx="19" cy="12" r="1.6"/>
                </svg>
              </button>
            </div>
          </div>

          <p class="text-xs text-slate-500 leading-relaxed">
            ${app.description}
          </p>
        </div>
      </div>

      <div class="px-5 pb-4 pt-2 flex items-center justify-between gap-2">
        ${groupSelectHtml}
        <button onclick="openApp('${app.id}')" class="h-8 px-3.5 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white text-xs font-medium flex items-center gap-1.5 transition-colors shrink-0">
          <span>Open</span>
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M7 17L17 7M9 7h8v8"/>
          </svg>
        </button>
      </div>
    </article>
  `;
}

function renderCards() {
  const grid = document.getElementById('apps-grid');
  const query = (document.getElementById('search-input')?.value || '').toLowerCase();

  const filtered = apps.filter(app => {
    if (statusFilter !== 'All' && app.status !== statusFilter) return false;
    if (query && !app.title.toLowerCase().includes(query) && !app.description.toLowerCase().includes(query)) return false;
    return true;
  });

  const groupCardsHtml = appGroups.map(grp => {
    const grpAppsAll = apps.filter(a => a.groupId === grp.id);
    const grpAppsFiltered = filtered.filter(a => a.groupId === grp.id);
    const nameMatch = query && grp.name.toLowerCase().includes(query);
    if ((query || statusFilter !== 'All') && !nameMatch && grpAppsFiltered.length === 0) return '';
    return renderGroupCardHtml(grp, grpAppsAll);
  }).join('');

  const ungrouped = filtered.filter(a => !a.groupId || !appGroups.some(g => g.id === a.groupId));
  grid.innerHTML = groupCardsHtml + ungrouped.map(renderAppCardHtml).join('');
}

function cycleStatusFilter() {
  const states = ['All', 'Active', 'In progress', 'Planned'];
  const nextIdx = (states.indexOf(statusFilter) + 1) % states.length;
  statusFilter = states[nextIdx];
  document.getElementById('filter-label').textContent = statusFilter;
  renderCards();
}

function setActiveNavHighlight(activeId) {
  currentNavId = activeId;
  const navAlign = sidebarCollapsed ? 'justify-center px-0' : 'justify-between px-2.5';
  ['nav-home', 'nav-hub', 'nav-wishlist', 'nav-settings'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const isMatch = id === activeId;
    el.className = isMatch
      ? `w-full flex items-center ${navAlign} py-2 rounded-lg text-xs font-medium bg-slate-100 text-slate-900 transition-colors`
      : `w-full flex items-center ${navAlign} py-2 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100/70 hover:text-slate-900 transition-colors`;
  });
  const appAlign = sidebarCollapsed ? 'justify-center px-0' : 'justify-between px-2.5 text-left';
  document.querySelectorAll('.side-app-btn').forEach(btn => {
    const isMatch = btn.id === activeId;
    btn.className = isMatch
      ? `side-app-btn w-full flex items-center ${appAlign} py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-900 transition-colors`
      : `side-app-btn w-full flex items-center ${appAlign} py-1.5 rounded-lg text-xs text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 transition-colors`;
  });
}

function hideAllViews() {
  ['view-home', 'view-hub', 'view-app-group', 'view-channels', 'view-budget', 'view-contacts', 'view-leads', 'view-integrations', 'view-competitors', 'view-aeo-seo', 'view-marketing-reports', 'view-app-detail', 'view-wishlist', 'view-generic-section'].forEach(id => {
    document.getElementById(id)?.classList.add('hidden');
  });
}

let isRestoringRoute = false;
const WORKSPACE_YEAR_STORAGE_KEY = 'modu_workspace_year';
let pendingYearConfirm = null;

function slugifyRouteSegment(str) {
  return String(str || '')
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function syncRouteUrl(path, { replace = false } = {}) {
  if (isRestoringRoute) return;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  try {
    if (window.location.protocol === 'file:') {
      const targetHash = `#${normalized}`;
      if (window.location.hash !== targetHash) {
        window.location.hash = targetHash;
      }
      return;
    }
    if (window.location.pathname !== normalized) {
      window.history[replace ? 'replaceState' : 'pushState'](null, '', normalized);
    }
  } catch {
    // Ignore history errors in restricted frames
  }
}

function getCurrentRoutePath() {
  try {
    if (window.location.protocol === 'file:') {
      return (window.location.hash || '').replace(/^#/, '') || '/';
    }
    return window.location.pathname || '/';
  } catch {
    return '/';
  }
}

function readSavedWorkspaceYear() {
  try {
    const saved = window.localStorage.getItem(WORKSPACE_YEAR_STORAGE_KEY);
    if (saved && ['2025', '2026', '2027'].includes(saved)) return saved;
  } catch {
    // Ignore storage errors
  }
  return null;
}

function writeSavedWorkspaceYear(yr) {
  try {
    window.localStorage.setItem(WORKSPACE_YEAR_STORAGE_KEY, String(yr));
  } catch {
    // Ignore storage errors
  }
}

function syncAllYearSelects(yr = budgetYear) {
  const yearStr = String(yr || '2026');
  budgetYear = yearStr;
  reportsYear = yearStr;
  ['home-year-select', 'channels-year', 'budget-year-select', 'reports-year-select'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = yearStr;
  });
}

function closeYearConfirmModal() {
  pendingYearConfirm = null;
  document.getElementById('modu-year-confirm-modal')?.classList.add('hidden');
}

function applyConfirmedWorkspaceYear(nextYear) {
  syncAllYearSelects(nextYear);
  writeSavedWorkspaceYear(nextYear);
  const annualInput = document.getElementById('budget-annual-total');
  if (annualInput) {
    const saved = budgetTotalByYear[budgetYear];
    annualInput.value = saved > 0 ? saved : '';
  }
  if (!document.getElementById('view-home')?.classList.contains('hidden')) renderHomeView();
  if (!document.getElementById('view-channels')?.classList.contains('hidden')) renderChannelsView();
  if (!document.getElementById('view-budget')?.classList.contains('hidden')) renderBudgetView();
  if (!document.getElementById('view-marketing-reports')?.classList.contains('hidden')) renderMarketingReportsView();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function requestYearChange(nextYear, sourceSelectEl) {
  const targetYear = String(nextYear || '');
  if (!targetYear || targetYear === String(budgetYear)) return;
  if (sourceSelectEl) sourceSelectEl.value = budgetYear;

  pendingYearConfirm = targetYear;
  let modal = document.getElementById('modu-year-confirm-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modu-year-confirm-modal';
    modal.className = 'hidden fixed inset-0 z-50 bg-slate-900/35 backdrop-blur-[1px] flex items-center justify-center p-4';
    modal.innerHTML = `
      <div class="w-full max-w-xs rounded-2xl border border-slate-200 bg-white card-shadow p-5 space-y-4 animate-fade" onclick="event.stopPropagation()">
        <div class="space-y-1">
          <h3 id="modu-year-confirm-title" class="text-sm font-bold text-slate-900">Change workspace year?</h3>
          <p id="modu-year-confirm-msg" class="text-xs text-slate-500 leading-relaxed"></p>
        </div>
        <div class="flex items-center justify-end gap-2 pt-1">
          <button type="button" onclick="closeYearConfirmModal()" class="h-8 px-3 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-medium text-slate-600">Cancel</button>
          <button type="button" id="modu-year-confirm-yes" class="h-8 px-3.5 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white text-xs font-medium transition-colors">Switch year</button>
        </div>
      </div>
    `;
    modal.addEventListener('click', closeYearConfirmModal);
    document.body.appendChild(modal);
    document.getElementById('modu-year-confirm-yes').addEventListener('click', () => {
      const yr = pendingYearConfirm;
      closeYearConfirmModal();
      if (yr) applyConfirmedWorkspaceYear(yr);
    });
  }
  document.getElementById('modu-year-confirm-title').textContent = `Switch year to ${targetYear}?`;
  document.getElementById('modu-year-confirm-msg').textContent = `You are currently in ${budgetYear}. Switching to ${targetYear} updates Channels, Budget, and Marketing Reports.`;
  document.getElementById('modu-year-confirm-yes').textContent = `Switch to ${targetYear}`;
  modal.classList.remove('hidden');
}

function navigateToRoute(rawPath, { push = false } = {}) {
  const clean = String(rawPath || '/').split('?')[0].replace(/\/+$/, '') || '/';
  const parts = clean.slice(1).split('/').filter(Boolean).map(p => decodeURIComponent(p));
  isRestoringRoute = true;
  try {
    if (parts.length === 0 || (parts.length === 1 && parts[0] === 'apps')) {
      openHub();
      return;
    }
    const [head, sub] = parts;
    if (head === 'groups' && sub) {
      const grp = appGroups.find(g => String(g.id) === sub || slugifyRouteSegment(g.name) === sub);
      if (grp) openAppGroup(grp.id);
      else openHub();
      return;
    }
    if (head === 'channels') {
      openApp('channels');
      if (sub) {
        const ch = channelsList.find(c => slugifyRouteSegment(c.name) === sub || c.name.toLowerCase() === sub.toLowerCase());
        if (ch) openChannelDetail(ch.name);
      }
      return;
    }
    if (head === 'budget') {
      openApp('budget');
      if (sub && ['summary', 'total', 'allocated', 'actual', 'variance'].includes(sub)) {
        setBudgetSubView(sub);
      }
      return;
    }
    if (head === 'marketing-reports') {
      openApp('marketing-reports');
      if (sub) {
        const ch = channelsList.find(c => slugifyRouteSegment(c.name) === sub || c.name.toLowerCase() === sub.toLowerCase());
        if (ch) openReportChannelDetail(ch.name);
      }
      return;
    }
    if (['contacts', 'leads', 'integrations', 'competitors', 'aeo-seo'].includes(head)) {
      openApp(head);
      return;
    }
    if (head === 'apps' && sub) {
      openApp(sub);
      return;
    }
    if (head === 'home') {
      openHome();
      return;
    }
    if (head === 'wishlist' || head === 'settings') {
      openSection(head);
      return;
    }
    openHub();
  } finally {
    isRestoringRoute = false;
    if (push) syncRouteUrl(clean);
  }
}

window.addEventListener('popstate', () => {
  navigateToRoute(getCurrentRoutePath(), { push: false });
});

window.addEventListener('hashchange', () => {
  if (window.location.protocol === 'file:') {
    navigateToRoute(getCurrentRoutePath(), { push: false });
  }
});

let homeEditMode = false;
let homeDraggedWidgetId = null;

function createDefaultHomeDashboardLayout() {
  return {
    cols: 3,
    widgets: [
      { id: 'hw_kpis', type: 'workspace-kpis', span: 3 },
      { id: 'hw_pipeline_pie', type: 'leads-pipeline-pie', span: 1 },
      { id: 'hw_channel_share', type: 'channels-budget-donut', span: 1 },
      { id: 'hw_budget_pie', type: 'budget-channel-pie', span: 1 },
      { id: 'hw_channels_tbl', type: 'channels-table', span: 3 }
    ]
  };
}

let homeDashboardLayout = createDefaultHomeDashboardLayout();

const HOME_WIDGET_CATALOG = [
  { type: 'workspace-kpis', group: 'KPIs', title: 'Workspace KPIs', desc: 'Total budget, actual spend, leads, and pipeline value', defaultSpan: 3 },
  { type: 'budget-monthly-bar', group: 'Charts', title: 'Budget: Planned vs Actual', desc: 'Monthly planned vs actual spend bar chart', defaultSpan: 2 },
  { type: 'budget-channel-pie', group: 'Charts', title: 'Budget by Channel', desc: 'Pie breakdown of planned budget by channel', defaultSpan: 1 },
  { type: 'channels-budget-donut', group: 'Charts', title: 'Channel Share (Budget)', desc: 'Donut chart of budget allocation per channel', defaultSpan: 1 },
  { type: 'channels-leads-donut', group: 'Charts', title: 'Channel Lead Share', desc: 'Donut chart of inbound leads per channel', defaultSpan: 1 },
  { type: 'leads-pipeline-pie', group: 'Charts', title: 'Pipeline Distribution', desc: 'Pie chart of deals and NOK value by Kanban stage', defaultSpan: 1 },
  { type: 'integrations-dist-pie', group: 'Charts', title: 'Integration Distribution', desc: 'Pie chart by ERP, TA, and Other Integration', defaultSpan: 1 },
  { type: 'integrations-lead-pie', group: 'Charts', title: 'Lead Share per Integration', desc: 'Pie chart of leads connected to each integration', defaultSpan: 1 },
  { type: 'channels-table', group: 'Tables', title: 'Channels Performance Table', desc: 'Budget, spend, % of budget, and leads per channel', defaultSpan: 3 },
  { type: 'budget-planned-table', group: 'Tables', title: 'Allocated Budget by Channel', desc: 'Annual planned budget and % of total per channel', defaultSpan: 2 },
  { type: 'budget-actual-table', group: 'Tables', title: 'Actual Spend by Channel', desc: 'Annual spend and % of budget per channel', defaultSpan: 2 },
  { type: 'integrations-table', group: 'Tables', title: 'Integrations Table', desc: 'Configured integrations and connected lead counts', defaultSpan: 2 },
  { type: 'wishlist-table', group: 'Tables', title: 'Wishlist Requests', desc: 'Top requested apps and features sorted by votes', defaultSpan: 2 }
];

function openHome() {
  activeGroupViewId = null;
  hideAllViews();
  document.getElementById('view-home').classList.remove('hidden');
  setActiveNavHighlight('nav-home');
  syncRouteUrl('/home');
  renderHomeView();
}

function toggleHomeEditMode(force) {
  homeEditMode = typeof force === 'boolean' ? force : !homeEditMode;
  const btn = document.getElementById('home-edit-toggle-btn');
  const lbl = document.getElementById('home-edit-toggle-label');
  const resetBtn = document.getElementById('home-reset-btn');
  if (lbl) lbl.textContent = homeEditMode ? 'Done Editing' : 'Edit Layout';
  if (btn) {
    btn.className = homeEditMode
      ? 'h-8 px-3 rounded-lg bg-slate-900 text-white text-xs font-medium flex items-center gap-1.5 transition-colors'
      : 'h-8 px-3 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors';
  }
  if (resetBtn) {
    if (homeEditMode) resetBtn.classList.remove('hidden');
    else resetBtn.classList.add('hidden');
  }
  renderHomeView();
}

function toggleHomeWidgetPicker(force) {
  const panel = document.getElementById('home-widget-picker');
  if (!panel) return;
  const show = typeof force === 'boolean' ? force : panel.classList.contains('hidden');
  if (show) {
    renderHomeWidgetCatalog();
    panel.classList.remove('hidden');
  } else {
    panel.classList.add('hidden');
  }
}

function renderHomeWidgetCatalog() {
  const el = document.getElementById('home-widget-catalog');
  if (!el) return;
  const badgeCls = {
    KPIs: 'bg-[#ede9fe] text-[#6d28d9]',
    Charts: 'bg-[#eff6ff] text-[#1d4ed8]',
    Tables: 'bg-[#ecfdf5] text-[#047857]'
  };
  el.innerHTML = HOME_WIDGET_CATALOG.map(item => {
    const isAdded = homeDashboardLayout.widgets.some(w => w.type === item.type);
    return `
      <div class="rounded-xl border border-slate-200/80 bg-white p-3.5 flex items-start justify-between gap-3">
        <div class="min-w-0">
          <div class="flex items-center gap-1.5">
            <span class="px-1.5 py-0.5 rounded text-[10px] font-semibold ${badgeCls[item.group] || 'bg-slate-100 text-slate-700'}">${item.group}</span>
            <span class="text-xs font-semibold text-slate-900 truncate">${item.title}</span>
          </div>
          <p class="text-[11px] text-slate-500 mt-1">${item.desc}</p>
        </div>
        <button
          type="button"
          onclick="addHomeWidget('${item.type}')"
          class="h-7 px-2.5 rounded-lg text-[11px] font-medium shrink-0 transition-colors ${isAdded ? 'border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100' : 'bg-[#0f172a] hover:bg-slate-800 text-white'}"
        >
          ${isAdded ? '+ Add Again' : '+ Add'}
        </button>
      </div>
    `;
  }).join('');
}

function setHomeGridCols(cols) {
  homeDashboardLayout.cols = Number(cols) === 2 ? 2 : 3;
  homeDashboardLayout.widgets.forEach(w => {
    if (w.span > homeDashboardLayout.cols) w.span = homeDashboardLayout.cols;
  });
  renderHomeView();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function addHomeWidget(type) {
  const def = HOME_WIDGET_CATALOG.find(c => c.type === type);
  if (!def) return;
  const span = Math.min(homeDashboardLayout.cols || 3, def.defaultSpan || 1);
  homeDashboardLayout.widgets.push({
    id: `hw_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    type,
    span
  });
  renderHomeWidgetCatalog();
  renderHomeView();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function removeHomeWidget(widgetId) {
  homeDashboardLayout.widgets = homeDashboardLayout.widgets.filter(w => w.id !== widgetId);
  renderHomeWidgetCatalog();
  renderHomeView();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function setHomeWidgetSpan(widgetId, span) {
  const w = homeDashboardLayout.widgets.find(x => x.id === widgetId);
  if (!w) return;
  w.span = Math.min(homeDashboardLayout.cols || 3, Math.max(1, Number(span) || 1));
  renderHomeView();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function moveHomeWidget(widgetId, dir) {
  const idx = homeDashboardLayout.widgets.findIndex(w => w.id === widgetId);
  if (idx === -1) return;
  const targetIdx = idx + dir;
  if (targetIdx < 0 || targetIdx >= homeDashboardLayout.widgets.length) return;
  const arr = homeDashboardLayout.widgets;
  [arr[idx], arr[targetIdx]] = [arr[targetIdx], arr[idx]];
  renderHomeView();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function onHomeWidgetDragStart(e, widgetId) {
  homeDraggedWidgetId = widgetId;
  if (e?.dataTransfer) e.dataTransfer.effectAllowed = 'move';
}

function onHomeWidgetDrop(e, targetWidgetId) {
  e?.preventDefault();
  if (!homeDraggedWidgetId || homeDraggedWidgetId === targetWidgetId) return;
  const arr = homeDashboardLayout.widgets;
  const fromIdx = arr.findIndex(w => w.id === homeDraggedWidgetId);
  const toIdx = arr.findIndex(w => w.id === targetWidgetId);
  if (fromIdx === -1 || toIdx === -1) return;
  const [moved] = arr.splice(fromIdx, 1);
  arr.splice(toIdx, 0, moved);
  homeDraggedWidgetId = null;
  renderHomeView();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function resetHomeDashboard() {
  homeDashboardLayout = createDefaultHomeDashboardLayout();
  renderHomeView();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function drawHomeBarChart(canvasId, labels, plannedArr, actualArr) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(300, Math.floor(rect.width || 560));
  const height = 210;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  ctx.scale(dpr, dpr);

  const padL = 48, padR = 12, padT = 14, padB = 26;
  const plotW = width - padL - padR;
  const plotH = height - padT - padB;
  const maxVal = Math.max(1000, ...plannedArr, ...actualArr);

  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = '#f1f5f9';
  ctx.lineWidth = 1;
  ctx.font = '10px Inter, system-ui, sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';

  for (let i = 0; i <= 4; i++) {
    const y = padT + (plotH * i) / 4;
    const val = maxVal * (1 - i / 4);
    ctx.beginPath();
    ctx.moveTo(padL, y);
    ctx.lineTo(width - padR, y);
    ctx.stroke();
    const lbl = val >= 1000 ? `${Math.round(val / 1000)}k` : String(Math.round(val));
    ctx.fillText(lbl, padL - 6, y);
  }

  const n = labels.length;
  const slotW = plotW / n;
  const barW = Math.max(4, Math.min(14, slotW * 0.28));

  for (let i = 0; i < n; i++) {
    const cx = padL + i * slotW + slotW / 2;
    const pH = (plannedArr[i] / maxVal) * plotH;
    const aH = (actualArr[i] / maxVal) * plotH;

    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(cx - barW - 1, padT + plotH - pH, barW, pH);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(cx + 1, padT + plotH - aH, barW, aH);

    ctx.fillStyle = '#64748b';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(labels[i], cx, padT + plotH + 6);
  }
}

function renderHomeView() {
  const cols = Number(homeDashboardLayout.cols) === 2 ? 2 : 3;
  const colSel = document.getElementById('home-grid-cols');
  if (colSel) colSel.value = String(cols);
  const yrSel = document.getElementById('home-year-select');
  if (yrSel) yrSel.value = budgetYear;

  const gridEl = document.getElementById('home-widgets-grid');
  const emptyEl = document.getElementById('home-empty-state');
  if (!gridEl || !emptyEl) return;

  gridEl.className = cols === 2
    ? 'grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch'
    : 'grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch';

  const widgets = homeDashboardLayout.widgets || [];
  if (widgets.length === 0) {
    emptyEl.classList.remove('hidden');
    gridEl.classList.add('hidden');
    return;
  }
  emptyEl.classList.add('hidden');
  gridEl.classList.remove('hidden');

  const yearObj = budgetData[budgetYear] || {};
  const chNames = Object.keys(yearObj);
  let totalPlanned = 0;
  let totalActual = 0;
  const monthlyPlanned = Array(12).fill(0);
  const monthlyActual = Array(12).fill(0);
  chNames.forEach(ch => {
    const row = yearObj[ch];
    for (let m = 0; m < 12; m++) {
      totalPlanned += row.planned[m] || 0;
      totalActual += row.actual[m] || 0;
      monthlyPlanned[m] += row.planned[m] || 0;
      monthlyActual[m] += row.actual[m] || 0;
    }
  });
  const annualBudget = budgetTotalByYear[budgetYear] || totalPlanned || 0;
  const totalLeads = leadEntries.length;
  const totalPipelineVal = leadEntries.reduce((a, l) => a + (l.value || 0), 0);

  const spanClsMap = { 1: 'lg:col-span-1', 2: 'lg:col-span-2', 3: cols === 2 ? 'lg:col-span-2' : 'lg:col-span-3' };
  const postRenderTasks = [];

  gridEl.innerHTML = widgets.map((w, idx) => {
    const span = Math.min(cols, Math.max(1, w.span || 1));
    const spanCls = spanClsMap[span] || 'lg:col-span-1';
    const def = HOME_WIDGET_CATALOG.find(c => c.type === w.type) || { title: w.type, desc: '' };
    const canvasId = `home-cv-${w.id}`;

    const editBarHtml = homeEditMode ? `
      <div class="flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-[#fbfcfd] border-b border-slate-200/80 text-[11px]">
        <div class="flex items-center gap-1.5 text-slate-500 font-medium cursor-grab">
          <span>⋮⋮</span>
          <span>Widget ${idx + 1}</span>
        </div>
        <div class="flex items-center gap-1">
          <select onchange="setHomeWidgetSpan('${w.id}', this.value)" class="h-6 px-1.5 rounded border border-slate-200 bg-white text-[11px] text-slate-700">
            <option value="1" ${span === 1 ? 'selected' : ''}>1 col</option>
            <option value="2" ${span === 2 ? 'selected' : ''}>2 cols</option>
            ${cols === 3 ? `<option value="3" ${span === 3 ? 'selected' : ''}>Full (3 cols)</option>` : ''}
          </select>
          <button type="button" onclick="moveHomeWidget('${w.id}', -1)" ${idx === 0 ? 'disabled' : ''} class="w-6 h-6 rounded border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 text-slate-600">←</button>
          <button type="button" onclick="moveHomeWidget('${w.id}', 1)" ${idx === widgets.length - 1 ? 'disabled' : ''} class="w-6 h-6 rounded border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 text-slate-600">→</button>
          <button type="button" onclick="removeHomeWidget('${w.id}')" class="w-6 h-6 rounded border border-slate-200 bg-white hover:bg-red-50 hover:text-red-600 text-slate-500">✕</button>
        </div>
      </div>
    ` : '';

    let bodyHtml = '';
    if (w.type === 'workspace-kpis') {
      bodyHtml = `
        <div class="p-5 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          <div onclick="openApp('budget')" class="cursor-pointer rounded-xl border border-slate-200/80 bg-[#fbfcfd] p-3.5 hover:border-slate-300 transition-colors">
            <div class="text-[11px] text-slate-500">Total Budget (${budgetYear})</div>
            <div class="text-lg font-bold text-slate-900 tabular-nums mt-1">${Math.round(annualBudget).toLocaleString()} NOK</div>
          </div>
          <div onclick="openApp('budget')" class="cursor-pointer rounded-xl border border-slate-200/80 bg-[#fbfcfd] p-3.5 hover:border-slate-300 transition-colors">
            <div class="text-[11px] text-slate-500">Actual Spend (${budgetYear})</div>
            <div class="text-lg font-bold text-slate-900 tabular-nums mt-1">${Math.round(totalActual).toLocaleString()} NOK</div>
          </div>
          <div onclick="openApp('leads')" class="cursor-pointer rounded-xl border border-slate-200/80 bg-[#fbfcfd] p-3.5 hover:border-slate-300 transition-colors">
            <div class="text-[11px] text-slate-500">Total Leads</div>
            <div class="text-lg font-bold text-[#7c3aed] tabular-nums mt-1">${totalLeads}</div>
          </div>
          <div onclick="openApp('leads')" class="cursor-pointer rounded-xl border border-slate-200/80 bg-[#fbfcfd] p-3.5 hover:border-slate-300 transition-colors">
            <div class="text-[11px] text-slate-500">Pipeline Value</div>
            <div class="text-lg font-bold text-[#059669] tabular-nums mt-1">${Math.round(totalPipelineVal).toLocaleString()} NOK</div>
          </div>
        </div>
      `;
    } else if (w.type === 'budget-monthly-bar') {
      bodyHtml = `
        <div class="p-5 space-y-3">
          <div class="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-200/70">
            <div>
              <h3 class="text-sm font-semibold text-slate-900">${def.title} (${budgetYear})</h3>
              <p class="text-[11px] text-slate-500">${def.desc}</p>
            </div>
            <div class="flex items-center gap-3 text-[11px] text-slate-500 pr-8">
              <span class="inline-flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-[#cbd5e1]"></span>Planned</span>
              <span class="inline-flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-[#0f172a]"></span>Actual</span>
            </div>
          </div>
          <canvas id="${canvasId}" height="210" class="w-full"></canvas>
        </div>
      `;
      postRenderTasks.push(() => drawHomeBarChart(canvasId, monthNames, monthlyPlanned, monthlyActual));
    } else if (w.type === 'budget-channel-pie' || w.type === 'channels-budget-donut' || w.type === 'channels-leads-donut' || w.type === 'leads-pipeline-pie' || w.type === 'integrations-dist-pie' || w.type === 'integrations-lead-pie') {
      let segments = [];
      let totalLbl = '';
      if (w.type === 'budget-channel-pie' || w.type === 'channels-budget-donut') {
        segments = channelsList.map((ch, i) => {
          const r = yearObj[ch.name];
          const val = r ? r.planned.reduce((a, b) => a + b, 0) : 0;
          return { label: ch.name, value: val, color: ch.color || CHANNEL_PALETTE[i % CHANNEL_PALETTE.length], suffix: ' NOK' };
        }).filter(s => s.value > 0);
        totalLbl = `${Math.round(segments.reduce((a, s) => a + s.value, 0)).toLocaleString()} NOK`;
      } else if (w.type === 'channels-leads-donut') {
        segments = channelsList.map((ch, i) => ({
          label: ch.name,
          value: leadEntries.filter(l => l.channel === ch.name).length,
          color: ch.color || CHANNEL_PALETTE[i % CHANNEL_PALETTE.length],
          suffix: ''
        })).filter(s => s.value > 0);
        totalLbl = `${totalLeads} leads`;
      } else if (w.type === 'leads-pipeline-pie') {
        const shadeHex = ['#7c3aed', '#10b981', '#0ea5e9', '#f59e0b', '#f43f5e'];
        segments = leadStages.map((s, i) => ({
          label: s.name,
          value: leadEntries.filter(l => l.stageId === s.id).length,
          color: shadeHex[i % shadeHex.length],
          suffix: ''
        })).filter(s => s.value > 0);
        totalLbl = `${totalLeads} deals`;
      } else if (w.type === 'integrations-dist-pie') {
        segments = ['ERP', 'TA', 'Other Integration'].map(t => ({
          label: t,
          value: integrationsList.filter(i => i.type === t).length,
          color: INTEGRATION_TYPE_COLORS[t] || '#0ea5e9',
          suffix: ''
        })).filter(s => s.value > 0);
        totalLbl = `${integrationsList.length} integrations`;
      } else if (w.type === 'integrations-lead-pie') {
        const pal = ['#6366f1', '#10b981', '#0ea5e9', '#f59e0b', '#ec4899', '#8b5cf6'];
        segments = integrationsList.map((item, i) => ({
          label: item.name,
          value: leadEntries.filter(l => String(l.erp || '').toLowerCase() === item.name.toLowerCase() || String(l.integration || '').toLowerCase() === item.name.toLowerCase()).length,
          color: pal[i % pal.length],
          suffix: ''
        })).filter(s => s.value > 0);
        totalLbl = `${segments.reduce((a, s) => a + s.value, 0)} leads`;
      }
      segments.sort((a, b) => (b.value || 0) - (a.value || 0));
      const segSum = segments.reduce((a, s) => a + s.value, 0);
      const legendHtml = segments.length === 0
        ? `<p class="text-xs text-slate-400">No data yet for ${budgetYear}.</p>`
        : segments.slice(0, 6).map(s => {
            const pct = segSum > 0 ? ((s.value / segSum) * 100).toFixed(1) : '0.0';
            return `
              <div class="flex items-center justify-between gap-2 text-xs">
                <div class="flex items-center gap-2 min-w-0">
                  <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:${s.color}"></span>
                  <span class="font-medium text-slate-800 truncate">${s.label}</span>
                </div>
                <span class="tabular-nums text-slate-600 shrink-0">${Math.round(s.value).toLocaleString()}${s.suffix} <span class="text-slate-400">(${pct}%)</span></span>
              </div>
            `;
          }).join('');
      bodyHtml = `
        <div class="p-5 space-y-4">
          <div class="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/70">
            <div>
              <h3 class="text-sm font-semibold text-slate-900">${def.title}</h3>
              <p class="text-[11px] text-slate-500">${def.desc}</p>
            </div>
            <span class="text-[11px] tabular-nums text-slate-400 pr-8">${totalLbl}</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            <div class="sm:col-span-5 flex items-center justify-center">
              <canvas id="${canvasId}" width="150" height="150"></canvas>
            </div>
            <div class="sm:col-span-7 space-y-2">${legendHtml}</div>
          </div>
        </div>
      `;
      postRenderTasks.push(() => drawIntegrationsPieChart(segments, canvasId));
    } else if (w.type === 'channels-table') {
      const chRows = channelsList.map(ch => {
        const bRow = yearObj[ch.name];
        const bNok = bRow ? bRow.planned.reduce((a, b) => a + b, 0) : 0;
        const sNok = bRow ? bRow.actual.reduce((a, b) => a + b, 0) : 0;
        const pct = bNok > 0 ? ((sNok / bNok) * 100).toFixed(1) : '0.0';
        const lCount = leadEntries.filter(l => l.channel === ch.name).length;
        return { ch, bNok, sNok, pct, lCount };
      }).sort((a, b) => (b.bNok - a.bNok) || (b.sNok - a.sNok) || (b.lCount - a.lCount));
      const rowsHtml = chRows.map(({ ch, bNok, sNok, pct, lCount }) => `
          <tr class="hover:bg-slate-50/70">
            <td class="py-2.5 px-4 font-semibold text-slate-900"><div class="flex items-center gap-2">${renderChannelIconHtml(ch.name, 'w-5 h-5', ch.color)}<span>${ch.name}</span></div></td>
            <td class="py-2.5 px-4 text-right tabular-nums text-slate-800">${bNok > 0 ? `${Math.round(bNok).toLocaleString()} NOK` : '—'}</td>
            <td class="py-2.5 px-4 text-right tabular-nums text-slate-800">${sNok > 0 ? `${Math.round(sNok).toLocaleString()} NOK` : '—'}</td>
            <td class="py-2.5 px-4 text-right tabular-nums text-slate-600">${bNok > 0 ? `${pct}%` : '—'}</td>
            <td class="py-2.5 px-4 text-right tabular-nums font-medium text-slate-900">${lCount}</td>
          </tr>
        `).join('');
      bodyHtml = `
        <div class="p-5 pb-3 border-b border-slate-200/70 flex items-center justify-between">
          <div><h3 class="text-sm font-semibold text-slate-900">${def.title} (${budgetYear})</h3><p class="text-[11px] text-slate-500">${def.desc}</p></div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead><tr class="border-b border-slate-200/80 bg-[#fbfcfd] text-slate-500"><th class="py-2.5 px-4 font-medium">Channel</th><th class="py-2.5 px-4 font-medium text-right">Budget</th><th class="py-2.5 px-4 font-medium text-right">Spend</th><th class="py-2.5 px-4 font-medium text-right">Spend %</th><th class="py-2.5 px-4 font-medium text-right">Leads</th></tr></thead>
            <tbody class="divide-y divide-slate-200/70">${rowsHtml || '<tr><td colspan="5" class="py-6 text-center text-slate-400">No channels yet</td></tr>'}</tbody>
          </table>
        </div>
      `;
    } else if (w.type === 'budget-planned-table' || w.type === 'budget-actual-table') {
      const isActual = w.type === 'budget-actual-table';
      const sortedBudgetRows = chNames.map(ch => {
        const row = yearObj[ch];
        const planned = row.planned.reduce((a, b) => a + b, 0);
        const actual = row.actual.reduce((a, b) => a + b, 0);
        return { ch, planned, actual, val: isActual ? actual : planned };
      }).sort((a, b) => b.val - a.val || b.planned - a.planned);
      const rowsHtml = sortedBudgetRows.map(({ ch, planned, actual, val }) => {
        const denom = isActual ? Math.max(1, planned) : Math.max(1, annualBudget);
        const pct = (val / denom * 100).toFixed(1);
        return `
          <tr class="hover:bg-slate-50/70">
            <td class="py-2.5 px-4 font-semibold text-slate-900"><div class="flex items-center gap-2">${renderChannelIconHtml(ch, 'w-5 h-5')}<span>${ch}</span></div></td>
            <td class="py-2.5 px-4 text-right tabular-nums text-slate-800">${Math.round(val).toLocaleString()} NOK</td>
            <td class="py-2.5 px-4 text-right tabular-nums text-slate-600">${pct}%</td>
          </tr>
        `;
      }).join('');
      bodyHtml = `
        <div class="p-5 pb-3 border-b border-slate-200/70"><h3 class="text-sm font-semibold text-slate-900">${def.title} (${budgetYear})</h3></div>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead><tr class="border-b border-slate-200/80 bg-[#fbfcfd] text-slate-500"><th class="py-2.5 px-4 font-medium">Channel</th><th class="py-2.5 px-4 font-medium text-right">${isActual ? 'Actual Spend' : 'Planned'}</th><th class="py-2.5 px-4 font-medium text-right">${isActual ? '% of Budget' : '% of Total'}</th></tr></thead>
            <tbody class="divide-y divide-slate-200/70">${rowsHtml || '<tr><td colspan="3" class="py-6 text-center text-slate-400">No budget entries yet</td></tr>'}</tbody>
          </table>
        </div>
      `;
    } else if (w.type === 'integrations-table') {
      const sortedIntegrations = integrationsList.map(it => {
        const cnt = leadEntries.filter(l => String(l.erp || '').toLowerCase() === it.name.toLowerCase() || String(l.integration || '').toLowerCase() === it.name.toLowerCase()).length;
        return { it, cnt };
      }).sort((a, b) => b.cnt - a.cnt);
      const rowsHtml = sortedIntegrations.map(({ it, cnt }) => {
        return `<tr class="hover:bg-slate-50/70"><td class="py-2.5 px-4 font-semibold text-slate-900">${it.name}</td><td class="py-2.5 px-4 text-slate-600">${it.type}</td><td class="py-2.5 px-4 text-right tabular-nums font-medium text-slate-900">${cnt}</td></tr>`;
      }).join('');
      bodyHtml = `
        <div class="p-5 pb-3 border-b border-slate-200/70"><h3 class="text-sm font-semibold text-slate-900">${def.title}</h3></div>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead><tr class="border-b border-slate-200/80 bg-[#fbfcfd] text-slate-500"><th class="py-2.5 px-4 font-medium">Name</th><th class="py-2.5 px-4 font-medium">Type</th><th class="py-2.5 px-4 font-medium text-right">Leads</th></tr></thead>
            <tbody class="divide-y divide-slate-200/70">${rowsHtml || '<tr><td colspan="3" class="py-6 text-center text-slate-400">No integrations yet</td></tr>'}</tbody>
          </table>
        </div>
      `;
    } else if (w.type === 'wishlist-table') {
      const top = [...(wishlistItems || [])].sort((a, b) => (b.votes || 0) - (a.votes || 0)).slice(0, 6);
      const rowsHtml = top.map(it => `
        <tr class="hover:bg-slate-50/70"><td class="py-2.5 px-4 font-semibold text-slate-900">${it.title}</td><td class="py-2.5 px-4 text-slate-600">${it.category}</td><td class="py-2.5 px-4 text-slate-600">${it.status}</td><td class="py-2.5 px-4 text-right tabular-nums font-semibold text-slate-900">▲ ${it.votes || 0}</td></tr>
      `).join('');
      bodyHtml = `
        <div class="p-5 pb-3 border-b border-slate-200/70"><h3 class="text-sm font-semibold text-slate-900">${def.title}</h3></div>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead><tr class="border-b border-slate-200/80 bg-[#fbfcfd] text-slate-500"><th class="py-2.5 px-4 font-medium">Request</th><th class="py-2.5 px-4 font-medium">Category</th><th class="py-2.5 px-4 font-medium">Status</th><th class="py-2.5 px-4 font-medium text-right">Votes</th></tr></thead>
            <tbody class="divide-y divide-slate-200/70">${rowsHtml || '<tr><td colspan="4" class="py-6 text-center text-slate-400">No wishlist items</td></tr>'}</tbody>
          </table>
        </div>
      `;
    }

    return `
      <div
        data-home-widget="${w.id}"
        draggable="${homeEditMode ? 'true' : 'false'}"
        ${homeEditMode ? `ondragstart="onHomeWidgetDragStart(event, '${w.id}')" ondragover="event.preventDefault()" ondrop="onHomeWidgetDrop(event, '${w.id}')"` : ''}
        class="${spanCls} rounded-2xl border ${homeEditMode ? 'border-slate-300 ring-1 ring-slate-200/70' : 'border-slate-200/80'} bg-white card-shadow overflow-hidden flex flex-col"
      >
        ${editBarHtml}
        <div class="flex-1">${bodyHtml}</div>
      </div>
    `;
  }).join('');

  postRenderTasks.forEach(fn => {
    try { fn(); } catch (e) {}
  });
  if (typeof attachExportMenus === 'function') attachExportMenus();
}

function openHub() {
  activeGroupViewId = null;
  hideAllViews();
  document.getElementById('view-hub').classList.remove('hidden');
  setActiveNavHighlight('nav-hub');
  syncRouteUrl('/');
}

function openApp(appId) {
  const app = apps.find(a => a.id === appId);
  if (!app) return;
  hideAllViews();
  syncAllYearSelects(budgetYear);

  if (appId === 'channels') {
    activeChannelDetailName = null;
    document.getElementById('view-channels').classList.remove('hidden');
    renderChannelsView();
    syncRouteUrl('/channels');
  } else if (appId === 'budget') {
    document.getElementById('view-budget').classList.remove('hidden');
    renderBudgetView();
    syncRouteUrl(budgetSubView === 'summary' ? '/budget' : `/budget/${budgetSubView}`);
  } else if (appId === 'contacts') {
    document.getElementById('view-contacts').classList.remove('hidden');
    renderContactsView();
    syncRouteUrl('/contacts');
  } else if (appId === 'leads') {
    document.getElementById('view-leads').classList.remove('hidden');
    renderLeadsView();
    syncRouteUrl('/leads');
  } else if (appId === 'integrations') {
    document.getElementById('view-integrations').classList.remove('hidden');
    renderIntegrationsView();
    syncRouteUrl('/integrations');
  } else if (appId === 'competitors') {
    document.getElementById('view-competitors').classList.remove('hidden');
    renderCompetitorsView();
    syncRouteUrl('/competitors');
  } else if (appId === 'aeo-seo') {
    document.getElementById('view-aeo-seo').classList.remove('hidden');
    renderAeoSeoView();
    syncRouteUrl('/aeo-seo');
  } else if (appId === 'marketing-reports') {
    activeReportChannel = null;
    document.getElementById('view-marketing-reports').classList.remove('hidden');
    renderMarketingReportsView();
    syncRouteUrl('/marketing-reports');
  } else {
    document.getElementById('view-app-detail').classList.remove('hidden');
    document.getElementById('active-app-breadcrumb').textContent = app.title;
    document.getElementById('active-app-title').textContent = app.title;
    document.getElementById('active-app-desc').textContent = app.description;
    document.getElementById('active-app-status').textContent = app.status;
    document.getElementById('active-app-empty-title').textContent = `${app.title} Workspace`;
    syncRouteUrl(`/apps/${app.id}`);
  }

  setActiveNavHighlight(`side-app-${app.id}`);
}

let wishlistStatusFilter = 'all';
let wishlistItems = [
  {
    id: 1,
    title: 'Campaign Calendar',
    category: 'New App',
    priority: 'High',
    status: 'Planned',
    author: 'Marketing Team',
    description: 'Shared monthly calendar for launches, newsletters, and paid campaigns across channels.',
    votes: 6,
    voted: false,
    createdAt: '2026-11-20'
  },
  {
    id: 2,
    title: 'HubSpot & Pipedrive Sync',
    category: 'Integration',
    priority: 'High',
    status: 'In Progress',
    author: 'Growth Ops',
    description: 'Two-way sync between Leads stages and external CRM pipelines.',
    votes: 4,
    voted: false,
    createdAt: '2026-11-22'
  },
  {
    id: 3,
    title: 'UTM Link Builder',
    category: 'Automation',
    priority: 'Medium',
    status: 'Requested',
    author: 'Performance Team',
    description: 'Generate and track standardized UTM parameters per channel and campaign.',
    votes: 3,
    voted: false,
    createdAt: '2026-11-24'
  }
];

function toggleWishlistForm(show, editId = null) {
  const panel = document.getElementById('wishlist-form-panel');
  if (!panel) return;
  if (!show) {
    panel.classList.add('hidden');
    return;
  }
  if (editId) {
    const item = wishlistItems.find(w => w.id === editId);
    if (!item) return;
    document.getElementById('wishlist-form-title').textContent = 'Edit Wishlist Item';
    document.getElementById('wish-edit-id').value = String(item.id);
    document.getElementById('wish-title').value = item.title || '';
    document.getElementById('wish-category').value = item.category || 'New App';
    document.getElementById('wish-priority').value = item.priority || 'Medium';
    document.getElementById('wish-status').value = item.status || 'Requested';
    document.getElementById('wish-author').value = item.author || '';
    document.getElementById('wish-desc').value = item.description || '';
  } else {
    document.getElementById('wishlist-form-title').textContent = 'Add App or Feature Request';
    document.getElementById('wish-edit-id').value = '';
    document.getElementById('wish-title').value = '';
    document.getElementById('wish-category').value = 'New App';
    document.getElementById('wish-priority').value = 'Medium';
    document.getElementById('wish-status').value = 'Requested';
    document.getElementById('wish-author').value = '';
    document.getElementById('wish-desc').value = '';
  }
  panel.classList.remove('hidden');
  document.getElementById('wish-title')?.focus();
}

function saveWishlistItem() {
  const editId = document.getElementById('wish-edit-id').value;
  const title = (document.getElementById('wish-title').value || '').trim();
  const category = document.getElementById('wish-category').value || 'New App';
  const priority = document.getElementById('wish-priority').value || 'Medium';
  const status = document.getElementById('wish-status').value || 'Requested';
  const author = (document.getElementById('wish-author').value || '').trim() || 'Team';
  const description = (document.getElementById('wish-desc').value || '').trim();

  if (!title) {
    document.getElementById('wish-title').focus();
    return;
  }

  if (editId) {
    const item = wishlistItems.find(w => w.id === Number(editId));
    if (item) {
      item.title = title;
      item.category = category;
      item.priority = priority;
      item.status = status;
      item.author = author;
      item.description = description;
    }
  } else {
    wishlistItems.unshift({
      id: Date.now(),
      title,
      category,
      priority,
      status,
      author,
      description,
      votes: 1,
      voted: true,
      createdAt: new Date().toISOString().slice(0, 10)
    });
  }

  toggleWishlistForm(false);
  renderWishlistView();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function toggleWishVote(id) {
  const item = wishlistItems.find(w => w.id === id);
  if (!item) return;
  if (item.voted) {
    item.voted = false;
    item.votes = Math.max(0, (item.votes || 0) - 1);
  } else {
    item.voted = true;
    item.votes = (item.votes || 0) + 1;
  }
  renderWishlistView();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function updateWishStatus(id, newStatus) {
  const item = wishlistItems.find(w => w.id === id);
  if (!item) return;
  item.status = newStatus;
  renderWishlistView();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function deleteWishlistItem(id) {
  const item = wishlistItems.find(w => w.id === id);
  confirmDeleteAction(`Delete "${item?.title || 'this wishlist item'}"?`, () => {
    wishlistItems = wishlistItems.filter(w => w.id !== id);
    renderWishlistView();
    if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
  });
}

function setWishlistStatusFilter(status) {
  wishlistStatusFilter = status;
  document.querySelectorAll('#wishlist-status-filters button[data-wish-filter]').forEach(btn => {
    const active = btn.getAttribute('data-wish-filter') === status;
    btn.className = active
      ? 'px-3 py-1.5 rounded-lg text-xs font-medium bg-[#0f172a] text-white'
      : 'px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-slate-200 text-slate-600 hover:bg-slate-50';
  });
  renderWishlistView();
}

function renderWishlistView() {
  const total = wishlistItems.length;
  const requestedCount = wishlistItems.filter(w => w.status === 'Requested').length;
  const plannedCount = wishlistItems.filter(w => w.status === 'Planned' || w.status === 'In Progress').length;
  const shippedCount = wishlistItems.filter(w => w.status === 'Shipped').length;

  const kTotal = document.getElementById('wish-kpi-total');
  const kReq = document.getElementById('wish-kpi-requested');
  const kPlan = document.getElementById('wish-kpi-planned');
  const kShip = document.getElementById('wish-kpi-shipped');
  if (kTotal) kTotal.textContent = String(total);
  if (kReq) kReq.textContent = String(requestedCount);
  if (kPlan) kPlan.textContent = String(plannedCount);
  if (kShip) kShip.textContent = String(shippedCount);

  const query = (document.getElementById('wishlist-search')?.value || '').trim().toLowerCase();
  const sortBy = document.getElementById('wishlist-sort')?.value || 'votes';

  let rows = wishlistItems.filter(w => {
    if (wishlistStatusFilter !== 'all' && w.status !== wishlistStatusFilter) return false;
    if (query) {
      const hay = `${w.title} ${w.category} ${w.description} ${w.author}`.toLowerCase();
      if (!hay.includes(query)) return false;
    }
    return true;
  });

  const prioRank = { High: 3, Medium: 2, Low: 1 };
  if (sortBy === 'votes') {
    rows = [...rows].sort((a, b) => (b.votes || 0) - (a.votes || 0) || b.id - a.id);
  } else if (sortBy === 'newest') {
    rows = [...rows].sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')) || b.id - a.id);
  } else if (sortBy === 'priority') {
    rows = [...rows].sort((a, b) => (prioRank[b.priority] || 0) - (prioRank[a.priority] || 0) || (b.votes || 0) - (a.votes || 0));
  }

  const emptyEl = document.getElementById('wishlist-empty-state');
  const gridEl = document.getElementById('wishlist-grid');
  if (!emptyEl || !gridEl) return;

  if (rows.length === 0) {
    emptyEl.classList.remove('hidden');
    gridEl.classList.add('hidden');
    return;
  }
  emptyEl.classList.add('hidden');
  gridEl.classList.remove('hidden');

  const prioCls = {
    High: 'bg-[#fef2f2] text-[#b91c1c] border-[#fecaca]',
    Medium: 'bg-[#fffbeb] text-[#b45309] border-[#fde68a]',
    Low: 'bg-slate-100 text-slate-600 border-slate-200'
  };
  const statusCls = {
    Requested: 'bg-slate-100 text-slate-700 border-slate-200',
    Planned: 'bg-[#ede9fe] text-[#6d28d9] border-[#ddd6fe]',
    'In Progress': 'bg-[#eff6ff] text-[#1d4ed8] border-[#bfdbfe]',
    Shipped: 'bg-[#d1fae5] text-[#047857] border-[#a7f3d0]'
  };

  gridEl.innerHTML = rows.map(w => `
    <div class="group rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 card-shadow flex items-start justify-between gap-4">
      <div class="flex items-start gap-3.5 min-w-0 flex-1">
        <button
          type="button"
          onclick="toggleWishVote(${w.id})"
          class="w-12 py-2 rounded-xl border text-center shrink-0 transition-colors ${w.voted ? 'bg-[#0f172a] border-[#0f172a] text-white' : 'bg-[#fbfcfd] border-slate-200 text-slate-700 hover:bg-slate-100'}"
          title="Upvote request"
        >
          <div class="text-[10px] leading-none">▲</div>
          <div class="text-xs font-bold tabular-nums mt-1">${w.votes || 0}</div>
        </button>

        <div class="min-w-0 flex-1 space-y-1.5">
          <div class="flex flex-wrap items-center gap-2">
            <h4 class="text-sm font-bold text-slate-900">${w.title}</h4>
            <span class="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-700 border border-slate-200/70">${w.category}</span>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold border ${prioCls[w.priority] || prioCls.Medium}">${w.priority}</span>
          </div>
          ${w.description ? `<p class="text-xs text-slate-600">${w.description}</p>` : ''}
          <div class="flex flex-wrap items-center gap-3 text-[11px] text-slate-400 pt-0.5">
            <span>Requested by <strong class="font-medium text-slate-600">${w.author || 'Team'}</strong></span>
            ${w.createdAt ? `<span>· ${w.createdAt}</span>` : ''}
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2 shrink-0">
        <select
          onchange="updateWishStatus(${w.id}, this.value)"
          class="h-7 px-2 rounded-lg border text-[11px] font-semibold cursor-pointer focus:outline-none ${statusCls[w.status] || statusCls.Requested}"
        >
          ${['Requested', 'Planned', 'In Progress', 'Shipped'].map(st => `<option value="${st}" ${w.status === st ? 'selected' : ''}>${st}</option>`).join('')}
        </select>
        ${renderActionMenuHtml(`toggleWishlistForm(true, ${w.id})`, `deleteWishlistItem(${w.id})`)}
      </div>
    </div>
  `).join('');
}

function openSection(sec) {
  hideAllViews();
  if (sec === 'wishlist') {
    document.getElementById('view-wishlist').classList.remove('hidden');
    renderWishlistView();
  } else {
    document.getElementById('view-generic-section').classList.remove('hidden');
    const titles = {
      wishlist: { t: 'Wishlist', d: 'Add proposals and requests for new marketing apps.' },
      settings: { t: 'Settings', d: 'Configure workspace preferences and access.' }
    };
    document.getElementById('generic-section-title').textContent = titles[sec].t;
    document.getElementById('generic-section-desc').textContent = titles[sec].d;
  }
  setActiveNavHighlight(`nav-${sec}`);
  syncRouteUrl(`/${sec}`);
}

function formatCurrency(amount) {
  if (!totalBudget || totalBudget <= 0) return '—';
  return `${Math.round(amount).toLocaleString()} ${currency}`;
}

let pendingConfirmAction = null;

function closeConfirmModal() {
  pendingConfirmAction = null;
  document.getElementById('modu-confirm-modal')?.classList.add('hidden');
}

function confirmDeleteAction(message, onConfirm) {
  pendingConfirmAction = onConfirm;
  let modal = document.getElementById('modu-confirm-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modu-confirm-modal';
    modal.className = 'hidden fixed inset-0 z-50 bg-slate-900/35 backdrop-blur-[1px] flex items-center justify-center p-4';
    modal.innerHTML = `
      <div class="w-full max-w-xs rounded-2xl border border-slate-200 bg-white card-shadow p-5 space-y-4 animate-fade" onclick="event.stopPropagation()">
        <div class="space-y-1">
          <h3 class="text-sm font-bold text-slate-900">Confirm delete</h3>
          <p id="modu-confirm-msg" class="text-xs text-slate-500 leading-relaxed"></p>
        </div>
        <div class="flex items-center justify-end gap-2 pt-1">
          <button onclick="closeConfirmModal()" class="h-8 px-3 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-medium text-slate-600">Cancel</button>
          <button id="modu-confirm-yes" class="h-8 px-3.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-medium transition-colors">Delete</button>
        </div>
      </div>
    `;
    modal.addEventListener('click', closeConfirmModal);
    document.body.appendChild(modal);
    document.getElementById('modu-confirm-yes').addEventListener('click', () => {
      const fn = pendingConfirmAction;
      closeConfirmModal();
      if (typeof fn === 'function') fn();
    });
  }
  document.getElementById('modu-confirm-msg').textContent = message || 'Are you sure you want to delete this item?';
  modal.classList.remove('hidden');
}

function closeActionPopover() {
  document.getElementById('modu-action-popover')?.classList.add('hidden');
}

function openActionPopover(btn, event) {
  if (event) event.stopPropagation();
  let pop = document.getElementById('modu-action-popover');
  if (!pop) {
    pop = document.createElement('div');
    pop.id = 'modu-action-popover';
    pop.className = 'hidden fixed z-50 w-32 rounded-xl border border-slate-200/90 bg-white shadow-lg p-1 text-xs animate-fade';
    pop.addEventListener('click', e => e.stopPropagation());
    document.body.appendChild(pop);
    document.addEventListener('click', closeActionPopover);
    window.addEventListener('scroll', closeActionPopover, true);
  }

  const editCode = btn.getAttribute('data-edit') || '';
  const delCode = btn.getAttribute('data-del') || '';

  if (!pop.classList.contains('hidden') && pop._anchorBtn === btn) {
    closeActionPopover();
    return;
  }
  pop._anchorBtn = btn;

  pop.innerHTML = `
    ${editCode ? `<button type="button" id="modu-pop-edit" class="w-full text-left px-2.5 py-1.5 rounded-lg text-slate-700 hover:bg-slate-100 font-medium transition-colors">Edit</button>` : ''}
    ${delCode ? `<button type="button" id="modu-pop-del" class="w-full text-left px-2.5 py-1.5 rounded-lg text-rose-600 hover:bg-rose-50 font-medium transition-colors">Delete</button>` : ''}
  `;

  if (editCode) {
    document.getElementById('modu-pop-edit').onclick = () => {
      closeActionPopover();
      new Function(editCode)();
    };
  }
  if (delCode) {
    document.getElementById('modu-pop-del').onclick = () => {
      closeActionPopover();
      new Function(delCode)();
    };
  }

  pop.classList.remove('hidden');
  const rect = btn.getBoundingClientRect();
  const popW = 128;
  let left = rect.right - popW;
  if (left < 8) left = rect.left;
  let top = rect.bottom + 4;
  if (top + 80 > window.innerHeight) top = rect.top - 74;
  pop.style.left = `${left}px`;
  pop.style.top = `${top}px`;
}

function renderActionMenuHtml(editCode, delCode, extraBtnClass = '') {
  const escAttr = s => String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  return `
    <button
      type="button"
      data-edit="${escAttr(editCode)}"
      data-del="${escAttr(delCode)}"
      onclick="openActionPopover(this, event)"
      title="Actions"
      class="w-7 h-7 rounded-lg border border-slate-200/80 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-900 inline-flex items-center justify-center transition-colors ${extraBtnClass}"
    >
      <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="5" cy="12" r="1.7"/>
        <circle cx="12" cy="12" r="1.7"/>
        <circle cx="19" cy="12" r="1.7"/>
      </svg>
    </button>
  `;
}

function changeChannelsYear(yr) {
  requestYearChange(yr, document.getElementById('channels-year'));
}

function getConnectedBudgetTotals(year = budgetYear) {
  const yearObj = budgetData[year] || {};
  const channels = Object.keys(yearObj);
  let channelPlannedSum = 0;
  let channelActualSum = 0;
  channels.forEach(ch => {
    channelPlannedSum += yearObj[ch].planned.reduce((a, b) => a + b, 0);
    channelActualSum += yearObj[ch].actual.reduce((a, b) => a + b, 0);
  });
  const annualTarget = budgetTotalByYear[year] || 0;
  const totalPlanned = annualTarget > 0 ? annualTarget : channelPlannedSum;
  return { yearObj, channels, totalPlanned, channelPlannedSum, totalActual: channelActualSum };
}

function getChannelBudgetStats(channelName, year = budgetYear) {
  const { yearObj, totalPlanned, totalActual } = getConnectedBudgetTotals(year);
  const row = yearObj[channelName];
  if (!row) return { hasBudget: false, plannedNok: 0, actualNok: 0, plannedShare: 0, actualShare: 0 };
  const plannedNok = row.planned.reduce((a, b) => a + b, 0);
  const actualNok = row.actual.reduce((a, b) => a + b, 0);
  const plannedShare = totalPlanned > 0 ? (plannedNok / totalPlanned) * 100 : 0;
  const actualShare = totalActual > 0 ? (actualNok / totalActual) * 100 : 0;
  return { hasBudget: true, plannedNok, actualNok, plannedShare, actualShare };
}

const CHANNEL_PALETTE = ['#7c3aed', '#10b981', '#0ea5e9', '#f59e0b', '#f43f5e', '#6366f1', '#14b8a6', '#ec4899'];

let channelsList = [
  { id: 1, name: 'LinkedIn Ads', type: 'Paid Social', color: '#7c3aed' },
  { id: 2, name: 'Meta Ads', type: 'Paid Social', color: '#10b981' },
  { id: 3, name: 'Google Ads', type: 'Paid Search', color: '#0ea5e9' },
  { id: 4, name: 'Organic Search', type: 'Organic', color: '#f59e0b' },
  { id: 5, name: 'Email Marketing', type: 'Outbound', color: '#6366f1' },
  { id: 6, name: 'Partnerships', type: 'Partner', color: '#14b8a6' }
];

function getChannelNames() {
  return channelsList.map(c => c.name);
}

function getChannelColor(name, fallbackIdx = 0) {
  const found = channelsList.find(c => c.name.toLowerCase() === String(name || '').toLowerCase());
  return found?.color || CHANNEL_PALETTE[fallbackIdx % CHANNEL_PALETTE.length];
}

function renderChannelIconHtml(name, sizeClass = 'w-6 h-6', colorOverride = '') {
  const n = String(name || '').trim().toLowerCase();
  const color = colorOverride || getChannelColor(name);
  const isSmall = sizeClass.includes('w-3.5') || sizeClass.includes('w-4');
  const iconPad = isSmall ? 'p-0.5' : 'p-1';
  const radius = isSmall ? 'rounded' : 'rounded-lg';

  let svg = '';
  let bg = '#ffffff';
  let border = 'border-slate-200/80';

  if (n.includes('linkedin')) {
    bg = '#0A66C2';
    border = 'border-[#0A66C2]';
    svg = `<svg viewBox="0 0 24 24" class="w-full h-full fill-white"><path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.39 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.39 6.35 3.5 5.25 3.5ZM20.44 13.02C20.44 9.88 18.76 8.22 16.16 8.22C14.37 8.22 13.48 9.2 13.02 9.93V8.5H9.65C9.7 9.48 9.65 19.5 9.65 19.5H13.02V13.36C13.02 13.02 13.05 12.69 13.15 12.45C13.42 11.78 14.03 11.09 15.07 11.09C16.41 11.09 17.06 12.11 17.06 13.6V19.5H20.44V13.02Z"/></svg>`;
  } else if (n.includes('instagram')) {
    bg = '#E1306C';
    border = 'border-[#E1306C]';
    svg = `<svg viewBox="0 0 24 24" class="w-full h-full stroke-white fill-none" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" class="fill-white stroke-none"/></svg>`;
  } else if (n.includes('meta')) {
    bg = '#0081FB';
    border = 'border-[#0081FB]';
    svg = `<svg viewBox="0 0 24 24" class="w-full h-full stroke-white fill-none" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12c-1.8-2.9-3.6-4.4-5.4-4.4C4.2 7.6 2.5 9.6 2.5 12.2c0 2.5 1.5 4.2 3.4 4.2 1.6 0 3.1-1.2 4.9-4.1l1.2-1.9 1.2 1.9c1.8 2.9 3.3 4.1 4.9 4.1 1.9 0 3.4-1.7 3.4-4.2 0-2.6-1.7-4.6-4.1-4.6-1.8 0-3.6 1.5-5.4 4.4Z"/></svg>`;
  } else if (n.includes('facebook')) {
    bg = '#0866FF';
    border = 'border-[#0866FF]';
    svg = `<svg viewBox="0 0 24 24" class="w-full h-full fill-white"><path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.24-1.46 1.5-1.46h1.6V4.45c-.28-.04-1.23-.12-2.34-.12-2.31 0-3.89 1.41-3.89 4v2.17H7.8v3h2.57V21h3.13Z"/></svg>`;
  } else if (n.includes('google')) {
    bg = '#ffffff';
    border = 'border-slate-200';
    svg = `<svg viewBox="0 0 24 24" class="w-full h-full"><path fill="#4285F4" d="M21.8 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.5c-.2 1.2-1 2.3-2.1 3v2.5h3.4c2-1.8 3-4.5 3-7.3Z"/><path fill="#34A853" d="M12 22c2.8 0 5.1-.9 6.8-2.5l-3.4-2.5c-.9.6-2.1 1-3.4 1-2.6 0-4.9-1.8-5.7-4.2H2.8v2.6C4.5 19.8 8 22 12 22Z"/><path fill="#FBBC05" d="M6.3 13.8c-.2-.6-.3-1.2-.3-1.8s.1-1.2.3-1.8V7.6H2.8C2.3 8.9 2 10.4 2 12s.3 3.1.8 4.4l3.5-2.6Z"/><path fill="#EA4335" d="M12 6c1.5 0 2.9.5 4 1.5l3-3C17.1 2.8 14.8 2 12 2 8 2 4.5 4.2 2.8 7.6l3.5 2.6C7.1 7.8 9.4 6 12 6Z"/></svg>`;
  } else if (n.includes('youtube')) {
    bg = '#FF0000';
    border = 'border-[#FF0000]';
    svg = `<svg viewBox="0 0 24 24" class="w-full h-full fill-white"><path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z"/></svg>`;
  } else if (n.includes('tiktok')) {
    bg = '#0f172a';
    border = 'border-[#0f172a]';
    svg = `<svg viewBox="0 0 24 24" class="w-full h-full fill-white"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-1.9-2.5V9.7a5.7 5.7 0 1 0 5.1 5.7V9.1a7.4 7.4 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.3-1.6Z"/></svg>`;
  } else if (n.includes('twitter') || n === 'x' || n.includes('x /')) {
    bg = '#0f172a';
    border = 'border-[#0f172a]';
    svg = `<svg viewBox="0 0 24 24" class="w-full h-full fill-white"><path d="M18.2 3H21l-6.5 7.4L22 21h-5.9l-4.6-6-5.3 6H3.4l7-8L3 3h6l4.2 5.5L18.2 3Zm-1 16.2h1.6L8 4.7H6.3l10.9 14.5Z"/></svg>`;
  } else if (n.includes('email') || n.includes('mail') || n.includes('newsletter')) {
    bg = color;
    border = 'border-transparent';
    svg = `<svg viewBox="0 0 24 24" class="w-full h-full stroke-white fill-none" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`;
  } else if (n.includes('seo') || n.includes('aeo') || n.includes('organic') || n.includes('web')) {
    bg = color;
    border = 'border-transparent';
    svg = `<svg viewBox="0 0 24 24" class="w-full h-full stroke-white fill-none" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`;
  } else if (n.includes('event') || n.includes('webinar') || n.includes('messe')) {
    bg = color;
    border = 'border-transparent';
    svg = `<svg viewBox="0 0 24 24" class="w-full h-full stroke-white fill-none" stroke-width="2"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`;
  } else if (n.includes('partner') || n.includes('referral') || n.includes('affiliate')) {
    bg = color;
    border = 'border-transparent';
    svg = `<svg viewBox="0 0 24 24" class="w-full h-full stroke-white fill-none" stroke-width="2"><circle cx="9" cy="7" r="3"/><path d="M3 20c0-3 2.7-5 6-5s6 2 6 5"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14c2.5 0 4.5 1.5 4.5 4"/></svg>`;
  } else {
    const mono = (String(name || '?').trim().slice(0, 2) || '?').toUpperCase();
    return `<span class="${sizeClass} ${radius} inline-flex items-center justify-center text-[10px] font-bold text-white shrink-0" style="background:${color}">${mono}</span>`;
  }

  return `<span class="${sizeClass} ${radius} ${iconPad} inline-flex items-center justify-center border ${border} shrink-0 overflow-hidden" style="background:${bg}">${svg}</span>`;
}

function ensureChannelExists(name, type = 'Other') {
  const trimmed = String(name || '').trim();
  if (!trimmed) return null;
  const existing = channelsList.find(c => c.name.toLowerCase() === trimmed.toLowerCase());
  if (existing) return existing;
  const next = {
    id: Date.now() + Math.floor(Math.random() * 1000),
    name: trimmed,
    type,
    color: CHANNEL_PALETTE[channelsList.length % CHANNEL_PALETTE.length]
  };
  channelsList.push(next);
  return next;
}

function toggleChannelForm(show, editId = null) {
  const panel = document.getElementById('channel-form-panel');
  if (!panel) return;
  if (!show) {
    panel.classList.add('hidden');
    return;
  }
  panel.classList.remove('hidden');

  if (editId) {
    const ch = channelsList.find(c => c.id === editId);
    if (!ch) return;
    document.getElementById('channel-form-title').textContent = 'Edit Channel';
    document.getElementById('ch-edit-id').value = String(ch.id);
    document.getElementById('ch-name').value = ch.name;
    document.getElementById('ch-type').value = ch.type || 'Other';
    document.getElementById('ch-color').value = ch.color || CHANNEL_PALETTE[0];
  } else {
    document.getElementById('channel-form-title').textContent = 'Add Channel';
    document.getElementById('ch-edit-id').value = '';
    document.getElementById('ch-name').value = '';
    document.getElementById('ch-type').value = 'Paid Social';
    document.getElementById('ch-color').value = CHANNEL_PALETTE[channelsList.length % CHANNEL_PALETTE.length];
  }
  document.getElementById('ch-name').focus();
}

function saveChannel() {
  const editId = document.getElementById('ch-edit-id').value;
  const name = (document.getElementById('ch-name').value || '').trim();
  const type = document.getElementById('ch-type').value || 'Other';
  const color = document.getElementById('ch-color').value || CHANNEL_PALETTE[0];

  if (!name) {
    document.getElementById('ch-name').focus();
    return;
  }

  if (editId) {
    const idx = channelsList.findIndex(c => c.id === Number(editId));
    if (idx !== -1) {
      const oldName = channelsList[idx].name;
      channelsList[idx] = { ...channelsList[idx], name, type, color };
      if (oldName !== name) {
        Object.keys(budgetData).forEach(yr => {
          if (budgetData[yr] && budgetData[yr][oldName]) {
            budgetData[yr][name] = budgetData[yr][oldName];
            delete budgetData[yr][oldName];
          }
        });
        leadEntries.forEach(l => {
          if (l.channel === oldName) l.channel = name;
        });
      }
    }
  } else {
    const dup = channelsList.find(c => c.name.toLowerCase() === name.toLowerCase());
    if (dup) {
      dup.type = type;
      dup.color = color;
    } else {
      channelsList.push({ id: Date.now(), name, type, color });
    }
  }

  toggleChannelForm(false);
  renderChannelsView();
}

function deleteChannel(id) {
  const ch = channelsList.find(c => c.id === id);
  confirmDeleteAction(`Delete channel "${ch?.name || 'this channel'}"?`, () => {
    channelsList = channelsList.filter(c => c.id !== id);
    renderChannelsView();
  });
}

function getChartTooltipEl() {
  let el = document.getElementById('modu-chart-tooltip');
  if (!el) {
    el = document.createElement('div');
    el.id = 'modu-chart-tooltip';
    el.className = 'fixed z-50 pointer-events-none hidden px-2.5 py-1.5 rounded-lg bg-[#0f172a] text-white text-[11px] shadow-lg border border-slate-700/60 tabular-nums whitespace-nowrap';
    document.body.appendChild(el);
  }
  return el;
}

function showChartTooltip(clientX, clientY, html) {
  const el = getChartTooltipEl();
  el.innerHTML = html;
  el.classList.remove('hidden');
  const pad = 12;
  const rect = el.getBoundingClientRect();
  let left = clientX + pad;
  let top = clientY - rect.height - 10;
  if (left + rect.width > window.innerWidth - 8) left = clientX - rect.width - pad;
  if (top < 8) top = clientY + pad;
  el.style.left = left + 'px';
  el.style.top = top + 'px';
}

function hideChartTooltip() {
  const el = document.getElementById('modu-chart-tooltip');
  if (el) el.classList.add('hidden');
}

function drawChannelDonut(canvasId, segments, centerTop, centerSub, unitFormatter = v => String(v)) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const total = segments.reduce((a, s) => a + s.value, 0);
  let startAngle = -Math.PI / 2;
  const slices = segments.filter(s => s.value > 0).map(seg => {
    const angle = (seg.value / total) * Math.PI * 2;
    const item = { ...seg, startAngle, endAngle: startAngle + angle, pct: total > 0 ? (seg.value / total) * 100 : 0 };
    startAngle += angle;
    return item;
  });

  const renderCanvas = (hoverIdx = -1) => {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const size = 180;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;
    const baseR = 72;
    const innerR = 46;

    if (total <= 0) {
      ctx.beginPath();
      ctx.arc(cx, cy, baseR, 0, Math.PI * 2);
      ctx.fillStyle = '#f1f5f9';
      ctx.fill();
    } else {
      slices.forEach((seg, idx) => {
        const isHovered = idx === hoverIdx;
        const r = isHovered ? baseR + 4 : baseR;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, r, seg.startAngle, seg.endAngle);
        ctx.closePath();
        ctx.fillStyle = seg.color;
        ctx.globalAlpha = hoverIdx !== -1 && !isHovered ? 0.55 : 1;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
    }

    ctx.beginPath();
    ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    const uiFont = '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const active = hoverIdx !== -1 ? slices[hoverIdx] : null;
    ctx.fillStyle = active || total > 0 ? '#0f172a' : '#94a3b8';
    ctx.font = `700 13px ${uiFont}`;
    ctx.fillText(active ? `${active.pct.toFixed(1)}%` : centerTop, cx, cy - 7);
    ctx.fillStyle = '#64748b';
    ctx.font = `500 10px ${uiFont}`;
    ctx.fillText(active ? active.label.slice(0, 14) : centerSub, cx, cy + 10);
  };

  canvas._donutMeta = { slices, total, centerTop, centerSub, unitFormatter, hoverIdx: -1, render: renderCanvas };
  renderCanvas(-1);

  if (!canvas._donutBound) {
    canvas._donutBound = true;
    canvas.style.cursor = 'pointer';
    canvas.addEventListener('mousemove', e => {
      const meta = canvas._donutMeta;
      if (!meta || meta.total <= 0) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - 90;
      const y = e.clientY - rect.top - 90;
      const dist = Math.hypot(x, y);
      if (dist < 44 || dist > 78) {
        if (meta.hoverIdx !== -1) {
          meta.hoverIdx = -1;
          meta.render(-1);
        }
        hideChartTooltip();
        return;
      }
      let ang = Math.atan2(y, x);
      if (ang < -Math.PI / 2) ang += Math.PI * 2;
      const idx = meta.slices.findIndex(s => ang >= s.startAngle && ang <= s.endAngle);
      if (idx !== -1) {
        if (meta.hoverIdx !== idx) {
          meta.hoverIdx = idx;
          meta.render(idx);
        }
        const s = meta.slices[idx];
        showChartTooltip(
          e.clientX,
          e.clientY,
          `<div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full shrink-0" style="background:${s.color}"></span><span class="font-semibold">${s.label}</span><span class="text-slate-300">·</span><span>${meta.unitFormatter(s.value)}</span><span class="text-slate-300">(${s.pct.toFixed(1)}%)</span></div>`
        );
      } else {
        hideChartTooltip();
      }
    });
    canvas.addEventListener('mouseleave', () => {
      const meta = canvas._donutMeta;
      if (meta && meta.hoverIdx !== -1) {
        meta.hoverIdx = -1;
        meta.render(-1);
      }
      hideChartTooltip();
    });
  }
}

let activeChannelDetailName = null;
let channelAccountsByName = {};

function openChannelDetail(channelName) {
  activeChannelDetailName = channelName;
  renderChannelsView();
  syncRouteUrl(`/channels/${slugifyRouteSegment(channelName)}`);
}

function closeChannelDetail() {
  activeChannelDetailName = null;
  toggleChannelAccountForm(false);
  renderChannelsView();
  syncRouteUrl('/channels');
}

function inferSocialMetadataFromUrl(rawUrl) {
  let normalized = (rawUrl || '').trim();
  if (!normalized) return null;
  if (!/^https?:\/\//i.test(normalized)) {
    normalized = 'https://' + normalized;
  }
  try {
    const parsed = new URL(normalized);
    const host = parsed.hostname.replace(/^www\./i, '').toLowerCase();
    const parts = parsed.pathname.split('/').filter(Boolean);
    let platform = 'Other';
    if (host.includes('instagram.com')) platform = 'Instagram';
    else if (host.includes('linkedin.com')) platform = 'LinkedIn';
    else if (host.includes('tiktok.com')) platform = 'TikTok';
    else if (host.includes('youtube.com') || host.includes('youtu.be')) platform = 'YouTube';
    else if (host === 'x.com' || host.includes('twitter.com')) platform = 'X / Twitter';
    else if (host.includes('facebook.com') || host.includes('fb.com')) platform = 'Meta / Facebook';
    else if (host.includes('threads.net')) platform = 'Threads';
    else if (host.includes('pinterest.')) platform = 'Pinterest';
    else if (host.includes('github.com')) platform = 'GitHub';

    let handle = '';
    if (parts.length > 0) {
      if (['company', 'in', 'channel', 'c', 'user', 'pages'].includes(parts[0].toLowerCase()) && parts[1]) {
        handle = parts[1];
      } else {
        handle = parts[0];
      }
    }
    const cleanHandle = handle.replace(/^@/, '');
    const name = cleanHandle ? (handle.startsWith('@') ? handle : `@${cleanHandle}`) : host;
    const logo = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=128`;
    return { ok: true, url: parsed.toString(), platform, name, logo, followers: '', posts: '', bio: '', fromApi: false };
  } catch (e) {
    return null;
  }
}

async function fetchSocialProfileInfo(rawUrl) {
  const fallback = inferSocialMetadataFromUrl(rawUrl);
  if (!fallback) return null;

  const canFetchApi = typeof window !== 'undefined' && (window.location.protocol === 'http:' || window.location.protocol === 'https:');
  if (canFetchApi) {
    try {
      const resp = await fetch(`/api/social-preview?url=${encodeURIComponent(fallback.url)}`);
      if (resp.ok) {
        const data = await resp.json();
        if (data && (data.ok || data.name || data.logo || data.followers || data.posts)) {
          return {
            ok: true,
            url: data.url || fallback.url,
            platform: data.platform && data.platform !== 'Other' ? data.platform : fallback.platform,
            name: data.name || fallback.name,
            logo: data.logo || fallback.logo,
            followers: data.followers || '',
            posts: data.posts || '',
            bio: data.bio || '',
            fromApi: true
          };
        }
      }
    } catch (e) {
      // Fall back to URL metadata + favicon
    }
  }
  return fallback;
}

function toggleChannelAccountForm(show) {
  const panel = document.getElementById('ch-account-form-panel');
  if (!panel) return;
  if (!show) {
    panel.classList.add('hidden');
    return;
  }
  const chName = (activeChannelDetailName || '').toLowerCase();
  const platSel = document.getElementById('cha-platform');
  if (platSel) {
    if (chName.includes('linkedin')) platSel.value = 'LinkedIn';
    else if (chName.includes('meta') || chName.includes('facebook')) platSel.value = 'Meta / Facebook';
    else if (chName.includes('instagram')) platSel.value = 'Instagram';
    else if (chName.includes('google')) platSel.value = 'Google Ads';
    else if (chName.includes('tiktok')) platSel.value = 'TikTok';
    else if (chName.includes('youtube')) platSel.value = 'YouTube';
    else platSel.value = 'Other';
  }
  const nameInput = document.getElementById('cha-name');
  const urlInput = document.getElementById('cha-url');
  const logoInput = document.getElementById('cha-logo');
  const followersInput = document.getElementById('cha-followers');
  const postsInput = document.getElementById('cha-posts');
  const bioInput = document.getElementById('cha-bio');
  const statusEl = document.getElementById('cha-fetch-status');
  if (nameInput) nameInput.value = '';
  if (urlInput) urlInput.value = '';
  if (logoInput) logoInput.value = '';
  if (followersInput) followersInput.value = '';
  if (postsInput) postsInput.value = '';
  if (bioInput) bioInput.value = '';
  if (statusEl) {
    statusEl.textContent = '';
    statusEl.classList.add('hidden');
  }
  panel.classList.remove('hidden');
  (urlInput || nameInput)?.focus();
}

async function fetchChannelAccountInfo() {
  const urlInput = document.getElementById('cha-url');
  const btn = document.getElementById('cha-fetch-btn');
  const statusEl = document.getElementById('cha-fetch-status');
  const rawUrl = (urlInput?.value || '').trim();
  if (!rawUrl) {
    urlInput?.focus();
    return;
  }
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Fetching...';
  }
  if (statusEl) {
    statusEl.textContent = 'Fetching profile logo, followers, and post stats...';
    statusEl.classList.remove('hidden');
  }

  const info = await fetchSocialProfileInfo(rawUrl);

  if (btn) {
    btn.disabled = false;
    btn.textContent = 'Fetch Info';
  }
  if (!info) {
    if (statusEl) {
      statusEl.textContent = 'Could not parse URL. Please enter a valid https:// social link.';
      statusEl.classList.remove('hidden');
    }
    return;
  }

  if (urlInput) urlInput.value = info.url;
  const platSel = document.getElementById('cha-platform');
  if (platSel && info.platform) {
    const match = Array.from(platSel.options).find(o => o.value.toLowerCase() === info.platform.toLowerCase() || (info.platform === 'Meta / Facebook' && o.value === 'Meta / Facebook'));
    if (match) platSel.value = match.value;
  }
  const nameInput = document.getElementById('cha-name');
  if (nameInput && !nameInput.value.trim() && info.name) nameInput.value = info.name;
  const logoInput = document.getElementById('cha-logo');
  if (logoInput && info.logo) logoInput.value = info.logo;
  const followersInput = document.getElementById('cha-followers');
  if (followersInput && info.followers) followersInput.value = info.followers;
  const postsInput = document.getElementById('cha-posts');
  if (postsInput && info.posts) postsInput.value = info.posts;
  const bioInput = document.getElementById('cha-bio');
  if (bioInput && info.bio) bioInput.value = info.bio;

  if (statusEl) {
    const parts = [info.platform, info.followers ? `${info.followers} followers` : '', info.posts ? `${info.posts} posts` : ''].filter(Boolean);
    statusEl.textContent = info.fromApi
      ? `Fetched: ${parts.join(' · ')}`
      : `Detected ${info.platform} logo from URL (enter followers/posts manually if needed)`;
    statusEl.classList.remove('hidden');
  }
}

async function refreshChannelAccount(accountId) {
  if (!activeChannelDetailName) return;
  const list = channelAccountsByName[activeChannelDetailName] || [];
  const acc = list.find(a => a.id === accountId);
  if (!acc || !acc.url) return;
  const info = await fetchSocialProfileInfo(acc.url);
  if (!info) return;
  if (info.logo) acc.logo = info.logo;
  if (info.followers) acc.followers = info.followers;
  if (info.posts) acc.posts = info.posts;
  if (info.bio) acc.bio = info.bio;
  if (info.platform && acc.platform === 'Other') acc.platform = info.platform;
  acc.fetchedAt = new Date().toISOString();
  renderChannelDetailView();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function saveChannelAccount() {
  if (!activeChannelDetailName) return;
  const platform = document.getElementById('cha-platform')?.value || 'Other';
  const name = (document.getElementById('cha-name')?.value || '').trim();
  const url = (document.getElementById('cha-url')?.value || '').trim();
  const logo = (document.getElementById('cha-logo')?.value || '').trim();
  const followers = (document.getElementById('cha-followers')?.value || '').trim();
  const posts = (document.getElementById('cha-posts')?.value || '').trim();
  const bio = (document.getElementById('cha-bio')?.value || '').trim();
  if (!name) {
    document.getElementById('cha-name')?.focus();
    return;
  }
  if (!Array.isArray(channelAccountsByName[activeChannelDetailName])) {
    channelAccountsByName[activeChannelDetailName] = [];
  }
  channelAccountsByName[activeChannelDetailName].push({
    id: Date.now() + Math.floor(Math.random() * 1000),
    platform,
    name,
    url,
    logo,
    followers,
    posts,
    bio,
    connectedAt: new Date().toISOString()
  });
  toggleChannelAccountForm(false);
  renderChannelDetailView();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function deleteChannelAccount(accountId) {
  if (!activeChannelDetailName) return;
  const list = channelAccountsByName[activeChannelDetailName] || [];
  const acc = list.find(a => a.id === accountId);
  confirmDeleteAction(`Disconnect "${acc?.name || 'this account'}" from ${activeChannelDetailName}?`, () => {
    channelAccountsByName[activeChannelDetailName] = list.filter(a => a.id !== accountId);
    renderChannelDetailView();
    if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
  });
}

const CHANNEL_GOAL_DEFS = [
  { key: 'leads', label: 'Leads', unit: '', format: 'int', agg: 'sum', color: '#0ea5e9', step: '1' },
  { key: 'ctr', label: 'CTR (%)', unit: '%', format: 'pct', agg: 'avg', color: '#f59e0b', step: '0.01' },
  { key: 'engagement_rate', label: 'Engagement Rate (%)', unit: '%', format: 'pct', agg: 'avg', color: '#8b5cf6', step: '0.01' },
  { key: 'clicks', label: 'Clicks', unit: '', format: 'int', agg: 'sum', color: '#6366f1', step: '1' },
  { key: 'impressions', label: 'Impressions', unit: '', format: 'int', agg: 'sum', color: '#14b8a6', step: '1' },
  { key: 'conversions', label: 'Conversions', unit: '', format: 'int', agg: 'sum', color: '#10b981', step: '1' },
  { key: 'roas', label: 'ROAS (x)', unit: 'x', format: 'dec', agg: 'avg', color: '#f43f5e', step: '0.1' }
];
let channelGoalsByName = {};

function getGoalDef(key) {
  return CHANNEL_GOAL_DEFS.find(g => g.key === key) || CHANNEL_GOAL_DEFS[0];
}

function getChannelGoals(channelName) {
  const saved = channelGoalsByName[channelName];
  const primary = saved && saved.primary && CHANNEL_GOAL_DEFS.some(g => g.key === saved.primary)
    ? saved.primary
    : 'leads';
  const secondary = saved && Array.isArray(saved.secondary)
    ? saved.secondary.filter(k => k !== primary && CHANNEL_GOAL_DEFS.some(g => g.key === k))
    : [];
  return { primary, secondary };
}

function getChannelMeasuredGoalKeys(channelName) {
  const { primary, secondary } = getChannelGoals(channelName);
  return [primary, ...secondary];
}

function updateChannelPrimaryGoal(goalKey) {
  if (!activeChannelDetailName) return;
  const current = getChannelGoals(activeChannelDetailName);
  channelGoalsByName[activeChannelDetailName] = {
    primary: goalKey,
    secondary: current.secondary.filter(k => k !== goalKey)
  };
  renderChannelDetailView();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function toggleChannelSecondaryGoal(goalKey) {
  if (!activeChannelDetailName) return;
  const current = getChannelGoals(activeChannelDetailName);
  if (goalKey === current.primary) return;
  const exists = current.secondary.includes(goalKey);
  channelGoalsByName[activeChannelDetailName] = {
    primary: current.primary,
    secondary: exists
      ? current.secondary.filter(k => k !== goalKey)
      : [...current.secondary, goalKey]
  };
  renderChannelDetailView();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function renderChannelDetailView() {
  const name = activeChannelDetailName;
  if (!name) return;
  const ch = channelsList.find(c => c.name.toLowerCase() === name.toLowerCase()) || { name, type: 'Other', color: '#0f172a' };

  document.getElementById('ch-crumb-sep')?.classList.remove('hidden');
  const crumbName = document.getElementById('ch-crumb-name');
  if (crumbName) {
    crumbName.textContent = ch.name;
    crumbName.classList.remove('hidden');
  }
  document.getElementById('ch-back-btn')?.classList.remove('hidden');
  document.getElementById('ch-add-btn')?.classList.add('hidden');

  const dotEl = document.getElementById('ch-detail-dot');
  if (dotEl) {
    dotEl.className = 'shrink-0';
    dotEl.style.background = 'transparent';
    dotEl.innerHTML = renderChannelIconHtml(ch.name, 'w-8 h-8', ch.color);
  }
  const nameEl = document.getElementById('ch-detail-name');
  if (nameEl) nameEl.textContent = ch.name;
  const typeEl = document.getElementById('ch-detail-type');
  if (typeEl) typeEl.textContent = ch.type || 'Other';

  const yearObj = budgetData[budgetYear] || {};
  const bRow = yearObj[ch.name];
  const budgetNok = bRow ? bRow.planned.reduce((a, b) => a + b, 0) : 0;
  const actualNok = bRow ? bRow.actual.reduce((a, b) => a + b, 0) : 0;
  const leadCount = leadEntries.filter(l => String(l.channel || '').toLowerCase() === ch.name.toLowerCase()).length;

  document.getElementById('ch-detail-budget').textContent = `${Math.round(budgetNok).toLocaleString()} NOK`;
  document.getElementById('ch-detail-year-lbl').textContent = `Year ${budgetYear}`;
  document.getElementById('ch-detail-actual').textContent = `${Math.round(actualNok).toLocaleString()} NOK`;
  document.getElementById('ch-detail-leads').textContent = String(leadCount);

  const goals = getChannelGoals(ch.name);
  const primarySel = document.getElementById('ch-primary-goal');
  if (primarySel) {
    primarySel.innerHTML = CHANNEL_GOAL_DEFS.map(g =>
      `<option value="${g.key}" ${g.key === goals.primary ? 'selected' : ''}>${g.label}</option>`
    ).join('');
  }
  const secContainer = document.getElementById('ch-secondary-goals');
  if (secContainer) {
    secContainer.innerHTML = CHANNEL_GOAL_DEFS.filter(g => g.key !== goals.primary).map(g => {
      const active = goals.secondary.includes(g.key);
      return `
        <button
          type="button"
          onclick="toggleChannelSecondaryGoal('${g.key}')"
          class="h-8 px-3 rounded-lg text-xs font-medium border transition-colors ${active ? 'bg-[#0f172a] text-white border-[#0f172a]' : 'bg-[#fbfcfd] text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900'}"
        >
          ${active ? '✓ ' : '+ '}${g.label}
        </button>
      `;
    }).join('');
  }

  const listEl = document.getElementById('ch-accounts-list');
  if (!listEl) return;
  const accounts = channelAccountsByName[ch.name] || [];

  if (accounts.length === 0) {
    listEl.innerHTML = `
      <div class="rounded-xl border border-dashed border-slate-200 bg-[#fbfcfd] p-8 text-center text-xs text-slate-500">
        No social accounts connected to <strong>${ch.name}</strong> yet. Click <strong>+ Connect Account</strong> above to add one.
      </div>
    `;
    return;
  }

  listEl.innerHTML = accounts.map(acc => {
    const initials = (acc.name || acc.platform || '?').replace(/^@/, '').slice(0, 2).toUpperCase();
    const logoUrl = acc.logo || (acc.url ? getLogoUrl(acc.url) : '');
    const logoHtml = logoUrl
      ? `<div class="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center overflow-hidden shrink-0">
           <img src="${logoUrl}" alt="${acc.name}" class="w-6 h-6 object-cover rounded" onerror="this.parentElement.innerHTML='<span class=\\'text-[11px] font-bold text-slate-600\\'>${initials}</span>'" />
         </div>`
      : `<div class="w-9 h-9 rounded-lg border border-slate-200 bg-slate-100 text-slate-700 flex items-center justify-center text-[11px] font-bold shrink-0">${initials}</div>`;
    const statsHtml = (acc.followers || acc.posts)
      ? `<div class="flex flex-wrap items-center gap-1.5 mt-1">
           ${acc.followers ? `<span class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-700">Followers: ${acc.followers}</span>` : ''}
           ${acc.posts ? `<span class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-700">Posts: ${acc.posts}</span>` : ''}
         </div>`
      : '';
    return `
      <div class="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl border border-slate-200/80 bg-[#fbfcfd]">
        <div class="flex items-start gap-3 min-w-0 flex-1">
          ${logoHtml}
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-xs font-semibold text-slate-900 truncate">${acc.name}</span>
              <span class="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-white border border-slate-200 text-slate-700 shrink-0">${acc.platform}</span>
            </div>
            ${acc.url ? `<a href="${acc.url}" target="_blank" rel="noopener noreferrer" class="block text-[11px] text-slate-500 hover:text-slate-900 underline underline-offset-2 truncate mt-0.5">${acc.url} ↗</a>` : ''}
            ${statsHtml}
            ${acc.bio ? `<p class="text-[11px] text-slate-500 mt-1 line-clamp-2">${acc.bio}</p>` : ''}
          </div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          ${acc.url ? `<button type="button" onclick="refreshChannelAccount(${acc.id})" class="px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-[11px] font-medium text-slate-700 transition-colors">Refresh</button>` : ''}
          <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#d1fae5] text-[#047857]">
            <span class="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
            Connected
          </span>
          ${renderActionMenuHtml('', `deleteChannelAccount(${acc.id})`)}
        </div>
      </div>
    `;
  }).join('');
}

function renderChannelsView() {
  const yearSel = document.getElementById('channels-year');
  if (yearSel) yearSel.value = budgetYear;

  const overviewEl = document.getElementById('channels-overview');
  const detailEl = document.getElementById('channels-detail');
  if (activeChannelDetailName) {
    overviewEl?.classList.add('hidden');
    detailEl?.classList.remove('hidden');
    renderChannelDetailView();
    return;
  }

  detailEl?.classList.add('hidden');
  overviewEl?.classList.remove('hidden');
  document.getElementById('ch-crumb-sep')?.classList.add('hidden');
  document.getElementById('ch-crumb-name')?.classList.add('hidden');
  document.getElementById('ch-back-btn')?.classList.add('hidden');
  document.getElementById('ch-add-btn')?.classList.remove('hidden');

  const yearObj = budgetData[budgetYear] || {};
  Object.keys(yearObj).forEach(chName => ensureChannelExists(chName));
  leadEntries.forEach(l => {
    if (l.channel) ensureChannelExists(l.channel);
  });

  const rows = channelsList.map((ch, idx) => {
    const budgetRow = yearObj[ch.name];
    const budgetNok = budgetRow ? budgetRow.planned.reduce((a, b) => a + b, 0) : 0;
    const spendNok = budgetRow ? budgetRow.actual.reduce((a, b) => a + b, 0) : 0;
    const leadCount = leadEntries.filter(l => l.channel === ch.name).length;
    return { ...ch, color: ch.color || CHANNEL_PALETTE[idx % CHANNEL_PALETTE.length], budgetNok, spendNok, leadCount };
  }).sort((a, b) => (b.budgetNok - a.budgetNok) || (b.spendNok - a.spendNok) || (b.leadCount - a.leadCount));

  const totalChannelBudget = rows.reduce((a, r) => a + r.budgetNok, 0);
  const totalLeads = rows.reduce((a, r) => a + r.leadCount, 0);

  const budgetLbl = document.getElementById('channels-budget-total-label');
  if (budgetLbl) budgetLbl.textContent = `${Math.round(totalChannelBudget).toLocaleString()} NOK`;

  const leadsLbl = document.getElementById('channels-leads-total-label');
  if (leadsLbl) leadsLbl.textContent = `${totalLeads} lead${totalLeads === 1 ? '' : 's'}`;

  const budgetSegments = rows.filter(r => r.budgetNok > 0).sort((a, b) => b.budgetNok - a.budgetNok).map(r => ({ label: r.name, value: r.budgetNok, color: r.color }));
  drawChannelDonut(
    'channelShareChart',
    budgetSegments,
    totalChannelBudget > 0 ? `${Math.round(totalChannelBudget).toLocaleString()}` : '0 NOK',
    totalChannelBudget > 0 ? `NOK (${budgetYear})` : 'No budget',
    v => `${Math.round(v).toLocaleString()} NOK`
  );

  const budgetLegendEl = document.getElementById('channel-share-legend');
  if (budgetLegendEl) {
    if (budgetSegments.length === 0) {
      budgetLegendEl.innerHTML = `<p class="text-xs text-slate-400">No channel budgets allocated for ${budgetYear} yet. Allocate in the Budget app to see channel share.</p>`;
    } else {
      budgetLegendEl.innerHTML = [...rows]
        .filter(r => r.budgetNok > 0)
        .sort((a, b) => b.budgetNok - a.budgetNok)
        .map(r => {
          const pct = totalChannelBudget > 0 ? (r.budgetNok / totalChannelBudget) * 100 : 0;
          const escName = r.name.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
          return `
            <div onclick="openChannelDetail('${escName}')" class="cursor-pointer flex items-center justify-between gap-2 text-xs hover:bg-slate-50 rounded px-1.5 py-0.5 -mx-1.5 transition-colors">
              <div class="flex items-center gap-2 min-w-0">
                <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:${r.color}"></span>
                <span class="font-medium text-slate-800 truncate hover:underline underline-offset-2">${r.name}</span>
              </div>
              <div class="flex items-center gap-2 tabular-nums shrink-0">
                <span class="text-slate-500">${Math.round(r.budgetNok).toLocaleString()} NOK</span>
                <span class="font-semibold text-slate-900 w-11 text-right">${pct.toFixed(1)}%</span>
              </div>
            </div>
          `;
        }).join('');
    }
  }

  const leadSegments = rows.filter(r => r.leadCount > 0).sort((a, b) => b.leadCount - a.leadCount).map(r => ({ label: r.name, value: r.leadCount, color: r.color }));
  drawChannelDonut(
    'channelLeadShareChart',
    leadSegments,
    String(totalLeads),
    totalLeads === 1 ? 'Total lead' : 'Total leads',
    v => `${v} lead${v === 1 ? '' : 's'}`
  );

  const leadLegendEl = document.getElementById('channel-lead-share-legend');
  if (leadLegendEl) {
    if (leadSegments.length === 0) {
      leadLegendEl.innerHTML = `<p class="text-xs text-slate-400">No leads registered yet. Add leads in the Leads app to see lead share per channel.</p>`;
    } else {
      leadLegendEl.innerHTML = [...rows]
        .filter(r => r.leadCount > 0)
        .sort((a, b) => b.leadCount - a.leadCount)
        .map(r => {
          const pct = totalLeads > 0 ? (r.leadCount / totalLeads) * 100 : 0;
          const escName = r.name.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
          return `
            <div onclick="openChannelDetail('${escName}')" class="cursor-pointer flex items-center justify-between gap-2 text-xs hover:bg-slate-50 rounded px-1.5 py-0.5 -mx-1.5 transition-colors">
              <div class="flex items-center gap-2 min-w-0">
                <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:${r.color}"></span>
                <span class="font-medium text-slate-800 truncate hover:underline underline-offset-2">${r.name}</span>
              </div>
              <div class="flex items-center gap-2 tabular-nums shrink-0">
                <span class="text-slate-500">${r.leadCount} lead${r.leadCount === 1 ? '' : 's'}</span>
                <span class="font-semibold text-slate-900 w-11 text-right">${pct.toFixed(1)}%</span>
              </div>
            </div>
          `;
        }).join('');
    }
  }

  const emptyEl = document.getElementById('channels-empty-state');
  const tableWrap = document.getElementById('channels-table-wrapper');
  const tbody = document.getElementById('channels-table-body');
  if (!emptyEl || !tableWrap || !tbody) return;

  if (rows.length === 0) {
    emptyEl.classList.remove('hidden');
    tableWrap.classList.add('hidden');
    return;
  }
  emptyEl.classList.add('hidden');
  tableWrap.classList.remove('hidden');

  tbody.innerHTML = rows.map(r => {
    const budgetShare = totalChannelBudget > 0 ? (r.budgetNok / totalChannelBudget) * 100 : 0;
    const spendPctOfBudget = r.budgetNok > 0 ? (r.spendNok / r.budgetNok) * 100 : 0;
    const spendBarPct = Math.min(100, Math.max(0, spendPctOfBudget));
    const spendBarColor = spendPctOfBudget > 100 ? '#ef4444' : r.color;
    const leadShare = totalLeads > 0 ? (r.leadCount / totalLeads) * 100 : 0;
    const escName = r.name.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    return `
      <tr onclick="openChannelDetail('${escName}')" class="group cursor-pointer hover:bg-slate-50/80 transition-colors">
        <td class="py-3 px-4">
          <div class="flex items-center gap-2.5">
            ${renderChannelIconHtml(r.name, 'w-6 h-6', r.color)}
            <span class="font-semibold text-slate-900 group-hover:underline underline-offset-2">${r.name}</span>
          </div>
        </td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200/70">${r.type || 'Other'}</span>
        </td>
        <td class="py-3 px-4 text-right tabular-nums font-medium text-slate-900">
          ${r.budgetNok > 0 ? `${Math.round(r.budgetNok).toLocaleString()} NOK` : '—'}
        </td>
        <td class="py-3 px-4">
          <div class="flex items-center gap-2">
            <div class="w-20 h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div class="h-full rounded-full" style="width:${budgetShare.toFixed(1)}%; background:${r.color}"></div>
            </div>
            <span class="tabular-nums font-medium text-slate-700">${budgetShare.toFixed(1)}%</span>
          </div>
        </td>
        <td class="py-3 px-4 text-right tabular-nums font-medium text-slate-900">
          ${r.spendNok > 0 ? `${Math.round(r.spendNok).toLocaleString()} NOK` : '—'}
        </td>
        <td class="py-3 px-4">
          ${r.budgetNok > 0 ? `
            <div class="flex items-center gap-2">
              <div class="w-20 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div class="h-full rounded-full" style="width:${spendBarPct.toFixed(1)}%; background:${spendBarColor}"></div>
              </div>
              <span class="tabular-nums font-medium ${spendPctOfBudget > 100 ? 'text-red-600' : 'text-slate-700'}">${spendPctOfBudget.toFixed(1)}%</span>
            </div>
          ` : `<span class="text-slate-400">—</span>`}
        </td>
        <td class="py-3 px-4 text-right tabular-nums font-medium text-slate-900">
          ${r.leadCount}
        </td>
        <td class="py-3 px-4">
          <div class="flex items-center gap-2">
            <div class="w-20 h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div class="h-full rounded-full" style="width:${leadShare.toFixed(1)}%; background:${r.color}"></div>
            </div>
            <span class="tabular-nums font-medium text-slate-700">${leadShare.toFixed(1)}%</span>
          </div>
        </td>
        <td class="py-3 px-4 text-right" onclick="event.stopPropagation()">
          ${renderActionMenuHtml(`toggleChannelForm(true, ${r.id})`, `deleteChannel(${r.id})`)}
        </td>
      </tr>
    `;
  }).join('');
}

let budgetData = {};
let budgetTotalByYear = {};
let budgetMonthlyCapByYear = {};
let budgetTotalLockByYear = {};
let budgetMonthLocksByYear = {};
let budgetPlannedUnit = 'nok';
let budgetYear = '2026';
let budgetSubView = 'summary';
const budgetCurrency = 'NOK';
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function ensureMonthlyCaps(year) {
  if (!budgetMonthlyCapByYear[year]) {
    budgetMonthlyCapByYear[year] = Array(12).fill(0);
  }
  return budgetMonthlyCapByYear[year];
}

function ensureMonthLocks(year) {
  if (!Array.isArray(budgetMonthLocksByYear[year]) || budgetMonthLocksByYear[year].length !== 12) {
    budgetMonthLocksByYear[year] = Array(12).fill(false);
  }
  return budgetMonthLocksByYear[year];
}

function isAnnualBudgetLocked(year) {
  return Boolean(budgetTotalLockByYear[year]);
}

function setBudgetSubView(sv) {
  budgetSubView = sv;
  const views = ['summary', 'total', 'allocated', 'actual', 'variance'];
  views.forEach(v => {
    document.getElementById('budget-sub-' + v)?.classList.toggle('hidden', v !== sv);
  });

  document.querySelectorAll('.budget-flow-tab').forEach(btn => {
    const active = btn.getAttribute('data-budget-tab') === sv;
    btn.className = active
      ? 'budget-flow-tab h-8 px-3 rounded-lg text-xs font-medium transition-colors bg-[#0f172a] text-white'
      : 'budget-flow-tab h-8 px-3 rounded-lg text-xs font-medium transition-colors bg-[#fbfcfd] border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50';
  });

  const meta = {
    summary: {
      crumb: '',
      title: 'Budget',
      desc: 'Summary of your marketing budget in NOK. Select any card below to open its detailed view.'
    },
    total: {
      crumb: 'Total Budget',
      title: 'Total Budget per Year',
      desc: 'Set and lock your Annual Total and Monthly budgets in NOK, then allocate each month by NOK or %.'
    },
    allocated: {
      crumb: 'Allocated to Channels',
      title: 'Allocated to Channels',
      desc: 'Planned monthly budgets and % share by channel in NOK.'
    },
    actual: {
      crumb: 'Total Actual Spend',
      title: 'Total Actual Spend',
      desc: 'Record and review actual monthly spend per channel in NOK.'
    },
    variance: {
      crumb: 'Net Variance',
      title: 'Net Variance',
      desc: 'Compare allocated budget vs. actual spend per channel in NOK.'
    }
  };

  const m = meta[sv] || meta.summary;
  const isSummary = sv === 'summary';
  document.getElementById('budget-sub-crumb-sep')?.classList.toggle('hidden', isSummary);
  const crumbEl = document.getElementById('budget-sub-crumb');
  if (crumbEl) {
    crumbEl.classList.toggle('hidden', isSummary);
    crumbEl.textContent = m.crumb;
  }
  document.getElementById('budget-back-btn')?.classList.toggle('hidden', isSummary);
  const titleEl = document.getElementById('budget-page-title');
  if (titleEl) titleEl.textContent = m.title;
  const descEl = document.getElementById('budget-page-desc');
  if (descEl) descEl.textContent = m.desc;

  renderBudgetView();
  if (!document.getElementById('view-budget')?.classList.contains('hidden')) {
    syncRouteUrl(sv === 'summary' ? '/budget' : `/budget/${sv}`);
  }
}

function toggleAnnualBudgetLock() {
  budgetTotalLockByYear[budgetYear] = !isAnnualBudgetLocked(budgetYear);
  renderBudgetView();
}

function toggleMonthBudgetLock(mIdx) {
  const locks = ensureMonthLocks(budgetYear);
  locks[mIdx] = !locks[mIdx];
  renderBudgetView();
}

function syncBudgetDependents() {
  if (!document.getElementById('view-channels')?.classList.contains('hidden')) renderChannelsView();
  if (!document.getElementById('ch-detail-view')?.classList.contains('hidden') && activeChannelDetailName) renderChannelDetailView();
  if (!document.getElementById('view-marketing-reports')?.classList.contains('hidden')) renderMarketingReportsView();
  if (typeof renderCards === 'function') renderCards();
}

function syncAnnualBudgetWithChannels(year = budgetYear) {
  const yearObj = budgetData[year] || {};
  const channels = Object.keys(yearObj);
  const monthlyPlannedSum = Array(12).fill(0);
  let totalPlanned = 0;

  channels.forEach(ch => {
    const row = yearObj[ch];
    for (let m = 0; m < 12; m++) {
      const val = row.planned[m] || 0;
      monthlyPlannedSum[m] += val;
      totalPlanned += val;
    }
  });

  const caps = ensureMonthlyCaps(year);
  const locks = ensureMonthLocks(year);
  for (let m = 0; m < 12; m++) {
    if (!locks[m] && (monthlyPlannedSum[m] > (caps[m] || 0) || !caps[m])) {
      caps[m] = Math.round(monthlyPlannedSum[m] * 100) / 100;
    }
  }

  if (!isAnnualBudgetLocked(year)) {
    const currentAnnual = budgetTotalByYear[year] || 0;
    const capSum = caps.reduce((a, b) => a + b, 0);
    const targetTotal = Math.max(totalPlanned, capSum);
    if (targetTotal > currentAnnual || currentAnnual === 0) {
      budgetTotalByYear[year] = Math.round(targetTotal * 100) / 100;
    }
  }
}

function handleAnnualBudgetChange() {
  if (isAnnualBudgetLocked(budgetYear)) return;
  const val = parseFloat(document.getElementById('budget-annual-total').value);
  budgetTotalByYear[budgetYear] = isNaN(val) || val < 0 ? 0 : val;
  distributeAnnualEvenly({ skipRender: true });
  renderBudgetView();
  syncBudgetDependents();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function distributeAnnualEvenly(opts = {}) {
  const annual = budgetTotalByYear[budgetYear] || 0;
  const caps = ensureMonthlyCaps(budgetYear);
  const locks = ensureMonthLocks(budgetYear);
  let lockedSum = 0;
  const unlockedIndices = [];
  for (let m = 0; m < 12; m++) {
    if (locks[m]) lockedSum += caps[m] || 0;
    else unlockedIndices.push(m);
  }
  if (unlockedIndices.length > 0) {
    const remaining = Math.max(0, annual - lockedSum);
    const perMonth = remaining > 0 ? Math.round((remaining / unlockedIndices.length) * 100) / 100 : 0;
    unlockedIndices.forEach(m => {
      caps[m] = perMonth;
    });
  }
  if (!opts.skipRender) {
    renderBudgetView();
    syncBudgetDependents();
    if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
  }
}

function updateMonthlyCap(mIdx, val) {
  const locks = ensureMonthLocks(budgetYear);
  if (locks[mIdx]) return;
  const num = parseFloat(val);
  const caps = ensureMonthlyCaps(budgetYear);
  caps[mIdx] = isNaN(num) || num < 0 ? 0 : num;
  if (!isAnnualBudgetLocked(budgetYear)) {
    budgetTotalByYear[budgetYear] = Math.round(caps.reduce((a, b) => a + b, 0) * 100) / 100;
    const annualInput = document.getElementById('budget-annual-total');
    if (annualInput) {
      annualInput.value = budgetTotalByYear[budgetYear] > 0 ? Math.round(budgetTotalByYear[budgetYear]) : '';
    }
  }
  renderBudgetView();
  syncBudgetDependents();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function handleBudgetYearChange() {
  const sel = document.getElementById('budget-year-select');
  if (sel) requestYearChange(sel.value, sel);
}

function renderBudgetChannelOptions(selectedValue = '') {
  const sel = document.getElementById('b-channel');
  if (!sel) return;
  if (selectedValue && selectedValue !== '__add_new__') {
    ensureChannelExists(selectedValue);
  }
  const names = getChannelNames();
  sel.innerHTML = `
    <option value="" disabled ${!selectedValue ? 'selected' : ''}>Select channel...</option>
    ${names.map(c => `<option value="${c}" ${c === selectedValue ? 'selected' : ''}>${c}</option>`).join('')}
    <option value="__add_new__">+ Add new channel...</option>
  `;
}

function handleBudgetChannelSelectChange() {
  const sel = document.getElementById('b-channel');
  const wrap = document.getElementById('b-channel-custom-wrap');
  const customInput = document.getElementById('b-channel-custom');
  if (sel.value === '__add_new__') {
    wrap.classList.remove('hidden');
    customInput.value = '';
    customInput.focus();
  } else {
    wrap.classList.add('hidden');
  }
}

function confirmAddBudgetCustomChannel() {
  const customInput = document.getElementById('b-channel-custom');
  const val = (customInput.value || '').trim();
  if (!val) {
    customInput.focus();
    return;
  }
  ensureChannelExists(val);
  renderBudgetChannelOptions(val);
  document.getElementById('b-channel-custom-wrap').classList.add('hidden');
}

function setBudgetPlannedUnit(unit) {
  budgetPlannedUnit = unit === 'pct' ? 'pct' : 'nok';
  const nokBtn = document.getElementById('b-planned-unit-nok');
  const pctBtn = document.getElementById('b-planned-unit-pct');
  const lbl = document.getElementById('b-planned-label');
  if (nokBtn && pctBtn) {
    if (budgetPlannedUnit === 'nok') {
      nokBtn.className = 'px-1.5 py-0.5 rounded bg-[#0f172a] text-white font-semibold';
      pctBtn.className = 'px-1.5 py-0.5 rounded text-slate-600 hover:text-slate-900 font-medium';
    } else {
      pctBtn.className = 'px-1.5 py-0.5 rounded bg-[#0f172a] text-white font-semibold';
      nokBtn.className = 'px-1.5 py-0.5 rounded text-slate-600 hover:text-slate-900 font-medium';
    }
  }
  if (lbl) {
    lbl.textContent = budgetPlannedUnit === 'pct' ? 'Planned Share (% of Total)' : 'Planned Budget (NOK)';
  }
  updateBudgetFormHint();
}

function updateBudgetFormHint() {
  const hintEl = document.getElementById('b-form-hint');
  if (!hintEl) return;
  const monthVal = document.getElementById('b-month')?.value || 'all';
  const rawPlanned = parseFloat(document.getElementById('b-planned')?.value) || 0;
  const caps = ensureMonthlyCaps(budgetYear);
  const capSum = caps.reduce((a, b) => a + b, 0);
  const annualBudget = budgetTotalByYear[budgetYear] || capSum || 0;

  if (monthVal === 'all') {
    if (budgetPlannedUnit === 'pct') {
      if (annualBudget <= 0) {
        hintEl.textContent = 'All Months selected (% of Total): set an Annual Total or Monthly budgets first so % can be converted to NOK and divided by 12.';
      } else {
        const totalNok = (rawPlanned / 100) * annualBudget;
        const perMonth = Math.round((totalNok / 12) * 100) / 100;
        hintEl.textContent = `All Months selected: ${rawPlanned}% of ${Math.round(annualBudget).toLocaleString()} NOK = ${Math.round(totalNok).toLocaleString()} NOK total → ${perMonth.toLocaleString()} NOK / month (÷ 12).`;
      }
    } else {
      if (rawPlanned > 0) {
        const perMonth = Math.round((rawPlanned / 12) * 100) / 100;
        hintEl.textContent = `All Months selected: ${rawPlanned.toLocaleString()} NOK will be divided evenly across 12 months → ${perMonth.toLocaleString()} NOK / month.`;
      } else {
        hintEl.textContent = 'All Months selected: the planned amount will be divided evenly across 12 months (÷ 12).';
      }
    }
  } else {
    const mIdx = parseInt(monthVal, 10);
    const mName = monthNames[mIdx] || 'selected month';
    const monthBase = caps[mIdx] > 0 ? caps[mIdx] : (annualBudget > 0 ? annualBudget / 12 : 0);
    if (budgetPlannedUnit === 'pct') {
      if (monthBase <= 0) {
        hintEl.textContent = `${mName} selected (% of Total): set ${mName}'s budget or an Annual Total first to calculate NOK.`;
      } else {
        const nokVal = Math.round(((rawPlanned / 100) * monthBase) * 100) / 100;
        hintEl.textContent = `${mName} selected: ${rawPlanned}% of ${Math.round(monthBase).toLocaleString()} NOK = ${nokVal.toLocaleString()} NOK applied only to ${mName}.`;
      }
    } else {
      hintEl.textContent = rawPlanned > 0
        ? `${mName} selected: ${rawPlanned.toLocaleString()} NOK will be applied only to ${mName}.`
        : `${mName} selected: the planned amount will be applied only to ${mName}.`;
    }
  }
}

function toggleBudgetForm(show) {
  const panel = document.getElementById('budget-form-panel');
  if (!show) {
    panel.classList.add('hidden');
    document.getElementById('b-channel-custom-wrap').classList.add('hidden');
    return;
  }
  panel.classList.remove('hidden');
  document.getElementById('b-channel-custom-wrap').classList.add('hidden');
  renderBudgetChannelOptions('');
  document.getElementById('b-month').value = 'all';
  document.getElementById('b-planned').value = '';
  document.getElementById('b-actual').value = '';
  setBudgetPlannedUnit('nok');
  document.getElementById('b-channel').focus();
}

function saveBudgetEntry() {
  const selVal = document.getElementById('b-channel').value;
  const customVal = (document.getElementById('b-channel-custom').value || '').trim();
  const channel = selVal === '__add_new__' ? customVal : (selVal || '').trim();
  const monthVal = document.getElementById('b-month').value;
  const rawPlanned = parseFloat(document.getElementById('b-planned').value) || 0;
  const actual = parseFloat(document.getElementById('b-actual').value) || 0;

  if (!channel) {
    if (selVal === '__add_new__') document.getElementById('b-channel-custom').focus();
    else document.getElementById('b-channel').focus();
    return;
  }
  ensureChannelExists(channel);

  const caps = ensureMonthlyCaps(budgetYear);
  const capSum = caps.reduce((a, b) => a + b, 0);
  const annualBudget = budgetTotalByYear[budgetYear] || capSum || 0;

  let plannedAmount = rawPlanned;
  if (budgetPlannedUnit === 'pct') {
    if (monthVal === 'all') {
      plannedAmount = annualBudget > 0 ? (rawPlanned / 100) * annualBudget : 0;
    } else {
      const mIdx = parseInt(monthVal, 10);
      const monthBase = caps[mIdx] > 0 ? caps[mIdx] : (annualBudget > 0 ? annualBudget / 12 : 0);
      plannedAmount = monthBase > 0 ? (rawPlanned / 100) * monthBase : 0;
    }
  }

  if (!budgetData[budgetYear]) budgetData[budgetYear] = {};
  if (!budgetData[budgetYear][channel]) {
    budgetData[budgetYear][channel] = {
      planned: Array(12).fill(0),
      actual: Array(12).fill(0)
    };
  }

  if (monthVal === 'all') {
    const plannedPerMonth = Math.round((plannedAmount / 12) * 100) / 100;
    const actualPerMonth = Math.round((actual / 12) * 100) / 100;
    for (let m = 0; m < 12; m++) {
      budgetData[budgetYear][channel].planned[m] = plannedPerMonth;
      budgetData[budgetYear][channel].actual[m] = actualPerMonth;
    }
  } else {
    const mIdx = parseInt(monthVal, 10);
    budgetData[budgetYear][channel].planned[mIdx] = Math.round(plannedAmount * 100) / 100;
    budgetData[budgetYear][channel].actual[mIdx] = actual;
  }

  toggleBudgetForm(false);
  syncAnnualBudgetWithChannels(budgetYear);
  renderBudgetView();
  syncBudgetDependents();
}

function updateBudgetCell(channel, monthIdx, val) {
  const num = parseFloat(val);
  if (!budgetData[budgetYear] || !budgetData[budgetYear][channel]) return;
  budgetData[budgetYear][channel].planned[monthIdx] = isNaN(num) || num < 0 ? 0 : num;
  syncAnnualBudgetWithChannels(budgetYear);
  renderBudgetView();
  syncBudgetDependents();
}

function updateBudgetCellPct(channel, monthIdx, pctVal) {
  const pct = parseFloat(pctVal);
  if (!budgetData[budgetYear] || !budgetData[budgetYear][channel]) return;
  if (isNaN(pct) || pct < 0) return;
  const caps = ensureMonthlyCaps(budgetYear);
  const capSum = caps.reduce((a, b) => a + b, 0);
  const annualBudget = budgetTotalByYear[budgetYear] || capSum || 0;
  let monthAllocated = 0;
  Object.keys(budgetData[budgetYear]).forEach(ch => {
    monthAllocated += budgetData[budgetYear][ch].planned[monthIdx] || 0;
  });
  const monthBase = caps[monthIdx] > 0 ? caps[monthIdx] : (annualBudget > 0 ? annualBudget / 12 : monthAllocated);
  if (monthBase <= 0) return;
  budgetData[budgetYear][channel].planned[monthIdx] = Math.round(((pct / 100) * monthBase) * 100) / 100;
  syncAnnualBudgetWithChannels(budgetYear);
  renderBudgetView();
  syncBudgetDependents();
}

function updateBudgetActualCell(channel, monthIdx, val) {
  const num = parseFloat(val);
  if (!budgetData[budgetYear] || !budgetData[budgetYear][channel]) return;
  budgetData[budgetYear][channel].actual[monthIdx] = isNaN(num) || num < 0 ? 0 : num;
  renderBudgetView();
  syncBudgetDependents();
}

function deleteBudgetChannel(channel) {
  confirmDeleteAction(`Remove "${channel}" from ${budgetYear} budget?`, () => {
    if (budgetData[budgetYear]) {
      delete budgetData[budgetYear][channel];
    }
    syncAnnualBudgetWithChannels(budgetYear);
    renderBudgetView();
    syncBudgetDependents();
  });
}

function renderBudgetView() {
  const yearObj = budgetData[budgetYear] || {};
  const channels = Object.keys(yearObj);
  const caps = ensureMonthlyCaps(budgetYear);
  const monthlyCapSum = caps.reduce((a, b) => a + b, 0);
  const annualBudget = budgetTotalByYear[budgetYear] || monthlyCapSum || 0;
  const annualInput = document.getElementById('budget-annual-total');
  if (annualInput && document.activeElement !== annualInput) {
    annualInput.value = annualBudget > 0 ? Math.round(annualBudget) : '';
  }

  let totalPlanned = 0;
  let totalActual = 0;
  const monthlyPlanned = Array(12).fill(0);
  const monthlyActual = Array(12).fill(0);

  channels.forEach(ch => {
    const row = yearObj[ch];
    for (let m = 0; m < 12; m++) {
      totalPlanned += row.planned[m];
      totalActual += row.actual[m];
      monthlyPlanned[m] += row.planned[m];
      monthlyActual[m] += row.actual[m];
    }
  });

  const variance = totalActual - totalPlanned;
  const varSign = variance > 0 ? '+' : '';

  document.getElementById('budget-chart-year').textContent = budgetYear;
  document.getElementById('budget-empty-title').textContent = `No budgets for ${budgetYear} yet`;
  document.getElementById('b-sum-annual').textContent = `${Math.round(annualBudget).toLocaleString()} NOK`;
  if (annualBudget > 0) {
    const unallocated = annualBudget - totalPlanned;
    document.getElementById('b-sum-annual-sub').textContent = unallocated >= 0
      ? `${Math.round(unallocated).toLocaleString()} NOK unallocated`
      : `${Math.round(Math.abs(unallocated)).toLocaleString()} NOK over budget`;
  } else {
    document.getElementById('b-sum-annual-sub').textContent = `Set per year or month`;
  }

  document.getElementById('b-sum-planned').textContent = `${Math.round(totalPlanned).toLocaleString()} NOK`;
  document.getElementById('b-sum-year-lbl').textContent = annualBudget > 0
    ? `${((totalPlanned / annualBudget) * 100).toFixed(1)}% of ${budgetYear} budget`
    : `${channels.length} channels · Year ${budgetYear}`;

  document.getElementById('b-sum-actual').textContent = `${Math.round(totalActual).toLocaleString()} NOK`;
  document.getElementById('b-sum-actual-sub').textContent = annualBudget > 0
    ? `${((totalActual / annualBudget) * 100).toFixed(1)}% of ${budgetYear} budget`
    : 'Recorded actuals';

  document.getElementById('b-sum-variance').textContent = `${varSign}${Math.round(variance).toLocaleString()} NOK`;

  if (budgetSubView === 'summary') renderBudgetSummary(channels, yearObj, monthlyPlanned, monthlyActual, totalPlanned, annualBudget);
  if (budgetSubView === 'total') renderBudgetSubTotal(channels, yearObj, caps, monthlyPlanned);
  if (budgetSubView === 'allocated') renderBudgetAllocated(channels, yearObj);
  if (budgetSubView === 'actual') renderBudgetActual(channels, yearObj);
  if (budgetSubView === 'variance') renderBudgetVariance(channels, yearObj);
}

function drawBudgetChannelPie(segments) {
  const canvas = document.getElementById('budgetChannelPieChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const size = 160;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  ctx.scale(dpr, dpr);

  const cx = size / 2;
  const cy = size / 2;
  const r = 68;
  const total = segments.reduce((a, s) => a + s.value, 0);

  const slices = [];
  if (total > 0) {
    let angle = -Math.PI / 2;
    segments.forEach((seg, idx) => {
      const span = (seg.value / total) * Math.PI * 2;
      slices.push({ ...seg, idx, start: angle, end: angle + span });
      angle += span;
    });
  }

  const renderPie = (hoverIdx = -1) => {
    ctx.clearRect(0, 0, size, size);
    if (total <= 0) {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = '#f1f5f9';
      ctx.fill();
      return;
    }

    slices.forEach(s => {
      const isHovered = s.idx === hoverIdx;
      const radius = isHovered ? r + 4 : r;
      ctx.save();
      ctx.globalAlpha = hoverIdx !== -1 && !isHovered ? 0.55 : 1;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, s.start, s.end);
      ctx.closePath();
      ctx.fillStyle = s.color;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
      ctx.restore();
    });
  };

  canvas._pieMeta = { slices, total, hoverIdx: -1, render: renderPie };
  renderPie(-1);

  if (!canvas._hasPieHover) {
    canvas._hasPieHover = true;
    canvas.addEventListener('mousemove', e => {
      const meta = canvas._pieMeta;
      if (!meta || meta.total <= 0) return;
      const rect = canvas.getBoundingClientRect();
      const dx = e.clientX - rect.left - cx;
      const dy = e.clientY - rect.top - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > r + 4) {
        if (meta.hoverIdx !== -1) {
          meta.hoverIdx = -1;
          meta.render(-1);
        }
        hideChartTooltip();
        return;
      }
      let ang = Math.atan2(dy, dx);
      if (ang < -Math.PI / 2) ang += Math.PI * 2;
      const hit = meta.slices.find(s => ang >= s.start && ang <= s.end);
      if (!hit) return;
      if (meta.hoverIdx !== hit.idx) {
        meta.hoverIdx = hit.idx;
        meta.render(hit.idx);
      }
      const pct = ((hit.value / meta.total) * 100).toFixed(1);
      showChartTooltip(
        e.clientX,
        e.clientY,
        `<div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full" style="background:${hit.color}"></span><span class="font-semibold">${hit.label}</span><span class="text-slate-300">·</span><span>${Math.round(hit.value).toLocaleString()} NOK</span><span class="text-slate-300">(${pct}%)</span></div>`
      );
    });
    canvas.addEventListener('mouseleave', () => {
      const meta = canvas._pieMeta;
      if (meta && meta.hoverIdx !== -1) {
        meta.hoverIdx = -1;
        meta.render(-1);
      }
      hideChartTooltip();
    });
  }
}

function renderBudgetSummary(channels, yearObj, monthlyPlanned, monthlyActual, totalPlanned, annualBudget) {
  const graphsEl = document.getElementById('budget-summary-graphs');
  const emptyEl = document.getElementById('budget-empty-state');
  const hasData = channels.length > 0 || annualBudget > 0;

  if (!hasData) {
    graphsEl.classList.add('hidden');
    emptyEl.classList.remove('hidden');
    return;
  }

  graphsEl.classList.remove('hidden');
  emptyEl.classList.add('hidden');

  drawBudgetChart(monthlyPlanned, monthlyActual);

  const barsContainer = document.getElementById('budget-channel-bars');
  if (channels.length === 0) {
    drawBudgetChannelPie([]);
    barsContainer.innerHTML = `<p class="text-xs text-slate-400">No channels added yet. Click <strong>+ Add Budget</strong> to allocate across channels.</p>`;
    return;
  }

  const palette = ['#7c3aed', '#10b981', '#f43f5e', '#f59e0b', '#0ea5e9', '#6366f1', '#14b8a6'];
  const segments = channels.map((ch, idx) => {
    const chSum = yearObj[ch].planned.reduce((a, b) => a + b, 0);
    return {
      label: ch,
      value: chSum,
      color: getChannelColor(ch, idx) || palette[idx % palette.length]
    };
  }).filter(s => s.value > 0);

  drawBudgetChannelPie(segments);

  barsContainer.innerHTML = channels.map((ch, idx) => {
    const chSum = yearObj[ch].planned.reduce((a, b) => a + b, 0);
    const pctExact = totalPlanned > 0 ? (chSum / totalPlanned) * 100 : 0;
    const color = getChannelColor(ch, idx) || palette[idx % palette.length];
    const safeCh = ch.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    const tipHtml = `<div class=&quot;flex items-center gap-1.5&quot;><span class=&quot;w-2 h-2 rounded-full&quot; style=&quot;background:${color}&quot;></span><span class=&quot;font-semibold&quot;>${safeCh}</span><span class=&quot;text-slate-300&quot;>·</span><span>${Math.round(chSum).toLocaleString()} NOK</span><span class=&quot;text-slate-300&quot;>(${pctExact.toFixed(1)}%)</span></div>`;
    return `
      <div class="flex items-center justify-between gap-2 text-xs cursor-pointer rounded-lg px-1.5 py-1 -mx-1.5 hover:bg-slate-50/90 transition-colors" onmousemove="showChartTooltip(event.clientX, event.clientY, '${tipHtml.replace(/'/g, "\\'")}')" onmouseleave="hideChartTooltip()">
        <div class="flex items-center gap-2 min-w-0">
          <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:${color}"></span>
          <span class="font-medium text-slate-800 truncate">${ch}</span>
        </div>
        <span class="tabular-nums text-[11px] text-slate-600 shrink-0">${Math.round(chSum).toLocaleString()} NOK (${pctExact.toFixed(1)}%)</span>
      </div>
    `;
  }).join('');
}

function renderBudgetSubTotal(channels, yearObj, caps, monthlyPlanned) {
  if (!channels) {
    yearObj = budgetData[budgetYear] || {};
    channels = Object.keys(yearObj);
    caps = ensureMonthlyCaps(budgetYear);
    monthlyPlanned = Array(12).fill(0);
    channels.forEach(ch => {
      for (let m = 0; m < 12; m++) monthlyPlanned[m] += yearObj[ch].planned[m];
    });
  }

  const annualLocked = isAnnualBudgetLocked(budgetYear);
  const monthLocks = ensureMonthLocks(budgetYear);

  document.getElementById('bt-year-lbl').textContent = budgetYear;
  const annualInput = document.getElementById('budget-annual-total');
  const annualWrap = document.getElementById('budget-annual-total-wrap');
  const annualLockBtn = document.getElementById('budget-annual-lock-btn');
  if (annualInput) {
    if (document.activeElement !== annualInput) {
      const saved = budgetTotalByYear[budgetYear];
      annualInput.value = saved > 0 ? saved : '';
    }
    annualInput.disabled = annualLocked;
  }
  if (annualWrap) {
    annualWrap.className = annualLocked
      ? 'flex items-center gap-1.5 bg-slate-100 border border-slate-300 rounded-lg px-3 h-8 text-xs'
      : 'flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-3 h-8 text-xs';
  }
  if (annualLockBtn) {
    annualLockBtn.className = annualLocked
      ? 'h-8 px-2.5 rounded-lg border border-slate-900 bg-[#0f172a] text-white text-xs font-medium flex items-center gap-1.5 transition-colors'
      : 'h-8 px-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-medium text-slate-700 flex items-center gap-1.5 transition-colors';
    annualLockBtn.innerHTML = annualLocked
      ? `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg><span>Locked</span>`
      : `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/></svg><span>Lock Total</span>`;
  }

  const capSum = caps.reduce((a, b) => a + b, 0);
  document.getElementById('bt-monthly-sum-lbl').textContent = `Monthly sum: ${Math.round(capSum).toLocaleString()} NOK`;

  document.getElementById('bt-month-inputs').innerHTML = monthNames.map((mName, mIdx) => {
    const isLocked = Boolean(monthLocks[mIdx]);
    return `
      <div class="p-2.5 rounded-xl ${isLocked ? 'bg-slate-100/90 border-slate-300' : 'bg-white border-slate-200/80'} border space-y-1 transition-colors">
        <div class="flex items-center justify-between text-[11px] text-slate-500">
          <span class="font-medium text-slate-700">${mName}</span>
          <div class="flex items-center gap-1.5">
            <span>NOK</span>
            <button
              type="button"
              onclick="toggleMonthBudgetLock(${mIdx})"
              title="${isLocked ? 'Unlock month budget' : 'Lock month budget'}"
              class="p-0.5 rounded ${isLocked ? 'text-slate-900 bg-white border border-slate-300' : 'text-slate-400 hover:text-slate-700'}"
            >
              ${isLocked
                ? `<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>`
                : `<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/></svg>`
              }
            </button>
          </div>
        </div>
        <input
          type="number"
          min="0"
          step="any"
          value="${caps[mIdx] > 0 ? Math.round(caps[mIdx]) : ''}"
          placeholder="0"
          ${isLocked ? 'disabled' : ''}
          onchange="updateMonthlyCap(${mIdx}, this.value)"
          class="w-full text-xs font-semibold tabular-nums ${isLocked ? 'text-slate-500 cursor-not-allowed' : 'text-slate-900'} bg-transparent border-b border-transparent focus:border-slate-400 focus:outline-none"
        />
      </div>
    `;
  }).join('');

  const monthFilter = document.getElementById('bt-divide-month').value;
  const targetMonths = monthFilter === 'all' ? [0,1,2,3,4,5,6,7,8,9,10,11] : [parseInt(monthFilter, 10)];
  const container = document.getElementById('bt-divided-channels-container');

  if (channels.length === 0 && capSum === 0) {
    container.innerHTML = `<div class="p-6 rounded-xl border border-dashed border-slate-200 bg-[#fbfcfd] text-center text-xs text-slate-500">Set monthly budgets above or add channels to see each month divided by channel.</div>`;
    return;
  }

  const annualBudget = budgetTotalByYear[budgetYear] || capSum || 0;

  container.innerHTML = targetMonths.map(mIdx => {
    const monthCap = caps[mIdx] || 0;
    const isLocked = Boolean(monthLocks[mIdx]);
    const monthAllocated = monthlyPlanned[mIdx] || 0;
    const denom = monthCap > 0 ? monthCap : (annualBudget > 0 ? annualBudget / 12 : Math.max(1, monthAllocated));
    const unallocated = monthCap > 0 ? monthCap - monthAllocated : 0;

    const chRows = channels.length === 0
      ? `<div class="flex items-center justify-between text-[11px] text-slate-400 py-1">
           <span>No channels added yet for ${budgetYear}.</span>
           <button onclick="toggleBudgetForm(true)" class="text-slate-700 font-medium underline">+ Add channel</button>
         </div>`
      : channels.map(ch => {
          const val = yearObj[ch].planned[mIdx] || 0;
          const pct = denom > 0 ? ((val / denom) * 100).toFixed(1) : '0.0';
          const escCh = ch.replace(/'/g, "\\'");
          return `
            <div class="flex items-center justify-between gap-3 text-xs py-1">
              <span class="text-slate-700 font-medium">${ch}</span>
              <div class="flex items-center gap-2 tabular-nums">
                <div class="flex items-center gap-1 bg-white border border-slate-200 rounded-md px-2 h-7">
                  <input
                    type="number"
                    min="0"
                    step="any"
                    value="${val > 0 ? Math.round(val) : ''}"
                    placeholder="0"
                    onchange="updateBudgetCell('${escCh}', ${mIdx}, this.value)"
                    class="w-20 text-right bg-transparent text-xs font-semibold text-slate-900 focus:outline-none tabular-nums"
                  />
                  <span class="text-[10px] text-slate-400">NOK</span>
                </div>
                <div class="flex items-center gap-1 bg-white border border-slate-200 rounded-md px-2 h-7">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value="${val > 0 ? pct : ''}"
                    placeholder="0"
                    onchange="updateBudgetCellPct('${escCh}', ${mIdx}, this.value)"
                    class="w-12 text-right bg-transparent text-xs font-medium text-slate-700 focus:outline-none tabular-nums"
                  />
                  <span class="text-[10px] text-slate-400">%</span>
                </div>
              </div>
            </div>
          `;
        }).join('');

    return `
      <div class="p-3.5 rounded-xl border border-slate-200/80 bg-[#fbfcfd] space-y-2">
        <div class="flex flex-wrap items-center justify-between gap-2 pb-1.5 border-b border-slate-200/70 text-xs">
          <div class="flex items-center gap-2">
            <span class="font-semibold text-slate-900">${monthNames[mIdx]} ${budgetYear}</span>
            ${isLocked ? '<span class="px-1.5 py-0.5 rounded bg-slate-200/80 text-slate-700 text-[10px] font-medium">Locked</span>' : ''}
          </div>
          <div class="flex items-center gap-3 tabular-nums text-[11px] text-slate-500">
            <span>Month Budget: <strong class="text-slate-900">${Math.round(monthCap).toLocaleString()} NOK</strong></span>
            <span>Allocated: <strong class="text-slate-900">${Math.round(monthAllocated).toLocaleString()} NOK</strong></span>
            ${monthCap > 0 ? `<span>Remaining: <strong class="text-slate-700">${Math.round(unallocated).toLocaleString()} NOK</strong></span>` : ''}
          </div>
        </div>
        <div class="space-y-0.5">${chRows}</div>
      </div>
    `;
  }).join('');
}

function renderBudgetAllocated(channels, yearObj) {
  const emptyEl = document.getElementById('budget-allocated-empty');
  const wrapEl = document.getElementById('budget-table-wrapper');
  const tbody = document.getElementById('budget-table-body');

  if (channels.length === 0) {
    emptyEl.classList.remove('hidden');
    wrapEl.classList.add('hidden');
    return;
  }
  emptyEl.classList.add('hidden');
  wrapEl.classList.remove('hidden');

  const caps = ensureMonthlyCaps(budgetYear);
  const capSum = caps.reduce((a, b) => a + b, 0);
  const totalAllPlanned = channels.reduce((sum, ch) => sum + yearObj[ch].planned.reduce((a, b) => a + b, 0), 0);
  const denomTotal = budgetTotalByYear[budgetYear] || capSum || totalAllPlanned || 1;
  const sortedAllocatedChannels = [...channels].sort((a, b) =>
    yearObj[b].planned.reduce((x, y) => x + y, 0) - yearObj[a].planned.reduce((x, y) => x + y, 0)
  );

  tbody.innerHTML = sortedAllocatedChannels.map(ch => {
    const row = yearObj[ch];
    const rowPlanned = row.planned.reduce((a, b) => a + b, 0);
    const pctOfTotal = denomTotal > 0 ? ((rowPlanned / denomTotal) * 100).toFixed(1) : '0.0';
    const escCh = ch.replace(/'/g, "\\'");

    const monthCells = row.planned.map((val, mIdx) => `
      <td class="py-2.5 px-1.5 text-right tabular-nums">
        <input
          type="number"
          min="0"
          step="any"
          value="${val}"
          onchange="updateBudgetCell('${escCh}', ${mIdx}, this.value)"
          class="w-16 text-right bg-transparent hover:bg-slate-50 focus:bg-white border border-transparent focus:border-slate-300 rounded px-1 py-0.5 text-xs text-slate-800 focus:outline-none tabular-nums"
        />
      </td>
    `).join('');

    return `
      <tr class="hover:bg-slate-50/70 transition-colors">
        <td class="py-3 px-4 font-semibold text-slate-900 whitespace-nowrap sticky left-0 bg-white">
          <div class="flex items-center gap-2">
            ${renderChannelIconHtml(ch, 'w-5 h-5')}
            <span>${ch}</span>
          </div>
        </td>
        ${monthCells}
        <td class="py-3 px-3 text-right font-semibold tabular-nums text-slate-900 whitespace-nowrap">${Math.round(rowPlanned).toLocaleString()} NOK</td>
        <td class="py-2.5 px-3 text-right tabular-nums whitespace-nowrap">
          <div class="inline-flex items-center justify-end gap-1">
            <input
              type="number"
              min="0"
              max="100"
              step="0.1"
              value="${pctOfTotal}"
              onchange="updateBudgetChannelTotalPct('${escCh}', this.value)"
              onkeydown="if(event.key==='Enter'){event.preventDefault();this.blur();}"
              class="w-14 text-right bg-transparent hover:bg-slate-50 focus:bg-white border border-transparent focus:border-slate-300 rounded px-1 py-0.5 text-xs font-medium text-slate-700 focus:outline-none tabular-nums"
            />
            <span class="text-[11px] text-slate-400">%</span>
          </div>
        </td>
        <td class="py-3 px-3 text-right">
          ${renderActionMenuHtml('', `deleteBudgetChannel('${escCh}')`)}
        </td>
      </tr>
    `;
  }).join('');
}

function updateBudgetChannelTotalPct(channel, pctVal) {
  const pct = parseFloat(pctVal);
  if (!budgetData[budgetYear] || !budgetData[budgetYear][channel]) return;
  if (isNaN(pct) || pct < 0) {
    renderBudgetView();
    return;
  }
  const caps = ensureMonthlyCaps(budgetYear);
  const capSum = caps.reduce((a, b) => a + b, 0);
  const totalAllPlanned = Object.keys(budgetData[budgetYear]).reduce(
    (sum, ch) => sum + budgetData[budgetYear][ch].planned.reduce((a, b) => a + b, 0),
    0
  );
  const annualBase = budgetTotalByYear[budgetYear] || capSum || totalAllPlanned || 0;
  if (annualBase <= 0) {
    renderBudgetView();
    return;
  }

  const targetChannelTotal = Math.round(((pct / 100) * annualBase) * 100) / 100;
  const row = budgetData[budgetYear][channel];
  const currentRowSum = row.planned.reduce((a, b) => a + b, 0);

  if (currentRowSum > 0) {
    const ratio = targetChannelTotal / currentRowSum;
    for (let m = 0; m < 12; m++) {
      row.planned[m] = Math.round((row.planned[m] * ratio) * 100) / 100;
    }
  } else if (capSum > 0) {
    for (let m = 0; m < 12; m++) {
      row.planned[m] = Math.round(((caps[m] / capSum) * targetChannelTotal) * 100) / 100;
    }
  } else {
    const perMonth = Math.round((targetChannelTotal / 12) * 100) / 100;
    for (let m = 0; m < 12; m++) {
      row.planned[m] = perMonth;
    }
  }

  syncAnnualBudgetWithChannels(budgetYear);
  renderBudgetView();
  syncBudgetDependents();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function renderBudgetActual(channels, yearObj) {
  const emptyEl = document.getElementById('budget-actual-empty');
  const wrapEl = document.getElementById('budget-actual-wrapper');
  const tbody = document.getElementById('budget-actual-body');

  if (channels.length === 0) {
    emptyEl.classList.remove('hidden');
    wrapEl.classList.add('hidden');
    return;
  }
  emptyEl.classList.add('hidden');
  wrapEl.classList.remove('hidden');

  const sortedActualChannels = [...channels].sort((a, b) =>
    yearObj[b].actual.reduce((x, y) => x + y, 0) - yearObj[a].actual.reduce((x, y) => x + y, 0)
  );

  tbody.innerHTML = sortedActualChannels.map(ch => {
    const row = yearObj[ch];
    const rowActual = row.actual.reduce((a, b) => a + b, 0);
    const escCh = ch.replace(/'/g, "\\'");

    const monthCells = row.actual.map((val, mIdx) => `
      <td class="py-2.5 px-1.5 text-right tabular-nums">
        <input
          type="number"
          min="0"
          step="any"
          value="${val}"
          onchange="updateBudgetActualCell('${escCh}', ${mIdx}, this.value)"
          class="w-16 text-right bg-transparent hover:bg-slate-50 focus:bg-white border border-transparent focus:border-slate-300 rounded px-1 py-0.5 text-xs text-slate-800 focus:outline-none tabular-nums"
        />
      </td>
    `).join('');

    return `
      <tr class="hover:bg-slate-50/70 transition-colors">
        <td class="py-3 px-4 font-semibold text-slate-900 whitespace-nowrap sticky left-0 bg-white">${ch}</td>
        ${monthCells}
        <td class="py-3 px-3 text-right font-semibold tabular-nums text-slate-900 whitespace-nowrap">${Math.round(rowActual).toLocaleString()} NOK</td>
      </tr>
    `;
  }).join('');
}

function renderBudgetVariance(channels, yearObj) {
  const emptyEl = document.getElementById('budget-variance-empty');
  const wrapEl = document.getElementById('budget-variance-wrapper');
  const tbody = document.getElementById('budget-variance-body');

  if (channels.length === 0) {
    emptyEl.classList.remove('hidden');
    wrapEl.classList.add('hidden');
    return;
  }
  emptyEl.classList.add('hidden');
  wrapEl.classList.remove('hidden');

  const sortedVarChannels = [...channels].sort((a, b) => {
    const aAct = yearObj[a].actual.reduce((x, y) => x + y, 0);
    const bAct = yearObj[b].actual.reduce((x, y) => x + y, 0);
    if (bAct !== aAct) return bAct - aAct;
    return yearObj[b].planned.reduce((x, y) => x + y, 0) - yearObj[a].planned.reduce((x, y) => x + y, 0);
  });

  tbody.innerHTML = sortedVarChannels.map(ch => {
    const row = yearObj[ch];
    const p = row.planned.reduce((a, b) => a + b, 0);
    const a = row.actual.reduce((a, b) => a + b, 0);
    const diff = a - p;
    const sign = diff > 0 ? '+' : '';
    const util = p > 0 ? Math.round((a / p) * 100) : 0;

    return `
      <tr class="hover:bg-slate-50/70 transition-colors">
        <td class="py-3.5 px-4 font-semibold text-slate-900">${ch}</td>
        <td class="py-3.5 px-4 text-right tabular-nums text-slate-700">${Math.round(p).toLocaleString()} NOK</td>
        <td class="py-3.5 px-4 text-right tabular-nums text-slate-700">${Math.round(a).toLocaleString()} NOK</td>
        <td class="py-3.5 px-4 text-right tabular-nums">
          <span class="px-2 py-0.5 rounded text-[11px] ${diff > 0 ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'}">
            ${sign}${Math.round(diff).toLocaleString()} NOK
          </span>
        </td>
        <td class="py-3.5 px-4 text-right tabular-nums text-slate-600">${util}%</td>
      </tr>
    `;
  }).join('');
}

function drawBudgetChart(monthlyPlanned, monthlyActual) {
  const canvas = document.getElementById('budgetCompareChart');
  if (!canvas) return;
  const totalYearPlanned = monthlyPlanned.reduce((a, b) => a + b, 0);
  canvas._barMeta = { monthlyPlanned, monthlyActual, totalYearPlanned, hoverIdx: -1 };

  const renderBars = (hoverIdx = -1) => {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = rect.width || 680;
    const height = 200;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const maxVal = Math.max(100, ...monthlyPlanned, ...monthlyActual) * 1.15;
    const padL = 48, padR = 14, padT = 14, padB = 30;
    const plotW = width - padL - padR;
    const plotH = height - padT - padB;
    const uiFont = '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif';

    canvas._barMeta.padL = padL;
    canvas._barMeta.padR = padR;
    canvas._barMeta.width = width;
    canvas._barMeta.plotW = plotW;

    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.fillStyle = '#94a3b8';
    ctx.font = `10px ${uiFont}`;
    [0, 0.5, 1].forEach(frac => {
      const val = Math.round(maxVal * frac);
      const y = padT + plotH - frac * plotH;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(width - padR, y);
      ctx.stroke();
      ctx.fillText(val >= 1000 ? Math.round(val / 1000) + 'k' : String(val), 4, y + 3);
    });
    ctx.setLineDash([]);

    const groupW = plotW / 12;
    const barW = Math.min(12, Math.max(5, (groupW - 12) / 2));
    const pillR = barW / 2;

    monthNames.forEach((mLbl, idx) => {
      const colX = padL + idx * groupW;
      const centerX = colX + groupW / 2;
      const isHovered = idx === hoverIdx;

      if (isHovered) {
        ctx.fillStyle = 'rgba(241, 245, 249, 0.9)';
        ctx.beginPath();
        ctx.roundRect(colX + 2, padT, groupW - 4, plotH + 4, 6);
        ctx.fill();
      }

      const pH = (monthlyPlanned[idx] / maxVal) * plotH;
      const aH = (monthlyActual[idx] / maxVal) * plotH;

      ctx.globalAlpha = hoverIdx !== -1 && !isHovered ? 0.55 : 1;
      if (pH > 0) {
        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.roundRect(centerX - barW - 1.5, padT + plotH - pH, barW, pH, [pillR, pillR, pillR, pillR]);
        ctx.fill();
      }

      if (aH > 0) {
        ctx.fillStyle = '#7c3aed';
        ctx.beginPath();
        ctx.roundRect(centerX + 1.5, padT + plotH - aH, barW, aH, [pillR, pillR, pillR, pillR]);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      ctx.fillStyle = isHovered ? '#0f172a' : '#64748b';
      ctx.font = `${isHovered ? '600 ' : ''}10px ${uiFont}`;
      ctx.textAlign = 'center';
      ctx.fillText(mLbl, centerX, height - 10);
      ctx.textAlign = 'left';
    });
  };

  canvas._barMeta.render = renderBars;
  renderBars(-1);

  if (!canvas._barsBound) {
    canvas._barsBound = true;
    canvas.style.cursor = 'pointer';
    canvas.addEventListener('mousemove', e => {
      const meta = canvas._barMeta;
      if (!meta || !meta.plotW) return;
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      if (mx < meta.padL || mx > meta.width - meta.padR) {
        if (meta.hoverIdx !== -1) {
          meta.hoverIdx = -1;
          meta.render(-1);
        }
        hideChartTooltip();
        return;
      }
      const idx = Math.min(11, Math.max(0, Math.floor((mx - meta.padL) / (meta.plotW / 12))));
      if (meta.hoverIdx !== idx) {
        meta.hoverIdx = idx;
        meta.render(idx);
      }
      const p = meta.monthlyPlanned[idx] || 0;
      const a = meta.monthlyActual[idx] || 0;
      const pShare = meta.totalYearPlanned > 0 ? (p / meta.totalYearPlanned) * 100 : 0;
      const aPct = p > 0 ? (a / p) * 100 : 0;
      showChartTooltip(
        e.clientX,
        e.clientY,
        `<div class="space-y-1">
          <div class="font-semibold text-white">${monthNames[idx]} ${budgetYear}</div>
          <div class="flex items-center justify-between gap-3"><span class="flex items-center gap-1.5 text-slate-300"><span class="w-2 h-2 rounded-full bg-[#10b981]"></span>Planned</span><span>${Math.round(p).toLocaleString()} NOK (${pShare.toFixed(1)}%)</span></div>
          <div class="flex items-center justify-between gap-3"><span class="flex items-center gap-1.5 text-slate-300"><span class="w-2 h-2 rounded-full bg-[#7c3aed]"></span>Actual</span><span>${Math.round(a).toLocaleString()} NOK (${aPct.toFixed(1)}%)</span></div>
        </div>`
      );
    });
    canvas.addEventListener('mouseleave', () => {
      const meta = canvas._barMeta;
      if (meta && meta.hoverIdx !== -1) {
        meta.hoverIdx = -1;
        meta.render(-1);
      }
      hideChartTooltip();
    });
  }
}

let contactGroups = [];
let selectedGroupId = null;
let availableCountries = ['Norway', 'Sweden', 'Denmark', 'Finland', 'UK', 'Germany', 'USA', 'Netherlands'];
let selectedCountriesTemp = [];
let countryWebsitesTemp = {};

function normalizeWebsiteUrl(url) {
  const trimmed = (url || '').trim();
  if (!trimmed) return '';
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function getDomainFromUrl(url) {
  const norm = normalizeWebsiteUrl(url);
  if (!norm) return '';
  try {
    return new URL(norm).hostname.replace(/^www\./i, '');
  } catch {
    return '';
  }
}

function getLogoUrl(website) {
  const domain = getDomainFromUrl(website);
  if (!domain) return '';
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
}

function renderLogoBadgeHtml(website, label, sizeClass = 'w-8 h-8') {
  const logoUrl = getLogoUrl(website);
  const initial = ((label || '?').trim().charAt(0) || '?').toUpperCase();
  if (!logoUrl) {
    return `<div class="${sizeClass} rounded-lg border border-slate-200 bg-[#fbfcfd] flex items-center justify-center text-xs font-semibold text-slate-500 shrink-0">${initial}</div>`;
  }
  return `
    <div class="${sizeClass} rounded-lg border border-slate-200 bg-white flex items-center justify-center overflow-hidden shrink-0">
      <img src="${logoUrl}" alt="${label || 'Logo'}" class="w-4/5 h-4/5 object-contain" onerror="this.parentElement.innerHTML='<span class=\\'text-xs font-semibold text-slate-500\\'>${initial}</span>'" />
    </div>
  `;
}

function updatePartnerLogoPreview() {
  const previewEl = document.getElementById('p-logo-preview');
  if (!previewEl) return;
  const website = document.getElementById('p-website-input').value;
  const name = document.getElementById('p-name-input').value || '?';
  const logoUrl = getLogoUrl(website);
  if (!logoUrl) {
    previewEl.innerHTML = '—';
    return;
  }
  const initial = name.trim().charAt(0).toUpperCase() || '?';
  previewEl.innerHTML = `<img src="${logoUrl}" alt="Logo" class="w-5 h-5 object-contain" onerror="this.parentElement.textContent='${initial}'" />`;
}

function toggleContactGroupForm(show) {
  const form = document.getElementById('contact-group-form');
  if (!show) {
    form.classList.add('hidden');
    return;
  }
  form.classList.remove('hidden');
  document.getElementById('cg-name-input').value = '';
  document.getElementById('cg-name-input').focus();
}

function saveContactGroup() {
  const name = (document.getElementById('cg-name-input').value || '').trim();
  if (!name) {
    document.getElementById('cg-name-input').focus();
    return;
  }
  const newGroup = { id: Date.now(), name, partners: [] };
  contactGroups.push(newGroup);
  toggleContactGroupForm(false);
  selectContactGroup(newGroup.id);
}

function deleteContactGroup(groupId, e) {
  if (e) e.stopPropagation();
  const grp = contactGroups.find(g => g.id === groupId);
  confirmDeleteAction(`Delete contact group "${grp?.name || 'this group'}" and all its partners?`, () => {
    contactGroups = contactGroups.filter(g => g.id !== groupId);
    if (selectedGroupId === groupId) selectedGroupId = null;
    renderContactsView();
  });
}

function selectContactGroup(groupId) {
  selectedGroupId = groupId;
  togglePartnerForm(false);
  toggleContactPersonForm(false);
  closeContactModal();
  renderContactsView();
}

function renderCountryPills() {
  const container = document.getElementById('p-countries-pills');
  if (!container) return;
  container.innerHTML = availableCountries.map(c => {
    const isSel = selectedCountriesTemp.includes(c);
    const escC = c.replace(/'/g, "\\'");
    return `
      <button
        type="button"
        onclick="toggleCountrySelection('${escC}')"
        class="px-2.5 py-1 rounded-full text-[11px] font-medium border transition-colors ${isSel ? 'bg-[#0f172a] text-white border-[#0f172a]' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}"
      >
        ${c}
      </button>
    `;
  }).join('');
  renderCountryWebsiteInputs();
}

function renderCountryWebsiteInputs() {
  const wrap = document.getElementById('p-country-websites-wrap');
  const list = document.getElementById('p-country-websites-list');
  if (!wrap || !list) return;

  if (selectedCountriesTemp.length === 0) {
    wrap.classList.add('hidden');
    list.innerHTML = '';
    return;
  }
  wrap.classList.remove('hidden');

  list.innerHTML = selectedCountriesTemp.map(c => {
    const val = countryWebsitesTemp[c] || '';
    const escC = c.replace(/'/g, "\\'");
    const logoUrl = getLogoUrl(val);
    const initial = c.charAt(0).toUpperCase();
    return `
      <div class="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5">
        <div class="w-6 h-6 rounded border border-slate-200/80 bg-[#fbfcfd] flex items-center justify-center shrink-0 overflow-hidden text-[10px] font-semibold text-slate-400">
          ${logoUrl ? `<img src="${logoUrl}" alt="${c}" class="w-4 h-4 object-contain" onerror="this.parentElement.textContent='${initial}'" />` : initial}
        </div>
        <span class="text-[11px] font-medium text-slate-700 w-16 truncate shrink-0" title="${c}">${c}</span>
        <input
          type="url"
          value="${val.replace(/"/g, '&quot;')}"
          placeholder="https://..."
          oninput="updateCountryWebsite('${escC}', this.value)"
          class="flex-1 min-w-0 h-7 px-2 text-[11px] bg-[#fbfcfd] border border-slate-200/80 rounded text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400"
        />
      </div>
    `;
  }).join('');
}

function updateCountryWebsite(country, value) {
  countryWebsitesTemp[country] = value;
  const list = document.getElementById('p-country-websites-list');
  if (!list) return;
  const idx = selectedCountriesTemp.indexOf(country);
  if (idx === -1 || !list.children[idx]) return;
  const logoBox = list.children[idx].firstElementChild;
  const logoUrl = getLogoUrl(value);
  const initial = country.charAt(0).toUpperCase();
  logoBox.innerHTML = logoUrl
    ? `<img src="${logoUrl}" alt="${country}" class="w-4 h-4 object-contain" onerror="this.parentElement.textContent='${initial}'" />`
    : initial;
}

function toggleCountrySelection(country) {
  if (selectedCountriesTemp.includes(country)) {
    selectedCountriesTemp = selectedCountriesTemp.filter(c => c !== country);
  } else {
    selectedCountriesTemp.push(country);
  }
  renderCountryPills();
}

function addCustomCountry() {
  const input = document.getElementById('p-country-custom');
  const val = (input.value || '').trim();
  if (!val) return;
  if (!availableCountries.includes(val)) availableCountries.push(val);
  if (!selectedCountriesTemp.includes(val)) selectedCountriesTemp.push(val);
  input.value = '';
  renderCountryPills();
}

function togglePartnerForm(show, editId = null) {
  const panel = document.getElementById('partner-form-panel');
  if (!show) {
    panel.classList.add('hidden');
    return;
  }
  panel.classList.remove('hidden');
  toggleContactPersonForm(false);

  const grp = contactGroups.find(g => g.id === selectedGroupId);
  if (editId && grp) {
    const p = grp.partners.find(x => x.id === editId);
    if (!p) return;
    document.getElementById('partner-form-title').textContent = 'Edit Partner / Entry';
    document.getElementById('p-edit-id').value = String(p.id);
    document.getElementById('p-name-input').value = p.name;
    document.getElementById('p-website-input').value = p.website || '';
    selectedCountriesTemp = [...p.countries];
    countryWebsitesTemp = { ...(p.countryWebsites || {}) };
    p.countries.forEach(c => { if (!availableCountries.includes(c)) availableCountries.push(c); });
  } else {
    document.getElementById('partner-form-title').textContent = 'Add Partner / Entry';
    document.getElementById('p-edit-id').value = '';
    document.getElementById('p-name-input').value = '';
    document.getElementById('p-website-input').value = '';
    selectedCountriesTemp = [];
    countryWebsitesTemp = {};
  }
  updatePartnerLogoPreview();
  renderCountryPills();
  document.getElementById('p-name-input').focus();
}

function savePartner() {
  const grp = contactGroups.find(g => g.id === selectedGroupId);
  if (!grp) return;
  const editId = document.getElementById('p-edit-id').value;
  const name = (document.getElementById('p-name-input').value || '').trim();
  const website = normalizeWebsiteUrl(document.getElementById('p-website-input').value);
  if (!name) {
    document.getElementById('p-name-input').focus();
    return;
  }

  const cleanedCountryWebsites = {};
  selectedCountriesTemp.forEach(c => {
    const cw = normalizeWebsiteUrl(countryWebsitesTemp[c]);
    if (cw) cleanedCountryWebsites[c] = cw;
  });

  if (editId) {
    const p = grp.partners.find(x => x.id === Number(editId));
    if (p) {
      p.name = name;
      p.website = website;
      p.countries = [...selectedCountriesTemp];
      p.countryWebsites = cleanedCountryWebsites;
    }
  } else {
    grp.partners.push({
      id: Date.now(),
      name,
      website,
      countries: [...selectedCountriesTemp],
      countryWebsites: cleanedCountryWebsites,
      contacts: []
    });
  }

  togglePartnerForm(false);
  renderContactsView();
}

function deletePartner(partnerId) {
  const grp = contactGroups.find(g => g.id === selectedGroupId);
  const partner = grp?.partners.find(p => p.id === partnerId);
  if (!grp) return;
  confirmDeleteAction(`Delete partner "${partner?.name || 'this partner'}" and its contacts?`, () => {
    grp.partners = grp.partners.filter(p => p.id !== partnerId);
    renderContactsView();
  });
}

function getLinkedInHandle(url) {
  const m = String(url || '').trim().match(/linkedin\.com\/in\/([^\/?#]+)/i);
  return m ? decodeURIComponent(m[1]) : '';
}

function getLinkedInAvatarUrl(url) {
  const handle = getLinkedInHandle(url);
  return handle ? `https://unavatar.io/linkedin/${encodeURIComponent(handle)}?fallback=false` : '';
}

function renderContactAvatarInner(name, linkedinUrl) {
  const initials = String(name || '').trim().split(/\s+/).map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase() || '?';
  const avatarUrl = getLinkedInAvatarUrl(linkedinUrl);
  if (!avatarUrl) return initials;
  return `<img src="${avatarUrl}" alt="${initials}" class="w-full h-full object-cover" onerror="const s=this.nextElementSibling;this.remove();if(s)s.classList.remove('hidden');" /><span class="hidden">${initials}</span>`;
}

function updateContactAvatarPreview() {
  const preview = document.getElementById('cp-avatar-preview');
  if (!preview) return;
  const name = document.getElementById('cp-name')?.value || '';
  const linkedin = document.getElementById('cp-linkedin')?.value || '';
  preview.innerHTML = renderContactAvatarInner(name, linkedin);
}

function toggleContactPersonForm(show, partnerId = null, editContactId = null) {
  const panel = document.getElementById('contact-person-form');
  if (!show) {
    panel.classList.add('hidden');
    return;
  }
  panel.classList.remove('hidden');
  togglePartnerForm(false);

  document.getElementById('cp-partner-id').value = String(partnerId);
  const grp = contactGroups.find(g => g.id === selectedGroupId);
  const partner = grp?.partners.find(p => p.id === partnerId);

  if (editContactId && partner) {
    const c = partner.contacts.find(x => x.id === editContactId);
    if (!c) return;
    document.getElementById('cp-form-title').textContent = `Edit Contact — ${partner.name}`;
    document.getElementById('cp-edit-id').value = String(c.id);
    document.getElementById('cp-name').value = c.name;
    document.getElementById('cp-function').value = c.function;
    document.getElementById('cp-phone').value = c.phone;
    document.getElementById('cp-email').value = c.email;
    document.getElementById('cp-location').value = c.location;
    document.getElementById('cp-linkedin').value = c.linkedin || '';
  } else {
    document.getElementById('cp-form-title').textContent = partner ? `Add Contact — ${partner.name}` : 'Add Contact Person';
    document.getElementById('cp-edit-id').value = '';
    document.getElementById('cp-name').value = '';
    document.getElementById('cp-function').value = '';
    document.getElementById('cp-phone').value = '';
    document.getElementById('cp-email').value = '';
    document.getElementById('cp-location').value = '';
    document.getElementById('cp-linkedin').value = '';
  }
  updateContactAvatarPreview();
  document.getElementById('cp-name').focus();
}

function saveContactPerson() {
  const grp = contactGroups.find(g => g.id === selectedGroupId);
  const partnerId = Number(document.getElementById('cp-partner-id').value);
  const partner = grp?.partners.find(p => p.id === partnerId);
  if (!partner) return;

  const editId = document.getElementById('cp-edit-id').value;
  const name = (document.getElementById('cp-name').value || '').trim();
  const fn = (document.getElementById('cp-function').value || '').trim();
  const phone = (document.getElementById('cp-phone').value || '').trim();
  const email = (document.getElementById('cp-email').value || '').trim();
  const location = (document.getElementById('cp-location').value || '').trim();
  const linkedin = normalizeWebsiteUrl(document.getElementById('cp-linkedin').value);

  if (!name) {
    document.getElementById('cp-name').focus();
    return;
  }

  const data = { id: editId ? Number(editId) : Date.now(), name, function: fn, phone, email, location, linkedin };
  if (editId) {
    const idx = partner.contacts.findIndex(c => c.id === Number(editId));
    if (idx !== -1) partner.contacts[idx] = data;
  } else {
    partner.contacts.push(data);
  }

  toggleContactPersonForm(false);
  renderContactsView();
}

function deleteContactPerson(partnerId, contactId) {
  const grp = contactGroups.find(g => g.id === selectedGroupId);
  const partner = grp?.partners.find(p => p.id === partnerId);
  const c = partner?.contacts.find(x => x.id === contactId);
  if (!partner) return;
  confirmDeleteAction(`Delete contact "${c?.name || 'this contact'}"?`, () => {
    partner.contacts = partner.contacts.filter(x => x.id !== contactId);
    renderContactsView();
  });
}

function openContactModal(partnerId, contactId) {
  const grp = contactGroups.find(g => g.id === selectedGroupId);
  const partner = grp?.partners.find(p => p.id === partnerId);
  const c = partner?.contacts.find(x => x.id === contactId);
  if (!partner || !c) return;

  const modal = document.getElementById('contact-detail-modal');
  document.getElementById('modal-c-avatar').innerHTML = renderContactAvatarInner(c.name, c.linkedin);
  document.getElementById('modal-c-name').textContent = c.name;
  document.getElementById('modal-c-sub').textContent = `${partner.name}${grp ? ' · ' + grp.name : ''}`;
  document.getElementById('modal-c-function').textContent = c.function || '—';

  const phoneEl = document.getElementById('modal-c-phone');
  phoneEl.textContent = c.phone || '—';
  phoneEl.href = c.phone ? `tel:${c.phone}` : '#';

  const emailEl = document.getElementById('modal-c-email');
  emailEl.textContent = c.email || '—';
  emailEl.href = c.email ? `mailto:${c.email}` : '#';

  document.getElementById('modal-c-location').textContent = c.location || '—';

  const liEl = document.getElementById('modal-c-linkedin');
  if (c.linkedin) {
    liEl.textContent = getDomainFromUrl(c.linkedin) ? 'Open LinkedIn ↗' : c.linkedin;
    liEl.href = c.linkedin;
    liEl.classList.remove('pointer-events-none', 'text-slate-400');
  } else {
    liEl.textContent = '—';
    liEl.href = '#';
    liEl.classList.add('pointer-events-none', 'text-slate-400');
  }

  document.getElementById('modal-c-edit-btn').onclick = () => {
    closeContactModal();
    toggleContactPersonForm(true, partner.id, c.id);
  };
  document.getElementById('modal-c-delete-btn').onclick = () => {
    closeContactModal();
    deleteContactPerson(partner.id, c.id);
  };

  modal.classList.remove('hidden');
}

function closeContactModal() {
  document.getElementById('contact-detail-modal')?.classList.add('hidden');
}

function syncLeadsToCustomersGroup() {
  if (!Array.isArray(leadEntries) || leadEntries.length === 0) return;
  let customersGroup = contactGroups.find(g => String(g.name || '').trim().toLowerCase() === 'customers');
  if (!customersGroup) {
    customersGroup = { id: Date.now() + 50, name: 'Customers', partners: [] };
    contactGroups.push(customersGroup);
  }
  if (!Array.isArray(customersGroup.partners)) customersGroup.partners = [];

  leadEntries.forEach((lead, idx) => {
    const company = String(lead.company || '').trim();
    if (!company) return;
    let existing = customersGroup.partners.find(
      p => (p.leadId && p.leadId === lead.id) || String(p.name || '').trim().toLowerCase() === company.toLowerCase()
    );
    if (existing) {
      existing.leadId = lead.id;
      if (lead.website && !existing.website) existing.website = lead.website;
      if (lead.logo && !existing.logo) existing.logo = lead.logo;
    } else {
      customersGroup.partners.push({
        id: Date.now() + idx + 100,
        leadId: lead.id,
        name: company,
        website: lead.website || '',
        logo: lead.logo || '',
        countries: [],
        countryWebsites: {},
        contacts: []
      });
    }
  });
}

function renderContactsView() {
  syncLeadsToCustomersGroup();
  const grp = contactGroups.find(g => g.id === selectedGroupId);
  const isDetail = Boolean(grp);

  document.getElementById('contacts-crumb-sep').classList.toggle('hidden', !isDetail);
  const crumbGroup = document.getElementById('contacts-crumb-group');
  crumbGroup.classList.toggle('hidden', !isDetail);
  crumbGroup.textContent = grp ? grp.name : '';

  document.getElementById('contacts-back-btn').classList.toggle('hidden', !isDetail);
  document.getElementById('contacts-add-partner-btn').classList.toggle('hidden', !isDetail);
  document.getElementById('contacts-groups-view').classList.toggle('hidden', isDetail);
  document.getElementById('contacts-group-detail').classList.toggle('hidden', !isDetail);

  const topChart = document.getElementById('contacts-top-chart');
  const chartColors = ['bg-[#7c3aed]', 'bg-[#10b981]', 'bg-[#0ea5e9]', 'bg-[#f59e0b]', 'bg-[#f43f5e]'];

  if (!isDetail) {
    document.getElementById('contacts-page-title').textContent = 'Contacts';
    document.getElementById('contacts-page-desc').textContent = 'Create contact groups (e.g., Partners), add organizations with working countries, and manage contact persons.';

    const emptyEl = document.getElementById('contacts-groups-empty');
    const gridEl = document.getElementById('contacts-groups-grid');
    if (contactGroups.length === 0) {
      emptyEl.classList.remove('hidden');
      gridEl.classList.add('hidden');
      topChart?.classList.add('hidden');
      return;
    }
    emptyEl.classList.add('hidden');
    gridEl.classList.remove('hidden');

    if (topChart) {
      const totalPartners = contactGroups.reduce((a, g) => a + g.partners.length, 0);
      const totalContacts = contactGroups.reduce((a, g) => a + g.partners.reduce((b, p) => b + p.contacts.length, 0), 0);
      if (totalPartners === 0) {
        topChart.classList.add('hidden');
      } else {
        topChart.classList.remove('hidden');
        document.getElementById('contacts-chart-title').textContent = 'Network Overview';
        document.getElementById('contacts-chart-sub').textContent = 'Organizations & contacts across groups';
        document.getElementById('contacts-chart-meta').textContent = `${totalPartners} entries · ${totalContacts} contacts`;
        document.getElementById('contacts-chart-segments').innerHTML = contactGroups.map((g, idx) => {
          if (g.partners.length === 0) return '';
          const pct = (g.partners.length / totalPartners) * 100;
          return `<div class="${chartColors[idx % chartColors.length]} h-full" style="width: ${pct}%"></div>`;
        }).join('');
        document.getElementById('contacts-chart-legend').innerHTML = contactGroups.map((g, idx) => `
          <span class="inline-flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full ${chartColors[idx % chartColors.length]}"></span>
            <span class="text-slate-700">${g.name}</span>
            <span class="tabular-nums text-slate-400">${g.partners.length}</span>
          </span>
        `).join('');
      }
    }

    const sortedContactGroups = [...contactGroups].sort((a, b) => {
      const aTotal = a.partners.reduce((acc, p) => acc + p.contacts.length, 0);
      const bTotal = b.partners.reduce((acc, p) => acc + p.contacts.length, 0);
      return (b.partners.length - a.partners.length) || (bTotal - aTotal);
    });
    gridEl.innerHTML = sortedContactGroups.map(g => {
      const totalPeople = g.partners.reduce((acc, p) => acc + p.contacts.length, 0);
      return `
        <div onclick="selectContactGroup(${g.id})" class="group rounded-2xl border border-slate-200/80 bg-white p-5 card-shadow cursor-pointer flex flex-col justify-between space-y-4 transition-all">
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-[#f5f7fa] border border-slate-200/70 flex items-center justify-center text-slate-700 shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-[15px] font-bold text-slate-900">${g.name}</h3>
                <p class="text-xs text-slate-500 mt-0.5 tabular-nums">${g.partners.length} entries · ${totalPeople} contacts</p>
              </div>
            </div>
            ${renderActionMenuHtml('', `deleteContactGroup(${g.id})`)}
          </div>
          <div class="flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs">
            <span class="text-slate-400">Directory</span>
            <span class="font-medium text-slate-900">Open →</span>
          </div>
        </div>
      `;
    }).join('');
    return;
  }

  document.getElementById('contacts-page-title').textContent = grp.name;
  document.getElementById('contacts-page-desc').textContent = `Manage partners, working countries, websites, logos, and contact persons inside ${grp.name}.`;

  const emptyP = document.getElementById('partners-empty-state');
  const listP = document.getElementById('partners-list');
  if (grp.partners.length === 0) {
    emptyP.classList.remove('hidden');
    listP.innerHTML = '';
    topChart?.classList.add('hidden');
    return;
  }
  emptyP.classList.add('hidden');

  if (topChart) {
    const countryCounts = {};
    grp.partners.forEach(p => p.countries.forEach(c => { countryCounts[c] = (countryCounts[c] || 0) + 1; }));
    const entries = Object.entries(countryCounts).sort((a, b) => b[1] - a[1]);
    const totalCountryLinks = entries.reduce((a, b) => a + b[1], 0);
    const totalContacts = grp.partners.reduce((a, p) => a + p.contacts.length, 0);
    if (entries.length === 0) {
      topChart.classList.add('hidden');
    } else {
      topChart.classList.remove('hidden');
      document.getElementById('contacts-chart-title').textContent = 'Country Coverage';
      document.getElementById('contacts-chart-sub').textContent = `Working countries across ${grp.name}`;
      document.getElementById('contacts-chart-meta').textContent = `${entries.length} countries · ${totalContacts} contacts`;
      document.getElementById('contacts-chart-segments').innerHTML = entries.map(([, cnt], idx) => {
        const pct = (cnt / totalCountryLinks) * 100;
        return `<div class="${chartColors[idx % chartColors.length]} h-full" style="width: ${pct}%"></div>`;
      }).join('');
      document.getElementById('contacts-chart-legend').innerHTML = entries.slice(0, 8).map(([cName, cnt], idx) => `
        <span class="inline-flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full ${chartColors[idx % chartColors.length]}"></span>
          <span class="text-slate-700">${cName}</span>
          <span class="tabular-nums text-slate-400">${cnt}</span>
        </span>
      `).join('');
    }
  }

  const sortedPartners = [...grp.partners].sort((a, b) => (b.contacts.length - a.contacts.length) || (b.countries.length - a.countries.length));
  listP.innerHTML = sortedPartners.map(p => {
    const firstCountrySite = p.countries.map(c => p.countryWebsites?.[c]).find(Boolean) || '';
    const partnerSite = p.website || firstCountrySite;
    const partnerLogoHtml = renderLogoBadgeHtml(partnerSite, p.name, 'w-10 h-10');
    const partnerDomain = getDomainFromUrl(p.website);

    const countriesHtml = p.countries.length
      ? p.countries.map(c => {
          const cw = p.countryWebsites?.[c] || '';
          const cDomain = getDomainFromUrl(cw);
          const cLogo = getLogoUrl(cw || p.website);
          return `
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] bg-slate-100/80 text-slate-700 border border-slate-200/70">
              ${cLogo ? `<img src="${cLogo}" alt="${c}" class="w-3.5 h-3.5 rounded-xs object-contain" onerror="this.style.display='none'" />` : ''}
              <span>${c}</span>
              ${cw ? `<a href="${cw}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="text-[10px] text-slate-400 hover:text-slate-900 underline underline-offset-2">${cDomain || 'site'}</a>` : ''}
            </span>
          `;
        }).join(' ')
      : `<span class="text-[11px] text-slate-400">No countries selected</span>`;

    const contactsTable = p.contacts.length === 0
      ? `<div class="px-5 py-4 text-xs text-slate-400">No contact persons added yet.</div>`
      : `
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="border-b border-slate-200/70 bg-[#fbfcfd] text-slate-500">
                <th class="py-2.5 px-5 font-medium">Contact</th>
                <th class="py-2.5 px-3 font-medium">Phone</th>
                <th class="py-2.5 px-3 font-medium">Email</th>
                <th class="py-2.5 px-3 font-medium">Location</th>
                <th class="py-2.5 px-3 font-medium">LinkedIn</th>
                <th class="py-2.5 px-5 font-medium text-right"></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200/60">
              ${p.contacts.map(c => {
                return `
                  <tr onclick="openContactModal(${p.id}, ${c.id})" class="group hover:bg-slate-50/80 cursor-pointer transition-colors">
                    <td class="py-2.5 px-5">
                      <div class="flex items-center gap-2.5">
                        <span class="w-7 h-7 rounded-full bg-slate-100 text-slate-700 text-[10px] font-semibold flex items-center justify-center shrink-0 overflow-hidden">${renderContactAvatarInner(c.name, c.linkedin)}</span>
                        <div>
                          <div class="font-medium text-slate-900">${c.name}</div>
                          ${c.function ? `<div class="text-[11px] text-slate-400">${c.function}</div>` : ''}
                        </div>
                      </div>
                    </td>
                    <td class="py-2.5 px-3 tabular-nums text-slate-600">${c.phone || '—'}</td>
                    <td class="py-2.5 px-3 text-slate-600">${c.email || '—'}</td>
                    <td class="py-2.5 px-3 text-slate-600">${c.location || '—'}</td>
                    <td class="py-2.5 px-3 text-slate-600">
                      ${c.linkedin ? `<a href="${c.linkedin}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="text-slate-900 underline underline-offset-2 hover:text-slate-600">Profile ↗</a>` : '—'}
                    </td>
                    <td class="py-2.5 px-5 text-right">
                      ${renderActionMenuHtml(`toggleContactPersonForm(true, ${p.id}, ${c.id})`, `deleteContactPerson(${p.id}, ${c.id})`)}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `;

    return `
      <div class="rounded-2xl border border-slate-200/80 bg-white overflow-hidden card-shadow">
        <div class="px-5 py-4 border-b border-slate-200/70 flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-start gap-3">
            ${partnerLogoHtml}
            <div class="space-y-1.5">
              <div class="flex flex-wrap items-center gap-2">
                <span class="text-[15px] font-bold text-slate-900">${p.name}</span>
                ${p.website ? `<a href="${p.website}" target="_blank" rel="noopener noreferrer" class="text-[11px] text-slate-500 hover:text-slate-900 underline underline-offset-2">${partnerDomain || p.website} ↗</a>` : ''}
              </div>
              <div class="flex flex-wrap items-center gap-1.5">${countriesHtml}</div>
            </div>
          </div>
          <div class="flex items-center gap-1.5">
            <button onclick="toggleContactPersonForm(true, ${p.id})" class="h-8 px-3 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white text-xs font-medium">+ Add Contact</button>
            ${renderActionMenuHtml(`togglePartnerForm(true, ${p.id})`, `deletePartner(${p.id})`, 'h-8 w-8')}
          </div>
        </div>
        ${contactsTable}
      </div>
    `;
  }).join('');
}

let leadStages = [];
let leadEntries = [];
let draggedLeadId = null;

function toggleLeadStageForm(show) {
  const form = document.getElementById('lead-stage-form');
  if (!show) {
    form.classList.add('hidden');
    return;
  }
  form.classList.remove('hidden');
  toggleLeadForm(false);
  document.getElementById('ls-name-input').value = '';
  document.getElementById('ls-name-input').focus();
}

function saveLeadStage() {
  const name = (document.getElementById('ls-name-input').value || '').trim();
  if (!name) {
    document.getElementById('ls-name-input').focus();
    return;
  }
  leadStages.push({ id: Date.now(), name });
  toggleLeadStageForm(false);
  renderLeadsView();
}

function deleteLeadStage(stageId) {
  const stg = leadStages.find(s => s.id === stageId);
  confirmDeleteAction(`Delete stage "${stg?.name || 'this stage'}" and all leads in it?`, () => {
    leadStages = leadStages.filter(s => s.id !== stageId);
    leadEntries = leadEntries.filter(l => l.stageId !== stageId);
    renderLeadsView();
  });
}

function populateLeadChannelSelect(selectedVal) {
  const sel = document.getElementById('l-channel');
  if (!sel) return;
  const names = getChannelNames();
  sel.innerHTML = [
    ...names.map(ch => `<option value="${ch}">${ch}</option>`),
    `<option value="__add_new__">+ Add new channel...</option>`
  ].join('');
  if (selectedVal && names.includes(selectedVal)) {
    sel.value = selectedVal;
  } else if (names.length > 0) {
    sel.value = names[0];
  }
  document.getElementById('l-channel-custom-wrap').classList.add('hidden');
}

function handleLeadChannelChange() {
  const sel = document.getElementById('l-channel');
  const wrap = document.getElementById('l-channel-custom-wrap');
  if (sel.value === '__add_new__') {
    wrap.classList.remove('hidden');
    document.getElementById('l-channel-custom').value = '';
    document.getElementById('l-channel-custom').focus();
  } else {
    wrap.classList.add('hidden');
  }
}

function confirmAddLeadChannel() {
  const input = document.getElementById('l-channel-custom');
  const val = (input.value || '').trim();
  if (!val) return;
  ensureChannelExists(val);
  populateLeadChannelSelect(val);
}

let integrationsList = [];
const INTEGRATION_TYPE_COLORS = {
  'ERP': '#6366f1',
  'TA': '#10b981',
  'Other Integration': '#0ea5e9'
};

function ensureIntegrationExists(name, type = 'Other Integration') {
  const trimmed = String(name || '').trim();
  if (!trimmed) return null;
  const existing = integrationsList.find(i => i.name.toLowerCase() === trimmed.toLowerCase());
  if (existing) return existing;
  const next = {
    id: Date.now() + Math.floor(Math.random() * 1000),
    name: trimmed,
    type: INTEGRATION_TYPE_COLORS[type] ? type : 'Other Integration'
  };
  integrationsList.push(next);
  return next;
}

function populateLeadIntegrationSelect(field, selectedValue = '') {
  const sel = document.getElementById(field === 'erp' ? 'l-erp' : 'l-integration');
  const wrap = document.getElementById(field === 'erp' ? 'l-erp-custom-wrap' : 'l-integration-custom-wrap');
  if (wrap) wrap.classList.add('hidden');
  if (!sel) return;

  if (selectedValue) {
    ensureIntegrationExists(selectedValue, field === 'erp' ? 'ERP' : 'Other Integration');
  }

  sel.innerHTML = `
    <option value="">None</option>
    ${integrationsList.map(i => `<option value="${i.name}" ${i.name === selectedValue ? 'selected' : ''}>${i.name} (${i.type})</option>`).join('')}
    <option value="__add_new__">+ Add new integration...</option>
  `;
  sel.value = selectedValue || '';
}

function handleLeadIntegrationSelectChange(field) {
  const sel = document.getElementById(field === 'erp' ? 'l-erp' : 'l-integration');
  const wrap = document.getElementById(field === 'erp' ? 'l-erp-custom-wrap' : 'l-integration-custom-wrap');
  const input = document.getElementById(field === 'erp' ? 'l-erp-custom' : 'l-integration-custom');
  if (!sel || !wrap) return;
  if (sel.value === '__add_new__') {
    wrap.classList.remove('hidden');
    if (input) {
      input.value = '';
      input.focus();
    }
  } else {
    wrap.classList.add('hidden');
  }
}

function confirmAddLeadIntegration(field) {
  const input = document.getElementById(field === 'erp' ? 'l-erp-custom' : 'l-integration-custom');
  const typeSel = document.getElementById(field === 'erp' ? 'l-erp-custom-type' : 'l-integration-custom-type');
  const val = (input?.value || '').trim();
  if (!val) {
    input?.focus();
    return;
  }
  const type = typeSel?.value || (field === 'erp' ? 'ERP' : 'Other Integration');
  ensureIntegrationExists(val, type);
  const otherField = field === 'erp' ? 'integration' : 'erp';
  const otherSel = document.getElementById(otherField === 'erp' ? 'l-erp' : 'l-integration');
  const otherVal = otherSel && otherSel.value !== '__add_new__' ? otherSel.value : '';
  populateLeadIntegrationSelect(field, val);
  populateLeadIntegrationSelect(otherField, otherVal);
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function toggleIntegrationForm(show, editId = null) {
  const panel = document.getElementById('integration-form-panel');
  if (!panel) return;
  if (!show) {
    panel.classList.add('hidden');
    return;
  }
  panel.classList.remove('hidden');
  if (editId) {
    const item = integrationsList.find(i => i.id === editId);
    if (!item) return;
    document.getElementById('integration-form-title').textContent = 'Edit Integration';
    document.getElementById('int-edit-id').value = String(item.id);
    document.getElementById('int-name').value = item.name;
    document.getElementById('int-type').value = item.type || 'ERP';
  } else {
    document.getElementById('integration-form-title').textContent = 'Add Integration';
    document.getElementById('int-edit-id').value = '';
    document.getElementById('int-name').value = '';
    document.getElementById('int-type').value = 'ERP';
  }
  document.getElementById('int-name')?.focus();
}

function saveIntegration() {
  const editId = document.getElementById('int-edit-id').value;
  const name = (document.getElementById('int-name').value || '').trim();
  const type = document.getElementById('int-type').value || 'Other Integration';
  if (!name) {
    document.getElementById('int-name')?.focus();
    return;
  }
  if (editId) {
    const item = integrationsList.find(i => i.id === Number(editId));
    if (item) {
      const oldName = item.name;
      item.name = name;
      item.type = type;
      if (oldName !== name) {
        leadEntries.forEach(l => {
          if (l.erp === oldName) l.erp = name;
          if (l.integration === oldName) l.integration = name;
        });
      }
    }
  } else {
    const existing = integrationsList.find(i => i.name.toLowerCase() === name.toLowerCase());
    if (existing) {
      existing.type = type;
    } else {
      integrationsList.push({ id: Date.now() + Math.floor(Math.random() * 1000), name, type });
    }
  }
  toggleIntegrationForm(false);
  renderIntegrationsView();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function deleteIntegration(intId) {
  const item = integrationsList.find(i => i.id === intId);
  confirmDeleteAction(`Delete integration "${item?.name || 'this integration'}"?`, () => {
    integrationsList = integrationsList.filter(i => i.id !== intId);
    renderIntegrationsView();
    if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
  });
}

function drawIntegrationsPieChart(segments, canvasId = 'integrationsPieChart') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const size = 160;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  ctx.scale(dpr, dpr);

  const cx = size / 2;
  const cy = size / 2;
  const r = 68;
  const total = segments.reduce((a, s) => a + s.value, 0);
  const slices = [];
  if (total > 0) {
    let angle = -Math.PI / 2;
    segments.forEach((seg, idx) => {
      const span = (seg.value / total) * Math.PI * 2;
      slices.push({ ...seg, idx, start: angle, end: angle + span });
      angle += span;
    });
  }

  const renderPie = (hoverIdx = -1) => {
    ctx.clearRect(0, 0, size, size);
    if (total <= 0) {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = '#f1f5f9';
      ctx.fill();
      return;
    }
    slices.forEach(s => {
      const isHovered = s.idx === hoverIdx;
      const radius = isHovered ? r + 4 : r;
      ctx.save();
      ctx.globalAlpha = hoverIdx !== -1 && !isHovered ? 0.55 : 1;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, s.start, s.end);
      ctx.closePath();
      ctx.fillStyle = s.color;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
      ctx.restore();
    });
  };

  canvas._pieMeta = { slices, total, hoverIdx: -1, render: renderPie };
  renderPie(-1);

  if (!canvas._hasPieHover) {
    canvas._hasPieHover = true;
    canvas.addEventListener('mousemove', e => {
      const meta = canvas._pieMeta;
      if (!meta || meta.total <= 0) return;
      const rect = canvas.getBoundingClientRect();
      const dx = e.clientX - rect.left - cx;
      const dy = e.clientY - rect.top - cy;
      if (Math.sqrt(dx * dx + dy * dy) > r + 4) {
        if (meta.hoverIdx !== -1) { meta.hoverIdx = -1; meta.render(-1); }
        hideChartTooltip();
        return;
      }
      let ang = Math.atan2(dy, dx);
      if (ang < -Math.PI / 2) ang += Math.PI * 2;
      const hit = meta.slices.find(s => ang >= s.start && ang <= s.end);
      if (!hit) return;
      if (meta.hoverIdx !== hit.idx) { meta.hoverIdx = hit.idx; meta.render(hit.idx); }
      const pct = ((hit.value / meta.total) * 100).toFixed(1);
      showChartTooltip(e.clientX, e.clientY, `<div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full" style="background:${hit.color}"></span><span class="font-semibold">${hit.label}</span><span class="text-slate-300">·</span><span>${hit.value}</span><span class="text-slate-300">(${pct}%)</span></div>`);
    });
    canvas.addEventListener('mouseleave', () => {
      const meta = canvas._pieMeta;
      if (meta && meta.hoverIdx !== -1) { meta.hoverIdx = -1; meta.render(-1); }
      hideChartTooltip();
    });
  }
}

function renderIntegrationsView() {
  (leadEntries || []).forEach(l => {
    if (l.erp) ensureIntegrationExists(l.erp, 'ERP');
    if (l.integration) ensureIntegrationExists(l.integration, 'Other Integration');
  });

  const total = integrationsList.length;
  const totalLbl = document.getElementById('integrations-total-label');
  if (totalLbl) totalLbl.textContent = `${total} integration${total === 1 ? '' : 's'}`;

  const types = ['ERP', 'TA', 'Other Integration'];
  const segments = types.map(t => ({
    label: t,
    value: integrationsList.filter(i => i.type === t).length,
    color: INTEGRATION_TYPE_COLORS[t]
  })).filter(s => s.value > 0);

  drawIntegrationsPieChart(segments);

  const legendEl = document.getElementById('integrations-pie-legend');
  if (legendEl) {
    if (total === 0) {
      legendEl.innerHTML = `<p class="text-xs text-slate-400">Add integrations below to see the distribution across ERP, TA, and Other Integration.</p>`;
    } else {
      legendEl.innerHTML = types.map(t => {
        const count = integrationsList.filter(i => i.type === t).length;
        const pct = total > 0 ? ((count / total) * 100).toFixed(1) : '0.0';
        return `
          <div class="flex items-center justify-between gap-2 text-xs">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:${INTEGRATION_TYPE_COLORS[t]}"></span>
              <span class="font-medium text-slate-800">${t}</span>
            </div>
            <span class="tabular-nums text-slate-600">${count} <span class="text-slate-400">(${pct}%)</span></span>
          </div>
        `;
      }).join('');
    }
  }

  const leadSharePalette = ['#6366f1', '#10b981', '#0ea5e9', '#f59e0b', '#ec4899', '#8b5cf6', '#14b8a6', '#f97316'];
  const integrationLeadCounts = integrationsList.map((item, idx) => {
    const count = (leadEntries || []).filter(l =>
      String(l.erp || '').toLowerCase() === item.name.toLowerCase() ||
      String(l.integration || '').toLowerCase() === item.name.toLowerCase()
    ).length;
    return {
      label: item.name,
      value: count,
      color: leadSharePalette[idx % leadSharePalette.length]
    };
  });
  const totalLeadUsage = integrationLeadCounts.reduce((acc, s) => acc + s.value, 0);
  const leadShareSegments = integrationLeadCounts.filter(s => s.value > 0).sort((a, b) => b.value - a.value);

  drawIntegrationsPieChart(leadShareSegments, 'integrationsLeadSharePieChart');

  const leadShareTotalLbl = document.getElementById('integrations-lead-share-total-label');
  if (leadShareTotalLbl) leadShareTotalLbl.textContent = `${totalLeadUsage} lead${totalLeadUsage === 1 ? '' : 's'}`;

  const leadShareLegendEl = document.getElementById('integrations-lead-share-legend');
  if (leadShareLegendEl) {
    if (totalLeadUsage === 0) {
      leadShareLegendEl.innerHTML = `<p class="text-xs text-slate-400">Connect integrations to leads to see lead share per integration.</p>`;
    } else {
      leadShareLegendEl.innerHTML = leadShareSegments.map(seg => {
        const pct = ((seg.value / totalLeadUsage) * 100).toFixed(1);
        return `
          <div class="flex items-center justify-between gap-2 text-xs">
            <div class="flex items-center gap-2 min-w-0">
              <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:${seg.color}"></span>
              <span class="font-medium text-slate-800 truncate">${seg.label}</span>
            </div>
            <span class="tabular-nums text-slate-600 shrink-0">${seg.value} <span class="text-slate-400">(${pct}%)</span></span>
          </div>
        `;
      }).join('');
    }
  }

  const emptyEl = document.getElementById('integrations-empty-state');
  const tableWrap = document.getElementById('integrations-table-wrapper');
  const tbody = document.getElementById('integrations-table-body');
  if (!emptyEl || !tableWrap || !tbody) return;

  if (total === 0) {
    emptyEl.classList.remove('hidden');
    tableWrap.classList.add('hidden');
    return;
  }
  emptyEl.classList.add('hidden');
  tableWrap.classList.remove('hidden');

  const sortedIntegrationsForTable = integrationsList.map(item => {
    const leadsCount = (leadEntries || []).filter(l =>
      String(l.erp || '').toLowerCase() === item.name.toLowerCase() ||
      String(l.integration || '').toLowerCase() === item.name.toLowerCase()
    ).length;
    return { item, leadsCount };
  }).sort((a, b) => b.leadsCount - a.leadsCount);

  tbody.innerHTML = sortedIntegrationsForTable.map(({ item, leadsCount }) => {
    const color = INTEGRATION_TYPE_COLORS[item.type] || '#0ea5e9';
    return `
      <tr class="group hover:bg-slate-50/80 transition-colors">
        <td class="py-3 px-4 font-semibold text-slate-900">${item.name}</td>
        <td class="py-3 px-4">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/70">
            <span class="w-1.5 h-1.5 rounded-full" style="background:${color}"></span>
            ${item.type}
          </span>
        </td>
        <td class="py-3 px-4 text-right tabular-nums text-slate-700">${leadsCount}</td>
        <td class="py-3 px-4 text-right">
          ${renderActionMenuHtml(`toggleIntegrationForm(true, ${item.id})`, `deleteIntegration(${item.id})`)}
        </td>
      </tr>
    `;
  }).join('');
}

function populateLeadStageSelect(selectedStageId) {
  const sel = document.getElementById('l-stage');
  if (!sel) return;
  if (leadStages.length === 0) {
    sel.innerHTML = `<option value="">No stages — add a stage first</option>`;
    return;
  }
  sel.innerHTML = leadStages.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
  if (selectedStageId && leadStages.some(s => s.id === Number(selectedStageId))) {
    sel.value = String(selectedStageId);
  } else {
    sel.value = String(leadStages[0].id);
  }
}

function toggleLeadForm(show, editId = null, presetStageId = null) {
  const panel = document.getElementById('lead-form-panel');
  if (!show) {
    panel.classList.add('hidden');
    return;
  }
  if (leadStages.length === 0) {
    toggleLeadStageForm(true);
    return;
  }
  document.getElementById('lead-stage-form').classList.add('hidden');
  panel.classList.remove('hidden');

  if (editId) {
    const item = leadEntries.find(l => l.id === editId);
    if (!item) return;
    document.getElementById('lead-form-title').textContent = 'Edit Lead';
    document.getElementById('l-edit-id').value = String(item.id);
    document.getElementById('l-company').value = item.company;
    const lWeb = document.getElementById('l-website');
    const lLogo = document.getElementById('l-logo');
    if (lWeb) lWeb.value = item.website || '';
    if (lLogo) lLogo.value = item.logo || '';
    populateLeadIntegrationSelect('erp', item.erp || '');
    populateLeadIntegrationSelect('integration', item.integration || '');
    document.getElementById('l-value').value = item.value > 0 ? String(item.value) : '';
    if (item.channel) ensureChannelExists(item.channel);
    populateLeadChannelSelect(item.channel);
    populateLeadStageSelect(item.stageId);
  } else {
    document.getElementById('lead-form-title').textContent = 'New Lead';
    document.getElementById('l-edit-id').value = '';
    document.getElementById('l-company').value = '';
    const lWeb = document.getElementById('l-website');
    const lLogo = document.getElementById('l-logo');
    if (lWeb) lWeb.value = '';
    if (lLogo) lLogo.value = '';
    populateLeadIntegrationSelect('erp', '');
    populateLeadIntegrationSelect('integration', '');
    document.getElementById('l-value').value = '';
    populateLeadChannelSelect(getChannelNames()[0] || '');
    populateLeadStageSelect(presetStageId);
  }
  document.getElementById('l-company').focus();
}

async function fetchNewLeadLogo() {
  const webInput = document.getElementById('l-website');
  const logoInput = document.getElementById('l-logo');
  const btn = document.getElementById('l-fetch-logo-btn');
  const rawUrl = (webInput?.value || '').trim();
  if (!rawUrl) {
    webInput?.focus();
    return;
  }
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Fetching...';
  }
  const info = await fetchSocialProfileInfo(rawUrl);
  if (btn) {
    btn.disabled = false;
    btn.textContent = 'Fetch Logo';
  }
  if (!info) return;
  if (webInput) webInput.value = info.url;
  if (logoInput && info.logo) logoInput.value = info.logo;
  const compInput = document.getElementById('l-company');
  if (compInput && !compInput.value.trim() && info.name) {
    compInput.value = info.name.replace(/^@/, '');
  }
}

function saveLead() {
  const editId = document.getElementById('l-edit-id').value;
  const company = (document.getElementById('l-company').value || '').trim();
  const website = normalizeWebsiteUrl(document.getElementById('l-website')?.value || '');
  const logo = (document.getElementById('l-logo')?.value || '').trim() || (website ? getLogoUrl(website) : '');
  let erp = document.getElementById('l-erp').value;
  if (erp === '__add_new__') {
    const customErp = (document.getElementById('l-erp-custom').value || '').trim();
    const customType = document.getElementById('l-erp-custom-type')?.value || 'ERP';
    if (!customErp) {
      document.getElementById('l-erp-custom').focus();
      return;
    }
    ensureIntegrationExists(customErp, customType);
    erp = customErp;
  }
  let integration = document.getElementById('l-integration').value;
  if (integration === '__add_new__') {
    const customInt = (document.getElementById('l-integration-custom').value || '').trim();
    const customType = document.getElementById('l-integration-custom-type')?.value || 'Other Integration';
    if (!customInt) {
      document.getElementById('l-integration-custom').focus();
      return;
    }
    ensureIntegrationExists(customInt, customType);
    integration = customInt;
  }
  let channel = document.getElementById('l-channel').value;
  if (channel === '__add_new__') {
    const customVal = (document.getElementById('l-channel-custom').value || '').trim();
    if (!customVal) {
      document.getElementById('l-channel-custom').focus();
      return;
    }
    ensureChannelExists(customVal);
    channel = customVal;
  }
  const stageId = Number(document.getElementById('l-stage').value);
  const value = Math.max(0, parseFloat(document.getElementById('l-value').value) || 0);

  if (!company) {
    document.getElementById('l-company').focus();
    return;
  }
  if (!stageId) return;

  const existingLead = editId ? leadEntries.find(l => l.id === Number(editId)) : null;
  const data = {
    id: editId ? Number(editId) : Date.now(),
    company,
    website,
    logo,
    erp,
    integration,
    channel,
    stageId,
    value,
    notes: existingLead?.notes || '',
    createdAt: existingLead?.createdAt || new Date().toISOString()
  };

  if (editId) {
    const idx = leadEntries.findIndex(l => l.id === Number(editId));
    if (idx !== -1) leadEntries[idx] = data;
  } else {
    leadEntries.push(data);
  }

  syncLeadsToCustomersGroup();
  toggleLeadForm(false);
  renderLeadsView();
}

function populateLeadDrawerSelects(lead) {
  const stageSel = document.getElementById('ld-stage');
  if (stageSel) {
    stageSel.innerHTML = leadStages.map(s => `<option value="${s.id}" ${s.id === lead.stageId ? 'selected' : ''}>${s.name}</option>`).join('');
  }
  const chSel = document.getElementById('ld-channel');
  if (chSel) {
    const chNames = getChannelNames();
    chSel.innerHTML = chNames.map(ch => `<option value="${ch}" ${ch === lead.channel ? 'selected' : ''}>${ch}</option>`).join('');
  }
  const erpSel = document.getElementById('ld-erp');
  if (erpSel) {
    const list = integrationsList.map(i => i.name);
    erpSel.innerHTML = `<option value="">None</option>` + list.map(n => `<option value="${n}" ${n === lead.erp ? 'selected' : ''}>${n}</option>`).join('');
  }
  const intSel = document.getElementById('ld-integration');
  if (intSel) {
    const list = integrationsList.map(i => i.name);
    intSel.innerHTML = `<option value="">None</option>` + list.map(n => `<option value="${n}" ${n === lead.integration ? 'selected' : ''}>${n}</option>`).join('');
  }
}

function syncLeadDrawerHeaderPreview() {
  const company = (document.getElementById('ld-company')?.value || '').trim() || 'Lead Details';
  const website = normalizeWebsiteUrl(document.getElementById('ld-website')?.value || '');
  const logoInput = (document.getElementById('ld-logo')?.value || '').trim();
  const logoUrl = logoInput || (website ? getLogoUrl(website) : '');
  const initials = company.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase() || '?';

  const titleEl = document.getElementById('ld-header-title');
  if (titleEl) titleEl.textContent = company;

  const webEl = document.getElementById('ld-header-website');
  if (webEl) {
    if (website) {
      webEl.href = website;
      webEl.textContent = `${getDomainFromUrl(website) || website} ↗`;
      webEl.classList.remove('hidden');
    } else {
      webEl.classList.add('hidden');
    }
  }

  const logoEl = document.getElementById('ld-header-logo');
  if (logoEl) {
    logoEl.innerHTML = logoUrl
      ? `<img src="${logoUrl}" alt="${company}" class="w-6 h-6 object-contain" onerror="this.parentElement.innerHTML='<span class=\\'text-xs font-bold text-slate-600\\'>${initials}</span>'" />`
      : `<span class="text-xs font-bold text-slate-600">${initials}</span>`;
  }
}

function openLeadDrawer(leadId) {
  const lead = leadEntries.find(l => l.id === leadId);
  if (!lead) return;
  document.getElementById('ld-id').value = String(lead.id);
  document.getElementById('ld-company').value = lead.company || '';
  document.getElementById('ld-website').value = lead.website || '';
  document.getElementById('ld-logo').value = lead.logo || '';
  document.getElementById('ld-value').value = lead.value > 0 ? String(lead.value) : '';
  document.getElementById('ld-notes').value = lead.notes || '';
  const statusEl = document.getElementById('ld-fetch-status');
  if (statusEl) {
    statusEl.textContent = '';
    statusEl.classList.add('hidden');
  }
  if (lead.channel) ensureChannelExists(lead.channel);
  populateLeadDrawerSelects(lead);
  syncLeadDrawerHeaderPreview();
  document.getElementById('lead-detail-drawer')?.classList.remove('hidden');
}

function closeLeadDrawer() {
  document.getElementById('lead-detail-drawer')?.classList.add('hidden');
}

async function fetchLeadWebsiteLogo() {
  const webInput = document.getElementById('ld-website');
  const logoInput = document.getElementById('ld-logo');
  const btn = document.getElementById('ld-fetch-logo-btn');
  const statusEl = document.getElementById('ld-fetch-status');
  const rawUrl = (webInput?.value || '').trim();
  if (!rawUrl) {
    webInput?.focus();
    return;
  }
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Fetching...';
  }
  if (statusEl) {
    statusEl.textContent = 'Fetching website & logo...';
    statusEl.classList.remove('hidden');
  }

  const info = await fetchSocialProfileInfo(rawUrl);

  if (btn) {
    btn.disabled = false;
    btn.textContent = 'Fetch Logo';
  }
  if (!info) {
    if (statusEl) {
      statusEl.textContent = 'Invalid website URL';
      statusEl.classList.remove('hidden');
    }
    return;
  }

  if (webInput) webInput.value = info.url;
  if (logoInput && info.logo) logoInput.value = info.logo;
  syncLeadDrawerHeaderPreview();

  if (statusEl) {
    statusEl.textContent = info.fromApi ? 'Fetched logo & metadata' : 'Logo detected from domain';
    statusEl.classList.remove('hidden');
  }
}

function saveLeadFromDrawer() {
  const leadId = Number(document.getElementById('ld-id')?.value);
  const lead = leadEntries.find(l => l.id === leadId);
  if (!lead) return;
  const company = (document.getElementById('ld-company')?.value || '').trim();
  if (!company) {
    document.getElementById('ld-company')?.focus();
    return;
  }
  const website = normalizeWebsiteUrl(document.getElementById('ld-website')?.value || '');
  const logo = (document.getElementById('ld-logo')?.value || '').trim() || (website ? getLogoUrl(website) : '');
  lead.company = company;
  lead.website = website;
  lead.logo = logo;
  lead.stageId = Number(document.getElementById('ld-stage')?.value) || lead.stageId;
  lead.channel = document.getElementById('ld-channel')?.value || lead.channel;
  lead.erp = document.getElementById('ld-erp')?.value || '';
  lead.integration = document.getElementById('ld-integration')?.value || '';
  lead.value = Math.max(0, parseFloat(document.getElementById('ld-value')?.value) || 0);
  lead.notes = (document.getElementById('ld-notes')?.value || '').trim();

  syncLeadsToCustomersGroup();
  closeLeadDrawer();
  renderLeadsView();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function deleteLeadFromDrawer() {
  const leadId = Number(document.getElementById('ld-id')?.value);
  if (!leadId) return;
  closeLeadDrawer();
  deleteLead(leadId);
}

function deleteLead(leadId) {
  const lead = leadEntries.find(l => l.id === leadId);
  confirmDeleteAction(`Delete lead "${lead?.company || 'this lead'}"?`, () => {
    leadEntries = leadEntries.filter(l => l.id !== leadId);
    renderLeadsView();
  });
}

function moveLeadToStage(leadId, newStageId) {
  const lead = leadEntries.find(l => l.id === leadId);
  if (!lead) return;
  lead.stageId = Number(newStageId);
  renderLeadsView();
}

function onLeadDragStart(e, leadId) {
  draggedLeadId = leadId;
  if (e.dataTransfer) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', String(leadId));
  }
}

function onLeadDragOver(e) {
  e.preventDefault();
  if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
}

function onLeadDrop(e, stageId) {
  e.preventDefault();
  const id = draggedLeadId || Number(e.dataTransfer?.getData('text/plain'));
  draggedLeadId = null;
  if (id) moveLeadToStage(id, stageId);
}

function drawLeadsStageChart() {
  const card = document.getElementById('leads-chart-card');
  const canvas = document.getElementById('leadsStageChart');
  const metaEl = document.getElementById('leads-chart-meta');
  if (!card || !canvas) return;

  if (leadStages.length === 0 || leadEntries.length === 0) {
    card.classList.add('hidden');
    return;
  }
  card.classList.remove('hidden');

  const totalLeads = leadEntries.length;
  const totalValue = leadEntries.reduce((acc, l) => acc + (l.value || 0), 0);
  if (metaEl) {
    metaEl.textContent = `${totalLeads} lead${totalLeads === 1 ? '' : 's'} · ${Math.round(totalValue).toLocaleString()} NOK`;
  }

  const rows = leadStages.map(s => {
    const items = leadEntries.filter(l => l.stageId === s.id);
    const count = items.length;
    const value = items.reduce((acc, l) => acc + (l.value || 0), 0);
    const countPct = totalLeads > 0 ? (count / totalLeads) * 100 : 0;
    const valuePct = totalValue > 0 ? (value / totalValue) * 100 : 0;
    return { name: s.name, count, value, countPct, valuePct };
  });

  canvas._leadsMeta = { rows, hoverIdx: -1 };

  const renderChart = (hoverIdx = -1) => {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = rect.width || 680;
    const height = 200;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const padL = 40, padR = 16, padT = 14, padB = 30;
    const plotW = width - padL - padR;
    const plotH = height - padT - padB;
    const uiFont = '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif';

    canvas._leadsMeta.padL = padL;
    canvas._leadsMeta.padR = padR;
    canvas._leadsMeta.width = width;
    canvas._leadsMeta.plotW = plotW;

    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.fillStyle = '#94a3b8';
    ctx.font = `10px ${uiFont}`;
    [0, 50, 100].forEach(pct => {
      const y = padT + plotH - (pct / 100) * plotH;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(width - padR, y);
      ctx.stroke();
      ctx.fillText(`${pct}%`, 4, y + 3);
    });
    ctx.setLineDash([]);

    const n = rows.length;
    const groupW = plotW / Math.max(1, n);
    const barW = Math.min(18, Math.max(8, (groupW - 18) / 2));
    const pillR = Math.min(6, barW / 2);

    rows.forEach((r, idx) => {
      const colX = padL + idx * groupW;
      const centerX = colX + groupW / 2;
      const isHovered = idx === hoverIdx;

      if (isHovered) {
        ctx.fillStyle = 'rgba(241, 245, 249, 0.9)';
        ctx.beginPath();
        ctx.roundRect(colX + 4, padT, groupW - 8, plotH + 4, 6);
        ctx.fill();
      }

      const cH = (r.countPct / 100) * plotH;
      const vH = (r.valuePct / 100) * plotH;

      ctx.globalAlpha = hoverIdx !== -1 && !isHovered ? 0.55 : 1;
      if (cH > 0) {
        ctx.fillStyle = '#7c3aed';
        ctx.beginPath();
        ctx.roundRect(centerX - barW - 2, padT + plotH - cH, barW, cH, [pillR, pillR, pillR, pillR]);
        ctx.fill();
      }
      if (vH > 0) {
        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.roundRect(centerX + 2, padT + plotH - vH, barW, vH, [pillR, pillR, pillR, pillR]);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      ctx.fillStyle = isHovered ? '#0f172a' : '#64748b';
      ctx.font = `${isHovered ? '600 ' : ''}10px ${uiFont}`;
      ctx.textAlign = 'center';
      const lbl = r.name.length > 14 ? r.name.slice(0, 13) + '…' : r.name;
      ctx.fillText(lbl, centerX, height - 10);
      ctx.textAlign = 'left';
    });
  };

  canvas._leadsMeta.render = renderChart;
  renderChart(-1);

  if (!canvas._leadsBound) {
    canvas._leadsBound = true;
    canvas.style.cursor = 'pointer';
    canvas.addEventListener('mousemove', e => {
      const meta = canvas._leadsMeta;
      if (!meta || !meta.plotW || meta.rows.length === 0) return;
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      if (mx < meta.padL || mx > meta.width - meta.padR) {
        if (meta.hoverIdx !== -1) {
          meta.hoverIdx = -1;
          meta.render(-1);
        }
        hideChartTooltip();
        return;
      }
      const n = meta.rows.length;
      const idx = Math.min(n - 1, Math.max(0, Math.floor((mx - meta.padL) / (meta.plotW / n))));
      if (meta.hoverIdx !== idx) {
        meta.hoverIdx = idx;
        meta.render(idx);
      }
      const r = meta.rows[idx];
      showChartTooltip(
        e.clientX,
        e.clientY,
        `<div class="space-y-1">
          <div class="font-semibold text-white">${r.name}</div>
          <div class="flex items-center justify-between gap-3"><span class="flex items-center gap-1.5 text-slate-300"><span class="w-2 h-2 rounded-full bg-[#7c3aed]"></span>Leads</span><span>${r.count} (${r.countPct.toFixed(1)}%)</span></div>
          <div class="flex items-center justify-between gap-3"><span class="flex items-center gap-1.5 text-slate-300"><span class="w-2 h-2 rounded-full bg-[#10b981]"></span>Value</span><span>${Math.round(r.value).toLocaleString()} NOK (${r.valuePct.toFixed(1)}%)</span></div>
        </div>`
      );
    });
    canvas.addEventListener('mouseleave', () => {
      const meta = canvas._leadsMeta;
      if (meta && meta.hoverIdx !== -1) {
        meta.hoverIdx = -1;
        meta.render(-1);
      }
      hideChartTooltip();
    });
  }
}

function renderLeadsView() {
  const emptyEl = document.getElementById('leads-empty-state');
  const boardEl = document.getElementById('leads-kanban-board');
  const summaryEl = document.getElementById('leads-pipeline-summary');
  if (leadStages.length === 0) {
    emptyEl.classList.remove('hidden');
    boardEl.classList.add('hidden');
    summaryEl?.classList.add('hidden');
    return;
  }
  emptyEl.classList.add('hidden');
  boardEl.classList.remove('hidden');
  summaryEl?.classList.remove('hidden');

  const shades = ['bg-[#7c3aed]', 'bg-[#10b981]', 'bg-[#0ea5e9]', 'bg-[#f59e0b]', 'bg-[#f43f5e]'];
  const shadeHex = ['#7c3aed', '#10b981', '#0ea5e9', '#f59e0b', '#f43f5e'];

  const totalDeals = leadEntries.length;
  const totalAmount = leadEntries.reduce((acc, l) => acc + (l.value || 0), 0);
  const kpiAmountEl = document.getElementById('leads-kpi-amount');
  const kpiCountEl = document.getElementById('leads-kpi-count');
  const kpiCountSubEl = document.getElementById('leads-kpi-count-sub');
  const pieMetaEl = document.getElementById('leads-pipeline-pie-meta');
  if (kpiAmountEl) kpiAmountEl.textContent = `${Math.round(totalAmount).toLocaleString()} NOK`;
  if (kpiCountEl) kpiCountEl.textContent = String(totalDeals);
  if (kpiCountSubEl) kpiCountSubEl.textContent = `Across ${leadStages.length} stage${leadStages.length === 1 ? '' : 's'}`;
  if (pieMetaEl) pieMetaEl.textContent = `${totalDeals} deal${totalDeals === 1 ? '' : 's'}`;

  const pieSegments = leadStages.map((s, idx) => {
    const stageLeads = leadEntries.filter(l => l.stageId === s.id);
    const stageVal = stageLeads.reduce((acc, l) => acc + (l.value || 0), 0);
    return {
      label: s.name,
      value: stageLeads.length,
      stageVal,
      color: shadeHex[idx % shadeHex.length]
    };
  }).filter(seg => seg.value > 0).sort((a, b) => (b.value - a.value) || (b.stageVal - a.stageVal));

  drawIntegrationsPieChart(pieSegments, 'leadsPipelinePieChart');

  const pieLegendEl = document.getElementById('leads-pipeline-pie-legend');
  if (pieLegendEl) {
    if (totalDeals === 0) {
      pieLegendEl.innerHTML = `<p class="text-xs text-slate-400">Add leads to the Kanban board above to see pipeline distribution.</p>`;
    } else {
      const sortedLegendStages = leadStages.map((s, idx) => {
        const stageLeads = leadEntries.filter(l => l.stageId === s.id);
        const count = stageLeads.length;
        const stageVal = stageLeads.reduce((acc, l) => acc + (l.value || 0), 0);
        return { s, idx, count, stageVal };
      }).sort((a, b) => (b.count - a.count) || (b.stageVal - a.stageVal));
      pieLegendEl.innerHTML = sortedLegendStages.map(({ s, idx, count, stageVal }) => {
        const pct = totalDeals > 0 ? ((count / totalDeals) * 100).toFixed(1) : '0.0';
        const color = shadeHex[idx % shadeHex.length];
        return `
          <div class="flex items-center justify-between gap-2 text-xs">
            <div class="flex items-center gap-2 min-w-0">
              <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:${color}"></span>
              <span class="font-medium text-slate-800 truncate">${s.name}</span>
            </div>
            <div class="flex items-center gap-2 tabular-nums shrink-0 text-slate-600">
              ${stageVal > 0 ? `<span class="text-slate-400">${Math.round(stageVal).toLocaleString()} NOK</span>` : ''}
              <span>${count} <span class="text-slate-400">(${pct}%)</span></span>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  boardEl.innerHTML = leadStages.map((stage, sIdx) => {
    const stageLeads = leadEntries.filter(l => l.stageId === stage.id).sort((a, b) => (b.value || 0) - (a.value || 0));
    const stageTotal = stageLeads.reduce((acc, l) => acc + (l.value || 0), 0);
    const stageDot = shades[sIdx % shades.length];

    const cardsHtml = stageLeads.length === 0
      ? `<div class="rounded-xl border border-dashed border-slate-200/80 bg-white/60 p-5 text-center text-[11px] text-slate-400">Drop lead here or click +</div>`
      : stageLeads.map(l => {
          const logoUrl = l.logo || (l.website ? getLogoUrl(l.website) : '');
          const initials = (l.company || '?').split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
          const logoHtml = logoUrl
            ? `<div class="w-7 h-7 rounded-lg border border-slate-200 bg-white flex items-center justify-center overflow-hidden shrink-0">
                 <img src="${logoUrl}" alt="${l.company}" class="w-4 h-4 object-contain" onerror="this.parentElement.innerHTML='<span class=\\'text-[10px] font-bold text-slate-600\\'>${initials}</span>'" />
               </div>`
            : '';
          const domain = l.website ? getDomainFromUrl(l.website) : '';
          return `
            <div
              draggable="true"
              ondragstart="onLeadDragStart(event, ${l.id})"
              onclick="openLeadDrawer(${l.id})"
              class="group rounded-xl border border-slate-200/80 bg-white p-3.5 card-shadow space-y-2.5 cursor-pointer hover:border-slate-300 transition-all"
            >
              <div class="flex items-start justify-between gap-2">
                <div class="flex items-center gap-2 min-w-0">
                  ${logoHtml}
                  <div class="min-w-0">
                    <div class="font-semibold text-xs text-slate-900 leading-snug truncate">${l.company}</div>
                    ${l.website ? `<a href="${l.website}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="text-[10px] text-slate-500 hover:text-slate-900 underline underline-offset-2 truncate block">${domain || l.website} ↗</a>` : ''}
                  </div>
                </div>
                ${renderActionMenuHtml(`openLeadDrawer(${l.id})`, `deleteLead(${l.id})`, 'w-6 h-6 shrink-0')}
              </div>

              ${(l.erp || l.integration) ? `
                <div class="flex flex-wrap items-center gap-1.5 text-[11px]">
                  ${l.erp ? `<span class="px-2 py-0.5 rounded-md bg-[#f5f7fa] text-slate-700 border border-slate-200/60">${l.erp}</span>` : ''}
                  ${l.integration ? `<span class="px-2 py-0.5 rounded-md bg-white text-slate-500 border border-slate-200/70">+ ${l.integration}</span>` : ''}
                </div>
              ` : ''}

              <div class="flex items-center justify-between gap-2 pt-1.5 border-t border-slate-100">
                <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-700">
                  ${renderChannelIconHtml(l.channel, 'w-3.5 h-3.5')}
                  <span>${l.channel}</span>
                </span>
                ${l.value > 0 ? `<span class="text-[11px] font-semibold tabular-nums text-slate-900">${Math.round(l.value).toLocaleString()} NOK</span>` : ''}
              </div>
            </div>
          `;
        }).join('');

    return `
      <div
        ondragover="onLeadDragOver(event)"
        ondrop="onLeadDrop(event, ${stage.id})"
        class="w-[290px] shrink-0 rounded-2xl border border-slate-200/80 bg-[#fbfcfd] p-3.5 space-y-3"
      >
        <div class="flex items-center justify-between gap-2 px-1">
          <div class="min-w-0">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full ${stageDot} shrink-0"></span>
              <h3 class="text-xs font-bold text-slate-900 truncate">${stage.name}</h3>
              <span class="px-1.5 py-0.5 rounded-full text-[10px] font-semibold tabular-nums bg-slate-200/70 text-slate-700">${stageLeads.length}</span>
            </div>
            ${stageTotal > 0 ? `<div class="text-[10px] tabular-nums text-slate-400 mt-0.5">${Math.round(stageTotal).toLocaleString()} NOK</div>` : ''}
          </div>
          <div class="inline-flex items-center gap-1 shrink-0">
            <button onclick="toggleLeadForm(true, null, ${stage.id})" title="Add lead to stage" class="w-6 h-6 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-xs text-slate-700 flex items-center justify-center">+</button>
            ${renderActionMenuHtml('', `deleteLeadStage(${stage.id})`, 'w-6 h-6')}
          </div>
        </div>
        <div class="space-y-2.5">${cardsHtml}</div>
      </div>
    `;
  }).join('');
}

let competitorsList = [];
let selectedCompChannelsTemp = [];

function renderCompetitorChannelsPicker() {
  const wrap = document.getElementById('comp-channels-picker');
  if (!wrap) return;
  const names = getChannelNames();
  if (names.length === 0) {
    wrap.innerHTML = `<span class="text-[11px] text-slate-400">No channels in Channels app yet.</span>`;
    return;
  }
  wrap.innerHTML = names.map(ch => {
    const active = selectedCompChannelsTemp.includes(ch);
    const color = getChannelColor(ch);
    const safeCh = ch.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    return `
      <button
        type="button"
        onclick="toggleCompetitorChannelTemp('${safeCh}')"
        class="px-2.5 py-1 rounded-full text-[11px] font-medium border transition-colors inline-flex items-center gap-1.5 ${
          active
            ? 'bg-[#0f172a] text-white border-[#0f172a]'
            : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
        }"
      >
        <span class="w-1.5 h-1.5 rounded-full" style="background:${active ? '#ffffff' : color}"></span>
        <span>${ch}</span>
      </button>
    `;
  }).join('');
}

function toggleCompetitorChannelTemp(ch) {
  if (selectedCompChannelsTemp.includes(ch)) {
    selectedCompChannelsTemp = selectedCompChannelsTemp.filter(c => c !== ch);
  } else {
    selectedCompChannelsTemp.push(ch);
  }
  renderCompetitorChannelsPicker();
}

function toggleCompetitorForm(show, editId = null) {
  const panel = document.getElementById('competitor-form-panel');
  if (!panel) return;
  if (!show) {
    panel.classList.add('hidden');
    return;
  }
  panel.classList.remove('hidden');

  if (editId) {
    const item = competitorsList.find(c => c.id === editId);
    if (!item) return;
    document.getElementById('competitor-form-title').textContent = 'Edit Competitor';
    document.getElementById('comp-edit-id').value = String(item.id);
    document.getElementById('comp-name').value = item.name;
    document.getElementById('comp-website').value = item.website || '';
    document.getElementById('comp-social-url').value = item.socialUrl || '';
    document.getElementById('comp-logo').value = item.logo || '';
    document.getElementById('comp-followers').value = item.followers || '';
    document.getElementById('comp-posts').value = item.posts || '';
    document.getElementById('comp-positioning').value = item.positioning || '';
    document.getElementById('comp-pricing').value = item.pricing || '';
    document.getElementById('comp-score').value = String(item.score || 7);
    document.getElementById('comp-strengths').value = item.strengths || '';
    document.getElementById('comp-weaknesses').value = item.weaknesses || '';
    selectedCompChannelsTemp = [...(item.channels || [])];
  } else {
    document.getElementById('competitor-form-title').textContent = 'Add Competitor';
    document.getElementById('comp-edit-id').value = '';
    document.getElementById('comp-name').value = '';
    document.getElementById('comp-website').value = '';
    document.getElementById('comp-social-url').value = '';
    document.getElementById('comp-logo').value = '';
    document.getElementById('comp-followers').value = '';
    document.getElementById('comp-posts').value = '';
    document.getElementById('comp-positioning').value = '';
    document.getElementById('comp-pricing').value = '';
    document.getElementById('comp-score').value = '7';
    document.getElementById('comp-strengths').value = '';
    document.getElementById('comp-weaknesses').value = '';
    selectedCompChannelsTemp = [];
  }
  const socialStatusEl = document.getElementById('comp-social-status');
  if (socialStatusEl) {
    socialStatusEl.textContent = '';
    socialStatusEl.classList.add('hidden');
  }
  renderCompetitorChannelsPicker();
  document.getElementById('comp-name').focus();
}

async function fetchCompetitorSocialInfo() {
  const urlInput = document.getElementById('comp-social-url');
  const btn = document.getElementById('comp-fetch-btn');
  const statusEl = document.getElementById('comp-social-status');
  const rawUrl = (urlInput?.value || '').trim();
  if (!rawUrl) {
    urlInput?.focus();
    return;
  }
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Fetching...';
  }
  if (statusEl) {
    statusEl.textContent = 'Fetching social logo, followers, and post stats...';
    statusEl.classList.remove('hidden');
  }

  const info = await fetchSocialProfileInfo(rawUrl);

  if (btn) {
    btn.disabled = false;
    btn.textContent = 'Fetch Info';
  }
  if (!info) {
    if (statusEl) {
      statusEl.textContent = 'Could not parse URL. Please enter a valid https:// social link.';
      statusEl.classList.remove('hidden');
    }
    return;
  }

  if (urlInput) urlInput.value = info.url;
  const nameInput = document.getElementById('comp-name');
  if (nameInput && !nameInput.value.trim() && info.name) nameInput.value = info.name.replace(/^@/, '');
  const logoInput = document.getElementById('comp-logo');
  if (logoInput && info.logo) logoInput.value = info.logo;
  const followersInput = document.getElementById('comp-followers');
  if (followersInput && info.followers) followersInput.value = info.followers;
  const postsInput = document.getElementById('comp-posts');
  if (postsInput && info.posts) postsInput.value = info.posts;

  if (info.platform && info.platform !== 'Other') {
    const matchedChObj = channelsList.find(ch => {
      const chName = typeof ch === 'string' ? ch : (ch?.name || '');
      return chName.toLowerCase().includes(info.platform.toLowerCase().split(' ')[0]);
    });
    const matchedChannel = typeof matchedChObj === 'string' ? matchedChObj : (matchedChObj?.name || '');
    if (matchedChannel && !selectedCompChannelsTemp.includes(matchedChannel)) {
      selectedCompChannelsTemp.push(matchedChannel);
      renderCompetitorChannelsPicker();
    }
  }

  if (statusEl) {
    const parts = [info.platform, info.followers ? `${info.followers} followers` : '', info.posts ? `${info.posts} posts` : ''].filter(Boolean);
    statusEl.textContent = info.fromApi
      ? `Fetched: ${parts.join(' · ')}`
      : `Detected ${info.platform} logo from URL (enter followers/posts manually if needed)`;
    statusEl.classList.remove('hidden');
  }
}

function saveCompetitor() {
  const editId = document.getElementById('comp-edit-id').value;
  const name = (document.getElementById('comp-name').value || '').trim();
  const website = normalizeWebsiteUrl(document.getElementById('comp-website').value);
  const socialUrl = normalizeWebsiteUrl(document.getElementById('comp-social-url')?.value || '');
  const logo = (document.getElementById('comp-logo')?.value || '').trim();
  const followers = (document.getElementById('comp-followers')?.value || '').trim();
  const posts = (document.getElementById('comp-posts')?.value || '').trim();
  const positioning = (document.getElementById('comp-positioning').value || '').trim();
  const pricing = (document.getElementById('comp-pricing').value || '').trim();
  const score = Math.min(10, Math.max(1, parseInt(document.getElementById('comp-score').value, 10) || 5));
  const strengths = (document.getElementById('comp-strengths').value || '').trim();
  const weaknesses = (document.getElementById('comp-weaknesses').value || '').trim();

  if (!name) {
    document.getElementById('comp-name').focus();
    return;
  }

  const data = {
    id: editId ? Number(editId) : Date.now(),
    name,
    website,
    socialUrl,
    logo,
    followers,
    posts,
    positioning,
    pricing,
    score,
    channels: [...selectedCompChannelsTemp],
    strengths,
    weaknesses
  };

  if (editId) {
    const idx = competitorsList.findIndex(c => c.id === Number(editId));
    if (idx !== -1) competitorsList[idx] = data;
  } else {
    competitorsList.push(data);
  }

  toggleCompetitorForm(false);
  renderCompetitorsView();
}

function deleteCompetitor(id) {
  const c = competitorsList.find(x => x.id === id);
  confirmDeleteAction(`Delete competitor "${c?.name || 'this competitor'}"?`, () => {
    competitorsList = competitorsList.filter(x => x.id !== id);
    renderCompetitorsView();
  });
}

function drawCompetitorsChart(rows) {
  const card = document.getElementById('competitors-chart-card');
  const canvas = document.getElementById('competitorsChart');
  if (!card || !canvas) return;
  if (rows.length === 0) {
    card.classList.add('hidden');
    return;
  }
  card.classList.remove('hidden');

  canvas._compMeta = { rows, hoverIdx: -1 };

  const renderChart = (hoverIdx = -1) => {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = rect.width || 680;
    const height = 200;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const padL = 40, padR = 16, padT = 14, padB = 30;
    const plotW = width - padL - padR;
    const plotH = height - padT - padB;
    const uiFont = '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif';

    canvas._compMeta.padL = padL;
    canvas._compMeta.padR = padR;
    canvas._compMeta.width = width;
    canvas._compMeta.plotW = plotW;

    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.fillStyle = '#94a3b8';
    ctx.font = `10px ${uiFont}`;
    [0, 50, 100].forEach(pct => {
      const y = padT + plotH - (pct / 100) * plotH;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(width - padR, y);
      ctx.stroke();
      ctx.fillText(`${pct}%`, 4, y + 3);
    });
    ctx.setLineDash([]);

    const n = rows.length;
    const groupW = plotW / Math.max(1, n);
    const barW = Math.min(18, Math.max(8, (groupW - 18) / 2));
    const pillR = Math.min(6, barW / 2);

    rows.forEach((r, idx) => {
      const colX = padL + idx * groupW;
      const centerX = colX + groupW / 2;
      const isHovered = idx === hoverIdx;

      if (isHovered) {
        ctx.fillStyle = 'rgba(241, 245, 249, 0.9)';
        ctx.beginPath();
        ctx.roundRect(colX + 4, padT, groupW - 8, plotH + 4, 6);
        ctx.fill();
      }

      const sH = (r.strengthPct / 100) * plotH;
      const oH = (r.overlapPct / 100) * plotH;

      ctx.globalAlpha = hoverIdx !== -1 && !isHovered ? 0.55 : 1;
      if (sH > 0) {
        ctx.fillStyle = '#7c3aed';
        ctx.beginPath();
        ctx.roundRect(centerX - barW - 2, padT + plotH - sH, barW, sH, [pillR, pillR, pillR, pillR]);
        ctx.fill();
      }
      if (oH > 0) {
        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.roundRect(centerX + 2, padT + plotH - oH, barW, oH, [pillR, pillR, pillR, pillR]);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      ctx.fillStyle = isHovered ? '#0f172a' : '#64748b';
      ctx.font = `${isHovered ? '600 ' : ''}10px ${uiFont}`;
      ctx.textAlign = 'center';
      const lbl = r.name.length > 14 ? r.name.slice(0, 13) + '…' : r.name;
      ctx.fillText(lbl, centerX, height - 10);
      ctx.textAlign = 'left';
    });
  };

  canvas._compMeta.render = renderChart;
  renderChart(-1);

  if (!canvas._compBound) {
    canvas._compBound = true;
    canvas.style.cursor = 'pointer';
    canvas.addEventListener('mousemove', e => {
      const meta = canvas._compMeta;
      if (!meta || !meta.plotW || meta.rows.length === 0) return;
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      if (mx < meta.padL || mx > meta.width - meta.padR) {
        if (meta.hoverIdx !== -1) {
          meta.hoverIdx = -1;
          meta.render(-1);
        }
        hideChartTooltip();
        return;
      }
      const n = meta.rows.length;
      const idx = Math.min(n - 1, Math.max(0, Math.floor((mx - meta.padL) / (meta.plotW / n))));
      if (meta.hoverIdx !== idx) {
        meta.hoverIdx = idx;
        meta.render(idx);
      }
      const r = meta.rows[idx];
      showChartTooltip(
        e.clientX,
        e.clientY,
        `<div class="space-y-1">
          <div class="font-semibold text-white">${r.name}</div>
          <div class="flex items-center justify-between gap-3"><span class="flex items-center gap-1.5 text-slate-300"><span class="w-2 h-2 rounded-full bg-[#7c3aed]"></span>Strength</span><span>${r.score}/10 (${r.strengthPct.toFixed(0)}%)</span></div>
          <div class="flex items-center justify-between gap-3"><span class="flex items-center gap-1.5 text-slate-300"><span class="w-2 h-2 rounded-full bg-[#10b981]"></span>Channel Overlap</span><span>${r.channels.length}/${r.totalChannels} (${r.overlapPct.toFixed(1)}%)</span></div>
        </div>`
      );
    });
    canvas.addEventListener('mouseleave', () => {
      const meta = canvas._compMeta;
      if (meta && meta.hoverIdx !== -1) {
        meta.hoverIdx = -1;
        meta.render(-1);
      }
      hideChartTooltip();
    });
  }
}

function renderCompetitorsView() {
  const totalChannels = Math.max(1, getChannelNames().length);
  const rows = competitorsList.map(c => {
    const strengthPct = (c.score / 10) * 100;
    const overlapPct = (c.channels.length / totalChannels) * 100;
    return { ...c, strengthPct, overlapPct, totalChannels: getChannelNames().length };
  }).sort((a, b) => (b.score - a.score) || (b.overlapPct - a.overlapPct));

  drawCompetitorsChart(rows);

  document.getElementById('comp-sum-count').textContent = String(rows.length);
  const avgScore = rows.length > 0 ? rows.reduce((a, r) => a + r.score, 0) / rows.length : 0;
  document.getElementById('comp-sum-score').textContent = `${avgScore.toFixed(1)} / 10`;
  const avgOverlap = rows.length > 0 ? rows.reduce((a, r) => a + r.overlapPct, 0) / rows.length : 0;
  document.getElementById('comp-sum-overlap').textContent = `${avgOverlap.toFixed(1)}%`;

  const chCounts = {};
  rows.forEach(r => r.channels.forEach(ch => { chCounts[ch] = (chCounts[ch] || 0) + 1; }));
  const sortedCh = Object.entries(chCounts).sort((a, b) => b[1] - a[1]);
  if (sortedCh.length > 0) {
    document.getElementById('comp-sum-top-channel').textContent = sortedCh[0][0];
    document.getElementById('comp-sum-top-channel-sub').textContent = `${sortedCh[0][1]} competitor${sortedCh[0][1] === 1 ? '' : 's'} active`;
  } else {
    document.getElementById('comp-sum-top-channel').textContent = '—';
    document.getElementById('comp-sum-top-channel-sub').textContent = 'No channel data yet';
  }

  const emptyEl = document.getElementById('competitors-empty-state');
  const gridEl = document.getElementById('competitors-grid');
  if (rows.length === 0) {
    emptyEl.classList.remove('hidden');
    gridEl.classList.add('hidden');
    return;
  }
  emptyEl.classList.add('hidden');
  gridEl.classList.remove('hidden');

  gridEl.innerHTML = rows.map(c => {
    const logoUrl = c.logo || getLogoUrl(c.website || c.socialUrl);
    const domain = getDomainFromUrl(c.website);
    const socialDomain = getDomainFromUrl(c.socialUrl);
    const initials = c.name.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase() || '?';
    const logoHtml = logoUrl
      ? `<div class="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center overflow-hidden shrink-0">
           <img src="${logoUrl}" alt="${c.name}" class="w-6 h-6 object-contain" onerror="this.parentElement.innerHTML='<span class=\\'text-[11px] font-bold text-slate-600\\'>${initials}</span>'" />
         </div>`
      : `<div class="w-9 h-9 rounded-lg border border-slate-200 bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-bold shrink-0">${initials}</div>`;

    const chPills = c.channels.length > 0
      ? c.channels.map(ch => `
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-700 border border-slate-200/70">
            <span class="w-1.5 h-1.5 rounded-full" style="background:${getChannelColor(ch)}"></span>
            ${ch}
          </span>
        `).join('')
      : `<span class="text-[11px] text-slate-400">No channels selected</span>`;

    const socialStatsHtml = (c.followers || c.posts)
      ? `<div class="flex flex-wrap items-center gap-1.5">
           ${c.followers ? `<span class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-700 border border-slate-200/70">Followers: ${c.followers}</span>` : ''}
           ${c.posts ? `<span class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-700 border border-slate-200/70">Posts: ${c.posts}</span>` : ''}
         </div>`
      : '';

    return `
      <div class="group rounded-2xl border border-slate-200/80 bg-white p-5 card-shadow space-y-3.5">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center gap-3 min-w-0">
            ${logoHtml}
            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <h4 class="text-sm font-bold text-slate-900 truncate">${c.name}</h4>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold tabular-nums bg-[#ede9fe] text-[#7c3aed]">${c.score}/10</span>
              </div>
              <div class="flex flex-wrap items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                ${c.positioning ? `<span class="truncate">${c.positioning}</span>` : ''}
                ${c.website ? `<a href="${c.website}" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2 hover:text-slate-900 shrink-0">${domain || 'Website'} ↗</a>` : ''}
                ${c.socialUrl ? `<a href="${c.socialUrl}" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2 hover:text-slate-900 shrink-0">${socialDomain || 'Social'} ↗</a>` : ''}
              </div>
            </div>
          </div>
          ${renderActionMenuHtml(`toggleCompetitorForm(true, ${c.id})`, `deleteCompetitor(${c.id})`, 'shrink-0')}
        </div>

        ${socialStatsHtml}
        <div class="flex flex-wrap items-center gap-1.5">${chPills}</div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-slate-200/70 text-[11px]">
          <div>
            <div class="text-slate-400">Pricing</div>
            <div class="font-medium text-slate-800">${c.pricing || '—'}</div>
          </div>
          <div>
            <div class="text-slate-400">Strengths</div>
            <div class="text-slate-700">${c.strengths || '—'}</div>
          </div>
          <div>
            <div class="text-slate-400">Weaknesses</div>
            <div class="text-slate-700">${c.weaknesses || '—'}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

let aeoSeoEntries = [];

function toggleAeoSeoForm(show, editId = null) {
  const panel = document.getElementById('aeo-seo-form-panel');
  if (!panel) return;
  if (!show) {
    panel.classList.add('hidden');
    return;
  }
  panel.classList.remove('hidden');

  if (editId) {
    const item = aeoSeoEntries.find(e => e.id === editId);
    if (!item) return;
    document.getElementById('aeo-seo-form-title').textContent = 'Edit Query';
    document.getElementById('as-edit-id').value = String(item.id);
    document.getElementById('as-query').value = item.query;
    document.getElementById('as-intent').value = item.intent || 'Commercial';
    document.getElementById('as-aeo-engine').value = item.engine || 'ChatGPT';
    document.getElementById('as-aeo-score').value = String(item.aeoScore);
    document.getElementById('as-seo-score').value = String(item.seoScore);
    document.getElementById('as-seo-pos').value = item.seoPos > 0 ? String(item.seoPos) : '';
    document.getElementById('as-cited').value = item.cited || 'Cited';
  } else {
    document.getElementById('aeo-seo-form-title').textContent = 'Add Query';
    document.getElementById('as-edit-id').value = '';
    document.getElementById('as-query').value = '';
    document.getElementById('as-intent').value = 'Commercial';
    document.getElementById('as-aeo-engine').value = 'ChatGPT';
    document.getElementById('as-aeo-score').value = '';
    document.getElementById('as-seo-score').value = '';
    document.getElementById('as-seo-pos').value = '';
    document.getElementById('as-cited').value = 'Cited';
  }
  document.getElementById('as-query').focus();
}

function saveAeoSeoEntry() {
  const editId = document.getElementById('as-edit-id').value;
  const query = (document.getElementById('as-query').value || '').trim();
  const intent = document.getElementById('as-intent').value || 'Commercial';
  const engine = document.getElementById('as-aeo-engine').value || 'ChatGPT';
  const aeoScore = Math.min(100, Math.max(0, parseFloat(document.getElementById('as-aeo-score').value) || 0));
  const seoScore = Math.min(100, Math.max(0, parseFloat(document.getElementById('as-seo-score').value) || 0));
  const seoPos = Math.max(0, parseInt(document.getElementById('as-seo-pos').value, 10) || 0);
  const cited = document.getElementById('as-cited').value || 'Cited';

  if (!query) {
    document.getElementById('as-query').focus();
    return;
  }

  const data = {
    id: editId ? Number(editId) : Date.now(),
    query,
    intent,
    engine,
    aeoScore,
    seoScore,
    seoPos,
    cited
  };

  if (editId) {
    const idx = aeoSeoEntries.findIndex(e => e.id === Number(editId));
    if (idx !== -1) aeoSeoEntries[idx] = data;
  } else {
    aeoSeoEntries.push(data);
  }

  toggleAeoSeoForm(false);
  renderAeoSeoView();
}

function deleteAeoSeoEntry(id) {
  const entry = aeoSeoEntries.find(e => e.id === id);
  confirmDeleteAction(`Delete query "${entry?.query || 'this query'}"?`, () => {
    aeoSeoEntries = aeoSeoEntries.filter(e => e.id !== id);
    renderAeoSeoView();
  });
}

function drawAeoSeoChart(rows) {
  const card = document.getElementById('aeo-seo-chart-card');
  const canvas = document.getElementById('aeoSeoChart');
  if (!card || !canvas) return;
  if (rows.length === 0) {
    card.classList.add('hidden');
    return;
  }
  card.classList.remove('hidden');

  canvas._asMeta = { rows, hoverIdx: -1 };

  const renderChart = (hoverIdx = -1) => {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = rect.width || 680;
    const height = 200;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const padL = 40, padR = 16, padT = 14, padB = 30;
    const plotW = width - padL - padR;
    const plotH = height - padT - padB;
    const uiFont = '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif';

    canvas._asMeta.padL = padL;
    canvas._asMeta.padR = padR;
    canvas._asMeta.width = width;
    canvas._asMeta.plotW = plotW;

    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.fillStyle = '#94a3b8';
    ctx.font = `10px ${uiFont}`;
    [0, 50, 100].forEach(pct => {
      const y = padT + plotH - (pct / 100) * plotH;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(width - padR, y);
      ctx.stroke();
      ctx.fillText(`${pct}%`, 4, y + 3);
    });
    ctx.setLineDash([]);

    const n = rows.length;
    const groupW = plotW / Math.max(1, n);
    const barW = Math.min(18, Math.max(8, (groupW - 18) / 2));
    const pillR = Math.min(6, barW / 2);

    rows.forEach((r, idx) => {
      const colX = padL + idx * groupW;
      const centerX = colX + groupW / 2;
      const isHovered = idx === hoverIdx;

      if (isHovered) {
        ctx.fillStyle = 'rgba(241, 245, 249, 0.9)';
        ctx.beginPath();
        ctx.roundRect(colX + 4, padT, groupW - 8, plotH + 4, 6);
        ctx.fill();
      }

      const aH = (r.aeoScore / 100) * plotH;
      const sH = (r.seoScore / 100) * plotH;

      ctx.globalAlpha = hoverIdx !== -1 && !isHovered ? 0.55 : 1;
      if (aH > 0) {
        ctx.fillStyle = '#7c3aed';
        ctx.beginPath();
        ctx.roundRect(centerX - barW - 2, padT + plotH - aH, barW, aH, [pillR, pillR, pillR, pillR]);
        ctx.fill();
      }
      if (sH > 0) {
        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.roundRect(centerX + 2, padT + plotH - sH, barW, sH, [pillR, pillR, pillR, pillR]);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      ctx.fillStyle = isHovered ? '#0f172a' : '#64748b';
      ctx.font = `${isHovered ? '600 ' : ''}10px ${uiFont}`;
      ctx.textAlign = 'center';
      const lbl = r.query.length > 14 ? r.query.slice(0, 13) + '…' : r.query;
      ctx.fillText(lbl, centerX, height - 10);
      ctx.textAlign = 'left';
    });
  };

  canvas._asMeta.render = renderChart;
  renderChart(-1);

  if (!canvas._asBound) {
    canvas._asBound = true;
    canvas.style.cursor = 'pointer';
    canvas.addEventListener('mousemove', e => {
      const meta = canvas._asMeta;
      if (!meta || !meta.plotW || meta.rows.length === 0) return;
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      if (mx < meta.padL || mx > meta.width - meta.padR) {
        if (meta.hoverIdx !== -1) {
          meta.hoverIdx = -1;
          meta.render(-1);
        }
        hideChartTooltip();
        return;
      }
      const n = meta.rows.length;
      const idx = Math.min(n - 1, Math.max(0, Math.floor((mx - meta.padL) / (meta.plotW / n))));
      if (meta.hoverIdx !== idx) {
        meta.hoverIdx = idx;
        meta.render(idx);
      }
      const r = meta.rows[idx];
      showChartTooltip(
        e.clientX,
        e.clientY,
        `<div class="space-y-1">
          <div class="font-semibold text-white">${r.query}</div>
          <div class="flex items-center justify-between gap-3"><span class="flex items-center gap-1.5 text-slate-300"><span class="w-2 h-2 rounded-full bg-[#7c3aed]"></span>AEO (${r.engine})</span><span>${r.aeoScore}% (${r.cited})</span></div>
          <div class="flex items-center justify-between gap-3"><span class="flex items-center gap-1.5 text-slate-300"><span class="w-2 h-2 rounded-full bg-[#10b981]"></span>SEO</span><span>${r.seoScore}%${r.seoPos > 0 ? ` (#${r.seoPos})` : ''}</span></div>
        </div>`
      );
    });
    canvas.addEventListener('mouseleave', () => {
      const meta = canvas._asMeta;
      if (meta && meta.hoverIdx !== -1) {
        meta.hoverIdx = -1;
        meta.render(-1);
      }
      hideChartTooltip();
    });
  }
}

function renderAeoSeoView() {
  const sortedAeoSeo = [...aeoSeoEntries].sort((a, b) =>
    (Math.max(b.aeoScore || 0, b.seoScore || 0) - Math.max(a.aeoScore || 0, a.seoScore || 0)) ||
    (((b.aeoScore || 0) + (b.seoScore || 0)) - ((a.aeoScore || 0) + (a.seoScore || 0)))
  );
  drawAeoSeoChart(sortedAeoSeo);

  const count = sortedAeoSeo.length;
  document.getElementById('as-sum-count').textContent = String(count);
  const citedCount = sortedAeoSeo.filter(e => e.cited === 'Cited').length;
  document.getElementById('as-sum-cited').textContent = `${citedCount} cited in AI`;

  const avgAeo = count > 0 ? sortedAeoSeo.reduce((a, e) => a + e.aeoScore, 0) / count : 0;
  const avgSeo = count > 0 ? sortedAeoSeo.reduce((a, e) => a + e.seoScore, 0) / count : 0;
  document.getElementById('as-sum-aeo').textContent = `${avgAeo.toFixed(1)}%`;
  document.getElementById('as-sum-seo').textContent = `${avgSeo.toFixed(1)}%`;

  const ranked = sortedAeoSeo.filter(e => e.seoPos > 0);
  const avgRank = ranked.length > 0 ? ranked.reduce((a, e) => a + e.seoPos, 0) / ranked.length : 0;
  document.getElementById('as-sum-rank').textContent = avgRank > 0 ? `Avg. rank: #${avgRank.toFixed(1)}` : 'Avg. rank: —';

  const gap = avgAeo - avgSeo;
  document.getElementById('as-sum-gap').textContent = `${gap > 0 ? '+' : ''}${gap.toFixed(1)}%`;
  document.getElementById('as-sum-gap-sub').textContent =
    count === 0 ? 'Parity' : gap > 0 ? 'AEO leads SEO' : gap < 0 ? 'SEO leads AEO' : 'Parity';

  const emptyEl = document.getElementById('aeo-seo-empty-state');
  const tableWrap = document.getElementById('aeo-seo-table-wrapper');
  const tbody = document.getElementById('aeo-seo-table-body');
  if (count === 0) {
    emptyEl.classList.remove('hidden');
    tableWrap.classList.add('hidden');
    return;
  }
  emptyEl.classList.add('hidden');
  tableWrap.classList.remove('hidden');

  tbody.innerHTML = sortedAeoSeo.map(e => {
    const rowGap = e.aeoScore - e.seoScore;
    const statusCls = e.cited === 'Cited'
      ? 'bg-[#d1fae5] text-[#047857]'
      : e.cited === 'Mentioned'
        ? 'bg-[#fef3c7] text-[#b45309]'
        : 'bg-slate-100 text-slate-600';
    return `
      <tr class="group hover:bg-slate-50/80 transition-colors">
        <td class="py-3 px-4 font-semibold text-slate-900">${e.query}</td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200/70">${e.intent}</span>
        </td>
        <td class="py-3 px-4">
          <div class="flex items-center gap-2">
            <div class="w-16 h-1.5 rounded-full bg-[#ede9fe] overflow-hidden">
              <div class="h-full rounded-full bg-[#7c3aed]" style="width:${e.aeoScore}%"></div>
            </div>
            <span class="tabular-nums font-medium text-slate-800">${e.aeoScore}%</span>
            <span class="text-[10px] text-slate-400">${e.engine}</span>
          </div>
        </td>
        <td class="py-3 px-4">
          <div class="flex items-center gap-2">
            <div class="w-16 h-1.5 rounded-full bg-[#d1fae5] overflow-hidden">
              <div class="h-full rounded-full bg-[#10b981]" style="width:${e.seoScore}%"></div>
            </div>
            <span class="tabular-nums font-medium text-slate-800">${e.seoScore}%</span>
            ${e.seoPos > 0 ? `<span class="text-[10px] text-slate-400">#${e.seoPos}</span>` : ''}
          </div>
        </td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold ${statusCls}">${e.cited}</span>
        </td>
        <td class="py-3 px-4 text-right tabular-nums font-semibold ${rowGap >= 0 ? 'text-emerald-600' : 'text-rose-500'}">
          ${rowGap > 0 ? '+' : ''}${rowGap.toFixed(0)}%
        </td>
        <td class="py-3 px-4 text-right">
          ${renderActionMenuHtml(`toggleAeoSeoForm(true, ${e.id})`, `deleteAeoSeoEntry(${e.id})`)}
        </td>
      </tr>
    `;
  }).join('');
}

let reportsYear = '2026';
let reportsMetric = 'cost';
let reportsChannelMetric = 'cost';
let activeReportChannel = null;
let reportsMetricsByYear = {};

function ensureReportsChannelMetrics(year, channel) {
  if (!reportsMetricsByYear[year]) reportsMetricsByYear[year] = {};
  if (!reportsMetricsByYear[year][channel]) reportsMetricsByYear[year][channel] = {};
  CHANNEL_GOAL_DEFS.forEach(g => {
    if (!Array.isArray(reportsMetricsByYear[year][channel][g.key]) || reportsMetricsByYear[year][channel][g.key].length !== 12) {
      reportsMetricsByYear[year][channel][g.key] = Array(12).fill(0);
    }
  });
  return reportsMetricsByYear[year][channel];
}

function ensureReportsBudgetRow(year, channel) {
  if (!budgetData[year]) budgetData[year] = {};
  if (!budgetData[year][channel]) {
    budgetData[year][channel] = {
      planned: Array(12).fill(0),
      actual: Array(12).fill(0)
    };
  }
  return budgetData[year][channel];
}

function formatGoalValue(goalDef, val) {
  const num = Number(val) || 0;
  if (goalDef.format === 'pct') return `${num.toFixed(2)}%`;
  if (goalDef.format === 'dec') return `${num.toFixed(2)}x`;
  return Math.round(num).toLocaleString();
}

function aggregateChannelGoalValue(channelName, mRow, goalKey) {
  const def = getGoalDef(goalKey);
  const arr = (mRow && Array.isArray(mRow[goalKey])) ? mRow[goalKey] : Array(12).fill(0);
  if (def.agg === 'avg') {
    const nonZero = arr.filter(v => v > 0);
    return nonZero.length > 0 ? nonZero.reduce((a, b) => a + b, 0) / nonZero.length : 0;
  }
  let total = arr.reduce((a, b) => a + b, 0);
  if (goalKey === 'leads') {
    total += (leadEntries || []).filter(l => String(l.source || l.channel || '').toLowerCase() === channelName.toLowerCase()).length;
  }
  return total;
}

function handleReportsYearChange() {
  const sel = document.getElementById('reports-year-select');
  if (sel) requestYearChange(sel.value, sel);
}

let reportsViewMode = 'monthly';
let reportsSelectedMonth = new Date().getMonth();
let reportsCompareYear = '';

function handleReportsMetricChange() {
  const sel = document.getElementById('mr-chart-metric');
  if (sel) reportsMetric = sel.value || 'cost';
  renderMarketingReportsView();
}

function handleReportsViewModeChange() {
  const sel = document.getElementById('mr-view-mode');
  if (sel) reportsViewMode = sel.value || 'monthly';
  const mSel = document.getElementById('mr-month-select');
  if (mSel) mSel.classList.toggle('hidden', reportsViewMode !== 'month_channels');
  renderMarketingReportsView();
}

function handleReportsMonthChange() {
  const sel = document.getElementById('mr-month-select');
  if (sel) reportsSelectedMonth = parseInt(sel.value, 10) || 0;
  renderMarketingReportsView();
}

function handleReportsCompareYearChange() {
  const sel = document.getElementById('mr-compare-year');
  if (sel) reportsCompareYear = sel.value || '';
  renderMarketingReportsView();
}

function handleReportsChannelMetricChange() {
  const sel = document.getElementById('mr-ch-chart-metric');
  if (sel) reportsChannelMetric = sel.value || 'cost';
  renderMarketingReportsView();
}

function openChannelReportSubpage(channelName) {
  reportsYear = budgetYear || reportsYear || '2026';
  const sel = document.getElementById('reports-year-select');
  if (sel) sel.value = reportsYear;
  hideAllViews();
  activeReportChannel = channelName;
  document.getElementById('view-marketing-reports')?.classList.remove('hidden');
  renderMarketingReportsView();
  setActiveNavHighlight('side-app-marketing-reports');
  syncRouteUrl(`/marketing-reports/${slugifyRouteSegment(channelName)}`);
}

function openReportChannelDetail(channelName) {
  activeReportChannel = channelName;
  reportsChannelMetric = 'cost';
  renderMarketingReportsView();
  syncRouteUrl(`/marketing-reports/${slugifyRouteSegment(channelName)}`);
}

function closeReportChannelDetail() {
  activeReportChannel = null;
  renderMarketingReportsView();
  syncRouteUrl('/marketing-reports');
}

function updateReportChannelValue(channelName, monthIdx, field, rawVal) {
  const num = parseFloat(rawVal);
  const val = isNaN(num) || num < 0 ? 0 : num;
  if (field === 'planned' || field === 'actual') {
    const row = ensureReportsBudgetRow(reportsYear, channelName);
    row[field][monthIdx] = val;
  } else {
    const mRow = ensureReportsChannelMetrics(reportsYear, channelName);
    if (!Array.isArray(mRow[field])) mRow[field] = Array(12).fill(0);
    mRow[field][monthIdx] = val;
  }
  renderReportChannelDetail();
  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
}

function drawReportsBarChart(canvasId, mode, seriesA, seriesB = null, chartHeight = 220, opts = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const labels = Array.isArray(opts.labels) && opts.labels.length > 0 ? opts.labels : monthNames;
  const n = Math.max(1, labels.length);
  const colorA = opts.colorA || (mode === 'cost' ? '#10b981' : (getGoalDef(mode)?.color || '#0ea5e9'));
  const colorB = opts.colorB || (mode === 'cost' ? '#7c3aed' : '#94a3b8');
  const seriesALabel = opts.seriesALabel || (mode === 'cost' ? 'Planned' : (getGoalDef(mode)?.label || mode));
  const seriesBLabel = opts.seriesBLabel || (mode === 'cost' ? 'Actual' : 'Compare');
  canvas._barMeta = { mode, seriesA, seriesB, chartHeight, labels, colorA, colorB, seriesALabel, seriesBLabel, hoverIdx: -1 };

  const isCurrencyMode = mode === 'cost' || mode === 'pipeline' || mode === 'cpl';
  const goalDef = (mode === 'cost' || mode === 'pipeline' || mode === 'cpl') ? null : getGoalDef(mode);

  const renderBars = (hoverIdx = -1) => {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(320, Math.floor(rect.width || 680));
    const height = chartHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = '100%';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const allVals = seriesB ? [...seriesA, ...seriesB] : [...seriesA];
    const minPeak = goalDef ? (goalDef.format === 'pct' || goalDef.format === 'dec' ? 5 : 10) : 100;
    const maxVal = Math.max(minPeak, ...allVals) * 1.15;
    const padL = 52, padR = 14, padT = 14, padB = 30;
    const plotW = width - padL - padR;
    const plotH = height - padT - padB;
    const uiFont = '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif';

    canvas._barMeta.padL = padL;
    canvas._barMeta.padR = padR;
    canvas._barMeta.width = width;
    canvas._barMeta.plotW = plotW;

    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.fillStyle = '#94a3b8';
    ctx.font = `10px ${uiFont}`;
    [0, 0.5, 1].forEach(frac => {
      const val = maxVal * frac;
      const y = padT + plotH - frac * plotH;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(width - padR, y);
      ctx.stroke();
      let label = '';
      if (goalDef?.format === 'pct') label = val.toFixed(1) + '%';
      else if (goalDef?.format === 'dec') label = val.toFixed(1) + 'x';
      else label = val >= 1000 ? Math.round(val / 1000) + 'k' : String(Math.round(val));
      ctx.fillText(label, 4, y + 3);
    });
    ctx.setLineDash([]);

    const groupW = plotW / n;
    const isDual = Boolean(seriesB);
    const barW = isDual
      ? Math.min(18, Math.max(5, (groupW - 12) / 2))
      : Math.min(28, Math.max(8, groupW - 16));
    const pillR = Math.min(6, barW / 2);

    labels.forEach((mLbl, idx) => {
      const colX = padL + idx * groupW;
      const centerX = colX + groupW / 2;
      const isHovered = idx === hoverIdx;

      if (isHovered) {
        ctx.fillStyle = 'rgba(241, 245, 249, 0.9)';
        ctx.beginPath();
        ctx.roundRect(colX + 2, padT, Math.max(4, groupW - 4), plotH + 4, 6);
        ctx.fill();
      }

      ctx.globalAlpha = hoverIdx !== -1 && !isHovered ? 0.55 : 1;
      if (isDual) {
        const pH = ((seriesA[idx] || 0) / maxVal) * plotH;
        const aH = ((seriesB[idx] || 0) / maxVal) * plotH;
        if (pH > 0) {
          ctx.fillStyle = colorA;
          ctx.beginPath();
          ctx.roundRect(centerX - barW - 1.5, padT + plotH - pH, barW, pH, [pillR, pillR, pillR, pillR]);
          ctx.fill();
        }
        if (aH > 0) {
          ctx.fillStyle = colorB;
          ctx.beginPath();
          ctx.roundRect(centerX + 1.5, padT + plotH - aH, barW, aH, [pillR, pillR, pillR, pillR]);
          ctx.fill();
        }
      } else {
        const h = ((seriesA[idx] || 0) / maxVal) * plotH;
        if (h > 0) {
          ctx.fillStyle = colorA;
          ctx.beginPath();
          ctx.roundRect(centerX - barW / 2, padT + plotH - h, barW, h, [pillR, pillR, pillR, pillR]);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      ctx.fillStyle = isHovered ? '#0f172a' : '#64748b';
      ctx.font = `${isHovered ? '600' : '400'} 10px ${uiFont}`;
      ctx.textAlign = 'center';
      const shortLbl = String(mLbl).length > 12 ? String(mLbl).slice(0, 11) + '…' : String(mLbl);
      ctx.fillText(shortLbl, centerX, height - 8);
      ctx.textAlign = 'left';
    });
  };

  canvas._renderBars = renderBars;
  renderBars(-1);

  if (!canvas._hasHoverListeners) {
    canvas._hasHoverListeners = true;
    canvas.addEventListener('mousemove', e => {
      const meta = canvas._barMeta;
      if (!meta || !meta.plotW || !meta.labels?.length) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const count = meta.labels.length;
      const groupW = meta.plotW / count;
      const idx = Math.floor((x - meta.padL) / groupW);
      if (idx < 0 || idx >= count) {
        if (meta.hoverIdx !== -1) {
          meta.hoverIdx = -1;
          canvas._renderBars?.(-1);
        }
        hideChartTooltip();
        return;
      }
      if (meta.hoverIdx !== idx) {
        meta.hoverIdx = idx;
        canvas._renderBars?.(idx);
      }
      const vA = meta.seriesA[idx] || 0;
      const vB = meta.seriesB ? (meta.seriesB[idx] || 0) : 0;
      const fmtVal = v => {
        if (meta.mode === 'cost' || meta.mode === 'pipeline' || meta.mode === 'cpl') return `${Math.round(v).toLocaleString()} NOK`;
        const gDef = getGoalDef(meta.mode);
        return gDef ? formatGoalValue(gDef, v) : String(Math.round(v));
      };
      let html = `<div class="font-semibold text-white mb-1">${meta.labels[idx]}</div>`;
      html += `<div class="flex items-center justify-between gap-4"><span style="color:${meta.colorA}">${meta.seriesALabel}</span><span class="tabular-nums font-medium">${fmtVal(vA)}</span></div>`;
      if (meta.seriesB) {
        html += `<div class="flex items-center justify-between gap-4"><span style="color:${meta.colorB}">${meta.seriesBLabel}</span><span class="tabular-nums font-medium">${fmtVal(vB)}</span></div>`;
      }
      showChartTooltip(e.clientX, e.clientY, html);
    });
    canvas.addEventListener('mouseleave', () => {
      if (canvas._barMeta && canvas._barMeta.hoverIdx !== -1) {
        canvas._barMeta.hoverIdx = -1;
        canvas._renderBars?.(-1);
      }
      hideChartTooltip();
    });
  }
}

function renderReportChannelDetail() {
  if (!activeReportChannel) return;
  const channelName = activeReportChannel;
  const chObj = channelsList.find(c => c.name.toLowerCase() === channelName.toLowerCase());
  const color = getChannelColor(channelName, 0);
  const goals = getChannelGoals(channelName);
  const measuredKeys = getChannelMeasuredGoalKeys(channelName);

  document.getElementById('mr-crumb-sep')?.classList.remove('hidden');
  const crumbCh = document.getElementById('mr-crumb-channel');
  if (crumbCh) {
    crumbCh.textContent = channelName;
    crumbCh.classList.remove('hidden');
  }
  document.getElementById('mr-back-btn')?.classList.remove('hidden');

  const dotEl = document.getElementById('mr-ch-dot');
  if (dotEl) dotEl.style.background = color;
  document.getElementById('mr-ch-title').textContent = channelName;
  const primaryDef = getGoalDef(goals.primary);
  document.getElementById('mr-ch-subtitle').textContent = `${chObj?.type || 'Channel'} · Main goal: ${primaryDef.label}${goals.secondary.length ? ` · Secondary: ${goals.secondary.map(k => getGoalDef(k).label).join(', ')}` : ''}`;
  document.getElementById('mr-ch-chart-year').textContent = reportsYear;
  document.getElementById('mr-ch-table-year').textContent = reportsYear;

  const metricSel = document.getElementById('mr-ch-chart-metric');
  if (metricSel) {
    const validMetrics = ['cost', ...measuredKeys];
    if (!validMetrics.includes(reportsChannelMetric)) {
      reportsChannelMetric = 'cost';
    }
    metricSel.innerHTML = [
      `<option value="cost" ${reportsChannelMetric === 'cost' ? 'selected' : ''}>Cost (NOK)</option>`,
      ...measuredKeys.map(k => {
        const gd = getGoalDef(k);
        const tag = k === goals.primary ? ' (Main)' : '';
        return `<option value="${k}" ${reportsChannelMetric === k ? 'selected' : ''}>${gd.label}${tag}</option>`;
      })
    ].join('');
  }

  const row = (budgetData[reportsYear] && budgetData[reportsYear][channelName]) || {
    planned: Array(12).fill(0),
    actual: Array(12).fill(0)
  };
  const mRow = ensureReportsChannelMetrics(reportsYear, channelName);

  const chartLegend = document.getElementById('mr-ch-chart-legend');
  const chartTitle = document.getElementById('mr-ch-chart-title');
  if (reportsChannelMetric === 'cost') {
    if (chartTitle) chartTitle.textContent = `${channelName} Cost (NOK)`;
    if (chartLegend) {
      chartLegend.innerHTML = `
        <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-[#10b981] inline-block"></span><span>Planned</span></span>
        <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-[#7c3aed] inline-block"></span><span>Actual</span></span>
      `;
    }
    drawReportsBarChart('mrChannelChart', 'cost', row.planned, row.actual, 200);
  } else {
    const gd = getGoalDef(reportsChannelMetric);
    if (chartTitle) chartTitle.textContent = `${channelName} ${gd.label}`;
    if (chartLegend) chartLegend.innerHTML = `<span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full inline-block" style="background:${gd.color}"></span><span>${gd.label}</span></span>`;
    drawReportsBarChart('mrChannelChart', gd.key, mRow[gd.key] || Array(12).fill(0), null, 200);
  }

  const escCh = channelName.replace(/'/g, "\\'");
  const thead = document.getElementById('mr-ch-table-head');
  if (thead) {
    thead.innerHTML = `
      <tr class="border-b border-slate-200/80 bg-[#fbfcfd] text-slate-500">
        <th class="py-3 px-4 font-medium">Month</th>
        <th class="py-3 px-4 font-medium text-right">Planned (NOK)</th>
        <th class="py-3 px-4 font-medium text-right">Actual Cost (NOK)</th>
        ${measuredKeys.map(k => {
          const gd = getGoalDef(k);
          const badge = k === goals.primary
            ? '<span class="ml-1 px-1.5 py-0.5 rounded bg-slate-900 text-white text-[9px] font-semibold">Main</span>'
            : '<span class="ml-1 px-1.5 py-0.5 rounded bg-slate-200/80 text-slate-600 text-[9px] font-medium">2nd</span>';
          return `<th class="py-3 px-4 font-medium text-right whitespace-nowrap">${gd.label}${badge}</th>`;
        }).join('')}
      </tr>
    `;
  }

  const tbody = document.getElementById('mr-ch-table-body');
  if (!tbody) return;

  const totalPlanned = row.planned.reduce((a, b) => a + b, 0);
  const totalActual = row.actual.reduce((a, b) => a + b, 0);

  const rowsHtml = monthNames.map((mName, mIdx) => `
    <tr class="hover:bg-slate-50/70 transition-colors">
      <td class="py-2.5 px-4 font-medium text-slate-900 whitespace-nowrap">${mName} ${reportsYear}</td>
      <td class="py-2 px-4 text-right tabular-nums">
        <input type="number" min="0" step="any" value="${row.planned[mIdx] || ''}" placeholder="0" onchange="updateReportChannelValue('${escCh}', ${mIdx}, 'planned', this.value)" class="w-24 text-right bg-white border border-slate-200 rounded-md px-2 py-1 text-xs font-medium text-slate-900 focus:outline-none focus:border-slate-400 tabular-nums" />
      </td>
      <td class="py-2 px-4 text-right tabular-nums">
        <input type="number" min="0" step="any" value="${row.actual[mIdx] || ''}" placeholder="0" onchange="updateReportChannelValue('${escCh}', ${mIdx}, 'actual', this.value)" class="w-24 text-right bg-white border border-slate-200 rounded-md px-2 py-1 text-xs font-medium text-slate-900 focus:outline-none focus:border-slate-400 tabular-nums" />
      </td>
      ${measuredKeys.map(k => {
        const gd = getGoalDef(k);
        const val = (mRow[k] && mRow[k][mIdx]) || '';
        return `
          <td class="py-2 px-4 text-right tabular-nums">
            <input type="number" min="0" step="${gd.step}" value="${val}" placeholder="0" onchange="updateReportChannelValue('${escCh}', ${mIdx}, '${k}', this.value)" class="w-20 text-right bg-white border border-slate-200 rounded-md px-2 py-1 text-xs font-medium text-slate-900 focus:outline-none focus:border-slate-400 tabular-nums" />
          </td>
        `;
      }).join('')}
    </tr>
  `).join('');

  const totalRowHtml = `
    <tr class="bg-[#fbfcfd] font-semibold text-slate-900 border-t border-slate-200">
      <td class="py-3 px-4">Total / Avg</td>
      <td class="py-3 px-4 text-right tabular-nums">${Math.round(totalPlanned).toLocaleString()} NOK</td>
      <td class="py-3 px-4 text-right tabular-nums">${Math.round(totalActual).toLocaleString()} NOK</td>
      ${measuredKeys.map(k => {
        const gd = getGoalDef(k);
        const aggVal = aggregateChannelGoalValue(channelName, mRow, k);
        return `<td class="py-3 px-4 text-right tabular-nums">${formatGoalValue(gd, aggVal)}</td>`;
      }).join('')}
    </tr>
  `;

  tbody.innerHTML = rowsHtml + totalRowHtml;
}

function computeReportsYearDataset(yr) {
  const yearObj = budgetData[yr] || {};
  const metricsYearObj = reportsMetricsByYear[yr] || {};
  const knownNames = getChannelNames();
  const budgetNames = Object.keys(yearObj);
  const allChannelNames = [...knownNames];
  budgetNames.forEach(name => {
    if (!allChannelNames.some(n => n.toLowerCase() === name.toLowerCase())) {
      allChannelNames.push(name);
    }
  });

  const monthlyPlanned = Array(12).fill(0);
  const monthlyActual = Array(12).fill(0);
  const monthlyPipeline = Array(12).fill(0);
  const monthlyMetricSum = {};
  const monthlyMetricCount = {};
  CHANNEL_GOAL_DEFS.forEach(g => {
    monthlyMetricSum[g.key] = Array(12).fill(0);
    monthlyMetricCount[g.key] = Array(12).fill(0);
  });

  const byChannel = {};
  let totalPlanned = 0;
  let totalActual = 0;

  allChannelNames.forEach(name => {
    const row = yearObj[name];
    const mRow = metricsYearObj[name];
    const chPlannedArr = Array(12).fill(0);
    const chActualArr = Array(12).fill(0);
    const chLeadsArr = Array(12).fill(0);
    const chPipelineArr = Array(12).fill(0);

    if (row) {
      for (let m = 0; m < 12; m++) {
        const p = row.planned[m] || 0;
        const a = row.actual[m] || 0;
        chPlannedArr[m] = p;
        chActualArr[m] = a;
        monthlyPlanned[m] += p;
        monthlyActual[m] += a;
        totalPlanned += p;
        totalActual += a;
      }
    }
    if (mRow) {
      CHANNEL_GOAL_DEFS.forEach(g => {
        const arr = mRow[g.key];
        if (!Array.isArray(arr)) return;
        for (let m = 0; m < 12; m++) {
          const val = arr[m] || 0;
          monthlyMetricSum[g.key][m] += val;
          if (val > 0) monthlyMetricCount[g.key][m] += 1;
          if (g.key === 'leads') chLeadsArr[m] += val;
        }
      });
    }
    byChannel[name] = { planned: chPlannedArr, actual: chActualArr, leads: chLeadsArr, pipeline: chPipelineArr, mRow };
  });

  let connectedLeadCount = 0;
  let connectedPipelineVal = 0;
  const leadsByChannelCount = {};
  const pipelineByChannelVal = {};

  (leadEntries || []).forEach(l => {
    const d = l.createdAt ? new Date(l.createdAt) : null;
    const hasValidDate = d && !isNaN(d.getTime());
    const matchesYear = hasValidDate ? String(d.getFullYear()) === String(yr) : String(yr) === String(budgetYear);
    if (!matchesYear) return;

    const mIdx = hasValidDate ? d.getMonth() : new Date().getMonth();
    const chName = l.channel || '';
    const val = l.value || 0;
    connectedLeadCount += 1;
    connectedPipelineVal += val;
    monthlyMetricSum.leads[mIdx] += 1;
    monthlyPipeline[mIdx] += val;

    if (chName) {
      leadsByChannelCount[chName] = (leadsByChannelCount[chName] || 0) + 1;
      pipelineByChannelVal[chName] = (pipelineByChannelVal[chName] || 0) + val;
      if (byChannel[chName]) {
        byChannel[chName].leads[mIdx] += 1;
        byChannel[chName].pipeline[mIdx] += val;
      }
    }
  });

  const totalLeadsSum = Math.max(
    connectedLeadCount,
    monthlyMetricSum.leads.reduce((a, b) => a + b, 0)
  );

  return {
    allChannelNames,
    yearObj,
    metricsYearObj,
    monthlyPlanned,
    monthlyActual,
    monthlyPipeline,
    monthlyMetricSum,
    monthlyMetricCount,
    byChannel,
    totalPlanned,
    totalActual,
    totalLeads: totalLeadsSum,
    totalPipeline: connectedPipelineVal,
    leadsByChannelCount,
    pipelineByChannelVal
  };
}

function getMetricSeries12(ds, metric) {
  if (metric === 'cost') return ds.monthlyActual;
  if (metric === 'pipeline') return ds.monthlyPipeline;
  if (metric === 'cpl') {
    return ds.monthlyActual.map((act, m) => {
      const lds = ds.monthlyMetricSum.leads[m] || 0;
      return lds > 0 ? act / lds : 0;
    });
  }
  const gd = getGoalDef(metric);
  if (gd.agg === 'avg') {
    return ds.monthlyMetricSum[gd.key].map((sum, m) => (ds.monthlyMetricCount[gd.key][m] > 0 ? sum / ds.monthlyMetricCount[gd.key][m] : 0));
  }
  return ds.monthlyMetricSum[gd.key] || Array(12).fill(0);
}

function getChannelMetricValue(ds, chName, metric, monthIdx = null) {
  const chData = ds.byChannel[chName];
  if (!chData) return 0;
  const pick = arr => (monthIdx !== null ? (arr[monthIdx] || 0) : arr.reduce((a, b) => a + b, 0));
  if (metric === 'cost') return pick(chData.actual);
  if (metric === 'pipeline') return pick(chData.pipeline);
  if (metric === 'leads') return pick(chData.leads);
  if (metric === 'cpl') {
    const act = pick(chData.actual);
    const lds = pick(chData.leads);
    return lds > 0 ? act / lds : 0;
  }
  const gd = getGoalDef(metric);
  const arr = (chData.mRow && chData.mRow[gd.key]) || Array(12).fill(0);
  if (monthIdx !== null) return arr[monthIdx] || 0;
  return aggregateChannelGoalValue(chName, chData.mRow, gd.key);
}

function renderMarketingReportsView() {
  const sel = document.getElementById('reports-year-select');
  if (sel && sel.value !== reportsYear) {
    reportsYear = sel.value || budgetYear || '2026';
  }
  const metricSel = document.getElementById('mr-chart-metric');
  if (metricSel && metricSel.value !== reportsMetric) metricSel.value = reportsMetric;
  const viewSel = document.getElementById('mr-view-mode');
  if (viewSel && viewSel.value !== reportsViewMode) viewSel.value = reportsViewMode;
  const mSel = document.getElementById('mr-month-select');
  if (mSel) {
    mSel.value = String(reportsSelectedMonth);
    mSel.classList.toggle('hidden', reportsViewMode !== 'month_channels');
  }
  const cmpSel = document.getElementById('mr-compare-year');
  if (cmpSel && cmpSel.value !== reportsCompareYear) cmpSel.value = reportsCompareYear;

  const overviewEl = document.getElementById('mr-overview');
  const detailEl = document.getElementById('mr-channel-detail');
  if (activeReportChannel) {
    overviewEl?.classList.add('hidden');
    detailEl?.classList.remove('hidden');
    renderReportChannelDetail();
    return;
  }

  detailEl?.classList.add('hidden');
  overviewEl?.classList.remove('hidden');
  document.getElementById('mr-crumb-sep')?.classList.add('hidden');
  document.getElementById('mr-crumb-channel')?.classList.add('hidden');
  document.getElementById('mr-back-btn')?.classList.add('hidden');

  const ds = computeReportsYearDataset(reportsYear);
  const compareActive = Boolean(reportsCompareYear && reportsCompareYear !== reportsYear);
  const cmpDs = compareActive ? computeReportsYearDataset(reportsCompareYear) : null;

  // Update connected KPI strip
  const utilPct = ds.totalPlanned > 0 ? ((ds.totalActual / ds.totalPlanned) * 100).toFixed(1) : '0.0';
  const cpl = ds.totalLeads > 0 ? Math.round(ds.totalActual / ds.totalLeads) : 0;
  const kPlan = document.getElementById('mr-kpi-planned');
  const kPlanSub = document.getElementById('mr-kpi-planned-sub');
  const kAct = document.getElementById('mr-kpi-actual');
  const kActSub = document.getElementById('mr-kpi-actual-sub');
  const kLeads = document.getElementById('mr-kpi-leads');
  const kLeadsSub = document.getElementById('mr-kpi-leads-sub');
  const kPipe = document.getElementById('mr-kpi-pipeline');
  const kPipeSub = document.getElementById('mr-kpi-pipeline-sub');

  if (kPlan) kPlan.textContent = `${Math.round(ds.totalPlanned).toLocaleString()} NOK`;
  if (kPlanSub) kPlanSub.textContent = `Year ${reportsYear} · ${ds.allChannelNames.length} channels`;
  if (kAct) kAct.textContent = `${Math.round(ds.totalActual).toLocaleString()} NOK`;
  if (kActSub) kActSub.textContent = `${utilPct}% of planned budget`;
  if (kLeads) kLeads.textContent = String(ds.totalLeads);
  if (kLeadsSub) kLeadsSub.textContent = ds.totalLeads > 0 && ds.totalActual > 0 ? `CPL: ${cpl.toLocaleString()} NOK` : `Connected with Leads`;
  if (kPipe) kPipe.textContent = `${Math.round(ds.totalPipeline).toLocaleString()} NOK`;
  if (kPipeSub) kPipeSub.textContent = `${integrationsList.length} integration${integrationsList.length === 1 ? '' : 's'} active`;

  document.getElementById('mr-chart-year').textContent = compareActive ? `${reportsYear} vs ${reportsCompareYear}` : reportsYear;
  const subtitleEl = document.getElementById('mr-chart-subtitle');
  const legendEl = document.getElementById('mr-chart-legend');

  const metricLabelMap = {
    cost: 'Cost (NOK)',
    pipeline: 'Pipeline Value (NOK)',
    cpl: 'CPL (NOK / Lead)'
  };
  const metricLabel = metricLabelMap[reportsMetric] || getGoalDef(reportsMetric)?.label || reportsMetric;
  const gd = (reportsMetric === 'cost' || reportsMetric === 'pipeline' || reportsMetric === 'cpl') ? null : getGoalDef(reportsMetric);
  const primaryColor = gd ? gd.color : (reportsMetric === 'pipeline' ? '#10b981' : '#7c3aed');

  let labels = monthNames;
  let seriesA = [];
  let seriesB = null;
  let chartOpts = { labels };

  if (reportsViewMode === 'monthly') {
    labels = monthNames;
    if (compareActive) {
      seriesA = getMetricSeries12(ds, reportsMetric);
      seriesB = getMetricSeries12(cmpDs, reportsMetric);
      chartOpts = { labels, seriesALabel: `${reportsYear} ${metricLabel}`, seriesBLabel: `${reportsCompareYear} ${metricLabel}`, colorA: primaryColor, colorB: '#94a3b8' };
      if (subtitleEl) subtitleEl.textContent = `Monthly ${metricLabel} comparison (${reportsYear} vs ${reportsCompareYear})`;
    } else if (reportsMetric === 'cost') {
      seriesA = ds.monthlyPlanned;
      seriesB = ds.monthlyActual;
      chartOpts = { labels, seriesALabel: 'Planned', seriesBLabel: 'Actual', colorA: '#10b981', colorB: '#7c3aed' };
      if (subtitleEl) subtitleEl.textContent = 'Monthly planned budget vs. actual spend across all channels';
    } else {
      seriesA = getMetricSeries12(ds, reportsMetric);
      chartOpts = { labels, seriesALabel: metricLabel, colorA: primaryColor };
      if (subtitleEl) subtitleEl.textContent = `Monthly ${metricLabel} across all channels`;
    }
  } else if (reportsViewMode === 'quarterly') {
    labels = ['Q1', 'Q2', 'Q3', 'Q4'];
    const toQ = arr12 => [0, 1, 2, 3].map(q => {
      const slice = arr12.slice(q * 3, q * 3 + 3);
      return gd?.agg === 'avg' ? (slice.filter(v => v > 0).reduce((a, b) => a + b, 0) / Math.max(1, slice.filter(v => v > 0).length)) : slice.reduce((a, b) => a + b, 0);
    });
    if (compareActive) {
      seriesA = toQ(getMetricSeries12(ds, reportsMetric));
      seriesB = toQ(getMetricSeries12(cmpDs, reportsMetric));
      chartOpts = { labels, seriesALabel: `${reportsYear} ${metricLabel}`, seriesBLabel: `${reportsCompareYear} ${metricLabel}`, colorA: primaryColor, colorB: '#94a3b8' };
      if (subtitleEl) subtitleEl.textContent = `Quarterly ${metricLabel} (${reportsYear} vs ${reportsCompareYear})`;
    } else if (reportsMetric === 'cost') {
      seriesA = toQ(ds.monthlyPlanned);
      seriesB = toQ(ds.monthlyActual);
      chartOpts = { labels, seriesALabel: 'Planned', seriesBLabel: 'Actual', colorA: '#10b981', colorB: '#7c3aed' };
      if (subtitleEl) subtitleEl.textContent = 'Quarterly planned budget vs. actual spend';
    } else {
      seriesA = toQ(getMetricSeries12(ds, reportsMetric));
      chartOpts = { labels, seriesALabel: metricLabel, colorA: primaryColor };
      if (subtitleEl) subtitleEl.textContent = `Quarterly ${metricLabel}`;
    }
  } else {
    const isSingleMonth = reportsViewMode === 'month_channels';
    const mIdx = isSingleMonth ? reportsSelectedMonth : null;
    const rawChannels = ds.allChannelNames.length > 0 ? ds.allChannelNames : [];
    const items = rawChannels.map(ch => {
      if (compareActive) {
        const a = getChannelMetricValue(ds, ch, reportsMetric, mIdx);
        const b = getChannelMetricValue(cmpDs, ch, reportsMetric, mIdx);
        return { ch, a, b, score: Math.max(a, b) };
      } else if (reportsMetric === 'cost') {
        const a = ds.byChannel[ch] ? (mIdx !== null ? ds.byChannel[ch].planned[mIdx] : ds.byChannel[ch].planned.reduce((x, y) => x + y, 0)) : 0;
        const b = ds.byChannel[ch] ? (mIdx !== null ? ds.byChannel[ch].actual[mIdx] : ds.byChannel[ch].actual.reduce((x, y) => x + y, 0)) : 0;
        return { ch, a, b, score: Math.max(b, a) };
      } else {
        const a = getChannelMetricValue(ds, ch, reportsMetric, mIdx);
        return { ch, a, b: null, score: a };
      }
    }).sort((x, y) => y.score - x.score);

    labels = items.length > 0 ? items.map(i => i.ch) : ['No Channels'];
    if (compareActive) {
      seriesA = items.length > 0 ? items.map(i => i.a) : [0];
      seriesB = items.length > 0 ? items.map(i => i.b) : [0];
      chartOpts = { labels, seriesALabel: `${reportsYear}`, seriesBLabel: `${reportsCompareYear}`, colorA: primaryColor, colorB: '#94a3b8' };
      if (subtitleEl) subtitleEl.textContent = `${isSingleMonth ? monthNames[mIdx] + ' ' : 'Full-year '}${metricLabel} by channel (${reportsYear} vs ${reportsCompareYear})`;
    } else if (reportsMetric === 'cost') {
      seriesA = items.length > 0 ? items.map(i => i.a) : [0];
      seriesB = items.length > 0 ? items.map(i => i.b) : [0];
      chartOpts = { labels, seriesALabel: 'Planned', seriesBLabel: 'Actual', colorA: '#10b981', colorB: '#7c3aed' };
      if (subtitleEl) subtitleEl.textContent = `${isSingleMonth ? monthNames[mIdx] + ' ' : 'Full-year '}planned vs. actual spend by channel`;
    } else {
      seriesA = items.length > 0 ? items.map(i => i.a) : [0];
      chartOpts = { labels, seriesALabel: metricLabel, colorA: primaryColor };
      if (subtitleEl) subtitleEl.textContent = `${isSingleMonth ? monthNames[mIdx] + ' ' : 'Full-year '}${metricLabel} by channel`;
    }
  }

  if (legendEl) {
    legendEl.innerHTML = seriesB
      ? `<span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full inline-block" style="background:${chartOpts.colorA}"></span><span>${chartOpts.seriesALabel}</span></span>
         <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full inline-block" style="background:${chartOpts.colorB}"></span><span>${chartOpts.seriesBLabel}</span></span>`
      : `<span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full inline-block" style="background:${chartOpts.colorA}"></span><span>${chartOpts.seriesALabel}</span></span>`;
  }

  const hasChartData = seriesA.some(v => v > 0) || (seriesB ? seriesB.some(v => v > 0) : false);
  drawReportsBarChart('marketingReportsChart', reportsMetric, seriesA, seriesB, 220, chartOpts);
  document.getElementById('mr-chart-empty-note')?.classList.toggle('hidden', hasChartData);

  const { allChannelNames, yearObj, metricsYearObj, totalPlanned } = ds;

  const cardsContainer = document.getElementById('marketing-reports-channel-cards');
  if (!cardsContainer) return;

  if (allChannelNames.length === 0) {
    cardsContainer.innerHTML = `<div class="col-span-full p-8 rounded-2xl border border-dashed border-slate-200 bg-[#fbfcfd] text-center text-xs text-slate-500">No channels configured yet. Add channels in Channels or Budget to see cards here.</div>`;
    return;
  }

  const shareDenom = Math.max(1, totalPlanned);
  const sortedReportChannels = [...allChannelNames].sort((a, b) => {
    const aRow = yearObj[a], bRow = yearObj[b];
    const aAct = aRow ? aRow.actual.reduce((x, y) => x + y, 0) : 0;
    const bAct = bRow ? bRow.actual.reduce((x, y) => x + y, 0) : 0;
    if (bAct !== aAct) return bAct - aAct;
    const aPlan = aRow ? aRow.planned.reduce((x, y) => x + y, 0) : 0;
    const bPlan = bRow ? bRow.planned.reduce((x, y) => x + y, 0) : 0;
    return bPlan - aPlan;
  });
  cardsContainer.innerHTML = sortedReportChannels.map((name, idx) => {
    const chObj = channelsList.find(c => c.name.toLowerCase() === name.toLowerCase());
    const color = getChannelColor(name, idx);
    const typeLabel = chObj?.type || 'Channel';
    const row = yearObj[name];
    const mRow = metricsYearObj[name];
    const chPlanned = row ? row.planned.reduce((a, b) => a + b, 0) : 0;
    const chActual = row ? row.actual.reduce((a, b) => a + b, 0) : 0;
    const sharePct = totalPlanned > 0 ? ((chPlanned / shareDenom) * 100).toFixed(1) : '0.0';
    const chUtilPct = chPlanned > 0 ? Math.min(100, (chActual / chPlanned) * 100) : 0;
    const escName = name.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

    const goals = getChannelGoals(name);
    const measuredKeys = getChannelMeasuredGoalKeys(name).slice(0, 2);
    const goalCellsHtml = measuredKeys.map(k => {
      const gd = getGoalDef(k);
      const val = aggregateChannelGoalValue(name, mRow, k);
      const isMain = k === goals.primary;
      return `
        <div>
          <div class="text-[10px] ${isMain ? 'text-slate-700 font-semibold' : 'text-slate-400'} truncate">${gd.label}${isMain ? ' ★' : ''}</div>
          <div class="text-xs font-semibold tabular-nums text-slate-900">${formatGoalValue(gd, val)}</div>
        </div>
      `;
    }).join('');

    return `
      <div onclick="openReportChannelDetail('${escName}')" class="cursor-pointer rounded-2xl border border-slate-200/80 bg-white p-5 card-shadow flex flex-col justify-between gap-4 hover:border-slate-300 hover:shadow-md transition-all">
        <div class="flex items-start justify-between gap-2">
          <div class="flex items-center gap-2.5 min-w-0">
            ${renderChannelIconHtml(name, 'w-7 h-7', color)}
            <div class="min-w-0">
              <h4 class="text-sm font-semibold text-slate-900 truncate">${name}</h4>
              <div class="text-[11px] text-slate-400">${typeLabel}</div>
            </div>
          </div>
          <span class="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 tabular-nums shrink-0">${sharePct}% share</span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-100">
          <div>
            <div class="text-[10px] text-slate-400">Planned</div>
            <div class="text-xs font-semibold tabular-nums text-slate-900">${Math.round(chPlanned).toLocaleString()}</div>
          </div>
          <div>
            <div class="text-[10px] text-slate-400">Actual</div>
            <div class="text-xs font-semibold tabular-nums text-slate-900">${Math.round(chActual).toLocaleString()}</div>
          </div>
          ${goalCellsHtml}
        </div>

        <div class="space-y-1.5">
          <div class="flex items-center justify-between text-[11px] text-slate-500">
            <span>Spend vs. Planned</span>
            <span class="tabular-nums font-medium text-slate-700">${chPlanned > 0 ? ((chActual / chPlanned) * 100).toFixed(0) : 0}%</span>
          </div>
          <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div class="h-full rounded-full transition-all duration-300" style="width:${chUtilPct}%; background:${color}"></div>
          </div>
        </div>

        <div class="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px]">
          <span class="text-slate-400">${reportsYear} · NOK</span>
          <span class="font-medium text-slate-700">Open &amp; add data →</span>
        </div>
      </div>
    `;
  }).join('');
}

window.addEventListener('resize', () => {
  if (!document.getElementById('view-channels')?.classList.contains('hidden')) renderChannelsView();
  if (!document.getElementById('view-leads')?.classList.contains('hidden')) renderLeadsView();
  if (!document.getElementById('view-competitors')?.classList.contains('hidden')) renderCompetitorsView();
  if (!document.getElementById('view-aeo-seo')?.classList.contains('hidden')) renderAeoSeoView();
  if (!document.getElementById('view-marketing-reports')?.classList.contains('hidden')) renderMarketingReportsView();
  if (budgetSubView === 'summary' && Object.keys(budgetData[budgetYear] || {}).length > 0) renderBudgetView();
});

const AUTH_USERNAME = 'marcus.saltvik@bxsoftware.no';
const AUTH_PASSWORD = 'SvenToreBowling123@';
const AUTH_STORAGE_KEY = 'modu_auth_session';
let isAuthenticated = false;
let authMode = 'signin';
let currentAuthUser = null;
let authStateListenerRegistered = false;

function initSupabaseClient() {
  if (supabaseClient) return supabaseClient;
  const cfg = window.__MODU_SUPABASE__;
  if (cfg && cfg.url && cfg.anonKey && window.supabase && typeof window.supabase.createClient === 'function') {
    try {
      supabaseClient = window.supabase.createClient(cfg.url, cfg.anonKey);
    } catch (err) {
      console.warn('Supabase client init failed:', err);
    }
  }
  return supabaseClient;
}

function readAuthSession() {
  try {
    return window.localStorage.getItem(AUTH_STORAGE_KEY) === AUTH_USERNAME;
  } catch {
    return isAuthenticated;
  }
}

function writeAuthSession(val) {
  isAuthenticated = Boolean(val);
  try {
    if (val) window.localStorage.setItem(AUTH_STORAGE_KEY, AUTH_USERNAME);
    else window.localStorage.removeItem(AUTH_STORAGE_KEY);
  } catch {
    // Sandboxed iframe or restricted storage; in-memory state still works
  }
}

function updateSidebarUserLabel(email) {
  const label = document.querySelector('#sidebar-footer-row .sidebar-label');
  if (label) {
    label.textContent = email || 'Modu Workspace';
  }
}

function setAuthModeUI(mode, { clearMessages = true } = {}) {
  authMode = mode === 'signup' ? 'signup' : 'signin';
  const titleEl = document.getElementById('auth-title');
  const subtitleEl = document.getElementById('auth-subtitle');
  const submitBtn = document.getElementById('login-submit-btn');
  const toggleBtn = document.getElementById('auth-mode-toggle');
  const errEl = document.getElementById('login-error');
  const infoEl = document.getElementById('login-info');

  if (authMode === 'signup') {
    if (titleEl) titleEl.textContent = 'Create account';
    if (subtitleEl) subtitleEl.textContent = 'Sign up with your email to save your workspace';
    if (submitBtn) submitBtn.textContent = 'Create account';
    if (toggleBtn) toggleBtn.textContent = 'Already have an account? Sign in';
  } else {
    if (titleEl) titleEl.textContent = 'Sign in';
    if (subtitleEl) subtitleEl.textContent = 'Enter your credentials to access Modu';
    if (submitBtn) submitBtn.textContent = 'Sign in';
    if (toggleBtn) toggleBtn.textContent = 'Need an account? Create one';
  }

  if (clearMessages) {
    if (errEl) errEl.classList.add('hidden');
    if (infoEl) infoEl.classList.add('hidden');
  }
}

function toggleAuthMode() {
  setAuthModeUI(authMode === 'signin' ? 'signup' : 'signin', { clearMessages: true });
}

function syncAuthState() {
  const hasSupabase = Boolean(initSupabaseClient());
  const authed = hasSupabase ? Boolean(currentAuthUser) : (isAuthenticated || readAuthSession());
  isAuthenticated = authed;
  updateSidebarUserLabel(currentAuthUser?.email || (authed && !hasSupabase ? AUTH_USERNAME : ''));
  const authScreen = document.getElementById('auth-screen');
  const appShell = document.getElementById('app-shell');
  if (!authScreen || !appShell) return;
  if (authed) {
    authScreen.classList.add('hidden');
    authScreen.style.display = 'none';
    appShell.classList.remove('hidden');
    appShell.style.display = 'flex';
    window.dispatchEvent(new Event('resize'));
  } else {
    appShell.classList.add('hidden');
    appShell.style.display = 'none';
    authScreen.classList.remove('hidden');
    authScreen.style.display = 'flex';
  }
}

function toggleLoginPasswordVisibility() {
  const pwInput = document.getElementById('login-password');
  const btn = document.getElementById('login-pw-toggle');
  if (!pwInput || !btn) return;
  const isPw = pwInput.type === 'password';
  pwInput.type = isPw ? 'text' : 'password';
  btn.textContent = isPw ? 'Hide' : 'Show';
}

async function handleLogin(e) {
  if (e && typeof e.preventDefault === 'function') e.preventDefault();
  const email = (document.getElementById('login-username')?.value || '').trim().toLowerCase();
  const password = document.getElementById('login-password')?.value || '';
  const errEl = document.getElementById('login-error');
  const infoEl = document.getElementById('login-info');
  const submitBtn = document.getElementById('login-submit-btn');

  if (errEl) errEl.classList.add('hidden');
  if (infoEl) infoEl.classList.add('hidden');

  const client = initSupabaseClient();
  if (client) {
    if (!email || !password) {
      if (errEl) {
        errEl.textContent = 'Please enter both email and password.';
        errEl.classList.remove('hidden');
      }
      return;
    }
    if (submitBtn) submitBtn.disabled = true;
    try {
      if (authMode === 'signup') {
        const { data, error } = await client.auth.signUp({ email, password });
        if (error) {
          if (errEl) {
            errEl.textContent = error.message || 'Unable to create account.';
            errEl.classList.remove('hidden');
          }
          return;
        }
        if (data?.session?.user) {
          currentAuthUser = data.session.user;
          if (document.getElementById('login-password')) document.getElementById('login-password').value = '';
          syncAuthState();
          await loadWorkspaceForUser(currentAuthUser.id);
        } else {
          if (infoEl) {
            infoEl.textContent = 'Account created. Check your email to confirm your address, then sign in.';
            infoEl.classList.remove('hidden');
          }
          setAuthModeUI('signin', { clearMessages: false });
        }
      } else {
        const { data, error } = await client.auth.signInWithPassword({ email, password });
        if (error) {
          if (errEl) {
            errEl.textContent = error.message || 'Incorrect email or password.';
            errEl.classList.remove('hidden');
          }
          document.getElementById('login-password')?.focus();
          return;
        }
        if (data?.user) {
          currentAuthUser = data.user;
          if (document.getElementById('login-password')) document.getElementById('login-password').value = '';
          syncAuthState();
          await loadWorkspaceForUser(currentAuthUser.id);
        }
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
    return;
  }

  if (email === AUTH_USERNAME.toLowerCase() && password === AUTH_PASSWORD) {
    writeAuthSession(true);
    if (document.getElementById('login-password')) document.getElementById('login-password').value = '';
    syncAuthState();
    await loadWorkspaceForUser('local');
  } else {
    if (errEl) {
      errEl.textContent = 'Incorrect email or password.';
      errEl.classList.remove('hidden');
    }
    document.getElementById('login-password')?.focus();
  }
}

async function handleLogout() {
  clearTimeout(saveWorkspaceTimer);
  const client = initSupabaseClient();
  if (client) {
    try {
      await client.auth.signOut();
    } catch (err) {
      console.warn('Supabase signOut failed:', err);
    }
  }
  currentAuthUser = null;
  hasHydratedOnce = false;
  writeAuthSession(false);
  syncAuthState();
}

const WORKSPACE_STORAGE_PREFIX = 'modu_workspace_state_';
let supabaseClient = null;
let isHydratingState = false;
let hasHydratedOnce = false;
let saveWorkspaceTimer = null;

function getWorkspaceStorageKey(userId) {
  return `${WORKSPACE_STORAGE_PREFIX}${userId || 'local'}`;
}

function getWorkspaceSnapshot() {
  const appGroupMap = {};
  apps.forEach(a => {
    if (a.groupId) appGroupMap[a.id] = a.groupId;
  });
  return {
    channelsList,
    channelAccountsByName,
    channelGoalsByName,
    budgetData,
    budgetTotalByYear,
    budgetMonthlyCapByYear,
    budgetTotalLockByYear,
    budgetMonthLocksByYear,
    reportsMetricsByYear,
    budgetYear,
    contactGroups,
    availableCountries,
    leadStages,
    leadEntries,
    integrationsList,
    competitorsList,
    aeoSeoEntries,
    wishlistItems,
    homeDashboardLayout,
    appGroups,
    appGroupMap
  };
}

function applyWorkspaceSnapshot(snap) {
  if (!snap || typeof snap !== 'object') return;
  isHydratingState = true;
  try {
    if (Array.isArray(snap.channelsList)) channelsList = snap.channelsList;
    if (snap.channelAccountsByName && typeof snap.channelAccountsByName === 'object') channelAccountsByName = snap.channelAccountsByName;
    if (snap.channelGoalsByName && typeof snap.channelGoalsByName === 'object') channelGoalsByName = snap.channelGoalsByName;
    if (snap.budgetData && typeof snap.budgetData === 'object') budgetData = snap.budgetData;
    if (snap.budgetTotalByYear && typeof snap.budgetTotalByYear === 'object') budgetTotalByYear = snap.budgetTotalByYear;
    if (snap.budgetMonthlyCapByYear && typeof snap.budgetMonthlyCapByYear === 'object') budgetMonthlyCapByYear = snap.budgetMonthlyCapByYear;
    if (snap.budgetTotalLockByYear && typeof snap.budgetTotalLockByYear === 'object') budgetTotalLockByYear = snap.budgetTotalLockByYear;
    if (snap.budgetMonthLocksByYear && typeof snap.budgetMonthLocksByYear === 'object') budgetMonthLocksByYear = snap.budgetMonthLocksByYear;
    if (snap.reportsMetricsByYear && typeof snap.reportsMetricsByYear === 'object') reportsMetricsByYear = snap.reportsMetricsByYear;
    if (snap.budgetYear) {
      budgetYear = String(snap.budgetYear);
      syncAllYearSelects(budgetYear);
      writeSavedWorkspaceYear(budgetYear);
    }
    if (Array.isArray(snap.contactGroups)) contactGroups = snap.contactGroups;
    if (Array.isArray(snap.availableCountries)) availableCountries = snap.availableCountries;
    if (Array.isArray(snap.leadStages)) leadStages = snap.leadStages;
    if (Array.isArray(snap.leadEntries)) leadEntries = snap.leadEntries;
    if (Array.isArray(snap.integrationsList)) integrationsList = snap.integrationsList;
    if (Array.isArray(snap.competitorsList)) competitorsList = snap.competitorsList;
    if (Array.isArray(snap.aeoSeoEntries)) aeoSeoEntries = snap.aeoSeoEntries;
    if (Array.isArray(snap.wishlistItems)) wishlistItems = snap.wishlistItems;
    if (snap.homeDashboardLayout && Array.isArray(snap.homeDashboardLayout.widgets)) homeDashboardLayout = snap.homeDashboardLayout;
    if (Array.isArray(snap.appGroups)) appGroups = snap.appGroups;
    if (snap.appGroupMap && typeof snap.appGroupMap === 'object') {
      apps.forEach(a => {
        a.groupId = snap.appGroupMap[a.id] || null;
      });
    }
    renderSidebarApps();
    renderCards();
    const currentPath = getCurrentRoutePath();
    if (currentPath && currentPath !== '/') {
      navigateToRoute(currentPath, { push: false });
    } else {
      if (!document.getElementById('view-channels')?.classList.contains('hidden')) renderChannelsView();
      if (!document.getElementById('view-budget')?.classList.contains('hidden')) renderBudgetView();
      if (!document.getElementById('view-contacts')?.classList.contains('hidden')) renderContactsView();
      if (!document.getElementById('view-leads')?.classList.contains('hidden')) renderLeadsView();
      if (!document.getElementById('view-integrations')?.classList.contains('hidden')) renderIntegrationsView();
      if (!document.getElementById('view-competitors')?.classList.contains('hidden')) renderCompetitorsView();
      if (!document.getElementById('view-aeo-seo')?.classList.contains('hidden')) renderAeoSeoView();
      if (!document.getElementById('view-marketing-reports')?.classList.contains('hidden')) renderMarketingReportsView();
    }
  } finally {
    isHydratingState = false;
  }
}

function scheduleWorkspaceSave() {
  if (isHydratingState || !hasHydratedOnce) return;
  const client = initSupabaseClient();
  const userId = currentAuthUser?.id || (client ? null : 'local');
  if (!userId) return;

  const snapshot = getWorkspaceSnapshot();
  try {
    window.localStorage.setItem(getWorkspaceStorageKey(userId), JSON.stringify(snapshot));
  } catch {
    // Ignore storage errors in restricted contexts
  }

  if (!client || !currentAuthUser?.id) return;
  clearTimeout(saveWorkspaceTimer);
  saveWorkspaceTimer = setTimeout(async () => {
    try {
      await client
        .from('workspace_state')
        .upsert(
          { user_id: currentAuthUser.id, data: snapshot, updated_at: new Date().toISOString() },
          { onConflict: 'user_id' }
        );
    } catch (err) {
      console.warn('Supabase sync failed:', err);
    }
  }, 350);
}

async function loadWorkspaceForUser(userId) {
  if (!userId) return;
  hasHydratedOnce = false;
  try {
    const cached = window.localStorage.getItem(getWorkspaceStorageKey(userId));
    if (cached) applyWorkspaceSnapshot(JSON.parse(cached));
  } catch {
    // Ignore storage errors
  }

  const client = initSupabaseClient();
  if (client && userId !== 'local') {
    try {
      const { data, error } = await client
        .from('workspace_state')
        .select('data')
        .eq('user_id', userId)
        .maybeSingle();
      if (!error && data && data.data) {
        applyWorkspaceSnapshot(data.data);
        try {
          window.localStorage.setItem(getWorkspaceStorageKey(userId), JSON.stringify(data.data));
        } catch {
          // Ignore storage errors
        }
      }
    } catch (err) {
      console.warn('Supabase load failed:', err);
    }
  }
  hasHydratedOnce = true;
}

async function initWorkspacePersistence() {
  const client = initSupabaseClient();
  if (client) {
    try {
      const { data } = await client.auth.getSession();
      if (data?.session?.user) {
        currentAuthUser = data.session.user;
        syncAuthState();
        await loadWorkspaceForUser(currentAuthUser.id);
      } else {
        currentAuthUser = null;
        syncAuthState();
      }
    } catch (err) {
      console.warn('Supabase getSession failed:', err);
      syncAuthState();
    }

    if (!authStateListenerRegistered) {
      authStateListenerRegistered = true;
      client.auth.onAuthStateChange(async (_event, session) => {
        const nextUser = session?.user || null;
        const sameUser = nextUser && currentAuthUser && nextUser.id === currentAuthUser.id;
        currentAuthUser = nextUser;
        syncAuthState();
        if (nextUser) {
          if (!sameUser || !hasHydratedOnce) {
            await loadWorkspaceForUser(nextUser.id);
          }
        } else {
          hasHydratedOnce = false;
        }
      });
    }
    return;
  }

  syncAuthState();
  await loadWorkspaceForUser('local');
}

[
  'renderChannelsView',
  'renderBudgetView',
  'renderContactsView',
  'renderLeadsView',
  'renderCompetitorsView',
  'renderAeoSeoView',
  'saveAppGroup',
  'deleteAppGroup',
  'assignAppGroup',
  'toggleAppGroupCollapse'
].forEach(fnName => {
  const orig = window[fnName];
  if (typeof orig === 'function') {
    window[fnName] = function (...args) {
      const res = orig.apply(this, args);
      scheduleWorkspaceSave();
      return res;
    };
  }
});

let pendingCsvImportState = null;
let activeCsvImportTarget = null;

function triggerCsvImport(target) {
  activeCsvImportTarget = target;
  const input = document.getElementById('csv-file-input');
  if (!input) return;
  input.value = '';
  input.click();
}

function parseCsvText(text) {
  const clean = String(text || '').replace(/^\uFEFF/, '');
  const firstLine = clean.split(/\r?\n/)[0] || '';
  const commaCount = (firstLine.match(/,/g) || []).length;
  const semiCount = (firstLine.match(/;/g) || []).length;
  const delimiter = semiCount > commaCount ? ';' : ',';

  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < clean.length; i++) {
    const ch = clean[i];
    const next = clean[i + 1];
    if (inQuotes) {
      if (ch === '"' && next === '"') {
        field += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        field += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === delimiter) {
        row.push(field.trim());
        field = '';
      } else if (ch === '\r' && next === '\n') {
        row.push(field.trim());
        if (row.some(c => c !== '')) rows.push(row);
        row = [];
        field = '';
        i++;
      } else if (ch === '\n' || ch === '\r') {
        row.push(field.trim());
        if (row.some(c => c !== '')) rows.push(row);
        row = [];
        field = '';
      } else {
        field += ch;
      }
    }
  }
  if (field !== '' || row.length > 0) {
    row.push(field.trim());
    if (row.some(c => c !== '')) rows.push(row);
  }

  if (rows.length === 0) return { headers: [], records: [], delimiter };
  const headers = rows[0].map(h => h.trim());
  const records = rows.slice(1).map(r => {
    const obj = {};
    headers.forEach((h, idx) => {
      obj[h] = (r[idx] || '').trim();
    });
    return obj;
  });
  return { headers, records, delimiter };
}

function getCsvField(rec, aliases, fallbackFirstCol = false) {
  const keys = Object.keys(rec || {});
  for (const alias of aliases) {
    const normAlias = alias.toLowerCase().replace(/[^a-z0-9]/g, '');
    const foundKey = keys.find(k => k.toLowerCase().replace(/[^a-z0-9]/g, '') === normAlias);
    if (foundKey !== undefined && rec[foundKey] !== '') return rec[foundKey];
  }
  if (fallbackFirstCol && keys.length > 0 && rec[keys[0]] !== '') {
    return rec[keys[0]];
  }
  return '';
}

function parseCsvNumber(val) {
  if (typeof val === 'number') return isFinite(val) ? val : 0;
  let s = String(val || '').replace(/[^\d.,-]/g, '');
  if (!s) return 0;
  const lastComma = s.lastIndexOf(',');
  const lastDot = s.lastIndexOf('.');
  if (lastComma !== -1 && lastDot !== -1) {
    if (lastComma > lastDot) {
      s = s.replace(/\./g, '').replace(',', '.');
    } else {
      s = s.replace(/,/g, '');
    }
  } else if (lastComma !== -1) {
    const afterComma = s.slice(lastComma + 1);
    if (afterComma.length === 3 && /^\d{3}$/.test(afterComma)) {
      s = s.replace(/,/g, '');
    } else {
      s = s.replace(',', '.');
    }
  } else if (lastDot !== -1) {
    const afterDot = s.slice(lastDot + 1);
    if (afterDot.length === 3 && /^\d{3}$/.test(afterDot) && (s.match(/\./g) || []).length >= 1 && s.length > 4) {
      s = s.replace(/\./g, '');
    }
  }
  const n = parseFloat(s);
  return isNaN(n) ? 0 : n;
}

function parseCsvMonth(val) {
  const s = String(val || '').trim().toLowerCase();
  if (!s) return null;
  if (s === 'all' || s === 'full year') return 'all';
  const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  const fullNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  const noNames = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];
  const fullIdx = fullNames.indexOf(s);
  if (fullIdx !== -1) return fullIdx;
  const noIdx = noNames.indexOf(s);
  if (noIdx !== -1) return noIdx;
  const shortIdx = monthNames.findIndex(m => s.startsWith(m));
  if (shortIdx !== -1) return shortIdx;
  const noShortIdx = noNames.findIndex(m => s.startsWith(m.slice(0, 3)));
  if (noShortIdx !== -1) return noShortIdx;
  const num = parseInt(s, 10);
  if (/^\d{1,2}$/.test(s) && num >= 1 && num <= 12) return num - 1;
  return null;
}

function buildCsvSyncPlan(target, fileName, parsed) {
  const { headers, records, delimiter } = parsed;
  const plan = {
    target,
    targetLabel: target,
    fileName,
    delimiter,
    headers,
    totalRows: records.length,
    newCount: 0,
    updateCount: 0,
    skipCount: 0,
    syncEntities: [],
    previewHeaders: [],
    previewRows: [],
    ops: []
  };

  if (target === 'leads') {
    plan.targetLabel = 'Leads';
    plan.previewHeaders = ['Company', 'ERP / Integration', 'Channel', 'Stage', 'Value', 'Action'];
    const newChannels = new Set();
    const newIntegrations = new Set();
    const newStages = new Set();

    records.forEach(rec => {
      const company = getCsvField(rec, ['company', 'name', 'lead', 'account', 'organization']);
      if (!company) {
        plan.skipCount++;
        return;
      }
      const erp = getCsvField(rec, ['erp', 'erpsystem']);
      const integration = getCsvField(rec, ['integration', 'otherintegration', 'ta']);
      const channel = getCsvField(rec, ['channel', 'source', 'acquisitionchannel']);
      const stageName = getCsvField(rec, ['stage', 'status', 'pipeline']);
      const value = Math.max(0, parseCsvNumber(getCsvField(rec, ['value', 'amount', 'dealvalue', 'arr', 'mrr'])));

      if (channel && !channelsList.some(c => (typeof c === 'string' ? c : c.name).toLowerCase() === channel.toLowerCase())) {
        newChannels.add(channel);
      }
      if (erp && !integrationsList.some(i => i.name.toLowerCase() === erp.toLowerCase())) {
        newIntegrations.add(`${erp} (ERP)`);
      }
      if (integration && !integrationsList.some(i => i.name.toLowerCase() === integration.toLowerCase())) {
        newIntegrations.add(`${integration} (Other Integration)`);
      }
      if (stageName && !leadStages.some(s => s.name.toLowerCase() === stageName.toLowerCase())) {
        newStages.add(stageName);
      }

      const existing = leadEntries.find(l => String(l.company || '').toLowerCase() === company.toLowerCase());
      const action = existing ? 'Update' : 'New';
      if (existing) plan.updateCount++;
      else plan.newCount++;

      plan.ops.push({ action, company, erp, integration, channel, stageName, value });
      if (plan.previewRows.length < 10) {
        plan.previewRows.push([company, [erp, integration].filter(Boolean).join(' / ') || '—', channel || '—', stageName || (leadStages[0]?.name || 'Default'), value.toLocaleString('en-US'), action]);
      }
    });

    if (newChannels.size) plan.syncEntities.push(`Auto-create ${newChannels.size} channel(s): ${Array.from(newChannels).join(', ')}`);
    if (newIntegrations.size) plan.syncEntities.push(`Auto-create ${newIntegrations.size} integration(s): ${Array.from(newIntegrations).join(', ')}`);
    if (newStages.size) plan.syncEntities.push(`Auto-create ${newStages.size} lead stage(s): ${Array.from(newStages).join(', ')}`);
  } else if (target === 'integrations') {
    plan.targetLabel = 'Integrations';
    plan.previewHeaders = ['Name', 'Type', 'Action'];
    records.forEach(rec => {
      const name = getCsvField(rec, ['name', 'integration', 'system', 'title']);
      if (!name) {
        plan.skipCount++;
        return;
      }
      const rawType = getCsvField(rec, ['type', 'category', 'kind']).toLowerCase();
      let type = 'Other Integration';
      if (rawType.includes('erp')) type = 'ERP';
      else if (rawType === 'ta' || rawType.includes('time') || rawType.includes('attendance')) type = 'TA';
      const existing = integrationsList.find(i => i.name.toLowerCase() === name.toLowerCase());
      const action = existing ? 'Update' : 'New';
      if (existing) plan.updateCount++;
      else plan.newCount++;
      plan.ops.push({ action, name, type });
      if (plan.previewRows.length < 10) plan.previewRows.push([name, type, action]);
    });
    plan.syncEntities.push('Updates Integration Distribution & Lead Share per Integration charts');
  } else if (target === 'budget') {
    plan.targetLabel = `Budget (${budgetYear})`;
    const newChannels = new Set();
    const monthColumns = headers
      .map(h => ({ header: h, monthIdx: parseCsvMonth(h) }))
      .filter(m => m.monthIdx !== null && m.monthIdx !== 'all');

    if (monthColumns.length >= 2) {
      plan.matrixMode = true;
      plan.budgetField = /plan|budget|budsjett/i.test(fileName) ? 'planned' : 'actual';
      plan.previewHeaders = ['Channel', 'Months w/ Data', 'Annual Total', 'Action'];

      records.forEach(rec => {
        const channel = getCsvField(rec, ['channel', 'source', 'name', 'kanal', 'platform', 'media'], true);
        if (!channel || /^(total|totalt|sum|grand total)$/i.test(channel.trim())) {
          plan.skipCount++;
          return;
        }
        const monthlyValues = Array(12).fill(0);
        let activeMonths = 0;
        monthColumns.forEach(mc => {
          const val = Math.round(parseCsvNumber(rec[mc.header]) * 100) / 100;
          monthlyValues[mc.monthIdx] = val;
          if (val !== 0) activeMonths++;
        });
        const totalVal = monthlyValues.reduce((a, b) => a + b, 0);
        if (!channelsList.some(c => (typeof c === 'string' ? c : c.name).toLowerCase() === channel.toLowerCase())) {
          newChannels.add(channel);
        }
        const exists = Boolean(budgetData[budgetYear]?.[channel]);
        const action = exists ? 'Update' : 'New';
        if (exists) plan.updateCount++;
        else plan.newCount++;
        plan.ops.push({ action, channel, monthlyValues });
        if (plan.previewRows.length < 10) {
          plan.previewRows.push([channel, `${activeMonths} / ${monthColumns.length}`, totalVal.toLocaleString('en-US'), action]);
        }
      });

      plan.syncEntities.push(`Detected monthly matrix (${monthColumns.length} month columns) — importing into ${plan.budgetField === 'planned' ? 'Planned Budget' : 'Actual Spend'} for ${budgetYear}`);
    } else {
      plan.previewHeaders = ['Channel', 'Month', 'Planned', 'Actual', 'Action'];
      records.forEach(rec => {
        const channel = getCsvField(rec, ['channel', 'source', 'name', 'kanal', 'platform', 'media'], true);
        if (!channel || /^(total|totalt|sum|grand total)$/i.test(channel.trim())) {
          plan.skipCount++;
          return;
        }
        const monthIdx = parseCsvMonth(getCsvField(rec, ['month', 'period', 'date', 'maned', 'måned']));
        const planned = parseCsvNumber(getCsvField(rec, ['planned', 'budget', 'plan', 'budsjett']));
        const actual = parseCsvNumber(getCsvField(rec, ['actual', 'cost', 'spend', 'spent', 'kostnad', 'forbruk']));
        if (!channelsList.some(c => (typeof c === 'string' ? c : c.name).toLowerCase() === channel.toLowerCase())) {
          newChannels.add(channel);
        }
        const exists = Boolean(budgetData[budgetYear]?.[channel]);
        const action = exists ? 'Update' : 'New';
        if (exists) plan.updateCount++;
        else plan.newCount++;
        const monthLabel = monthIdx === 'all' ? 'All months' : (monthIdx !== null ? ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][monthIdx] : 'All months');
        plan.ops.push({ action, channel, monthIdx: monthIdx === null ? 'all' : monthIdx, planned, actual });
        if (plan.previewRows.length < 10) {
          plan.previewRows.push([channel, monthLabel, planned.toLocaleString('en-US'), actual.toLocaleString('en-US'), action]);
        }
      });
    }
    if (newChannels.size) plan.syncEntities.push(`Auto-create ${newChannels.size} channel(s): ${Array.from(newChannels).join(', ')}`);
    plan.syncEntities.push(`Syncs entries into Budget year ${budgetYear} and channel charts`);
  } else if (target === 'contacts') {
    plan.targetLabel = 'Contacts & Partners';
    plan.previewHeaders = ['Partner / Company', 'Contact Name', 'Email / Phone', 'Country', 'Action'];
    const grp = contactGroups.find(g => g.id === selectedGroupId) || contactGroups[0];
    const newPartners = new Set();
    records.forEach(rec => {
      const partnerName = getCsvField(rec, ['partner', 'company', 'organization', 'account']);
      const contactName = getCsvField(rec, ['name', 'contact', 'fullname', 'person']);
      if (!partnerName && !contactName) {
        plan.skipCount++;
        return;
      }
      const resolvedPartner = partnerName || contactName;
      const website = normalizeWebsiteUrl(getCsvField(rec, ['website', 'url', 'domain']));
      const country = getCsvField(rec, ['country', 'market', 'region']);
      const fn = getCsvField(rec, ['function', 'role', 'title', 'position']);
      const email = getCsvField(rec, ['email', 'mail']);
      const phone = getCsvField(rec, ['phone', 'tel', 'mobile']);
      const location = getCsvField(rec, ['location', 'city', 'office']);
      const linkedin = normalizeWebsiteUrl(getCsvField(rec, ['linkedin', 'linkedinurl']));

      const existingPartner = grp?.partners?.find(p => p.name.toLowerCase() === resolvedPartner.toLowerCase());
      if (!existingPartner) newPartners.add(resolvedPartner);
      const existingContact = existingPartner?.contacts?.find(c => contactName && c.name.toLowerCase() === contactName.toLowerCase());
      const action = existingContact ? 'Update' : 'New';
      if (existingContact) plan.updateCount++;
      else plan.newCount++;

      plan.ops.push({ action, partnerName: resolvedPartner, contactName, website, country, fn, email, phone, location, linkedin });
      if (plan.previewRows.length < 10) {
        plan.previewRows.push([resolvedPartner, contactName || '—', [email, phone].filter(Boolean).join(' · ') || '—', country || '—', action]);
      }
    });
    if (grp) plan.syncEntities.push(`Target group: ${grp.name}`);
    if (newPartners.size) plan.syncEntities.push(`Auto-create ${newPartners.size} partner(s): ${Array.from(newPartners).slice(0, 6).join(', ')}${newPartners.size > 6 ? '...' : ''}`);
  } else if (target === 'competitors') {
    plan.targetLabel = 'Competitor Analysis';
    plan.previewHeaders = ['Name', 'Website', 'Social URL', 'Score', 'Action'];
    records.forEach(rec => {
      const name = getCsvField(rec, ['name', 'competitor', 'company']);
      if (!name) {
        plan.skipCount++;
        return;
      }
      const website = normalizeWebsiteUrl(getCsvField(rec, ['website', 'url', 'domain']));
      const socialUrl = normalizeWebsiteUrl(getCsvField(rec, ['socialurl', 'social', 'sociallink']));
      const positioning = getCsvField(rec, ['positioning', 'tagline', 'summary']);
      const pricing = getCsvField(rec, ['pricing', 'price']);
      const score = Math.min(10, Math.max(1, parseInt(getCsvField(rec, ['score', 'rating']), 10) || 7));
      const strengths = getCsvField(rec, ['strengths', 'pros']);
      const weaknesses = getCsvField(rec, ['weaknesses', 'cons']);
      const rawChannels = getCsvField(rec, ['channels', 'channel']);
      const channels = rawChannels ? rawChannels.split(/[|,]/).map(s => s.trim()).filter(Boolean) : [];
      const existing = competitorsList.find(c => c.name.toLowerCase() === name.toLowerCase());
      const action = existing ? 'Update' : 'New';
      if (existing) plan.updateCount++;
      else plan.newCount++;
      plan.ops.push({ action, name, website, socialUrl, positioning, pricing, score, channels, strengths, weaknesses });
      if (plan.previewRows.length < 10) {
        plan.previewRows.push([name, website || '—', socialUrl || '—', `${score}/10`, action]);
      }
    });
  }

  return plan;
}

function handleCsvFileSelected(event) {
  const file = event?.target?.files?.[0];
  if (!file || !activeCsvImportTarget) return;
  const reader = new FileReader();
  reader.onload = e => {
    const parsed = parseCsvText(e.target?.result || '');
    const plan = buildCsvSyncPlan(activeCsvImportTarget, file.name, parsed);
    openCsvImportConfirmationModal(plan);
  };
  reader.readAsText(file);
}

function openCsvImportConfirmationModal(plan) {
  pendingCsvImportState = plan;
  const modal = document.getElementById('csv-import-modal');
  if (!modal) return;

  document.getElementById('csv-modal-target-badge').textContent = plan.targetLabel;
  document.getElementById('csv-modal-file-meta').textContent = `${plan.fileName} · ${plan.totalRows} row${plan.totalRows === 1 ? '' : 's'} detected (${plan.delimiter === ';' ? 'semicolon' : 'comma'}-separated)`;

  document.getElementById('csv-sync-summary').innerHTML = [
    { label: 'Total Rows', val: plan.totalRows, cls: 'bg-slate-50 text-slate-800 border-slate-200/80' },
    { label: 'New Records', val: plan.newCount, cls: 'bg-[#ecfdf5] text-[#047857] border-[#a7f3d0]' },
    { label: 'Updates', val: plan.updateCount, cls: 'bg-[#eff6ff] text-[#1d4ed8] border-[#bfdbfe]' },
    { label: 'Skipped', val: plan.skipCount, cls: 'bg-slate-50 text-slate-500 border-slate-200/80' }
  ].map(s => `
    <div class="rounded-xl border px-3 py-2.5 ${s.cls}">
      <div class="text-[10px] font-medium opacity-80">${s.label}</div>
      <div class="text-base font-bold tabular-nums mt-0.5">${s.val}</div>
    </div>
  `).join('');

  const notesEl = document.getElementById('csv-sync-notes');
  const displayHeaders = plan.headers.map((h, i) => (h === '' && i === 0 ? '(First column)' : h)).filter(Boolean);
  const notes = [
    `Detected columns: ${displayHeaders.join(', ') || 'None'}`,
    ...plan.syncEntities
  ];
  notesEl.innerHTML = notes.map(n => `<div class="flex items-start gap-1.5"><span class="text-slate-400">•</span><span>${n}</span></div>`).join('');

  document.getElementById('csv-preview-count').textContent = `Showing ${plan.previewRows.length} of ${plan.ops.length} valid row(s)`;
  document.getElementById('csv-preview-head').innerHTML = `<tr>${plan.previewHeaders.map(h => `<th class="py-2 px-3 font-medium">${h}</th>`).join('')}</tr>`;
  document.getElementById('csv-preview-body').innerHTML = plan.previewRows.length > 0
    ? plan.previewRows.map(r => `<tr>${r.map((cell, idx) => {
        if (idx === r.length - 1) {
          const badgeCls = cell === 'Update' ? 'bg-[#eff6ff] text-[#1d4ed8]' : 'bg-[#ecfdf5] text-[#047857]';
          return `<td class="py-2 px-3"><span class="px-2 py-0.5 rounded-full text-[10px] font-semibold ${badgeCls}">${cell}</span></td>`;
        }
        return `<td class="py-2 px-3 text-slate-700">${cell}</td>`;
      }).join('')}</tr>`).join('')
    : `<tr><td colspan="${plan.previewHeaders.length || 1}" class="py-6 text-center text-slate-400">No valid rows found in this CSV file.</td></tr>`;

  const acceptBtn = document.getElementById('csv-accept-btn');
  if (acceptBtn) acceptBtn.disabled = plan.ops.length === 0;

  modal.classList.remove('hidden');
}

function declineCsvImport() {
  pendingCsvImportState = null;
  document.getElementById('csv-import-modal')?.classList.add('hidden');
}

function acceptCsvImport() {
  const plan = pendingCsvImportState;
  if (!plan || !plan.ops.length) {
    declineCsvImport();
    return;
  }

  if (plan.target === 'leads') {
    plan.ops.forEach((op, idx) => {
      if (op.channel) ensureChannelExists(op.channel);
      if (op.erp) ensureIntegrationExists(op.erp, 'ERP');
      if (op.integration) ensureIntegrationExists(op.integration, 'Other Integration');
      let stageId = leadStages[0]?.id || Date.now();
      if (op.stageName) {
        let stage = leadStages.find(s => s.name.toLowerCase() === op.stageName.toLowerCase());
        if (!stage) {
          stage = { id: Date.now() + idx + 100, name: op.stageName, color: '#6366f1' };
          leadStages.push(stage);
        }
        stageId = stage.id;
      }
      const existing = leadEntries.find(l => String(l.company || '').toLowerCase() === op.company.toLowerCase());
      if (existing) {
        if (op.erp) existing.erp = op.erp;
        if (op.integration) existing.integration = op.integration;
        if (op.channel) existing.channel = op.channel;
        if (op.stageName) existing.stageId = stageId;
        if (op.value) existing.value = op.value;
      } else {
        leadEntries.push({
          id: Date.now() + idx,
          company: op.company,
          erp: op.erp,
          integration: op.integration,
          channel: op.channel || (channelsList[0]?.name || 'Direct'),
          stageId,
          value: op.value
        });
      }
    });
    syncLeadsToCustomersGroup();
    renderLeadsView();
  } else if (plan.target === 'integrations') {
    plan.ops.forEach(op => ensureIntegrationExists(op.name, op.type));
    renderIntegrationsView();
  } else if (plan.target === 'budget') {
    if (!budgetData[budgetYear]) budgetData[budgetYear] = {};
    const targetField = plan.budgetField === 'planned' ? 'planned' : 'actual';
    plan.ops.forEach(op => {
      ensureChannelExists(op.channel);
      if (!budgetData[budgetYear][op.channel]) {
        budgetData[budgetYear][op.channel] = { planned: Array(12).fill(0), actual: Array(12).fill(0) };
      }
      if (Array.isArray(op.monthlyValues)) {
        for (let m = 0; m < 12; m++) {
          budgetData[budgetYear][op.channel][targetField][m] = op.monthlyValues[m] || 0;
        }
      } else if (op.monthIdx === 'all') {
        const pM = Math.round((op.planned / 12) * 100) / 100;
        const aM = Math.round((op.actual / 12) * 100) / 100;
        for (let m = 0; m < 12; m++) {
          budgetData[budgetYear][op.channel].planned[m] = pM;
          budgetData[budgetYear][op.channel].actual[m] = aM;
        }
      } else {
        budgetData[budgetYear][op.channel].planned[op.monthIdx] = Math.round(op.planned * 100) / 100;
        budgetData[budgetYear][op.channel].actual[op.monthIdx] = Math.round(op.actual * 100) / 100;
      }
    });
    syncAnnualBudgetWithChannels(budgetYear);
    renderBudgetView();
    syncBudgetDependents();
  } else if (plan.target === 'contacts') {
    let grp = contactGroups.find(g => g.id === selectedGroupId) || contactGroups[0];
    if (!grp) {
      grp = { id: Date.now(), name: 'Imported Contacts', partners: [] };
      contactGroups.push(grp);
      selectedGroupId = grp.id;
    }
    plan.ops.forEach((op, idx) => {
      let partner = grp.partners.find(p => p.name.toLowerCase() === op.partnerName.toLowerCase());
      if (!partner) {
        partner = {
          id: Date.now() + idx * 10,
          name: op.partnerName,
          website: op.website || '',
          countries: op.country ? [op.country] : [],
          countryWebsites: {},
          contacts: []
        };
        grp.partners.push(partner);
      } else {
        if (op.website && !partner.website) partner.website = op.website;
        if (op.country && !partner.countries.includes(op.country)) partner.countries.push(op.country);
      }
      if (op.contactName) {
        const existingContact = partner.contacts.find(c => c.name.toLowerCase() === op.contactName.toLowerCase());
        const contactData = {
          id: existingContact ? existingContact.id : (Date.now() + idx * 10 + 1),
          name: op.contactName,
          function: op.fn,
          phone: op.phone,
          email: op.email,
          location: op.location,
          linkedin: op.linkedin
        };
        if (existingContact) Object.assign(existingContact, contactData);
        else partner.contacts.push(contactData);
      }
    });
    renderContactsView();
  } else if (plan.target === 'competitors') {
    plan.ops.forEach((op, idx) => {
      const existing = competitorsList.find(c => c.name.toLowerCase() === op.name.toLowerCase());
      const data = {
        id: existing ? existing.id : (Date.now() + idx),
        name: op.name,
        website: op.website,
        socialUrl: op.socialUrl,
        logo: existing?.logo || '',
        followers: existing?.followers || '',
        posts: existing?.posts || '',
        positioning: op.positioning,
        pricing: op.pricing,
        score: op.score,
        channels: op.channels,
        strengths: op.strengths,
        weaknesses: op.weaknesses
      };
      if (existing) Object.assign(existing, data);
      else competitorsList.push(data);
    });
    renderCompetitorsView();
  }

  if (typeof scheduleWorkspaceSave === 'function') scheduleWorkspaceSave();
  pendingCsvImportState = null;
  document.getElementById('csv-import-modal')?.classList.add('hidden');
}

const exportTargetRegistry = new Map();
let exportTargetCounter = 1;
let activePdfExportTargetId = null;
let exportPdfBgMode = 'white';
let exportPdfCustomColor = '#0f172a';
let exportToastTimer = null;

function showExportToast(msg) {
  const el = document.getElementById('export-toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.remove('hidden');
  clearTimeout(exportToastTimer);
  exportToastTimer = setTimeout(() => el.classList.add('hidden'), 2600);
}

function isDarkHexColor(hex) {
  const clean = String(hex || '#ffffff').replace('#', '');
  if (clean.length !== 6 && clean.length !== 3) return false;
  const full = clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum < 0.5;
}

function getExportTargetTitle(cardEl, kind) {
  const h = cardEl?.querySelector('h2, h3, h4');
  const t = (h?.textContent || '').trim();
  if (t) return t;
  return kind === 'chart' ? 'Chart Export' : 'Table Export';
}

function attachExportMenus() {
  const main = document.getElementById('app-main');
  if (!main) return;

  const candidates = [];
  main.querySelectorAll('canvas').forEach(cv => {
    if (cv.closest('#csv-import-modal')) return;
    const card = cv.closest('.rounded-2xl, .rounded-xl') || cv.parentElement;
    if (card) candidates.push({ card, el: cv, kind: 'chart' });
  });
  main.querySelectorAll('table').forEach(tbl => {
    if (tbl.closest('#csv-import-modal')) return;
    const card = tbl.closest('.rounded-2xl, .rounded-xl') || tbl.parentElement;
    if (card) candidates.push({ card, el: tbl, kind: 'table' });
  });

  const seenCards = new Set();
  candidates.forEach(({ card, el, kind }) => {
    if (!card || seenCards.has(card)) return;
    seenCards.add(card);
    if (card.querySelector('[data-export-menu-wrap]')) return;

    const targetId = `exp_${exportTargetCounter++}`;
    const title = getExportTargetTitle(card, kind);
    exportTargetRegistry.set(targetId, { card, el, kind, title });

    if (getComputedStyle(card).position === 'static') {
      card.style.position = 'relative';
    }

    const wrap = document.createElement('div');
    wrap.setAttribute('data-export-menu-wrap', targetId);
    wrap.className = 'absolute top-3.5 right-3.5 z-20';
    wrap.innerHTML = `
      <button
        type="button"
        data-export-btn="${targetId}"
        onclick="event.stopPropagation(); toggleExportDropdown('${targetId}')"
        title="Export options"
        class="w-7 h-7 rounded-lg border border-slate-200/80 bg-white/95 hover:bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors shadow-xs"
      >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <circle cx="4" cy="10" r="1.5"/>
          <circle cx="10" cy="10" r="1.5"/>
          <circle cx="16" cy="10" r="1.5"/>
        </svg>
      </button>
      <div
        id="export-dd-${targetId}"
        onclick="event.stopPropagation()"
        class="hidden absolute right-0 mt-1.5 w-52 rounded-xl border border-slate-200 bg-white shadow-lg py-1.5 z-30 text-xs"
      >
        <button type="button" onclick="exportTargetAsPng('${targetId}', true)" class="w-full px-3 py-1.5 text-left text-slate-700 hover:bg-slate-50 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Copy as PNG (Transparent)</span>
        </button>
        <button type="button" onclick="exportTargetAsPng('${targetId}', false)" class="w-full px-3 py-1.5 text-left text-slate-700 hover:bg-slate-50 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-sky-500"></span>
          <span>Download PNG (Transparent)</span>
        </button>
        <div class="my-1 border-t border-slate-100"></div>
        <button type="button" onclick="openExportPdfModal('${targetId}')" class="w-full px-3 py-1.5 text-left text-slate-700 hover:bg-slate-50 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-violet-500"></span>
          <span>Export as PDF...</span>
        </button>
      </div>
    `;
    card.appendChild(wrap);
  });
}

function closeAllExportDropdowns() {
  document.querySelectorAll('[id^="export-dd-"]').forEach(el => el.classList.add('hidden'));
}

function toggleExportDropdown(targetId) {
  const dd = document.getElementById(`export-dd-${targetId}`);
  if (!dd) return;
  const wasHidden = dd.classList.contains('hidden');
  closeAllExportDropdowns();
  if (wasHidden) dd.classList.remove('hidden');
}

document.addEventListener('click', () => closeAllExportDropdowns());

function extractTableCellText(td) {
  const input = td.querySelector('input');
  if (input) {
    const val = (input.value || '').trim();
    const siblingSpan = td.querySelector('span');
    return siblingSpan && siblingSpan.textContent.trim() === '%' && val ? `${val}%` : (val || '0');
  }
  return (td.innerText || td.textContent || '').replace(/\s+/g, ' ').trim();
}

function drawRoundedRectPath(ctx, x, y, w, h, r) {
  const rad = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rad, y);
  ctx.arcTo(x + w, y, x + w, y + h, rad);
  ctx.arcTo(x + w, y + h, x, y + h, rad);
  ctx.arcTo(x, y + h, x, y, rad);
  ctx.arcTo(x, y, x + w, y, rad);
  ctx.closePath();
}

function loadSvgElementAsImage(svgEl) {
  return new Promise(resolve => {
    try {
      const clone = svgEl.cloneNode(true);
      clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      if (!clone.getAttribute('width')) clone.setAttribute('width', '24');
      if (!clone.getAttribute('height')) clone.setAttribute('height', '24');
      // Resolve Tailwind fill-white / stroke-white classes for standalone SVG serialization
      clone.querySelectorAll('*').forEach(el => {
        const cls = el.getAttribute('class') || '';
        if (cls.includes('fill-white')) el.setAttribute('fill', '#ffffff');
        if (cls.includes('stroke-white')) el.setAttribute('stroke', '#ffffff');
        if (cls.includes('fill-none')) el.setAttribute('fill', 'none');
        if (cls.includes('stroke-none')) el.setAttribute('stroke', 'none');
      });
      const clsRoot = clone.getAttribute('class') || '';
      if (clsRoot.includes('fill-white')) clone.setAttribute('fill', '#ffffff');
      if (clsRoot.includes('stroke-white')) clone.setAttribute('stroke', '#ffffff');
      if (clsRoot.includes('fill-none')) clone.setAttribute('fill', 'none');

      const xml = new XMLSerializer().serializeToString(clone);
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(xml);
    } catch (e) {
      resolve(null);
    }
  });
}

function loadSafeImg(src) {
  return new Promise(resolve => {
    if (!src) return resolve(null);
    const img = new Image();
    if (!src.startsWith('data:')) img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

async function drawBadgeAt(ctx, badgeEl, x, y, w, h) {
  const cs = getComputedStyle(badgeEl);
  const bg = cs.backgroundColor;
  const br = parseFloat(cs.borderRadius) || 6;
  if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
    ctx.save();
    ctx.fillStyle = bg;
    drawRoundedRectPath(ctx, x, y, w, h, br);
    ctx.fill();
    if (cs.borderWidth && parseFloat(cs.borderWidth) > 0 && cs.borderColor && cs.borderColor !== 'transparent') {
      ctx.strokeStyle = cs.borderColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    ctx.restore();
  }
  const svg = badgeEl.querySelector('svg');
  if (svg) {
    const svgImg = await loadSvgElementAsImage(svg);
    if (svgImg) {
      const pad = Math.max(2, w * 0.18);
      ctx.drawImage(svgImg, x + pad, y + pad, w - pad * 2, h - pad * 2);
    }
    return;
  }
  const imgEl = badgeEl.querySelector('img');
  if (imgEl) {
    const loaded = await loadSafeImg(imgEl.src);
    if (loaded) {
      const pad = Math.max(2, w * 0.15);
      ctx.drawImage(loaded, x + pad, y + pad, w - pad * 2, h - pad * 2);
      return;
    }
  }
  const txt = (badgeEl.textContent || '').trim();
  if (txt) {
    ctx.save();
    ctx.fillStyle = cs.color || '#ffffff';
    ctx.font = `700 ${Math.max(9, Math.round(h * 0.45))}px Inter, system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(txt, x + w / 2, y + h / 2);
    ctx.restore();
  }
}

async function renderExportCanvas(entry, { transparent = true, bgColor = '#ffffff' } = {}) {
  const dpr = 2;
  const isDark = !transparent && isDarkHexColor(bgColor);
  const titleColor = isDark ? '#f8fafc' : '#0f172a';
  const mutedColor = isDark ? '#cbd5e1' : '#64748b';
  const borderColor = isDark ? 'rgba(255,255,255,0.16)' : '#e2e8f0';
  const headerBg = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(248,250,252,0.85)';

  if (entry.kind === 'chart') {
    const card = entry.card;
    const cardRect = card.getBoundingClientRect();
    const cw = Math.max(320, Math.round(cardRect.width || 600));
    const ch = Math.max(180, Math.round(cardRect.height || 300));

    const out = document.createElement('canvas');
    out.width = cw * dpr;
    out.height = ch * dpr;
    const ctx = out.getContext('2d');
    ctx.scale(dpr, dpr);

    if (!transparent) {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, cw, ch);
    }

    // 1. Draw border dividers inside card (e.g., header bottom border)
    card.querySelectorAll('.border-b').forEach(divEl => {
      if (divEl.closest('[data-export-menu-wrap]')) return;
      const r = divEl.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return;
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(r.left - cardRect.left, r.bottom - cardRect.top);
      ctx.lineTo(r.right - cardRect.left, r.bottom - cardRect.top);
      ctx.stroke();
    });

    // 2. Draw all canvases inside the card
    card.querySelectorAll('canvas').forEach(cv => {
      const r = cv.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return;
      ctx.drawImage(cv, r.left - cardRect.left, r.top - cardRect.top, r.width, r.height);
    });

    // 3. Draw colored legend dots and channel icon badges
    const drawnBadges = new Set();
    const badgeEls = Array.from(card.querySelectorAll('span')).filter(sp => {
      if (sp.closest('[data-export-menu-wrap]')) return false;
      const r = sp.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return false;
      if (sp.querySelector('svg') || sp.querySelector('img')) return true;
      const cs = getComputedStyle(sp);
      const hasBg = cs.backgroundColor && cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'transparent';
      return hasBg && r.width <= 18 && r.height <= 18 && (sp.textContent || '').trim() === '';
    });

    for (const sp of badgeEls) {
      if (drawnBadges.has(sp)) continue;
      drawnBadges.add(sp);
      const r = sp.getBoundingClientRect();
      await drawBadgeAt(ctx, sp, r.left - cardRect.left, r.top - cardRect.top, r.width, r.height);
    }

    // 4. Draw selected <select> labels (if any in header)
    card.querySelectorAll('select').forEach(sel => {
      if (sel.closest('[data-export-menu-wrap]')) return;
      const r = sel.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return;
      const label = sel.options?.[sel.selectedIndex]?.text || sel.value || '';
      if (!label) return;
      ctx.save();
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;
      drawRoundedRectPath(ctx, r.left - cardRect.left, r.top - cardRect.top, r.width, r.height, 8);
      ctx.stroke();
      ctx.fillStyle = titleColor;
      ctx.font = '600 11px Inter, system-ui, sans-serif';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, r.left - cardRect.left + 10, r.top - cardRect.top + r.height / 2);
      ctx.restore();
    });

    // 5. Draw all visible text nodes at their exact positions
    const walker = document.createTreeWalker(card, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const text = node.nodeValue;
      if (!text || !text.trim()) continue;
      const parentEl = node.parentElement;
      if (!parentEl) continue;
      if (parentEl.closest('[data-export-menu-wrap], select, svg')) continue;
      if (drawnBadges.has(parentEl)) continue;

      const range = document.createRange();
      range.selectNodeContents(node);
      const rect = range.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) continue;

      const cs = getComputedStyle(parentEl);
      if (cs.visibility === 'hidden' || cs.display === 'none') continue;
      const fontSize = parseFloat(cs.fontSize) || 12;
      const fontWeight = cs.fontWeight || '400';

      let textColor = cs.color || titleColor;
      if (isDark) {
        textColor = parseInt(fontWeight, 10) >= 600 || fontSize >= 13 ? titleColor : mutedColor;
      }

      ctx.save();
      ctx.font = `${fontWeight} ${fontSize}px Inter, system-ui, sans-serif`;
      ctx.fillStyle = textColor;
      ctx.textBaseline = 'top';
      ctx.fillText(text.replace(/\s+/g, ' ').trim(), rect.left - cardRect.left, rect.top - cardRect.top);
      ctx.restore();
    }

    return out;
  }

  // Table renderer with logos & progress bars
  const tbl = entry.el;
  const headCells = Array.from(tbl.querySelectorAll('thead th')).map(th => (th.innerText || th.textContent || '').trim());
  const trEls = Array.from(tbl.querySelectorAll('tbody tr'));
  const bodyRowsMeta = trEls.map(tr =>
    Array.from(tr.querySelectorAll('td')).map(td => {
      const badgeEl = td.querySelector('span svg, span img')?.closest('span') || null;
      const imgEl = !badgeEl ? td.querySelector('img') : null;
      const barInner = td.querySelector('div.rounded-full > div.h-full.rounded-full');
      const barPct = barInner ? (parseFloat(barInner.style.width) || 0) : null;
      const barColor = barInner ? (barInner.style.backgroundColor || barInner.style.background || '#0f172a') : null;
      return {
        text: extractTableCellText(td),
        badgeEl,
        imgEl,
        barPct,
        barColor
      };
    })
  );

  // Drop trailing empty action column if present
  const keepCols = headCells.map((h, i) => {
    const allEmpty = h === '' && bodyRowsMeta.every(r => !r[i] || !r[i].text || r[i].text === '•••');
    return !allEmpty;
  });
  const headers = headCells.filter((_, i) => keepCols[i]);
  const rows = bodyRowsMeta.map(r => r.filter((_, i) => keepCols[i]));

  const tmp = document.createElement('canvas').getContext('2d');
  tmp.font = '500 12px Inter, system-ui, sans-serif';
  const colWidths = headers.map((h, colIdx) => {
    let maxW = tmp.measureText(h).width;
    rows.forEach(r => {
      const cell = r[colIdx];
      let w = tmp.measureText(cell?.text || '').width;
      if (cell?.badgeEl || cell?.imgEl) w += 30;
      if (cell?.barPct !== null) w += 76;
      if (w > maxW) maxW = w;
    });
    return Math.min(280, Math.max(72, Math.ceil(maxW) + 28));
  });

  const pad = 28;
  const titleH = entry.title ? 34 : 0;
  const rowH = 38;
  const headH = 36;
  const tableW = Math.max(360, colWidths.reduce((a, b) => a + b, 0));
  const tableH = headH + Math.max(1, rows.length) * rowH;

  const out = document.createElement('canvas');
  out.width = (tableW + pad * 2) * dpr;
  out.height = (tableH + pad * 2 + titleH) * dpr;
  const ctx = out.getContext('2d');
  ctx.scale(dpr, dpr);

  if (!transparent) {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, tableW + pad * 2, tableH + pad * 2 + titleH);
  }

  if (entry.title) {
    ctx.fillStyle = titleColor;
    ctx.font = '600 15px Inter, system-ui, sans-serif';
    ctx.textBaseline = 'top';
    ctx.fillText(entry.title, pad, pad);
  }

  const startY = pad + titleH;
  if (!transparent) {
    ctx.fillStyle = headerBg;
    ctx.fillRect(pad, startY, tableW, headH);
  }
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad, startY + headH);
  ctx.lineTo(pad + tableW, startY + headH);
  ctx.stroke();

  ctx.font = '600 11px Inter, system-ui, sans-serif';
  ctx.fillStyle = mutedColor;
  ctx.textBaseline = 'middle';
  let curX = pad;
  headers.forEach((h, i) => {
    ctx.fillText(h, curX + 12, startY + headH / 2);
    curX += colWidths[i];
  });

  ctx.font = '500 12px Inter, system-ui, sans-serif';
  for (let rIdx = 0; rIdx < rows.length; rIdx++) {
    const r = rows[rIdx];
    const y = startY + headH + rIdx * rowH;
    let cx = pad;

    for (let cIdx = 0; cIdx < r.length; cIdx++) {
      const cell = r[cIdx];
      let textX = cx + 12;

      if (cell.badgeEl) {
        await drawBadgeAt(ctx, cell.badgeEl, cx + 12, y + (rowH - 20) / 2, 20, 20);
        textX += 28;
      } else if (cell.imgEl) {
        const loaded = await loadSafeImg(cell.imgEl.src);
        if (loaded) {
          ctx.drawImage(loaded, cx + 12, y + (rowH - 18) / 2, 18, 18);
          textX += 26;
        }
      }

      if (cell.barPct !== null) {
        const barW = 58;
        const barH = 6;
        const barX = cx + 12;
        const barY = y + (rowH - barH) / 2;
        ctx.save();
        ctx.fillStyle = isDark ? 'rgba(255,255,255,0.14)' : '#f1f5f9';
        drawRoundedRectPath(ctx, barX, barY, barW, barH, 3);
        ctx.fill();
        if (cell.barPct > 0) {
          ctx.fillStyle = cell.barColor || '#0f172a';
          drawRoundedRectPath(ctx, barX, barY, Math.max(4, (Math.min(100, cell.barPct) / 100) * barW), barH, 3);
          ctx.fill();
        }
        ctx.restore();
        textX = barX + barW + 8;
      }

      ctx.fillStyle = cIdx === 0 ? titleColor : mutedColor;
      ctx.fillText(cell.text || '—', textX, y + rowH / 2, Math.max(24, colWidths[cIdx] - (textX - cx) - 10));
      cx += colWidths[cIdx];
    }

    if (rIdx < rows.length - 1) {
      ctx.strokeStyle = borderColor;
      ctx.beginPath();
      ctx.moveTo(pad, y + rowH);
      ctx.lineTo(pad + tableW, y + rowH);
      ctx.stroke();
    }
  }

  return out;
}

async function exportTargetAsPng(targetId, copyToClipboard = true) {
  closeAllExportDropdowns();
  const entry = exportTargetRegistry.get(targetId);
  if (!entry) return;
  const canvas = await renderExportCanvas(entry, { transparent: true });
  const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
  if (!blob) return;

  if (copyToClipboard && navigator.clipboard && typeof ClipboardItem !== 'undefined') {
    try {
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
      showExportToast('Copied transparent PNG to clipboard');
      return;
    } catch (e) {
      // Fallback to download if clipboard permission denied
    }
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${slugifyRouteSegment(entry.title || 'export') || 'export'}.png`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showExportToast('Downloaded transparent PNG');
}

function buildPdfBlobFromCanvas(canvas) {
  const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
  const base64 = dataUrl.split(',')[1] || '';
  const binStr = atob(base64);
  const imgBytes = new Uint8Array(binStr.length);
  for (let i = 0; i < binStr.length; i++) imgBytes[i] = binStr.charCodeAt(i);

  const pxW = canvas.width;
  const pxH = canvas.height;
  const ptW = Math.round((pxW / 2) * 0.75);
  const ptH = Math.round((pxH / 2) * 0.75);

  const enc = new TextEncoder();
  const parts = [];
  const offsets = [0];
  let byteLen = 0;
  const pushStr = s => {
    const b = enc.encode(s);
    parts.push(b);
    byteLen += b.length;
  };
  const pushBytes = b => {
    parts.push(b);
    byteLen += b.length;
  };

  pushStr('%PDF-1.4\n%\xFF\xFF\xFF\xFF\n');

  offsets.push(byteLen);
  pushStr('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');

  offsets.push(byteLen);
  pushStr('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n');

  offsets.push(byteLen);
  pushStr(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${ptW} ${ptH}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>\nendobj\n`);

  offsets.push(byteLen);
  pushStr(`4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${pxW} /Height ${pxH} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${imgBytes.length} >>\nstream\n`);
  pushBytes(imgBytes);
  pushStr('\nendstream\nendobj\n');

  const content = `q\n${ptW} 0 0 ${ptH} 0 0 cm\n/Im0 Do\nQ\n`;
  offsets.push(byteLen);
  pushStr(`5 0 obj\n<< /Length ${content.length} >>\nstream\n${content}endstream\nendobj\n`);

  const xrefStart = byteLen;
  pushStr(`xref\n0 6\n0000000000 65535 f \n`);
  for (let i = 1; i <= 5; i++) {
    pushStr(`${String(offsets[i]).padStart(10, '0')} 00000 n \n`);
  }
  pushStr(`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`);

  return new Blob(parts, { type: 'application/pdf' });
}

function openExportPdfModal(targetId) {
  closeAllExportDropdowns();
  const entry = exportTargetRegistry.get(targetId);
  if (!entry) return;
  activePdfExportTargetId = targetId;
  const lbl = document.getElementById('export-pdf-target-label');
  if (lbl) lbl.textContent = entry.title;
  setExportPdfBgMode(exportPdfBgMode);
  document.getElementById('export-pdf-modal')?.classList.remove('hidden');
}

function closeExportPdfModal() {
  document.getElementById('export-pdf-modal')?.classList.add('hidden');
}

function setExportPdfBgMode(mode) {
  exportPdfBgMode = mode === 'custom' ? 'custom' : 'white';
  const whiteBtn = document.getElementById('export-pdf-mode-white');
  const customBtn = document.getElementById('export-pdf-mode-custom');
  const customControls = document.getElementById('export-pdf-custom-controls');
  if (whiteBtn && customBtn) {
    whiteBtn.className = exportPdfBgMode === 'white'
      ? 'flex items-center gap-2.5 p-3 rounded-xl border-2 border-[#0f172a] bg-white text-left transition-colors'
      : 'flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 bg-[#fbfcfd] text-left transition-colors';
    customBtn.className = exportPdfBgMode === 'custom'
      ? 'flex items-center gap-2.5 p-3 rounded-xl border-2 border-[#0f172a] bg-white text-left transition-colors'
      : 'flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 bg-[#fbfcfd] text-left transition-colors';
  }
  if (customControls) {
    if (exportPdfBgMode === 'custom') customControls.classList.remove('hidden');
    else customControls.classList.add('hidden');
  }
}

function syncExportPdfCustomColor(val) {
  const s = String(val || '').trim();
  if (/^#[0-9a-fA-F]{6}$/.test(s)) {
    exportPdfCustomColor = s;
    const picker = document.getElementById('export-pdf-color-picker');
    const hex = document.getElementById('export-pdf-color-hex');
    const swatch = document.getElementById('export-pdf-custom-swatch');
    if (picker) picker.value = s;
    if (hex) hex.value = s;
    if (swatch) swatch.style.background = s;
  }
}

async function copyCurrentExportWithBg() {
  const entry = exportTargetRegistry.get(activePdfExportTargetId);
  if (!entry) return;
  const bg = exportPdfBgMode === 'custom' ? exportPdfCustomColor : '#ffffff';
  const canvas = await renderExportCanvas(entry, { transparent: false, bgColor: bg });
  const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
  if (!blob) return;
  if (navigator.clipboard && typeof ClipboardItem !== 'undefined') {
    try {
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
      closeExportPdfModal();
      showExportToast(`Copied slide image (${bg}) to clipboard`);
      return;
    } catch (e) {}
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${slugifyRouteSegment(entry.title || 'export') || 'export'}.png`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  closeExportPdfModal();
  showExportToast('Downloaded slide image');
}

async function downloadCurrentExportPdf() {
  const entry = exportTargetRegistry.get(activePdfExportTargetId);
  if (!entry) return;
  const bg = exportPdfBgMode === 'custom' ? exportPdfCustomColor : '#ffffff';
  const canvas = await renderExportCanvas(entry, { transparent: false, bgColor: bg });
  const pdfBlob = buildPdfBlobFromCanvas(canvas);
  const url = URL.createObjectURL(pdfBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${slugifyRouteSegment(entry.title || 'export') || 'export'}.pdf`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  closeExportPdfModal();
  showExportToast(`Exported PDF (${bg} background)`);
}

window.addEventListener('DOMContentLoaded', () => {
  const savedYear = readSavedWorkspaceYear();
  if (savedYear) syncAllYearSelects(savedYear);
  else syncAllYearSelects(budgetYear);

  document.getElementById('sidebar-app-count').textContent = String(apps.length);
  renderSidebarApps();
  renderCards();
  syncAuthState();
  navigateToRoute(getCurrentRoutePath(), { push: false });
  initWorkspacePersistence();
  attachExportMenus();

  const mainEl = document.getElementById('app-main');
  if (mainEl && typeof MutationObserver !== 'undefined') {
    let obsTimer = null;
    new MutationObserver(() => {
      clearTimeout(obsTimer);
      obsTimer = setTimeout(attachExportMenus, 80);
    }).observe(mainEl, { childList: true, subtree: true });
  }
});
