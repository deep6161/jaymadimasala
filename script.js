// ========================================================
// JAY MADI MASALA (જય માડી મસાલા) — મુખ્ય જાવાસ્ક્રિપ્ટ
// ========================================================

// ૧. માલિકોની વિગતો (PRD સ્પષ્ટીકરણ મુજબ ત્રણ માલિકો)
const owners = [
  {
    name: "ચેતનભાઈ પટેલ",
    phone: "919427029141",
    display: "+91 94270 29141"
  },
  {
    name: "નિલેશભાઈ પટેલ",
    phone: "919998583934",
    display: "+91 99985 83934"
  },
  {
    name: "આલોક પટેલ",
    phone: "916355535619",
    display: "+91 63555 35619"
  }
];

// મૂળભૂત ગુજરાતી WhatsApp સંદેશ
const DEFAULT_WA_MSG = 
  "નમસ્તે જય માડી મસાલા! 🙏\nમારે મસાલા અંગે પૂછપરછ અને ઓર્ડર કરવો છે. કૃપા કરીને વિગત અને ભાવ જણાવશો.";

// ૨. મોબાઈલ હેમબર્ગર મેનુ નિયંત્રણ
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // લિંક ક્લિક થાય ત્યારે મેનુ આપમેળે બંધ કરવું
  mobileMenu.querySelectorAll("a, button").forEach(item => {
    item.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

// ૩. WhatsApp મોડલ વિન્ડો (૩ માલિકો સાથે વાતચીત માટે)
const waModal = document.getElementById("wa-modal");
const modalOwnersList = document.getElementById("modal-owners");

function openModal(customMsg) {
  const messageText = customMsg || DEFAULT_WA_MSG;
  const encodedMsg = encodeURIComponent(messageText);

  if (modalOwnersList) {
    modalOwnersList.innerHTML = "";
    owners.forEach(owner => {
      const card = document.createElement("a");
      card.className = "modal-owner-card";
      card.href = `https://wa.me/${owner.phone}?text=${encodedMsg}`;
      card.target = "_blank";
      card.rel = "noopener";
      card.setAttribute("aria-label", `${owner.name} સાથે WhatsApp પર ચેટ કરો`);
      card.innerHTML = `
        <div class="modal-owner-info">
          <div class="modal-owner-title">${owner.name}</div>
          <div class="modal-owner-num">${owner.display}</div>
        </div>
        <div class="modal-owner-badge">
          <span>💬</span> ચેટ કરો
        </div>
      `;
      modalOwnersList.appendChild(card);
    });
  }

  if (waModal) {
    waModal.classList.add("active");
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  if (waModal) {
    waModal.classList.remove("active");
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";
  }
}

function onModalBgClick(e) {
  if (e.target === waModal) {
    closeModal();
  }
}

// Escape કી દબાવવાથી મોડલ બંધ કરવું
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && waModal && waModal.classList.contains("active")) {
    closeModal();
  }
});

// ૪. પ્રોડક્ટ કેટલોગ રેન્ડરિંગ (PRD ના તમામ નિયમો સાથે)
const productsGrid = document.getElementById("products-grid");
const filterBtns = document.querySelectorAll(".filter-btn");

function renderProducts(category) {
  if (!productsGrid || typeof products === "undefined") return;

  // ગ્રીડ ખાલી કરીને એનિમેશન આપવું
  productsGrid.innerHTML = "";
  const filtered = category === "all" ? products : products.filter(p => p.category === category);

  filtered.forEach(p => {
    const card = document.createElement("article");
    card.className = "product-card animate-card";

    // જાતોની ચિપ્સ (Varieties)
    let varietiesHtml = "";
    if (p.varieties && p.varieties.length > 0) {
      varietiesHtml = `
        <div class="product-section-label">ઉપલબ્ધ જાતો:</div>
        <div class="variety-chips">
          ${p.varieties.map(v => `<span class="variety-chip">${v}</span>`).join("")}
        </div>
      `;
    }

    // પેકિંગ સાઇઝ ચિપ્સ (Pack sizes)
    let packSizesHtml = "";
    if (p.sizes && p.sizes.length > 0) {
      packSizesHtml = `
        <div class="product-section-label">પેકિંગ સાઇઝ:</div>
        <div class="pack-size-chips">
          ${p.sizes.map(s => `<span class="pack-chip">${s}</span>`).join("")}
        </div>
      `;
    }

    // સોનેરી જથ્થાબંધ બેજ
    const bulkBadgeHtml = p.bulk ? `<span class="bulk-badge" title="જથ્થાબંધ ઓર્ડર ઉપલબ્ધ">જથ્થાબંધ ઉપલબ્ધ</span>` : "";

    card.innerHTML = `
      <div class="product-img-wrapper">
        <img src="${p.image}" alt="${p.name} - જય માડી મસાલા" class="product-real-img" loading="lazy" width="400" height="250" />
        ${bulkBadgeHtml}
      </div>
      <div class="product-content">
        <h3 class="product-title">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        ${varietiesHtml}
        ${packSizesHtml}
        <div class="price-notice">
          <span>ℹ️</span> ભાવ અને ઓર્ડર માટે WhatsApp સંપર્ક કરો
        </div>
      </div>
    `;

    productsGrid.appendChild(card);
  });
}

