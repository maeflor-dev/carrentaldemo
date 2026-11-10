/* ================================================================= */
/* ROADMATE CAR RENTAL - 2026 INTERACTIVE SCRIPT                     */
/* ================================================================= */

// 1. CENTRAL FLEET DATA OBJECT
const fleetData = [
  {
    id: "compact-1",
    name: "Compact Hatchback",
    type: "compact",
    price: 1500,
    seats: 4,
    transmission: "Automatic",
    fuel: "Gasoline",
    bags: 2,
    photos: ["/assets/images/compact1.JPG", "/assets/images/compact2.JPG"],
    description: "An agile and fuel-efficient hatchback perfect for navigating busy city streets and narrow alleyways with ease.",
    features: ["Air Conditioning", "Bluetooth Audio", "Reverse Sensors", "Power Steering", "ABS Brakes"],
    included: ["Comprehensive Insurance", "24/7 Roadside Assistance", "Basic Tool Kit"],
    requirements: ["Valid Driver's License", "1 Valid Government ID", "PHP 3,000 Refundable Security Deposit"]
  },
  {
    id: "sedan-1",
    name: "City Sedan",
    type: "sedan",
    price: 1900,
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    bags: 3,
    photos: ["/assets/images/sedan1.JPG", "/assets/images/sedan2.JPG", "/assets/images/sedan3.JPG"],
    description: "A reliable and comfortable city sedan offering smooth performance and ample trunk room for daily commuting or weekend getaways.",
    features: ["Air Conditioning", "Apple CarPlay & Android Auto", "Backup Camera", "Keyless Entry", "Dual Airbags"],
    included: ["Comprehensive Insurance", "24/7 Roadside Assistance", "Spare Tire"],
    requirements: ["Valid Driver's License", "2 Government IDs", "PHP 4,000 Refundable Security Deposit"]
  },
  {
    id: "sedan-2",
    name: "Comfort Sedan",
    type: "sedan",
    price: 2300,
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    bags: 3,
    photos: ["/assets/images/csedan1.JPG", "/assets/images/csedan2.JPG", "/assets/images/csedan3.JPG"],
    description: "Step up your travel comfort with refined cabin insulation, premium seating materials, and enhanced legroom.",
    features: ["Automatic Climate Control", "Leather-trimmed Seats", "Touchscreen Infotainment", "Cruise Control", "Parking Sensors"],
    included: ["Comprehensive Insurance", "24/7 Roadside Assistance", "Free Additional Driver"],
    requirements: ["Valid Driver's License", "2 Government IDs", "PHP 5,000 Refundable Security Deposit"]
  },
  {
    id: "suv-1",
    name: "Compact SUV",
    type: "suv",
    price: 2800,
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    bags: 4,
    photos: ["/assets/images/compactsuv.JPG", "/assets/images/compactsuv1.JPG", "/assets/images/suv-1-interior.webp"],
    description: "High-riding versatility with robust diesel torque. Ideal for tackling rugged provincial terrain or carrying extra gear.",
    features: ["High Ground Clearance", "Turbo Diesel Engine", "Touchscreen Display", "Roof Rails", "Rear Air Vents"],
    included: ["Comprehensive Insurance", "24/7 Roadside Assistance", "Tire Repair Kit"],
    requirements: ["Valid Driver's License", "2 Government IDs", "PHP 6,000 Refundable Security Deposit"]
  },
  {
    id: "suv-2",
    name: "Family SUV",
    type: "suv",
    price: 3500,
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    bags: 5,
    photos: ["/assets/images/suv-2-front.webp", "/assets/images/suv2.JPG"],
    description: "Spacious 7-seater SUV designed for family adventures and road trips across Cebu's scenic coastal highways.",
    features: ["7-Seater Configuration", "Tri-Zone Climate Control", "All-Wheel Drive", "Multiple USB Ports", "Advanced Safety Suite"],
    included: ["Comprehensive Insurance", "24/7 Roadside Assistance", "Child Seat (Upon Request)"],
    requirements: ["Valid Driver's License", "2 Government IDs", "PHP 7,000 Refundable Security Deposit"]
  },
  {
    id: "van-1",
    name: "Passenger Van",
    type: "van",
    price: 4200,
    seats: 12,
    transmission: "Manual",
    fuel: "Diesel",
    bags: 8,
    photos: ["/assets/images/passengervan.JPG", "/assets/images/passengervan1.JPG", "/assets/images/van-1-interior.webp"],
    description: "Maximum seating capacity for large tour groups, corporate outings, or family reunions. Spacious and dependable.",
    features: ["12 Individual Seats", "Individual Ceiling AC Vents", "Ample Luggage Space", "Power Windows", "Aux/Bluetooth Stereo"],
    included: ["Commercial Insurance", "24/7 Roadside Assistance"],
    requirements: ["Professional Driver's License (Restriction 2/3)", "2 Government IDs", "PHP 10,000 Refundable Security Deposit"]
  },
  {
    id: "pickup-1",
    name: "Pickup Truck",
    type: "pickup",
    price: 3200,
    seats: 5,
    transmission: "Manual",
    fuel: "Diesel",
    bags: 4,
    photos: ["/assets/images/pickuptruck.JPG", "/assets/images/pickup2.JPG"],
    description: "Rugged cargo bed capacity combined with dual-cab passenger comfort. Built for heavy hauling and rough roads.",
    features: ["Heavy-duty Bed Liner", "4WD Capability", "High Towing Capacity", "Heavy Suspension", "All-Terrain Tires"],
    included: ["Comprehensive Insurance", "24/7 Roadside Assistance"],
    requirements: ["Valid Driver's License", "2 Government IDs", "PHP 7,000 Refundable Security Deposit"]
  },
  {
    id: "luxury-1",
    name: "Executive Sedan",
    type: "luxury",
    price: 5500,
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    bags: 3,
    photos: ["/assets/images/excutedsedan.JPG", "/assets/images/luxury-1-interior.webp"],
    description: "First-class travel experience featuring premium leather upholstery, smooth ride tuning, and high-end executive styling.",
    features: ["Premium Sound System", "Ambient Cabin Lighting", "Panoramic Sunroof", "Ventilated Leather Seats", "Adaptive Cruise Control"],
    included: ["VIP Comprehensive Insurance", "24/7 Dedicated Concierge Support", "Chauffeur Option Available"],
    requirements: ["Valid Driver's License", "2 Government IDs", "PHP 15,000 Refundable Security Deposit"]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  
  // 2. THEME TOGGLE SWITCH (Luxury dark palette by default)
  const themeToggleBtn = document.getElementById("theme-toggle");

  document.documentElement.setAttribute("data-theme", "dark");
  if (themeToggleBtn) themeToggleBtn.innerHTML = getSunIcon();

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        themeToggleBtn.innerHTML = getMoonIcon();
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        themeToggleBtn.innerHTML = getSunIcon();
      }
    });
  }

  // 3. NAVIGATION & MOBILE HAMBURGER TOGGLE
  const hamburger = document.querySelector(".hamburger");
  const mainNav = document.querySelector(".main-nav");

  if (hamburger && mainNav) {
    hamburger.addEventListener("click", () => {
      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", !expanded);
      mainNav.classList.toggle("open");
    });
  }

  // Highlight Active Navigation Link
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // 4. INTERSECTION OBSERVER SCROLL REVEAL (Fade-up with blur-to-sharp)
  const revealElements = document.querySelectorAll(".card, .bento-card, .section-header");
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.style.filter = "blur(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    // Check user preference for reduced motion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "0";
      el.style.transform = "translateY(25px)";
      el.style.filter = "blur(4px)";
      el.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
    }
    revealObserver.observe(el);
  });

  // 5. STATS NUMBER COUNT-UP ANIMATION
  const statNumbers = document.querySelectorAll(".stat-number");
  if (statNumbers.length > 0) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const endValue = parseInt(target.getAttribute("data-target")) || 100;
          let startValue = 0;
          let duration = 2000;
          let stepTime = Math.abs(Math.floor(duration / endValue));
          
          let timer = setInterval(() => {
            startValue += Math.ceil(endValue / 50);
            if (startValue >= endValue) {
              startValue = endValue;
              clearInterval(timer);
            }
            target.textContent = startValue.toLocaleString() + (target.hasAttribute("data-plus") ? "+" : "");
          }, stepTime);

          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => statsObserver.observe(stat));
  }

  // 6. FLEET PAGE RENDERING & FILTERING
  const fleetGrid = document.getElementById("fleet-grid");
  if (fleetGrid) {
    renderFleet(fleetData);

    const typeFilter = document.getElementById("filter-type");
    const sortFilter = document.getElementById("sort-price");

    const filterAndSort = () => {
      let filtered = [...fleetData];
      const selectedType = typeFilter ? typeFilter.value : "all";
      const selectedSort = sortFilter ? sortFilter.value : "default";

      if (selectedType !== "all") {
        filtered = filtered.filter(car => car.type === selectedType);
      }

      if (selectedSort === "low-high") {
        filtered.sort((a, b) => a.price - b.price);
      } else if (selectedSort === "high-low") {
        filtered.sort((a, b) => b.price - a.price);
      }

      renderFleet(filtered);
    };

    if (typeFilter) typeFilter.addEventListener("change", filterAndSort);
    if (sortFilter) sortFilter.addEventListener("change", filterAndSort);
  }

  // 7. CAR DETAILS PAGE & CALCULATOR
  const carDetailsContainer = document.getElementById("car-details-container");
  if (carDetailsContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get("car") || "sedan-1";
    const car = fleetData.find(c => c.id === carId) || fleetData[1];
    renderCarDetails(car);
  }

  // 8. ACCORDION COMPONENT
  const accordionButtons = document.querySelectorAll(".faq-trigger");
  accordionButtons.forEach(button => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      const contentId = button.getAttribute("aria-controls");
      const content = document.getElementById(contentId);

      accordionButtons.forEach(btn => btn.setAttribute("aria-expanded", "false"));
      document.querySelectorAll(".faq-panel").forEach(panel => panel.style.display = "none");

      if (!expanded) {
        button.setAttribute("aria-expanded", "true");
        if (content) content.style.display = "block";
      }
    });
  });

  // 9. BOOKING FORM & QUOTE SIMULATIONS
  setupBookingWizard();
  setupSimulatedForms();
});

