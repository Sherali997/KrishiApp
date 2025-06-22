function navigate(page) {
    const content = document.getElementById("page-content");
  
    switch(page) {
      case 'home':
        content.innerHTML = `
          <h2>স্বাগতম!</h2>
          <p>আপনার ফসলের সুস্থতা নিশ্চিত করতে কৃষি-বন্ধন ব্যবহার করুন।</p>
          <ul>
            <li>📷 রোগ শনাক্তকরণ</li>
            <li>📝 জল ও সার প্রয়োগের রেকর্ড</li>
            <li>🌾 কৃষি নির্দেশনা ও পরামর্শ</li>
          </ul>
        `;
        break;
      case 'diagnose':
        content.innerHTML = `
          <h2>📷 রোগ নির্ণয়</h2>
          <p>ফসলের পাতা বা গাছের ছবি তুলে রোগ শনাক্ত করুন।</p>
          <input type="file" accept="image/*" onchange="previewImage(event)" />
          <div id="image-preview"></div>
        `;
        break;
      case 'activity':
        content.innerHTML = `
          <h2>📝 কার্যকলাপ লগ</h2>
          <p>জল, সার বা কীটনাশক প্রয়োগের তথ্য রেকর্ড করুন।</p>
          <label>কার্যকলাপ:</label>
          <input type="text" placeholder="যেমনঃ জল দেওয়া" id="activity-input" />
          <button onclick="logActivity()">লগ করুন</button>
          <ul id="activity-list"></ul>
        `;
        break;
      case 'guidance':
        content.innerHTML = `
          <h2>🌾 কৃষি নির্দেশিকা</h2>
          <p>আপনার অঞ্চলের জন্য উপযুক্ত কৃষি পরামর্শ এবং জৈব পদ্ধতি জানতে এখানে দেখুন।</p>
          <ul>
            <li>✅ জৈব সার ব্যবহার করুন</li>
            <li>✅ সকাল বেলা জল দিন</li>
            <li>✅ রোগ দেখা দিলে দেরি না করে শনাক্ত করুন</li>
          </ul>
        `;
        break;
      default:
        content.innerHTML = `<h2>স্বাগতম!</h2><p>একটি অপশন বেছে নিন।</p>`;
    }
  }
  
  function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      const preview = document.getElementById("image-preview");
      preview.innerHTML = `<img src="${reader.result}" alt="Uploaded Image" style="max-width:100%; margin-top:1rem;" />`;
    };
    if (file) reader.readAsDataURL(file);
  }
  
  function logActivity() {
    const input = document.getElementById("activity-input");
    const value = input.value.trim();
    if (value) {
      const list = document.getElementById("activity-list");
      const item = document.createElement("li");
      item.textContent = value;
      list.appendChild(item);
      input.value = "";
    }
  }
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(() => console.log('✅ Service Worker Registered'))
      .catch(err => console.error('❌ Service Worker Failed', err));
  }
  