// ફિલ્ટર બટન ઇવેન્ટ્સ
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    renderProducts(btn.dataset.cat);
  });
});

// ૫. પૂછપરછ ફોર્મ સબમિટ અને વાલિડેશન
const inquiryForm = document.getElementById("inquiry-form");
if (inquiryForm) {
  const nameInput = document.getElementById("f-name");
  const phoneInput = document.getElementById("f-phone");
  const errName = document.getElementById("err-name");
  const errPhone = document.getElementById("err-phone");

  // રીઅલ-ટાઇમ ક્લીયરિંગ
  if (nameInput && errName) {
    nameInput.addEventListener("input", () => {
      if (nameInput.value.trim().length >= 2) {
        errName.textContent = "";
        nameInput.classList.remove("input-error");
      }
    });
  }

  if (phoneInput && errPhone) {
    phoneInput.addEventListener("input", () => {
      const cleanPhone = phoneInput.value.replace(/\D/g, "");
      if (/^[6-9]\d{9}$/.test(cleanPhone)) {
        errPhone.textContent = "";
        phoneInput.classList.remove("input-error");
      }
    });
  }

  inquiryForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;
    const nameVal = nameInput ? nameInput.value.trim() : "";
    const rawPhone = phoneInput ? phoneInput.value.trim() : "";
    const cleanPhone = rawPhone.replace(/\D/g, "");

    // નામ વાલિડેશન
    if (!nameVal || nameVal.length < 2) {
      if (errName) errName.textContent = "કૃપા કરીને આપનું સાચું પૂરું નામ લખો.";
      if (nameInput) nameInput.classList.add("input-error");
      isValid = false;
    } else {
      if (errName) errName.textContent = "";
      if (nameInput) nameInput.classList.remove("input-error");
    }

    // ફોન વાલિડેશન (૧૦ અંકનો ભારતીય મોબાઇલ નંબર)
    if (!cleanPhone || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      if (errPhone) errPhone.textContent = "કૃપા કરીને માન્ય ૧૦ અંકનો મોબાઈલ નંબર દાખલ કરો.";
      if (phoneInput) phoneInput.classList.add("input-error");
      isValid = false;
    } else {
      if (errPhone) errPhone.textContent = "";
      if (phoneInput) phoneInput.classList.remove("input-error");
    }

    if (!isValid) {
      return;
    }

    const cityVal = document.getElementById("f-city")?.value.trim() || "ઉલ્લેખ નથી";
    const productVal = document.getElementById("f-product")?.value || "સામાન્ય પૂછપરછ";
    const qtyVal = document.getElementById("f-qty")?.value.trim() || "જરૂરિયાત મુજબ";
    const typeVal = document.getElementById("f-type")?.value || "ઘરગથ્થુ (રિટેલ)";

    const formattedMessage =
      `🙏 નમસ્તે જય માડી મસાલા!\n` +
      `નવી ઓનલાઇન પૂછપરછ:\n\n` +
      `👤 નામ: ${nameVal}\n` +
      `📞 મોબાઈલ: ${cleanPhone}\n` +
      `📍 ગામ/શહેર: ${cityVal}\n` +
      `🌶️ મસાલો: ${productVal}\n` +
      `⚖️ અંદાજે જથ્થો: ${qtyVal}\n` +
      `📦 પ્રકાર: ${typeVal}\n\n` +
      `કૃપા કરીને વિગત અને ભાવ જણાવશો.`;

    // ફોર્મ સબમિટ થયા પછી ૩-ઓનર મોડલ ખોલવું અને આ કસ્ટમ મેસેજ સાથે જોડવું
    openModal(formattedMessage);
  });
}

// ૬. પેજ લોડ વખતે પ્રારંભિક સેટઅપ
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("all");
});