// Helper SVG Icons for Theme Toggle
function getSunIcon() {
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
}

function getMoonIcon() {
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
}

function renderFleet(cars) {
  const fleetGrid = document.getElementById("fleet-grid");
  if (!fleetGrid) return;

  if (cars.length === 0) {
    fleetGrid.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; padding: 40px;">No vehicles found matching your criteria.</p>`;
    return;
  }

  fleetGrid.innerHTML = cars.map(car => `
    <div class="card" onclick="window.location.href='car-details.html?car=${car.id}'">
      <div class="card-img-wrapper">
        <img src="${car.photos[0]}" alt="${car.name}" class="card-img" width="1000" height="667" loading="lazy">
      </div>
      <div class="card-body">
        <h3>${car.name}</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px;">
          PHP ${car.price.toLocaleString()} / day &bull; ${car.seats} Seats &bull; ${car.transmission}
        </p>
        <div class="card-actions">
          <a href="car-details.html?car=${car.id}" class="btn btn-secondary">View Details</a>
          <a href="booking.html?car=${car.id}" class="btn" onclick="event.stopPropagation()">Book Now</a>
        </div>
      </div>
    </div>
  `).join("");
}

function renderCarDetails(car) {
  const container = document.getElementById("car-details-container");
  if (!container) return;

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; align-items: start;">
      <div>
        <div style="margin-bottom: 16px; border-radius: var(--radius-img); overflow: hidden; background: var(--surface-alt);">
          <img id="active-gallery-img" src="${car.photos[0]}" alt="${car.name}" style="width: 100%; height: 380px; object-fit: cover;" width="1600" height="1067">
        </div>
        <div style="display: flex; gap: 10px;">
          ${car.photos.map((photo, index) => `
            <img src="${photo}" alt="${car.name} thumbnail ${index + 1}" class="thumb-img" style="width: 80px; height: 60px; object-fit: cover; border-radius: 12px; cursor: pointer; border: 2px solid ${index === 0 ? 'var(--color-accent)' : 'transparent'};" onclick="switchGalleryImage('${photo}', this)">
          `).join("")}
        </div>
      </div>
      <div>
        <span class="section-tag">${car.type} Category</span>
        <h1 style="margin-top: 8px; margin-bottom: 12px;">${car.name}</h1>
        <p style="font-size: 2rem; font-weight: 800; color: var(--color-accent-text); background: var(--color-accent); display: inline-block; padding: 6px 16px; border-radius: var(--radius-pill); margin-bottom: 20px;">PHP ${car.price.toLocaleString()} <span style="font-size: 1rem; font-weight: normal;">/ day</span></p>
        <p style="margin-bottom: 24px;">${car.description}</p>
        
        <div style="background: var(--surface-alt); padding: 24px; border-radius: var(--radius-card); margin-bottom: 24px;">
          <h3 style="font-size: 1.1rem; margin-bottom: 12px;">Specifications</h3>
          <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.95rem;">
            <li><strong>Seats:</strong> ${car.seats} persons</li>
            <li><strong>Transmission:</strong> ${car.transmission}</li>
            <li><strong>Fuel Type:</strong> ${car.fuel}</li>
            <li><strong>Luggage:</strong> ${car.bags} bags</li>
          </ul>
        </div>

        <a href="booking.html?car=${car.id}" class="btn" style="width: 100%;">Book This Vehicle Now</a>
      </div>
    </div>
  `;
}

function switchGalleryImage(photoSrc, thumbElement) {
  const activeImg = document.getElementById("active-gallery-img");
  if (activeImg) activeImg.src = photoSrc;

  document.querySelectorAll(".thumb-img").forEach(t => t.style.border = "2px solid transparent");
  if (thumbElement) thumbElement.style.border = "2px solid var(--color-accent)";
}

function setupBookingWizard() {
  const bookingForm = document.getElementById("booking-form");
  if (!bookingForm) return;

  let currentStep = 1;
  const bookingCarSelect = document.getElementById("booking-car");

  if (bookingCarSelect && typeof fleetData !== "undefined") {
    bookingCarSelect.innerHTML = fleetData.map(car => 
      `<option value="${car.id}" data-price="${car.price}">${car.name} (PHP ${car.price.toLocaleString()}/day)</option>`
    ).join("");

    const urlParams = new URLSearchParams(window.location.search);
    const preCar = urlParams.get("car");
    if (preCar) bookingCarSelect.value = preCar;
    updateBookingSummary();
    bookingCarSelect.addEventListener("change", updateBookingSummary);
  }

  window.nextStep = (step) => {
    const activeStepEl = document.getElementById(`step-${currentStep}`);
    const inputs = activeStepEl.querySelectorAll("input[required], select[required]");
    let valid = true;
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        input.reportValidity();
        valid = false;
      }
    });

    if (!valid) return;

    if (step > currentStep && currentStep < 4) {
      document.getElementById(`step-${currentStep}`).style.display = "none";
      currentStep = step;
      document.getElementById(`step-${currentStep}`).style.display = "block";
      updateProgressIndicator(currentStep);
      if (currentStep === 4) updateBookingSummary();
    }
  };

  window.prevStep = (step) => {
    if (step < currentStep && currentStep > 1) {
      document.getElementById(`step-${currentStep}`).style.display = "none";
      currentStep = step;
      document.getElementById(`step-${currentStep}`).style.display = "block";
      updateProgressIndicator(currentStep);
    }
  };

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const refNumber = "RM-" + Math.floor(100000 + Math.random() * 900000);
    bookingForm.style.display = "none";
    const confirmationBox = document.getElementById("booking-confirmation");
    if (confirmationBox) {
      confirmationBox.style.display = "block";
      document.getElementById("ref-code").textContent = refNumber;
    }
  });
}

function updateProgressIndicator(step) {
  const progress = document.querySelector(".booking-progress");
  const fill = document.querySelector(".booking-progress__fill");
  const car = document.querySelector(".booking-progress__car");
  const progressPercent = ((step - 1) / 3) * 100;

  if (fill) fill.style.width = `${progressPercent}%`;
  if (car) car.style.left = `${progressPercent}%`;

  for (let i = 1; i <= 4; i++) {
    const indicator = document.getElementById(`indicator-${i}`);
    if (indicator) {
      indicator.classList.toggle("is-current", i === step);
      indicator.classList.toggle("is-complete", i < step);
      if (i === step) indicator.setAttribute("aria-current", "step");
      else indicator.removeAttribute("aria-current");
    }
  }
}

function updateBookingSummary() {
  const carSelect = document.getElementById("booking-car");
  const pickupDateInput = document.getElementById("book-pickup-date");
  const returnDateInput = document.getElementById("book-return-date");
  
  if (!carSelect) return;

  const selectedOption = carSelect.options[carSelect.selectedIndex];
  const carName = selectedOption ? selectedOption.text : "";
  const dailyPrice = selectedOption ? parseInt(selectedOption.getAttribute("data-price")) || 0 : 0;

  const pDate = pickupDateInput ? pickupDateInput.value : "Not selected";
  const rDate = returnDateInput ? returnDateInput.value : "Not selected";

  let days = 1;
  if (pickupDateInput && returnDateInput && pickupDateInput.value && returnDateInput.value) {
    const d1 = new Date(pickupDateInput.value);
    const d2 = new Date(returnDateInput.value);
    const diffTime = Math.abs(d2 - d1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 0) days = diffDays;
  }

  const total = dailyPrice * days;

  if (document.getElementById("sum-car")) document.getElementById("sum-car").textContent = carName;
  if (document.getElementById("sum-dates")) document.getElementById("sum-dates").textContent = `${pDate} to ${rDate} (${days} day${days > 1 ? 's' : ''})`;
  if (document.getElementById("sum-total")) document.getElementById("sum-total").textContent = `PHP ${total.toLocaleString()}`;
}

function setupSimulatedForms() {
  ["quote-form", "contact-form", "career-form"].forEach(formId => {
    const form = document.getElementById(formId);
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const feedback = form.querySelector("[id$='success'], [id$='feedback']");
        if (feedback) {
          feedback.style.display = "block";
          form.reset();
        } else {
          alert("Submission successful (simulation demo).");
          form.reset();
        }
      });
    }
  });
}