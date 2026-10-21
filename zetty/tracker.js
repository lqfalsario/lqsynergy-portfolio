(() => {
  // Fictional content. No real people, organizations, private contact data, or claimed metrics.
  const examples = [
    {company:'Example Court Club',segment:'Sports & Recreation',role:'Club Owner',fit:'Strong match',status:'verified',next:'Prepare personalized introduction'},
    {company:'Demo Sports Retail',segment:'Retail',role:'Buying Manager',fit:'Potential match',status:'researching',next:'Review public business information'},
    {company:'Sample Events Group',segment:'Events',role:'Event Director',fit:'Strong match',status:'followup',next:'Schedule next outreach step'},
    {company:'Illustrative Coaching Co.',segment:'Sports Coaching',role:'Founder',fit:'Strong match',status:'verified',next:'Add campaign segment'},
    {company:'Example Partner Network',segment:'Partnerships',role:'Partnerships Lead',fit:'Potential match',status:'researching',next:'Confirm target account criteria'},
    {company:'Demo Wellness Store',segment:'Consumer Retail',role:'Business Owner',fit:'Strong match',status:'followup',next:'Review conversation history'},
    {company:'Sample Local League',segment:'Sports Community',role:'League Organizer',fit:'Potential match',status:'researching',next:'Check website for role information'}
  ];
  const table = document.getElementById('lead-rows');
  const summary = document.getElementById('row-summary');
  const filters = [...document.querySelectorAll('[data-filter]')];
  const labels = {verified:'Verified (demo)',researching:'Researching (demo)',followup:'Follow-up (demo)'};
  let currentFilter = 'all';
  const textCell = (row,value) => {
    const td = document.createElement('td');td.textContent=value;row.appendChild(td);return td;
  };
  const render = () => {
    if (!table) return;
    const data = examples.filter(r => currentFilter==='all'||r.status===currentFilter);
    table.replaceChildren();
    data.forEach(lead => {
      const tr = document.createElement('tr');
      textCell(tr,lead.company);textCell(tr,lead.segment);textCell(tr,lead.role);textCell(tr,lead.fit);
      const statusTD = document.createElement('td');const badge = document.createElement('span');badge.className='status-pill '+lead.status;badge.textContent=labels[lead.status];statusTD.appendChild(badge);tr.appendChild(statusTD);
      textCell(tr,lead.next);table.appendChild(tr);
    });
    if(summary) summary.textContent = `Showing ${data.length} of ${examples.length} fictional example records`;
    filters.forEach(btn=>{const active=btn.dataset.filter===currentFilter;btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active));});
  };
  filters.forEach(btn=>btn.addEventListener('click',()=>{currentFilter=btn.dataset.filter;render();}));
  const csvButton=document.getElementById('download-csv');
  if(csvButton)csvButton.addEventListener('click',()=>{
    const heads=['Example Account','Segment','Target Role','ICP Fit','Research Status','Next Step','Source URL','Verification Date','Notes'];
    const rows=[heads,...examples.map(r=>[r.company,r.segment,r.role,r.fit,labels[r.status],r.next,'','','FICTIONAL DEMONSTRATION'])];
    const contents='\uFEFF'+rows.map(row=>row.map(cell=>'"'+String(cell).replace(/"/g,'""')+'"').join(',')).join('\r\n');
    const blob=new Blob([contents],{type:'text/csv;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='zetty-fictional-lead-tracker-sample.csv';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
  render();
})();