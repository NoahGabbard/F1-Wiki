document.addEventListener('DOMContentLoaded', () => {
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const driverName = getQueryParam('name');
  const profileDiv = document.getElementById('driver-profile');
  const headerH1 = document.querySelector('header h1');

  if (!driverName) {
    profileDiv.innerHTML = '<p style="color:#e10600; text-align:center;">No driver specified.</p>';
    if (headerH1) headerH1.textContent = 'Driver Profile';
  } else {
    profileDiv.innerHTML = '<p style="text-align:center;">Loading driver info...</p>';
    if (headerH1) headerH1.textContent = driverName;

    fetch(`/api/driver?name=${encodeURIComponent(driverName)}`)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(driver => {
        if (!driver || Object.keys(driver).length === 0) {
          profileDiv.innerHTML = `<p style="color:#e10600; text-align:center;">No data found for ${driverName}.</p>`;
          return;
        }
        const fullName = driver.full_name || driverName || 'N/A';
        const driverNumber = driver.driver_number || 'N/A';
        const team = driver.team_name || 'N/A';
        const countryCode = driver.country_code || 'N/A';
        const defaultHeadshot = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';
        const headshot = driver.headshot_url && driver.headshot_url.trim() !== '' ? driver.headshot_url : defaultHeadshot;
        if (headerH1) headerH1.textContent = fullName;
        profileDiv.innerHTML = `
          <div class="team" style="max-width:400px;margin:2rem auto;">
            <h2 style="text-align:center;">${fullName}</h2>
            <div style='text-align:center;'><img src='${headshot}' alt='${fullName} headshot' style='max-width:150px;max-height:150px;border-radius:50%;margin:1rem auto;display:block;'/></div>
            <p><strong>Number:</strong> ${driverNumber}</p>
            <p><strong>Team:</strong> ${team}</p>
            <p><strong>Country:</strong> ${countryCode}</p>
          </div>
        `;
      })
      .catch(err => {
        profileDiv.innerHTML = `<p style="color:#e10600; text-align:center;">Error loading driver info.</p>`;
        console.error(err);
      });
  }
});
